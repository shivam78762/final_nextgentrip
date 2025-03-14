"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCalendarWeek, FaChevronDown } from "react-icons/fa";
import AutoSearch from "../AutoSearch";
import TravellerDropdown from "../TravellerDropdown";
import Link from "next/link";

const FLightHotelComp = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const handleCheckboxChange = (event) => {
    // Your logic here for handling checkbox change
  };

  const [fromCity, setFromCity] = useState({
    code: "DEL",
    name: "Delhi",
    airport: "Indira Gandhi International Airport",
  });
  const [toCity, setToCity] = useState({
    code: "MUM",
    name: "Mumbai",
    airport: "Chhatrapati Shivaji Maharaj International Airport",
  });

  const handleCitySelect = (city) => {
    if (selectedOption === "from") {
      setFromCity(city);
    } else if (selectedOption === "to") {
      setToCity(city);
    }
    setIsVisible(false); // Hide the dropdown after selection
  };

  const handleVisibilityChange = (value) => {
    setIsVisible(value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Array of day names
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDateComponents = (date) => {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: String(date.getDate()).padStart(2, "0"),
      dayOfWeek: daysOfWeek[date.getDay()],
    };
  };

  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + 3);

  const currentDateComponents = getDateComponents(currentDate);
  const futureDateComponents = getDateComponents(futureDate);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const handleClick = (option) => {
    setSelectedOption(option);
    setIsVisible(true);

    switch (option) {
      case "from":
        handleFromClick();
        break;
      case "to":
        handleToClick();
        break;
      case "traveller":
        handleToClick(); // Add the appropriate handler for traveller
        break;
      default:
       
    }
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFromClick = () => {
    // Your logic for 'From' click
    
  };

  const handleToClick = () => {
    // Your logic for 'To' click
  
  };

  return (
    <>
      <div className="flex flex-col  lg:block custom-color text-white md:px-10 lg:px-52  py-10">
        <div>
          <div className="flex justify-between">
            <div className="tabs flex gap-2 pb-2">
              <button
                className={`px-4 py-1 text-xs font-bold rounded-3xl ${
                  activeTab === 1 ? "bg-white text-[#1853a2]" : ""
                } transition-colors duration-300 ease-in-out`}
                onClick={() => handleTabClick(1)}
              >
                One Way
              </button>
              <button
                className={`px-4 py-1 text-xs font-bold rounded-3xl ${
                  activeTab === 2 ? "bg-white text-[#1853a2]" : ""
                } transition-colors duration-300 ease-in-out`}
                onClick={() => handleTabClick(2)}
              >
                Round Trip
              </button>
            </div>
              <span className=" text-lg mb-2 mr-5 font-bold ">
              Book a Flight and Save upto 40%
              </span>
          </div>

          <div className="tab-content">
            {activeTab === 1 && (
              <>
                <div className="bg-white custom-shadow grid grid-cols-6 gap-0 border-gray-300">
                  <div
                    className="flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                    onClick={() => handleClick("from")}
                  >
                    <p className="text-sm text-[#7E7979] font-medium">Departure Airport</p>
                    <span className="text-3xl py-1 text-black font-bold">
                      {fromCity.name}
                    </span>
                    <p className="text-black text-xs truncate">
                      [{fromCity.code}] {fromCity.airport}
                    </p>
                    {isVisible && selectedOption === "from" && (
                      <div ref={dropdownRef}>
                        <AutoSearch
                          value="From"
                          handleClosed={handleVisibilityChange}
                          onSelect={handleCitySelect}
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className="flex flex-col px-4 py-2 relative bg-white border-r hover:bg-[#ECF5FE]"
                    onClick={() => handleClick("to")}
                  >
                    <label className="text-sm text-[#7E7979] font-medium">
                    Destination Airport
                    </label>
                    <span className="text-3xl py-1 text-black font-bold">
                      {toCity.name}
                    </span>
                    <p className="text-black text-xs truncate">
                      [{toCity.code}] {toCity.airport}
                    </p>
                    {isVisible && selectedOption === "to" && (
                      <div ref={dropdownRef}>
                        <AutoSearch
                          value="To"
                          handleClosed={handleVisibilityChange}
                          onSelect={handleCitySelect}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]">
                    <label className="text-sm text-[#7E7979] font-medium">
                    Travel Date
                    </label>
                    <div className="flex items-baseline text-black">
                      <span className="text-3xl py-1 pr-1 text-black font-bold">
                        {" "}
                        {currentDateComponents.day}
                      </span>
                      <span className="text-sm font-semibold">
                        {months[currentDateComponents.month]}'
                      </span>
                      <span className="text-sm font-semibold">
                        {" "}
                        {currentDateComponents.year}
                      </span>
                      <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                    </div>
                    <p className="text-black text-xs">
                      {currentDateComponents.dayOfWeek}
                    </p>
                  </div>
                  <div className="flex flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]">
                    <label className="text-sm text-[#7E7979] font-medium">
                      Return Date
                    </label>
                    <div className="flex items-baseline text-black">
                      <span className="text-3xl py-1 pr-1 text-black font-bold">
                        {" "}
                        {futureDateComponents.day}
                      </span>
                      <span className="text-sm font-semibold">
                        {" "}
                        {months[futureDateComponents.month]}'
                      </span>
                      <span className="text-sm font-semibold">
                        {futureDateComponents.year}
                      </span>
                      <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                    </div>
                    <p className="text-black text-xs">
                      {futureDateComponents.dayOfWeek}
                    </p>
                  </div>
                  <div
                    className="flex flex-col relative  px-4 py-2 bg-white border-r hover:bg-[#ECF5FE]"
                    onClick={() => handleClick("traveller")}
                  >
                    <label className="text-sm text-[#7E7979] font-medium">
                      Travelers
                    </label>
                    <div className="flex items-center text-black">
                      <span className="text-3xl py-1 pr-1 text-black font-bold">
                        1
                      </span>
                      <span className="text-sm font-semibold flex items-center gap-1">
                        Traveller(s) <FaChevronDown />
                      </span>
                    </div>
                    <p className="text-black text-xs">Economy</p>

                    {isVisible && selectedOption === "traveller" && (
                      <div ref={dropdownRef}>
                        <TravellerDropdown value="From" />
                      </div>
                    )}
                  </div>

                  
                  <Link
                    href="/flightHotelSearch"
                    className="text-white flex items-center justify-center text-2xl font-bold p-4 primary-col rounded-br-lg rounded-tr-lg"
                  >
                    Search
                  </Link>
                </div>
              </>
            )}
          </div>

          <div className="tab-content">
            {activeTab === 2 && (
              <div className="bg-white custom-shadow grid grid-cols-6 gap-0 border-gray-300">
                <div
                  className="flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                  onClick={() => handleClick("from")}
                >
                  <p className="text-sm text-[#7E7979] font-medium">From</p>
                  <span className="text-3xl py-1 text-black font-bold">
                    {fromCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{fromCity.code}] {fromCity.airport}
                  </p>
                  {isVisible && selectedOption === "from" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        value="From"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>

                <div
                  className="flex flex-col px-4 py-2 relative bg-white border-r hover:bg-[#ECF5FE]"
                  onClick={() => handleClick("to")}
                >
                  <label className="text-sm text-[#7E7979] font-medium">
                    To
                  </label>
                  <span className="text-3xl py-1 text-black font-bold">
                    {toCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{toCity.code}] {toCity.airport}
                  </p>
                  {isVisible && selectedOption === "to" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        value="To"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Departure Date
                  </label>
                  <div className="flex items-baseline text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">
                      {" "}
                      {currentDateComponents.day}
                    </span>
                    <span className="text-sm font-semibold">
                      {months[currentDateComponents.month]}'
                    </span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {currentDateComponents.year}
                    </span>
                    <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                  </div>
                  <p className="text-black text-xs">
                    {currentDateComponents.dayOfWeek}
                  </p>
                </div>
                <div className="flex flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Return Date
                  </label>
                  <div className="flex items-baseline text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">
                      {" "}
                      {futureDateComponents.day}
                    </span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {months[futureDateComponents.month]}'
                    </span>
                    <span className="text-sm font-semibold">
                      {futureDateComponents.year}
                    </span>
                    <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                  </div>
                  <p className="text-black text-xs">
                    {futureDateComponents.dayOfWeek}
                  </p>
                </div>
                <div
                    className="flex flex-col relative  px-4 py-3 bg-white border-r hover:bg-[#ECF5FE]"
                    onClick={() => handleClick("traveller")}
                  >
                    <label className="text-sm text-[#7E7979] font-medium">
                    Rooms & Guests
                    </label>
                    <div className="flex items-baseline text-black">
                      <span className="text-3xl py-1 pr-1 text-black font-semibold">
                        1
                      </span>
                      <span className="text-sm font-semibold flex items-center gap-1">
                        Room 
                      </span>
                      <span className="ml-2 text-3xl py-1 pr-1 text-black font-semibold">
                    2
                      </span>
                      <span className="text-sm font-semibold flex items-center gap-1">
                        Guests <FaChevronDown /> 
                      </span>
                    </div>

                    {isVisible && selectedOption === "traveller" && (
                      <div ref={dropdownRef}>
                        <TravellerDropdown value="From" />
                      </div>
                    )}
                  </div>
                
                <Link
                  href=""
                  className="text-white flex items-center justify-center text-2xl font-bold p-4 primary-col  rounded-br-lg rounded-tr-lg"
                >
                  Search
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FLightHotelComp;
