import styled from "styled-components"
import dimensions from "../../style/dimensions"

export const FeaturedProductSection = styled.div`
  width: 100%;
  margin-top: 40px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 86vw;
    display: flex;
  }
`

export const FeaturedProductImage = styled.div`
  img {
    width: 47vw;
    margin-left: -80px;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      width: 100%;
      margin-left: 0px;
    }
  }
`

export const FeaturedProductText = styled.div`
  margin-left: 5vw;
  margin-top: 52px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 0vw;
    margin-top: 26px;
  }
`

export const ModelScope = styled.div`
  margin-top: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 105px;
  }
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
  padding-top: 49px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 24px;
  }
`

export const ProductDescription = styled.div`
  padding-top: 15px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    visibility: hidden;
  }
`