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
} from "../components/ui"
import { avatar as avatarStyle } from "../components/ui.css"
import * as styles from "./blog-post.css"
import SEOHead from "../components/head"

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
  console.log("🚀 ~ file: blog-post.tsx:40 ~ BlogPost ~ data:", props.data)
  const blogDetails = props.data.datoCmsBlogpost;
  console.log("🚀 ~ file: blog-post.tsx:48 ~ BlogPost ~ blogDetails:", blogDetails)
  return (
    <Layout>
      <Container>
        <Box paddingY={5}>
          <Heading as="h1" center>
            {blogDetails.title}
          </Heading>
          <Space size={4} />
          {blogDetails.author && (
            <Box center>
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
                <Text variant="bold">{blogDetails.author.name}</Text>
              </Flex>
            </Box>
          )}
          <Space size={4} />
          <Text center>{blogDetails.date}</Text>
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
