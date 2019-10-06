import lunr from 'lunr'
import fetchIndex from './fetch-index'
import indexStore from './index-store'

export default async function search(query){
	if (!query) {
		return []
	}

	await fetchIndex()

	const { index, store } = indexStore

	query = query.split(` `)
	let results = index.query(function(q){
		// Exact matches should have the highest boost
		q.term(query, { boost: 100 })

		// Prefix matches should be boosted slightly
		q.term(query, {
			boost: 10,
			usePipeline: false,
			wildcard: lunr.Query.wildcard.TRAILING,
		})

		// Finally, try a fuzzy search, without any boost
		q.term(query, {
			boost: 1,
			usePipeline: false,
			editDistance: 3,
		})
	})

	results = results.map(({ ref }) => {
		return store[ref]
	})

	return results
}