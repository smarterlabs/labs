module.exports = (str, limit = 20) => {
	const arr = str.split(/\s+/g).splice(0, limit)
	return arr.join(` `)
}