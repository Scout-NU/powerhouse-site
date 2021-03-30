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
  padding-left: ;
`
const IndustryContextHeader = styled.div``
const IndustryContextHeaderText = styled.div`
  font-size: calc(36px + (36 - 24) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
  padding-top: 26px;
`

const IndustryContextExamples = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
  }
`

const IndustryContextGroup = styled.div`
  padding-top: 26px;
  // margin-right: 82px;
  width: 22vw;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 38px;
    width: 100%;
  }
`

const IndustryContextImage = styled.div`
  background-color: #cacaca;
  height: 243px;
  width: 22vw;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

const IndustryContextExampleParagraph = styled.div`
  font-size: 16px;
  padding-top: 26px;

  width: 22vw;


  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`


const CompanyComparisonSection = styled.div`
  padding-top: 148px;
`

const CompanyComparisonSectionHeading = styled.div`
  text-align: center;
  font-size: calc(36px + (36 - 24) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
`

const ProductBenefitSection = styled.div`
  padding-top: 68px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`

const BenefitGroup = styled.div`
  width: 15vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    flex: 50%;
  }
`

const BenefitImage = styled.div`
  background-color: #9d9d9d;
  height: 11vw;
  width: 11vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 125px;
    height: 125px;
  }
`

const BenefitTitle = styled.div`
  font-size: calc(28px + (28 - 16) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
`

const ProductComparison = styled.div`
  margin-top: 170px;
  display: flex;
`


const FeatureTitleColumn = styled.div`
  margin-top: 110px;
`

const FeatureTitle = styled.div`
  font-size: calc(28px + (28 - 14) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
  margin-top: 50px;
`

const CompetitorColumnGroup = styled.div`
  display: flex;
  margin-left: 12px;

`

const CompetitorColumn = styled.div`
  margin-left: 51px;
`

const CompetitorName = styled.div`
  font-size: calc(36px + (36 - 8) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
  
`

const IconGroup = styled.div`
  margin-top: 68px;
`

const CompetitorIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #626262;
  margin-top: 36px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 31px;
    height: 31px;
    margin-left: 4vw;
  }
`

const CompanyBackgroundSection = styled.div`
  margin-top: 150px;    
`

const GeneralDescriptionSection = styled.div`
  width: 46vw;
  margin-left: auto;
  margin-right: auto;
  

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

const CompanyBackgroundHeading = styled.div`
  font-weight: bold;
  font-size: calc(36px + (36 - 24) * ((100vw - 300px) / (1440 - 300)));
  text-align: center;
  padding-bottom: 50px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-bottom: 30px;
  }
`

const CompanyBackgroundDescription = styled.div`
  font-size: calc(20px + (20 - 14) * ((100vw - 300px) / (1440 - 300)));
`

const CompanyTeamSection = styled.div`
  margin-top: 90px;
  width: 65vw;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

const CompanyTeamHeading = styled.div`
  font-weight: bold;
  font-size: calc(28px + (28 - 24) * ((100vw - 300px) / (1440 - 300)));
  padding-bottom: 40px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    text-align: center;
  }
`

const CompanyTeamMemberGroup = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
  }
`

const TeamMember = styled.div`
  width: 30vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    padding-bottom: 32px;
  }
`

const MemberImage = styled.div`
  background-color: #CACACA;
  width: 30vw;
  height: 292px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

const MemberTitle = styled.div`
  font-weight: bold;
  font-size: calc(28px + (28 - 24) * ((100vw - 300px) / (1440 - 300)));
  padding-top: 16px;
  padding-bottom: 16px;
`

const MemberDescription = styled.div`
  font-size: calc(16px + (16 - 14) * ((100vw - 300px) / (1440 - 300)));
`


export default function About({ data }) {
  const aboutData = data.prismicAboutPage.data

  console.log(aboutData.industry_context_explanation)
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
          <IndustryContextHeaderText>
            {aboutData.industry_context_heading}
          </IndustryContextHeaderText>
        </IndustryContextHeader>
        <IndustryContextExamples>
          {aboutData.industry_context_explanation.map(example => {
            return (
              <IndustryContextGroup>
                <IndustryContextImage></IndustryContextImage>
                <IndustryContextExampleParagraph>
                  {example.explanation_description}
                </IndustryContextExampleParagraph>
              </IndustryContextGroup>
            )
          })}
        </IndustryContextExamples>
      </IndustryContextSection>

      <CompanyComparisonSection>
        <CompanyComparisonSectionHeading>{aboutData.company_comparison_section_heading}</CompanyComparisonSectionHeading>
        <ProductBenefitSection>
          {aboutData.product_benefit.map(benefit => {
            return (
              <BenefitGroup>
                <BenefitImage></BenefitImage>
                <BenefitTitle>{benefit.product_benefit_title}</BenefitTitle>
              </BenefitGroup>
            )
          })}
        </ProductBenefitSection>

        <ProductComparison>
          <FeatureTitleColumn>
            {aboutData.product_feature.map(feature => {
              return (
                <FeatureTitle>{feature.product_feature_name}</FeatureTitle>
              )
            })}
          </FeatureTitleColumn>
          <CompetitorColumnGroup>
            {aboutData.company.map(competitor => {
              return (
                <CompetitorColumn>
                  <CompetitorName>{competitor.company_name}</CompetitorName>
                  <IconGroup>
                    <CompetitorIcon />
                    <CompetitorIcon />
                    <CompetitorIcon />
                    <CompetitorIcon />
                    <CompetitorIcon />
                  </IconGroup>
                </CompetitorColumn>
              )
            })}
          </CompetitorColumnGroup>
        </ProductComparison>
      </CompanyComparisonSection>

      <CompanyBackgroundSection>
        <GeneralDescriptionSection>
          <CompanyBackgroundHeading>{aboutData.company_background_section_heading}</CompanyBackgroundHeading>
          <CompanyBackgroundDescription>{aboutData.company_background_description}</CompanyBackgroundDescription>
        </GeneralDescriptionSection>
        <CompanyTeamSection>
          <CompanyTeamHeading>{aboutData.company_team_heading}</CompanyTeamHeading>
          <CompanyTeamMemberGroup>
            {aboutData.team_member_information.map(member => {
              return (
                <TeamMember>
                  <MemberImage></MemberImage>
                  <MemberTitle>{member.team_member_title}</MemberTitle>
                  <MemberDescription>{member.team_member_description}</MemberDescription>
                </TeamMember>
              )
            })}
          </CompanyTeamMemberGroup>
        </CompanyTeamSection>
      </CompanyBackgroundSection>
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
