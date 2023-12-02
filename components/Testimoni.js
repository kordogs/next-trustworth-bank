import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: " Emily Turner",
      image: "/assets/people-3.png",
      city: "New York",
      country: "US",
      rating: "4.5",
      testimoni:
        "TrustWorth Bank has transformed the way I manage my finances. The virtual platform is incredibly user-friendly, and I feel secure knowing that my transactions are protected. It's like having a personal bank at my fingertips!",
    },
    {
      name: "Carlos Rodriguez",
      image: "/assets/people-3.png",
      city: "Madrid",
      country: "Spain",
      rating: "4.5",
      testimoni:
        "As an international traveler, TrustWorth Bank has been a game-changer for me. The high level of security and the ability to access my accounts from anywhere make it the ideal banking solution. I trust TrustWorth for all my financial needs.",
    },
    {
      name: "Aisha Patel",
      image: "/assets/people-3.png",
      city: "Mumbai",
      country: "India",
      rating: "4.5",
      testimoni:
        "TrustWorth Bank's unique features make managing my finances a breeze. The virtual network is a perfect fit for my busy lifestyle. The security measures in place give me confidence in using online banking like never before.",
    },
    {
      name: "Francois Dubois",
      image: "/assets/people-3.png",
      city: "Paris",
      country: "France",
      rating: "4.5",
      testimoni:
        "TrustWorth Bank combines cutting-edge technology with a commitment to privacy. It's refreshing to have a bank that truly understands the importance of security. It's my go-to choice for reliable and secure banking.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
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
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-green-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
