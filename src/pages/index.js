import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHome from "../components/Hero/heroHome"
import Intro from "../components/Intro/intro"
import Primary from "../components/Primary/Primary"
import Testimonial from "../components/Testimonial/testimonial"
import Instagram from "../components/Instagram/instagram"
import ConnectCTA from "../components/ConnectCTA/connectCTA"
import EBMLogo from "../images/ebm-logo.inline.svg";
import "../components/Hero/hero.scss"
import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Events by Mosaic" />
    <div className="hero-block">
      <div className="hero-logo">
        <EBMLogo />
      </div>
      <div className="hero-body">
        <div className="dark-blue-tint" />
        <HeroHome />
        <h1 className="hero-headline">Event Planning + Design</h1>
      </div>
    </div>
    <Intro text="Events by Mosaic is a full service event planning studio based in Washington, DC. It's your big moment and we're ready to bring your vision to reality." />
    <Primary />
    <Testimonial />
    <Instagram />
    <ConnectCTA />
  </Layout>
)

export default IndexPage
