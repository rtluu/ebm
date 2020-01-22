import { Link } from "gatsby";
import React from "react";
import "./team.scss";
import Ryan from "./ryan";
import Kristina from "./kristina";

const Team = () => (
    <div className="team-block">
        <div className="teammate">
            <Kristina />
            <h3 className="teammate-name">Kristina Garcia</h3>
            <p className="teammate-description">Kristina is a full-service event planner with over 5 years of experience in the industry. Planning events is her lifelong passion and you’ll see her love for the details in every celebration she’s a part of.</p>
        </div>
        <div className="teammate">
            <Ryan />
            <h3 className="teammate-name">Ryan Luu</h3>
            <p className="teammate-description">Ryan leads software teams by day and brings events to life by night. He worked as an event photographer for over 5 years and will do anything to get a smile.</p>
        </div>
    </div>
)


export default Team