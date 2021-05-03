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
  color: ${colors.blue900};
`

export const HowImage = styled.div`
  img {
    width: 627px;
    height: 581px;
    object-fit: cover;
  }
`

export const HowCarousel = styled.div`
  display: flex;
  margin-bottom: 242px;
`

export const HowText = styled.div`
  width: 36vw;
  background-color: ${colors.white900};
  height: 581px;
`

export const HowParagraph = styled.div`
  padding-left: 90px;
  padding-top: 108px;
  padding-right: 72px;
`

export const BlueBackground = styled.div`
  width: 63vw;
  position: absolute;
  right: 0;
  min-height: calc(100vh + 242px);
  background-color: ${colors.softblue900};
  top: 127px;
  z-index: 0;
`

export const FindSection = styled.div`
  position: relative;
  min-height: 100vh;
`

export const FindImage = styled.div`
  img {
    width: 100vw;
    left: -${layoutPaddingDesktop};
    position: absolute;
    z-index: 0;
    height: 100vh;
    object-fit: cover;
  }
`
export const FindText = styled.div`
  position: relative;
  z-index: 1;
  color: ${colors.blue900};
  padding-top: 350px;
`
export const FindButton = styled.a`
  background-color: ${colors.orange900};
  text-transform: uppercase;
  color: ${colors.white900};
  padding-left: 48px;
  font-size: 16px;
  padding-right: 48px;
  padding-top: 16px;
  padding-bottom: 16px;
`

export const StepsSection = styled.div`


`

export const Step = styled.div`

display: flex;
align-items: center;

`

export const StepImage = styled.div`

margin-top: 230px;
margin-left: -${layoutPaddingDesktop};

`

export const StepText = styled.div`
justify-content: center;
padding-left: 238px;
width: 32vw;
`