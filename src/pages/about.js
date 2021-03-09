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
    prismicAbout {
      data {
        company_background_description
        company_background_section_heading
        company_team_heading
        cta_button_destination
        cta_button_text
        industry_context_heading
        mission_description
        mission_heading
        products_navigation_button_destination
        products_navigation_button_text
        company_comparison_section_heading
      }
    }
  }
`
