import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sponsers.css';

export default class CenterMode extends Component {
    render() {
      const settings = {
          dots:true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        autoplay:true,
        speed: 500
      };
      return (
        <div >
          <h2>Center Mode</h2>
          <Slider {...settings}>
            <div >
              <h3 className="spon-h3">1</h3>
            </div>
            <div>
              <h3 className="spon-h3">2</h3>
            </div>
            <div>
              <h3 className="spon-h3">3</h3>
            </div>
            <div>
              <h3 className="spon-h3">4</h3>
            </div>
            <div>
              <h3 className="spon-h3">5</h3>
            </div>
            <div>
              <h3 className="spon-h3">6</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }
  