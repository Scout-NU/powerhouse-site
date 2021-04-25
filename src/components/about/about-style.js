import styled from "styled-components"
import dimensions from "../../style/dimensions"

export const IconPlaceholder = styled.div`
  img {
    width: 6vw;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      width: 10vw;
    }
  }
`

export const AboutHeaderText = styled.div`
  margin-top: 89px;
`

export const MissionSection = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
  }
`

export const MissionImage = styled.div`
  img {
    height: 405px;
    width: 45vw;
    left: 0;
    margin-left: -80px;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      height: 100%;
      width: 100vw;
      margin-left: -16px;
    }
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

export const MissionTextParagraph = styled.div`
  width: 44vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }

`
export const IndustryContextSection = styled.div`
  margin-top: 130px;
  background-color: black;
  width: 100%;
`

export const IndustryContextContainer = styled.div`
  background-color: white;
  width: 89%;
  margin-top: 70px;
  margin-bottom: 80px;
  padding-top: 42px;
  padding-left: 8%;
  padding-right: 8%;
  padding-bottom: 54px;

`

export const IndustryContextExamples = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: space-between;
  }
`

export const IndustryContextGroup = styled.div`
  margin-top: 26px;
  width: 22vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 38px;
    width: 100%;
  }
`

export const IndustryContextImage = styled.div`
  img {
    width: 22vw;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      width: 100%;
    }
  }
`

export const IndustryContextExampleParagraph = styled.div`
  width: 22vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const ProductBenefitHeader = styled.div`
  text-align: center;
`

export const ProductBenefitsContainer = styled.div`
  margin-top: 68px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 40px;
  }
`

export const BenefitGroup = styled.div`
  width: 15vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    flex: 50%;
  }
`

export const BenefitImage = styled.div`
  height: 118px;
  text-align: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 125px;
  }
`

export const BenefitTitle = styled.div`
  text-align: center;
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
  text-align: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-bottom: 30px;
  }
`

export const CompanyTeamSection = styled.div`
  margin-top: 154px;
  width: 65vw;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const CompanyTeamHeading = styled.div`
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
    padding-bottom: 80px;
  }
`

export const MemberImage = styled.div`
  img {
    width: 30vw;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      width: 100%;
    }
  }
`

export const FeatureSection = styled.div`
  display: flex;
`
