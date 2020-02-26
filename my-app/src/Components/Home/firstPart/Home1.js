import React from "react";
import "./Home1.css";
const Home1= props => {
  return (
    
    <body>
    <div className=" container">
        <div className="row">
            <div className="col-md-6">
                <h1 className="ml11">
                    <span className="text-wrapper">
                      <span className="line line1"></span>
                      <div style={{textAlign:"center"}} >
                        <img className="logoclass" src="logo.png" alt="logo" width="200px" />
                      </div>

                      <span className="letters">|PREFAB HOUSES|</span>
                    </span>
                </h1>
            </div>
            <div className="col-md-6 gif-home">
                <img className="gifclass" src="gif1.gif" width="100%" alt="building houses"/>
            </div>
        </div>

        <div className="jumbotron Home-about-us">
            <h3>About us</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
            <br/><br/>
            <div >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <br/>
        <h2 className="projectProcess">Project Process</h2>
        <br/>


        
        <div className=" Home-container Home-blue">
            <input className="Home-circle1" /><span className="C1">1</span>
            <input className="Home-circle2"/><span className="C2">2</span>
            <input className="Home-circle3"/><span className="C3">3</span>
            <input className="Home-circle4"/><span className="C4">4</span>
           
        </div>

        <br/><br/>
        <div className="row ">
            <ul className="timeline">
                <li>
                    <div className="timeline-panel">
                        <div>
                            <h4>Step 1</h4>
                            <p><small className="text-muted"> Enquiry</small></p>
                        </div>
                    
                    <p>On attending your first appointment, you will meet with our team to discuss your design requirements.</p> </div>
                </li>
                <li>
                    <div className="timeline-panel">
                        <div>
                            <h4 >Step 2</h4>
                            <p><small className="text-muted"> Construction</small></p>
                        </div>
                    
                    <p>We will begin the construction of your Modular Home to 95% completion. During this time your consultant will be in touch with you regularly with progress reports and photos.</p> </div>
                </li>
                <li>
                    <div className="timeline-panel">
                        <div>
                            <h4>Step 3</h4>
                            <p><small className="text-muted"> Site Preparation</small></p>
                        </div>
                    
                    <p>learing of the land, Provide access track, Prune trees, & Level pad (with road base)</p></div>
                </li>
                <li>
                    <div className="timeline-panel">
                        <div>
                            <h4 >Step 4</h4>
                            <p><small className="text-muted">Delivery</small></p>
                        </div>
                    
                    <p>Your house will be delivered on site by our highly experienced transport company. The final works can take up to 3 weeks, preparing the house for you to move in.</p> </div>
                </li>					
            </ul>
            
        </div>
    
        <br/><br/><br/>

        <div className="jumbotron service-home">
            <div><h2> You're in good hands</h2></div>
            <div><h4>Services we offer</h4></div>
            <br/><br/>
            <div className="row">
                <div className="col-md-3 S1">
                    <img className="rounded-circle"  width="100px" style={{backgroundColor: '#f6f6f6'}} src="affordable.svg" data-holder-rendered="true"/><br/> <br/>
                    <div className="nameService">Affordability</div>
                </div>
                <div className="col-md-3 S2" style={{float: 'left'}}>
                    <img className="rounded-circle" width="100px" src="effeciency.jpg" data-holder-rendered="true"/><br/><br/>
                    <div className="nameService">Efficiency</div>
                </div>
                <div className="col-md-3 S3">
                    <img className="rounded-circle" width="100px" src="delivery.jpg" data-holder-rendered="true"/><br/><br/>
                    <div className="nameService">Delivery</div>
                </div>
                <div className="col-md-3 S4">
                    <img className="rounded-circle" width="100px" src="im1.png" data-holder-rendered="true"/> <br/><br/>
                    <div className="nameService">Customizability</div>
                </div>
            </div>
            
        </div>
        


    </div>


</body>


  );
};

export default Home1;