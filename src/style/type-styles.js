import styled from "styled-components"

const minSize = {
  h1: 50,
  h2: 30,
  h3: 20,
  p: 16,
}

const devices = {
  mobile: "320",
  mobileMax: "375",
  tablet: "768",
  laptop: "1024",
  desktop: "1440",
}

const fontSizes = {
  h1: `calc(${minSize.h1}px + (64 - ${minSize.h1}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
  h2: `calc(${minSize.h2}px + (48 - ${minSize.h2}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
  h3: `calc(${minSize.h3}px + (32 - ${minSize.h3}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
  p: `calc(${minSize.p}px + (24 - ${minSize.p}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
}

const H1 = styled.h1`
  font-size: ${fontSizes.h1};
  font-weight: bold;
`

const H2 = styled.h2`
  font-size: ${fontSizes.h2};
  font-weight: bold;
`

const H3 = styled.h3`
  font-size: ${fontSizes.h3};
  font-weight: bold;
`

const P = styled.p`
  font-size: ${fontSizes.p};
`

export { H1, H2, H3, P }
