const color = require(`color`)

const primaryColor = `#2152a0`
const secondaryColor = `#333`
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
}