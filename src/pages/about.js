import { graphql } from "gatsby"

import React from "react"

export default function About({ data }) {
  const aboutData = data.prismicAboutPage.data

  return (
    <div>
      <h1>TestTestTest</h1>
    </div>
  )
}

export const query = graphql`
  query AboutQuery {
    prismicAboutPage {
      data {
        
      }
    }
  }
`
