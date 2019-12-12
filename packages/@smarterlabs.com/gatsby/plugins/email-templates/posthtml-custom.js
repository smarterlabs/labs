const { join } = require(`path`)

module.exports = function(url){
	return function custom(tree) {
		tree.walk(node => {
			if (typeof node === `object`) {
				if (!node.attrs) {
					node.attrs = {}
				}
				let src = node.attrs.src
				switch(node.tag){
					case `html`:
						Object.assign(node.attrs, {
							'xmlns': `http://www.w3.org/1999/xhtml`,
							'xmlns:v': `urn:schemas-microsoft-com:vml`,
							'xmlns:o': `urn:schemas-microsoft-com:office:office`,
						})
						break
					case `head`:
						node.content.push(`
							<!--[if gte mso 9]>
							<xml>
								<o:OfficeDocumentSettings>
								<o:AllowPNG />
								<o:PixelsPerInch>96</o:PixelsPerInch>
								</o:OfficeDocumentSettings>
							</xml>
							<![endif]-->
						`)
						break
					case `img`:
						if (url && src.indexOf(`://`) === -1) {
							let srcUrl = url.split(`://`)
							src = join(srcUrl[1], src)
							src = `${srcUrl[0]}://${src}`
							node.attrs.src = src
						}
						break
				}
			}
			return node
		})
		return tree
	}
}
