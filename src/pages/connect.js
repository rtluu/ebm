import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroConnect from "../components/Hero/heroConnect"
import "../components/Hero/hero.scss"

const Connect = () => (
    <Layout>
        <SEO title="Events by Mosaic Connect" />
        <div className="hero-block">
            <h1 className="hero-headline">CONNECT</h1>
            <div className="dark-blue-tint" />
            <HeroConnect />
        </div>
        <h1>Connect</h1>
        <p>What we do</p>
        <Link to="/">Home</Link>
    </Layout>
)

export default Connect
