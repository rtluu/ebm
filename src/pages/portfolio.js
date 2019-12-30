import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroPortfolio from "../components/Hero/heroPortfolio"
import "../components/Hero/hero.scss"

const Portfolio = () => (
    <Layout>
        <SEO title="Events by Mosaic Portfolio" />
        <div className="hero-block">
            <h1 className="hero-headline">PORTFOLIO</h1>
            <div className="hero-tint" />
            <HeroPortfolio />
        </div>
        <h1>Portfolio</h1>
        <p>What we do</p>
        <Link to="/">Home</Link>
    </Layout>
)

export default Portfolio
