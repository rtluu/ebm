import React from "react";
import { Link } from "gatsby";
import "./connectCTA.scss";
import ConnectBg from "./connectBg";

const ConnectCTA = () => (
    <div className="connectCTA-block">
        <ConnectBg />
        <div className="hero-img-tint" />
        <div className="connect-info">
            <h1>Let<span className="spacer" />'s plan your masterpiece!</h1>
            <Link to="/inquire/">
                <button className="connect-button">
                    <h5>GET STARTED</h5>
                </button>
            </Link>
        </div>
    </div>
)


export default ConnectCTA
