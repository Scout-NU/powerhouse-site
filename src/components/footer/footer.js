import React from "react"
import { StaticQuery, graphql } from "gatsby"

import {
  FooterContainer,
  FooterMainContent,
  SocialSection,
  FooterHeader,
  SocialIcons,
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
import { Sub1, Body } from "../../style/type-styles"

export default function footer({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query prismicFooter {
          prismicFooter {
            data {
              powerhouse_title
              sock_description
              sock_title
              address
              footer_image {
                url
              }
              email
              social_media {
                social_type
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
            <img
              alt="PowerHouse house footer background image"
              src={data.prismicFooter.data.footer_image.url}
            />
          </FooterImage>
          <SockContainer>
            <SockContent>
              <ConnectTitle>
                <Sub1>
                  <label>{data.prismicFooter.data.sock_title}</label>
                </Sub1>
                <SockEmailForm>
                  <input type="text" placeholder="Enter your email" />
                </SockEmailForm>
                <SockDescription>
                  <Body>{data.prismicFooter.data.sock_description}</Body>
                </SockDescription>

                <SockCTA role="button" type="submit">
                  Sign Up
                </SockCTA>
              </ConnectTitle>
            </SockContent>
          </SockContainer>

          <FooterContainer>
            <FooterMainContent>
              <SocialSection>
                <FooterHeader>
                  {data.prismicFooter.data.powerhouse_title}
                </FooterHeader>
                <AddressSection>
                  {data.prismicFooter.data.address}{" "}
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
                <SocialIcons>
                  {data.prismicFooter.data.social_media.map((social, idx) => {
                    return (
                      <a key={idx} href={social.social_link}>
                        <img
                          alt={social.social_type}
                          src={social.social_icon.url}
                        />
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
