import React from "react"
import { H1, P, H2, H3, Body } from "../../style/type-styles"
import TreeIcon from "../../vectors/renewable-tree-icon.svg"
import SunIcon from "../../vectors/sun-icon.svg"
import { Helmet } from "react-helmet"
import {
  SolutionsContainer,
  TaglineSection,
  TaglineHeader,
  TaglineDescription,
  TaglineImage,
  TaglineText,
  UseCaseSection,
  UseCaseCard,
  UseCaseCards,
  UseCaseCTA,
  ModelsCTA,
  ModelCTAContent,
  ModelCTAImage,
  ModelCTAText,
  ModelsButton,
} from "./solutions-styles"
import PurchaseIcon from "../../vectors/solar-panel.svg"
export default function Solutions({ data }) {
  return (
    <>
      <SolutionsContainer>
        <TaglineSection>
          <TaglineImage>
            <img src={data.prismicUseCasesPage.data.tagline_image.url} />
          </TaglineImage>

          <TaglineText>
            <SunIcon />
            <TaglineHeader>
              <H2>{data.prismicUseCasesPage.data.tagline_heading}</H2>
            </TaglineHeader>
            <TaglineDescription>
              <Body>{data.prismicUseCasesPage.data.tagline_description}</Body>
            </TaglineDescription>
          </TaglineText>
        </TaglineSection>

        <UseCaseSection>
          <UseCaseCards>
            {data.prismicUseCasesPage.data.use_cases.map((use_case, idx) => {
              return (
                <UseCaseCard key={idx}>
                  <a href={`/${use_case.use_case.document.uid}`}>
                    <img
                      alt={use_case.use_case.document.data.preview_title}
                      src={use_case.use_case.document.data.preview_image.url}
                    />
                    <H3>{use_case.use_case.document.data.preview_title}</H3>
                    <Body>
                      {use_case.use_case.document.data.preview_description}
                    </Body>

                    <UseCaseCTA>
                      <a href={`/${use_case.use_case.document.uid}`}>
                        Learn More
                      </a>
                    </UseCaseCTA>
                  </a>
                </UseCaseCard>
              )
            })}
          </UseCaseCards>
        </UseCaseSection>

        <ModelsCTA>
          <ModelCTAContent>
            <ModelCTAImage>
              <img src={data.prismicUseCasesPage.data.cta_image.url} />
            </ModelCTAImage>

            <ModelCTAText>
              <PurchaseIcon />
              <H2>{data.prismicUseCasesPage.data.call_to_action_heading}</H2>

              <ModelsButton>
                <a
                  href={
                    data.prismicUseCasesPage.data.cta_button_destination.url
                  }
                >
                  {data.prismicUseCasesPage.data.cta_button_text}
                </a>
              </ModelsButton>
            </ModelCTAText>
          </ModelCTAContent>
        </ModelsCTA>
      </SolutionsContainer>
    </>
  )
}
