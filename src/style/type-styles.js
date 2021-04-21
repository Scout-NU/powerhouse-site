import styled from "styled-components"

const minSize = {
  h1: 50,
  h2: 30,
  h3: 20,
  sub1: 16,
  p: 16,
  nav: 16,
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
  sub1: `calc(${minSize.sub1}px + (20 - ${minSize.sub1}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
  p: `calc(${minSize.p}px + (24 - ${minSize.p}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
  NavText: `calc(${minSize.nav}px + (24 - ${minSize.nav}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
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

const Sub1 = styled.h4 `
  font-size: ${fontSizes.sub1};
  text-transform: uppercase;
  font-weight: normal;
  //margin-top: 0px;
`

const P = styled.p`
  font-size: ${fontSizes.p};
`

const NavText = styled.a`
  font-size: ${fontSizes.nav};
`

export { H1, H2, H3, Sub1, P, NavText }
