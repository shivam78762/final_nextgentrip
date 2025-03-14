"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaFilter, FaTimes, FaChevronDown, FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdFlight } from "react-icons/md";
import FlightHotelFilter from "../Component/Filter/FlightHotelFilter";
import FLightHotelComp from "../Component/AllComponent/formMaincomp/FLightHotelComp";
import HotelDetails from "../Component/AllComponent/HotelDetailsMain";

const page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [MdAirlineStops, setAirList] = useState(false);
  const onClick = () => {
    setAirList(false);
  };
  

  const hotelData = [
    {
      id: 1,
      name: "Ramee Guestline Hotel Khar",
      imageSrc: "/images/hotelroom.webp",
      rating: 4,
      reviews: 150,
      date: "29 Aug 2024",
      nights: 1,
      price: 11945,
      flightIncluded: true,
    },
    {
      id: 2,
      name: "Ramee Guestline Hotel Khar",
      imageSrc: "/images/hotelroom.webp",
      rating: 4,
      reviews: 150,
      date: "29 Aug 2024",
      nights: 1,
      price: 11945,
      flightIncluded: true,
    },
    {
      id: 3,
      name: "Ramee Guestline Hotel Khar",
      imageSrc: "/images/hotelroom.webp",
      rating: 4,
      reviews: 150,
      date: "29 Aug 2024",
      nights: 1,
      price: 11945,
      flightIncluded: true,
    },
    // Add more hotel objects here
  ];

  return (
    <>
    <FLightHotelComp />
      <div className="block md:flex px-0 lg:px-28 items-start gap-3 my-5">
        <div className="hidden md:block w-1/4">
          <FlightHotelFilter />
        </div>

        <div className="w-full md:w-3/4">
          {hotelData.map((hotel) => (
            <div key={hotel.id}>
              <div className="block md:flex myshadow bg-white border hover:border-blue-600 mb-5 overflow-hidden ">
                <Image
                  src={hotel.imageSrc}
                  alt="Hotel"
                  width={100}
                  height={100}
                  className="m-1 w-[98%] md:w-80 h-full object-cover rounded-sm"
                />
                <div className="block md:flex justify-between w-full md:w-2/3 p-4">
                  <div className="flex flex-col h-full">
                    <div className="flex flex-col">
                      <div className="text-lg font-semibold mb-2">
                        {hotel.name}
                      </div>
                      <div className="flex items-center mb-2">
                        <span className="mr-2 text-xs">Hotel</span>
                        <div className="flex space-x-1">
                          {Array.from({ length: hotel.rating }).map((_, i) => (
                            <FaStar key={i} className="text-[#ffc107]" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src="/images/social.webp"
                          alt="TripAdvisor Rating"
                          width={20}
                          height={20}
                        />
                        <span className="text-green-600 ml-1 font-bold">
                          {hotel.reviews} Reviews
                        </span>
                      </div>
                      <div className="flex gap-4 justify-between border border-blue-500 bg-[#ECF5FE] rounded-lg px-4 py-1 mt-4">
                        <div className="flex items-center text-xs md:text-sm gap-2">
                          <SlCalender /> {hotel.date} ({hotel.nights} Night(s))
                        </div>
                        <div className="flex items-center text-xs md:text-sm gap-2">
                          <MdFlight />{" "}
                          {hotel.flightIncluded
                            ? "Flights Included"
                            : "No Flights"}{" "}
                          <FaChevronDown />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-l-0 md:border-l mt-4 md:mt-0 flex items-center justify-between md:block  pl-0 md:pl-8 text-center md:text-right">
                    <div className="text-xl font-bold text-black">
                      ₹ {hotel.price}
                    </div>
                    <div className="text-gray-500 text-xs my-2 hidden md:block">
                      Flight + Hotel
                    </div>
                    <div className="text-gray-500 text-xs hidden md:block">
                      1 Person per Night
                    </div>
                  
                    
                    <button onClick={() => setAirList(true)}  className="mt-0 md:mt-20 px-4 py-2 bg-blue-500 text-white text-sm rounded">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

              <FlightHotelFilter />
            </div>
          </div>
        )}
      </div>

      {MdAirlineStops && (
        <div className="fixed inset-0 flex z-[9999] items-center justify-center bg-black bg-opacity-50">
          <HotelDetails  onClick={onClick} />
        </div>
      )}
    </>
  );
};

export default page;
