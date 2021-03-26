import React, { useState } from "react"
import styled from "styled-components"
import dimensions from "../../style/dimensions"
import Hamburger from "../../vectors/hamburger.svg"

const NavContainer = styled.div``

const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding-top: 32px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    text-align: center;
    font-size: 20px;
    padding-top: 24px;
  }
`

const NavLinks = styled.div`
  position: absolute;
  right: 80px;
  top: 40px;
  display: flex;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`

const NavLink = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding-left: 100px;
`

const MobileIcon = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    left: 24px;
    top: 32px;
    position: absolute;
  }
`

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <NavContainer>
      <Logo>PowerHouse</Logo>

      <MobileIcon onClick={() => setOpen(!open)} className={open ? "open" : ""}>
        <Hamburger />
      </MobileIcon>
      <NavLinks>
        <NavLink>ABOUT</NavLink>
        <NavLink>PROCESS</NavLink>
        <NavLink>PRODUCTS</NavLink>
        <NavLink>SOLUTIONS</NavLink>
      </NavLinks>
    </NavContainer>
  )
}
export default Header
