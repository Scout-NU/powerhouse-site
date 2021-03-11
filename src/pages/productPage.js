import React from "react"
import { graphql } from "gatsby"

export default function ProductSection({ data }) {

  const productSectionData = data.prismicProductPage.data

  return (
    <div>
      <h1>TestTestTest</h1>
    </div>)
}

export const query = graphql`
  query ProductSectionQuery {
    prismicProductPage {
    }
  }
`