import React, { useState, useEffect, useRef } from 'react'
import { css } from '@emotion/core'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import List from './locations-list'
import ZipInput from './zip-input'

import 'leaflet/dist/leaflet.css'
import 'react-leaflet-markercluster/dist/styles.min.css'

export default function LocationsMap({ locations }){
	const [visibleLocations, setVisibleLocations] = useState([])
	const [leaflet, setLeaflet] = useState({})
	const map = useRef(null)

	const {
		Map,
		TileLayer,
		Marker,
		Popup,
		MarkerClusterGroup,
	} = leaflet

	function updateLocationsList(){
		if (map.current) {
			const visibleLocations = []
			const mapBounds = map.current.leafletElement.getBounds()
			locations.forEach(l => {
				if (mapBounds.contains([l.lat, l.lng])) {
					visibleLocations.push(l)
				}
			})
			setVisibleLocations(visibleLocations)
		}
	}
	function zoomToLocation(lat, lng){
		if (map.current) {
			map.current.leafletElement.flyTo([lat, lng], 10)
		}
	}

	useEffect(() => {
		// Dynamically import leaflet due to window in src
		!async function init() {
			if (!leaflet.Map) {
				const L = await import(`leaflet`)

				// Point icons to images in module
				delete L.Icon.Default.prototype._getIconUrl
				L.Icon.Default.mergeOptions({
					iconRetinaUrl,
					iconUrl,
					shadowUrl,
				})
				const {
					Map,
					TileLayer,
					Marker,
					Popup,
				} = await import(`react-leaflet`)

				const {
					default: MarkerClusterGroup,
				} = await import(`react-leaflet-markercluster`)

				setLeaflet({
					Map,
					TileLayer,
					Marker,
					Popup,
					MarkerClusterGroup,
				})
			}
		}()

		// Wait for map ref to be available and update
		const interval = setInterval(() => {
			if(!map.current) return
			clearInterval(interval)
			updateLocationsList()
		}, 10)

	}, [])

	return <>
		{!!Map && (
			<div css={styles.mapContainer}>
				<Map
					center={[37.993217, -95]}
					zoom={4}
					maxZoom={30}
					css={styles.map}
					onMoveend={updateLocationsList}
					ref={map}
				>
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<MarkerClusterGroup>
						{locations.map((l, key) => (
							<Marker key={`map-loc-${key}`} position={[l.lat, l.lng]}>
								<Popup>
									<b>{l.title}</b><br />
									{l.address}<br />
									{`${l.city}, ${l.state} ${l.zip}`}
								</Popup>
							</Marker>
						))}
					</MarkerClusterGroup>
				</Map>
				<ZipInput zoomToLocation={zoomToLocation} />
			</div>
		)}
		<List
			locations={visibleLocations}
			zoomToLocation={zoomToLocation}
		/>
	</>
}

const styles = {
	map: css`
		height: 400px;
		.leaflet-control-container{
			user-select: none;
		}
	`,
	mapContainer: css`
		position: relative;
	`,
}
