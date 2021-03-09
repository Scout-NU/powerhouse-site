import { graphql } from "gatsby"

import React from "react"

export default function Process({ data }) {
  const processData = data.prismicProcessPage.data

  return (
    <div>
      <h1>{processData.process_header}</h1>
    </div>
  )
}

export const query = graphql`
  query ProcessQuery {
    prismicProcessPage {
      data {
        find_button_destination
        find_button_text
        find_description
        find_header
        header_image {
          url
          dimensions {
            width
            height
          }
        }
        how_description {
          text
        }
        how_header
        how_images {
          how_image {
            url
            dimensions {
              width
              height
            }
          }
        }
        process_header
        steps {
          step_description
          step_image {
            url
            dimensions {
              width
              height
            }
          }
          step_title
        }
      }
    }
  }
`
