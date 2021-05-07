import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SingularProduct from "../components/singular-product/singular-product"

export default function Home({ data }) {
  const productData = data.prismicProduct.data

  return (
    <Layout>
      <SingularProduct data={productData} />
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery {
    prismicProduct {
        data {
          button_destination
          button_title
          cta_title
          feature_title
          features {
            feature_description {
              text
            }
            feature_image {
              dimensions {
                height
                width
              }
              url
            }
            feature_name
          }
          icon_section_title
          icons {
            icon_image {
              dimensions {
                height
                width
              }
              url
            }
            icon_text
          }
          product_description {
            text
          }
          product_images {
            image {
              dimensions {
                height
                width
              }
              url
            }
          }
          product_title
          product_type
        }
      }
  }
`
