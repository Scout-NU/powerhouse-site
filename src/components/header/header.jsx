import React, { useState } from "react"
import Hamburger from "../../vectors/hamburger.svg"
import {
  NavContainer,
  Logo,
  MobileIcon,
  NavLinks,
  NavLink,
} from "./header-styles"

import { NavText } from "../../style/type-styles"

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [colorChange, setColorchange] = useState(false)
  const changeNavbarColor = () => {
    if (typeof window !== "undefined" && window.scrollY >= 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  typeof window !== "undefined" &&
    window.addEventListener("scroll", changeNavbarColor)

  return (
    <NavContainer className={colorChange ? "navbar colorChange" : "navbar"}>
      <Logo>PowerHouse</Logo>

      <MobileIcon onClick={() => setOpen(!open)} className={open ? "open" : ""}>
        <Hamburger />
      </MobileIcon>
      <NavLinks>
        <NavLink href="/about">
          <NavText>ABOUT</NavText>
        </NavLink>
        <NavLink href="/process">
          <NavText>PROCESS</NavText>
        </NavLink>
        <NavLink href="/products">
          <NavText>PRODUCTS</NavText>
        </NavLink>
        <NavLink href="/solutions">
          <NavText>SOLUTIONS</NavText>
        </NavLink>
      </NavLinks>
    </NavContainer>
  )
}
export default Header
