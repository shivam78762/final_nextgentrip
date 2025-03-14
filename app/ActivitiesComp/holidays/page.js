"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { FaStar, FaCheck } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import FlightHotelFilter from "../../Component/Filter/FlightHotelFilter";
import Link from "next/link";

export default function DelhiActivities() {
  const swiperData = [
    {
      swiperImg: "/images/bus.webp",
      swiperCaption: "Bus tour",
    },
    {
      swiperImg: "/images/bus.webp",
      swiperCaption: "Bus tour",
    },
    {
      swiperImg: "/images/bus.webp",
      swiperCaption: "Bus tour",
    },
    {
      swiperImg: "/images/bus.webp",
      swiperCaption: "Bus tour",
    },
    {
      swiperImg: "/images/bus.webp",
      swiperCaption: "Bus tour",
    },
    {
      swiperImg: "/images/bus.webp",
      swiperCaption: "Bus tour",
    },
    {
      swiperImg: "/images/bus.webp",
      swiperCaption: "Bus tour",
    },
    {
      swiperImg: "/images/bus.webp",
      swiperCaption: "Bus tour",
    },
    {
      swiperImg: "/images/bus.webp",
      swiperCaption: "Bus tour",
    },
  ];

  const ActivityFoodAndPrice = [
    {
      myImg: "/images/delhi..webp",
      name: "Delhi",
      heading: "Delhi: Discover the Majestic India Gate and Cultural Landmarks",
      activityDescription:
        "Explore the historical and cultural heritage of Delhi with a visit to the India Gate, a war memorial that stands as a symbol of national pride. Enjoy a leisurely stroll around the surrounding gardens and soak in the bustling atmosphere of the capital city.",
      Price: 12244,
    },
    {
      myImg: "/images/mumbai.webp",
      name: "Mumbai",
      heading:
        "Mumbai: Enjoy a Scenic Walk Along Marine Drive with Stunning Sunset Views",
      activityDescription:
        "Experience the vibrant energy of Mumbai by taking a walk along Marine Drive. Known as the 'Queen's Necklace,' this iconic promenade offers stunning views of the Arabian Sea, especially at sunset. A perfect spot to relax and take in the city’s charm.",
      Price: 12455,
    },
    {
      myImg: "/images/delhi..webp",

      name: "Bangalore",
      heading: "Bangalore: Relax and Rejuvenate at the Lush Green Cubbon Park",
      activityDescription:
        "Enjoy a day at Cubbon Park, a green oasis in the heart of Bangalore. This lush park is perfect for nature walks, picnics, and exploring botanical wonders, providing a refreshing break from the city's hustle and bustle.",
      Price: 1344,
    },
  ];

  return (
    <div className="Activities px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      <div className="block md:flex  gap-5 ">
        <div className="left filter-side w-full md:w-1/4">
          <div className="flex flex-col gap-5 mb-3 md:mb-0">
            <ul className="text-xs flex items-center flex-wrap gap-2">
              <li className="flex items-center gap-1 text-gray-900">
                Home <MdKeyboardArrowRight />
              </li>
              <li className="flex font-bold items-center gap-1 text-blue-600">
                New Delhi
              </li>
            </ul>
          </div>
          <div className="hidden mt-4 md:block w-full">
            <FlightHotelFilter />
          </div>
        </div>

        <div className=" w-full md:w-3/4 right-main-content">
          <div className="flex justify-start ">
            <select
              name="sortBy"
              id="sortBy"
              className="border rounded px-3 py-2 text-sm focus:outline-none"
            >
              <option value="price-low-to-high">
                Sort By: Traveller Rating
              </option>
              <option value="price-low-to-high">
                Sort By: Price Low to High
              </option>
              <option value="price-high-to-low">
                Sort By: Price High to Low
              </option>
            </select>
          </div>

          <div className="swiper-section mt-3">
            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                1199: {
                  slidesPerView: 8,
                  spaceBetween: 40,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {swiperData.map((elm, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center flex-col gap-2">
                    <img
                      src={elm.swiperImg}
                      alt={elm.swiperCaption}
                      className="w-24 h-24 md:w-28 md:h-28 lg:w-20 lg:h-20 rounded-full object-cover"
                    />
                    <h3 className="font-bold text-xs md:text-sm">
                      {elm.swiperCaption}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="Activities mt-6 grid md:grid-cols-2 xl:grid-cols-1 gap-5">
            {ActivityFoodAndPrice.map((elm) => {
              return (
                <div className="border border-blue-300 p-4 rounded-lg xl:grid grid-cols-1 md:grid-cols-9 gap-5">
                  <div className="Img-box col-span-2 ">
                    <img
                      src={elm.myImg}
                      alt="Food Activity"
                      className="rounded w-full h-full object-cover"
                    />
                  </div>

                  <div className="content-box space-y-1 lg:space-y-3 col-span-5 mt-3 lg:mt-0">
                    <h3 className="font-bold text-sm md:text-md xl:text-xl">
                      {elm.heading}
                    </h3>
                    <h4 className="flex text-xs xl:text-base items-center gap-1 text-gray-400">
                      <IoLocationOutline /> <span>{elm.name}</span>
                    </h4>
                    <div className="flex gap-2 items-center text-xs xl:text-base">
                      <p className="flex items-center text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                      <span className="text-gray-400 ">673 Reviews</span>
                    </div>
                    <p className="text-gray-400 flex items-center gap-1 text-xs xl:text-base">
                      <IoTimeOutline /> <span>4 Hours</span>
                    </p>
                    <p className="border-t pt-3 text-xs  md:text-sm">
                      {elm.activityDescription.slice(0, 200)}
                    </p>
                  </div>

                  <div className="price-cancellation p-4 mt-5 xl:mt-0  lg:col-span-2 border-t md:border-t-0 md:border-l-2 border-blue-300 lg:p-4 xl:p-6 rounded-lg shadow-lg bg-white">
                    <div className="flex flex-row lg:flex-col gap-5 items-start xl:items-center h-full justify-between items-center lg:justify-center">
                      <div className="flex flex-col items-center">
                        <h4 className="flex items-center gap-2 font-bold text-sm md:xl xl:text-2xl text-blue-600">
                          <FaRupeeSign className="" />
                          <span>{elm.Price}</span>
                        </h4>
                        <p className="text-xs lg:text-base text-gray-500">
                          Per Person
                        </p>
                      </div>
                      <div className="space-y-3 text-center">
                        <p className="flex items-center justify-center font-semibold text-sm text-green-600">
                          <FaCheck className="text-green-600 mr-2" />
                          <span>Free Cancellation</span>
                        </p>
                        <Link
                          href="/ActivitiesComp/booknowtheseplaces"
                          className="font-bold text-white rounded-full bg-gradient-to-r from-red-500 to-red-700 xl:px-6 xl:py-2 shadow-md hover:from-red-600 hover:to-red-800 hover:shadow-lg transition-all duration-300 px-5 py-2 block"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
