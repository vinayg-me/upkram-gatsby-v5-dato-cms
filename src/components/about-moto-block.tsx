import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading, HomepageImage, EmbeddedText } from "./ui"
import * as introStyles from "./about-intro.css"
import * as styles from "./about-moto-block.css"
import { theme } from "../theme.css"
import StyledTitle from "../utils/StyledTitle"

export type AboutMotoBlock = {
    id: any;
    motoBlockText: string;
    mototitle: string;
    motoBlockImage: HomepageImage;
}

export interface AboutMotoBlockProps {
    title: string
    listOfMotoBlocks: AboutMotoBlock[]
}

export default function AboutTheMoto(props: AboutMotoBlockProps) {
    console.log("🚀 ~ file: about-moto-block.tsx:22 ~ AboutTheMoto ~ props:", props)

    const MotoBlock = ({ id, motoBlockText, motoBlockImage, mototitle }: AboutMotoBlock) => (
        <div key={id} className={styles.MotoBlock}>
            <div className={styles.MotoBlockImageContainer}>
                {motoBlockImage && (
                    <GatsbyImage
                        alt={motoBlockImage.alt}
                        image={getImage(motoBlockImage.gatsbyImageData)}
                        className="motoBlockImage"
                    />
                )}
            </div>
            <Text variant="lead" bold center>{mototitle}</Text>
            <Text variant="body" center>{motoBlockText}</Text>
        </div>
    )

    return (
        <Section style={{
            paddingTop: "16px",
            paddingBottom: "16px"
        }}>
            <Container>
                <StyledTitle text={props.title} n={1} style={{
                    fontSize: theme.customFontSizes[2]
                }} />
                {props.listOfMotoBlocks && (<div className={styles.RowContainer}>
                    {props.listOfMotoBlocks.map((motoBlock: AboutMotoBlock) => (
                        <MotoBlock key={motoBlock.id} {...motoBlock} />
                    ))}
                </div>)}
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
        mototitle
        motoBlockImage {
            id
            gatsbyImageData
            alt
        }
    }
  }
`
