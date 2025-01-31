import React, { Component } from "react";
import "./Section6.css";
import Slider from "react-slick";
import img1 from "../Resources/img19.avif";
import img2 from "../Resources/img20.avif";
import img3 from "../Resources/img16.avif";
import img4 from "../Resources/img19.avif";
import img5 from "../Resources/img17.avif";
import img6 from "../Resources/img18.avif";

export default class Section6 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const images = [img1, img2, img3, img4, img5, img6];
    return (
      <div>
        <Slider {...settings}>
          <div className="card">
            <img src={images[0]} alt="" />
          </div>
          <div className="card">
            <img src={images[1]} alt="" />
          </div>
          <div className="card">
            <img src={images[2]} alt="" />
          </div>
          <div className="card">
            <img src={images[3]} alt="" />
          </div>
          <div className="card">
            <img src={images[4]} alt="" />
          </div>
          <div className="card">
            <img src={images[5]} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
