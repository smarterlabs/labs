export default function isAuthenticated() {
	if (typeof window === `undefined`) return
	return localStorage.getItem(`isLoggedIn`) === `true`
}
