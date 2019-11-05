const {
	fixedNodeType,
	fluidNodeType,
} = require(`../gql/types`)
const getTracedSVG = require(`../utils/getTracedSVG`)
const logger = require(`../utils/logger`)

module.exports = ({ type, store }) => {
	if(type.name.match(/cloudinary/i)){
		const fixedNode = fixedNodeType({
			name: `CloudinaryFixed`,
			getTracedSVG,
			store,
		})
		const fluidNode = fluidNodeType({
			name: `CloudinaryFluid`,
			getTracedSVG,
			store,
		})
		logger(`NodeTypes Created`, `info`)
		return {
			fixed: fixedNode,
			fluid: fluidNode,
		}
	}

	return {}
}