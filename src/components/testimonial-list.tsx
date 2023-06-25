import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Heading,
  Kicker,
  Flex,
  Box,
  FlexList,
  Blockquote,
  Text,
  Avatar,
  HomepageImage,
} from "./ui"
import StyledTitle from "../utils/StyledTitle"

interface TestimonialProps {
  id: string
  avatar: HomepageImage
  quote: string
  source: string
  jobTitle: string
}

function Testimonial(props: TestimonialProps) {
  return (
    <Flex variant="start">
      {props.avatar && (
        <Avatar alt={props.avatar.alt} image={props.avatar.gatsbyImageData} />
      )}
      <Blockquote>
        <Text as="p" variant="lead">
          {props.quote}
        </Text>
        <figcaption>
          <Text bold variant="caps">
            {props.source}
          </Text>
          <Text bold variant="caps">
            {props.jobTitle}
          </Text>
        </figcaption>
      </Blockquote>
    </Flex>
  )
}

export interface TestimonialListProps {
  kicker?: string
  heading: string
  content: TestimonialProps[]
}

export default function TestimonialList(props: TestimonialListProps) {
  return (
    <Section>
      <Container>
        <StyledTitle text={props.heading} n={1} />
        <FlexList gutter={3} variant="start" responsive wrap>
          {props.content.map((testimonial, index) => (
            <Box as="li" key={testimonial.id + index} width="full" padding={3}>
              <Testimonial {...testimonial} />
            </Box>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageTestimonialListContent on HomepageTestimonialList {
    id
    heading
    content {
      id
      quote
      source
      jobTitle
      avatar {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
