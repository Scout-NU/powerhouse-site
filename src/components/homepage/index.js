import React from "react"
import { H1, P } from "../../style/type-styles"
import {
  HeroContainer,
  HeroTextSection,
  HeroHeadline,
  HeroDescription,
  HeroCTA,
} from "./index-styles"

export default function HomePage({ data }) {
  return (
    <HeroContainer>
      <HeroTextSection>
        <HeroHeadline>
          <H1>{data.hero_headline}</H1>
        </HeroHeadline>
        <HeroDescription>
          <P>{data.hero_subtext}</P>
        </HeroDescription>
        <HeroCTA>
          <a target="_blank" rel="noreferrer" href={data.hero_button_destination.text}>
            {data.hero_cta_text}
          </a>
        </HeroCTA>
      </HeroTextSection>
    </HeroContainer>
  )
}
