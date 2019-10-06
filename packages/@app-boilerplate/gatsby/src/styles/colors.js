import color from 'color'

export const
	primaryColor = `#2152a0`,
	secondaryColor = `#333`,
	white = `#fff`,
	primaryActiveColor = color(primaryColor).lighten(.1).rgb().string(),
	errorColor = `#f44336`,
	lightErrorColor = color(errorColor).lighten(.6).rgb().string(),
	successColor = `#00dd00`,
	lightSuccessColor = color(successColor).lighten(1.2).rgb().string()