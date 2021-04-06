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
  background-color: ${colors.gray_icon};
  width: 100%;
  height: 450px;
  margin-top: 80px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    position: absolute;
    right: 0;
    width: 42vw;
    height: 768px;
  }
`

export const FutureHeader = styled.div`
  font-weight: bold;
  @media (min-width: ${dimensions.maxwidthTablet}px) {
  }
`

export const FutureSolarIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background-color: ${colors.gray_icon};
  margin-bottom: 48px;
`

export const FutureDescription = styled.div`
  margin-top: 32px;
  font-size: 18px;
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
    border: solid ${colors.gray_CTA}; 1px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.gray_CTA};
  }
`

export const HomePageContainer = styled.div``
