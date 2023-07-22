import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading, HomepageImage, EmbeddedText } from "./ui"
import * as styles from "./about-intro.css"

export interface AboutIntroProps {
    aboutUsDescription: string
}

export default function AboutUsIntro(props: AboutIntroProps) {
    return (
        <Section style={{
            paddingTop: "16px",
            paddingBottom: "16px"
        }}>
            <Container>
                {
                    props.aboutUsDescription && (
                        <EmbeddedText className={styles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: props.aboutUsDescription }}></EmbeddedText>
                    )
                }
            </Container>
        </Section>
    )
}

export const query = graphql`
  fragment AboutUsIntroContent on AboutUsIntro {
    id
    aboutUsDescription
  }
`
