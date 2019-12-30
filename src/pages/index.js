import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHome from "../components/Hero/heroHome"
import "../components/Hero/hero.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Events by Mosaic" />
    <div className="hero-block">
      <h1 className="hero-headline">LET'S PLAN YOUR MASTERPIECE</h1>
      <div className="hero-tint" />
      <HeroHome />
    </div>

    <Link to="/about/">About</Link>
    <Link to="/services/">Services</Link>
  </Layout>
)

export default IndexPage
