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
        cta_button_destination {
          target
        }
        cta_button_text
        demo_heading
        demo_video {
            width
            url
        }
        learn_more_button_destination {
          target
        }
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
        reasons_main_heading
        specific_reason {
            specific_reason_description
            specific_reason_heading
        }
      }
    }
  }
`
