import styled from "styled-components"
import dimensions from "../../style/dimensions"
export const IconPlaceholder = styled.div`
  height: 50px;
  width: 50px;
  background-color: #9d9d9d;
`

export const AboutHeaderText = styled.div`
  font-size: 48px;
  font-weight: bold;
  padding-left: 20px;
`

export const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  padding-top: 96px;
`

export const MissionSection = styled.div`
  padding-top: 21px;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    padding-top: 96px;
  }
`

export const MissionImage = styled.div`
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

export const MissionText = styled.div`
  position: relative;
  padding-top: 28px;
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 35vw;
    position: relative;
    padding-left: 75px;
    padding-top: 0px;
  }
`

export const MissionTextHeader = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding-top: 19px;
  padding-bottom: 25px;
`

export const MissionTextParagraph = styled.div`
  font-size: 20px;
`
export const IndustryContextSection = styled.div`
  padding-top: 130px;
  padding-left: ;
`
export const IndustryContextHeader = styled.div``
export const IndustryContextHeaderText = styled.div`
  font-size: calc(36px + (36 - 24) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
  padding-top: 26px;
`

export const IndustryContextExamples = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
  }
`

export const IndustryContextGroup = styled.div`
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

export const IndustryContextImage = styled.div`
  background-color: #cacaca;
  height: 243px;
  width: 22vw;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const IndustryContextExampleParagraph = styled.div`
  font-size: 16px;
  padding-top: 26px;

  width: 22vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const CompanyComparisonSection = styled.div`
  padding-top: 148px;
  width: 100%;
  display: flex;
  justify-content: center;

  th {
    text-align: center;
    padding-right: 51px;
  }

  td.competitor-icon {
    display: flex;
    justify-content: center;
  }
`

export const CompanyComparisonSectionHeading = styled.div`
  text-align: center;
  font-size: calc(36px + (36 - 24) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
`

export const ProductBenefitSection = styled.div`
  padding-top: 68px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const BenefitGroup = styled.div`
  width: 15vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    flex: 50%;
  }
`

export const BenefitImage = styled.div`
  background-color: #9d9d9d;
  height: 11vw;
  width: 11vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 125px;
    height: 125px;
  }
`

export const BenefitTitle = styled.div`
  font-size: calc(28px + (28 - 16) * ((100vw - 300px) / (1440 - 300)));
  font-weight: bold;
`

export const ProductComparison = styled.div`
  margin-top: 170px;
  display: flex;
`

export const FeatureTitleColumn = styled.div`
  // margin-top: 110px;
`

export const FeatureTitle = styled.div`
  // font-size: calc(28px + (28 - 14) * ((100vw - 300px) / (1440 - 300)));
  font-size: 28px;

  font-weight: bold;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: 14px;
  }
`

export const CompetitorColumnGroup = styled.div`
  display: flex;
  margin-left: 12px;
`

export const CompetitorColumn = styled.div`
  margin-left: 51px;
`

export const CompetitorName = styled.div`
  // font-size: calc(36px + (36 - 8) * ((100vw - 300px) / (1600 - 300)));
  font-size: 36px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: 8px;
  }
  font-weight: bold;
`

export const IconGroup = styled.div`
  margin-top: 68px;
`

export const CompetitorIcon = styled.div`
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

export const CompanyBackgroundSection = styled.div`
  margin-top: 150px;
`

export const GeneralDescriptionSection = styled.div`
  width: 46vw;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const CompanyBackgroundHeading = styled.div`
  font-weight: bold;
  font-size: calc(36px + (36 - 24) * ((100vw - 300px) / (1440 - 300)));
  text-align: center;
  padding-bottom: 50px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-bottom: 30px;
  }
`

export const CompanyBackgroundDescription = styled.div`
  font-size: calc(20px + (20 - 14) * ((100vw - 300px) / (1440 - 300)));
`

export const CompanyTeamSection = styled.div`
  margin-top: 90px;
  width: 65vw;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const CompanyTeamHeading = styled.div`
  font-weight: bold;
  font-size: calc(28px + (28 - 24) * ((100vw - 300px) / (1440 - 300)));
  padding-bottom: 40px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    text-align: center;
  }
`

export const CompanyTeamMemberGroup = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
  }
`

export const TeamMember = styled.div`
  width: 30vw;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    padding-bottom: 32px;
  }
`

export const MemberImage = styled.div`
  background-color: #cacaca;
  width: 30vw;
  height: 292px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const MemberTitle = styled.div`
  font-weight: bold;
  font-size: calc(28px + (28 - 24) * ((100vw - 300px) / (1440 - 300)));
  padding-top: 16px;
  padding-bottom: 16px;
`

export const MemberDescription = styled.div`
  font-size: calc(16px + (16 - 14) * ((100vw - 300px) / (1440 - 300)));
`

export const FeatureSection = styled.div`
  display: flex;
`
