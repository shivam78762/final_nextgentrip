"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaTag } from "react-icons/fa";
import { FaStarFill } from "react-icons/fa";

const hotels = [
  // Dubai Hotels
  {
    id: 1,
    name: "Best Western Plus Pearl Creek",
    image: "/images/booking1.webp",
    rating: 4.0,
    reviews: 224,
    price: "INR 3,593",
    tag: "Free Cancellation",
    location: "Dubai",
  },
  {
    id: 2,
    name: "Ramada Plaza by Wyndham Dubai Deira",
    image: "/images/booking1.webp",
    rating: 4.2,
    reviews: 274,
    price: "INR 2,138",
    tag: "Special Discount",
    location: "Dubai",
  },
  {
    id: 3,
    name: "Golden Sands Hotel Apartments",
    image: "/images/booking1.webp",
    rating: 4.1,
    reviews: 276,
    price: "INR 4,028",
    tag: "Limited Time Offer",
    location: "Dubai",
  },
  {
    id: 4,
    name: "Super 8 by Wyndham Dubai Deira",
    image: "/images/booking1.webp",
    rating: 4.3,
    reviews: 248,
    price: "INR 3,277",
    tag: "Special Discount",
    location: "Dubai",
  },
  // Hong Kong Hotels
  {
    id: 5,
    name: "The Peninsula Hong Kong",
    image: "/images/booking1.webp",
    rating: 4.8,
    reviews: 320,
    price: "HKD 2,500",
    tag: "Luxury",
    location: "Hong Kong",
  },
  {
    id: 6,
    name: "The Langham Hong Kong",
    image: "/images/booking1.webp",
    rating: 4.7,
    reviews: 210,
    price: "HKD 1,800",
    tag: "Special Discount",
    location: "Hong Kong",
  },
  {
    id: 7,
    name: "Mandarin  Hong Kong",
    image: "/images/booking1.webp",
    rating: 4.9,
    reviews: 400,
    price: "HKD 3,000",
    tag: "Exclusive Offers",
    location: "Hong Kong",
  },
  {
    id: 8,
    name: "InterContinental Hong Kong",
    image: "/images/booking1.webp",
    rating: 4.6,
    reviews: 180,
    price: "HKD 2,200",
    tag: "Best Value",
    location: "Hong Kong",
  },
];

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState("Dubai");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter hotels based on active tab
  const filteredHotels = hotels.filter((hotel) => hotel.location === activeTab);

  return (
    <div className="bg-cover bg-center w-full bg-image">
      <div className="recommended-module-title text-xl font-bold mb-2 ">
        Featured Properties
      </div>
      <div className="text-sm font-semibold flex space-x-4 ">
        <div className="recommend-module-usp-item flex items-center space-x-2">
          <img src="/images/price.webp" alt="icon" width={24} height={24} />
          <div className="recommend-module-usp-text-con">
            <span className="recommend-module-usp-text">We Price Match</span>
          </div>
        </div>
        <div className=" flex items-center space-x-2">
          <Image
            src="/images/booking2.webp"
            alt="icon"
            width={24}
            height={24}
          />
          <div className="recommend-module-usp-text-con">
            <span className="recommend-module-usp-text">
              Hotel Booking Guarantee
            </span>
          </div>
        </div>
        <div className="recommend-module-usp-item flex items-center space-x-2">
          <Image src="/images/hotel.webp" alt="icon" width={24} height={24} />
          <div className="recommend-module-usp-text-con">
            <span className="recommend-module-usp-text">
              Hotel Stay Guarantee
            </span>
          </div>
        </div>
      </div>
      <div className="js-tab-ajax-switch new-theme">
        <div className="tab-con my-4">
          <div className="js-tile-tab">
            <div className="gap-2 text-sm font-semibold flex">
              <span
                onClick={() => handleTabClick("Dubai")}
                className={`js-tab-item px-4 py-2 cursor-pointer rounded-sm  ${
                  activeTab === "Dubai"
                    ? "primary-col text-white"
                    : "bg-white text-black"
                }`}
              >
                Dubai
              </span>
              <span
                onClick={() => handleTabClick("Hong Kong")}
                className={`js-tab-item px-4 py-2 cursor-pointer rounded-sm  ${
                  activeTab === "Hong Kong"
                    ? "primary-col text-white"
                    : "bg-white text-black"
                }`}
              >
                Hong Kong
              </span>
            </div>
          </div>
        </div>
        <div className="content-con">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="w-full lg:w-64 rounded-tr-lg rounded-tl-lg overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <div
                      className="relative h-40 rounded-tl-lg rounded-tr-lg bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out hover:scale-110"
                      style={{ backgroundImage: `url(${hotel.image})` }}
                    ></div>
                  </div>
                  <div className="p-4 rounded-bl-lg rounded-br-lg bg-white">
                    <div className="text-base font-bold">
                      {hotel.name}
                      <div className="flex gap-1 my-2 text-[#ff9500]">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${
                              i < Math.floor(hotel.rating)
                                ? "text-[#ff9500]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="c-hot-hotel-item-v2__review flex items-center mt-2">
                      <div className="c-hot-hotel-item-v2__score text-sm">
                        <span>{hotel.rating.toFixed(1)}</span>
                        <span>/</span>
                        <span>5</span>
                      </div>
                      <div className="hotel-comments text-sm ml-2">
                        {hotel.reviews} reviews
                      </div>
                    </div>
                    <div className="flex mt-5 gap-2 items-center justify-start">
                      <div className="text-sm flex items-center gap-2 text-semibold bg-[#f94c8614] px-2 py-1 rounded text-red-500">
                        <FaTag /> {hotel.tag}
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2 mt-2">
                      <div className="text-sm text-gray-500">From</div>
                      <div className="text-lg font-bold">{hotel.price}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center">
                No hotels available
              </div>
            )}

            <Link href="" className="relative rounded-lg overflow-hidden">
              <div className="rmmc-bg-full rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"></div>
              <div
                className="absolute rounded-lg z-10 bottom-0 p-5"
                style={{
                  background:
                    "linear-gradient(180deg,transparent,#5a9aa5 48px,#5a9aa5)",
                }}
              >
                <div className="text-white text-center font-bold text-lg mb-2">
                  Discover great deals on hotels around the world
                </div>
                <button className="bg-[#2196F3] font-bold text-base text-white w-[80%] py-2 px-4 rounded-lg mx-5">
                  Go Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
