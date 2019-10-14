export default function clearUser(setState) {
	console.log(`clearUser`)
	setState({
		user: false,
		loadingUser: true,
		meta: {},
		loadingMeta: true,
	})
	localStorage.setItem(`isLoggedIn`, false)
}
