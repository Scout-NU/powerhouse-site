import styled from "styled-components"
import dimensions from "../../style/dimensions"
import colors from "../../style/colors"

export const FeaturedProductSection = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 148px;
  color: ${colors.blue900};

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 86vw;
    display: flex;
  }
`

export const FeaturedCTA = styled.div`
  margin-top: 64px;
  a {
    background-color: ${colors.orange900};
    text-transform: uppercase;
    color: ${colors.white900};
    padding-left: 48px;
    font-size: 16px;
    padding-right: 48px;
    padding-top: 16px;
    padding-bottom: 16px;
    text-decoration: none;
  }
`

export const ProductsHeading = styled.div`
  padding-top: 135px;
  color: ${colors.blue900};
`

export const ProductCard = styled.a`
  color: ${colors.blue900};
  text-decoration: none;
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
  color: ${colors.blue900};

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

  img {
    width: 21vw;
    height: 245px;
    object-fit: cover;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;

    img {
      width: 100%;
      height: 244px;
      object-fit: cover;
    }
  }
`

export const HomeownerSection = styled.div`
  color: ${colors.blue900};
`

export const CommercialSection = styled.div`
  color: ${colors.blue900};
`

export const ProductCTA = styled.div`
margin-top: 58px;
margin-bottom: 58px;

  a {
    padding-right: 60px;
    padding-left: 60px;
    padding-top: 16px;
    padding-bottom: 16px;
    border: solid ${colors.orange900}; 1px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.orange900};
  }
`
