import { graphql } from "gatsby"

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