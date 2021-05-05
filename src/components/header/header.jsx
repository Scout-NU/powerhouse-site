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

export const Header = ({ home }) => {
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
    <NavContainer
      className={
        (colorChange ? "navbar colorChange" : "navbar") ||
        (home === true ? "home-header" : "")
      }
    >
      <Logo alt="PowerHouse Logo" className={home === true ? "home-header" : ""}>PowerHouse</Logo>

      <MobileIcon onClick={() => setOpen(!open)} className={open ? "open" : ""}>
        <Hamburger className="hamburger" />
      </MobileIcon>
      <NavLinks className={home === true ? "home-header" : ""}>
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
