import auth from './auth'
import saveLocation from './save-location'

export default function login() {
	if (typeof window === `undefined`) return
	saveLocation()
	auth.authorize()
}
