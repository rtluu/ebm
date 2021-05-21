import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import EBMIcon from "../../images/ebm-icon.inline.svg";
import RA1 from "../../components/Couples/RoshniAllwyn/RA1";
import RA2 from "../../components/Couples/RoshniAllwyn/RA2";
import RA3 from "../../components/Couples/RoshniAllwyn/RA3";
import RA4 from "../../components/Couples/RoshniAllwyn/RA4";
import RA5 from "../../components/Couples/RoshniAllwyn/RA5";
import RA6 from "../../components/Couples/RoshniAllwyn/RA6";
import RA7 from "../../components/Couples/RoshniAllwyn/RA7";
import RA8 from "../../components/Couples/RoshniAllwyn/RA8";
import RA9 from "../../components/Couples/RoshniAllwyn/RA9";
import RA10 from "../../components/Couples/RoshniAllwyn/RA10";
import RA11 from "../../components/Couples/RoshniAllwyn/RA11";
import RA12 from "../../components/Couples/RoshniAllwyn/RA12";


import "../../components/Hero/hero.scss";
import "./couple-page.scss";

const RoshniAllwyn = () => (
    <Layout>
        <SEO title="R+A | Events by Mosaic" />
        <div className="hero-block">
            <div className="hero-head">
                {/* <div className="hero-icon">
                    <EBMIcon />
                </div> */}
                <h3 className="couples-headline">Roshni & Allwyn</h3>
            </div>
        </div>
        <div className="content-container">
            <div className="couples-grid">
                <div className="column one">
                    <div className="image-holder">
                        <div className="image-inner">
                            <RA1 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <RA2 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <RA3 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <RA4 />
                        </div>
                    </div>
                </div>
                <div className="column two">
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <RA5 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <RA6 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <RA7 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <RA8 />
                        </div>
                    </div>
                </div>
                <div className="column three">
                    <div className="image-holder">
                        <div className="image-inner">
                            <RA9 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <RA10 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner">
                            <RA11 />
                        </div>
                    </div>
                    <div className="image-holder">
                        <div className="image-inner horizontal">
                            <RA12 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default RoshniAllwyn
