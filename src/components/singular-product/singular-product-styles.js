import styled from "styled-components"
import dimensions from "../../style/dimensions"
import {
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../style/variables"
import colors from "../../style/colors"

export const SingularProductContainer = styled.div``

export const HeroSection = styled.div`
  padding-top: 130px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    padding-top: 114px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 4vw;
    height: 56px;
    object-fit: cover;
    margin-right: 18px;
    margin-top: 44px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      width: 39px;
      height: 39px;
      margin-right: 12px;
      margin-top: 32px;
    }

    &.main-image {
      object-fit: cover;
      width: 47vw;
      height: 432px;
      flex: 100%;

      @media (max-width: ${dimensions.maxwidthTablet}px) {
        width: 100%;
        height: 225px;
      }
    }
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    justify-content: center;
  }
`

export const SmallImageContainer = styled.div`
  display: flex;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    justify-content: center;
  }
`

export const TextContainer = styled.div`
  padding-left: 67px;

  color: ${colors.ocean900};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 0px;
  }
`

export const ProductType = styled.div`
  padding-top: 49px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 26px;
  }
`

export const IconSection = styled.div`
  margin-top: 127px;
  background-color: rgb(110, 168, 192, 0.07);
  width: 100vw;
  margin-left: -${layoutPaddingDesktop};
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: -${layoutPaddingMobile};
  }
`

export const IconContainer = styled.div`
  display: flex;
  margin-top: 80px;
  justify-content: space-between;
  margin-left: ${layoutPaddingDesktop};
  margin-right: ${layoutPaddingDesktop};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 54px;
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const Icon = styled.div`
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 30px;
  }
`

export const IconHeader = styled.div`
  margin-left: ${layoutPaddingDesktop};
  color: ${colors.ocean900};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    text-align: center;
    margin-left: 0px;
  }
`

export const IconImage = styled.div`
  width: 54px;
  height: 55px;
  margin-left: auto;
  margin-right: auto;
`

export const IconCaption = styled.div`
  margin-top: 25px;
  width: 12vw;
  color: ${colors.ocean900};

  text-align: center;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 44vw;
  }
`

export const ImageHighlightSection = styled.div`
  padding-top: 76px;
  position: relative;
`

export const ImageHighlightHeading = styled.div`
  padding-top: 147px;
  margin-left: 4vw;
  color: ${colors.ocean900};
`

export const ImageHighlightGroupContainer = styled.div``

export const ImageHighlightGroup = styled.div`
  color: ${colors.ocean900};

  &.second-section {
    position: absolute;
    right: 0;
    top: 200px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      position: relative;
      top: 0px;
    }
  }
`

export const HighlightedImage = styled.div`
  &.first-image {
    img {
      margin-left: -${layoutPaddingDesktop};
      margin-top: 60px;
      width: 50vw;
      height: 372px;
      object-fit: cover;

      @media (max-width: ${dimensions.maxwidthTablet}px) {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  &.second-image {
    img {
      width: 28vw;
      height: 357px;
      object-fit: cover;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      img {
        width: 100%;
        height: 275px;
        object-fit: cover;
      }
    }
  }

  img {
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 25px;
    }
  }
`

export const ImageHighlightDescription = styled.div`
  font-size: calc(18px + (18 - 16) * ((100vw - 300px) / (1440 - 300)));
  width: 35vw;
  padding-top: 40px;

  &.second-section {
    padding-top: 88px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
    }
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const ThirdSection = styled.div`
  &.third-section {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 97px;
    margin-right: -${layoutPaddingDesktop};
    justify-content: space-between;

    img {
      width: 56vw;
      height: 372px;
      object-fit: cover;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      display: block;
      width: 100%;
      margin-top: 25px;
      flex-direction: none;

      img {
        width: 100%;
        height: 275px;
        object-fit: cover;
      }
    }
  }
`

export const FeatureSpecSection = styled.div`
  margin-top: 100px;
  color: ${colors.ocean900};
`

export const FeatureIcon = styled.div`
  width: 3vw;
  height: 45px;
`

export const Feature = styled.div`
  padding-top: 90px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
  }
`

export const FeatureName = styled.div`
  width: 20vw;
  padding-right: 2vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    padding-right: 0px;
  }
`

export const FeatureImage = styled.div`
  img {
    &.not-image {
      display: none;
    }
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 87vw;
    }
  }
`

export const FeatureDescription = styled.div`
  font-size: 15px;
  width: 35vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    padding-top: 16px;
  }
`
