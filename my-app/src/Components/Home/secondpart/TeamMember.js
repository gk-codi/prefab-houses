import React from "react";
import './TeamMember.css';



const TeamMember= props => {
  return (
    <body className="container">
        <div className="jumbotron" >
          <div style={{textAlign:"center"}}>
          <h2 style={{color:"#cb4154"}}>Team Members</h2>
          </div><br/>
          <div className="row">
          <div className="col-md-3" style={{textAlign:"center"}}>
            <img className="imageSize" src="Erwan Duval Manager.jpg" alt="member1"/>
            <div><b>Erwan Duval</b></div>
            <div>Manager</div>
          </div>
        

          <div className="col-md-3" style={{textAlign:"center"}}>
            <img className="imageSize" src="Gerd Rasmussen Designer.jpg" alt="member2"/>
            <div><b>Gerd Rasmussen</b></div>
            <div>Designer</div>
          </div>

          <div className="col-md-3" style={{textAlign:"center"}}>
            <img className="imageSize" src="Minahil Khan Engineer.jpg" alt="member3"/>
            <div><b>Minahil Khan</b></div>
            <div>Engineer</div>
          </div>
        

          <div className="col-md-3" style={{textAlign:"center"}}>
            <img className="imageSize" src="Viorel Orășan Engineer.jpg" alt="member4"/>
            <div><b>Viorel </b></div>
            <div>Engineer</div>
          </div>
        </div>
        
          </div>
          
    
    
    
    </body>

  );
};

export default TeamMember;