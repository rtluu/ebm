import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderImage from "./headerImage"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav">
      <Link to="/" >
        <HeaderImage />
      </Link>

      <div className="page-options">
        <Link to="/about/">About</Link>
        <Link to="/services/">Services</Link>
        <Link to="/portfolio/">Portfolio</Link>
        <Link to="/connect/">Connect</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
