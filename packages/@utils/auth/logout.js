import auth from './auth'
import clearUser from './clear-user'
import saveLocation from './save-location'

export default function logout(setState) {
	clearUser(setState)
	saveLocation()
	auth.logout({
		returnTo: `${document.location.origin}/auth0-logout`,
	})
}
