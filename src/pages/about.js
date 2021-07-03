import { graphql } from "gatsby"
import Layout from "../components/layout"
import React from "react"
import styled from "@emotion/styled"
import dimensions from "../style/dimensions"
import AboutPage from "../components/about/about"
import { Helmet } from "react-helmet"

export default function About({ data }) {
  const aboutData = data.prismicAboutPage.data
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <AboutPage data={aboutData} />
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    prismicAboutPage {
      data {
        company {
          company_name
        }
        company_background_description
        company_background_section_heading
        company_comparison_section_heading
        company_team_heading
        cta_button_text
        industry_context_explanation {
          explanation_description
          explanation_image {
            url
            alt
          }
        }
        industry_context_heading
        industry_context_icon {
          url
          alt
        }
        industry_context_background_image {
          url
          alt
        }
        mission_description
        mission_heading
        mission_icon {
          url
          alt
        }
        mission_image {
          url
          alt
        }
        rows {
          feature_name
          first_company_check
          second_company
          third_company
        }
        product_benefit {
          product_benefit_image {
            url
            alt
          }
          product_benefit_title
        }
        product_feature {
          product_feature_name
        }
        products_navigation_button_destination {
          url
        }
        products_navigation_button_text
        team_member_information {
          contact_button_destination {
            url
          }
          contact_button_text
          team_member_description
          team_member_image {
            url
            alt
          }
          team_member_title
        }
      }
    }
  }
`
