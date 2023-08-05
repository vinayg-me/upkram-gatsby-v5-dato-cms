import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  Container,
  Flex,
  Box,
  Space,
  Heading,
  Text,
  Avatar,
  HomepageImage,
  IconLink,
  VisuallyHidden,
} from "../components/ui"
import { avatar as avatarStyle, link } from "../components/ui.css"
import * as styles from "./blog-post.css"
import SEOHead from "../components/head"
import { theme } from "../theme.css"
import StyledTitle from "../utils/StyledTitle"
import { ArrowLeft } from "react-feather"

export interface BlogAuthor {
  id: string
  name: string
  avatar: HomepageImage
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  content: string
  image: HomepageImage
  author: BlogAuthor
  next?: BlogPost
  previous?: BlogPost
}

export interface BlogPostProps {
  data: {
    datoCmsBlogpost: BlogPost
  }
}

export default function BlogPost(props: BlogPostProps) {
  const blogDetails = props.data.datoCmsBlogpost;
  return (
    <Layout>
      <Container>
        <Box paddingY={5}>
          {blogDetails.author && (
            <Box>
              <Flex>
                <IconLink to={'../'} className={styles.BackContainer}>
                  <ArrowLeft />
                  <Text variant="bold" className={styles.BackText} >Back to Blogs</Text>
                </IconLink>
              </Flex>
              <Flex>
                {blogDetails.author.avatar &&
                  (!!blogDetails.author.avatar.gatsbyImageData ? (
                    <Avatar
                      {...blogDetails.author.avatar}
                      image={blogDetails.author.avatar.gatsbyImageData}
                    />
                  ) : (
                    <img
                      src={blogDetails.author.avatar.url}
                      alt={blogDetails.author.name}
                      className={avatarStyle}
                    />
                  ))}
                <div>
                  <Text variant="bold">{blogDetails.author.name}</Text>
                  <Text variant="body">{blogDetails.date}</Text>
                </div>
              </Flex>
            </Box>
          )}
          <Space size={1} />
          <StyledTitle text={blogDetails.title} n={0} style={{
            fontSize: theme.customFontSizes[2]
          }} />
          <Space size={4} />
          <Space size={4} />
          <Space size={4} />
          {blogDetails.image && (
            <GatsbyImage
              alt={blogDetails.image.alt}
              image={blogDetails.image.gatsbyImageData}
            />
          )}
          <Space size={5} />
          <div
            className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: blogDetails.content,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery($id:String) {
    datoCmsBlogpost(id: {eq: $id}) {
      content
      category
      id
      title
      slug
      date
      excerpt
      author {
        name
        avatar {
          alt
          gatsbyImageData
          url
          title
        }
      }
      image {
        alt
        gatsbyImageData
        title
        url
      }
    }
  }
`
export const Head = (props: BlogPostProps) => {
  return <SEOHead {...props.data.datoCmsBlogpost} description={props.data.datoCmsBlogpost.excerpt} />
}
