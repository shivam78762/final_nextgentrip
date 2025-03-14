"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown, FaFilter, FaTimes } from "react-icons/fa";

import BusFilter from "../Component/Filter/BusFilter";
import BusComp from "../Component/AllComponent/formMaincomp/BusComp";

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
    { time: "29 Aug, Thu", distance: "10 Kms" },
    { time: "30 Aug, Fri", distance: "20 Kms" },
    { time: "31 Aug, Sat", distance: "30 Kms" },
    { time: "1 Sep, Sun", distance: "40 Kms" },
    { time: "2 Sep, Mon", distance: "50 Kms" },
    { time: "3 Sep, Tue", distance: "60 Kms" },
    { time: "4 Sep, Wed", distance: "70 Kms" },
    { time: "5 Sep, Thu", distance: "80 Kms" },
    { time: "6 Sep, Fri", distance: "90 Kms" },
    { time: "7 Sep, Sat", distance: "100 Kms" },
    { time: "8 Sep, Sun", distance: "110 Kms" },
    { time: "9 Sep, Mon", distance: "120 Kms" },
  ];

  const busData = [
    {
      id: 1,
      busName: "IntrCity SmartBus",
      busType: "Bharat Benz A/C Seater /Sleeper (2+1)",
      departureTime: "22:15",
      departureDate: "30 Aug",
      duration: { hours: 8, minutes: 30 },
      arrivalTime: "06:45",
      arrivalDate: "31 Aug",
      price: 449,
      rating: 4.8,
      ratingsCount: 676,
      seatsLeft: 40,
    },
    {
      id: 2,
      busName: "IntrCity SmartBus",
      busType: "Bharat Benz A/C Seater /Sleeper (2+1)",
      departureTime: "22:15",
      departureDate: "30 Aug",
      duration: { hours: 8, minutes: 30 },
      arrivalTime: "06:45",
      arrivalDate: "31 Aug",
      price: 449,
      rating: 4.8,
      ratingsCount: 676,
      seatsLeft: 40,
    },
    {
      id: 3,
      busName: "IntrCity SmartBus",
      busType: "Bharat Benz A/C Seater /Sleeper (2+1)",
      departureTime: "22:15",
      departureDate: "30 Aug",
      duration: { hours: 8, minutes: 30 },
      arrivalTime: "06:45",
      arrivalDate: "31 Aug",
      price: 449,
      rating: 4.8,
      ratingsCount: 676,
      seatsLeft: 40,
    },
  ];

  return (
    <>

    <BusComp />
      <div className="block md:flex px-0 lg:px-28 items-start gap-3 my-5">
        <div className="hidden md:block w-1/4">
          <BusFilter />
        </div>

        <div className="w-full md:w-3/4  ">
          <div className="myshadow bg-white flex items-center">
            <Slider {...settings} className="custom-slider flex w-full items-center">
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center px-3 md:px-5 py-2 md:py-4 border justify-center ${
                    activeIndex === index ? "text-blue-600 border-blue-600" : ""
                  }`}
                >
                  <div className="flex text-xs text-center font-semibold items-center  justify-center">
                    {item.time}
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div>
            {busData.map((bus) => (
              <div
                key={bus.id}
                className="bg-white hover:border-blue-500 px-5 pt-3 my-5 border myshadow rounded-lg"
              >
                <div className="">
                  <div className="flex flex-col lg:flex-row justify-between">
                    {/* Bus Information */}
                    <div className="busInfo flex flex-col mb-6 lg:mb-0">
                      <div className="flex items-center mb-2">
                        <p className="font-bold text-black mr-4">
                          {bus.busName}
                        </p>
                      </div>
                      <p className="text-gray-500">{bus.busType}</p>
                    </div>

                    {/* Timing and Duration */}
                    <div className="flex items-center mb-6 lg:mb-0">
                      <div className="mr-6">
                        <span className="text-lg font-bold text-black">
                          {bus.departureTime}
                        </span>
                        <span className="text-sm text-gray-500 block">
                          {bus.departureDate}
                        </span>
                      </div>
                      <div className="h-px w-16 bg-gray-300 mx-6"></div>
                      <div className="text-sm text-gray-500">
                        <span>{bus.duration.hours}</span>hrs{" "}
                        <span>{bus.duration.minutes}</span>mins
                      </div>
                      <div className="h-px w-16 bg-gray-300 mx-6"></div>
                      <div>
                        <span className="text-lg text-black">
                          {bus.arrivalTime}
                        </span>
                        <span className="text-sm text-gray-500 block">
                          {bus.arrivalDate}
                        </span>
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="priceSection flex flex-col items-end">
                      <div className="mb-2">
                        <span className="text-lg font-bold text-green-600">
                          ₹ {bus.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bus Facilities and Availability */}
                  <div className="flex justify-between items-center mt-6">
                    <ul className="busFacility flex items-center">
                      <li className="mr-6">
                        <span className="flex gap-[1px] items-center bg-[#1a7971] p-1 px-2 rounded-md ">
                          <span className="">⭐</span>
                          <span className="text-white text-sm font-semibold">
                            {bus.rating}
                          </span>
                        </span>
                      </li>
                      <li>
                        <div className="text-sm text-gray-500">
                          {bus.ratingsCount} Ratings
                        </div>
                      </li>
                    </ul>
                    <div className="text-sm text-gray-500">
                      {bus.seatsLeft} Seats Left
                    </div>
                  </div>
                </div>

                {/* Bus Card Footer */}
                <div className="border-t py-2 flex justify-between mt-6">
                  <ul className="flex gap-2 md:gap-6 flex-wrap items-center text-sm">
                    <li className="cursor-pointer hover:text-blue-500">
                      <span className="mr-2 flex gap-2 items-center text-sm">
                        Policies <FaChevronDown />
                      </span>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500">
                      <span className="mr-2 flex gap-2 items-center text-sm">
                        Photos <FaChevronDown />
                      </span>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500">
                      <span className="mr-2 flex gap-2 items-center text-sm">
                        Services <FaChevronDown />
                      </span>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500">
                      <span className="mr-2 flex gap-2 items-center text-sm">
                        Pickups & Drops <FaChevronDown />
                      </span>
                    </li>
                    <li className="cursor-pointer hover:text-blue-500">
                      <span className="mr-2 flex gap-2 items-center text-sm">
                        Reviews <FaChevronDown />
                      </span>
                    </li>
                  </ul>
                  <div className="selectSeats text-center cursor-pointer bg-blue-100 border border-blue-600 rounded px-3 py-1 text-blue-600 font-semibold">
                    Select Seats
                  </div>
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

              <BusFilter />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
