import { graphql } from "gatsby"
import Layout from "../components/layout"
import React from "react"
import styled from "styled-components"
import dimensions from "../style/dimensions"

const IconPlaceholder = styled.div`
  height: 50px;
  width: 50px;
  background-color: #9d9d9d;
`

const AboutHeaderText = styled.div`
  font-size: 48px;
  font-weight: bold;
  padding-left: 20px;
`

const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  padding-top: 96px;
`

const MissionSection = styled.div`
  padding-top: 21px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    padding-top: 96px;
  }
`

const MissionImage = styled.div`
  background-color: #9d9d9d;
  height: 405px;
  width: 45vw;
  left: 0;
  margin-left: -80px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100vw;
    margin-left: -16px;
  }
`

const MissionText = styled.div`
  position: relative;
  padding-top: 28px;
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 35vw;
    position: relative;
    padding-left: 75px;
    padding-top: 0px;
  }
`

const MissionTextHeader = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding-top: 19px;
  padding-bottom: 25px;
`

const MissionTextParagraph = styled.div`
  font-size: 20px;
`
const IndustryContextSection = styled.div`
  padding-top: 130px;
  padding-left: 
`
const IndustryContextHeader = styled.div`
  
`
const IndustryContextHeaderText = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding-top: 26px;
`

const IndustryContextExamples = styled.div`
  display: flex;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    flex-wrap: wrap;
  }
`
// I'm still working on the spacing between each example 
// and changing the sizing of the content box changing as 
// the screen size changes
const IndustryContextGroup = styled.div`
  padding-top: 26px;
  margin-right: 41px;
  width: 316px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: auto;
    margin-right: auto;
    padding-top: 38px;
  }
`

const IndustryContextImage = styled.div`
  background-color: #CACACA;  
  height: 243px;
  width: 316px;
`

const IndustryContextExampleParagraph = styled.div`
  font-size: 16px;
  padding-top: 26px;
  
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 316px;
  }
`


export default function About({ data }) {
  const aboutData = data.prismicAboutPage.data

  console.log(aboutData.industry_context_explanation);
  return (
    <Layout>
      <AboutHeader>
        <IconPlaceholder />
        <AboutHeaderText>About</AboutHeaderText>
      </AboutHeader>

      <MissionSection>
        <MissionImage></MissionImage>

        <MissionText>
          <IconPlaceholder />
          <MissionTextHeader>{aboutData.mission_heading}</MissionTextHeader>

          <MissionTextParagraph>
            {aboutData.mission_description}
          </MissionTextParagraph>
        </MissionText>
      </MissionSection>

      <IndustryContextSection>
        <IndustryContextHeader>
          <IconPlaceholder />
          <IndustryContextHeaderText>{aboutData.industry_context_heading}</IndustryContextHeaderText>
        </IndustryContextHeader>

        <IndustryContextExamples>
          {aboutData.industry_context_explanation.map(example => {
            return (
            <IndustryContextGroup>
              <IndustryContextImage></IndustryContextImage>
              <IndustryContextExampleParagraph>{example.explanation_description}</IndustryContextExampleParagraph>
            </IndustryContextGroup>
          )})}
        </IndustryContextExamples>
      </IndustryContextSection>

    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    prismicAboutPage {
      data {
        company {
          company_name
        }
        company_background_description
        company_background_section_heading
        company_comparison_section_heading
        company_team_heading
        cta_button_destination
        cta_button_text
        industry_context_explanation {
          explanation_description
        }
        industry_context_heading
        mission_description
        mission_heading
        product_benefit {
          product_benefit_title
        }
        product_feature {
          product_feature_name
        }
        products_navigation_button_destination
        products_navigation_button_text
        team_member_information {
          contact_button_destination
          contact_button_text
          team_member_description
          team_member_title
        }
      }
    }
  }
`
