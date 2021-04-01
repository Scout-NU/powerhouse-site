import React from "react"
import { H1, P } from "../../style/type-styles"
import {
  AboutHeader,
  IconPlaceholder,
  AboutHeaderText,
  MissionSection,
  MissionImage,
  MissionTextHeader,
  MissionTextParagraph,
  IndustryContextSection,
  IndustryContextHeaderText,
  IndustryContextExamples,
  IndustryContextGroup,
  IndustryContextHeader,
  IndustryContextImage,
  IndustryContextExampleParagraph,
  CompanyComparisonSection,
  CompetitorName,
  FeatureTitle,
  CompetitorIcon,
  CompanyBackgroundSection,
  GeneralDescriptionSection,
  CompanyBackgroundHeading,
  CompanyBackgroundDescription,
  CompanyTeamHeading,
  CompanyTeamMemberGroup,
  TeamMember,
  MemberImage,
  MemberTitle,
  MemberDescription,
  MissionText,
  CompanyTeamSection
} from "./about-style"

export default function About({ data }) {
  return (
    <>
      <AboutHeader>
        <IconPlaceholder />
        <AboutHeaderText>About</AboutHeaderText>
      </AboutHeader>

      <MissionSection>
        <MissionImage></MissionImage>

        <MissionText>
          <IconPlaceholder />
          <MissionTextHeader>{data.mission_heading}</MissionTextHeader>

          <MissionTextParagraph>
            {data.mission_description}
          </MissionTextParagraph>
        </MissionText>
      </MissionSection>

      <IndustryContextSection>
        <IndustryContextHeader>
          <IconPlaceholder />
          <IndustryContextHeaderText>
            {data.industry_context_heading}
          </IndustryContextHeaderText>
        </IndustryContextHeader>
        <IndustryContextExamples>
          {data.industry_context_explanation.map(example => {
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

      {/* <CompanyComparisonSection>
    <CompanyComparisonSectionHeading>
      {aboutData.company_comparison_section_heading}
    </CompanyComparisonSectionHeading>
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
            <FeatureSection>
              <FeatureTitle>{feature.product_feature_name}</FeatureTitle>
              <CompetitorIcon />
              <CompetitorIcon />
              <CompetitorIcon />
            </FeatureSection>
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
  </CompanyComparisonSection> */}

      <CompanyComparisonSection>
        <table>
          <tr>
            <th></th>
            {data.company.map(competitor => (
              <>
                <th>
                  <CompetitorName>{competitor.company_name}</CompetitorName>
                </th>
              </>
            ))}
          </tr>
          {data.product_feature.map(feature => (
            <tr>
              <td>
                <FeatureTitle>{feature.product_feature_name}</FeatureTitle>
              </td>
              <td>
                <CompetitorIcon />
              </td>
              <td>
                <CompetitorIcon />
              </td>

              <td>
                <CompetitorIcon />
              </td>
            </tr>
          ))}
        </table>
      </CompanyComparisonSection>

      <CompanyBackgroundSection>
        <GeneralDescriptionSection>
          <CompanyBackgroundHeading>
            {data.company_background_section_heading}
          </CompanyBackgroundHeading>
          <CompanyBackgroundDescription>
            {data.company_background_description}
          </CompanyBackgroundDescription>
        </GeneralDescriptionSection>
        <CompanyTeamSection>
          <CompanyTeamHeading>
            {data.company_team_heading}
          </CompanyTeamHeading>
          <CompanyTeamMemberGroup>
            {data.team_member_information.map(member => {
              return (
                <TeamMember>
                  <MemberImage></MemberImage>
                  <MemberTitle>{member.team_member_title}</MemberTitle>
                  <MemberDescription>
                    {member.team_member_description}
                  </MemberDescription>
                </TeamMember>
              )
            })}
          </CompanyTeamMemberGroup>
        </CompanyTeamSection>
      </CompanyBackgroundSection>
    </>
  )
}
