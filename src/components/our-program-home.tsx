import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text, EmbeddedText, HomepageImage, FlexList, Box, Icon } from "./ui"
import * as styles from "./homepage-intro.css"
import StyledTitle from "../utils/StyledTitle"
import * as focusAreaStyles from "./focus-area.css"
import { theme } from "../theme.css"


export type Program = {
    id: any;
    programContent: String;
    programShortDescription: String;
    programTitle: String;
    programImage: HomepageImage;
}
export interface HomepageOurProgramProps {
    id: any
    sectionDescription: String
    sectionTitle: String
    listOfPrograms: Program[]
}

export default function HomepageOurProgram(props: HomepageOurProgramProps) {
    const { sectionDescription, sectionTitle, listOfPrograms = [] } = props;
    const SingleProgram = ({ id, programContent, programShortDescription, programTitle, programImage }) => (
        <Box key={id} center className={focusAreaStyles.FocusAreaBlock}>
            {programImage && (
                <Icon
                    alt={programImage.alt}
                    image={programImage.gatsbyImageData}
                    size="xlarge"
                />
            )}
            <Text>{programTitle}</Text>
            <EmbeddedText className={styles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: programShortDescription }}></EmbeddedText>
        </Box>
    )
    return (
        <Section>
            <Container>
                <StyledTitle text={sectionTitle} n={1} style={{
                    fontSize: theme.customFontSizes[2]
                }} />
                <EmbeddedText className={styles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: sectionDescription }}></EmbeddedText>
                <FlexList gap={4} variant="responsive" alignItems="spaceBetween">
                    {listOfPrograms.map((program: Program) => (
                        <li key={program.id}>
                            <SingleProgram {...program} />
                        </li>
                    ))}
                </FlexList>
            </Container>
        </Section>
    )
}

export const query = graphql`
    fragment HomepageOurProgramContent on HomepageOurProgram {
        id
        blocktype
        sectionDescription
        sectionTitle
        listOfPrograms {
          programContent
          programShortDescription
          programTitle
          programImage {
            alt
            id
            gatsbyImageData
          }
        }
        originalId
    }
`