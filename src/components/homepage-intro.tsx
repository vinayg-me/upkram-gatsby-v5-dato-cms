import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text, EmbeddedText } from "./ui"
import * as styles from "./homepage-intro.css"
import StyledTitle from "../utils/StyledTitle"


export type LearningCrisisBlock = {
    id: any;
    title: String;
    description: String;
}
export interface HomepageIntroProps {
    id: any
    description: string
    learningCrisisBlock: LearningCrisisBlock[]
}

export default function HomepageIntro(props: HomepageIntroProps) {
    const LearningCrisisBlock = ({ id, title, description }) => (
        <div key={id} className="learningCrisisBlockContainer">
            <StyledTitle text={title} n={2} />
            <EmbeddedText className={styles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: description }}></EmbeddedText>
        </div>
    )
    const block = props.learningCrisisBlock[0]

    return (
        <Section>
            <Container>
                <EmbeddedText className={styles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: props.description }}></EmbeddedText>
                <div className={styles.LearningCrisisContainer}>
                    <LearningCrisisBlock id={block.id} title={block.title} description={block.description} />
                </div>
            </Container>
        </Section>
    )
}

export const query = graphql`
    fragment HomepageIntroContent on HomepageIntro {
        blocktype
        originalId
        description
        ... on DatoCmsHomepageIntro {
          id
          learningCrisisBlock {
            description
            title
          }
        }
      }
`