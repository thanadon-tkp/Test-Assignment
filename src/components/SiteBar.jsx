import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

//css
import "../styles/SiteBar.css";

function SiteBar() {
  return (
    <div className="site-bar">
      <ul>
        <Link to="/">
          <li>
            <img src={logo} alt="" />
          </li>
        </Link>
        <Link to="/">
          <li>
            <div className="item">
              <div>
                <FontAwesomeIcon icon={faAlignJustify} />
              </div>
              <p>Place</p>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SiteBar;
