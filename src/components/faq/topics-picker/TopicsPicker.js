import React, { useState } from "react"
import { FAQQuestion } from "../faq-question/FAQQuestion"
import {
  TopicBox,
  TopicFAQContainer,
  TopicsContainer,
} from "./TopicsPicker.styles"

export const TopicsPicker = ({ topics, onTopicPicked }) => {
  const [openTopics, setOpen] = useState([])
  const onTopicSelected = topic => {
    const { label } = topic
    onTopicPicked(topic)
    setOpen(prev =>
      prev.includes(label) ? prev.filter(t => t !== label) : [...prev, label]
    )
  }
  console.log(openTopics)
  return (
    <TopicsContainer>
      {topics.map(t => (
        <>
          <TopicBox
            role="button"
            aria-label="General FAQ Question topic filter"
            onClick={() => onTopicSelected(t)}
            selected={t.selected}
          >
            {t.label}
          </TopicBox>
          {openTopics.includes(t.label) &&
            t.questions.map((fq, i) => (
              <TopicFAQContainer>
                <FAQQuestion
                  key={i}
                  questionText={fq.question}
                  answerText={fq.answer}
                />
              </TopicFAQContainer>
            ))}
        </>
      ))}
    </TopicsContainer>
  )
}
