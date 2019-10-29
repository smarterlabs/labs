# gatsby-source-cloudinary

## More documentation coming soon!! This package is not well tested and is assumed to have bugs, please submit an issue or open a PR if you can fix one!

### gatsby-config.js
```js
//
plugins = [
	...plugins,
	{
		resolve: `gatsby-source-cloudinary`,
		options: {
			apiKey: CLOUDINARY_API_KEY,
			apiSecret: CLOUDINARY_API_SECRET,
			cloudName: CLOUDINARY_NAME,
			queryParams: {...queryParams},
		},
	},
]
```

### Query Params
- resource_type
- type
- prefix
- public_ids
- max_results
- next_cursor
- start_at
- direction
- tags
- context
- moderation

More information regarding query params: [here](https://cloudinary.com/documentation/admin_api)

## Graphql

Example Query including all fields

```graphql
allCloudinary {
	edges {
		node {
			bytes
			children
			cloudName
			createdAt
			fixed
			fluid
			format
			height
			id
			internal
			parent
			publicId
			resourceType
			secureUrl
			type
			url
			version
			width
		}
	}
}
```

### Gatsby Image Support

#### Fixed/Fluid Args
- fixed: background, crop, format, gravity, height, quality, width
- fluid: background, crop, format, gravicty, maxHeight, maxWidth, quality, sizes

#### Fragments
- fixed: GatsbyCloudinaryFixed, GatsbyCloudinaryFixed_tracedSVG, GatsbyCloudinaryFixed_noBase64, GatsbyCloudinaryFixed_withWebp, GatsbyCloudinaryFixed_withWebp_noBase64
- fluid: GatsbyCloudinaryFluid, GatsbyCloudinaryFluid_tracedSVG, GatsbyCloudinaryFluid_noBase64, GatsbyCloudinaryFluid_withWebp, GatsbyCloudinaryFluid_withWebp_noBase64


