import React from "react";
import "./footer.css";
const Footer= props => {
  return (
    <footer className="page-footer font-small unique-color-dark">

    <div style={{backgroundColor: '#cb4154'}}>
      <div className="container">
  
        <div className="row py-4 d-flex align-items-center">
  
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <div className="followF">
              <div  className="fa fa-envelope s emailPart">&nbsp;&nbsp;Omar@codi.tech</div>
              <div className="fa fa-phone s phonePart">&nbsp;&nbsp;(+961)1234567</div>
            </div>
          </div>
  
          <div className="col-md-6 col-lg-7 text-center text-md-right">
            <div className="social">
              <a href="#" id="share-fb" className="sharer button"
                ><i className="fa fa-facebook" ></i></a>
              <a href="#" id="share-tw" className="sharer button"
                ><i className="fa fa-twitter"></i></a>
              <a href="#" id="share-li" className="sharer button"
                ><i className="fa fa-linkedin"></i></a>
              <a href="#" id="share-gp" className="sharer button"
                ><i className="fa fa-google-plus"></i></a>
              <a href="#" id="share-em" className="sharer button"
                ><i className="fa fa-envelope"></i></a>
            </div>
            
  
          </div>
  
        </div>
  
      </div>
    </div>
  
    <div className="footer-copyright text-center py-3">© 2020 Copyright:
      <b> PreFab Houses</b>
    </div>
  
  </footer>

  );
};

export default Footer;