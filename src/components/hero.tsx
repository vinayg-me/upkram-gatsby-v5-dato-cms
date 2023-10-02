import { graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  Container,
  Flex,
  Heading,
  HomepageImage,
  Section,
  Subhead,
  Text
} from "./ui"
import { heroHeading, heroSubheading, skewedBackground, textOverlay } from "./hero.css"
import { media } from "./ui.css"

export interface HeroProps {
  image: HomepageImage
  h1: string
  subhead: string
  text: string
}

export default function Hero(props: HeroProps) {
  const {
    h1,
    subhead,
    image: {
      alt,
      url,
      gatsbyImageData
    }
  } = props;
  
  const isSmallScreen = () => {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      return !window.matchMedia(media.medium).matches;
    }
    return false;
  }

  const getJumbotronHeight = () => {
    return isSmallScreen() ? 240 : 700;
  }

  return (
    <Section style={{height: getJumbotronHeight()}}>
      <div style={{ position: "relative", minHeight: 240, height: '100%' }}>
        <GatsbyImage
          image={gatsbyImageData}
          alt={alt}
          style={{ position: "absolute", width: "100%", height: "100%", minHeight: 240, maxHeight: 700 }}
          imgStyle={{ objectFit: 'fill'}}
        />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center", alignItems: "center" }} className={skewedBackground}>
          <div className={textOverlay}>
            <h1 className={heroHeading}>{h1}</h1>
            <p className={heroSubheading}>{subhead}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      alt
      url
      gatsbyImageData
    }
  }
`
