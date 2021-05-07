import React from "react"
import { ContactButton } from "../../contact/contact-styles"
import { Banner, CTABackground, CTATitle } from "./FAQContact.styles"
export const FAQContact = ({
  imageUrl,
  ctaTitle,
  ctaLabel,
  ctaDestination,
}) => (
  <>
    <Banner imageUrl={imageUrl}>
      <CTABackground>
        <CTATitle>{ctaTitle}</CTATitle>
        <ContactButton href={ctaDestination}>{ctaLabel}</ContactButton>
      </CTABackground>
    </Banner>
  </>
)
