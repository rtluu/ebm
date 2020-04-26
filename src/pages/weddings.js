import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/Intro/intro";
import Couples from "../components/Couples/couples"
import HeroPortfolio from "../components/Hero/heroPortfolio";
import EBMIcon from "../images/ebm-icon.inline.svg";
import "../components/Hero/hero.scss";

const Weddings = () => (
    <Layout>
        <SEO title="Portfolio | Events by Mosaic" />
        <div className="hero-block">
            <div className="hero-head">
                <div className="hero-icon">
                    <EBMIcon />
                </div>
                <h3>WEDDINGS</h3>
            </div>
            <div className="hero-body">
                <h1 className="hero-headline">Our couples</h1>
                <div className="hero-img-tint" />
                <HeroPortfolio />
            </div>
        </div>
        <Intro text="We’re so fulfilled by this work because of the great people we get to work with. Thank you all for letting us be a part of your special moment." />
        <Couples />
    </Layout>
)

export default Weddings
