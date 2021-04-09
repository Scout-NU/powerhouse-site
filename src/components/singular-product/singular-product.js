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
  ThirdSection,
} from "./singular-product-styles"

import { H1 } from "../../style/type-styles"

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
          <ProductDescription>
            {data.product_description.text}
          </ProductDescription>
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
        <ImageHighlightHeading>
          <H1>{data.image_highlight_heading}</H1>
        </ImageHighlightHeading>
        <ImageHighlightGroupContainer>
          {data.image_highlight_group.map((highlight, id) => {
            return (
              <ImageHighlightGroup
                key={id}
                className={id == 0 ? "first" : ""}
                className={id == 1 ? "second-section" : ""}
              >
                <ThirdSection className={id == 2 ? "third-section" : ""}>
                  <HighlightedImage className={id == 0 ? "first-image" : ""}>
                    <img src={highlight.highlighted_image.url} />
                  </HighlightedImage>
                  <ImageHighlightDescription
                    className={id == 1 ? "second-section" : ""}
                  >
                    {highlight.image_highlight_description}
                  </ImageHighlightDescription>
                </ThirdSection>
              </ImageHighlightGroup>
            )
          })}
        </ImageHighlightGroupContainer>
      </ImageHighlightSection>
    </SingularProductContainer>
  )
}
