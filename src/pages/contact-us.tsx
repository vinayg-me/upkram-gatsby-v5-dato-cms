import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import StyledTitle from "../utils/StyledTitle"
import { Container, Flex, Section, Space } from "../components/ui"
import { theme } from "../theme.css"
import ContactUsForm from "../components/contact-us-form"

export default function ContactUs() {
    return (
        <Layout>
            <Container width="normal">
                <Space size={4} />
                <StyledTitle text="Contact Us" n={1} style={{
                    fontSize: theme.customFontSizes[2]
                }} />
                <Space size={4} />
                <Flex variant="responsive">
                    <ContactUsForm />
                </Flex>

            </Container>
        </Layout>
    )
}