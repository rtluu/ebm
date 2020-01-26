import React from "react";
import "./team.scss";
import Kristina from "./kristina";

const Team = () => (
    <div className="team-block">
        <div className="teammate">
            <Kristina />
            <div className="teammate-info">
                <h2 className="teammate-name">Kristina Garcia</h2>
                <p className="teammate-description">Kristina is a full-service event planner with over 5 years of experience in the industry. Planning events is her lifelong passion and you’ll see her love for the details in every celebration she’s a part of.</p>
            </div>
        </div>
    </div>
)


export default Team