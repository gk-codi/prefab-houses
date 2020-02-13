import React from 'react';
import Home1 from '../../Components/Home/firstPart/Home1';
import Footer from '../../Components/Common/Footer/footer';
import Navbar from '../../Components/Common/Nav/nav';
import ContactInfo from '../../Components/Contact us/Info/info';
import SimpleMap from '../../Components/Contact us/map/map';
import Subscribe from '../../Components/Common/subscribe/subscribe';



function AppContact() {

  return(
    <div>
      <br />
      <div className="container-fluid">
          <body>
              <Navbar></Navbar>
              
              <main >
                  <ContactInfo></ContactInfo>
                  <SimpleMap></SimpleMap><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  
              </main>
              
                 <Footer></Footer>
                 <Subscribe></Subscribe>
              
          </body>
               

</div>
    </div>
  );
}

export default AppContact;