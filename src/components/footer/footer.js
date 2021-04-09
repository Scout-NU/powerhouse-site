import React from "react"
import { StaticQuery, graphql } from "gatsby"

import {
  FooterContainer,
  FooterMainContent,
  SocialSection,
  FooterHeader,
  SocialIcons,
  SocialPlaceholder,
  LinkSection,
  LinkColumn,
  EmailSection,
  AddressSection,
  ScoutSection,
  FooterSection,
  SockContainer,
  SockContent,
  ConnectTitle,
  SockEmailForm,
  SockDescription,
  SockCTA,
  FooterImage,
} from "./footer-styles"
import BackgroundImage from "gatsby-background-image"

import { Sub1, H3, Body } from "../../style/type-styles"

export default function footer({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query prismicFooter {
          prismicFooter {
            data {
              sock_description
              sock_title
              footer_image {
                url
              }
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
        <FooterSection>
          <FooterImage>
            <img src={data.prismicFooter.data.footer_image.url} />
          </FooterImage>
          <SockContainer>
            <SockContent>
              <ConnectTitle>
                <Sub1>{data.prismicFooter.data.sock_title}</Sub1>
                <SockEmailForm>
                  <input type="text" placeholder="Enter your email" />
                </SockEmailForm>
                <SockDescription>
                  <Body>{data.prismicFooter.data.sock_description}</Body>
                </SockDescription>

                <SockCTA>Sign Up</SockCTA>
              </ConnectTitle>
            </SockContent>
          </SockContainer>

          <FooterContainer>
            <FooterMainContent>
              <SocialSection>
                <FooterHeader>Powerhouse</FooterHeader>
                <AddressSection>
                  123 Lorem Ipsum Dolor Tempor Incididunt YZ, 12345 123-456-7890
                </AddressSection>
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
                  <input
                    type="text"
                    placeholder="your@email.com"
                    name="email"
                    required
                  />
                </form>
                <SocialIcons>
                  {data.prismicFooter.data.social_media.map(social => {
                    return (
                      <a href={social.social_link}>
                        <SocialPlaceholder />
                      </a>
                    )
                  })}
                </SocialIcons>

                <ScoutSection>Made with love by Scout</ScoutSection>
              </EmailSection>
            </FooterMainContent>
          </FooterContainer>
        </FooterSection>
      )}
    />
  )
}
