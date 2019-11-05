const { GraphQLEnumType } = require(`gatsby/graphql`)

const ImageFormatType = new GraphQLEnumType({
	name: `CloudinaryImageFormat`,
	values: {
		NO_CHANGE: { value: `` },
		JPG: { value: `jpg` },
		PNG: { value: `png` },
		WEBP: { value: `webp` },
	},
})

const ImageCropType = new GraphQLEnumType({
	name: `CloudinaryImageCrop`,
	values: {
		NO_CHANGE: {
			value: ``,
		},
		SCALE: {
			value: `scale`,
			description: `Change the size of the image exactly to the given width and height without necessarily retaining the original aspect ratio: all original image parts are visible but might be stretched or shrunk.`,
		},
		FIT: {
			value: `fit`,
			description: `The image is resized so that it takes up as much space as possible within a bounding box defined by the given width and height parameters. The original aspect ratio is retained and all of the original image is visible.`,
		},
		LIMIT: {
			value: `limit`,
			description: `Same as the 'fit' mode but only if the original image is larger than the given limit (width and height), in which case the image is scaled down so that it takes up as much space as possible within a bounding box defined by the given width and height parameters. The original aspect ratio is retained and all of the original image is visible.`,
		},
		MFIT: {
			value: `mfit`,
			description: `Same as the 'fit' mode but only if the original image is smaller than the given minimum (width and height), in which case the image is scaled up so that it takes up as much space as possible within a bounding box defined by the given width and height parameters. The original aspect ratio is retained and all of the original image is visible.`,
		},
		FILL: {
			value: `fill`,
			description: `Create an image with the exact given width and height without distorting the image. This option first scales as much as needed to at least fill both of the given dimensions. If the requested aspect ratio is different than the original, cropping will occur on the dimension that exceeds the requested size after scaling.`,
		},
		LFILL: {
			value: `lfill`,
			description: `Same as the 'fill' mode, but only if the original image is larger than the specified resolution limits, in which case the image is scaled down to fill the given width and height without distoring the image, and then the dimension that exceeds the request is cropped. If the original dimensions are both smaller than the requested size, it is not resized at all.`,
		},
		PAD: {
			value: `pad`,
			description: `Resize the image to fill the given width and height while retaining the original aspect ratio. If the proportions of the original image do not match the given width and height, padding is added to the image to reach the required size.`,
		},
		LPAD: {
			value: `lpad`,
			description: `Same as the 'pad' mode but only if the original image is larger than the given limit (width and height), in which case the image is scaled down to fill the given width and height while retaining the original aspect ratio. If the proportions of the original image do not match the given width and height, padding is added to the image to reach the required size.`,
		},
		MPAD: {
			value: `mpad`,
			description: `Same as the 'pad' mode but only if the original image is smaller than the given minimum (width and height), in which case the image is scaled up to fill the given width and height while retaining the original aspect ratio. If the proportions of the original image do not match the given width and height, padding is added to the image to reach the required size.`,
		},
		FILL_PAD: {
			value: `fill_pad`,
			description: `Tries to prevent a "bad crop" by first attempting to use the fill mode, but adding padding if it is determined that more of the original image needs to be included in the final image. Only supported in conjunction with Automatic cropping (g_auto).`,
		},
		CROP: {
			value: `crop`,
			description: `Used to extract a given width & height out of the original image. The original proportions are retained and so is the size of the graphics.`,
		},
		THUMB: {
			value: `thumb`,
			description: `Generate a thumbnail using face detection in combination with the 'face' or 'faces' gravity.`,
		},
		IMAGGA_CROP: {
			value: `imagga_crop`,
			description: `Crop your image based on automatically calculated areas of interest within each specific photo. See the Imagga Crop and Scale add-on documentation for more information.`,
		},
		IMAGGA_SCALE: {
			value: `imagga_scale`,
			description: `Scale your image based on automatically calculated areas of interest within each specific photo. See the Imagga Crop and Scale add-on documentation for more information.`,
		},
	},
})

const ImageGravityType = new GraphQLEnumType({
	name: `CloudinaryImageGravity`,
	values: {
		NORTH: { value: `north` },
		NORTH_WEST: { value: `north_west` },
		NORTH_EAST: { value: `north_east` },
		SOUTH: { value: `south` },
		SOUTH_WEST: { value: `south_west` },
		SOUTH_EAST: { value: `south_east` },
		XY_CENTER: { value: `xy_center` },
		FACE: { value: `face` },
		FACE_CENTER: { value: `face:center` },
		FACE_AUTO: {value: `face:auto`},
		FACES: { value: `faces` },
		FACE_CENTERS: { value: `faces:center` },
		FACE_AUTOS: {value: `faces:auto`},
		CENTER: { value: `center` },
		BODY: { value: `body` },
		BODY_FACE: { value: `body:face`},
		LIQUID: { value: `liquid`},
		OCR_TEXT: { value: `ocr_text` },
		ADV_FACE: { value: `adv_face` },
		ADV_FACES: { value: `adv_faces` },
		CUSTOM: { value: `custom` },
		CUSTOM_FACE: { value: `custom:face` },
		CUSTOM_FACES: { value: `custom:faces` },
		CUSTOM_ADV_FACE: { value: `custom:adv_face` },
		CUSTOM_ADV_FACES: { value: `custom:adv_faces` },
	},
})

module.exports = {
	ImageFormatType,
	ImageCropType,
	ImageGravityType,
}