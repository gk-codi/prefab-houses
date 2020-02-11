import React from 'react';
import Home1 from '../../Components/Home/firstPart/Home1';
import Footer from '../../Components/Common/Footer/footer';
import Navbar from '../../Components/Common/Nav/nav';
import TeamMember from '../../Components/Home/secondpart/TeamMember';
import Sponsers from '../../Components/Home/secondpart/sponsers';



function AppHome() {

  return(
    <div>
      <br />
      <div className="container-fluid">
          <body>
              <Navbar></Navbar>
              
              <main style={{height:"500px;"}}>
                 <Home1></Home1>
                 <TeamMember></TeamMember>
                 <br/>
                 <Sponsers></Sponsers>
                 <br/><br/>
              </main>
              
                 <Footer></Footer>
              
          </body>
               

</div>
    </div>
  );
}

export default AppHome;