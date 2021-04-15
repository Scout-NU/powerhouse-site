import React from "react"

import {
    SingularProductContainer,
    HeroSection,
    ImageContainer,
    TextContainer,
    ProductType,
    ProductName,
    ProductDescription,
  } from "./product-styles"

  export default function SingularProductPage({ data }) {
    return (
      <SingularProductContainer>
          <HeroSection>
              <ImageContainer>
                {data.product_images.map((image, id) => {
                  return (
                    <img src={image.url} alt="Product 1" key={id} className={id === 0? "main-image" : ""}/>
                  )
                })}
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