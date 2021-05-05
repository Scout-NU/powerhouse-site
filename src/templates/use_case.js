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
  WhyHeader,
  Reasons,
  SpecificReason,
  SpecificImage,
  SpecificReasonHeading,
  SpecificReasonDescription,
  WhyCTA,
  DemoVideoSection,
  DemoHeading,
  DemoVideo,
} from "./use-case-styles"
import Layout from "../components/layout"

import { H1, H2, H3, Body } from "../style/type-styles"

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
          <WhyHeader>
            <H2>{use_case.data.reasons_main_heading}</H2>
          </WhyHeader>

          <Reasons>
            {use_case.data.specific_reason.map(reason => {
              return (
                <SpecificReason>
                  <SpecificImage>
                    <img src={reason.reason_image.url} />
                  </SpecificImage>
                  <SpecificReasonHeading>
                    <H3>{reason.specific_reason_heading}</H3>
                  </SpecificReasonHeading>
                  <SpecificReasonDescription>
                    <Body>{reason.specific_reason_description}</Body>
                  </SpecificReasonDescription>
                </SpecificReason>
              )
            })}
          </Reasons>

          <WhyCTA>
            <a href={use_case.data.cta_button_destination.url}>
              {use_case.data.cta_button_text}
            </a>
          </WhyCTA>
        </WhySection>

        <DemoVideoSection>
          <div>
            <DemoHeading>
              <H2>{use_case.data.demo_heading}</H2>
            </DemoHeading>

            <DemoVideo>
              <iframe
                src={use_case.data.demo_video_url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </DemoVideo>
          </div>
        </DemoVideoSection>
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
              reason_image {
                url
              }
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
            demo_video_url
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
