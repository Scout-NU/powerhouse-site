import { graphql } from "gatsby"
import Layout from "../components/layout"
import React from "react"
import ProcessComponent from "../components/process/process"
import { Helmet } from "react-helmet"

export default function Process({ data }) {
  const processData = data.prismicProcessPage.data

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Process</title>
      </Helmet>
      <ProcessComponent data={data} />
    </Layout>
  )
}

export const query = graphql`
  query ProcessQuery {
    prismicProcessPage {
      data {
        how_header
        how_images {
          how_image {
            url
          }
          how_paragraph {
            text
          }
        }
        find_header
        find_image {
          url
        }

        find_button_text

        steps {
          step_image {
            url
          }
          step_description
          step_title
        }
      }
    }
  }
`
