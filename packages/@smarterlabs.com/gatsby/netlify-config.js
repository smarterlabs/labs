module.exports = {
	redirects: [
		{
			from: `/admin/static/*`,
			to: `/admin/static/:splat`,
			status: 200,
		},
		{
			from: `/admin/*`,
			to: `/admin/index.html`,
			status: 200,
		},
		{
			from: `/admin`,
			to: `/admin/index.html`,
			status: 200,
		},
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
