import React from 'react';
import Footer from '../../Components/Common/Footer/footer';
import Navbar from '../../Components/Common/Nav/nav';
import Picture from '../../Components/Modals/picture slider/picture';
import Subscribe from '../../Components/Common/subscribe/subscribe';
import ModalsComp from '../../Components/Modals/modalComp/modalComp';
import './Modals.css'



function AppModals4() {

  const images = [
    {
      original: 'images/sip/sipimg1.jpg',
      thumbnail: 'images/sip/sipimg1.jpg',
      description:'Sip',
    },
  ];


  return(
    <div>
      <br />
      <div className="container-fluid">
          <body>
              <br/>
             <Picture images = {images}></Picture>
              
              <ModalsComp price='1059' img='images/sip/sipimg1.jpg' title='Sip'
               des='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></ModalsComp>

            
              
          </body>
               

</div>
    </div>
  );
}

export default AppModals4;