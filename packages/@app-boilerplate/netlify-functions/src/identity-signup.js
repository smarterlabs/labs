const cmsEmailWhitelist = [
	`smarterlabs.com`,
]

export async function handler({ body }){
	const {
		user: {
			email,
			app_metadata: {
				roles,
			},
		},
	} = JSON.parse(body)
	if(roles.indexOf(`admin`) > -1){
		console.log(`Already has admin role`)
		return {
			statusCode: 200,
		}
	}
	console.log(`${email} signing up`)
	const domain = email.split(`@`)[1]
	let res = ``
	let statusCode = 400
	if(
		cmsEmailWhitelist.indexOf(domain) !== -1 ||
		cmsEmailWhitelist.indexOf(email) !== -1
	){
		console.log(`Whitelisting`)
		statusCode = 200
		res = JSON.stringify({
			app_metadata: {
				roles: [`admin`],
			},
		})
	}
	else{
		console.log(`Blocking`)
	}
	return {
		statusCode,
		body: res,
	}
}
