import { graphql } from "gatsby"

import React from "react"

export default function UseCase({ data }) {
    const useCaseData = data.prismicUseCase.data

    return (
        <div>
            <h1>{useCaseData.preview_title}</h1>
        </div>
    )
}

export const query = graphql`
  query UseCaseQuery {
    prismicUseCase {
      data {
        learn_more_button_destination
        learn_more_button_text
        overview_description
        overview_heading
        overview_image_one {
            url
            dimensions {
            height
            width
            }
        }
        overview_image_two {
            url
            dimensions {
            height
            width
            }
        }
        preview_description
        preview_image {
            url
            dimensions {
            height
            width
            }
        }
        preview_title
      }
    }
  }
`
