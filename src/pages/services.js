import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
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
                <h2>Services</h2>
            </div>
            <div className="hero-body">
                <h1 className="hero-headline">What we do</h1>
                <div className="dark-blue-tint" />
                <HeroServices />
            </div>
        </div>
    </Layout>
)

export default Services
