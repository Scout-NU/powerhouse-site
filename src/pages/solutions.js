import { graphql } from "gatsby"

import React from "react"
import { Helmet } from "react-helmet"

import SolutionsComponent from "../components/solutions/solutions"
import Layout from "../components/layout"

export default function UseCasesPage({ data }) {
  const useCasesPageData = data.prismicUseCasesPage.data

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Solutions</title>
      </Helmet>
      <SolutionsComponent data={data} />
    </Layout>
  )
}

export const query = graphql`
  query UseCasesPageQuery {
    prismicUseCasesPage {
      data {
        tagline_image {
          url
        }
        tagline_heading
        tagline_description
        cta_button_destination {
          url
        }
        cta_button_text
        call_to_action_heading
        cta_image {
          url
        }
        use_cases {
          use_case {
            document {
              ... on PrismicUseCase {
                uid
                data {
                  preview_title
                  preview_image {
                    url
                  }
                  preview_description
                }
              }
            }
          }
        }
      }
    }
  }
`
