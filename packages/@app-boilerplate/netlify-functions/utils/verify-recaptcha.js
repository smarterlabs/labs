import Recaptcha from 'recaptcha-verify'

const recaptcha = new Recaptcha({
	secret: process.env.SITE_RECAPTCHA_SECRET,
	verbose: true,
})

export default function verifyRecaptcha(token) {
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
