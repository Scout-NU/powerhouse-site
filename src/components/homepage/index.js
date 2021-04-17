import React from "react"
import { H1, P, H2 } from "../../style/type-styles"
import {
  HeroContainer,
  HeroTextSection,
  HeroHeadline,
  HeroDescription,
  HeroCTA,
  FutureSection,
  FutureText,
  FutureSolarIcon,
  FutureHeader,
  FutureDescription,
  FutureCTA,
  FutureImage,
  HomePageContainer,
  HeroImage,
} from "./index-styles"

import SunIcon from "../../vectors/sun-icon.svg"
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
      </HomePageContainer>
    </>
  )
}
