import React, { useState } from "react"
import Hamburger from "../../vectors/hamburger.svg"
import CloseIcon from "../../vectors/CloseIcon.svg"
import {
  NavContainer,
  Logo,
  MobileIcon,
  NavLinks,
  NavLink,
  OpenNavContainer,
  CloseButton,
  MobileLink,
  MobileLinks,
  NodeLine,
  LogoLink,
} from "./header-styles"

import Circle from "../../vectors/circle.svg"

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
    <NavContainer className={colorChange ? "navbar colorChange" : "navbar"}>
      <Logo
        alt="PowerHouse Logo"
        className={colorChange ? "navbar colorChange" : "navbar"}
      >
        <div>
          <LogoLink className={home === true ? "home-header" : ""} href="/">
            PowerHouse
          </LogoLink>
        </div>
      </Logo>

      <MobileIcon onClick={() => setOpen(!open)} className={open ? "open" : ""}>
        <Hamburger className="hamburger" />
      </MobileIcon>

      <OpenNavContainer className={open ? "open" : ""}>
        <CloseButton
          onClick={() => setOpen(!open)}
          className={open ? "open" : ""}
        >
          <CloseIcon />
        </CloseButton>
        <NodeLine />

        <MobileLinks>
          <MobileLink>
            <Circle />

            <a href="/">PowerHouse</a>
          </MobileLink>
          <MobileLink>
            <Circle />

            <a href="/about">About</a>
          </MobileLink>
          <MobileLink>
            <Circle />

            <a href="/process">Process</a>
          </MobileLink>
          <MobileLink>
            <Circle />

            <a href="/products">Products</a>
          </MobileLink>
          <MobileLink>
            <Circle />

            <a href="/solutions">Solutions</a>
          </MobileLink>
        </MobileLinks>
      </OpenNavContainer>

      <NavLinks className={home === true ? "home-header" : ""}>
        <NavLink
          className={colorChange ? "colorChange" : "navbar"}
          href="/about"
        >
          <NavText>ABOUT</NavText>
        </NavLink>
        <NavLink
          className={colorChange ? "colorChange" : "navbar"}
          href="/process"
        >
          <NavText>PROCESS</NavText>
        </NavLink>
        <NavLink
          className={colorChange ? "colorChange" : "navbar"}
          href="/products"
        >
          <NavText>PRODUCTS</NavText>
        </NavLink>
        <NavLink
          className={colorChange ? "colorChange" : "navbar"}
          href="/solutions"
        >
          <NavText>SOLUTIONS</NavText>
        </NavLink>
      </NavLinks>
    </NavContainer>
  )
}
export default Header
