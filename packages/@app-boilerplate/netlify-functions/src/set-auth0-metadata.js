import verify from 'auth0-verify'
import fetch from 'isomorphic-fetch'

const {
	GATSBY_AUTH0_DOMAIN,
	GATSBY_AUTH0_CLIENTID,
} = process.env

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
		const clientBody = JSON.parse(body)
		console.log(`Received from client:`, clientBody)
		const req = await fetch(`https://${GATSBY_AUTH0_DOMAIN}/api/v2/users/${verified.sub}`, {
			method: `PATCH`,
			headers: {
				'content-type': `application/json`,
				authorization: `Bearer ${authorization}`,
			},
			body: JSON.stringify({
				user_metadata: clientBody,
			}),
		})
		const res = await req.json()
		console.log(`Response from API:`, res)
		if(!res.user_metadata){
			throw new Error(`Unexpected response from API`)
		}
		return {
			statusCode: 200,
			body: JSON.stringify({
				success: true,
				meta: res.user_metadata,
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
