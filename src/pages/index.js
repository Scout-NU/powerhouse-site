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
        hero_button_destination
        hero_cta_text
        hero_headline
        hero_subtext
      }
    }
  }
`
