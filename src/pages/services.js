import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroServices from "../components/Hero/heroServices"
import "../components/Hero/hero.scss"

const Services = () => (
    <Layout>
        <SEO title="Events by Mosaic Services" />
        <div className="hero-block">
            <h1 className="hero-headline">SERVICES</h1>
            <div className="hero-tint" />
            <HeroServices />
        </div>
        <h1>Services</h1>
        <p>What we do</p>
        <Link to="/">Home</Link>
    </Layout>
)

export default Services
