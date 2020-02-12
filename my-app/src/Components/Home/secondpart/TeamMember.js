import React from "react";
import './TeamMember.css';



const TeamMember= props => {
  return (
    <body>
        
    
    
    <section className="web_disigner" style={{width:'85%',marginLeft:'100px', borderRadius:'1%'}}>
    <div className="web_disigner_contain" style={{position: 'relative'}}>
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

                  <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-6 padtop30">
                                <div className="parent_circle">
                                    <div className="parent_circle_contain">
                                        <p>Omar Junior</p>
                                        <p>Intern</p>
                                        <a href="#">Know More...</a>
                                    </div>
                                    <div className=" child_round_circle child_round_circle_img5 ">
                                
                                    </div>
                                </div>
                        
                            </div>        
                      
                  
                            <div className="col-md-6 padtop30">
                                <div className="parent_circle">
                                    <div className="parent_circle_contain">
                                        <p>Omar Osman</p>
                                        <p>Mentor</p>
                                        <a href="#">Know More...</a>
                                    </div>
                                    <div className=" child_round_circle child_round_circle_img6 ">
                                    
                                    </div>
                                </div>
                            </div>              
                      </div>
                  </div>


                </div>
    
              </div>  
            </div>
           
            <a className="carousel-control-prev"  href="#myCarousel" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>
    <a className="carousel-control-next" href="#myCarousel" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </a>
          </div>                          
        </div>
      </div>
    
    
    
    </section>
    
    </body>

  );
};

export default TeamMember;