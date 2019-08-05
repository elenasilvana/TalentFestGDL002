import React, {Component} from "react";
import { Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

//import Materialize
import M from "materialize-css";

class Nav extends Component {

componentDidMount(){
  M.AutoInit();
}

render(){
  return (
    <div>
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

    </nav>

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

    </div>

  
  );
}
};

export default Nav;
