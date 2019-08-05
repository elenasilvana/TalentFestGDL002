import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';


const Nav = () => {

    return(
      <Navbar brand={<a />} alignLinks="right">
    <NavItem>
     <Link to="/jugar">Jugar</Link>
    </NavItem>
    <NavItem>
     <Link to="/lsm">LSM</Link>
    </NavItem>
    <NavItem>
     <Link to="/">Home</Link>
    </NavItem>
  </Navbar>
  );
  
  }

  export default Nav;