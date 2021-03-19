import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return <Layout>{data.prismicTestContent.data.test_title[0].text}</Layout>
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