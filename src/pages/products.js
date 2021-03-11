import React from "react"
import { graphql } from "gatsby"

export default function ProductSection({ data }) {

  const productSectionData = data.prismicProduct.data

  return <div>{productSectionData.featured_product_heading}</div>
}

export const query = graphql`
  query ProductSectionQuery {
    prismicProduct {
      data {
        featured_product_description
        featured_product_heading
        featured_product_image {
          url
          dimensions {
            height
            width
          }
        }
        featured_product_name
        learn_more_button_destination
        learn_more_button_text
        products_main_heading
      }
    }
  }
`