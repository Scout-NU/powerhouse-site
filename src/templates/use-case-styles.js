import styled from "styled-components"
import dimensions from "../style/dimensions"
import { layoutPaddingDesktop, layoutPaddingMobile } from "../style/variables"
import colors from "../style/colors"

export const UseCaseContainer = styled.div``

export const UseCaseIntro = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    padding-top: 248px;
  }
`

export const IntroImages = styled.div`
  position: relative;
`

export const ImageOne = styled.div`
  margin-bottom: 52px;
  img {
    width: 100%;
    height: 329px;
    object-fit: cover;
    margin-top: 170px;

  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
        width: 42vw;
        height: 358px;
        object-fit: cover;
        margin-top: 0px;

      }
  }
`


export const WhySection = styled.div`



`


export const IntroTextSection = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 83px;
  }
`

export const IntroHeader = styled.div`
  color: ${colors.blue900};
`

export const ImageTwo = styled.div`
  img {
    display: none;
  }
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
      display: inherit;
      width: 25vw;
      height: 480px;
      object-fit: cover;
      float: right;
    }
  }
`

export const IntroDescription = styled.div`
  margin-bottom: 37px;
  color: ${colors.black900};
`

export const MobileImage = styled.div`
  img {
    width: 100%;
    height: 437px;
    object-fit: cover;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
      display: none;
    }
  }
`
