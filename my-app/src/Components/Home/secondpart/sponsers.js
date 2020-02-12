import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Sponsers extends Component {
    render() {
      const settings = {
        dots:false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        autoplay:true,
        speed: 500
      };
      return (
        <div style={{width:'85%',marginLeft:'100px'}}>
          <h2 style={{fontSize: '40px', textAlign:'center' , borderBottom:'solid 1px #eee' , color: '#cb4154' }}>Sponsers</h2><br/><br/><br/>
          <Slider {...settings}>
              <div class="col-md-2 col-xs-4"><a href="#" ><img src="./images/index.jpg" alt="Image" style={{maxHeight:'80px' }}/></a></div>
              <div class="col-md-2 col-xs-4"><a href="#" ><img src="./images/index.jpg" alt="Image" style={{maxHeight:'80px' }}/></a></div>
              <div class="col-md-2 col-xs-4"><a href="#" ><img src="./images/index.jpg" alt="Image" style={{maxHeight:'80px' }}/></a></div>
              <div class="col-md-2 col-xs-4"><a href="#" ><img src="./images/index.jpg" alt="Image" style={{maxHeight:'80px' }}/></a></div>
              <div class="col-md-2 col-xs-4"><a href="#" ><img src="./images/index.jpg" alt="Image" style={{maxHeight:'80px' }}/></a></div>
              <div class="col-md-2 col-xs-4"><a href="#" ><img src="./images/index.jpg" alt="Image" style={{maxHeight:'80px' }}/></a></div>


          </Slider>
        </div>
      );
    }
  }
