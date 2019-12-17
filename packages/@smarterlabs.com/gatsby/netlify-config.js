module.exports = {
	redirects: [
		{
			from: `/api/headers`,
			to: `https://postman-echo.com/headers`,
			status: 200,
			force: true,
			headers: {
				"Test-Header": `success`,
			},
		},
	],
}
