import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import logo from "../../Assets/logo.png";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            about
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            contact
          </NavLink>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
