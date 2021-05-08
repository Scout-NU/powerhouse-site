import styled from "styled-components"
import colors from "../../style/colors"
import dimensions from "../../style/dimensions"
import {
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../style/variables"
export const ProcessContainer = styled.div``

export const HowItWorks = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 1;
`

export const HowHeader = styled.div`
  padding-top: 216px;
  color: ${colors.ocean900};
`

export const HowImage = styled.div`
  img {
    width: 100%;
    height: 299px;
    object-fit: cover;
  }
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 627px;
      height: 581px;
      object-fit: cover;
    }
  }
`

export const HowCarousel = styled.div`
  margin-bottom: 242px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
  }
`

export const HowText = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    height: 581px;
    width: 36vw;
    background-color: ${colors.white900};
  }
`

export const Indicators = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  width: 100%;
  bottom: 52px;

  svg {
    margin-right: 14px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`

export const HowParagraph = styled.div`
  padding-top: 24px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 90px;
    padding-top: 108px;
    padding-right: 72px;
  }
`

export const BlueBackground = styled.div`
  position: absolute;
  width: 188px;
  min-height: calc(100vh + 242px);
  background-color: ${colors.softblue900};
  top: 127px;
  z-index: 0;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    left: 0;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    right: 0;
    width: 63vw;
  }
`

export const FindSection = styled.div`
  position: relative;
  min-height: 100vh;
`

export const FindImage = styled.div`
  img {
    width: 100vw;
    left: -${layoutPaddingMobile};
    position: absolute;
    z-index: 0;
    height: 100vh;
    object-fit: cover;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 100vw;
      left: -${layoutPaddingDesktop};
      position: absolute;
      z-index: 0;
      height: 100vh;
      object-fit: cover;
    }
  }
`
export const FindText = styled.div`
  position: relative;
  z-index: 1;
  color: ${colors.ocean900};
  padding-top: 350px;
`
export const FindButton = styled.a`
  background-color: ${colors.seafoam900};
  text-transform: uppercase;
  color: ${colors.white900};
  padding-left: 48px;
  font-size: 16px;
  padding-right: 48px;
  padding-top: 16px;
  padding-bottom: 16px;
`

export const StepsSection = styled.div``

export const Step = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    align-items: center;
  }
`

export const StepImage = styled.div`
  margin-top: 230px;
  margin-left: -${layoutPaddingDesktop};

  img {
    width: 100%;
  }
`

export const StepText = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 238px;
    width: 32vw;
  }
`
