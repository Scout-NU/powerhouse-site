import React from "react"
import { H3 } from "../../style/type-styles"
import { FAQContainer, TopicContiner } from "./faq.styles"
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

  const [selectedTopic, setSelected] = React.useState()
  console.log(individual_topic)
  return (
    <FAQContainer>
      <H3>{main_section_heading}</H3>
      <TopicContiner>
        <TopicsPicker
          topics={individual_topic.map((t, i) => ({
            label: t.topic_heading,
            id: t.topic_heading + i,
            selected: t.topic_heading + i === selectedTopic,
          }))}
          onTopicPicked={id => setSelected(id)}
        />
      </TopicContiner>
    </FAQContainer>
  )
}

export default FAQPage
