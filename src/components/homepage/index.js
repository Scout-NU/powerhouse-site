import React from "react"
import { H1, H2, P } from "../../style/type-styles"
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
} from "./index-styles"

export default function HomePage({ data }) {
  return (
    <HomePageContainer>
      <HeroContainer>
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
              rel="noreferrer"
              href={data.hero_button_destination.text}
            >
              {data.hero_cta_text}
            </a>
          </HeroCTA>
        </HeroTextSection>
      </HeroContainer>

      <ImpactSection>
        <ImpactHeader>
          <ImpactIcon />
          <H2>{data.impact_section_title}</H2>
          <P>{data.impact_description}</P>
        </ImpactHeader>
        <ImpactStats>
          {data.impact_example.map(example => (
            <ImpactExample>
              <ImpactStatIcon />
              <ImpactStat>
                <H1>{example.impact_big_text}</H1>
                <P>{example.impact_small_text}</P>
              </ImpactStat>
            </ImpactExample>
          ))}
        </ImpactStats>
      </ImpactSection>
    </HomePageContainer>
  )
}
