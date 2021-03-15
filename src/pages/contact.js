import { graphql } from "gatsby"

import React from "react"

export default function Contact({ data }) {
    const contactData = data.prismicContact.data

    return (
        <div>
            <h1>{contactData.overview_heading}</h1>
        </div>
    )
}

export const query = graphql`
    query ContactQuery {
        prismicContact {
            data {
                overview_description
                overview_heading
                overview_image {
                url
                dimensions {
                    height
                    width
                }
            }
        }
    }
`