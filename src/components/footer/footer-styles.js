import styled from "styled-components"
import dimensions from "../../style/dimensions"
import {
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../style/variables"

export const FooterContainer = styled.div`
  background-color: rgb(0, 0, 0, 0.55);
  width: 100%;
  color: #ffffff;
  position: absolute;
`

export const FooterMainContent = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
  }
`

export const SocialSection = styled.div`
  padding-left: 80px;
  padding-top: 50px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 32px;
  }
`

export const FooterHeader = styled.div`
  font-weight: bold;
  font-size: 24px;
`

export const SocialIcons = styled.div`
  display: flex;
  padding-top: 15px;
`

export const SocialPlaceholder = styled.div`
  width: 24px;
  height: 24px;
  background-color: #a4a4a4;
  border-radius: 8px;
  margin-right: 16px;
`
export const EmailText = styled.div`
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
  padding-top: 25px;
`

export const LinkSection = styled.div`
  display: flex;
  margin-left: 9vw;
  padding-top: 50px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 0px;
  }

  li {
    padding-bottom: 47px;
    font-size: 18px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  ul {
    list-style: none;
  }
`

export const LinkColumn = styled.div`
  padding-right: 9vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-right: 0;
  }
`

export const EmailSection = styled.div`
  margin-left: 32px;

  input {
    width: 20vw;
    height: 36px;
    margin-top: 10px;
    border: solid #626262 1px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    input {
      width: 80%;
      height: 36px;
      margin-top: 10px;
      border: solid #626262 1px;
    }
  }

  input::placeholder {
    padding-left: 14px;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 50px;
    position: absolute;
    right: 62px;
  }
`

export const BottomLinks = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-bottom: 30px;
  }

  li {
    font-size: 12px;
    padding-right: 28px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      padding-top: 80px;
      padding-bottom: 12px;
    }
  }
`

export const AddressSection = styled.div`
  width: 177px;
  padding-top: 16px;
`
export const ScoutSection = styled.div`
  margin-top: 32px;
  color: #ffffff;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-bottom: 48px;
  }
`

export const FooterSection = styled.div`
  position: relative;
  // height: 725px;
`

export const SockContainer = styled.div`
  z-index: 1;
  position: relative;
`

export const SockContent = styled.div`
  padding-left: ${layoutPaddingDesktop};
  padding-right: ${layoutPaddingDesktop};

  padding-top: 89px;
  margin-bottom: 91px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${layoutPaddingMobile};
    padding-right: ${layoutPaddingMobile};
  }
`

export const ConnectTitle = styled.div``

export const SockEmailForm = styled.form`
  margin-top: 32px;
  margin-bottom: 32px;

  input[type="text"] {
    padding-top: 32px;
    background: transparent;
    border: none;
    width: 36vw;
    border-bottom: 4px solid #302f51;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    input[type="text"] {
      padding-top: 32px;
      background: transparent;
      border: none;
      width: 100%;
      border-bottom: 4px solid #302f51;
    }
  }

  input[type="text"]::placeholder {
    font-size: calc(20px + (32 - 20) * ((100vw - 320px) / (1440 - 320)));
    color: #302f51;
  }
`

export const SockDescription = styled.div`
  width: 36vw;
  margin-bottom: 48px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const SockCTA = styled.a`
  font-size: 16px;
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #f36135;
  text-transform: uppercase;
  color: #ffffff;
`
export const FooterImage = styled.div`
  position: absolute;
  z-index: 0;
  height: 753px;

  img {
    width: 100vw;
    object-fit: cover;
    height: 100%;
    


  }
`
