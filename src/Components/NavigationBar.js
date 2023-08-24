import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap"; // Assuming you're using Bootstrap
import "../Styles/NavigationBar.css";
import Logo from "../Images/logo.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="navbar-dark fixed-top" expand="sm">
      <div className="navbar-container">
        <NavbarToggler onClick={toggleNavbar} />
        <a className="navbar-brand mr-auto" href="#">
          <img
            src={Logo}
            alt="Logo"
            className="img-fluid"
            height="80"
            width="80"
          />
        </a>
        <Collapse navbar isOpen={isOpen}>
          <div className="navbar-nav mr-auto offset-md-4">
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#project">Project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#certifications">Certifications</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
