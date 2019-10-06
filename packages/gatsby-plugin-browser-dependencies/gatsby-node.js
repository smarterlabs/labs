exports.onCreateWebpackConfig = ({ stage, loaders, actions: { setWebpackConfig} }, { dependencies }) => {
	if (stage === `build-html`) {
		setWebpackConfig({
			module: {
				rules: dependencies.map(dep => ({
					test: new RegExp(dep),
					use: loaders.null(),
				})),
			},
		})
	}
}