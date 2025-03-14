"use client";
import React, { useEffect, useState } from "react";

import TravellerDropDownhotels from "../TravellerDropDownhotels";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AutoSearchcity from "../AutoSearchcity";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import Navbar from "../Navbar";
import { MdOutlineMeetingRoom } from "react-icons/md";

import { IoLocationSharp } from "react-icons/io5";
// import {  FaUserLarge, FaCalendarAlt } from "react-icons/fa6";
import TypeWriterHeaderEffect from "../TypeWriterHeaderEffect";


const HotelsComp = () => {
  const route = useRouter();
  const localTimeZone = getLocalTimeZone();
  const [isVisible, setIsVisible] = useState("");
  const defalinfo = JSON.parse(localStorage.getItem("hotelItems"));

  const [city, setcity] = useState(
    (defalinfo && defalinfo.place) || { Name: "delhi", Code: "130443" }
  );
  const currentDate = today(localTimeZone);
  const [arivitime, setarivetime] = useState(
    new Date((defalinfo && defalinfo.checkIntime) || Date.now())
  );
  const [checkOut, setcheckOut] = useState(
    new Date((defalinfo && defalinfo.checkouttime) || arivitime)
  );
  const [adultcount, setadultcount] = useState(1);
  const [childcount, setchildcount] = useState(0);
  const [numberOfRoom, setNumberOfRoom] = useState(1);

  const handleCitySelect = (city) => {
    setcity(city);

    setIsVisible("");
  };

  const handleVisibilityChange = (value) => {
    setIsVisible(value);
  };

  const handleClick = (option) => {
    setIsVisible(option);
  };

  const handelreturn = (newRange) => {
    const date = new Date(newRange.year, newRange.month - 1, newRange.day);
const nextdate=new Date(newRange.year, newRange.month - 1, newRange.day+1);
    setarivetime(date);
    setcheckOut(nextdate);

    setIsVisible("");
  };
  const handelreturn2 = (newRange) => {
    const date = new Date(newRange.year, newRange.month - 1, newRange.day);

    setcheckOut(date);
    setIsVisible("");
  };

  const handelhotelSearch = () => {
    localStorage.setItem(
      "hotelItems",
      JSON.stringify({
        place: { Name: city.Name, Code: city.Code },
        checkIntime: arivitime,
        checkouttime: checkOut,
      })
    );
    const offset = 6 * 60 * 55 * 1000;
    const check = new Date(arivitime);

    const r_localDate = new Date(check.getTime());
    const checkindate = r_localDate.toISOString().slice(0, 10);

    const checko = new Date(checkOut);

    const r_localDateo = new Date(checko.getTime());
    const checkoutdate = r_localDateo.toISOString().slice(0, 10);
    route.push(
      `/hotels/cityName=${city.Name}&citycode=${city.Code}&checkin=${checkindate}&checkout=${checkoutdate}&adult=${adultcount}&child=${childcount}&roomes=${numberOfRoom}&page=0&star=0`
    );
  };

  



  return (
    <div className="header    relative  md:px-5  lg:px-12 xl:px-24">
      <div className=" bg-[#002043] h-[12rem] absolute inset-0  -z-10" />
     
      <div className=" flex justify-start lg:justify-end">

      </div>
      
      <h5 className="text-white font-bold text-xl lg:text-2xl py-2 px-2 text-center md:text-start mt-4 lg:mt-6">
        {/* {headings[currentHeadingIndex]} */}
      </h5>
      <TypeWriterHeaderEffect/>
      <div className="flex flex-col bg-white lg:block rounded-lg  text-white   ">
        <div className="bg-gray-200 rounded-sm shadow ">
          <Navbar />
        </div>

        <div className="px-4 border-b-2 shadow-sm space-y-1 py-3">
  <div className="tabs FromDateDeapt flex flex-col lg:flex-row justify-between gap-4">
    
    {/* City Selection */}
    <div className="relative w-full lg:w-[27%]">
      <div
        onClick={() => handleClick("city")}
        className="relative rounded gap-3 h-full min-h-[3rem] flex items-center px-2 w-full border border-slate-400 text-black"
      >
        <IoLocationSharp className="text-xl" />
        <button className="absolute rounded-full text-white bg-gray-400 right-0 -top-[2px]">
         
        </button>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl text-black font-bold capitalize">
            {city.Name}
          </span>
        </div>
      </div>
      {isVisible == "city" && (
        <div>
          <AutoSearchcity
            value="From"
            handleClosed={handleVisibilityChange}
            onSelect={handleCitySelect}
            visible={setIsVisible}
          />
        </div>
      )}
    </div>

    {/* Check-in Date */}
    <div className="relative w-full lg:w-[20%] ">
      <div
        onClick={() => handleClick("date")}
        className="flex items-center gap-2 px-3 py-1 border-2 text-black border-slate-200 rounded-md"
      >
        {/* <FaCalendarAlt /> */}
        <div className="text-slate-400">
          {arivitime && (
            <>
              <div className="flex items-baseline text-black">
                <span className="text-xl md:text-2xl pr-1 font-bold">
                  {arivitime.getDate()}
                </span>
                <span className="text-sm font-semibold">
                  {arivitime.toLocaleString("default", { month: "short" })}
                </span>
                <span className="text-sm font-semibold">
                  {arivitime.getFullYear()}
                </span>
              </div>
              <p className="text-black text-xs">Check In</p>
            </>
          )}
        </div>
      </div>

      {isVisible == "date" && (
        <div
          className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10"
          onMouseLeave={() => setIsVisible("")}
        >
          <Calendar
            aria-label="Select a date"
            value=""
            onChange={handelreturn}
            minValue={currentDate}
          />
        </div>
      )}
    </div>

    {/* Check-out Date */}
    <div className="relative w-full lg:w-[20%]">
      <div
        onClick={() => handleClick("checkout")}
        className="flex items-center gap-2 px-3 py-1 border-2 text-black border-slate-200 rounded-md"
      >
        {/* <FaCalendarAlt /> */}
        <div className="text-slate-400">
          {checkOut && (
            <>
              <div className="flex items-baseline text-black">
                <span className="text-xl md:text-2xl pr-1 font-bold">
                  {checkOut.getDate()}
                </span>
                <span className="text-sm font-semibold">
                  {checkOut.toLocaleString("default", { month: "short" })}
                </span>
                <span className="text-sm font-semibold">
                  {checkOut.getFullYear()}
                </span>
              </div>
              <p className="text-black text-xs">Check Out</p>
            </>
          )}
        </div>
      </div>

      {isVisible == "checkout" && (
        <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
          <Calendar
            aria-label="Select a date"
            value=""
            onChange={handelreturn2}
            minValue={currentDate}
          />
        </div>
      )}
    </div>

    {/* Traveller & Room Selection */}
    <div className="relative w-full lg:w-[15%]">
      <div
        onClick={() => setIsVisible("roomcheck")}
        className="flex items-center justify-between px-3 py-1 border-2 text-black border-slate-200 rounded-md"
      >
        <div className="flex items-center gap-2">
          {/* <FaUserLarge /> */}
          <div>
            <h5 className="font-bold text-lg text-black">{adultcount + childcount}</h5>
            <p className="text-slate-400 text-xs">Travellers</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineMeetingRoom className="text-xl" />
          <div>
            <h5 className="font-bold text-lg text-black">{numberOfRoom}</h5>
            <p className="text-slate-400 text-xs">Rooms</p>
          </div>
        </div>
      </div>

      {isVisible == "roomcheck" && (
        <div
          className="absolute w-fit top-full p-4 bg-white rounded-lg shadow-md z-50"
          onMouseLeave={() => setIsVisible("")}
        >
           <div className="shadow-2xl rounded-md  bg-white mt-[10%]  flex flex-col gap-4 p-4">
                        <div className="flex gap-3 justify-between"><p className="text-nowrap">Adult Count </p> <div className="flex items-center gap-3"> <button className="px-2 border text-black" onClick={()=>{adultcount>1?setadultcount(adultcount-1):null}}>-</button> <p className=" px-2 border">{adultcount}</p> <button className="px-2 text-black border"onClick={()=>setadultcount(adultcount+1)} >+</button> </div> </div>
                        <div className="flex gap-3 justify-between"><p className="text-nowrap">Child Count </p> <div className="flex items-center gap-3"> <button className="px-2 border text-black" onClick={()=>{childcount>0?setchildcount(childcount-1):null}}>-</button> <p className=" px-2 border">{childcount}</p> <button className="px-2 text-black border"onClick={()=>setchildcount(childcount+1)} >+</button> </div> </div>
                        <div className="flex gap-3 justify-between"><p className="text-nowrap">Room Count </p> <div className="flex items-center gap-3"> <button className="px-2 border text-black" onClick={()=>{numberOfRoom>0?setNumberOfRoom(numberOfRoom-1):null}}>-</button> <p className=" px-2 border">{numberOfRoom}</p> <button className="px-2 text-black border"onClick={()=>setNumberOfRoom(numberOfRoom+1)} >+</button> </div>
                         </div>


                         </div>
        </div>
      )}
    </div>

    {/* Search Hotels Button */}
    <div className="flex justify-center items-center">
      <button
        onClick={() => handelhotelSearch()}
        className="bg-[#0A5EB0] w-full md:w-fit py-2 px-4 font-semibold text-lg rounded-md text-white"
      >
        Search Hotels
      </button>
    </div>
  </div>
</div>


        
        </div>

        
      </div>
  
  );
};

export default HotelsComp;
