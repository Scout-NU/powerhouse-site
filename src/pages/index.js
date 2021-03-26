import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import dimensions from "../style/dimensions"
import { layoutPaddingDesktop, layoutPaddingMobile } from "../style/variables"

const HeroContainer = styled.div`
  height: 100vh;
  background-color: #c4c4c4;
  margin-left: -${layoutPaddingDesktop} !important;
  width: 100vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: -${layoutPaddingMobile} !important;
  }
`

const HeroTextSection = styled.div`
  padding-top: 275px;
  padding-left: ${layoutPaddingDesktop};
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${layoutPaddingMobile};
  }
`

const HeroHeadline = styled.div`
  font-size: calc(64px + (64 - 32) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
`

const HeroDescription = styled.div`
  font-size: calc(24px + (24 - 16) * ((100vw - 300px) / (1440 - 300)));
`

const HeroCTA = styled.div`
  margin-top: 64px;
  a {
    background-color: #646464;
    text-transform: uppercase;
    color: #ffffff;
    padding-left: 48px;
    font-size: 16px;
    padding-right: 48px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`

export default function Home({ data }) {
  const homepageData = data.prismicHomepage.data

  return (
    <Layout>
      <HeroContainer>
        <HeroTextSection>
          <HeroHeadline>{homepageData.hero_headline}</HeroHeadline>
          <HeroDescription>{homepageData.hero_subtext}</HeroDescription>
          <HeroCTA>
            <a href={homepageData.hero_button_destination.text}>
              {homepageData.hero_cta_text}
            </a>
          </HeroCTA>
        </HeroTextSection>
      </HeroContainer>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    prismicHomepage {
      data {
        section_title
        section_description
        section_image {
          url
          dimensions {
            height
            width
          }
        }
        button_text
        button_destination {
          target
        }
        hero_button_destination {
          target
        }
        hero_cta_text
        hero_headline
        hero_subtext
        hero_background_image {
          url
          dimensions {
            height
            width
          }
        }
        impact_description
        impact_section_title
        impact_image {
          url
          dimensions {
            height
            width
          }
        }
        impact_example {
          impact_big_text
          impact_small_text
          impact_example_image {
            url
            dimensions {
              height
              width
            }
          }
        }
        email_description
        email_eyebrow_heading
        enter_email_label
        sign_up_button_destination {
          target
        }
        sign_up_button_text
      }
    }
  }
`
