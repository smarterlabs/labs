import React, { useState, useEffect } from 'react'
import Link from 'gatsby-link'
import Layout from 'components/layouts/default'
import { search } from '../../plugins/search'

export default function SearchPage(){
	const [loading, setLoading] = useState(false)
	const [results, setResults] = useState([])
	const [term, setTerm] = useState(``)

	let id = 0

	async function startSearch(term){
		setTerm(term)

		// Change URL
		if (window.history && window.history.replaceState) {
			let path = encodeURIComponent(term)
			path = path.replace(/%20/g, `+`)
			window.history.replaceState({}, ``, `/search/${path}`)
		}

		id++
		const curId = id
		setLoading(true)
		const results = await search(term)
		if (curId === id) {
			setLoading(false)
			setResults(results)
		}
	}

	useEffect(() => {
		// Check URL for search term
		const path = document.location.pathname.split(`/`)
		if (path.length === 3) {
			let term = path.pop()
			term = term.replace(/\+/g, `%20`)
			term = decodeURIComponent(term)
			startSearch(term)
		}
	}, [])

	return (
		<Layout title='Search'>
			<h1>Search</h1>
			<input
				type='text'
				onChange={e => startSearch(e.target.value)}
			/>
			{loading && (
				<h3>Searching for "{term}"...</h3>
			)}
			{term && !results.length && !loading && (
				<h3>No results found for "{term}".</h3>
			)}
			{!!results.length && <>
				<h3>Results for "{term}":</h3>
				<ul>
					{results.map(({ title, excerpt, path }, index) => (
						<li key={`searchResult${index}`}>
							<div>
								<Link to={path}>{title}</Link>
							</div>
							<div>
								{excerpt} <Link to={path}>Read more</Link>
							</div>
						</li>
					))}
				</ul>
			</>}
		</Layout>
	)
}
