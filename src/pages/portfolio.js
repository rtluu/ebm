import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroPortfolio from "../components/Hero/heroPortfolio";
import EBMIcon from "../images/ebm-icon.inline.svg";
import "../components/Hero/hero.scss";

const Portfolio = () => (
    <Layout>
        <SEO title="Portfolio | Events by Mosaic" />
        <div className="hero-block">
            <div className="hero-head">
                <div className="hero-icon">
                    <EBMIcon />
                </div>
                <h3>PORTFOLIO</h3>
            </div>
            <div className="hero-body">
                <h1 className="hero-headline">Our couples</h1>
                <div className="dark-blue-tint" />
                <HeroPortfolio />
            </div>
        </div>
    </Layout>
)

export default Portfolio
