import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading, HomepageImage, EmbeddedText } from "./ui"
import * as homepageStyles from "./homepage-intro.css"
import StyledTitle from "../utils/StyledTitle"
import { theme } from "../theme.css"

export interface AboutUsObjectiveProps {
    id: string
    title: string
    content: string
}

export default function AboutUsObjective({ id, title, content }: AboutUsObjectiveProps) {
    return (
        <Section>
            <Container>
                <div key={id} className="learningCrisisBlockContainer">
                    <StyledTitle text={title} n={1} style={{
                        fontSize: theme.customFontSizes[2]
                    }} />
                    <EmbeddedText className={homepageStyles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: content }}></EmbeddedText>
                </div>
            </Container>
        </Section>
    )
}

export const query = graphql`
  fragment AboutUsObjectiveContent on AboutUsObjective {
    id
    title
    content
  }
`
