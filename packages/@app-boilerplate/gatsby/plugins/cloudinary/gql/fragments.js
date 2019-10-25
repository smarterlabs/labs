import { graphql } from "gatsby"

/**
 * The simplest set of fields for fixed assets
 * @type {Fragment}
 * @example
 * myCloudinaryAssetField {
 *   fixed {
 *     ...GatsbyCloudinaryFixed
 *     # ^ identical to using the following fields:
 *     # base64
 *     # width
 *     # height
 *     # src
 *     # srcSet
 *   }
 * }
 */
export const GatsbyCloudinaryFixed = graphql`
  fragment GatsbyCloudinaryFixed on CloudinaryFixed {
    base64
    width
    height
    src
    srcSet
  }
`

/**
 * Traced SVG fixed images
 * @type {Fragment}
 */
export const GatsbyCloudinaryFixed_tracedSVG = graphql`
  fragment GatsbyCloudinaryFixed_tracedSVG on CloudinaryFixed {
    tracedSVG
    width
    height
    src
    srcSet
  }
`

/**
 * Assets without the blurred base64 imate
 * @type {Fragment}
 */
export const GatsbyCloudinaryFixed_noBase64 = graphql`
  fragment GatsbyCloudinaryFixed_noBase64 on CloudinaryFixed {
    width
    height
    src
    srcSet
  }
`

/**
 * Fixed assets that prefer Webp
 * @type {Fragment}
 */
export const GatsbyCloudinaryFixed_withWebp = graphql`
  fragment GatsbyCloudinaryFixed_withWebp on CloudinaryFixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

/**
 * Traced SVG fixed assets without the blurred base64 image that prefer Webp
 * @type {Fragment}
 */
export const GatsbyCloudinaryFixed_withWebp_noBase64 = graphql`
  fragment GatsbyCloudinaryFixed_withWebp_noBase64 on CloudinaryFixed {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

/**
 * The simplest set of fields for fluid assets
 * @type {Fragment}
 */
export const GatsbyCloudinaryFluid = graphql`
  fragment GatsbyCloudinaryFluid on CloudinaryFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`

/**
 * Traced SVG fluid assets
 * @type {Fragment}
 */
export const GatsbyCloudinaryFluid_tracedSVG = graphql`
  fragment GatsbyCloudinaryFluid_tracedSVG on CloudinaryFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`

/**
 * Traced SVG fluid assets without the blurred base64 image
 * @type {Fragment}
 */
export const GatsbyCloudinaryFluid_noBase64 = graphql`
  fragment GatsbyCloudinaryFluid_noBase64 on CloudinaryFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`

/**
 * Fluid assets that prefer Webp
 * @type {Fragment}
 */
export const GatsbyCloudinaryFluid_withWebp = graphql`
  fragment GatsbyCloudinaryFluid_withWebp on CloudinaryFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`

/**
 * Traced SVG fluid assets without the blurred base64 image that prefer Webp
 * @type {Fragment}
 */
export const cloudinaryAssetFluidPreferWebpNoBase64 = graphql`
  fragment GatsbyCloudinaryFluid_withWebp_noBase64 on CloudinaryFluid {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`

// TODO: in v3 remove these legacy fragments
export const GatsbyCloudinaryResolutions = graphql`
  fragment GatsbyCloudinaryResolutions on CloudinaryResolutions {
    base64
    width
    height
    src
    srcSet
  }
`

export const GatsbyCloudinaryResolutions_tracedSVG = graphql`
  fragment GatsbyCloudinaryResolutions_tracedSVG on CloudinaryResolutions {
    tracedSVG
    width
    height
    src
    srcSet
  }
`

export const GatsbyCloudinaryResolutions_noBase64 = graphql`
  fragment GatsbyCloudinaryResolutions_noBase64 on CloudinaryResolutions {
    width
    height
    src
    srcSet
  }
`

export const GatsbyCloudinaryResolutions_withWebp = graphql`
  fragment GatsbyCloudinaryResolutions_withWebp on CloudinaryResolutions {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

export const GatsbyCloudinaryResolutions_withWebp_noBase64 = graphql`
  fragment GatsbyCloudinaryResolutions_withWebp_noBase64 on CloudinaryResolutions {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

export const GatsbyCloudinarySizes = graphql`
  fragment GatsbyCloudinarySizes on CloudinarySizes {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`

export const GatsbyCloudinarySizes_tracedSVG = graphql`
  fragment GatsbyCloudinarySizes_tracedSVG on CloudinarySizes {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`

export const GatsbyCloudinarySizes_noBase64 = graphql`
  fragment GatsbyCloudinarySizes_noBase64 on CloudinarySizes {
    aspectRatio
    src
    srcSet
    sizes
  }
`

export const GatsbyCloudinarySizes_withWebp = graphql`
  fragment GatsbyCloudinarySizes_withWebp on CloudinarySizes {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`

export const GatsbyCloudinarySizes_withWebp_noBase64 = graphql`
  fragment GatsbyCloudinarySizes_withWebp_noBase64 on CloudinarySizes {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`