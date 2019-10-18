import Mailgun from 'mailgun-js'
import {
	MAILGUN_API_KEY,
	MAILGUN_DOMAIN,
} from '@utils/env'
const mailgun = Mailgun({
	apiKey: MAILGUN_API_KEY,
	domain: MAILGUN_DOMAIN,
})

export default async function sendEmail(data) {
	return new Promise((resolve, reject) => {
		mailgun.messages().send(data, (error, body) => {
			if (error) reject(error)
			else resolve(body)
		})
	})
}
