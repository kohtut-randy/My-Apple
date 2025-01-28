"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Data = [
  { img: "/assets/c1.jpeg" },
  { img: "/assets/c2.jpeg" },
  { img: "/assets/c3.jpeg" },
  { img: "/assets/c4.jpeg" },
  { img: "/assets/c5.jpeg" },
  { img: "/assets/c6.jpeg" },
];
function SimpleSlider() {
  const settings = {
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
      className="flex align-self-center justify-center w-[100%] bg-white mt-10"
    >
      {Data.map((item, index) => (
        <div key={index} className="!flex items-center justify-center">
          {" "}
          <Image
            src={item.img}
            alt="img"
            className="w-[90%] h-[700px]"
            key={index}
            width={1000}
            height={1000}
          />
        </div>
      ))}
    </Slider>
  );
}
export { SimpleSlider };
