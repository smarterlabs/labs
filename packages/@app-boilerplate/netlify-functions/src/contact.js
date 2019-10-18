import verifyRecaptcha from '../utils/verify-recaptcha'
import sendEmail from '../utils/send-email'

const allowed = [
	`name`,
	`email`,
	`message`,
]
const required = [
	`name`,
	`email`,
	`message`,
]
const to = `kennedyianrose@gmail.com`
const subject = `Contact Form Submission`

export async function handler({ body }){

	try{
		const input = JSON.parse(body)

		// Validate user input
		for(let i = 0; i < required.length; i++){
			const name = required[i]
			if (!(name in input)) {
				return {
					statusCode: 400,
					body: JSON.stringify({
						success: false,
						message: `Missing required fields. Form could not be submit.`,
					}),
				}
			}
		}

		// Filter to only accepted values
		const data = {}
		for(let i in input){
			if (allowed.indexOf(i) > -1) {
				data[i] = input[i]
			}
		}

		// Validate recaptcha
		const recaptchaResponse = await verifyRecaptcha(input.recaptcha)
		if (!recaptchaResponse.success) {
			return {
				statusCode: 400,
				body: JSON.stringify({
					success: false,
					message: `reCAPTCHA error. Form could not be submit.`,
				}),
			}
		}

		await sendEmail({
			from: data.email,
			to,
			subject,
			text: JSON.stringify(data, null, 3),
		})

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true }),
		}
	}
	catch(err){
		console.error(err)
		return {
			statusCode: 400,
			body: JSON.stringify({
				success: false,
				message: `Server error. Form could not be submit.`,
			}),
		}
	}
}
