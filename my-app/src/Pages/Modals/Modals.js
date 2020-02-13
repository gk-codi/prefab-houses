import React from 'react';
import Footer from '../../Components/Common/Footer/footer';
import Navbar from '../../Components/Common/Nav/nav';
import Picture from '../../Components/Modals/picture slider/picture';
import Price from '../../Components/Modals/price slider/price';
import Subscribe from '../../Components/Common/subscribe/subscribe';
import ModalsComp from '../../Components/Modals/modalComp';



function AppModals() {
/*   constructor(props) 
    super(props);
    this.state = {
       img1:'images/kit houses/kitimg1.png',
      error:undefined
      
    };
   */

  return(
    <div>
      <br />
      <div className="container-fluid">
          <body>
              <Navbar></Navbar>
              <Picture></Picture>
             
              <ModalsComp price='1059' img='images/kit houses/kitimg1.png' des='ssssssssssss'></ModalsComp>
              <ModalsComp price='1560' img='images/kit houses/kitimg2.png' des='ssssssssssss'></ModalsComp>
              <ModalsComp price='2432' img='images/kit houses/kitimg3.png' des='ssssssssssss'></ModalsComp>
              <Footer></Footer>
              <Subscribe></Subscribe>
              
          </body>
               

</div>
    </div>
  );
}

export default AppModals;