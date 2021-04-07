import styled from "styled-components"
import dimensions from "../../style/dimensions"

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
  background-color: #C4C4C4;

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
  background-color: #C4C4C4;

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
  background-color: #C4C4C4;
`

export const IconCaption = styled.div`
  font-size: 15px;
`

export const FeatureSpecSection = styled.div`
  margin-top: 100px;
`

export const FeatureIcon = styled.div`
  width: 3vw;
  height: 45px;
  background-color: #9D9D9D;
`

export const FeatureSpecHeading = styled.div`
  font-size: calc(40px + (40 - 32) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
  padding-top: 20px;
`

export const FeatureSpecFeatures = styled.div`
`

export const Feature = styled.div`
  padding-top: 90px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
  }
`

export const FeatureName = styled.div`
  text-transform: uppercase;
  font-size: calc(20px + (20 - 16) * ((100vw - 300px) / (1440 - 300)));
  width: 20vw;
  padding-right: 2vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    padding-right: 0px;
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