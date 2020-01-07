import { Link } from "gatsby"
import React from "react"
import "./connectCTA.scss"
import PhoneIcon from "./phone-icon.inline.svg";
import EmailIcon from "./email-icon.inline.svg";
import ConnectPen from "./connectPen"
import ConnectBook from "./connectBook"
import ConnectKeyboard from "./connectKeyboard"
import ConnectMouse from "./connectMouse"

const ConnectCTA = () => (
    <div className="connectCTA-block">
        <div className="connect-info">
            <button className="connect-button">
                <h5>LET'S TALK</h5>
            </button>
            <div className="contact">
                <PhoneIcon />
                <h5 className="contact-text">240.760.8649</h5>
            </div>
            <div className="contact">
                <EmailIcon />
                <h5 className="contact-text email">HELLO@EVENTSBYMOSAIC.COM</h5>
            </div>
        </div>
        <div className="holder pen">
            <ConnectPen />
        </div>
        <div className="holder book">
            <ConnectBook />
        </div>
        <div className="holder keyboard">
            <ConnectKeyboard />
        </div>
        <div className="holder mouse">
            <ConnectMouse />
        </div>
    </div>
)


export default ConnectCTA
