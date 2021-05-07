import { graphql } from "gatsby"
import React from "react"
import FAQPage from "../components/faq/faq"
import Layout from "../components/layout"

export default function FAQ({ data }) {
  return (
    <Layout>
      <FAQPage data={data.prismicFaqPage.data} />
    </Layout>
  )
}

export const query = graphql`
  query FAQQuery {
    prismicFaqPage(data: {}) {
      data {
        main_section_heading
        topics_section_heading
        ctabackground {
          url
        }
        cta_heading
        cta_button_text
        cta_button_destination {
          url
        }
        frequently_asked_question {
          question
          answer
          topic
        }
        individual_topic {
          topic_heading
        }
      }
    }
  }
`
