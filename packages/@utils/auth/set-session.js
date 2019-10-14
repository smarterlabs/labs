import fetch from 'isomorphic-fetch'
import clearUser from './clear-user'
import navigateToPrevious from './navigate-to-previous'

async function fetchMetadata(setState, accessToken) {
	setState({ loadingMeta: true })
	try {
		const req = await fetch(`/.netlify/functions/get-auth0-metadata`, {
			method: `POST`,
			headers: {
				authorization: accessToken,
			},
		})
		const { metadata } = await req.json()
		setState({
			loadingMeta: false,
			meta: metadata,
		})
	}
	catch (err) {
		console.error(err)
	}
}

export default function setSession(setState, cb = () => { }) {
	return (err, authResult) => {
		console.log(`setSession`)
		if (err) {
			console.error(err)
			// Reset user state
			clearUser(setState)
			cb()
			return
		}
		console.log(`authResult`, authResult)
		if (authResult && authResult.accessToken && authResult.idToken) {
			const { idToken: accessToken, idTokenPayload: user } = authResult
			setState({ user, accessToken })
			localStorage.setItem(`isLoggedIn`, true)
			navigateToPrevious()
			fetchMetadata(setState, accessToken)
			cb(authResult)
		}
	}
}
