import { Link } from "gatsby"
import React from "react"
import Insta1 from "./insta1"
import Insta2 from "./insta2"
import Insta3 from "./insta3"
import Insta4 from "./insta4"
import Insta5 from "./insta5"
import InstaIcon from "./instagram-icon.inline.svg";
import "./instagram.scss"

const Instagram = () => (
    <div className="instagram-block">
        <div className="instagram-intro head">
            <h2 className="instagram-headline">Follow our story on social</h2>
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
        <div className="instagram-intro foot">
            <a href="https://www.instagram.com/eventsbymosaic/" target="_blank">
                <div className="insta-link">
                    <div className="insta-icon">
                        <InstaIcon />
                    </div>
                    <h3 className="insta-profile">eventsbymosaic</h3>
                </div>
            </a>
        </div>
    </div>
)


export default Instagram
