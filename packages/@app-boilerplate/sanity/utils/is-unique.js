import sanityClient from 'part:@sanity/base/client'

export default async function isUnique(slug, options){
	const id = options.document._id.replace(`drafts.`, ``)
	const query = `count(*[slug.current == $slug && _id != $id && !(_id in path('drafts.**'))]{_id})`
	const params = { slug, id }
	const count = await sanityClient.fetch(query, params)
	if (count) return false
	return true
}
