import fetch from 'isomorphic-fetch'
import lunr from 'lunr'
import indexStore from './index-store'

let fetchingIndex = false

export default async function fetchIndex() {
	if (indexStore.index) return

	// Fetch index from JSON file
	if (!fetchingIndex) {
		fetchingIndex = true

		// Fake latency
		await tick()

		let res = await fetch(`/search-index.json`)
		res = await res.json()
		indexStore.index = lunr.Index.load(res.index)
		indexStore.store = res.store
	}

	// If another query has already started fetching the index
	else{
		await awaitIndex()
	}
}

function awaitIndex(){
	return new Promise(resolve => {
		const interval = setInterval(() => {
			if(indexStore.index){
				clearInterval(interval)
				resolve()
			}
		}, 1)
	})
}

function tick(n = 1000){
	return new Promise((resolve) => {
		setTimeout(resolve, n)
	})
}