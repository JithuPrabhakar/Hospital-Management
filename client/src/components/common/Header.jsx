import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-bar">
        <div className="logo-part">
          <h1>HMS</h1>
          <h4 className="sub-text">Health Solutions</h4>
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Doctors</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li>
              <Link to="">Login</Link>
            </li>
            <li>
              <Link to="">SignUp</Link>
            </li>
            {/* <li><Link to="/dashboard">Doctor Login</Link></li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
