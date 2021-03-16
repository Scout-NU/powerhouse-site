import React from "react"
import styled from "styled-components"
import "../style/typography.scss"

import dimensions from "../style/dimensions"
import { layoutPaddingDesktop, layoutPaddingMobile } from "../style/variables"

const LayoutContainer = styled.div`
  body * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body,
  #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  body {
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;
    }
  }

  /*
  A workaround for forcing accessibility wrappers
  to have a 100% height.
  Reach Router issue here: https: //github.com/reach/router/issues/63
  */
  #___gatsby,
  div[role="group"][tabindex] {
    height: 100%;
    min-height: 100% !important;
  }

  padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};

  margin: 0 auto;
`
const LayoutBody = styled.div`
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 0 ${layoutPaddingDesktop} ${layoutPaddingDesktop};
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
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
