import { Link } from "gatsby"
import React from "react"
import CardAbout from "./cardAbout"
import CardPortfolio from "./cardPortfolio"
import CardServices from "./cardServices"
import "./primary.scss"

const Primary = () => (

    <div className="primary-block">
        <h4 className="primary-intro">Events by Mosaic is a full service event planning studio based in Washington, DC. It's your big moment and we're ready to bring your vision to reality.</h4>
        <div className="divider" />
        <div className="page-cards">
            <Link to="/about/">
                <div className="card-box">
                    <div className="light-blue-tint" />
                    <CardAbout />
                    <button>ABOUT</button>
                </div>
            </Link>
            <Link to="/portfolio/">
                <div className="card-box">
                    <div className="light-blue-tint" />
                    <CardPortfolio />
                    <button>PORTFOLIO</button>
                </div>
            </Link>
            <Link to="/services/">
                <div className="card-box">
                    <div className="light-blue-tint" />
                    <CardServices />
                    <button>SERVICES</button>
                </div>
            </Link>
        </div>
    </div>
)


export default Primary