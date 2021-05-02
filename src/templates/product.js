import React from "react"
import { graphql } from "gatsby"

export default function Product({ data }) {
  const products = data.allPrismicProduct.edges[0].node

  return <h1>{products.data.product_title}</h1>
}

export const query = graphql`
  query($uid: String!) {
    allPrismicProduct(filter: { uid: { eq: $uid } }) {
      edges { 
        node {
          id
          uid
          data {
            product_title
            button_destination
            button_title
            cta_title
            feature_title
            features {
              feature_name
              feature_image {
                url
              }
            }
            icon_section_title
            icons {
              icon_text
              icon_image {
                url
              }
            }
            product_description {
              text
            }
            product_images {
              image {
                url
              }
            }
            product_type
          }
        }
      }
    }
  }
`
