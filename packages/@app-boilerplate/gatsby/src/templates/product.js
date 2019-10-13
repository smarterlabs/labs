import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from 'components/layouts/default'
import Carousel from 'components/photo-carousel'
import sanityToExcerpt from 'utils/sanity-to-excerpt'
import SanityBlock from 'components/sanity-block'

export default function ProductTemplate({
	data: {
		sanityProduct: {
			title,
			defaultProductVariant = {},
			variants = [],
			_rawBody,
		} = {},
	} = {},
}) {
	const excerpt = sanityToExcerpt(_rawBody, 15)
	const [selectedProduct, setSelectedProduct] = useState(defaultProductVariant)
	const allVariants = [defaultProductVariant, ...variants]

	const { images = [] } = selectedProduct
	const imageRatio = [16, 9]

	return (
		<Layout title={title} description={excerpt}>
			<h1>{title}</h1>

			{!!images.length && (
				<Carousel
					ratio={imageRatio}
					slides={images.map(({ asset: { fluid }}, index) => (
						<Img
							key={`img${index}`}
							fluid={fluid}
							alt={`${title} ${index + 1}`}
						/>
					))}
				/>
			)}

			<ul>
				{allVariants.map((variant, index) => (
					<li key={index}>
						{variant.id === selectedProduct.id && variant.color}
						{variant.id !== selectedProduct.id && (
							<a href='#' onClick={e => {
								e.preventDefault()
								setSelectedProduct(variant)
							}}>
								{variant.color}
							</a>
						)}
					</li>
				))}
			</ul>

			<button>
				Add to Cart
			</button>

			<ul>
				<li>Color: {selectedProduct.color}</li>
				<li>ID: {selectedProduct.id}</li>
				<li>Price: $10</li>
				<li>
					{!!true && `In stock`}
					{!true && `Out of stock`}
				</li>
			</ul>
			<SanityBlock body={_rawBody} />
		</Layout>
	)
}

export const query = graphql`
	query ProductTemplate($id: String!) {
		sanityProduct(
			id: { eq: $id }
		){
			title
			_rawBody
			categories{
				slug{
					current
				}
			}
			defaultProductVariant{
				id: sku
				color
				images{
					asset {
						fluid(maxWidth: 700) {
							...GatsbySanityImageFluid
						}
						thumbnail: fluid(maxWidth: 150){
							src
						}
					}
				}
			}
			variants{
				id: sku
				color
				images{
					asset {
						fluid(maxWidth: 700) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	}
`
