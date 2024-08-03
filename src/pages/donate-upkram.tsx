import * as React from "react"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { useEffect } from "react"
import { Section, Container } from "../components/ui"
import * as styles from "../components/about-hero.css"
import * as titleStyles from "../utils/StyleTitle.css"

export default function About() {
  useEffect(() => {
    // Script initialization code here
    const script = document.createElement("script")
    script.src = "https://danamojo.org/dm/js/widget.js"
    script.type = "text/javascript"
    document.getElementById("danamojo-script").appendChild(script)
  }, [])
  return (
    <Layout>
      <Section>
        <Container width="wide">
          <img
            src="https://www.datocms-assets.com/102566/1721446081-donate-now-hero.jpeg"
            alt="A kitten"
            className={styles.aboutHeroImage}
          />
          <p className={titleStyles.DonatePageHeadingStyle}>
            {" "}
            Your support will ensure nurturing the expression of children to
            build agency and bridge the educational inequity
          </p>
        </Container>
      </Section>
      <div
        id="danamojo-script"
        dangerouslySetInnerHTML={{
          __html: `
        <script>setTimeout(function(){ if(document.getElementById("ngoContentContainer").innerHTML.length < 40){ document.getElementById("ngoContentContainer").innerHTML="<center> <p style='color:#a94442;'>we are sorry that our systems are down. we will be up shortly. apologies for the inconvenience.</p></center>";}},20000); </script>
        <div id="dmScriptContainer" style="display:none;"><a href="#">Donate Now</a></div>
        <div id="ngoContentContainer" iNGOId="1143" oDisplay="product"><center><img alt="please wait..." src="https://danamojo.org/dm/css/images/loading.gif"/></center></div>
        `,
        }}
      ></div>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="Donate to Upkram" />
}
