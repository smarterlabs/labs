export default function saveLocation() {
	const { pathname, hash } = document.location
	if (pathname === `/account` || pathname.indexOf(`/account/`) > -1) {
		return localStorage.setItem(`previousLocation`, `/`)
	}
	localStorage.setItem(`previousLocation`, `${pathname}${hash}`)
}
