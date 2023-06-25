import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text, EmbeddedText, HomepageImage, FlexList, Box, Icon, Link } from "./ui"
import * as styles from "./homepage-intro.css"
import StyledTitle from "../utils/StyledTitle"
import * as ourProgramStyles from "./our-program-home.css"
import { theme } from "../theme.css"
import { GatsbyImage } from "gatsby-plugin-image"


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
    const SingleProgram = ({ id, programShortDescription, programTitle, programImage, featured = false }) => (
        <Box key={id} className={featured ? ourProgramStyles.OurProgramBlock : ourProgramStyles.Column}>
            <div className={ourProgramStyles.OurProgramImageContainer}>
                {programImage && (
                    <GatsbyImage
                        alt={programImage.alt}
                        image={programImage.gatsbyImageData}
                        className="ourProgramImage"

                    />
                )}
            </div>

            <Text className={ourProgramStyles.OurProgramBlockTitle}>{programTitle}</Text>
            <EmbeddedText className={styles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: programShortDescription }}></EmbeddedText>
            <div className={ourProgramStyles.ReadMoreButtonContainer}>
                <Link to="/programs" className={ourProgramStyles.ReadMoreButton}>Read More</Link>
            </div>
        </Box>
    )
    const [firstProgram, secondProgram, thirdProgram, ..._] = listOfPrograms;
    const restOfPrograms = [secondProgram, thirdProgram];

    return (
        <Section>
            <Container>
                <StyledTitle text={sectionTitle} n={1} style={{
                    fontSize: theme.customFontSizes[2]
                }} />
                <EmbeddedText className={styles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: sectionDescription }}></EmbeddedText>
                <SingleProgram {...firstProgram} featured />
                <div className={ourProgramStyles.RowContainer}>
                    {restOfPrograms.map((program: Program) => (
                        <SingleProgram key={program.id} {...program} />
                    ))}
                </div>
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