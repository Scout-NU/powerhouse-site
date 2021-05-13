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
  CompanyTeamSection,
  CheckIcon,
  CompetitorTH,
  ComparisonCTA,
  IndustryContextBackgroundImage,
  AboutContainer,
} from "./about-style"

import Check from "../../vectors/CheckIcon.svg"
import Xicon from "../../vectors/xicon.svg"

export default function About({ data }) {
  return (
    <AboutContainer>
      <AboutHeaderText>
        <H2>About</H2>
      </AboutHeaderText>

      <MissionSection>
        <MissionImage>
          <img alt={data.mission_image.alt} src={data.mission_image.url} />
        </MissionImage>

        <MissionText>
          <IconPlaceholder>
            <img alt={data.mission_icon.alt} src={data.mission_icon.url} />
          </IconPlaceholder>
          <H2>{data.mission_heading}</H2>
          <MissionTextParagraph>
            <Body>{data.mission_description}</Body>
          </MissionTextParagraph>
        </MissionText>
      </MissionSection>

      <IndustryContextSection>
        <IndustryContextBackgroundImage>
          <img
            alt={data.industry_context_background_image.alt}
            src={data.industry_context_background_image.url}
          />
        </IndustryContextBackgroundImage>
        <IndustryContextContainer>
          <div>
            <IconPlaceholder>
              <img
                alt={data.industry_context_icon.alt}
                src={data.industry_context_icon.url}
              />
            </IconPlaceholder>
            <H2>{data.industry_context_heading}</H2>
            <IndustryContextExamples>
              {data.industry_context_explanation.map((example, id) => {
                return (
                  <IndustryContextGroup key={id}>
                    <IndustryContextImage>
                      <img
                        alt={
                          example.explanation_image.alt &&
                          example.explanation_image.alt
                        }
                        src={example.explanation_image.url}
                      />
                    </IndustryContextImage>
                    <IndustryContextExampleParagraph>
                      <Body>{example.explanation_description}</Body>
                    </IndustryContextExampleParagraph>
                  </IndustryContextGroup>
                )
              })}
            </IndustryContextExamples>

            <ComparisonCTA>
              <a href={data.cta_button_destination.url}>
                {data.cta_button_text}
              </a>
            </ComparisonCTA>
          </div>
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
                  <img
                    alt={benefit.product_benefit_image.alt}
                    src={benefit.product_benefit_image.url}
                  />
                </BenefitImage>
                <BenefitTitle>
                  <Body>{benefit.product_benefit_title}</Body>
                </BenefitTitle>
              </BenefitGroup>
            )
          })}
        </ProductBenefitsContainer>
      </div>

      <CompanyComparisonSection>
        <div>
          <table>
            <tr>
              <th></th>
              {data.company.map((competitor, id) => (
                <CompetitorTH key={id}>
                  <CompetitorName>{competitor.company_name}</CompetitorName>
                </CompetitorTH>
              ))}
            </tr>
            {data.rows.map((feature, id) => (
              <tr key={id}>
                <td>
                  <FeatureTitle>{feature.feature_name}</FeatureTitle>
                </td>
                <td>
                  <CheckIcon>
                    {feature.first_company_check == "Yes" ? (
                      <Check />
                    ) : (
                      <Xicon />
                    )}
                  </CheckIcon>
                </td>
                <td>
                  <CheckIcon>
                    {feature.second_company == "Yes" ? <Check /> : <Xicon />}
                  </CheckIcon>
                </td>

                <td>
                  <CheckIcon>
                    {feature.third_company == "Yes" ? <Check /> : <Xicon />}
                  </CheckIcon>
                </td>
              </tr>
            ))}
          </table>

          <ComparisonCTA>
            <a href={data.products_navigation_button_destination.url}>
              {data.products_navigation_button_text}
            </a>
          </ComparisonCTA>
        </div>
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
                    <img
                      alt={member.team_member_image.alt}
                      src={member.team_member_image.url}
                    />
                  </MemberImage>
                  <H3>{member.team_member_title}</H3>
                  <Body>{member.team_member_description}</Body>
                </TeamMember>
              )
            })}
          </CompanyTeamMemberGroup>
        </CompanyTeamSection>
      </CompanyBackgroundSection>
    </AboutContainer>
  )
}
