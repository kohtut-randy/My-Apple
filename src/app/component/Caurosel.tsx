"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
  { img: "./assets/c1.jpeg" },
  { img: "./assets/c2.jpeg" },
  { img: "./assets/c3.jpeg" },
  { img: "./assets/c4.jpeg" },
  { img: "./assets/c5.jpeg" },
  { img: "./assets/c6.jpeg" },
];
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };
  return (
    <Slider
      {...settings}
      className="flex align-self-center justify-center w-[100%]"
    >
      {Data.map((item, index) => (
        <div key={index} className="bg-red-500">
          {" "}
          <img src={item.img} alt="img" className="w-full" key={index} />
        </div>
      ))}
    </Slider>
  );
}
