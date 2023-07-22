import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading, HomepageImage, EmbeddedText, FlexList, Box, Icon } from "./ui"
import * as styles from "./about-our-team.css"
import { theme } from "../theme.css"
import StyledTitle from "../utils/StyledTitle"



type TeamMember = {
    id: string;
    name: string;
    title: string;
    photo: HomepageImage;
}

export interface AboutUsOurTeamProps {
    id: string
    title: string
    listOfTeamMembers: TeamMember[]
}

export default function AboutUsOurTeam({ id, title, listOfTeamMembers }: AboutUsOurTeamProps) {

    const TeamBlock = ({ id, name, title, photo }) => (
        <Box center className={styles.TeamBlock} padding={0} style={{
            padding: 0
        }}>
            {photo && (
                <GatsbyImage alt={photo.alt} image={photo.gatsbyImageData} className={styles.Photo} />
            )}
            <div style={{
                padding: 8
            }}>
                <Text variant="body" className={styles.Name}>{name}</Text>
                <Text variant="body">{title}</Text>
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
                    {listOfTeamMembers.map((teamBlock: TeamMember) => (
                        <li key={teamBlock.id}>
                            <TeamBlock {...teamBlock} />
                        </li>
                    ))}
                </FlexList>
            </Container>
        </Section>
    )
}

export const query = graphql`
  fragment AboutUsOurTeamContent on AboutUsOurTeam {
    id
    title
    listOfTeamMembers {
        name
        title
        photo {
            id
            alt
            gatsbyImageData
        }
    }
  }
`
