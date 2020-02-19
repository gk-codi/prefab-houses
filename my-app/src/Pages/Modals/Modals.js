import React from 'react';
import Footer from '../../Components/Common/Footer/footer';
import Navbar from '../../Components/Common/Nav/nav';
import Picture from '../../Components/Modals/picture slider/picture';
import Subscribe from '../../Components/Common/subscribe/subscribe';
import ModalsComp from '../../Components/Modals/modalComp/modalComp';
import './Modals.css'


function AppModals() {

  const images = [
    {
      original: 'images/kit houses/kitimg1.png',
      thumbnail: 'images/kit houses/kitimg1.png',
      description:'Eco Friendly Log Cabin Kit Home',
    },
    {
      original: 'images/kit houses/kitimg2.png',
      thumbnail: 'images/kit houses/kitimg2.png',
      description:'Low Energy Contemporary Package Home',
    },
    {
      original: 'images/kit houses/kitimg3.png',
      thumbnail: 'images/kit houses/kitimg3.png',
      description:'Sustainable Chalet-style Package Home',
    },
  ];


  return(
    <div>
      <br />
      <div className="container-fluid">
          <body>
              <Navbar></Navbar><br/>
              <Picture images = {images}></Picture>
              
              <ModalsComp price='1059' img='images/kit houses/kitimg1.png' title='Eco Friendly Log Cabin Kit Home'
               des='Constructed in just three months, this eco-friendly log house with its North American lodge vibe features internal walls clad in wood.'></ModalsComp>

              <ModalsComp price='1560' img='images/kit houses/kitimg2.png' title='Low Energy Contemporary Package Home' 
              des='This low-energy, contemporary home was built using an innovative dry construction technique with some of the stages taking place offsite. This meant that the house took just six months to construct.'></ModalsComp>

              <ModalsComp price='2432' img='images/kit houses/kitimg3.png' title='Sustainable Chalet-style Package Home'
               des='This southern most orientation is complemented by the house’s most striking feature, the overhanging roof. It protects the interiors from overheating in summer through several composite tilt.'></ModalsComp>

              <Footer></Footer>
              <Subscribe></Subscribe>
              
          </body>
               

</div>
    </div>
  );
}

export default AppModals;