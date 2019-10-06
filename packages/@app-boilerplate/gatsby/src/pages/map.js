import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layouts/default'
import Map from 'components/locations-map'

export default function MapPage(props) {
	const locations = props.data ?.allSanityLocation?.edges.map(({
		node: {
			location: {
				lat,
				lng,
			},
			name,
			address,
			city,
			state,
			zip,
		},
	}) => ({
		lat,
		lng,
		title: name,
		address,
		city,
		state,
		zip,
	})) || []
	return (
		<Layout title='Map'>
			<h1>Map</h1>
			<Map locations={locations} />
		</Layout>
	)
}

export const query = graphql`
	query MapQuery {
		allSanityLocation{
			edges{
				node{
					name
					location{
						lat
						lng
					}
					address
					city
					state
					zip
				}
			}
		}
	}
`
