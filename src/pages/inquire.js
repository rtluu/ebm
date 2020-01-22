import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroInquire from "../components/Hero/heroInquire";
import EBMIcon from "../images/ebm-icon.inline.svg";
import "../components/Hero/hero.scss";

const Inquire = () => (
    <Layout>
        <SEO title="Inquire | Events by Mosaic" />
        <div className="hero-block">
            <div className="hero-head">
                <div className="hero-icon">
                    <EBMIcon />
                </div>
                <h2>Inquire</h2>
            </div>
            <div className="hero-body">
                <h1 className="hero-headline">Let<div className="spacer" />'s chat</h1>
                <div className="dark-blue-tint" />
                <HeroInquire />
            </div>
        </div>
    </Layout>
)

export default Inquire
