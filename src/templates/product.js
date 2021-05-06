import React from "react"
import { graphql } from "gatsby"
import {H1, H2, H3, Sub1, P} from "../style/type-styles"
import {
  SingularProductContainer,
  HeroSection,
  ImageContainer,
  TextContainer,
  ProductType,
  IconSection,
  IconContainer,
  Icon,
  IconImage,
  IconCaption,
  ImageHighlightSection,
  ImageHighlightHeading,
  ImageHighlightGroupContainer,
  ImageHighlightGroup,
  HighlightedImage,
  ImageHighlightDescription,
  ThirdSection,
  FeatureSpecSection,
  FeatureIcon,
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
          {products.data.product_images.map((image, id) => {
            return (
              <img 
                src={image.url} 
                alt={image.alt}
                key={id} 
                className={id === 0? "main-image" : ""}/>
            )
          })}
        </ImageContainer>
        <TextContainer>
          <ProductType>
            <Sub1>{products.data.product_type}</Sub1>
          </ProductType>
          <H1>{products.data.product_title}</H1>
          <P>{products.data.product_description.text}</P>
        </TextContainer>
      </HeroSection>

      <IconSection>
        <H3>{products.data.icon_section_title}</H3>
        <IconContainer>
          {products.data.icons.map((icon, id) => {
            return (
              <Icon key={id}>
                <IconImage>
                  <img src={icon.icon_image.url} alt={icon.icon_image.alt}/>
                </IconImage>
                <IconCaption>
                  <P>{icon.icon_text}</P>
                </IconCaption>
              </Icon>
            )
          })}
        </IconContainer>
      </IconSection>

      <ImageHighlightSection>
        <ImageHighlightHeading>
          <H1>{products.data.image_highlight_heading}</H1>
        </ImageHighlightHeading>
        <ImageHighlightGroupContainer>
          {products.data.image_highlight_group.map((highlight, id) => {
            return (
              <ImageHighlightGroup
                key={id}
                className={id === 0 ? "first" : ""}
                className={id === 1 ? "second-section" : ""}
              >
                <ThirdSection className={id === 2 ? "third-section" : ""}>
                  <HighlightedImage className={id === 0 ? "first-image" : ""}>
                    <img src={highlight.highlighted_image.url} alt={highlight.highlighted_image.alt}/>
                  </HighlightedImage>
                  <ImageHighlightDescription className={id === 1 ? "second-section" : ""}>
                    {highlight.image_highlight_description}
                  </ImageHighlightDescription>
                </ThirdSection>
              </ImageHighlightGroup>
            )
          })}
        </ImageHighlightGroupContainer>
      </ImageHighlightSection>

      <FeatureSpecSection>
        <FeatureIcon>
          <img src={products.data.feature_icon.url} alt={products.data.feature_icon.alt}/>
        </FeatureIcon>
        <H2>{products.data.feature_title}</H2>
        <div>
          {products.data.features.map((feature, id) => {
            return (
              <Feature>
                <FeatureName>
                  <Sub1>{feature.feature_name}</Sub1>
                </FeatureName>
                <FeatureImage>
                  <img
                    key={id}
                    className={id === 0 ? "first-image" : ""}
                    className={id !== 0 ? "not-image" : ""}
                    src={feature.feature_image.url}
                    alt={feature.feature_image.alt}
                  />
                </FeatureImage>
                <FeatureDescription>
                  <P>{feature.feature_description.text}</P>
                </FeatureDescription>
              </Feature>
            )
          })}
        </div>
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
              alt
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
              feature_image {
                url
                alt
              }
            }
            icon_section_title
            icons {
              icon_text
              icon_image {
                url
                alt
              }
            }
            product_description {
              text
            }
            product_images {
              image {
                url
                alt
              }
            }
            product_type
            image_highlight_group {
              highlighted_image {
                dimensions {
                  height
                  width
                }
                url
                alt
              }
              image_highlight_description
            }
            image_highlight_heading
          }
        }
      }
    }
  }
`
