import React from "react"
import { H1, H2, H3, Body, Sub1 } from "../../style/type-styles"
import {
  FeaturedProductSection,
  FeaturedProductImage,
  FeaturedProductText,
  ProductsGroup,
  ProductImage,
  HomeownerSection,
  CommercialSection,
} from "./product-page-styles"

export default function ProductSection({ data }) {
  return (
    <div>
      <H1>{data.product_page_main_heading}</H1>
      <FeaturedProductSection>
        <FeaturedProductImage>
          <img
            src={data.featured_product_image.url}
            alt={data.featured_product_image.alt}
          />
        </FeaturedProductImage>
        <FeaturedProductText>
          <Sub1>{data.featured_product_heading}</Sub1>
          <H2>{data.featured_product_name}</H2>
          <Body>{data.featured_product_description}</Body>
        </FeaturedProductText>
      </FeaturedProductSection>

      <HomeownerSection>
        <Sub1>{data.model_scope[0].model_scope_heading}</Sub1>
        <ProductsGroup>
          {data.products.map(product => {
            return (
              product.product.document.data.product_type === "Homeowner" && (
                <div>
                  <ProductImage>
                    <img 
                      src={product.product.document.data.product_images[0].image.url}
                      alt={product.product.document.data.product_images[0].image.alt}/>
                  </ProductImage>
                  <H2>{product.product.document.data.product_title}</H2>
                  <H3>{product.product.document.data.product_price}</H3>
                  <Body></Body>
                </div>
              )
            )
          })}
        </ProductsGroup>
      </HomeownerSection>

      <CommercialSection>
        <Sub1>{data.model_scope[1].model_scope_heading}</Sub1>
        <ProductsGroup>
          {data.products.map(product => {
            return (
              product.product.document.data.product_type === "Commercial" && (
                <div>
                  <ProductImage>
                    <img 
                      src={product.product.document.data.product_images[0].image.url}
                      alt={product.product.document.data.product_images[0].image.alt}/>
                  </ProductImage>
                  <H2>{product.product.document.data.product_title}</H2>
                  <H3>{product.product.document.data.product_price}</H3>
                  <Body></Body>
                </div>
              )
            )
          })}
        </ProductsGroup>
      </CommercialSection>
    </div>
  )
}
