import React from "react";
import './TeamMember.css';



const TeamMember= props => {
  return (
    <body>
        
    
    
    <section className="web_disigner">
    <div className="web_disigner_contain">
      <h1  style={{textAlign: 'center' , color:'white' }}>Our Team</h1>
      <div className="container">
        
        <div className='row'>
    
          <div className='col-md-12'>
            <div id="myCarousel" className="carousel slide media-carousel" >
              <div className="carousel-inner">
    
                  <div className="carousel-item  active">
                        <div className="row">
                        <div className="col-md-6 padtop30">
                                <div className="parent_circle">
                                <div className="parent_circle_contain">
                                    <p>Malak Kanaan </p>
                                    <p>Designer PROFILE</p>
                                    <a href="#">Know More...</a>
                                </div>
                                <div className=" child_round_circle child_round_circle_img1">
                                
                                </div>
                                </div>
                            </div>    
        
                        <div className="col-md-6 padtop30">
                                <div className="parent_circle">
                                    <div className="parent_circle_contain">
                                        <p>Sandra Naim</p>
                                        <p>DESIGNER PROFILE</p>
                                        <a href="#">Know More...</a>
                                    </div>
                                    <div className="child_round_circle child_round_circle_img2  ">
                                        
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>



                    <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-6 padtop30">
                                <div className="parent_circle">
                                    <div className="parent_circle_contain">
                                        <p>Ahmad Ghadban</p>
                                        <p>DESIGNER PROFILE</p>
                                        <a href="#">Know More...</a>
                                    </div>
                                    <div className=" child_round_circle child_round_circle_img3 ">
                                
                                    </div>
                                </div>
                        
                            </div>        
                      
                  
                            <div className="col-md-6 padtop30">
                                <div className="parent_circle">
                                    <div className="parent_circle_contain">
                                        <p>Mahmoud Elmasry</p>
                                        <p>DESIGNER PROFILE</p>
                                        <a href="#">Know More...</a>
                                    </div>
                                    <div className=" child_round_circle child_round_circle_img4 ">
                                    
                                    </div>
                                </div>
                            </div>              
                      </div>
                  </div>
                </div>
    
              </div>  
            </div>
           
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>                          
        </div>
      </div>
    
    
    
    </section>
    
    </body>

  );
};

export default TeamMember;