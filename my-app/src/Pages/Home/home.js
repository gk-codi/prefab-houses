import React from 'react';
import Home1 from '../../Components/Home/firstPart/Home1';
import Footer from '../../Components/Common/Footer/footer';
import Navbar from '../../Components/Common/Nav/nav';
import TeamMember from '../../Components/Home/secondpart/TeamMember';
import Sponsers from '../../Components/Home/secondpart/sponsers';
import Subscribe from '../../Components/Common/subscribe/subscribe';



function AppHome() {

  return(
    <div>
      <br />
      <div className="container-fluid">
          <body>
              <Navbar></Navbar>
              
              <main style={{height:"500px;"}}>
                 <Home1></Home1>
                 <br/><br/>
                 <TeamMember></TeamMember>
                 <br/><br/>
                 <Sponsers></Sponsers>
                 <br/><br/><br/>
              </main>
              
                 <Footer></Footer>
                 <Subscribe></Subscribe>
              
          </body>
               

</div>
    </div>
  );
}

export default AppHome;