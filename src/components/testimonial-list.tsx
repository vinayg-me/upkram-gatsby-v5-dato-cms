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
import { theme } from "../theme.css"
import * as styles from "./testimonials-list.css"
import { FabArrow } from "./fab-arrow"
import { useRef } from "react"
import { useSwipe } from '../utils/swipe'


interface TestimonialProps {
  id: string
  avatar: HomepageImage
  quote: string
  source: string
  jobTitle: string
}

function Testimonial(props: TestimonialProps) {
  return (
    <Flex variant="start" className={styles.TestimonialCard}>
      {props.avatar && (
        <Avatar alt={props.avatar.alt} image={props.avatar.gatsbyImageData} />
      )}
      <div className={styles.TestimonialContent}>
        <figcaption>
          <Text bold variant="caps" className={styles.TestimonialContentName}>
            {props.source}
          </Text>
          <Text bold variant="caps" className={styles.TestimonialJobTitle}>
            {props.jobTitle}
          </Text>
          <Text as="p" variant="lead" className={styles.TestimonialQuote}>
            {props.quote}
          </Text>
        </figcaption>
      </div>
    </Flex>
  )
}

export interface TestimonialListProps {
  kicker?: string
  heading: string
  content: TestimonialProps[]
}

export default function TestimonialList(props: TestimonialListProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const testimonials = props.content
  console.log('Testimonials list', testimonials.length, activeIndex);

  const curTestimonial = testimonials[activeIndex]
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? prevIndex : prevIndex + 1));
  };
  const testimonialRowRef = useRef(null);
  useSwipe(testimonialRowRef, handleNext, handlePrev);
  return (
    <Section>
      <Container>
        <StyledTitle text={props.heading} n={1} style={{
          fontSize: theme.customFontSizes[2]
        }} />
        <div className={styles.TestimonialRow} ref={testimonialRowRef}>
          <div onClick={handlePrev} className={styles.CarouselIndicators}><FabArrow variant={activeIndex === 0 ? 'disabled' : 'default'} direction="left" /></div>
          <Testimonial {...curTestimonial} />
          <div onClick={handleNext} className={styles.CarouselIndicators}><FabArrow variant={activeIndex === testimonials.length - 1 ? 'disabled' : 'default'} /></div>
        </div>
        <div className={styles.CarouselIndicatorsMobile}>
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={index === activeIndex ? styles.IndicatorMobileActive : styles.IndicatorMobile}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
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
