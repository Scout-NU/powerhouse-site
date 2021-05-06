import React from "react"
import { graphql } from "gatsby"

export default function ProductSection({ data }) {
  const productSectionData = data.prismicProductPage.data

  return (
    <div>
      {/* Mapping over individual products.  TODO: separate products based on category (homeowner or commerical) */}
      {productSectionData.products.map(product => {
        return <h1>{product.product.document.data.product_title}</h1>
      })}
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
                  feature_icon {
                    url
                    dimensions {
                      height
                      width
                    }
                  }
                  feature_title
                  features {
                    feature_name
                    feature_description
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
