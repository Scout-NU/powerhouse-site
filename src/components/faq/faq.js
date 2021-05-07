import React from "react"
import { H3 } from "../../style/type-styles"
import { FAQQuestion } from "./faq-question/FAQQuestion"
import {
  FAQContainer,
  FAQQuestionsContainer,
  TopicContainer,
  TopicFAQSection,
  FAQWrapper,
} from "./faq.styles"
import { TopicsPicker } from "./topics-picker/TopicsPicker"

const FAQPage = ({ data }) => {
  const {
    main_section_heading,
    topics_section_heading,
    cta_button_destination,
    cta_button_text,
    cta_heading,
    frequently_asked_question,
    individual_topic,
  } = data

  const [selectedTopic, setSelected] = React.useState(
    individual_topic[0]?.topic_heading ?? ""
  )
  console.log(selectedTopic)
  console.log(frequently_asked_question)
  return (
    <FAQContainer>
      <H3>{main_section_heading}</H3>
      <TopicFAQSection>
        <TopicContainer>
          <TopicsPicker
            topics={individual_topic.map((t, i) => ({
              ...t,
              label: t.topic_heading,
              id: t.topic_heading + i,
              selected: t.topic_heading === selectedTopic,
            }))}
            onTopicPicked={t =>
              setSelected(
                t.topic_heading === selectedTopic ? undefined : t.topic_heading
              )
            }
          />
        </TopicContainer>

        <FAQQuestionsContainer>
          {frequently_asked_question
            .filter(fq => (selectedTopic ? fq.topic === selectedTopic : true))
            .map(fq => (
              <FAQWrapper key={fq.question}>
                <FAQQuestion
                  questionText={fq.question}
                  answerText={fq.answer}
                />
              </FAQWrapper>
            ))}
        </FAQQuestionsContainer>
      </TopicFAQSection>
    </FAQContainer>
  )
}

export default FAQPage
