import { graphql } from "gatsby"

import React from "react"

export default function About({ data }) {
    const aboutData = data.prismicAboutPage.data

    return (
        <div>
            <h1>TestTestTest</h1>
        </div>
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
        cta_button_destination
        cta_button_text
        industry_context_explanation {
          explanation_description
        }
        industry_context_heading
        mission_description
        mission_heading
        product_benefit {
          product_benefit_title
        }
        product_feature {
          product_feature_name
        }
        products_navigation_button_destination
        products_navigation_button_text
        team_member_information {
          contact_button_destination
          contact_button_text
          team_member_description
          team_member_title
        }
      }
    }
  }
`
