import React from "react"
import "./intro.scss"
import PropTypes from "prop-types"

function Intro({ text }) {

    return (
        <div className="intro-block">
            <h4 className="intro-text">{text}</h4>
            <div className="divider" />
        </div>
    )
}


Intro.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Intro




