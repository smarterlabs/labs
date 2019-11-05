const colors = require(`colors`)

module.exports = (message, type) => {
	let color
	switch(type) {
		case `warning`:
			color = `yellow`
			break
		case `error`:
			color = `red`
			break
		case `info`:
			color = `blue`
			break
		case `success`:
			color = `green`
			break
		default:
			color = `magenta`
	}
	console.log(colors[color](`${type || `info`}`), `[cloudinary]`, message)
}