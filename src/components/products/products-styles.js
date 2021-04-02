import styled from "styled-components"
import dimensions from "../../style/dimensions"

export const ProductPageHeading = styled.div`
  font-size: calc(90px + (90 - 32) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
`

export const FeaturedProductSection = styled.div`
  width: 100%;
  padding-top: 40px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 86vw;
    display: flex;
  }
`

export const FeaturedProductImage = styled.div`
  width: 47vw;
  height: 432px;
  background-color: #C4C4C4;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    height: 225px;
  }
`

export const FeaturedProductText = styled.div`
  padding-left: 5vw;
  padding-top: 52px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 0vw;
    padding-top: 26px;
  }
`

export const FeaturedProductHeading = styled.div`
  font-size: calc(20px + (20 - 16) * ((100vw - 300px) / (1440 - 300)));
  text-transform: uppercase;
`

export const FeaturedProductName = styled.div`
  font-size: calc(40px + (40 - 24) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
  padding-top: 17px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 8px;
  }
`

export const FeaturedProductDescription = styled.div`
  font-size: calc(18px + (18 - 16) * ((100vw - 300px) / (1440 - 300)));
  padding-top: 32px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 15px;
  }
`

export const ModelScope = styled.div`
  margin-top: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 105px;
  }
`

export const ModelScopeHeading = styled.div`
  font-size: calc(20px + (20 - 16) * ((100vw - 300px) / (1440 - 300)));
  text-transform: uppercase;
`

export const ProductsGroup = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
  }
`

export const Product = styled.div`
  padding-top: 33px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 35px;
  }
`

export const ProductImage = styled.div`
  background-color: #C4C4C4;
  width: 21vw;
  height: 245px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const ProductName = styled.div`
  font-size: calc(30px + (30 - 24) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
  padding-top: 49px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 24px;
  }
`

export const ProductDescription = styled.div`
  font-size: 15px;
  padding-top: 15px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    visibility: hidden;
  }
`