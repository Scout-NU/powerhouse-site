import React from "react"

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
    FeatureDescription,
  } from "./singular-product-styles"

  export default function SingularProductPage({ data }) {
    return (
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
                <ProductType>{data.product_type}</ProductType>
                <ProductName>{data.product_title}</ProductName>
                <ProductDescription>{data.product_description.text}</ProductDescription>
              </TextContainer>
          </HeroSection>
          <IconSection>
            <IconSectionHeading>{data.icon_section_title}</IconSectionHeading>
            <IconContainer>
              {data.icons.map(icon => {
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
            <FeatureIcon></FeatureIcon>
            <FeatureSpecHeading>{data.feature_title}</FeatureSpecHeading>
            <FeatureSpecFeatures>
              {data.features.map(feature => {
                return (
                  <Feature>
                    <FeatureName>{feature.feature_name}</FeatureName>
                    <FeatureDescription>{feature.feature_description.text}</FeatureDescription>
                  </Feature>
                )
              })}
            </FeatureSpecFeatures>
          </FeatureSpecSection>
      </SingularProductContainer>
    )
  }