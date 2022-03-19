import "./carousel.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div >
        <Slider {...settings}>
          <div className="slider">
            <h3>1</h3>
          </div>
          <div className="slider">
            <h3>2</h3>
          </div>
          <div className="slider">
            <h3>3</h3>
          </div>
          <div className="slider">
            <h3>4</h3>
          </div>
          <div className="slider">
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    );
  }
}