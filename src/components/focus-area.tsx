import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text, EmbeddedText, HomepageImage, FlexList, Box, Icon } from "./ui"
import * as styles from "./homepage-intro.css"
import StyledTitle from "../utils/StyledTitle"
import * as focusAreaStyles from "./focus-area.css"
import { theme } from "../theme.css"


export type FocusAreaBlock = {
    id: any;
    focusText: String;
    focusImage: HomepageImage;
}
export interface HomepageFocusAreaProps {
    id: any
    sectionDescription: String
    sectionTitle: String
    focusAreaItems: FocusAreaBlock[]
}

export default function HomepageFocusArea(props: HomepageFocusAreaProps) {
    const { sectionDescription, sectionTitle, focusAreaItems = [] } = props;
    const FocusAreaBlock = ({ id, focusImage, focusText }) => (
        <Box center className={focusAreaStyles.FocusAreaBlock}>
            {focusImage && (
                <Icon
                    alt={focusImage.alt}
                    image={focusImage.gatsbyImageData}
                    size="xlarge"
                />
            )}
            <Text>{focusText}</Text>
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
                    {focusAreaItems.map((focusArea: FocusAreaBlock) => (
                        <li key={focusArea.id}>
                            <FocusAreaBlock {...focusArea} />
                        </li>
                    ))}
                </FlexList>
            </Container>
        </Section>
    )
}

export const query = graphql`
    fragment HomepageOurFocusAreaContent on HomepageOurFocusArea {
        id
        blocktype
        sectionDescription
        sectionTitle
        focusAreaItems {
          focusImage {
            alt
            id
            gatsbyImageData
          }
          id
          focusText
        }
        originalId
    }
`