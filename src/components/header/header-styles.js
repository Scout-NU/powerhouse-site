import styled from "styled-components"
import dimensions from "../../style/dimensions"
import colors from "../../style/colors"
import { Link } from "gatsby"

export const NavContainer = styled.div`
  z-index: 2;
  &.colorChange {
    background-color: ${colors.blue900};
    color: ${colors.white900};
  }

  position: fixed;
  width: 100%;
  transition: 0.5s all ease;

  color: ${colors.white900};

  svg {
    cursor: pointer;
  }
`
export const LogoLink = styled.a`
  color: ${colors.black900};
  text-decoration: none;

  &.home-header {
    color: ${colors.white900};
  }

  img {
    width: 186px;
    margin-bottom: 32px;
  }
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

  &.colorChange {
    a {
      color: ${colors.white900};
    }
  }

  &.home-header {
    a {
      color: ${colors.white900} !important;
    }
  }
`

export const NavLinks = styled.div`
  position: absolute;
  right: 80px;
  top: 40px;
  display: flex;
  color: ${colors.black900};

  &.home-header {
    a {
      color: ${colors.white900};
    }
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  font-weight: bold;
  padding-left: 100px;
  text-decoration: none;

  &.colorChange {
    color: ${colors.white900};
  }

  color: ${colors.black900};

  &.home-header {
    color: ${colors.white900};
  }
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

export const OpenNavContainer = styled.div`
  display: none;

  &.open {
    position: absolute;
    top: 0;
    z-index: 4;
    width: 100%;
    height: 100vh;
    background-color: ${colors.blue900};
    display: inherit;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 17px;
  right: 24px;
`

export const MobileLink = styled.li`
  margin-bottom: 14.5vh;
  display: flex;
  z-index: 5;
  position: relative;

  a {
    color: ${colors.white900};
    font-size: 24px;
    text-decoration: none;
    margin-left: 36px;
  }
`

export const MobileLinks = styled.ul`
  margin-top: 8vh;
  list-style: none;
`
export const NodeLine = styled.div`
  width: 4px;
  height: 80vh;
  position: absolute;
  top: 8vh;
  left: 55px;
  z-index: 3;
  background-color: ${colors.grass900};
`
