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
    ImageHighlightSection,
    ImageHighlightHeading,
    ImageHighlightGroupContainer,
    ImageHighlightGroup,
    HighlightedImage,
    ImageHighlightDescription,
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
          <ImageHighlightSection>
            <ImageHighlightHeading>{data.image_highlight_heading}</ImageHighlightHeading>
            <ImageHighlightGroupContainer>
              {data.image_highlight_group.map(highlight => {
                return (
                  <ImageHighlightGroup>
                    <HighlightedImage></HighlightedImage>
                    <ImageHighlightDescription>{highlight.image_highlight_description}</ImageHighlightDescription>
                  </ImageHighlightGroup>
                )
              })}
            </ImageHighlightGroupContainer>
          </ImageHighlightSection>
      </SingularProductContainer>
    )
  }