import styled from "styled-components"
import colors from "../../style/colors"
import dimensions from "../../style/dimensions"
import {
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../style/variables"

export const SolutionsContainer = styled.div``

export const TaglineSection = styled.div``

export const TaglineHeader = styled.div`
  color: ${colors.blue900};
`
export const TaglineDescription = styled.div`
  color: ${colors.blue900};
`

export const TaglineImage = styled.div`
  img {
    width: 100%;
    height: 464px;
    object-fit: cover;
    margin-bottom: 28px;
    margin-top: 141px;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
      position: absolute;
      right: 0;
      top: 127px;
      width: 56vw;
      height: 464px;
      object-fit: cover;
      margin-top: 0px;
    }
  }
`

export const TaglineText = styled.div`
  width: 100%;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 180px;
    width: 35vw;
  }
`

export const UseCaseSection = styled.div`
  margin-top: 98px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 286px;
  }
`

export const UseCaseCard = styled.div`
  margin-bottom: 80px;
  width: 100%;
  a {
    text-decoration: none;
    color: ${colors.blue900};
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 25vw;
  }
`

export const UseCaseCTA = styled.div`
margin-top: 50px;
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
export const UseCaseCards = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
  }
`

export const ModelsCTA = styled.div`
  margin-top: 160px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
  }
`

export const ModelCTAContent = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
  }
`

export const ModelCTAImage = styled.div`
  img {
    width: 100%;
    height: 464px;
    object-fit: cover;
  }
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 45vw;
      height: 464px;
      object-fit: cover;
      margin-left: -${layoutPaddingDesktop};
    }
  }
`

export const ModelCTAText = styled.div`
  margin-bottom: 116px;
  margin-top: 116px;

  color: ${colors.blue900};
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 76px;
    margin-top: 72px;
    margin-bottom: 0px;
  }
`

export const ModelsButton = styled.div`
  margin-top: 42px;

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

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 0px;
  }
`
