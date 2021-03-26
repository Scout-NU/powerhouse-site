import styled from "styled-components"
import dimensions from "../../style/dimensions"
export const FooterContainer = styled.div`
  background-color: #848484;
  width: 100%;
  color: #ffffff;
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