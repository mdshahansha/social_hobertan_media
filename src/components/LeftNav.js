import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink className={(navData) => navData.isActive ? "active-left-nav" : ""} end to="/">
            <span className="icon icon-home"></span>
          </NavLink>
          <br />
          <NavLink className={(navData) => navData.isActive ? "active-left-nav" : ""} to="/trending">
            <span className="icon icon-rocket"></span>
          </NavLink>
          <br />
          <NavLink className={(navData) => navData.isActive ? "active-left-nav" : ""} to="/profile">
            <span className="icon icon-user"></span>
          </NavLink>
        </div>
      </div>
    </div >
  )
}

export default LeftNav;
