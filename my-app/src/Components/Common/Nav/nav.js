import React from "react";
import "./nav.css";
import {Link} from "react-router-dom"
import {NavDropdown} from 'react-bootstrap'

const Navbar= props => {
  return (
  
    <nav className="navbar navbar-expand-sm navbar-dark"
    style={{backgroundColor: '#cb4154'}}>

    <div className="navbar-header">
      
      <Link className="navbar-brand"  to="/"> <img src="logo.png" alt="logo" style={{width: '50px'}}/>&nbsp;&nbsp;PreFab Houses</Link>
    </div>
    <ul className="nav navbar-nav nav-left">
      <li className="nav-item">
        <Link className="nav-link " to="/">Home</Link>
      </li>
      <li className="nav-item ">

      <NavDropdown title="Our Models" id="basic-nav-dropdown" className="nav-link" style={{top: '-8px' , left : '2px'}}>
        {
          props.products.map(item => {
          return <NavDropdown.Item href={`/Models${item.IDproduct}`}>{item.TypeName}</NavDropdown.Item>

          })
        }
       
      </NavDropdown>
       
      </li>
      <li className="nav-item ">
        <Link className="nav-link"  to="/Contact">Contact us</Link>
      </li>
    </ul>
       
    
</nav>

  );
};

export default Navbar;