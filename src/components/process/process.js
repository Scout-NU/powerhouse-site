import React from "react"
import {
  ProcessContainer,
  HowItWorks,
  HowHeader,
  HowImage,
  HowCarousel,
  HowText,
  HowParagraph,
  BlueBackground,
  FindSection,
  FindImage,
  FindText,
  FindButton,
  StepsSection,
  Step,
  StepImage,
  StepText,
} from "./process-styles"
import { H1, P, H2, H3, Body } from "../../style/type-styles"

export default function Process({ data }) {
  return (
    <ProcessContainer>
      <BlueBackground />

      <HowItWorks>
        <HowHeader>
          <H2>{data.prismicProcessPage.data.how_header}</H2>
        </HowHeader>

        <HowCarousel>
          <HowImage>
            <img
              src={data.prismicProcessPage.data.how_images[0].how_image.url}
            />
          </HowImage>
          <HowText>
            <HowParagraph>
              <Body>
                {
                  data.prismicProcessPage.data.how_images[0].how_paragraph[0]
                    .text
                }
              </Body>
            </HowParagraph>
          </HowText>
        </HowCarousel>
      </HowItWorks>

      <FindSection>
        <FindImage>
          <img src={data.prismicProcessPage.data.find_image.url} />
        </FindImage>

        <FindText>
          <H2>{data.prismicProcessPage.data.find_header}</H2>

          <FindButton>
            {data.prismicProcessPage.data.find_button_text}
          </FindButton>
        </FindText>
      </FindSection>

      <StepsSection>
        {console.log(data.prismicProcessPage.data.steps[0])}
        {data.prismicProcessPage.data.steps.map(step => {
          return (
            <Step>
              <StepImage>
                <img src={step.step_image.url} />
              </StepImage>

              <StepText>
                <H2>{step.step_title}</H2>
                <Body>{step.step_description}</Body>
              </StepText>
            </Step>
          )
        })}
      </StepsSection>
    </ProcessContainer>
  )
}
