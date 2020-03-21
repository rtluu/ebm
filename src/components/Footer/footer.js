import React from "react";
import FBIcon from "./facebook-icon.inline.svg";
import InstaIcon from "./instagram-icon.inline.svg";
import PinterestIcon from "./pinterest-icon.inline.svg";
import FooterLogo from "./footer-logo.inline.svg";
import "./footer.scss";

const Footer = () => (
    <footer className="footer">

        <div className="footer-main">
            <div className="ebm-logo-box">
                <FooterLogo />
            </div>

            <div className="who-box">
                <p className="who-text">Event planning & production in DC, Maryland, Virgina, and wherever celebration takes us.</p>
            </div>

            <div className="contact-box">
                <div className="contact">
                    <a className="contact-link" href="tel:1-240-760-8649">
                        <h5 className="contact-text phone" />
                    </a>
                </div>
                <div className="contact">
                    <a className="contact-link" href="mailto:hello@eventsbymosaic.com">
                        <h5 className="contact-text email" />
                    </a>
                </div>
                <div className="contact social">
                    <a className="social-link instagram" href="https://instagram.com/eventsbymosaic"><InstaIcon /></a>
                    <a className="social-link facebook" href="https://facebook.com/eventsbymosaic"><FBIcon /></a>
                    <a className="social-link pinterest" href="https://pinterest.com/eventsbymosaic"><PinterestIcon /></a>
                </div>
            </div>
        </div>

        <div className="footer-sub">
            <div className="copyright-box">
                <p className="copyright">©{new Date().getFullYear()} EVENTS BY MOSAIC</p>
                <span className="pipe" />
                <p className="copyright">ALL RIGHTS RESERVED</p>
            </div>
        </div>

    </footer>
)


export default Footer
