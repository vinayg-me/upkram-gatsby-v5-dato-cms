import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import Carousel from "../components/carousel"

interface HomepageProps {
  data: {
    homepage: {
      id: string
      title: string
      description: string
      image: { id: string; url: string }
      blocks: sections.HomepageBlock[]
    }
  }
}

export default function Homepage(props: HomepageProps) {
  const { homepage } = props.data
  console.log("🚀 ~ Homepage ~ homepage:", homepage)
  const homePageBlocksCount = {};
  homepage?.blocks.map(({ blocktype }) => {
    if(homePageBlocksCount[blocktype]) {
      homePageBlocksCount[blocktype] = homePageBlocksCount[blocktype] + 1;
    } else {
      homePageBlocksCount[blocktype] = 1;
    }
  })
  let listOfHomePageHeroes : React.ReactNode[] = [];

  console.log("🚀 ~ Homepage ~ homePageBlocksCount:", homePageBlocksCount)

  return (
    <Layout>
      {homepage.blocks.map((block) => {
        if (!block) {
          return <></>
        }
        const { id, blocktype, ...componentProps } = block
        console.log("🚀 ~ {homepage.blocks.map ~ id:", id)
        if (blocktype === 'HomepageHero') {
          const Component = sections[blocktype] || Fallback
          if(listOfHomePageHeroes.length < homePageBlocksCount[blocktype]) {
            listOfHomePageHeroes.push(<Component key={id} {...(componentProps as any)} />)
          }
          if(listOfHomePageHeroes.length === homePageBlocksCount[blocktype]) {
            return <Carousel children={listOfHomePageHeroes} interval={20000} />
          }

        } else {
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...(componentProps as any)} />
        }
      })}
    </Layout>
  )
}
export const Head = (props: HomepageProps) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} />
}
export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
        ...HomepageFeatureListContent
        ...HomepageCtaContent
        ...HomepageLogoListContent
        ...HomepageTestimonialListContent
        ...HomepageBenefitListContent
        ...HomepageStatListContent
        ...HomepageProductListContent
        ...HomepageIntroContent
        ...HomepageOurFocusAreaContent
        ...HomepageOurWorkContent
        ...HomepageOurProgramContent
      }
    }
  }
`
