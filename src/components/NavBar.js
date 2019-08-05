import React from "react";
import { Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <a href="#" data-target="menu-responsive" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/jugar">Jugar</Link>
          </li>
          <li>
            <Link to="/lsm">LSM</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      <ul className="sidenav" id="menu-responsive" >
          <li>
            <Link to="/jugar">Jugar</Link>
          </li>
          <li>
            <Link to="/lsm">LSM</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        
    </nav>


    // <Navbar brand={<a />} className="nav-wrapper" alignLinks="right">
    //   <NavItem>
    //     <Link to="/jugar">Jugar</Link>
    //   </NavItem>
    //   <NavItem>
    //     <Link to="/lsm">LSM</Link>
    //   </NavItem>
    //   <NavItem>
    //     <Link to="/">Home</Link>
    //   </NavItem>
    // </Navbar>
  );
};

export default Nav;
