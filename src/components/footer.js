import React from "react"
import styled from "styled-components"
import dimensions from "../style/dimensions"
import { StaticQuery, graphql } from "gatsby"

const FooterContainer = styled.div`
  background-color: #c4c4c4;
  width: 100%;
`

const FooterMainContent = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
  }
`

const SocialSection = styled.div`
  margin-left: 32px;
  padding-top: 50px;
`

const FooterHeader = styled.div`
  font-weight: bold;
  font-size: 24px;
`

const SocialIcons = styled.div`
  display: flex;
  padding-top: 15px;
`

const SocialPlaceholder = styled.div`
  margin-right: 12px;
`
const EmailText = styled.div`
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
  padding-top: 25px;
`

const LinkSection = styled.div`
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
    color: black;
  }

  ul {
    list-style: none;
  }
`

const LinkColumn = styled.div`
  padding-right: 9vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-right: 0;
  }
`

const EmailSection = styled.div`
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

const BottomLinks = styled.div`
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

const EmailFormHeader = styled.div``

export default function footer({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query prismicFooter {
          prismicFooter {
            data {
              email
              social_media {
                social_icon {
                  url
                }
                social_link
              }
            }
          }
        }
      `}
      render={data => (
        <FooterContainer>
          <FooterMainContent>
            <SocialSection>
              <FooterHeader>Powerhouse</FooterHeader>
              <SocialIcons>
                {data.prismicFooter.data.social_media.map(social => {
                  return (
                    <a href={social.social_link}>
                      <SocialPlaceholder>
                        <img src={social.social_icon.url} />
                      </SocialPlaceholder>
                    </a>
                  )
                })}
              </SocialIcons>
              <EmailText>{data.prismicFooter.data.email}</EmailText>
            </SocialSection>

            <LinkSection>
              <LinkColumn>
                <ul>
                  <li>
                    <a href="/about">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/about">Process</a>
                  </li>
                </ul>
              </LinkColumn>

              <LinkColumn>
                <ul>
                  <li>
                    <a href="/about">Products</a>
                  </li>
                  <li>
                    <a href="/about">Solutions</a>
                  </li>
                  <li>
                    <a href="/about">FAQ</a>
                  </li>
                </ul>
              </LinkColumn>
            </LinkSection>

            <EmailSection>
              <form>
                <EmailFormHeader>Sign Up For Our Newsletter</EmailFormHeader>
                <input
                  type="text"
                  placeholder="your@email.com"
                  name="email"
                  required
                />
              </form>
            </EmailSection>
          </FooterMainContent>

          <BottomLinks>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Powerhouse 2021</a>
              </li>
            </ul>
          </BottomLinks>
        </FooterContainer>
      )}
    />
  )
}
