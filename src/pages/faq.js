import React from "react"
import { graphql } from "gatsby"

export default function Faq({ data }) {
    const faqData = data.prismicFaq.data

    return (
        <div>
            <h1>{faqData.main_section_heading}</h1>
        </div>
    )
}

export const query = graphql`
    query FaqQuery {
        prismicFaq {
            data {
                frequently_asked_question {
                    answer
                    question
                }
                main_section_heading
            }
        }
    }
`
