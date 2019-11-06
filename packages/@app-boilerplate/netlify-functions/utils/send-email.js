import Mailgun from 'mailgun-js'

const mailgun = Mailgun({
	apiKey: process.env.MAILGUN_API_KEY,
	domain: process.env.MAILGUN_DOMAIN,
})

export default async function sendEmail(data) {
	return new Promise((resolve, reject) => {
		mailgun.messages().send(data, (error, body) => {
			if (error) reject(error)
			else resolve(body)
		})
	})
}
