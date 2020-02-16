import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import EBMIcon from "../../images/ebm-icon.inline.svg";
import AC1 from "../../components/Couples/AbigailCaio/AC1";
import AC2 from "../../components/Couples/AbigailCaio/AC2";
import AC3 from "../../components/Couples/AbigailCaio/AC3";
import AC4 from "../../components/Couples/AbigailCaio/AC4";
import AC5 from "../../components/Couples/AbigailCaio/AC5";
import AC6 from "../../components/Couples/AbigailCaio/AC6";
import AC7 from "../../components/Couples/AbigailCaio/AC7";
import AC8 from "../../components/Couples/AbigailCaio/AC8";
import AC9 from "../../components/Couples/AbigailCaio/AC9";
import AC10 from "../../components/Couples/AbigailCaio/AC10";
import AC11 from "../../components/Couples/AbigailCaio/AC11";
import AC12 from "../../components/Couples/AbigailCaio/AC12";


import "../../components/Hero/hero.scss";
import "./couple-page.scss";

const AbigailCaio = () => (
    <Layout>
        <SEO title="A+C | Events by Mosaic" />
        <div className="hero-block">
            <div className="hero-head">
                <div className="hero-icon">
                    <EBMIcon />
                </div>
                <h3 className="couples-headline">Abigail & Caio</h3>
            </div>
        </div>
        <div className="content-container">
            <div className="couples-grid">
                <div className="column one">
                    <div className="image-holder">
                        <div className="image-inner">
                            <AC1 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <AC2 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <AC3 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <AC4 />
                        </div>
                    </div>
                </div>
                <div className="column two">
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <AC5 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <AC6 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <AC7 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <AC8 />
                        </div>
                    </div>
                </div>
                <div className="column three">
                    <div className="image-holder">
                        <div className="image-inner">
                            <AC9 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <AC10 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <AC11 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <AC12 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AbigailCaio
