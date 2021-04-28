import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductPage from "../components/product_page/product-page"

export default function ProductSection({ data }) {
  const productSectionData = data.prismicProductPage.data

  return (
    <Layout>
      <ProductPage data={productSectionData}/>
    </Layout>
  )
}

export const query = graphql`
  query ProductPageQuery {
    prismicProductPage {
      data {
        featured_product_description
        featured_product_heading
        featured_product_image {
          alt
          url
        }
        featured_product_name
        learn_more_button_text
        learn_more_button_text_destination
        model_scope {
          model_scope_heading
        }
        product_page_main_heading

        products {
          product {
            document {
              ... on PrismicProduct {
                data {
                  product_title
                  button_destination
                  button_title
                  cta_title
                  feature_title
                  features {
                    feature_name
                    feature_description {
                      text
                    }
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
      }
    }
  }
`
