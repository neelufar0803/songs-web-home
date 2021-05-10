import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "./images/img1.jpg"
import image2 from "./images/img2.jpg"
import image3 from "./images/img3.jpg"
import image4 from "./images/img4.jpg"
import image7 from "./images/img7.jpg"
import image8 from "./images/img8.jpg"

import './slider.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 1000,
      autoplay:true
      

    };
    return (
      <div>
        <Slider {...settings}>
          <div className='image'>
            <img src={image3} alt='images' ></img>
          </div>
          <div>
            <img src={image2} alt='images' ></img>
          </div>
          <div>
            <img src={image1} alt='images' ></img>          
          </div>
          <div>
            <img src={image4} alt='images' ></img>          
          </div>
          <div>
            <img src={image7} alt='images' ></img>          
          </div>
          <div>
            <img src={image8} alt='images' ></img>          
          </div>
          
        </Slider>
      </div>
    );
  }
}