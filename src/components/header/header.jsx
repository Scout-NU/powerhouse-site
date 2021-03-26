import React, { useState } from "react"
import Hamburger from "../../vectors/hamburger.svg"
import {
  NavContainer,
  Logo,
  MobileIcon,
  NavLinks,
  NavLink,
} from "./header-styles"

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <NavContainer>
      <Logo>PowerHouse</Logo>

      <MobileIcon onClick={() => setOpen(!open)} className={open ? "open" : ""}>
        <Hamburger />
      </MobileIcon>
      <NavLinks>
        <NavLink href="/about">ABOUT</NavLink>
        <NavLink href="/process">PROCESS</NavLink>
        <NavLink href="/products">PRODUCTS</NavLink>
        <NavLink href="/solutions">SOLUTIONS</NavLink>
      </NavLinks>
    </NavContainer>
  )
}
export default Header
