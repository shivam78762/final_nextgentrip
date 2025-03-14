"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import CabFilter from "../Component/Filter/CabFilter";
import { FaFilter, FaTimes } from "react-icons/fa";
import Link from "next/link";
import CabsComp from "../Component/AllComponent/formMaincomp/CabsComp";

const page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Toggle popup function
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    { time: "1 hour", distance: "10 Kms" },
    { time: "2 hours", distance: "20 Kms" },
    { time: "3 hours", distance: "30 Kms" },
    { time: "4 hours", distance: "40 Kms" },
    { time: "5 hours", distance: "50 Kms" },
    { time: "6 hours", distance: "60 Kms" },
    { time: "7 hours", distance: "70 Kms" },
    { time: "8 hours", distance: "80 Kms" },
    { time: "9 hours", distance: "90 Kms" },
    { time: "10 hours", distance: "100 Kms" },
    { time: "11 hours", distance: "110 Kms" },
    { time: "12 hours", distance: "120 Kms" },
  ];

  const carData = [
    {
      id: 1,
      image: "/images/taxi.webp",
      name: "Tata Tigor",
      rating: "4.6",
      reviews: "4400 ratings",
      details: ["Sedan", "AC", "4 Seats", "10 kms included"],
      features: [
        {
          icon: "/images/location.webp",
          title: "Extra km fare",
          description: "₹25.0/km after 10 kms",
        },
        {
          icon: "/images/alarm-plus.webp",
          title: "Extra time fare",
          description: "₹3.0 per min after 1hr",
        },
        {
          icon: "/images/gas-station.webp",
          title: "Fuel Type",
          description: "Electric Car with recharging break",
        },
        {
          icon: "/images/remove.webp",
          title: "Cancellation",
          description: "Free till 1 hour of departure",
          descriptionStyle: "text-green-700",
        },
      ],
      price: "369",
      taxes: "95",
    },
    {
      id: 2,
      image: "/images/taxi.webp",
      name: "MG ZS",
      rating: "4.0",
      reviews: "1000 ratings",
      details: ["Sedan", "AC", "4 Seats", "10 kms included"],
      features: [
        {
          icon: "/images/location.webp",
          title: "Extra km fare",
          description: "₹25.0/km after 10 kms",
        },
        {
          icon: "/images/alarm-plus.webp",
          title: "Extra time fare",
          description: "₹3.0 per min after 1hr",
        },
        {
          icon: "/images/gas-station.webp",
          title: "Fuel Type",
          description: "Electric Car with recharging break",
        },
        {
          icon: "/images/alarm-plus.webp",
          title: "Cancellation",
          description: "Free till 1 hour of departure",
          descriptionStyle: "text-green-700",
        },
      ],
      price: "400",
      taxes: "30",
    },
    {
      id: 3,
      image: "/images/taxi.webp",
      name: "MG ZS",
      rating: "4.0",
      reviews: "1000 ratings",
      details: ["Sedan", "AC", "4 Seats", "10 kms included"],
      features: [
        {
          icon: "/images/location.webp",
          title: "Extra km fare",
          description: "₹25.0/km after 10 kms",
        },
        {
          icon: "/images/alarm-plus.webp",
          title: "Extra time fare",
          description: "₹3.0 per min after 1hr",
        },
        {
          icon: "/images/gas-station.webp",
          title: "Fuel Type",
          description: "Electric Car with recharging break",
        },
        {
          icon: "/images/alarm-plus.webp",
          title: "Cancellation",
          description: "Free till 1 hour of departure",
          descriptionStyle: "text-green-700",
        },
      ],
      price: "400",
      taxes: "30",
    },
    {
      id: 4,
      image: "/images/taxi.webp",
      name: "MG ZS",
      rating: "4.0",
      reviews: "1000 ratings",
      details: ["Sedan", "AC", "4 Seats", "10 kms included"],
      features: [
        {
          icon: "/images/location.webp",
          title: "Extra km fare",
          description: "₹25.0/km after 10 kms",
        },
        {
          icon: "/images/alarm-plus.webp",
          title: "Extra time fare",
          description: "₹3.0 per min after 1hr",
        },
        {
          icon: "/images/gas-station.webp",
          title: "Fuel Type",
          description: "Electric Car with recharging break",
        },
        {
          icon: "/images/alarm-plus.webp",
          title: "Cancellation",
          description: "Free till 1 hour of departure",
          descriptionStyle: "text-green-700",
        },
      ],
      price: "400",
      taxes: "30",
    },
    // Add more car objects here...
  ];
  return (
    <>
      <CabsComp />
      <div className="block md:flex px-0 lg:px-28 items-start gap-3 my-5">
        <div className="hidden md:block w-1/4 sticky top-24">
          <CabFilter />
        </div>
        <div className="myshadow w-full md:w-3/4 bg-white px-5 py-3">
          <div className="sliderBorder  flex items-center mt-5 ">
            <Slider
              {...settings}
              className="custom-slider slider flex w-full items-center"
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex text-center items-center px-3 md:px-5 py-2 border justify-center ${
                    activeIndex === index ? "text-blue-600 border-blue-600" : ""
                  }`}
                >
                  <div>
                    <div className="flex text-xs md:text-base items-center justify-center">
                      {item.time}
                    </div>
                    <div className="font-black text-xs md:text-base flex items-center justify-center">
                      {item.distance}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full bg-[#ECF5FE] max-w-screen-xl  my-5 mx-auto px-4 py-6">
            <div className="flex justify-between mb-4">
              <p className="font-bold text-xl text-black">Why book with us?</p>
            </div>
            <div className="flex flex-wrap  justify-between gap-2">
              <div className="w-full  md:w-[49%] px-2 mb-0 md:mb-0 flex items-center bg-white p-2 rounded-sm">
                <div className="flex gap-5 items-center">
                  <span className="">
                    <Image
                      src="/images/destinations.webp"
                      alt="Route Icon"
                      width={24}
                      height={24}
                      className="w-full h-10"
                    />
                  </span>
                  <div>
                    <p className="font-bold text-lg text-black mb-2">
                      Multiple Pick Ups & Drops
                    </p>
                    <p className="text-gray-500 text-sm">
                      Get multiple pick ups and drops included in your pack
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full  md:w-[49%] px-2 mb-0 flex items-center bg-white p-2 rounded-sm">
                <div className="flex items-center">
                  <span className="mr-4">
                    <Image
                      src="/images/time-is-money.webp"
                      alt="Hourly Packs Icon"
                      width={24}
                      height={24}
                      className="w-full h-10"
                    />
                  </span>
                  <div>
                    <p className="font-bold text-lg text-black mb-2">
                      Hourly packs
                    </p>
                    <p className="text-gray-500">
                      Cheaper than booking multiple rides
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {carData.map((car) => (
              <div
                key={car.id}
                className="flex flex-col md:flex-row justify-between border mb-5"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="flex justify-center ">
                    <Image
                      className="w-full h-full md:h-40"
                      src={car.image}
                      alt="Cab Image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="p-4 flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg font-black">
                        {car.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="bg-green-500 text-white py-1 px-2 rounded">
                          <span className="font-bold text-sm">
                            {car.rating}
                          </span>
                          <span className="text-xs">/5</span>
                        </div>
                        <p className="text-gray-500 text-xs">{car.reviews}</p>
                      </div>
                    </div>
                    <div className="text-sm text-black flex flex-wrap space-x-2">
                      {car.details.map((detail, index) => (
                        <span key={index} className="flex items-center">
                          <div className="w-2.5 h-2.5 bg-black rounded-full mx-1"></div>
                          {detail}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-sm md:text-lg font-bold text-green-600">
                        Electric & Sustainable
                      </span>
                      <Image
                        className="w-4 h-4 md:w-5 md:h-5"
                        src="/images/charging-station.webp"
                        alt="Green Leaf"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="space-y-2">
                      {car.features.map((feature, index) => (
                        <div className="flex items-center" key={index}>
                          <Image
                            className="w-3 h-3 md:w-4 md:h-4 mr-2"
                            src={feature.icon}
                            alt={feature.title}
                            width={16}
                            height={16}
                          />
                          <div className="flex items-center gap-2 md:gap-10">
                            <div className="font-bold text-sm md:text-base">
                              {feature.title}
                            </div>
                            <div
                              className={`text-xs md:text-sm ${
                                feature.descriptionStyle || ""
                              }`}
                            >
                              {feature.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end pt-0 md:pt-4 p-4">
                  <div className="text-right">
                    <div className="text-lg md:text-2xl font-black text-black">
                      ₹ {car.price}
                    </div>
                    <p className="text-xs md:text-sm text-black">
                      + ₹{car.taxes} (Taxes & Charges)
                    </p>
                  </div>
                  <Link
                    href="/CabComp/cabbook"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="block  md:hidden">
        <div
          className="icon-container fixed bottom-5 right-4 z-[9999] grid"
          onClick={togglePopup}
        >
          <FaFilter className="bg-[#52c3f1] text-white p-1 text-3xl rounded cursor-pointer" />
        </div>

        {isPopupOpen && (
          <div className="popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50  z-[10000]">
            <div className="popup-content  shadow-lg">
              <button
                onClick={togglePopup}
                className="px-4 py-2 bg-blue-500 flex justify-between items-center w-full text-white "
              >
                Filter <FaTimes />
              </button>

              <CabFilter />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
