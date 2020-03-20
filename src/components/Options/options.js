import React, { useState } from "react";
import "./options.scss";
import FullService from "./FullService"
import Partial from "./Partial"
import MonthOf from "./MonthOf"

function Options() {

    const [fullexpand, setFullExpand] = useState(false);
    const [partialexpand, setPartialExpand] = useState(false);
    const [monthexpand, setMonthExpand] = useState(false);

    function fullClick(e) {
        e.preventDefault();
        setFullExpand(!fullexpand);
    }
    function partialClick(e) {
        e.preventDefault();
        setPartialExpand(!partialexpand);
    }
    function monthClick(e) {
        e.preventDefault();
        setMonthExpand(!monthexpand);
    }

    return (
        <div className="options-block">
            <div className="option">
                <div className={"option-inner " + fullexpand + ""}>
                    <div className="option-image-holder" >
                        <div className="option-image-background full-service" />
                        <FullService />
                    </div>
                    <div className="option-text">
                        <h2>Full Service Planning</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick={fullClick}>LEARN MORE</button>
                    </div>
                </div>
            </div>
            <div className="option">
                <div className={"option-inner partial " + partialexpand + ""}>
                    <div className="option-image-holder">
                        <div className="option-image-background partial-planning" />
                        <Partial />
                    </div>
                    <div className="option-text">
                        <h2>Partial Planning</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick={partialClick}>LEARN MORE</button>
                    </div>
                </div>
            </div>
            <div className="option">
                <div className={"option-inner " + monthexpand + ""}>
                    <div className="option-image-holder">
                        <div className="option-image-background month-of" />
                        <MonthOf />
                    </div>
                    <div className="option-text">
                        <h2>Month of Coordination</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick={monthClick}>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Options



