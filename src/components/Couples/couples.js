import { Link } from "gatsby"
import React from "react";
import CoupleAC from "./coupleAC";
import CoupleMK from "./coupleMK";
import CoupleOT from "./coupleOT";
import CoupleSL from "./coupleSL";
import CoupleRP from "./coupleRP";
import "./couples.scss";

const Couples = () => (
    <div className="couples-block">
        <div className="couple">
            <div className="couple-image">
                <CoupleOT />
                <div className="light-blue-tint" />
            </div>
            <Link to="/weddings/olivia-tj"><h2>O+T</h2></Link>
        </div>
        <div className="couple">
            <div className="couple-image">
                <CoupleSL />
                <div className="light-blue-tint" />
            </div>
            <Link to="/weddings/sirley-lamont"><h2>S+L</h2></Link>
        </div>
        <div className="couple">
            <div className="couple-image">
                <CoupleAC />
                <div className="light-blue-tint" />
            </div>
            <h2>A+C</h2>
        </div>
        <div className="couple">
            <div className="couple-image">
                <CoupleMK />
                <div className="light-blue-tint" />
            </div>
            <h2>M+K</h2>
        </div>
        <div className="couple">
            <div className="couple-image">
                <CoupleRP />
                <div className="light-blue-tint" />
            </div>
            <h2>R+P</h2>
        </div>
    </div>
)


export default Couples
