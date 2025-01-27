"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function AutoPlay({ children }: { children: React.ReactNode }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="flex  h-[700px]">
        {children}
      </Slider>
    </div>
  );
}

export default AutoPlay;
