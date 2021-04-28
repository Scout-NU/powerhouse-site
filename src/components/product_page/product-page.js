import React from "react"
import {
    ProductPageHeading,
    FeaturedProductSection,
    FeaturedProductImage,
    FeaturedProductText,
    FeaturedProductHeading,
    FeaturedProductName,
    FeaturedProductDescription,
    ModelScope,
    ModelScopeHeading,
    ProductsGroup,
    Product,
    ProductImage,
    ProductName,
    ProductDescription,
} from "./product-page-styles"

export default function ProductSection({ data }) {
    return (
        <div>
            <ProductPageHeading>{data.product_page_main_heading}</ProductPageHeading>
            <FeaturedProductSection>
                <FeaturedProductImage></FeaturedProductImage>
                <FeaturedProductText>
                    <FeaturedProductHeading>{data.featured_product_heading}</FeaturedProductHeading>
                    <FeaturedProductName>{data.featured_product_name}</FeaturedProductName>
                    <FeaturedProductDescription>{data.featured_product_description}</FeaturedProductDescription>
                </FeaturedProductText>
            </FeaturedProductSection>

            <div>
                {data.model_scope.map(scope => {
                    return (
                        <ModelScope>
                            <ModelScopeHeading>{scope.model_scope_heading}</ModelScopeHeading>
                            <ProductsGroup>
                                {data.products.map(product => {
                                    return (
                                        <Product>
                                            <ProductImage></ProductImage>
                                            <ProductName>{product.product_title}</ProductName>
                                            <ProductDescription>{product.product_description}</ProductDescription>
                                        </Product>
                                    )
                                })}
                            </ProductsGroup>
                        </ModelScope>
                    )
                })}
            </div>
        </div>
    )
}