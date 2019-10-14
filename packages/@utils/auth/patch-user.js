import fetch from 'isomorphic-fetch'

export default async function patchUser(setState, accessToken, obj) {
	const req = await fetch(`/.netlify/functions/patch-auth0-user`, {
		method: `POST`,
		headers: {
			authorization: accessToken,
		},
		body: JSON.stringify(obj),
	})
	const res = await req.json()
	setState({
		loadingUser: false,
		user: res.body,
		meta: res.body.user_metadata,
	})
}
