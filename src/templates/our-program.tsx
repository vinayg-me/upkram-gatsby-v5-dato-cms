import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text, EmbeddedText, HomepageImage, FlexList, Box, Icon, Link } from "../components/ui"
import * as styles from "../components/homepage-intro.css"
import StyledTitle from "../utils/StyledTitle"
import * as ourProgramStyles from "../components/our-program-home.css"
import * as aboutStyles from "../components/about-hero.css"
import { theme } from "../theme.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"


export type Program = {
    id: any;
    programContent: String;
    programShortDescription: String;
    programTitle: String;
    programImage: HomepageImage;
    slug: String;
}
export interface HomepageOurProgramProps {
    id: any
    sectionDescription: String
    sectionTitle: String
    listOfPrograms: Program[]
}

export interface OurProgramPageProps {
    data: {
        datoCmsProgram: Program
    }
}

export default function HomepageOurProgram(props: OurProgramPageProps) {
    const { data: { datoCmsProgram } } = props;
    console.log("🚀 ~ file: our-program.tsx:28 ~ HomepageOurProgram ~ props:", props)

    const { programContent, programShortDescription, programTitle, programImage, slug } = datoCmsProgram;

    return (
        <Layout>
            <Section>
                <Container>
                    <StyledTitle text={programTitle} n={1} style={{
                        fontSize: theme.customFontSizes[2]
                    }} />
                    {programImage && (
                        <GatsbyImage
                            alt={programImage.alt}
                            image={getImage(programImage.gatsbyImageData)}
                            className={aboutStyles.aboutHeroImage}
                        />
                    )}
                    <EmbeddedText className={styles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: programContent }}></EmbeddedText>
                </Container>
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query AllOurProgramsQuery($id: String) {
        datoCmsProgram(id: {eq: $id}) {
        programContent
        programImage {
            alt
            gatsbyImageData
            id
            image {
            gatsbyImageData
            }
            url
        }
        programShortDescription
        programTitle
        slug
        id
        }
    }
`