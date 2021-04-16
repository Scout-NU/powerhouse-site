import React from "react"
import { graphql } from "gatsby"
import {
  SingularProductContainer,
  HeroSection,
  ImageContainer,
  MainImage,
  SmallImageContainer,
  SmallImage,
  TextContainer,
  ProductType,
  ProductName,
  ProductDescription,
  IconSection,
  IconSectionHeading,
  IconContainer,
  Icon,
  IconImage,
  IconCaption,
  FeatureSpecSection,
  FeatureIcon,
  FeatureSpecHeading,
  FeatureSpecFeatures,
  Feature,
  FeatureName,
  FeatureImage,
  FeatureDescription,
} from "../components/singular-product/singular-product-styles"

import Layout from "../components/layout"
export default function Product({ data }) {
  const products = data.allPrismicProduct.edges[0].node

  return (
    <Layout>
    <SingularProductContainer>
      <HeroSection>
        <ImageContainer>
          <MainImage></MainImage>
          <SmallImageContainer>
            <SmallImage></SmallImage>
            <SmallImage></SmallImage>
            <SmallImage></SmallImage>
            <SmallImage></SmallImage>
            <SmallImage></SmallImage>
          </SmallImageContainer>
        </ImageContainer>
        <TextContainer>
          <ProductType>{products.data.product_type}</ProductType>
          <ProductName>{products.data.product_title}</ProductName>
          <ProductDescription>
            {products.data.product_description.text}
          </ProductDescription>
        </TextContainer>
      </HeroSection>
      <IconSection>
        <IconSectionHeading>{products.data.icon_section_title}</IconSectionHeading>
        <IconContainer>
          {products.data.icons.map(icon => {
            return (
              <Icon>
                <IconImage></IconImage>
                <IconCaption>{icon.icon_text}</IconCaption>
              </Icon>
            )
          })}
        </IconContainer>
      </IconSection>

      <FeatureSpecSection>
        <FeatureIcon>
          <img src={products.data.feature_icon.url} alt="Orange checklist icon" />
        </FeatureIcon>
        <FeatureSpecHeading>{products.data.feature_title}</FeatureSpecHeading>
        <FeatureSpecFeatures>
          {products.data.features.map((feature, id) => {
            return (
              <Feature>
                <FeatureName>{feature.feature_name}</FeatureName>
                <FeatureImage>
                  <img
                    key={id}
                    className={id === 0 ? "first-image" : ""}
                    className={id !== 0 ? "not-image" : ""}
                    src={feature.feature_image.url}
                    alt="Feature of a product"
                  />
                </FeatureImage>
                <FeatureDescription>
                  {feature.feature_description.text}
                </FeatureDescription>
              </Feature>
            )
          })}
        </FeatureSpecFeatures>
      </FeatureSpecSection>
    </SingularProductContainer>
    </Layout>
  )
}

export const query = graphql`
  query($uid: String!) {
    allPrismicProduct(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          id
          uid
          data {
            feature_icon {
            url
            dimensions {
              height
              width
            }
          }
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
`
