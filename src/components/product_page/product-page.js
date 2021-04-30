import React from "react"
import { H1, H2, H3, Body, Sub1 } from "../../style/type-styles"
import {
  FeaturedProductSection,
  FeaturedProductImage,
  FeaturedProductText,
  ModelScope,
  ProductsGroup,
  Product,
  ProductImage,
  ProductName,
  ProductDescription,
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

      {/* <div>
                {data.model_scope.map(scope => {
                    return (
                        <ModelScope>
                            <Sub1>{scope.model_scope_heading}</Sub1>
                            <ProductsGroup>
                                {data.products.map(product => {
                                    return (
                                        <Product>
                                            <ProductImage></ProductImage>
                                            <ProductName>
                                                {product.product_title}
                                            </ProductName>
                                            <H3></H3>
                                            <Body>{product.product_description}</Body>
                                        </Product>
                                    )
                                })}
                            </ProductsGroup>
                        </ModelScope>
                    )
                })}
            </div> */}
      <HomeownerSection>
        <h1>{data.model_scope[0].model_scope_heading}</h1>

        {data.products.map(product => {
          return (
            product.product.document.data.product_type === "Homeowner" && (
              <h1> {product.product.document.data.product_type}</h1>
            )
          )
        })}
      </HomeownerSection>

      <CommercialSection>
        <h1>{data.model_scope[1].model_scope_heading}</h1>
        {data.products.map(product => {
          return (
            product.product.document.data.product_type === "Commercial" && (
              <h1> {product.product.document.data.product_type}</h1>
            )
          )
        })}
      </CommercialSection>
    </div>
  )
}
