import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import dimensions from "../style/dimensions"

const ProductPageHeading = styled.div`
  font-size: calc(90px + (90 - 32) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
`

const FeaturedProductSection = styled.div`
  width: 100%;
  padding-top: 40px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 86vw;
    display: flex;
  }
`

const FeaturedProductImage = styled.div`
  width: 47vw;
  height: 432px;
  background-color: #C4C4C4;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    height: 225px;
  }
`

const FeaturedProductText = styled.div`
  padding-left: 5vw;
  padding-top: 52px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 0vw;
    padding-top: 26px;
  }
`

const FeaturedProductHeading = styled.div`
  font-size: calc(20px + (20 - 16) * ((100vw - 300px) / (1440 - 300)));
  text-transform: uppercase;
`

const FeaturedProductName = styled.div`
  font-size: calc(40px + (40 - 24) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
  padding-top: 17px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 8px;
  }
`

const FeaturedProductDescription = styled.div`
  font-size: calc(18px + (18 - 16) * ((100vw - 300px) / (1440 - 300)));
  padding-top: 32px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 15px;
  }
`

const ModelScope = styled.div`
  margin-top: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 105px;
  }
`

const ModelScopeHeading = styled.div`
  font-size: calc(20px + (20 - 16) * ((100vw - 300px) / (1440 - 300)));
  text-transform: uppercase;
`

const ProductsGroup = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
  }
`

const Product = styled.div`
  padding-top: 33px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 35px;
  }
`

const ProductImage = styled.div`
  background-color: #C4C4C4;
  width: 21vw;
  height: 245px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

const ProductName = styled.div`
  font-size: calc(30px + (30 - 24) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
  padding-top: 49px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 24px;
  }
`

const ProductDescription = styled.div`
  font-size: 15px;
  padding-top: 15px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    visibility: hidden;
  }
`

export default function ProductSection({ data }) {
  const productSectionData = data.prismicProductPage.data

  return (
    <Layout>
      <ProductPageHeading>{productSectionData.product_page_main_heading}</ProductPageHeading>
      <FeaturedProductSection>
        <FeaturedProductImage></FeaturedProductImage>
        <FeaturedProductText>
          <FeaturedProductHeading>{productSectionData.featured_product_heading}</FeaturedProductHeading>
          <FeaturedProductName>{productSectionData.featured_product_name}</FeaturedProductName>
          <FeaturedProductDescription>{productSectionData.featured_product_description}</FeaturedProductDescription>
        </FeaturedProductText>
      </FeaturedProductSection>

      <div>
        {productSectionData.model_scope.map(scope => {
          return (
            <ModelScope>
              <ModelScopeHeading>{scope.model_scope_heading}</ModelScopeHeading>
              <ProductsGroup>
                {productSectionData.products.map(product => {
                  return (
                    <Product>
                      <ProductImage></ProductImage>
                      <ProductName>{product.product_title}</ProductName>
                      <ProductDescription>{product.product_description}</ProductDescription>
                    </Product>
                  )
                })}
              </ProductsGroup>
            </ModelScope>
          )
        })}
      </div>
    </Layout>
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
