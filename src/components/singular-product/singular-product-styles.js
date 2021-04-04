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
