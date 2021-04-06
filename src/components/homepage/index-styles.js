import styled from "styled-components"
import dimensions from "../../style/dimensions"
import {
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../style/variables"
import "../../style/colors"
import colors from "../../style/colors"

export const HeroContainer = styled.div`
  height: 100vh;
  background-color: ${colors.gray_image};
  margin-left: -${layoutPaddingDesktop} !important;
  width: 100vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: -${layoutPaddingMobile} !important;
  }
`

export const HeroTextSection = styled.div`
  padding-top: 275px;
  padding-left: ${layoutPaddingDesktop};
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${layoutPaddingMobile};
  }
`

export const HeroHeadline = styled.div``

export const HeroDescription = styled.div``

export const HeroCTA = styled.div`
  margin-top: 64px;
  a {
    background-color: ${colors.gray_CTA};
    text-transform: uppercase;
    color: ${colors.white900};
    padding-left: 48px;
    font-size: 16px;
    padding-right: 48px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`
export const HomePageContainer = styled.div``

export const ImpactSection = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    min-height: 100vh;
  }
`
export const ImpactHeader = styled.div`
  width: 43vw;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`
export const ImpactIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${colors.gray_icon};
  border-radius: 8px;
  margin-top: 128px;
`

export const ImpactStats = styled.div`
  margin-top: 64px;
  margin-bottom: 174px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: center;
    margin-top: 132px;
    margin-bottom: 64px;
  }
`

export const ImpactExample = styled.div`
  padding-right: 9vw;
`

export const ImpactStat = styled.div`
  text-align: center;
`

export const ImpactStatIcon = styled.div`
  width: 194px;
  height: 194px;
  background-color: ${colors.gray_icon};
  margin-left: auto;
  margin-right: auto;
`
