import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponsers.css";

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
        <div className="sponsorContainer">
          <h2 className="sponsorTitle">Sponsors</h2><br/><br/><br/>
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
