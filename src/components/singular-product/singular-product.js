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
      </SingularProductContainer>
    )
  }