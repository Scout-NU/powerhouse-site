import React from "react"
import { graphql } from "gatsby"

export default function Product({ data }) {
  const use_case = data.allPrismicUseCase.edges[0].node

  return <h1>{use_case.data.preview_title}</h1>
}

export const query = graphql`
  query($uid: String!) {
    allPrismicUseCase(filter: { uid: { eq: $uid } }) {
    edges {
      node {
        uid
        data {
          preview_title
          preview_image {
            url
          }
          specific_reason {
            specific_reason_heading
            specific_reason_description
          }
          reasons_main_heading
          preview_description
          overview_image_two {
            url
          }
          overview_image_one {
            url
          }
          overview_heading
          learn_more_button_text
          learn_more_button_destination {
            url
          }
          demo_video {
            url
          }
          demo_heading
          cta_button_text
          cta_button_destination {
            url
          }
        }
      }
    }
  }
  }
`
