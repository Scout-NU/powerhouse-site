import React from "react"
import { H1, P, H2, Body, H3, Sub2 } from "../../style/type-styles"
import { ContactContainer, ContactForm, ContactSection } from "./contact-styles"
import PlantIcon from "../../vectors/plant-icon.svg"

export default function Contact({ data }) {
  return (
    <ContactContainer>
      <ContactSection>
        <ContactForm>
          <PlantIcon />
          <H2>{data.prismicContactPage.data.overview_heading}</H2>
          <Body>{data.prismicContactPage.data.overview_description}</Body>
        </ContactForm>
      </ContactSection>


    </ContactContainer>
  )
}
