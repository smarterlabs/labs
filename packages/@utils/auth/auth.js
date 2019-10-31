import auth0 from 'auth0-js'
const { GATSBY_AUTH0_DOMAIN, GATSBY_AUTH0_CLIENTID } = process.env

const envExist = GATSBY_AUTH0_DOMAIN && GATSBY_AUTH0_CLIENTID

const auth = (envExist && (typeof window !== `undefined`)) ? new auth0.WebAuth({
	domain: GATSBY_AUTH0_DOMAIN,
	clientID: GATSBY_AUTH0_CLIENTID,
	redirectUri: `${document.location.origin}/auth0-callback`,
	responseType: `token id_token`,
	scope: `openid profile email`,
}) : {}

export default auth
