import React from "react"
import styled from "styled-components"
import "../style/typography.scss"
import "../style/global.scss"
import dimensions from "../style/dimensions"
import { layoutPaddingDesktop, layoutPaddingMobile } from "../style/variables"

const LayoutContainer = styled.div`

`
const LayoutBody = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 0 ${layoutPaddingMobile} ${layoutPaddingMobile};
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutBody>{children}</LayoutBody>
    </LayoutContainer>
  )
}

export default Layout
