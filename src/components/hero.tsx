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
      url
    }
  } = props;
  return (
    <Section>
        <div style={{ display: "grid" }}>
          {/* You can use a GatsbyImage component if the image is dynamic */}
          <StaticImage
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              minHeight: 240,
              maxHeight: 600,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectRatio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt={alt}
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src={"https://www.datocms-assets.com/102566/1686398504-homejumbotron.jpg?auto=format"}
            formats={["auto", "webp", "avif"]}
          />
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "start",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            <div className={skewedBackground}>
              <div className={textOverlay}>
                <h1 className={heroHeading}>{h1}</h1>
                <p className={heroSubheading}>{subhead}</p>
              </div>
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
    }
  }
`
