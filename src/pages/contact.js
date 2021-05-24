import { graphql } from "gatsby"

import React from "react"
import ContactComponent from "../components/contact/contact"
import Layout from "../components/layout"

export default function Contact({ data }) {
  return (
    <Layout>
      <ContactComponent data={data} />
    </Layout>
  )
}

export const query = graphql`
  query ContactQuery {
    prismicContactPage {
      data {
        overview_heading
        overview_description
        form_input {
          input_heading
          input_instructions
        }
        specific_contact_info {
          contact_details
          contact_type
        }
        overview_image {
          url
        }

        submission_button_text
      }
    }
  }
`
