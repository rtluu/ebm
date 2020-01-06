import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHome from "../components/Hero/heroHome"
import CardAbout from "../components/PageCards/cardAbout"
import CardPortfolio from "../components/PageCards/cardPortfolio"
import CardServices from "../components/PageCards/cardServices"
import Testimonial from "../components/Testimonial/testimonial"
import Instagram from "../components/Instagram/instagram"
import "../components/Hero/hero.scss"
import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Events by Mosaic" />
    <div className="hero-block">
      <h1 className="hero-headline">LET'S PLAN YOUR MASTERPIECE</h1>
      <div className="hero-tint" />
      <HeroHome />
    </div>
    <div className="primary-block">
      <h2 className="primary-header">Who we are</h2>
      <h4 className="primary-intro">Events by Mosaic is a full service event planning studio based in Washington, DC. It is your big moment, we’re prepared to bring your vision to reality.</h4>
      <div className="page-cards">
        <Link to="/about/">
          <div className="card-box">
            <div className="blue-tint" />
            <CardAbout />
            <button>ABOUT</button>
          </div>
        </Link>
        <Link to="/portfolio/">
          <div className="card-box">
            <div className="blue-tint" />
            <CardPortfolio />
            <button>PORTFOLIO</button>
          </div>
        </Link>
        <Link to="/services/">
          <div className="card-box">
            <div className="blue-tint" />
            <CardServices />
            <button>SERVICES</button>
          </div>
        </Link>
      </div>
    </div>
    <Testimonial />
    <Instagram />
    <Link to="/about/">About</Link>
    <Link to="/services/">Services</Link>
  </Layout>
)

export default IndexPage
