
import React from "react"
import styled from "styled-components"
import "../style/typography.scss"
import "../style/global.scss"
import dimensions from "../style/dimensions"
import { layoutPaddingDesktop, layoutPaddingMobile } from "../style/variables"
import Footer from "../components/footer.js"
import Header from "../components/header/header.jsx"

const LayoutContainer = styled.div`
@media (min-width: ${dimensions.maxwidthTablet}px) {
  padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};s
}
@media (max-width: ${dimensions.maxwidthTablet}px) {
  padding: 0 ${layoutPaddingMobile} ${layoutPaddingMobile};
}
`
const LayoutBody = styled.div`
  // @media (min-width: ${dimensions.maxwidthTablet}px) {
  //   padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};s
  // }
  // @media (max-width: ${dimensions.maxwidthTablet}px) {
  //   padding: 0 ${layoutPaddingMobile} ${layoutPaddingMobile};
  // }
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutBody>{children}</LayoutBody>
    </LayoutContainer>
  )
}

export default Layout
