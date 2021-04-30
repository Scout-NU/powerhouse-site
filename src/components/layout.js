import React from "react"
import styled from "styled-components"
import "../style/typography.scss"
import "../style/global.scss"
import dimensions from "../style/dimensions"
import { layoutPaddingDesktop, layoutPaddingMobile } from "../style/variables"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"

const LayoutContainer = styled.div``
const LayoutBody = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};s
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 0 ${layoutPaddingMobile} ${layoutPaddingMobile};
  }
`

const Layout = ({ children, home }) => {
  return (
    <LayoutContainer>
      <Header home={home} />
      <LayoutBody>{children}</LayoutBody>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
