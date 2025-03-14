"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleDown, FaFilter, FaTimes } from "react-icons/fa";
import TrainFilter from "../Component/Filter/TrainFilter";
import TrainComp from "../Component/AllComponent/formMaincomp/TrainComp";

const page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Toggle popup function
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const trainData = [
    {
      trainName: "Vande Bharat Exp",
      trainNumber: "#22416",
      departureDays: ["S", "M", "W", "T", "F", "S"],
      departureTime: "3:00 PM, Fri",
      departureStation: "New Delhi (NDLS)",
      duration: "4 hrs 8 mins",
      arrivalTime: "7:08 PM, Fri",
      arrivalStation: "Kanpur Central (CNB)",
      classes: [
        {
          className: "CC",
          price: 1060,
          availability: 535,
          cancellationPolicy: "Free Cancellation",
          lastUpdated: "Updated few mins ago",
        },
        {
          className: "EC",
          price: 2080,
          availability: 51,
          cancellationPolicy: "Free Cancellation",
          lastUpdated: "Updated few mins ago",
        },
      ],
    },
    {
      trainName: "Vande Bharat Exp",
      trainNumber: "#22416",
      departureDays: ["S", "M", "W", "T", "F", "S"], // Departs on these days
      departureTime: "3:00 PM, Fri",
      departureStation: "New Delhi (NDLS)",
      duration: "4 hrs 8 mins",
      arrivalTime: "7:08 PM, Fri",
      arrivalStation: "Kanpur Central (CNB)",
      classes: [
        {
          className: "CC",
          price: 1060,
          availability: 535,
          cancellationPolicy: "Free Cancellation",
          lastUpdated: "Updated few mins ago",
        },
        {
          className: "EC",
          price: 2080,
          availability: 51,
          cancellationPolicy: "Free Cancellation",
          lastUpdated: "Updated few mins ago",
        },
      ],
    },
    {
      trainName: "Vande Bharat Exp",
      trainNumber: "#22416",
      departureDays: ["S", "M", "W", "T", "F", "S"], // Departs on these days
      departureTime: "3:00 PM, Fri",
      departureStation: "New Delhi (NDLS)",
      duration: "4 hrs 8 mins",
      arrivalTime: "7:08 PM, Fri",
      arrivalStation: "Kanpur Central (CNB)",
      classes: [
        {
          className: "CC",
          price: 1060,
          availability: 535,
          cancellationPolicy: "Free Cancellation",
          lastUpdated: "Updated few mins ago",
        },
        {
          className: "EC",
          price: 2080,
          availability: 51,
          cancellationPolicy: "Free Cancellation",
          lastUpdated: "Updated few mins ago",
        },
      ],
    },
    {
      trainName: "Vande Bharat Exp",
      trainNumber: "#22416",
      departureDays: ["S", "M", "W", "T", "F", "S"], // Departs on these days
      departureTime: "3:00 PM, Fri",
      departureStation: "New Delhi (NDLS)",
      duration: "4 hrs 8 mins",
      arrivalTime: "7:08 PM, Fri",
      arrivalStation: "Kanpur Central (CNB)",
      classes: [
        {
          className: "CC",
          price: 1060,
          availability: 535,
          cancellationPolicy: "Free Cancellation",
          lastUpdated: "Updated few mins ago",
        },
        {
          className: "EC",
          price: 2080,
          availability: 51,
          cancellationPolicy: "Free Cancellation",
          lastUpdated: "Updated few mins ago",
        },
      ],
    },
    // Add more train objects as needed
  ];

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
    { distance: "10 Kms" },
    { distance: "20 Kms" },
    { distance: "30 Kms" },
    { distance: "40 Kms" },
    { distance: "50 Kms" },
    { distance: "60 Kms" },
    { distance: "70 Kms" },
    { distance: "80 Kms" },
    { distance: "90 Kms" },
    { distance: "100 Kms" },
    { distance: "110 Kms" },
    { distance: "120 Kms" },
  ];

  return (
    <>
    <TrainComp />
      <div className="block md:flex px-0 lg:px-28 items-start gap-3 my-5">
        <div className="hidden md:block w-1/4">
          <TrainFilter />
        </div>

        <div className="w-full md:w-3/4 overflow-hidden md:overflow-visible">
          <div className="custom-slider  flex  items-center mb-5 myshadow">
            <Slider {...settings} className="slider  flex w-full items-center">
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center bg-white p-3 md:p-5 border justify-center ${
                    activeIndex === index ? "text-blue-600 border-blue-600" : ""
                  }`}
                >
                  <div className="font-black flex items-center text-center  justify-center">
                    {item.distance}
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div>
            {trainData.map((train, index) => (
              <div key={index} className="myshadow rounded-lg border p-4 mb-4">
                <div className="block md:flex justify-between">
                  <div className="left-info flex flex-col">
                    <div className="train-name text-xl font-semibold">
                      {train.trainName}
                    </div>
                    <div className="flex text-sm">
                      <div>{train.trainNumber}</div>
                      <div className="mx-2">|</div>
                      <div>
                        Departs on:&nbsp;
                        {train.departureDays.map((day, i) => (
                          <span
                            key={i}
                            className={`font-bold ${
                              ["S", "M", "W", "T", "F", "S"].includes(day)
                                ? "text-green-600"
                                : "text-gray-400"
                            }`}
                          >
                            {day}&nbsp;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="text-sm font-semibold">
                      {train.departureTime}
                    </div>
                    <div className="text-xs mt-1">{train.departureStation}</div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center">
                      <span className="w-16 h-[1px] bg-gray-300"></span>
                      <span className="text-sm mt-1 font-bold mx-4">
                        {train.duration}
                      </span>
                      <span className="w-16 h-[1px] bg-gray-300"></span>
                    </div>
                    <div className="view-routes text-blue-600 text-xs mt-1 cursor-pointer">
                      View route
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-sm">
                      {train.arrivalTime}
                    </div>
                    <div className="text-xs mt-1">{train.arrivalStation}</div>
                  </div>
                </div>

                <div className=" block md:flex flex-wrap  justify-between items-end">
                  <div className="flex flex-wrap gap-2 justify-center md:justify-normal md:gap-0 mt-4">
                    {train.classes.map((cls, i) => (
                      <div
                        key={i}
                        className="p-4 flex-col w-40 md:w-60 myshadow flex mr-0 md:mr-4 rounded-md"
                      >
                        <div className="flex items-center justify-between mb-1 font-bold">
                          <div className="flex items-center">
                            <div className="rail-class">{cls.className}</div>
                          </div>
                          <div className="ticket-price text-right">
                            <span>₹</span> {cls.price}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm text-green-600">
                            Available {cls.availability}
                          </div>
                        </div>
                        <div className="railofy-texts-container">
                          <span className="railofy-texts text-sm text-blue-500">
                            {cls.cancellationPolicy}
                          </span>
                        </div>
                        <div className="update-info text-gray-500 text-xs">
                          {cls.lastUpdated}
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="flex items-center justify-end md:justify-normal mt-3 md:mt-0 cursor-pointer text-sm text-blue-500">
                    Nearby dates <FaAngleDown />
                  </span>
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

              <TrainFilter />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
