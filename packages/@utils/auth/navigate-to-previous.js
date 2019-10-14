import { navigate } from 'gatsby'

export default function navigateToPrevious() {
	if (typeof window === `undefined`) return
	const previousLocation = localStorage.getItem(`previousLocation`)
	if (previousLocation) {
		localStorage.setItem(`previousLocation`, ``)
		// If you need the hash:
		// document.location = previousLocation
		navigate(previousLocation)
	}
}
