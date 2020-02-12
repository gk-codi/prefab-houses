import React from "react";
import "./nav.css";
import {Link} from "react-router-dom"

const Navbar= props => {
  return (
  
    <nav className="navbar navbar-expand-sm navbar-dark"
    style={{backgroundColor: '#cb4154'}}>

    <div className="navbar-header">
      
      <Link className="navbar-brand"  to="/"> <img src="logo.png" alt="logo" style={{width: '50px'}}/>&nbsp;&nbsp;PreFab Houses</Link>
    </div>
    <ul className="nav navbar-nav nav-left">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link"  to="/Models">Our Modals</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link"  to="/Contact">Contact us</Link>
      </li>
    </ul>
       
    
</nav>

  );
};

export default Navbar;