import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading, HomepageImage, EmbeddedText, FlexList, Box, Icon } from "./ui"
import * as styles from "./about-advisory-council.css"
import { theme } from "../theme.css"
import StyledTitle from "../utils/StyledTitle"



type AdvisoryCouncil = {
    id: string;
    advisorName: string;
    advisorTitle: string;
    advisorPhoto: HomepageImage;
}

export interface AboutUsAdvisoryCouncilProps {
    id: string
    title: string
    listOfCounsellorsBlock: AdvisoryCouncil[]
}

export default function AboutUsAdvisoryCouncil({ id, title, listOfCounsellorsBlock }: AboutUsAdvisoryCouncilProps) {

    const CounsellorBlock = ({ id, advisorName, advisorTitle, advisorPhoto }) => (
        <Box center className={styles.CounsellorBlock} padding={0} style={{
            padding: 0
        }}>
            {advisorPhoto && (
                <GatsbyImage alt={advisorPhoto.alt} image={advisorPhoto.gatsbyImageData} style={{
                    width: '360px', // Set the width to 360px
                    height: '320px', // Set the height to 360px, making it a square aspect ratio
                    objectFit: 'cover', // Ensure the image covers the square container
                    borderRadius: '8px'
                }} />
            )}
            <div style={{
                padding: 8
            }}>
                <Text variant="body" className={styles.AdvisorName}>{advisorName}</Text>
                <Text variant="body">{advisorTitle}</Text>
            </div>
        </Box>
    )
    return (
        <Section style={{
            paddingTop: "16px",
            paddingBottom: "16px"
        }}>
            <Container>
                <StyledTitle text={title} n={1} style={{
                    fontSize: theme.customFontSizes[2]
                }} />
                <FlexList gap={3} variant="responsive" alignItems="spaceBetween">
                    {listOfCounsellorsBlock.map((counsellorsBlock: AdvisoryCouncil) => (
                        <li key={counsellorsBlock.id}>
                            <CounsellorBlock {...counsellorsBlock} />
                        </li>
                    ))}
                </FlexList>
            </Container>
        </Section>
    )
}

export const query = graphql`
  fragment AboutUsAdvisoryCouncilContent on AboutUsAdvisoryCouncil {
    id
    title
    listOfCounsellorsBlock {
        advisorName
        advisorTitle
        advisorPhoto {
            id
            alt
            gatsbyImageData
        }
    }
  }
`
