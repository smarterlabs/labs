export function handler(_, __, callback) {
	console.log(process.env)
	callback(null, {
		statusCode: 200,
		body: process.env.GATSBY_AUTH0_DOMAIN || `Not found`,
	})
}
