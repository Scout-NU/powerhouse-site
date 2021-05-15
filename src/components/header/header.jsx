import React, { useState, useEffect } from "react"
import Hamburger from "../../vectors/hamburger.svg"
import CloseIcon from "../../vectors/CloseIcon.svg"
import { Link } from "gatsby"

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
import { createGlobalStyle } from "styled-components"
import LogoHomepage from "../../images/navlogohomepage.png"
import NavLogo from "../../images/navlogo.png"

const GlobalStyle = createGlobalStyle`
   body {
     overflow: ${props => (props.open == "open" ? "hidden" : "visible")};;
   }
`

export const Header = ({ home }) => {
  const [open, setOpen] = useState(false)
  const [colorChange, setColorchange] = useState(false)
  const [logoImage, setLogoImage] = useState()
  const changeNavbarColor = () => {
    if (typeof window !== "undefined" && window.scrollY >= 80) {
      setColorchange(true)
      setLogoImage(LogoHomepage)
    } else {
      setColorchange(false)
      !home && setLogoImage(NavLogo)
    }
  }

  useEffect(() => {
    home ? setLogoImage(LogoHomepage) : setLogoImage(NavLogo)
  }, [setLogoImage])

  typeof window !== "undefined" &&
    window.addEventListener("scroll", changeNavbarColor)

  return (
    <NavContainer className={colorChange ? "navbar colorChange" : "navbar"}>
      <GlobalStyle open={open ? "open" : ""} />
      <Logo
        alt="PowerHouse Logo"
        className={colorChange ? "navbar colorChange" : "navbar"}
      >
        <div>
          <LogoLink className={home === true ? "home-header" : ""} href="/">
            <img src={logoImage} />
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

            <Link href="/">PowerHouse</Link>
          </MobileLink>
          <MobileLink>
            <Circle />

            <Link href="/about">About</Link>
          </MobileLink>
          <MobileLink>
            <Circle />

            <Link href="/process">Process</Link>
          </MobileLink>
          <MobileLink>
            <Circle />

            <Link href="/products">Products</Link>
          </MobileLink>
          <MobileLink>
            <Circle />

            <Link href="/solutions">Solutions</Link>
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
