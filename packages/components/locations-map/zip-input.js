import React, { useState } from 'react'
import { css } from '@emotion/core'
import fetch from 'isomorphic-fetch'

export default function ZipInput({ zoomToLocation }){
	const [error, setError] = useState(false)

	let input

	async function handleChange(e){
		e.preventDefault()
		try {
			const res = await fetch(`https://zip-info-api.netlify.com/complete/${input.value}`)
			const { lat, long } = await res.json()
			zoomToLocation(lat, long)
			setError(false)
		}
		catch (err) {
			console.error(err)
			setError(`Please enter a valid zip code`)
		}
	}

	return (
		<div css={styles.zipContainer}>
			<form onSubmit={handleChange}>
				<input
					type='text'
					ref={el => input = el}
				/>
				<button type='submit'>Search</button>
			</form>
			{!!error && (
				<div css={styles.error}>{error}</div>
			)}
		</div>
	)
}

const styles = {
	zipContainer: css`
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 400;
		text-align: right;
	`,
	error: css`
		color: #f00;
		font-size: .7em;
		font-weight: bold;
	`,
}
