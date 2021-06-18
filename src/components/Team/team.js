import React from "react";
import "./team.scss";
import Kristina from "./kristina";

const Team = () => (
    <div className="team-block">
        <div className="teammate">
            <h1 className="teammate-name-mobile">Kristina Luu</h1>
            <Kristina />
            <div className="teammate-info">
                <h2 className="teammate-name">Kristina Luu</h2>
                <p className="teammate-description">Hello, Howdy, Hola! No matter how you say hello, I’m excited to meet you. Thanks for visiting my website!</p>
                <p className="teammate-description">I’m a Texas native who found a love for planning while organizing events for a non-profit in Dallas. After I found my calling to be in hospitality, I moved up to Washington, DC to work in catering and ultimately transitioned into full-time event planning.</p>
                <p className="teammate-description">I became a planner because I love digging into the details and working with clients to create an experience to remember. It must be my Texas roots because I find myself going into southern hospitality mode to make sure everything and everyone is taken care of. :)</p>
                <p className="teammate-description">But enough about me. I want to hear about you! Cheers, salud! I cannot wait to connect with you.</p>
                <p className="teammate-description no-space">xoxo,</p>
                <p className="teammate-description">Kristina</p>
                <p className="teammate-description cta-link">Let’s chat! <a href="mailto:kristinamluu@gmail.com">kristinamluu@gmail.com</a></p>
            </div>
        </div>
    </div>
)


export default Team