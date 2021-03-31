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
} from "./footer-styles"

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
      )}
    />
  )
}
