import React from "react"
import { H2, Body, Sub2 } from "../../style/type-styles"
import {
  ContactContainer,
  ContactForm,
  ContactSection,
  ContactDescription,
  ContactButton,
  ContactImageSection,
  SpecificContactInfo,
  EmailSection,
  AddressSection,
} from "./contact-styles"
import PlantIcon from "../../vectors/plant-icon.svg"

export default function Contact({ data }) {
  return (
    <ContactContainer>
      <ContactSection>
        <ContactForm>
          <PlantIcon />
          <H2>{data.prismicContactPage.data.overview_heading}</H2>
          <ContactDescription>
            <Body>{data.prismicContactPage.data.overview_description}</Body>
          </ContactDescription>
          <form>
            <label>
              <Sub2>
                {data.prismicContactPage.data.form_input[0].input_heading}
              </Sub2>
            </label>
            <input
              type="text"
              placeholder={
                data.prismicContactPage.data.form_input[0].input_instructions
              }
            />
            <label>
              <Sub2>
                {data.prismicContactPage.data.form_input[1].input_heading}
              </Sub2>
            </label>
            <input
              type="text"
              placeholder={
                data.prismicContactPage.data.form_input[1].input_instructions
              }
            />

            <label>
              <Sub2>
                {data.prismicContactPage.data.form_input[2].input_heading}
              </Sub2>
            </label>
            <input
              type="text"
              placeholder={
                data.prismicContactPage.data.form_input[2].input_instructions
              }
            />
          </form>
          <ContactButton>
            {data.prismicContactPage.data.submission_button_text}
          </ContactButton>
        </ContactForm>

        <ContactImageSection>
          <img src={data.prismicContactPage.data.overview_image.url} />

          <SpecificContactInfo>
            <EmailSection>
              <Sub2>
                {
                  data.prismicContactPage.data.specific_contact_info[0]
                    .contact_type
                }
              </Sub2>
              <Body>
                {
                  data.prismicContactPage.data.specific_contact_info[0]
                    .contact_details
                }
              </Body>
            </EmailSection>
            <AddressSection>
              <Sub2>
                {
                  data.prismicContactPage.data.specific_contact_info[1]
                    .contact_type
                }
              </Sub2>
              <Body>
                {
                  data.prismicContactPage.data.specific_contact_info[1]
                    .contact_details
                }
              </Body>
            </AddressSection>
          </SpecificContactInfo>
        </ContactImageSection>
      </ContactSection>
    </ContactContainer>
  )
}
