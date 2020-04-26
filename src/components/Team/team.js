import React from "react";
import "./team.scss";
import Kristina from "./kristina";

const Team = () => (
    <div className="team-block">
        <div className="teammate">
            <Kristina />
            <div className="teammate-info">
                <h2 className="teammate-name">Kristina Garcia</h2>
                <p className="teammate-description">So you’re getting married? How exciting!! We’re so glad you’re here. Whether you’re newly engaged and just getting started, or well on your way to your big day - we’re here to help! EBM is a full-service wedding planning company serving Washington, DC and beyond!</p>
                <p className="teammate-description">I’m a Texas native who found a love for planning while organizing events for a non-profit in Dallas. Since moving to DC, I’ve pursued working in catering and with local event planners before stepping out to launch my own business, Events by Mosaic. I became a wedding planner because I love seeing people happy. It must be my Texas roots because I find myself going into southern hospitality mode to make sure everything is taken care of. I can’t think of anything more amazing than helping couples create a moment that they’ll remember for the rest of their lives.</p>
                <p className="teammate-description">Each love story is unique in it’s own beautiful way, and we work with you to identify the special tidbits in your relationship to make sure your big day is memorable and meaningful. Our main goal is for you to have an unforgettable, stress-free wedding day surrounded by the love and joy of your family and friends.</p>
                <p className="teammate-description">Cheers & I can’t wait to get started!</p>
            </div>
        </div>
    </div>
)


export default Team