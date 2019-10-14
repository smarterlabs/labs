import auth from './auth'

export default function changePassword(email) {
	return new Promise((resolve, reject) => {
		const options = {
			connection: `Username-Password-Authentication`,
			email,
		}
		auth.changePassword(options, (err, res) => {
			if (err) return reject(err)
			resolve(res)
		})
	})
}
