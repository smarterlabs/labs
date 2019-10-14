import auth0 from 'auth0-js'

const auth = (typeof window !== `undefined`) ? new auth0.WebAuth({
	domain: process.env.GATSBY_AUTH0_DOMAIN,
	clientID: process.env.GATSBY_AUTH0_CLIENTID,
	redirectUri: `${document.location.origin}/auth0-callback`,
	responseType: `token id_token`,
	scope: `openid profile email`,
}) : {}

export default auth
