import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeroImage from "./heroImage"

import "./hero.scss"

const Hero = () => (
    <div className="hero-block">
        <h1 className="hero-headline">LET'S PLAN YOUR MASTERPIECE</h1>
        <div className="hero-tint" />
        <HeroImage />
    </div>
)

export default Hero
