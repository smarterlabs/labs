const color = require(`color`)

const primaryColor = `#3D1283`
const secondaryColor = `#00ff62`
const errorColor = `#f44336`
const successColor = `#00dd00`

module.exports = {
	primaryColor,
	secondaryColor,
	white: `#fff`,
	primaryActiveColor: color(primaryColor).lighten(.1).rgb().string(),
	errorColor,
	lightErrorColor: color(errorColor).lighten(.6).rgb().string(),
	successColor,
	lightSuccessColor: color(successColor).lighten(1.2).rgb().string(),
	gradient: `linear-gradient(30deg, #3D1283 0%, #00C78D 100%);`,
}
