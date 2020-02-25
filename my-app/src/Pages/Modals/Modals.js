import React from 'react';
import Footer from '../../Components/Common/Footer/footer';
import Navbar from '../../Components/Common/Nav/nav';
import Picture from '../../Components/Modals/picture slider/picture';
import Subscribe from '../../Components/Common/subscribe/subscribe';
import ModalsComp from '../../Components/Modals/modalComp/modalComp';
import './Modals.css'


class AppModals extends React.Component {

  constructor(props){
    super(props);

    this.state = {

      
      imageModels: []

    }
  }
  async componentDidMount(){

    const responseImg = await fetch("http://localhost:8080/Image");
    const dataImg = await responseImg.json();
    this.setState({ imageModels : dataImg.result})
  }
  

render(){
/*   const images = [
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
  ]; */


  const images =  this.state.imageModels.filter(items => {
    return items.IDproduct == this.props.match.params.id
  }).map(item => {
    const imageY = { thumbnail: item.Image, description: item.Title, original: item.Image }
    return imageY;
  })

  return(
    <div>
      <br />
     
      <div className="container-fluid">
          <body>   
              <br/>
              <Picture images = {images}></Picture>

            
                  {
                    
              this.state.imageModels.map(item => {
                if(item.IDproduct ==this.props.match.params.id )
              return  <ModalsComp  price={item.Price} img={item.Image} title={item.Title} 
              des={item.Description}></ModalsComp>
              

              })
            }
            

           {/* 
              <ModalsComp price={this.state.imageModels} img='images/kit houses/kitimg1.png' title='Eco Friendly Log Cabin Kit Home'
               des='Constructed in just three months, this eco-friendly log house with its North American lodge vibe features internal walls clad in wood.'></ModalsComp>

              <ModalsComp price='1560' img='images/kit houses/kitimg2.png' title='Low Energy Contemporary Package Home' 
              des='This low-energy, contemporary home was built using an innovative dry construction technique with some of the stages taking place offsite. This meant that the house took just six months to construct.'></ModalsComp>

              <ModalsComp price='2432' img='images/kit houses/kitimg3.png' title='Sustainable Chalet-style Package Home'
               des='This southern most orientation is complemented by the house’s most striking feature, the overhanging roof. It protects the interiors from overheating in summer through several composite tilt.'></ModalsComp>

              */}
              
          </body>
               

</div>
    </div>
  );
}}

export default AppModals;