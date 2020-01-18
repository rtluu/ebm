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
        <div className="hero-tint" />
        <HeroHome />
        <h1 className="hero-headline">Event Planning + Design</h1>
      </div>
    </div>
    <div className="primary-block">
      <h4 className="primary-intro">Events by Mosaic is a full service event planning studio based in Washington, DC. It is your big moment, we’re prepared to bring your vision to reality.</h4>
      <div className="divider" />
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
    <ConnectCTA />
    <Link to="/about/">About</Link>
    <Link to="/services/">Services</Link>
  </Layout>
)

export default IndexPage
