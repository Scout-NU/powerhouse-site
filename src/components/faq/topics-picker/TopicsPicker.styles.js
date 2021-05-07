import { css } from "@emotion/react"
import styled from "@emotion/styled"
import colors from "../../../style/colors"
import dimensions from "../../../style/dimensions"

export const TopicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const SelectedBox = css`
  border: 3px solid ${colors.orange900};
  background-color: ${colors.orange900_transparent};
`

export const TopicBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  flex: 50%;
  max-width: 40%;
  aspect-ratio: 4/3;
  font-weight: bolder;

  cursor: pointer;
  border: 2px solid ${colors.orange900};
  background-color: transparent;
  transition: all 0.1s ease-in-out;
  color: ${colors.orange900};
  text-transform: uppercase;

  ${props => props.selected && SelectedBox};

  &:hover {
    ${SelectedBox};
  }

  @media (max-width: ${dimensions.maxwidthDesktop}px) {
    flex: 100%;
    max-width: 100%;
    height: 100px;
  }
  @media (max-width: ${dimensions.maxwidthDesktop}px) {
    width: 100%;
  }
`

export const TopicFAQContainer = styled.div`
  flex: 100%;
  max-width: 100%;
  margin: 10px;
  display: none;
  @media (max-width: ${dimensions.maxwidthDesktop}px) {
    display: initial;
  }
`
