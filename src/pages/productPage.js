import React from "react"
import { graphql } from "gatsby"

export default function ProductSection({ data }) {

  const productSectionData = data.prismicProductPage.data

  return (
    <div>
      <h1>TestTestTest</h1>
    </div>
  )
}

export const query = graphql`
  query ProductPageQuery {
    prismicProductPage {
      data {
        featured_product_description
        featured_product_heading
        featured_product_name
        learn_more_button_text
        learn_more_button_text_destination
        model_content {
          model_button_destination
          model_button_text
          model_description
          model_name
        }
        model_scope {
          model_scope_heading
        }
        product_page_main_heading
      }
    }
  }
`