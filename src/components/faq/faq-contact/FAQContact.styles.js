import styled from "@emotion/styled"
import colors from "../../../style/colors"
import dimensions from "../../../style/dimensions"
import { H3 } from "../../../style/type-styles"
import {
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../../style/variables"

export const Banner = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${props => props.imageUrl});
  width: 100vw;
  padding: 40px 60px;
  margin: -${layoutPaddingDesktop};
  height: 70vh;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    height: 40vh;
    margin: -${layoutPaddingMobile};
  }
`

export const CTABackground = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.white900};
`

export const CTATitle = styled(H3)`
  color: ${colors.blue900};
`
