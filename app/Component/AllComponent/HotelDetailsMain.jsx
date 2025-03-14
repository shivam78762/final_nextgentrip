"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoMdAirplane } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChooseFlightHotelDetailchild from "../AllComponent/HotelDetails";

export default function HotelDetails({ onClick }) {

  const [MdAirlineStops, setAirList] = useState(false);
  const getChildValue = () => {
    setAirList(false);
  };

  const Services = [
    "Ironing facilities",
    "Luggage Storage",
    "Restaurant",
    "Internet Facility / Cyber Cafe",
    "Front Desk",
    "Free Wi-Fi",
    "Swimming Pool",
    "Fitness Center",
    "24-hour Room Service",
    "Bar/Lounge",
    "Spa and Wellness Center",
    "Concierge Service",
    "Laundry Service",
    "Air Conditioning",
    "Parking",
    "Airport Shuttle",
    "Non-smoking Rooms",
    "Wheelchair Accessibility",
    "Pets Allowed",
    "Daily Housekeeping",
    "Meeting/Banquet Facilities",
    "Business Center",
    "Breakfast Buffet",
    "Hot Tub",
    "Library",
    "On-site ATM",
    "Gift Shop",
  ];

  return (
    <>
      <div className="w-full lg:w-[80%] mx-auto text-black bg-gray-100 px-5 py-4  h-auto rounded-2xl cus">
        <div className="flex flex-col sm:flex-row justify-between items-start md:items-center border-b-2 border-blue-200 pb-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">Trident Nariman Point</h3>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <IoLocationOutline />
              <span className="text-gray-700">Marine Drive-Nariman Point</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button onClick={() => onClick(false)}>
              <RxCross2 className="font-bold text-lg" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 mt-5 gap-x-5">
          <div className="col-span-1 md:col-span-2">
            <div className="Img-price-box space-y-5">
              <div className="p-3 border-2 rounded-lg">
                <img
                  src="/images/outdoor-swimmin.webp"
                  alt="Hotel"
                  className="rounded-lg w-full h-[30vh] md:h-[50vh] object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold flex items-center text-xl md:text-2xl">
                  <FaRupeeSign />
                  <span>17704</span>
                </h3>
                <p className="text-xs md:text-sm">per Person</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-6">
            <div className="space-y-6 h-full overflow-y-scroll max-h-[50vh] md:max-h-[60vh] pr-2  custom-scrollbar">
              <div className="Content-box p-3 border-2 rounded-lg">
                <div className="space-y-3">
                  <h2 className="font-bold text-base md:text-lg">Overview</h2>
                  <p className="text-sm md:text-base">
                    Trident Nariman Point is a luxurious 5-star hotel located in
                    the heart of Mumbai's bustling business district, offering
                    breathtaking views of the Arabian Sea and the iconic Marine
                    Drive. Situated at Nariman Point, this hotel is renowned for
                    its elegant design, impeccable service, and world-class
                    services, making it an ideal choice for travelers.
                  </p>
                </div>
              </div>

              <div className="Content-box p-3 border rounded-lg">
                <div className="space-y-3">
                  <h2 className="font-bold text-base md:text-lg">Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {Services.map((elm, index) => (
                      <h3
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <FaCheck className="text-green-400 text-xs" />
                        {elm}
                      </h3>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="below-btns-and-calendar flex flex-col items-end justify-end">
              <div className="bg-gray-200 rounded flex items-center gap-3 px-3 py-2 my-2">
                <div className="flex gap-2 items-center text-xs">
                  <CiCalendar />
                  13 Sept 2024 (1 Night(s))
                </div>
                <div
                  onClick={() => setAirList(true)}
                  className="flex gap-2 items-center cursor-pointer text-xs border-l-2 border-blue-600 px-2"
                >
                  <IoMdAirplane />
                  Flights included
                  <button>
                    <MdKeyboardArrowDown />
                  </button>
                </div>
              </div>
              <div>
                <button className="px-6 md:px-8 py-2 bg-orange-500 rounded-full text-white">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {MdAirlineStops && (
        <div className="fixed inset-0 flex z-[9999] items-center justify-center bg-black bg-opacity-50">
          <ChooseFlightHotelDetailchild getChildValue={getChildValue} />
        </div>
      )}
    </>
  );
}
