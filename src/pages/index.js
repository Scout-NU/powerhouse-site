import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return <div>{data.prismicTestContent.data.test_title[0].text}</div>
}

export const query = graphql`
  query TestQuery {
    prismicTestContent {
      data {
        test_title {
          text
          type
        }
      }
    }
  }
`
