import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroAbout from "../components/Hero/heroAbout"
import EBMIcon from "../images/ebm-icon.inline.svg";
import "../components/Hero/hero.scss"

const About = () => (
  <Layout>
    <SEO title="About Events by Mosaic" />
    <div className="hero-block">
      <div className="hero-icon">
        <EBMIcon />
      </div>
      <div className="hero-body">
        <h1 className="hero-headline">ABOUT</h1>
        <div className="hero-tint" />
        <HeroAbout />
      </div>
    </div>

    <h1>About Us</h1>
    <p>Who we are</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default About
