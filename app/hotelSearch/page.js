"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaShareAlt, FaStar, FaFilter, FaTimes } from "react-icons/fa";
import Link from "next/link";
import HotelFilter from "../Component/Filter/HotelFilter";
import HotelComp from "../Component/AllComponent/formMaincomp/HotelsComp";

const page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

 
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };



  const hotelData = [
    {
      id: 1,
      name: "Goa Marriott Resort & Spa",
      location: "Panjim",
      distance: "2.9 km drive to Deltin Royale",
      rating: "4.4",
      ratingText: "Excellent",
      images: [
        "/images/hotel1.webp",
        "/images/hotel2.webp",
        "/images/hotel3.webp",
        "/images/hotel4.webp",
        "/images/hotel5.webp",
      ],
      price: "₹ 13,250",
      taxes: "₹ 2,385",
      perks: ["Couple Friendly", "15% discount on spa, food & beverages"],
    },
    {
      id: 2,
      name: "Goa Marriott Resort & Spa",
      location: "Panjim",
      distance: "2.9 km drive to Deltin Royale",
      rating: "3.4",
      ratingText: "Excellent",
      images: [
        "/images/hotel1.webp",
        "/images/hotel2.webp",
        "/images/hotel3.webp",
        "/images/hotel4.webp",
        "/images/hotel5.webp",
      ],
      price: "₹ 13,250",
      taxes: "₹ 2,385",
      perks: ["Couple Friendly", "15% discount on spa, food & beverages"],
    },
    {
      id: 3,
      name: "Goa Marriott Resort & Spa",
      location: "Panjim",
      distance: "2.9 km drive to Deltin Royale",
      rating: "3.4",
      ratingText: "Excellent",
      images: [
        "/images/hotel1.webp",
        "/images/hotel2.webp",
        "/images/hotel3.webp",
        "/images/hotel4.webp",
        "/images/hotel5.webp",
      ],
      price: "₹ 13,250",
      taxes: "₹ 2,385",
      perks: ["Couple Friendly", "15% discount on spa, food & beverages"],
    },
  ];

  const renderStars = (rating) => {
    const starCount = Math.round(Number(rating));
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} color={index < starCount ? "gold" : "gray"} />
        ))}
      </div>
    );
  };

  return (
    <>

    <HotelComp />
    <div className="block md:flex px-0 lg:px-28 items-start gap-3 my-5">

    <div className="hidden md:block w-1/4">
          <HotelFilter />
        </div>


       
        <div className="w-full md:w-3/4">
          <div>
            {hotelData.map((hotel) => (
              <div
                key={hotel.id}
                className="myshadow bg-white border hover:border-blue-600  mb-5"
              >
                <div className="block md:flex relative p-5">
                    <div className="relative">
                      <div className="relative">
                        <Image
                          src={hotel.images[0]}
                          alt="hotelImg"
                          height={162}
                          width={243}
                          className="object-cover w-full rounded-md"
                        />
                        <div className="absolute bottom-2 right-2">
                          <button className="bg-blue-600 text-white rounded-full w-20 h-8 flex items-center justify-center">
                            <span className="text-xs flex items-center gap-2">
                              Share <FaShareAlt />{" "}
                            </span>
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-center md:justify-start mt-2 space-x-2">
                        {hotel.images.slice(1, 5).map((image, index) => (
                          <div key={index} className="relative rounded-sm">
                            <Image
                              src={image}
                              alt={`hotel_image_${index + 1}`}
                              height={60}
                              width={55}
                              className="object-cover rounded-sm"
                            />
                            {index === 3 && (
                              <span className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-xs rounded-sm">
                                View All
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                  <div className="flex-1 pl-0 md:pl-5">
                    <div className=" my-5 md:my-0 flex justify-between items-center">
                      <p className="text-base md:text-2xl font-black">{hotel.name}</p>
                      <div>
                        <div className="flex items-center">
                          <span className="bg-blue-500 text-white px-2 text-sm rounded-full">
                            {hotel.rating} 
                          </span>
                          <span className=" ml-2 text-blue-600">
                            {hotel.ratingText}
                          </span>
                        </div>
                        <div className="hidden md:flex items-center justify-center mt-2">
                          {renderStars(hotel.rating)}
                        </div>
                      </div>
                    </div>

                    <div className="text-gray-500">
                      <span className="text-blue-600">{hotel.location}</span> |{" "}
                      {hotel.distance}
                    </div>

                    <div className="mt-2 hidden md:flex space-x-4 text-gray-500">
                      {hotel.perks.map((perk, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 px-2 py-1 text-sm rounded-full"
                        >
                          {perk}
                        </span>
                      ))}
                    </div>

                     <div className="flex items-end justify-between">
                    <div className="mt-4 ">
                      <p className="text-xl font-black">{hotel.price}</p>
                      <p className="text-gray-500">
                        + {hotel.taxes} taxes & fees
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Per Night</p>
                    </div>
                    <Link href="/hotelSearchCheckin" className="bg-orange-600 text-white rounded-full w-28 h-8 flex items-center justify-center">
                            <span className="text-xs flex items-center gap-2">
                              View Room
                            </span>
                          </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block  bg-[#ECF5FE] px-5 py-2 text-sm shadow-lg">
                  <span className="text-gray-700">
                    Exclusive offer on Canara Bank Credit Cards. Get INR 241 off
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

              <HotelFilter />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
