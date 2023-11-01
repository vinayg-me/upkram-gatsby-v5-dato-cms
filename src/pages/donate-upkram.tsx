import * as React from "react"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { Script } from "gatsby"

interface DonateUpkramProps {}

export default function About(props: DonateUpkramProps) {
  return (
    <Layout>
      <div id="danamojo-script" dangerouslySetInnerHTML={{
        __html: `
        <script src="https://danamojo.org/dm/js/widget.js" type="text/javascript"></script>
        <script>setTimeout(function(){ if(document.getElementById("ngoContentContainer").innerHTML.length < 40){ document.getElementById("ngoContentContainer").innerHTML="<center> <p style='color:#a94442;'>we are sorry that our systems are down. we will be up shortly. apologies for the inconvenience.</p></center>";}},20000); </script>
        <div id="dmScriptContainer" style="display:none;"><a href="#">Donate Now</a></div>
        <div id="ngoContentContainer" iNGOId="1143" oDisplay="product"><center><img alt="please wait..." src="https://danamojo.org/dm/css/images/loading.gif"/></center></div>
        `
      }}></div>
        
    </Layout>
  )
}
export const Head = (props: DonateUpkramProps) => {
  console.log("🚀 ~ file: donate-upkram.tsx:19 ~ Head ~ props:", props)
  return <SEOHead title="Donate to Upkram" />
}
