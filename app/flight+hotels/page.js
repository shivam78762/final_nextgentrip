"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../Component/AllComponent/Header";
import CustomSlider from "../Component/AllComponent/Slider";
import FAQSection from "../Component/AllComponent/FAQ";
import Link from "next/link";
import FeaturedProperties from "../Component/AllComponent/FlightHotelBooking";
import FeaturedTwo from "../Component/AllComponent/FlightBookingSecond";
import MobileHeader from "../Component/AllComponent/MobileHeader";
import FLightHotelComp from "../Component/AllComponent/formMaincomp/FLightHotelComp";

const page = () => {
  const hotelData = [
    {
      image: "/images/bankok.webp",
      title: "NASA BANGKOK",
      location: "Bangkok",
      rating: "⭐⭐⭐⭐",
      reviews: "4.0/5 (4,106)",
      offer: "Limited Time Offer",
      price: "INR 1,290",
      prevPrice: "INR 1,370",
    },
    {
      image: "/images/bankok2.webp",
      title: "Royal Rattanakosin Hotel",
      location: "Bangkok",
      rating: "⭐⭐⭐⭐",
      reviews: "3.8/5 (2,134)",
      offer: "Free Cancellation",
      price: "INR 1,680",
      prevPrice: "INR 2,027",
    },
    {
      image: "/images/bankok.webp",
      title: "Ambassador Hotel Bangkok",
      location: "Bangkok",
      rating: "⭐⭐⭐⭐⭐",
      reviews: "4.0/5 (980)",
      offer: "Special Discount",
      price: "INR 3,017",
      prevPrice: "INR 3,313",
    },
    {
      image: "/images/bankok2.webp",
      title: "Sky Dome Resotel",
      location: "Bangkok",
      rating: "⭐⭐⭐⭐",
      reviews: "3.6/5 (50)",
      offer: "Free Cancellation",
      price: "INR 3,194",
      prevPrice: "INR 4,153",
    },
  ];

  return (
    <>
      <FLightHotelComp />
      <MobileHeader />
      <CustomSlider />

      <div className=" block md:flex gap-3 pb-10 px-5 lg:px-20">
        <img
          className="w-full md:w-2/3 h-60 rounded-lg"
          src="/images/banner-ballon.webp"
          alt=""
        />

        <div id="deals" className="relative mt-5 lg:mt-0">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link className="block" href="">
                <img
                  className="w-[425px] h-60 rounded-lg"
                  src="/images/1.webp"
                  alt=""
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="block" href="">
                <img
                  className="w-[425px] h-60 rounded-lg"
                  src="/images/2reward.webp"
                  alt=""
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="block" href="">
                <img
                  className="w-[425px] h-60 rounded-lg"
                  src="/images/3scanner.webp"
                  alt=""
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="bg-gray-200 py-10 px-5 lg:px-20">
        <div className="block lg:flex gap-5 items-center justify-between">
          <div className="flex-1 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="/images/download.webp"
                className="w-8 h-8 rounded-full inline-block mr-2 filter invert"
                alt="Download"
              />

              <span className="text-base font-semibold">Welcome Pack</span>
            </div>
            <div className="text-base text-center font-bold mb-4">
              Save Big on Your First Booking
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="bg-blue-500 text-white p-4 rounded-lg">
                <div className="flex items-center">
                  <img
                    src="/images/COMMON_PACKAGE.webp"
                    alt=""
                    className="w-16 h-16"
                  />
                  <div className="ml-4">
                    <div className="text-sm font-semibold">Total Savings</div>
                    <div className="text-lg font-bold">Up to INR 1,100 Off</div>
                  </div>
                </div>
                <div className=" flex items-center justify-center my-4">
                  <div className="bg-white flex-1 h-[1px]"></div>
                  <div className="text-center text-sm mx-2 font-semibold">
                    Limited-time Offer
                  </div>
                  <div className="bg-white flex-1 h-[1px]"></div>
                </div>
                <button className="bg-blue-600 text-white  text-base font-semibold py-2 px-4 rounded-lg">
                  Sign In & Claim All
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="block md:flex gap-3">
              {hotelData.map((hotel, index) => (
                <div className=" bg-white rounded-lg shadow-lg my-5 lg:my-0">
                  <div
                    key={index}
                    className="w-full md:w-64 rounded-tr-lg rounded-tl-lg  overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <div
                        className="relative h-40 rounded-lg bg-cover   bg-no-repeat bg-center transition-transform duration-500 ease-in-out hover:scale-110"
                        style={{ backgroundImage: `url(${hotel.image})` }}
                      ></div>

                      <div className="new-guests-hotel-image-local">
                        <div className="absolute bottom-2 left-2  text-white text-xs px-2 py-1 rounded">
                          {hotel.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg  bg-white">
                    <div className="text-base font-bold">{hotel.title}</div>
                    <div className="  mb-2">
                      <span className="text-yellow-400">{hotel.rating}</span>
                      <div className="text-sm font-semibold">
                        {hotel.reviews}
                      </div>
                    </div>
                    <div className="flex mt-5 gap-2 items-center justify-end">
                      <div className="text-sm  text-semibold bg-[#f94c8614] px-2 rounded text-red-500">
                        {hotel.offer}
                      </div>
                      <div className="discount-r relative text-sm  text-semibold rounded rounded-br-none bg-[#f94c86] px-1 text-white">
                        5% OFF
                      </div>
                    </div>
                    <div className="flex items-center  justify-end gap-2 mt-2">
                      <div className="text-sm text-gray-500 line-through">
                        {hotel.prevPrice}
                      </div>
                      <div className="text-lg font-bold">{hotel.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 lg:px-20 py-10">
        <FeaturedProperties />
      </div>
      <div className="px-0 lg:px-20 pb-10">
        <FeaturedTwo />
      </div>
      <FAQSection />
    </>
  );
};

export default page;
