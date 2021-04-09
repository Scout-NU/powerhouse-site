import styled from "styled-components"
import dimensions from "../../style/dimensions"
import {
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../style/variables"

export const SingularProductContainer = styled.div``

export const HeroSection = styled.div`
  padding-top: 60px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    padding-top: 45px;
  }
`

export const ImageContainer = styled.div``

export const MainImage = styled.div`
  width: 47vw;
  height: 432px;
  background-color: #c4c4c4;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    height: 225px;
  }
`

export const SmallImageContainer = styled.div`
  display: flex;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    justify-content: center;
  }
`

export const SmallImage = styled.div`
  width: 4vw;
  height: 56px;
  margin-right: 18px;
  margin-top: 44px;
  background-color: #c4c4c4;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 3vw;
    height: 39px;
    margin-right: 12px;
    margin-top: 32px;
  }
`

export const TextContainer = styled.div`
  padding-left: 67px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 0px;
  }
`

export const ProductType = styled.div`
  text-transform: uppercase;
  padding-top: 49px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 63px;
  }
`

export const ProductName = styled.div`
  font-weight: bold;
  font-size: calc(50px + (50 - 32) * ((100vw - 300px) / (1440 - 300)));
  padding-top: 27px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
  }
`

export const ProductDescription = styled.div`
  font-size: calc(18px + (18 - 16) * ((100vw - 300px) / (1440 - 300)));
  padding-top: 32px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 24px;
  }
`

export const IconSection = styled.div`
  margin-top: 127px;
`

export const IconSectionHeading = styled.div`
  text-transform: uppercase;
  font-size: 20px;
`

export const IconContainer = styled.div`
  display: flex;
  padding-top: 80px;
  justify-content: space-between;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    flex: 50%;
    padding-top: 54px;
  }
`

export const Icon = styled.div``

export const IconImage = styled.div`
  width: 4vw;
  height: 55px;
  background-color: #c4c4c4;
`

export const IconCaption = styled.div`
  font-size: 15px;
`

export const ImageHighlightSection = styled.div`
  padding-top: 76px;
  position: relative;
`

export const ImageHighlightHeading = styled.div`
  padding-top: 147px;
  margin-left: 4vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 43px;
  }
`

export const ImageHighlightGroupContainer = styled.div``

export const ImageHighlightGroup = styled.div`
  &.second-section {
    position: absolute;
    right: 0;
    top: 200px;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    // display: flex;
  }
`

export const HighlightedImage = styled.div`
  &.first-image {
    img {
      margin-left: -${layoutPaddingDesktop};
      margin-top: 60px;
    }
  }
`

export const ImageHighlightDescription = styled.div`
  font-size: calc(18px + (18 - 16) * ((100vw - 300px) / (1440 - 300)));
  width: 35vw;

  &.second-section {
    padding-top: 88px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    padding-top: 32px;
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
  }
`

