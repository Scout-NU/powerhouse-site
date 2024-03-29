import React from "react"
import { H1, P, H2, H3 } from "../../style/type-styles"
import {
  HomePageContainer,
  HeroContainer,
  HeroTextSection,
  HeroHeadline,
  HeroDescription,
  HeroCTA,
  ImpactSection,
  ImpactHeader,
  ImpactIcon,
  ImpactStats,
  ImpactExample,
  ImpactStat,
  ImpactStatIcon,
  FutureSection,
  FutureText,
  FutureSolarIcon,
  FutureHeader,
  FutureDescription,
  FutureCTA,
  FutureImage,
  HeroImage,
  SolutionsSection,
  SolutionsCard,
  SolutionsCards,
  SolutionsCTA,
  CTASection,
  CTAImage,
  CTAContent,
  CTAText,
  CTAButton,
  NodeLine,
  MobileNodeLine,
  ImpactImage,
  ImpactCTA,
} from "./index-styles"

import Circle from "../../vectors/circle.svg"
import TreeIcon from "../../vectors/renewable-tree-icon.svg"
import SunIcon from "../../vectors/sun-icon.svg"
import PlantIcon from "../../vectors/plant-icon.svg"
import { Helmet } from "react-helmet"

export default function HomePage({ data }) {
  return (
    <>
    
      <Helmet bodyAttributes={{ class: "home-header" }} />
    
      <HomePageContainer>
        <HeroContainer>
          <HeroImage>
            <img alt="hero image" src={data.hero_background_image.url} />
          </HeroImage>
          <HeroTextSection>
            <HeroHeadline>
              <H1>{data.hero_headline}</H1>
            </HeroHeadline>
            <HeroDescription>
              <P>{data.hero_subtext}</P>
            </HeroDescription>
            <HeroCTA>
              <a
                target="_blank"
                s
                rel="noreferrer"
                href={data.hero_button_destination.text}
              >
                {data.hero_cta_text}
              </a>
            </HeroCTA>
          </HeroTextSection>
        </HeroContainer>

        <FutureSection>
          <FutureText>
            <FutureSolarIcon alt="Future of Solar Icon">
              <SunIcon />
            </FutureSolarIcon>
            <FutureHeader>
              <H2>{data.section_title}</H2>
            </FutureHeader>
            <FutureDescription>
              <P>{data.section_description}</P>
            </FutureDescription>

            <FutureCTA>
              <a href={data.button_destination}>{data.button_text}</a>
            </FutureCTA>
          </FutureText>
          <FutureImage>
            <img alt={data.section_image_alt} src={data.section_image.url} />
          </FutureImage>
        </FutureSection>

        <ImpactImage>
          <img
            alt="Impact Section Backgroud Image"
            src={data.impact_image.url}
          />
        </ImpactImage>
        <ImpactSection>
          <div>
            <ImpactHeader>
              <ImpactIcon>
                <PlantIcon />
              </ImpactIcon>
              <H2>{data.impact_section_title}</H2>
            </ImpactHeader>
            <ImpactStats>
              {data.impact_example.map((example, idx) => (
                <ImpactExample key={idx}>
                  <ImpactStat>
                    <H1>{example.impact_big_text}</H1>
                    <P>{example.impact_small_text}</P>
                    {idx === 2 && <NodeLine />}
                    <MobileNodeLine />
                    <Circle />
                  </ImpactStat>
                </ImpactExample>
              ))}
            </ImpactStats>

            <ImpactCTA>
              <FutureCTA>
                <a href={data.button_destination}>{data.button_text}</a>
              </FutureCTA>
            </ImpactCTA>
          </div>
        </ImpactSection>
        <SolutionsSection>
          <TreeIcon />
          <H2>{data.solutions_header}</H2>

          <SolutionsCards>
            {data.use_cases.map((use_case, idx) => {
              return (
                <SolutionsCard key={idx}>
                  <a href={use_case.use_case.document.uid}>
                    <img
                      alt={use_case.use_case.document.data.preview_title}
                      src={use_case.use_case.document.data.preview_image.url}
                    />
                    <H3>{use_case.use_case.document.data.preview_title}</H3>
                  </a>
                </SolutionsCard>
              )
            })}
          </SolutionsCards>

          <SolutionsCTA>
            <a target="_blank" s rel="noreferrer" href="/solutions">
              View use cases
            </a>{" "}
          </SolutionsCTA>
        </SolutionsSection>

        <CTASection>
          <CTAContent>
            <CTAImage>
              <img src={data.cta_image.url} />
            </CTAImage>

            <CTAText>
              <PlantIcon alt="Contact Us Plant Icon" />
              <H2>{data.cta_text}</H2>
              <CTAButton>
                <a target="_blank" s rel="noreferrer" href="/solutions">
                  Contact Us
                </a>{" "}
              </CTAButton>
            </CTAText>
          </CTAContent>
        </CTASection>
      </HomePageContainer>
    </>
  )
}
