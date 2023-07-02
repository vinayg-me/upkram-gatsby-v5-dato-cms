import * as React from "react"
import { graphql } from "gatsby"
import {
  Space,
  Container,
  Section,
  FlexList,
  Text,
  Logo,
  HomepageImage,
} from "./ui"
import StyledTitle from "../utils/StyledTitle"
import { theme } from "../theme.css"
import * as styles from "./logo-list.css"

export interface LogoItemProps {
  id: string
  alt: string
  image: HomepageImage
}

export function LogoItem(props: LogoItemProps) {
  if (!props.image) return null

  return (
    <Logo alt={props.alt} image={props.image.gatsbyImageData} size="medium" />
  )
}

export interface LogoListProps {
  text?: string
  logos: LogoItemProps[]
}

export default function LogoList(props: LogoListProps) {
  return (
    <Section paddingY={4}>
      <Container>
        {props.text && (
          <StyledTitle text={props.text} n={1} style={{
            fontSize: theme.customFontSizes[2]
          }} />
        )}
        <Space size={4} />
      </Container>
      <Section background="primary">
        <Container>
          <FlexList gap={4} variant="center">
            {props.logos.map(
              (logo) =>
                logo && (
                  <li key={logo.id} className={styles.LogoContainer}>
                    <LogoItem {...logo} />
                  </li>
                )
            )}
          </FlexList>
        </Container>

      </Section>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    text
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
