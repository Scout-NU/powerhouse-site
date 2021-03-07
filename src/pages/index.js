import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {

  const homepageData = data.prismicHomepage.data

  return <div>{homepageData.hero_headline}</div>
}

export const query = graphql`
  query HomePageQuery {
    prismicHomepage {
      data {
        section_title
        section_description
        button_text
        button_destination
        hero_button_destination
        hero_cta_text
        hero_headline
        hero_subtext
        impact_description
        impact_section_title
        email_description
        email_eyebrow_heading
        enter_email_label
        sign_up_button_destination
        sign_up_button_text
      }
    }
  }
`
