import React from "react"
import styled from "styled-components"
import "../style/typography.scss"
import globalStyles from "../style/global"


import dimensions from "../style/dimensions"
import { layoutPaddingDesktop, layoutPaddingMobile } from "../style/variables"

const LayoutContainer = styled.div`
  padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};

  margin: 0 auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 0 ${layoutPaddingMobile} ${layoutPaddingMobile};
  }
`
const LayoutBody = styled.div``

const Layout = ({ children }) => {
  return (
    <LayoutContainer styles={[globalStyles]} >
      <LayoutBody>{children}</LayoutBody>
    </LayoutContainer>
  )
}

export default Layout
