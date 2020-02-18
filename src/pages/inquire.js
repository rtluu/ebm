import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/Intro/intro";
import HeroInquire from "../components/Hero/heroInquire";
import Form from "../components/Form/form";
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
                <h3>INQUIRE</h3>
            </div>
            <div className="hero-body">
                <h1 className="hero-headline">Contact us</h1>
                <div className="dark-blue-tint" />
                <HeroInquire />
            </div>
        </div>
        <Intro text="We’re here to help and quick to respond! Give us a ping and we’ll hit the ground running to make sure you’re on your way to your big day." />
        <Form />
    </Layout>
)

export default Inquire
