import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
  HomepageLink,
  EmbeddedText,
  Button,
} from "./ui"
import BrandLogo from "./brand-logo"
import { theme } from "../theme.css"
import * as styles from "./footer.css"

const socialMedia = {
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter color={theme.colors.white} />,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook color={theme.colors.white} />,
  },
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram color={theme.colors.white} />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube color={theme.colors.white} />,
  }
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

interface FooterData {
  layout: {
    footer: {
      id: string
      links: HomepageLink[]
      meta: { id: string; href: string; text: string }[]
      copyright: string
      socialLinks: { id: string; service: string; username: string }[]
      emailAddress: string
      address: string
      footerCtaText: string
      footerCtaButton: HomepageLink[]
    }
  }
}

export default function Footer() {
  const data: FooterData = useStaticQuery(graphql`
    query {
      layout {
        footer {
          id
          links {
            id
            href
            text
          }
          meta {
            id
            href
            text
          }
          copyright
          socialLinks {
            id
            service
            username
          }
          emailAddress
          address
          footerCtaText
          footerCtaButton {
            href
            text
          }
        }
      }
    }
  `)

  const { links, meta, socialLinks, copyright, emailAddress, address, footerCtaText, footerCtaButton } = data.layout.footer

  return (
    <Box as="footer" paddingY={4} background="dark">
      <Container style={{
        height: "100%",
      }}>
        <Flex variant="column" style={{
          height: "100%",
        }} responsive>
          <NavLink to="/" style={{
            height: "100%",
            width: "33%",
          }}>
            <div style={{
              display: "flex",
              backgroundColor: theme.colors.white,
              width: "100%",
              height: "100%",
              padding: "8px",
              flexDirection: "column",
            }}>
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
              <EmbeddedText className={styles.EmbeddedTextStyle} dangerouslySetInnerHTML={{ __html: footerCtaText }}></EmbeddedText>
              <div>{footerCtaButton.length > 0 && <Button variant="red" to={footerCtaButton[0].href}>{footerCtaButton[0].text}</Button>}</div>
            </div>
          </NavLink>
          <Space />
          <FlexList>
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>
        <Space size={5} />
        {/* <Flex variant="start" responsive>
          <FlexList variant="start" responsive>
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
          <Text variant="small">{copyright}</Text>
          <Text variant="small">{address}</Text>
          <Text variant="small">{emailAddress}</Text>
        </Flex> */}
      </Container>
      <Space size={3} />
    </Box>
  )
}
