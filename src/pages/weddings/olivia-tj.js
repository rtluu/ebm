import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import EBMIcon from "../../images/ebm-icon.inline.svg";
import OT1 from "../../components/Couples/OliviaTJ/OT1";
import OT2 from "../../components/Couples/OliviaTJ/OT2";
import OT3 from "../../components/Couples/OliviaTJ/OT3";
import OT4 from "../../components/Couples/OliviaTJ/OT4";
import OT5 from "../../components/Couples/OliviaTJ/OT5";
import OT6 from "../../components/Couples/OliviaTJ/OT6";
import OT7 from "../../components/Couples/OliviaTJ/OT7";
import OT8 from "../../components/Couples/OliviaTJ/OT8";
import OT9 from "../../components/Couples/OliviaTJ/OT9";
import OT10 from "../../components/Couples/OliviaTJ/OT10";
import OT11 from "../../components/Couples/OliviaTJ/OT11";
import OT12 from "../../components/Couples/OliviaTJ/OT12";


import "../../components/Hero/hero.scss";
import "./couple-page.scss";

const OliviaTJ = () => (
    <Layout>
        <SEO title="S+L | Events by Mosaic" />
        <div className="hero-block">
            <div className="hero-head">
                {/* <div className="hero-icon">
                    <EBMIcon />
                </div> */}
                <h3 className="couples-headline">Olivia & TJ</h3>
            </div>
        </div>
        <div className="content-container">
            <div className="couples-grid">
                <div className="column one">
                    <div className="image-holder">
                        <div className="image-inner">
                            <OT1 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <OT2 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <OT3 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <OT4 />
                        </div>
                    </div>
                </div>
                <div className="column two">
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <OT5 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <OT6 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <OT7 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <OT8 />
                        </div>
                    </div>
                </div>
                <div className="column three">
                    <div className="image-holder">
                        <div className="image-inner">
                            <OT9 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <OT10 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <OT11 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <OT12 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default OliviaTJ
