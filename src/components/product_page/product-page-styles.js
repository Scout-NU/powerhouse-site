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

export const ProductsGroup = styled.div`
  margin-top: 20px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
  }
`

export const ProductImage = styled.div`
  width: 21vw;
  height: 245px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const HomeownerSection = styled.div``

export const CommercialSection = styled.div``