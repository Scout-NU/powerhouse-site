import React from "react"
import { H2, H3, P, Body } from "../../style/type-styles"
import {
  IconPlaceholder,
  AboutHeaderText,
  MissionSection,
  MissionImage,
  MissionTextParagraph,
  IndustryContextSection,
  IndustryContextContainer,
  IndustryContextExamples,
  IndustryContextGroup,
  IndustryContextImage,
  IndustryContextExampleParagraph,
  ProductBenefitHeader,
  ProductBenefitsContainer,
  BenefitGroup,
  BenefitImage,
  BenefitTitle,
  CompanyComparisonSection,
  CompetitorName,
  FeatureTitle,
  CompetitorIcon,
  CompanyBackgroundSection,
  GeneralDescriptionSection,
  CompanyBackgroundHeading,
  CompanyTeamHeading,
  CompanyTeamMemberGroup,
  TeamMember,
  MemberImage,
  MissionText,
  CompanyTeamSection
} from "./about-style"

export default function About({ data }) {
  return (
    <>
      <AboutHeaderText>
        <H2>About</H2>
      </AboutHeaderText>

      <MissionSection>
        <MissionImage>
          <img src={data.mission_image.url}/>
        </MissionImage>

        <MissionText>
          <IconPlaceholder>
            <img src={data.mission_icon.url}/>
          </IconPlaceholder>
          <H2>{data.mission_heading}</H2>
          <MissionTextParagraph>
            <Body>{data.mission_description}</Body>
          </MissionTextParagraph>
        </MissionText>
      </MissionSection>


      <IndustryContextSection>   
        <IndustryContextContainer>
          <IconPlaceholder>
            <img src={data.industry_context_icon.url} />
          </IconPlaceholder>
          <H2>{data.industry_context_heading}</H2>
          <IndustryContextExamples>
            {data.industry_context_explanation.map((example, id) => {
              return (
                <IndustryContextGroup key={id}>
                  <IndustryContextImage>
                    <img src={example.explanation_image.url}/>
                  </IndustryContextImage>
                  <IndustryContextExampleParagraph>
                    <Body>{example.explanation_description}</Body>
                  </IndustryContextExampleParagraph>
                </IndustryContextGroup>
              )
            })}
          </IndustryContextExamples>
        </IndustryContextContainer> 
      </IndustryContextSection>

      <div>
        <ProductBenefitHeader>
          <H2>{data.company_comparison_section_heading}</H2>
        </ProductBenefitHeader>
        <ProductBenefitsContainer>
          {data.product_benefit.map((benefit, id) => {
            return (
              <BenefitGroup key={id}>
                <BenefitImage>
                  <img src={benefit.product_benefit_image.url}/>
                </BenefitImage>
                <BenefitTitle>
                  <Body>{benefit.product_benefit_title}</Body>
                </BenefitTitle>
                  
                
              </BenefitGroup>
            )
          })}
        </ProductBenefitsContainer>
    </div>

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
            {data.company.map((competitor, id) => (
              <>
                <th key={id}>
                  <CompetitorName>
                    <H3>{competitor.company_name}</H3>
                  </CompetitorName>
                </th>
              </>
            ))}
          </tr>
          {data.product_feature.map((feature, id) => (
            <tr key={id}>
              <td>
                <FeatureTitle>
                  <P>{feature.product_feature_name}</P>
                </FeatureTitle>
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
            <H2>{data.company_background_section_heading}</H2>
          </CompanyBackgroundHeading>
          <Body>{data.company_background_description}</Body>
        </GeneralDescriptionSection>
        <CompanyTeamSection>
          <CompanyTeamHeading>
            <H2>{data.company_team_heading}</H2>
          </CompanyTeamHeading>
          <CompanyTeamMemberGroup>
            {data.team_member_information.map((member, id) => {
              return (
                <TeamMember key={id}>
                  <MemberImage>
                    <img src={member.team_member_image.url}/>
                  </MemberImage>
                  <H3>{member.team_member_title}</H3>
                  <Body>{member.team_member_description}</Body>
                </TeamMember>
              )
            })}
          </CompanyTeamMemberGroup>
        </CompanyTeamSection>
      </CompanyBackgroundSection>
    </>
  )
}
