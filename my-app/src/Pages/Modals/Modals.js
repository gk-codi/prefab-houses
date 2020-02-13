import React from 'react';
import Footer from '../../Components/Common/Footer/footer';
import Navbar from '../../Components/Common/Nav/nav';
import Picture from '../../Components/Modals/picture slider/picture';
import Price from '../../Components/Modals/price slider/price';
import Subscribe from '../../Components/Common/subscribe/subscribe';



function AppModals() {

  return(
    <div>
      <br />
      <div className="container-fluid">
          <body>
              <Navbar></Navbar>
              <Picture></Picture>
              <Price price='200'></Price> 
              <Price price='300'></Price> 
              <Footer></Footer>
              <Subscribe></Subscribe>
              
          </body>
               

</div>
    </div>
  );
}

export default AppModals;