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
  ProductsHeading,
  FeaturedCTA,
  ProductCTA,
} from "./product-page-styles"

export default function ProductSection({ data }) {
  return (
    <div>
      <ProductsHeading>
        <H1>{data.product_page_main_heading}</H1>
      </ProductsHeading>
      <FeaturedProductSection>
        <FeaturedProductImage>
          {console.log(data.featured_product_image)}
          <img
            src={data.featured_product_image.url}
            alt={data.featured_product_image.alt}
          />
        </FeaturedProductImage>
        <FeaturedProductText>
          <Sub1>{data.featured_product_heading}</Sub1>
          <H2>{data.featured_product_name}</H2>
          <Body>{data.featured_product_description}</Body>
          <FeaturedCTA>
            {console.log(data)}
            <a href={data.learn_more_button_text_destination}>
              {data.learn_more_button_text}
            </a>
          </FeaturedCTA>
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
                      src={
                        product.product.document.data.product_images[0].image
                          .url
                      }
                      alt={
                        product.product.document.data.product_images[0].image
                          .alt
                      }
                    />
                  </ProductImage>
                  <H2>{product.product.document.data.product_title}</H2>
                  <H3>{product.product.document.data.product_price}</H3>
                  <Body>{product.product_description}</Body>
                  <ProductCTA>
                    <a href={`/${product.product.document.uid}`}>
                      {product.button_text}
                    </a>
                  </ProductCTA>
                </div>
              )
            )
          })}
        </ProductsGroup>
      </HomeownerSection>

      <CommercialSection>
        <Sub1>{data.model_scope[1].model_scope_heading}</Sub1>
        <ProductsGroup>
          {console.log(data.products)}
          {data.products.map(product => {
            return (
              product.product.document.data.product_type === "Commercial" && (
                <div>
                  <ProductImage>
                    <img
                      src={
                        product.product.document.data.product_images[0].image
                          .url
                      }
                      alt={
                        product.product.document.data.product_images[0].image
                          .alt
                      }
                    />
                  </ProductImage>
                  <H2>{product.product.document.data.product_title}</H2>

                  <H3>{product.product.document.data.product_price}</H3>
                  <Body>{product.product_description}</Body>
                  <ProductCTA>
                    <a href={`/${product.product.document.uid}`}>
                      {product.button_text}
                    </a>
                  </ProductCTA>
                </div>
              )
            )
          })}
        </ProductsGroup>
      </CommercialSection>
    </div>
  )
}
