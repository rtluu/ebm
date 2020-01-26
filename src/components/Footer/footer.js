import React from "react";
import PhoneIcon from "./phone-icon.inline.svg";
import EmailIcon from "./email-icon.inline.svg";
import EBMIcon from "./ebm-icon.inline.svg";
import "./footer.scss";

const Footer = () => (
    <footer className="footer">
        <div className="copyright-box">
            <p className="copyright">©Events by Mosaic {new Date().getFullYear()}</p>
        </div>
        <div className="ebm-logo-box">
            <EBMIcon />
        </div>
        <div className="contact-box">
            <div className="contact">
                <h5 className="contact-text">240.760.8649</h5>
                <PhoneIcon />
            </div>
            <div className="contact">
                <h5 className="contact-text email">hello@eventsbymosaic.com</h5>
                <EmailIcon />
            </div>
        </div>
    </footer>
)


export default Footer
