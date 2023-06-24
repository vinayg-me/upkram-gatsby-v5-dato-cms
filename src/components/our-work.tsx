import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text, EmbeddedText, HomepageImage } from "./ui"
import * as styles from "./homepage-intro.css"
import StyledTitle from "../utils/StyledTitle"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from "../theme.css"


export type LearningCrisisBlock = {
    id: any;
    title: String;
    description: String;
}
export interface HomepageOurWorkProps {
    id: any
    sectionTitle: string
    sectionDescription: string
    sectionImage: HomepageImage
}

export default function HomepageOurWork(props: HomepageOurWorkProps) {
    const { sectionTitle, sectionImage, sectionDescription } = props;
    const { gatsbyImageData, alt } = sectionImage;
    return (
        <Section>
            <Container>
                <StyledTitle text={sectionTitle} n={1} style={{
                    fontSize: theme.customFontSizes[2]
                }} />
                <EmbeddedText className={styles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: sectionDescription }}></EmbeddedText>
                <GatsbyImage image={gatsbyImageData} alt={alt} />
            </Container>
        </Section>
    )
}

export const query = graphql`
    fragment HomepageOurWorkContent on HomepageOurWork {
        blocktype
        entityPayload
        originalId
        sectionTitle
        sectionImage {
          gatsbyImageData
        }
        sectionDescription
        id
      }
`