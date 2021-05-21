import { Link } from "gatsby";
import React, { useState } from "react";
import "./nav.scss";

const Nav = () => {
  const [menuActive, setMenuState] = useState(false);

  return (
    <nav>
      <div className="page-options">
        <Link to="/">HOME</Link>
        {/* <Link to="/about/">ABOUT</Link>
        <Link to="/services/">SERVICES</Link> */}
        <Link to="/portfolio/">PORTFOLIO</Link>
        {/* <Link to="/inquire/">INQUIRE</Link> */}
      </div>

      <div className={`menu-holder ${menuActive ? "open" : ""}`}>
        <button className='hamburger' onClick={() => setMenuState(!menuActive)}>
          <div className="line-holder">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </button>
        {menuActive &&
          <div className="menu">
            <ul className="menu-options">
              <h3><Link to="/">HOME</Link></h3>
              {/* <h3><Link to="/about/">ABOUT</Link></h3>
              <h3><Link to="/services/">SERVICES</Link></h3> */}
              <h3><Link to="/portfolio/">PORTFOLIO</Link></h3>
              {/* <h3><Link to="/inquire/">INQUIRE</Link></h3> */}
            </ul>
          </div>
        }
      </div>
    </nav>
  )
}


export default Nav
