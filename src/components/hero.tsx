import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { HomepageImage, Section } from "./ui"
import {
  BackgroundDiv,
  heroHeading,
  heroSubheading,
  skewedBackground,
  textOverlay,
} from "./hero.css"
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
    image: { alt, url, gatsbyImageData },
  } = props

  const isSmallScreen = () => {
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
      return !window.matchMedia(media.medium).matches
    }
    return false
  }

  const getJumbotronHeight = () => {
    return isSmallScreen() ? 240 : 700
  }

  const HeroContent = () => (
    <>
      <div style={{ position: "absolute", width: "100%", height: "100%", inset: 0 }}>
        <GatsbyImage
          image={gatsbyImageData}
          alt={alt}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            minHeight: 240,
            maxHeight: 700,
            inset: 0,
          }}
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={skewedBackground}
      >
        <div className={textOverlay}>
          <h1 className={heroHeading}>{h1}</h1>
          <p className={heroSubheading}>{subhead}</p>
        </div>
      </div>
    </>
  )

  const DesktopHero = () => (
    <div className={BackgroundDiv}>
      <HeroContent />
    </div>
  )

  return (
    <Section style={{ height: getJumbotronHeight() }}>
      {isSmallScreen() ? <HeroContent /> : <DesktopHero />}
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
