import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/Intro/intro";
import Options from "../components/Options/options"
import HeroServices from "../components/Hero/heroServices";
import EBMIcon from "../images/ebm-icon.inline.svg";
import "../components/Hero/hero.scss";

const Services = () => (
    <Layout>
        <SEO title="Services | Events by Mosaic" />
        <div className="hero-block">
            <div className="hero-head">
                <div className="hero-icon">
                    <EBMIcon />
                </div>
                <h3>SERVICES</h3>
            </div>
            <div className="hero-body">
                <h1 className="hero-headline">What we do</h1>
                <div className="hero-img-tint" />
                <HeroServices />
            </div>
        </div>
        <Intro text="We'll bring all of the pieces of your event together to create a living masterpiece. From save the dates to the day of, our team has got you covered." />
        <Options />
    </Layout>
)

export default Services
