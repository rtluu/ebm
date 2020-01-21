import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroAbout from "../components/Hero/heroAbout"
import EBMIcon from "../images/ebm-icon.inline.svg";
import "../components/Hero/hero.scss"

const About = () => (
  <Layout>
    <SEO title="About | Events by Mosaic" />
    <div className="hero-block">
      <div className="hero-head">
        <div className="hero-icon">
          <EBMIcon />
        </div>
        <h2>About</h2>
      </div>
      <div className="hero-body">
        <h1 className="hero-headline">Who we are</h1>
        <div className="dark-blue-tint" />
        <HeroAbout />
      </div>
    </div>

    <Link to="/">Home</Link>
  </Layout>
)

export default About
