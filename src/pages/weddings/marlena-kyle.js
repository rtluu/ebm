import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import EBMIcon from "../../images/ebm-icon.inline.svg";
import MK1 from "../../components/Couples/MarlenaKyle/MK1";
import MK2 from "../../components/Couples/MarlenaKyle/MK2";
import MK3 from "../../components/Couples/MarlenaKyle/MK3";
import MK4 from "../../components/Couples/MarlenaKyle/MK4";
import MK5 from "../../components/Couples/MarlenaKyle/MK5";
import MK6 from "../../components/Couples/MarlenaKyle/MK6";
import MK7 from "../../components/Couples/MarlenaKyle/MK7";
import MK8 from "../../components/Couples/MarlenaKyle/MK8";
import MK9 from "../../components/Couples/MarlenaKyle/MK9";
import MK10 from "../../components/Couples/MarlenaKyle/MK10";
import MK11 from "../../components/Couples/MarlenaKyle/MK11";
import MK12 from "../../components/Couples/MarlenaKyle/MK12";


import "../../components/Hero/hero.scss";
import "./couple-page.scss";

const MarlenaKyle = () => (
    <Layout>
        <SEO title="M+K | Events by Mosaic" />
        <div className="hero-block">
            <div className="hero-head">
                <div className="hero-icon">
                    <EBMIcon />
                </div>
                <h3 className="couples-headline">Marlena & Kyle</h3>
            </div>
        </div>
        <div className="content-container">
            <div className="couples-grid">
                <div className="column one">
                    <div className="image-holder">
                        <div className="image-inner">
                            <MK1 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <MK2 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <MK3 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <MK4 />
                        </div>
                    </div>
                </div>
                <div className="column two">
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <MK5 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <MK6 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <MK7 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <MK8 />
                        </div>
                    </div>
                </div>
                <div className="column three">
                    <div className="image-holder">
                        <div className="image-inner">
                            <MK9 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <MK10 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <MK11 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <MK12 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default MarlenaKyle
