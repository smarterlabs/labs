import { promisify } from 'util'
import verify from 'auth0-verify'
import { ManagementClient } from 'auth0'
import {
	GATSBY_AUTH0_DOMAIN,
	GATSBY_AUTH0_CLIENTID,
	AUTH0_CLIENTSECRET,
} from '@utils/env'

const allowedProperties = [
	`email`,
	`phone_number`,
	`user_metadata`,
	`given_name`,
	`family-name`,
	`name`,
	`nickname`,
	`picture`,
	`username`,
]

function filterObj(input){
	const output = {}
	allowedProperties.forEach(key => {
		if(key in input){
			output[key] = input[key]
		}
	})
	return output
}

const auth0 = new ManagementClient({
	grant_type: `client_credentials`,
	domain: GATSBY_AUTH0_DOMAIN,
	clientId: GATSBY_AUTH0_CLIENTID,
	clientSecret: AUTH0_CLIENTSECRET,
	scope: `read:users update:users`,
	audience: `https://${GATSBY_AUTH0_DOMAIN}/api/v2/`,
	tokenProvider: {
		enableCache: true,
		cacheTTLInSeconds: 10,
	},

})
const updateUser = promisify(auth0.updateUser)
const sendEmailVerification = promisify(auth0.sendEmailVerification)

export async function handler(event) {
	const {
		body,
		headers: { authorization },
	} = event
	let verified
	try {
		verified = await verify(authorization, GATSBY_AUTH0_DOMAIN, GATSBY_AUTH0_CLIENTID)
		if(!verified){
			throw new Error(`Invalid token`)
		}
	}
	catch(err){
		console.error(err)
		return {
			statusCode: 403,
			body: JSON.stringify({ success: false }),
		}
	}
	// If verified
	try{

		const reqData = JSON.parse(body)
		console.log(`Received from client`, reqData)
		const filteredData = filterObj(reqData)
		if(filteredData.email === verified.email){
			delete filteredData.email
		}
		if (filteredData.email){
			filteredData.email_verified = false
		}


		const res = await updateUser({ id: verified.sub }, filteredData)
		console.log(`Received from server`, res)

		// Resend verification email if email has changed
		if (filteredData.email_verified === false){
			await sendEmailVerification({ user_id: verified.sub })
		}

		return {
			statusCode: 200,
			body: JSON.stringify({
				success: true,
				body: res,
			}),
		}


	}
	catch(err){
		console.error(err)
		return {
			statusCode: 500,
			body: JSON.stringify({ success: false }),
		}
	}
}
