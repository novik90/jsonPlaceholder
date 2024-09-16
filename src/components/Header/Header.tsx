import React from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%", padding: "0 64px" }}>
      <div className="logo" />
      <ul className="menu">
        <li>
          <NavLink
            to={"./"}
            className={({ isActive }) => isActive ? "active menu_link" : "menu_link"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"./user"}
            className={({ isActive }) => isActive ? "active menu_link" : "menu_link"}
          >
            Test
          </NavLink>
        </li>
      </ul>
    </Layout.Header>
  )
}

export default Header