exports.onCreatePage = async ({ page, actions: { createPage } }) => {
	if (page.path.match(/^\/account/)) {
		page.matchPath = `/account/*`
		createPage(page)
	}
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions: { setWebpackConfig} }) => {
	if (stage === `build-html`) {
		/*
		 * During the build step, `auth0-js` will break because it relies on
		 * browser-specific APIs. Fortunately, we don’t need it during the build.
		 * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
		 */
		setWebpackConfig({
			module: {
				rules: [
					{
						test: /auth0-js/,
						use: loaders.null(),
					},
				],
			},
		})
	}
}
