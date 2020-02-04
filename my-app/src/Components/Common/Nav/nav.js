import React from "react";
import "./nav.css";
const Navbar= props => {
  return (
  
    <nav className="navbar navbar-expand-sm navbar-dark"
    style={{backgroundColor: '#cb4154'}}>

    <div className="navbar-header">
      
      <a className="navbar-brand"  href="#"> <img src="logo.png" alt="logo" style={{width: '50px'}}/>&nbsp;&nbsp;PreFab Houses</a>
    </div>
    <ul className="nav navbar-nav nav-left">
      <li className="nav-item">
        <a className="nav-link active" href="#">Home</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link"  href="#">Our Modals</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link"  href="#">Contact us</a>
      </li>
    </ul>
       
    
</nav>

  );
};

export default Navbar;