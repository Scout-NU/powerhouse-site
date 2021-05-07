import React from "react"
import { TopicBox, TopicsContainer } from "./TopicsPicker.styles"

export const TopicsPicker = ({ topics, onTopicPicked }) => {
  return (
    <TopicsContainer>
      {topics.map(t => (
        <TopicBox
          role="button"
          aria-label="General FAQ Question topic filter"
          onClick={() => onTopicPicked(t)}
          selected={t.selected}
          key={t.id}
        >
          {t.label}
        </TopicBox>
      ))}
    </TopicsContainer>
  )
}
