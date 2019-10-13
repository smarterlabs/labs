import slugify from 'slugify'

export default async function slugifyTitle(str) {
	const parts = str.toLowerCase().split(`/`)
	const slugged = parts.map(slugify)
	return slugged.join(`/`)
}
