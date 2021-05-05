import React from "react"
import { graphql } from "gatsby"
import {
  UseCaseContainer,
  UseCaseIntro,
  IntroImages,
  ImageOne,
  ImageTwo,
  IntroTextSection,
  IntroHeader,
  IntroDescription,
  MobileImage,
  WhySection,
} from "./use-case-styles"
import Layout from "../components/layout"

import { H1, Body } from "../style/type-styles"

export default function Product({ data }) {
  const use_case = data.allPrismicUseCase.edges[0].node

  return (
    <Layout>
      <UseCaseContainer>
        <UseCaseIntro>
          <IntroImages>
            <ImageOne>
              <img src={use_case.data.overview_image_one.url} />
            </ImageOne>

            <ImageTwo>
              <img src={use_case.data.overview_image_two.url} />
            </ImageTwo>
          </IntroImages>

          <IntroTextSection>
            <IntroHeader>
              <H1>{use_case.data.overview_heading}</H1>
            </IntroHeader>
            {use_case.data.overview_description.raw.map(paragraph => {
              return (
                <IntroDescription>
                  <Body>{paragraph.text}</Body>
                </IntroDescription>
              )
            })}
          </IntroTextSection>

          <MobileImage>
            <img src={use_case.data.overview_image_two.url} />
          </MobileImage>
        </UseCaseIntro>

        <WhySection>
            
            

        </WhySection>
      </UseCaseContainer>
    </Layout>
  )
}

export const query = graphql`
  query($uid: String!) {
    allPrismicUseCase(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          data {
            preview_title
            preview_image {
              url
            }
            specific_reason {
              specific_reason_heading
              specific_reason_description
            }
            reasons_main_heading
            preview_description
            overview_image_two {
              url
            }
            overview_image_one {
              url
            }
            overview_heading
            overview_description {
              text
              raw
            }
            learn_more_button_text
            learn_more_button_destination {
              url
            }
            demo_video {
              url
            }
            demo_heading
            cta_button_text
            cta_button_destination {
              url
            }
          }
        }
      }
    }
  }
`
