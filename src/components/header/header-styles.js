import styled from "styled-components"
import dimensions from "../../style/dimensions"
import colors from "../../style/colors"

export const NavContainer = styled.div`
  background-color: ${colors.gray_image};
  padding-bottom: 32px;
  &.colorChange {
    background-color: ${colors.gray_CTA};
  }

  position: fixed;
  width: 100%;
  transition: 0.5s all ease;
`

export const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding-top: 32px;
  padding-left: 80px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    text-align: center;
    font-size: 20px;
    padding-top: 24px;
    padding-left: 0px;
  }
`

export const NavLinks = styled.div`
  position: absolute;
  right: 80px;
  top: 40px;
  display: flex;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`

export const NavLink = styled.a`
  font-weight: bold;
  font-size: 16px;
  padding-left: 100px;
  text-decoration: none;
  color: #000000;
`

export const MobileIcon = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    left: 24px;
    top: 32px;
    position: absolute;
  }
`
