import React from "react";
import {withRouter, NavLink} from "react-router-dom";

function Header() {
  return <div className="header">Header
    <div className="flex">
      <img src="/logo.png" alt="Hooks News Logo" className="logo"/>
        <NavLink className="header-title" to="/">Hooks News</NavLink>
        <NavLink className="header-title" to="/">Hooks News</NavLink>
    </div>
  </div>
}

export default Header;
