import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./nav.scss"

const Nav = ({ siteTitle }) => (
  <nav>
    <div className="page-options">
      <Link to="/">HOME</Link>
      <Link to="/about/">ABOUT</Link>
      <Link to="/services/">SERVICES</Link>
      <Link to="/portfolio/">PORTFOLIO</Link>
      <Link to="/inquire/">INQUIRE</Link>
    </div>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
