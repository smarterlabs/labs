import verify from 'auth0-verify'
import fetch from 'isomorphic-fetch'
import {
	GATSBY_AUTH0_DOMAIN,
	GATSBY_AUTH0_CLIENTID,
} from '@utils/env'

export async function handler({ headers: { authorization }}) {
	console.log(`GATSBY_AUTH0_DOMAIN`, GATSBY_AUTH0_DOMAIN)
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
		const req = await fetch(`https://${GATSBY_AUTH0_DOMAIN}/api/v2/users/${verified.sub}`, {
			method: `GET`,
			headers: {
				'content-type': `application/json`,
				authorization: `Bearer ${authorization}`,
			},
		})
		const res = await req.json()
		return {
			statusCode: 200,
			body: JSON.stringify({
				success: true,
				metadata: res.user_metadata,
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
