import styled from "@emotion/styled"
import colors from "../../../style/colors"
import { Body, H4 } from "../../../style/type-styles"

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const FAQQuestionTitle = styled(H4)`
  color: ${colors.blue900};
  margin-top: 0;
`
export const FAQAnswer = styled(Body)`
  color: ${colors.blue900};
  padding-left: 24px;
  width: 90%;
  line-height: 32px;
`
