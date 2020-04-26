import { Link } from "gatsby"
import React from "react"
import CardAbout from "./cardAbout"
import CardPortfolio from "./cardPortfolio"
import CardServices from "./cardServices"
import "./primary.scss"

const Primary = () => (

    <div className="primary-block">
        <div className="page-cards">
            <Link to="/about/">
                <div className="card-box">
                    <div className="hero-img-tint" />
                    <CardAbout />
                    <button><h5>ABOUT</h5></button>
                </div>
            </Link>
            <Link to="/portfolio/">
                <div className="card-box">
                    <div className="hero-img-tint" />
                    <CardPortfolio />
                    <button><h5>PORTFOLIO</h5></button>
                </div>
            </Link>
            <Link to="/services/">
                <div className="card-box">
                    <div className="hero-img-tint" />
                    <CardServices />
                    <button><h5>SERVICES</h5></button>
                </div>
            </Link>
        </div>
    </div>
)


export default Primary