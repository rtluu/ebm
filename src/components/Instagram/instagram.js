import { Link } from "gatsby"
import React from "react"
import Insta1 from "./insta1"
import Insta2 from "./insta2"
import Insta3 from "./insta3"
import Insta4 from "./insta4"
import Insta5 from "./insta5"
import InstaIcon from "./instaIcon"
import "./instagram.scss"

const Instagram = () => (
    <div className="instagram-block">
        <div className="instagram-intro">
            <h3>Follow Along</h3>
            <div className="divider" />
            <a href="https://www.instagram.com/eventsbymosaic/" target="_blank">
                <div className="insta-link">
                    <InstaIcon />
                    <h3>EVENTSBYMOSAIC</h3>
                </div>
            </a>
        </div>

        <div className="instagram-pics">
            <a className="insta-link" href="https://www.instagram.com/eventsbymosaic/" target="_blank">
                <div className="blue-tint" />
                <Insta1 />
            </a>
            <a className="insta-link" href="https://www.instagram.com/eventsbymosaic/" target="_blank">
                <div className="blue-tint" />
                <Insta2 />
            </a>
            <a className="insta-link" href="https://www.instagram.com/eventsbymosaic/" target="_blank">
                <div className="blue-tint" />
                <Insta3 />
            </a>
            <a className="insta-link" href="https://www.instagram.com/eventsbymosaic/" target="_blank">
                <div className="blue-tint" />
                <Insta4 />
            </a>
            <a className="insta-link" href="https://www.instagram.com/eventsbymosaic/" target="_blank">
                <div className="blue-tint" />
                <Insta5 />
            </a>
        </div>
    </div>
)


export default Instagram
