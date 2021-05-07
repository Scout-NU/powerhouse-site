import { css } from "@emotion/react"
import styled from "@emotion/styled"
import colors from "../../../style/colors"

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
  width: 200px;
  height: 150px;
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
`
