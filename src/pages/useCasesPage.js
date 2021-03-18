import { graphql } from "gatsby"

import React from "react"

export default function UseCasesPage({ data }) {
    const useCasesPageData = data.prismicUseCasesPage.data

    return (
        <div>
            <h1>{useCasesPageData.process_header}</h1>
        </div>
    )
}

export const query = graphql`
  query UseCasesPageQuery {
    prismicUseCasesPage {
      data {
        call_to_action_heading
        cta_button_destination {
          target
        }
        cta_button_text
        tagline_description
        tagline_heading
        tagline_image {
            url
            dimensions {
                height
                width
            }
        }
        use_case {
            link_type
        }
      }
    }
  }
`
