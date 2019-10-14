import auth from './auth'
import setSession from './set-session'

export default function handleAuthentication(setState) {
	if (typeof window === `undefined`) return
	auth.parseHash(setSession(setState))
}
