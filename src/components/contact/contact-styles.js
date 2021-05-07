import styled from "@emotion/styled"
import colors from "../../style/colors"
import dimensions from "../../style/dimensions"
import { fontSizes } from "../../style/type-styles"
import {
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../style/variables"

export const ContactContainer = styled.div`
  min-height: 100vh;
`

export const ContactForm = styled.div`
  padding-top: 172px;
  width: 100%;
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 36vw;
  }
  color: ${colors.blue900};
  input {
    border-width: 0 0 2px;
    border-color: ${colors.input_gray};
    width: 100%;
    margin-bottom: 32px;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    input {
      border-width: 0 0 2px;
      border-color: ${colors.input_gray};
      width: 36vw;
      margin-bottom: 32px;
    }
  }
  input::placeholder {
    font-size: ${fontSizes.body};
    color: ${colors.input_gray};
  }
`

export const ContactSection = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
  }
`
export const ContactDescription = styled.div`
  margin-bottom: 64px;
`
export const ContactButton = styled.a`
  font-size: 16px;
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${colors.seafoam900};
  text-transform: uppercase;
  color: ${colors.white900};

  border: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 46px -9px ${colors.seafoam900};
  }
`

export const ContactImageSection = styled.div`
  margin-right: -${layoutPaddingDesktop};
  img {
    margin-top: 172px;
    right: 0px;
    width: 50vw;
    height: 531px;
    object-fit: cover;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-right: -${layoutPaddingMobile};

    img {
      margin-top: 172px;
      right: 0px;
      width: 100%;
      height: 263px;
      object-fit: cover;
    }
  }
`

export const SpecificContactInfo = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-apart;
  }
`

export const EmailSection = styled.div`
  margin-right: 127px;
  margin-top: 64px;
  color: ${colors.ocean900};
`

export const AddressSection = styled.div`
  margin-top: 64px;
  color: ${colors.ocean900};
  width: 228px;
  margin-bottom: 110px;
`

export const UseCaseSection = styled.div``
