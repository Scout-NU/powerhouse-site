import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import dimensions from "../../style/dimensions"
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
        <HeroHeadline>{data.hero_headline}</HeroHeadline>
        <HeroDescription>{data.hero_subtext}</HeroDescription>
        <HeroCTA>
          <a href={data.hero_button_destination.text}>{data.hero_cta_text}</a>
        </HeroCTA>
      </HeroTextSection>
    </HeroContainer>
  )
}
