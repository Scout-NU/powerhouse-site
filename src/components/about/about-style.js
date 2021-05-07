import styled from "styled-components"
import dimensions from "../../style/dimensions"
import colors from "../../style/colors"
import {
  layoutPaddingDesktop,
  layoutPaddingMobile,
} from "../../style/variables"
export const IconPlaceholder = styled.div`
  img {
    width: 6vw;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      width: 10vw;
    }
  }
`

export const AboutHeaderText = styled.div`
  padding-top: 89px;
  color: ${colors.ocean900};
`

export const MissionSection = styled.div`
  color: ${colors.ocean900};

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
  color: ${colors.ocean900};

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
  color: ${colors.ocean900};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`
export const IndustryContextSection = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
  background-color: white;
  color: ${colors.ocean900};
`

export const IndustryContextContainer = styled.div`
  background-color: white;
  width: 89%;
  position: relative;
  z-index: 1;
  margin-top: 70px;
  padding-top: 42px;
  padding-left: 109px;
  padding-right: 109px;
  color: ${colors.ocean900};
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
  margin-top: 158px;
  color: ${colors.ocean900};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 54px;
  }
`

export const ProductBenefitsContainer = styled.div`
  margin-top: 68px;
  display: flex;
  flex-wrap: wrap;
  color: ${colors.ocean900};

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

export const ComparisonCTA = styled.div`
  margin-top: 90px;
  margin-bottom: 114px;
  color: ${colors.ocean900};

  display: flex;
  justify-content: center;
  a {
    background-color: ${colors.seafoam900};
    text-transform: uppercase;
    color: ${colors.white900};
    padding-left: 48px;
    font-size: 16px;
    padding-right: 48px;
    padding-top: 16px;
    padding-bottom: 16px;
    text-decoration: none;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 40px;
    margin-top: 56px;
  }
`

export const CompanyComparisonSection = styled.div`
  padding-top: 148px;
  width: 100vw;
  margin-top: 141px;
  color: ${colors.ocean900};

  display: flex;
  margin-left: -${layoutPaddingDesktop};
  justify-content: center;

  background-color: rgb(110, 168, 192, 0.07);

  th {
    text-align: center;
    padding-right: 51px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: -${layoutPaddingMobile};
    padding-top: 53px;

    th {
      text-align: center;
      padding-right: 16px;
    }
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
  color: ${colors.ocean900};
`

export const ProductComparison = styled.div`
  margin-top: 170px;
  display: flex;
`

export const FeatureTitleColumn = styled.div`
  // margin-top: 110px;
  color: ${colors.ocean900};
`

export const FeatureTitle = styled.div`
  font-size: 28px;
  margin-bottom: 25px;
  color: ${colors.ocean900};

  margin-top: 25px;
  margin-right: 16px;
  font-weight: bold;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: 12px;
    width: 70px;
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
  font-size: 36px;
  text-align: center;
  padding-bottom: 68px;

  color: ${colors.ocean900};
  display: flex;
  justify-content: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: 12px;
    padding-bottom: 18px;
  }
  font-weight: bold;
`

export const CompetitorTH = styled.th``

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
  color: ${colors.ocean900};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const CompanyBackgroundHeading = styled.div`
  text-align: center;
  color: ${colors.ocean900};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-bottom: 30px;
  }
`

export const CompanyTeamSection = styled.div`
  margin-top: 154px;
  width: 65vw;
  margin-left: auto;
  margin-right: auto;
  color: ${colors.ocean900};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
  }
`

export const CheckIcon = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    svg {
      width: 27px;
      height: 27px;
    }
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

export const IndustryContextBackgroundImage = styled.div`
  position: absolute;
  left: 0;
  z-index: 0;
  img {
    width: 100vw;
    height: calc(100vh + 160px);
    object-fit: cover;
  }
`
