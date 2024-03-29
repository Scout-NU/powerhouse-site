import styled from "@emotion/styled"

const minSize = {
  h1: 50,
  h2: 30,
  h3: 20,
  h4: 20,
  p: 16,
  nav: 16,
  sub1: 16,
  sub2: 14,
  body: 14,
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
  h4: `calc(${minSize.h4}px + (22 - ${minSize.h4}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
  p: `calc(${minSize.p}px + (24 - ${minSize.p}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
  NavText: `calc(${minSize.nav}px + (24 - ${minSize.nav}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
  Sub1: `calc(${minSize.sub1}px + (36 - ${minSize.sub1}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
  Sub2: `calc(${minSize.sub2}px + (16 - ${minSize.sub2}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,

  body: `calc(${minSize.body}px + (18 - ${minSize.body}) * ((100vw - ${devices.mobile}px) / (${devices.desktop} - ${devices.mobile})))`,
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

const H4 = styled.h4`
  font-size: ${fontSizes.h4};
  font-weight: bold;
`

const P = styled.p`
  font-size: ${fontSizes.p};
`

const NavText = styled.div`
  font-size: ${fontSizes.nav};
`

const Sub1 = styled.div`
  font-size: ${fontSizes.Sub1};
  text-transform: uppercase;
`

const Sub2 = styled.div`
  font-size: ${fontSizes.Sub2};
  text-transform: uppercase;
  font-weight: bold;
`

const Body = styled.div`
  font-size: ${fontSizes.body};
`

export { H1, H2, H3, H4, P, NavText, Sub1, Sub2, Body, fontSizes }
