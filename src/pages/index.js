import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Homepage from "../components/homepage/index"
import { Helmet } from "react-helmet"

export default function Home({ data }) {
  const homepageData = data.prismicHomepage.data

  return (
    <Layout home={true}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PowerHouse</title>
      </Helmet>
      <Homepage data={homepageData} />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    prismicHomepage {
      data {
        section_title
        section_description
        section_image_alt
        section_image {
          url
          dimensions {
            height
            width
          }
        }
        button_text
        button_destination {
          target
        }
        hero_button_destination {
          target
        }
        hero_cta_text
        hero_headline
        hero_subtext
        hero_background_image {
          url
          dimensions {
            height
            width
          }
        }
        impact_description
        impact_section_title
        impact_image {
          url
          dimensions {
            height
            width
          }
        }

        cta_text
        cta_button_destination
        cta_button_text
        cta_image {
          url
        }
        impact_example {
          impact_big_text
          impact_small_text
          impact_example_image {
            url
            dimensions {
              height
              width
            }
          }
        }
        email_description
        email_eyebrow_heading
        enter_email_label
        sign_up_button_destination {
          target
        }
        sign_up_button_text
        solutions_header
        use_cases {
          use_case {
            document {
              ... on PrismicUseCase {
                id
                url
                uid
                data {
                  preview_title
                  preview_image {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
