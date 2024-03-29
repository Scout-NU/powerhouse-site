import React from "react"
import styled from "@emotion/styled"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import dimensions from "../style/dimensions"
import favicon from "../images/favicon.ico"
import Helmet from "react-helmet"
import "../style/global.scss"
import "../style/typography.scss"
import { layoutPaddingDesktop, layoutPaddingMobile } from "../style/variables"

const LayoutContainer = styled.div``
const LayoutBody = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 0 ${layoutPaddingMobile} ${layoutPaddingMobile};
  }
`

const Layout = ({ children, home }) => {
  return (
    <LayoutContainer>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header home={home} />
      <LayoutBody>{children}</LayoutBody>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
