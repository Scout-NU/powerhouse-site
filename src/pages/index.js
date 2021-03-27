import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import dimensions from "../style/dimensions"

const FutureSection = styled.div`
  height: 100vh;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    align-items: center;
  }
`

const FutureText = styled.div``

const FutureImage = styled.div`
  background-color: #c4c4c4;
  width: 100%;
  height: 450px;
  margin-top: 80px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    position: absolute;
    right: 0;
    width: 42vw;
    height: 768px;
  }
`

const FutureHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    font-size: 48px;
  }
`

const FutureSolarIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background-color: #a4a4a4;
  margin-bottom: 48px;
`

const FutureDescription = styled.div`
  margin-top: 32px;
  font-size: 18px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: 16px;
  }
`

const FutureCTA = styled.div`
  margin-top: 64px;

  a {
    padding-right: 60px;
    padding-left: 60px;
    padding-top: 16px;
    padding-bottom: 16px;
    border: solid #646464 1px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: #646464;
  }
`

export default function Home({ data }) {
  const homepageData = data.prismicHomepage.data

  return (
    <Layout>
      <FutureSection>
        <FutureText>
          <FutureSolarIcon></FutureSolarIcon>
          <FutureHeader>{homepageData.section_title}</FutureHeader>
          <FutureDescription>
            {homepageData.section_description}
          </FutureDescription>

          <FutureCTA>
            <a href={homepageData.button_destination}>
              {homepageData.button_text}
            </a>
          </FutureCTA>
        </FutureText>

        <FutureImage></FutureImage>
      </FutureSection>
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
