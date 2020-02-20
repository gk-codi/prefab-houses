import React from 'react';
import Footer from '../../Components/Common/Footer/footer';
import Navbar from '../../Components/Common/Nav/nav';
import Picture from '../../Components/Modals/picture slider/picture';
import Subscribe from '../../Components/Common/subscribe/subscribe';
import ModalsComp from '../../Components/Modals/modalComp/modalComp';
import './Modals.css'



function AppModals2() {

  const images = [
    {
      original: 'images/Modular/modimg1.png',
      thumbnail: 'images/Modular/modimg1.png',
      description:'Ecocor',
    },
    {
      original: 'images/Modular/modimg2.png',
      thumbnail: 'images/Modular/modimg2.png',
      description:'FabCab',
    },
    {
      original: 'images/Modular/modimg3.png',
      thumbnail: 'images/Modular/modimg3.png',
      description:'Irontown Homes',
    },
    {
        original: 'images/Modular/modimg4.png',
        thumbnail: 'images/Modular/modimg4.png',
        description:'Wheelhaus',
      },
  ];


  return(
    <div>
      <br />
      <div className="container-fluid">
          <body>
              <br/>
             <Picture images = {images}></Picture>
              
              <ModalsComp price='1059' img='images/Modular/modimg1.png' title='Ecocor'
               des='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></ModalsComp>

              <ModalsComp price='1560' img='images/Modular/modimg2.png' title='FabCab' 
              des='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></ModalsComp>

              <ModalsComp price='2432' img='images/Modular/modimg3.png' title='Irontown Homes'
               des='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></ModalsComp>

              <ModalsComp price='2862' img='images/Modular/modimg4.png' title='Wheelhaus'
               des='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></ModalsComp>

            
              
          </body>
               

</div>
    </div>
  );
}

export default AppModals2;