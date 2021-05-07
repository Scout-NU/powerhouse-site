import styled from "@emotion/styled"
import dimensions from "../../style/dimensions"

export const FAQContainer = styled.div`
  padding-top: 12vh;
`
export const TopicFAQSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: ${dimensions.maxwidthDesktop}px) {
    flex-direction: column-reverse;
  }
  margin-bottom: 20vh;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 10vh;
  }
`

export const TopicContainer = styled.div`
  flex: 4;
`

export const FAQQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
  @media (max-width: ${dimensions.maxwidthDesktop}px) {
    display: none;
  }
`

export const FAQWrapper = styled.div`
  margin-bottom: 20px;
`
