import styled from "styled-components"
import dimensions from "../../style/dimensions"
import colors from "../../style/colors"

export const NavContainer = styled.div`
  z-index: 1;
  padding-bottom: 32px;
  &.colorChange {
    background-color: rgb(0, 0, 0, 0.55);
  }

  position: fixed;
  width: 100%;
  transition: 0.5s all ease;
  color: ${colors.white900};

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

export const NavLink = styled.div`
  font-weight: bold;
  padding-left: 100px;
  text-decoration: none;
  color: ${colors.white900};
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
