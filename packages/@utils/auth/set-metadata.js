import fetch from 'isomorphic-fetch'

export default async function setMetadata(setState, accessToken, meta) {
	setState({ loadingMeta: true })
	const req = await fetch(`/.netlify/functions/set-auth0-metadata`, {
		method: `POST`,
		headers: {
			authorization: accessToken,
		},
		body: JSON.stringify(meta),
	})
	const res = await req.json()
	setState({
		loadingMeta: false,
		meta: res.meta,
	})
}
