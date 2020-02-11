import React from "react";
import './info.css';

const ContactInfo= props => {
  return (
    <div className="container">
    <div className="row jumbotron text-center" style={{marginTop: '20px'}}>            
                  <div className="container-fluid bg-grey">
                    <h1 className="text-center">Contact us</h1>
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <br/><br/><br/>
                    <div className="row">
                      <div className="col-sm-5">
                        <h4>Company Details</h4> <br/>
                        <address>
                          <strong>Address</strong><br/>
                          Gemmayze, Beirut<br/>
                          Sehit El Nour, Tripoli<br/>
                        </address>
                        <address>
                          <strong>Phone</strong><br/>
                          <abbr title="Phone">P:</abbr> (+961) 456-7890
                        </address>
                        <address>
                          <strong>Available</strong><br/>
                          from 8:00am till 5pm<br/>
                        </address>
                        <address>
                          <strong>Email</strong><br/>
                          <a href="mailto:#">omar@codi.tech</a>
                        </address>
                        
                      </div>
                      <div className="col-sm-7">
                        <div className="row">
                          <div className="col-sm-6 form-group"  style={{textAlign: 'left'}}>
                            <label for="fname">Your Name: <label style={{color: 'red'}}> *</label></label> <br/>
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                          </div>
                          <div className="col-sm-6 form-group" style={{textAlign: 'left'}}>
                            <label for="fname">Your Email <label style={{color: 'red'}}> *</label></label> <br/>
                            <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                          </div>
                        </div>
                        <div style={{textAlign: 'left'}}>
                        <label for="fname">Your Message: <label style={{color: 'red'}}> *</label></label> <br/>
                        <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 form-group">
                           <input type="submit" value="Submit" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
            </div>
        </div>
  );
};

export default ContactInfo;