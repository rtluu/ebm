import { Link } from "gatsby"
import React from "react"
import "./connectCTA.scss"
import ConnectBg from "./connectBg";

const ConnectCTA = () => (
    <div className="connectCTA-block">
        <ConnectBg />
        <div className="dark-blue-tint" />
        <div className="connect-info">
            <h1>Let<span className="spacer" />'s plan your masterpiece!</h1>
            <button className="connect-button">
                <h5>GET STARTED</h5>
            </button>
        </div>
    </div>
)


export default ConnectCTA
