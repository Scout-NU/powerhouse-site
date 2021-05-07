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

export const WhySection = styled.div``

export const IntroTextSection = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 83px;
  }
`

export const IntroHeader = styled.div`
  color: ${colors.ocean900};
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

export const WhyHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 118px;
  margin-bottom: 88px;

  color: ${colors.ocean900};

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 152px;
    margin-bottom: 0px;
  }
`

export const Reasons = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-around;
    margin-top: 85px;
  }
`

export const SpecificReason = styled.div`
  margin-top: 58px;
`

export const SpecificImage = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

export const SpecificReasonHeading = styled.div`
  text-align: center;

  color: ${colors.ocean900};

  @media (min-width: ${dimensions.maxwidthTablet}px) {
  }
`

export const SpecificReasonDescription = styled.div`
  color: ${colors.black900};
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 21vw;
  }
`

export const WhyCTA = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: center;

  a {
    background-color: ${colors.seafoam900};
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

export const DemoVideoSection = styled.div`
margin-top: 75px;
margin-bottom: 75px;

@media (min-width: ${dimensions.maxwidthTablet}px) {
  margin-top: 192px;
  margin-bottom: 192px;
  justify-content: center;
  display: flex;
}



`

export const DemoVideo = styled.div`

iframe {
  width: 72vw;
  height: 562px;
}

@media (max-width: ${dimensions.maxwidthTablet}px) {
  iframe {
    width: 100%;
    height: 173px;
  }
}

`


export const DemoHeading = styled.div`

color: ${colors.ocean900};

`
