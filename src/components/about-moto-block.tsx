import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading, HomepageImage, EmbeddedText } from "./ui"
import * as styles from "./about-intro.css"
import { theme } from "../theme.css"
import StyledTitle from "../utils/StyledTitle"

export type AboutMotoBlock = {
    id: any;
    motoBlockText: string;
    motoBlockImage: HomepageImage;
}

export interface AboutMotoBlockProps {
    title: string
    listOfMotoBlocks: AboutMotoBlock[]
}

export default function AboutTheMoto(props: AboutMotoBlockProps) {
    return (
        <Section style={{
            paddingTop: "16px",
            paddingBottom: "16px"
        }}>
            <Container>
                <StyledTitle text={props.title} n={1} style={{
                    fontSize: theme.customFontSizes[2]
                }} />
            </Container>
        </Section>
    )
}

export const query = graphql`
  fragment AboutMotoBlockContent on AboutTheMoto {
    id
    title
    listOfMotoBlocks {
        id
        motoBlockText
        motoBlockImage {
            id
            gatsbyImageData
            alt
        }
    }
  }
`
