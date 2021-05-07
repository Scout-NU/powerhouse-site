import React, { useState } from "react"
import CloseIcon from "../../../vectors/close.svg"
import OpenIcon from "../../../vectors/open.svg"
import {
  FAQAnswer,
  FAQQuestionTitle,
  ToggleContainer,
} from "./FAQQuestion.styles"

export const FAQQuestion = ({ questionText, answerText }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <ToggleContainer>
        <FAQQuestionTitle>{questionText}</FAQQuestionTitle>
        {isOpen ? (
          <CloseIcon
            onClick={() => setOpen(false)}
            role="button"
            aria-label="Close FAQ question"
          />
        ) : (
          <OpenIcon
            onClick={() => setOpen(true)}
            role="button"
            aria-label="Expand FAQ question"
          />
        )}
      </ToggleContainer>
      {isOpen && <FAQAnswer>{answerText}</FAQAnswer>}
    </>
  )
}
