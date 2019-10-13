const excerpt = require(`@utils/excerpt`)

module.exports = (blocks, limit) => {
	const str = sanityToString(blocks)
	if (!limit) return str
	return excerpt(str, limit)
}

function sanityToString(blocks, str = []) {
	if (!blocks) return ``
	if (blocks.text) {
		str.push(blocks.text)
	}
	else if (typeof blocks === `object`) {
		if (Array.isArray(blocks)) {
			blocks.forEach(block => {
				sanityToString(block, str)
			})
		}
		else {
			for (let i in blocks) {
				sanityToString(blocks[i], str)
			}
		}
	}
	return str.join(` `)
}