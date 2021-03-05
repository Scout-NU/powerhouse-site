import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return <div>{data.prismicTestContent.data.test_title[0].text}</div>
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
