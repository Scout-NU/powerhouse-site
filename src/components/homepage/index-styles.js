import styled from "styled-components"
import dimensions from "../../style/dimensions"
import {
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../style/variables"
import "../../style/colors"
import colors from "../../style/colors"

export const HeroImage = styled.div`
  position: absolute;
  top: 0;
  z-index: 0;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`

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
  z-index: 2;
  color: ${colors.white900};
  position: relative;
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
    background-color: ${colors.orange900};
    text-transform: uppercase;
    color: ${colors.white900};
    padding-left: 48px;
    font-size: 16px;
    padding-right: 48px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`

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

export const FutureSection = styled.div`
  height: 100vh;
  position: relative;
  padding-top: 64px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    align-items: center;
    padding-top: 0px;
  }
`

export const FutureText = styled.div``

export const FutureImage = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 80px;

  img {
    object-fit: cover;
    width: 100%;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    position: absolute;
    right: -${layoutPaddingDesktop};
    width: 42vw;
    height: 768px;
  }
`

export const FutureHeader = styled.div`
  font-weight: bold;
  color: ${colors.blue900};
  @media (min-width: ${dimensions.maxwidthTablet}px) {
  }
`

export const FutureSolarIcon = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 48px;



  @media (min-width: ${dimensions.maxwidthTablet}px) {
    svg {
      width: 118px;
      height: 42px;
    }
  }
`

export const FutureDescription = styled.div`
  margin-top: 32px;
  font-size: 18px;
  color: ${colors.blue900};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: 16px;
  }
`
export const FutureCTA = styled.div`
  margin-top: 64px;

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

export const HomePageContainer = styled.div`
  position: relative;
  z-index: 0;
`

export const SolutionsSection = styled.div`
  height: 100vh;
  margin-top: 100px;
  color: ${colors.blue900};
  padding-bottom: 100px;

`

export const SolutionsCard = styled.div`
  a {
    text-decoration: none;
    color: ${colors.blue900};
  }
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 100%;
      object-fit: cover;
    }

    margin-bottom: 48px;
    margin-top: 48px;
  }
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 25vw;
      height: 248px;

      object-fit: cover;
    }
  }

  text-align: center;
`

export const SolutionsCards = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
  }
`

export const SolutionsCTA = styled.div`
margin-top: 64px;
display: flex;
justify-content: center;

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
