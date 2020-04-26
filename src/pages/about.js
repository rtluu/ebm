import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/Intro/intro";
import HeroAbout from "../components/Hero/heroAbout";
import EBMIcon from "../images/ebm-icon.inline.svg";
import Team from "../components/Team/team";
import "../components/Hero/hero.scss";

const About = () => (
  <Layout>
    <SEO title="About | Events by Mosaic" />
    <div className="hero-block">
      <div className="hero-head">
        <div className="hero-icon">
          <EBMIcon />
        </div>
        <h3>ABOUT</h3>
      </div>
      <div className="hero-body">
        <h1 className="hero-headline">Who we are</h1>
        <div className="hero-img-tint" />
        <HeroAbout />
      </div>
    </div>
    <Intro text="Great events start with great collaboration. We are not only a team, but partners in bringing events to life throught the DMV and beyond. Together we have over a decade of experience in planning and orchestrating events that run the gamut." />
    <Team />
  </Layout>
)

export default About
