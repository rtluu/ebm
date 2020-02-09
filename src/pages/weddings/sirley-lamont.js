import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import EBMIcon from "../../images/ebm-icon.inline.svg";
import SL1 from "../../components/Couples/SirleyLamont/SL1";
import SL2 from "../../components/Couples/SirleyLamont/SL2";
import SL3 from "../../components/Couples/SirleyLamont/SL3";
import SL4 from "../../components/Couples/SirleyLamont/SL4";
import SL5 from "../../components/Couples/SirleyLamont/SL5";
import SL6 from "../../components/Couples/SirleyLamont/SL6";
import SL7 from "../../components/Couples/SirleyLamont/SL7";
import SL8 from "../../components/Couples/SirleyLamont/SL8";
import SL9 from "../../components/Couples/SirleyLamont/SL9";
import SL10 from "../../components/Couples/SirleyLamont/SL10";
import SL11 from "../../components/Couples/SirleyLamont/SL11";
import SL12 from "../../components/Couples/SirleyLamont/SL12";


import "../../components/Hero/hero.scss";
import "./couple-page.scss";

const SirleyLamont = () => (
    <Layout>
        <SEO title="S+L | Events by Mosaic" />
        <div className="hero-block">
            <div className="hero-head">
                <div className="hero-icon">
                    <EBMIcon />
                </div>
                <h3 className="couples-headline">Sirley & Lamont</h3>
            </div>
        </div>

        <div className="couples-grid">
            <div className="column one">
                <SL1 />
                <SL2 />
                <SL3 />
                <SL4 />
            </div>
            <div className="column two">
                <SL5 />
                <SL6 />
                <SL7 />
                <SL8 />
            </div>
            <div className="column three">
                <SL9 />
                <SL10 />
                <SL11 />
                <SL12 />
            </div>
        </div>
    </Layout>
)

export default SirleyLamont
