import Octokit from '@octokit/rest'
import { stringify } from 'yaml'
import md5 from 'md5'
import Recaptcha from 'recaptcha-verify'
import { gitHubRepo, gitHubOwner } from '../../config'
import {
	SITE_RECAPTCHA_SECRET,
	GITHUB_API_TOKEN,
} from '@utils/env'
const recaptcha = new Recaptcha({
	secret: SITE_RECAPTCHA_SECRET,
	verbose: true,
})

const allowed = [
	`name`,
	`email`,
	`comment`,
	`slug`,
]
const required = [
	`name`,
	`email`,
	`comment`,
	`slug`,
]

export async function handler({ body }){

	try{
		const input = JSON.parse(body)
		const data = {}

		// Validate user input
		for(let i = 0; i < required.length; i++){
			const name = required[i]
			if (!(name in input)) {
				return {
					statusCode: 200,
					body: JSON.stringify({
						success: false,
						message: `Missing required fields. Form could not be submit.`,
					}),
				}
			}
		}

		// Filter to only accepted values
		let comment = ``
		for(let i in input){
			if (allowed.indexOf(i) > -1) {
				if(i === `comment`){
					comment = input[i]
				}
				else {
					data[i] = input[i]
				}
			}
		}

		const recaptchaResponse = await verifyRecaptcha(input.recaptcha)
		if (!recaptchaResponse.success) {
			return {
				statusCode: 200,
				body: JSON.stringify({
					success: false,
					message: `reCAPTCHA error. Form could not be submit.`,
				}),
			}
		}

		// Add generated data
		const now = new Date()
		data.date = now.toISOString()
		data.published = false
		data.md5 = md5(data.email)

		// Change name to title for Netlify CMS
		data.title = data.name
		delete data.name

		const markdownData = `---\n${stringify(data)}---\n\n${comment}`

		const octokit = new Octokit({
			auth: `token ${GITHUB_API_TOKEN}`,
		})
		console.log(`Octokit authenticated...`)
		await octokit.repos.createOrUpdateFile({
			owner: gitHubOwner,
			repo: gitHubRepo,
			ref: `master`,
			path: `src/markdown/comments/${now.getTime()}.md`,
			message: `User generated comment`,
			content: Buffer.from(markdownData).toString(`base64`),
		})
		console.log(`File created in repo...`)
		return {
			statusCode: 200,
			body: JSON.stringify({ success: true }),
		}
	}
	catch(err){
		console.error(err)
		return {
			statusCode: 200,
			body: JSON.stringify({
				success: false,
				message: `Server error. Form could not be submit.`,
			}),
		}
	}
}

function verifyRecaptcha(token) {
	return new Promise((resolve, reject) => {
		recaptcha.checkResponse(token, (err, res) => {
			if (err) {
				reject(err)
			}
			else {
				resolve(res)
			}
		})
	})
}
