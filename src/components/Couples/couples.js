import { Link } from "gatsby"
import React from "react";
import CoupleAC from "./AbigailCaio/coupleAC";
import CoupleMK from "./MarlenaKyle/coupleMK";
import CoupleOT from "./OliviaTJ/coupleOT";
import CoupleSL from "./SirleyLamont/coupleSL";
import CoupleRA from "./RoshniAllwyn/coupleRA";
import "./couples.scss";

const Couples = () => (
    <div className="couples-block">
        <div className="couple">
            <Link to="/weddings/olivia-tj">
                <div className="couple-image">
                    <CoupleOT />
                    <div className="light-blue-tint" />
                </div>
                <h2>O+T</h2>
            </Link>
        </div>
        <div className="couple">
            <Link to="/weddings/sirley-lamont">
                <div className="couple-image">
                    <CoupleSL />
                    <div className="light-blue-tint" />
                </div>
                <h2>S+L</h2>
            </Link>
        </div>
        <div className="couple">
            <Link to="/weddings/abigail-caio">
                <div className="couple-image">
                    <CoupleAC />
                    <div className="light-blue-tint" />
                </div>
                <h2>A+C</h2>
            </Link>
        </div>
        <div className="couple">
            <Link to="/weddings/marlena-kyle">
                <div className="couple-image">
                    <CoupleMK />
                    <div className="light-blue-tint" />
                </div>
                <h2>M+K</h2>
            </Link>
        </div>
        <div className="couple">
            <Link to="/weddings/roshni-allwyn">
                <div className="couple-image">
                    <CoupleRA />
                    <div className="light-blue-tint" />
                </div>
                <h2>R+A</h2>
            </Link>
        </div>
    </div>
)


export default Couples
