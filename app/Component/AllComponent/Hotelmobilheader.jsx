"use client";
import React, { useState, useEffect } from "react";
import "react-day-picker/style.css";


import { useRouter } from "next/navigation";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";


   
import { FaCalendarWeek, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import TravellerDropDownhotels from "./TravellerDropDownhotels"
import AutoSearchcity from "./AutoSearchcity"


const Hotelmobileheader = () => {

    const route=useRouter()
    const localTimeZone = getLocalTimeZone();
    const [isVisible, setIsVisible] = useState("");
    const defalinfo=  JSON.parse(localStorage.getItem("hotelItems"));
  
    const [city,setcity]=useState((defalinfo && defalinfo.place) || {Name:"delhi",Code:"130443"})
    const currentDate = today(localTimeZone);
  const [arivitime,setarivetime]=useState(  new Date( (defalinfo && defalinfo.checkIntime) || Date.now()))
  const [checkOut,setcheckOut]=useState(  new Date( (defalinfo && defalinfo.checkouttime) ||arivitime))
  const [adultcount,setadultcount]=useState(1)
  const [childcount,setchildcount]=useState(0)
  const [numberOfRoom,setNumberOfRoom]=useState(1)
  
  
    const handleCitySelect = (city) => {
       setcity(city)
      
       setIsVisible(""); 
    };
  
  
  
  
    const handleVisibilityChange = (value) => {
      setIsVisible(value);
     
    };
  
  
    const handleClick = (option) => {
      
      setIsVisible(option);
  
    
    };
  
  
  const handelreturn=(newRange)=>{
    const date = new Date(newRange.year, newRange.month - 1, newRange.day);
  
     setarivetime(date);
    setIsVisible("")
  }
  const handelreturn2=(newRange)=>{
    const date = new Date(newRange.year, newRange.month - 1, newRange.day);
  
     setcheckOut(date);
    setIsVisible("")
  }
  
  
    
  
   
  
    const handelhotelSearch=()=>{
      localStorage.setItem("hotelItems",JSON.stringify({place:{Name:city.Name,Code:city.Code},checkIntime:arivitime,checkouttime:checkOut}))
      const offset = 6*60*55*1000;
      const check= new Date(arivitime);
     
      
      const r_localDate = new Date(check.getTime() );
      const checkindate = r_localDate.toISOString().slice(0, 10); 
  
  
      const checko= new Date(checkOut);
     
      
      const r_localDateo = new Date(checko.getTime());
      const checkoutdate = r_localDateo.toISOString().slice(0, 10);
  route.push(`/hotels/cityName=${city.Name}&citycode=${city.Code}&checkin=${checkindate}&checkout=${checkoutdate}&adult=${adultcount}&child=${childcount}&roomes=${numberOfRoom}&page=0&star=0`)
    }
  


  return (
    <>
     <div className=" flex flex-col   lg:hidden justify-end custom-color text-white md:px-10 lg:px-52  py-10">
        <div className="flex justify-end ">
          <span className=" text-lg mb-2 mr-5 font-bold ">
            Cheapest price Hotels. Guaranteed!!
          </span>
        </div>

        <div className=" flex justify-center gap-4 p-3  flex-col">
          <div
            className="  relative  "
           
          >
            <div
            className="flex flex-col bg-white h-full  px-4 py-3 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
            onClick={() => handleClick("city")} >
            <p className="text-sm text-[#7E7979] font-medium">
              Enter City Name or Specific hotel
            </p>
            <span className="text-3xl py-1 text-black font-bold textoverflowcss ">
               { city.Name}
            </span>
            <p className="text-black text-xs truncate">
             
            </p>
            </div>

            {isVisible=="city"  && (
              <div>
                <AutoSearchcity

                  value="From"
                  handleClosed={handleVisibilityChange}
                  onSelect={handleCitySelect}
                />
              </div>
            )}
          </div>

          <div  className="relative">
          <div className="flex flex-col w-full h-full  px-8 py-3 bg-white  border-r hover:bg-[#ECF5FE] cursor-pointer"  onClick={() => handleClick("date")}>
            <label className="text-sm text-[#7E7979] font-medium">
              Check-In
            </label>
            <div className="flex items-baseline text-black">
              <span className="text-3xl py-1 pr-1 text-black font-bold">
                {" "}
                {arivitime.getDate()}
              </span>
              <span className="text-sm font-semibold">
                {arivitime.toLocaleString("default", {
                                month: "short",
                              })}'
              </span>
              <span className="text-sm font-semibold">
                {" "}
                {arivitime.getFullYear()}
              </span>
              <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
            </div>
            </div>
          {isVisible=="date"  &&  <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-50 ">
                        <Calendar
                          aria-label="Select a date"
                          value={""}
                          onChange={handelreturn}
                          minValue={currentDate}
                        //   disabledDatesClassName=" opacity-100 "
                          className=""
                        />
                      </div>}
          </div>







          <div className="relative">
          <div className="flex flex-col w-full h-full  px-8 py-3 bg-white  border-r hover:bg-[#ECF5FE] cursor-pointer"  onClick={() => handleClick("checkout")}>
            <label className="text-sm text-[#7E7979] font-medium">
              Check-Out
            </label>
            <div className="flex items-baseline text-black">
              <span className="text-3xl py-1 pr-1 text-black font-bold">
                {" "}
                {checkOut ? checkOut.getDate():currentDate.day}
              </span>
              <span className="text-sm font-semibold">
                {" "}
                {checkOut ? checkOut.toLocaleString("default", {
                                month: "short",
                              }):currentDate.month}'
              </span>
              <span className="text-sm font-semibold">
              {checkOut ? checkOut.getFullYear():currentDate.year}
              </span>
              <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
            </div>
            
          </div>
          {isVisible=="checkout"  &&  <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-50">
                        <Calendar
                          aria-label="Select a date"
                          value={""}
                          onChange={handelreturn2}
                          minValue={currentDate}
                          disabledDatesClassName=" opacity-100"
                        />
                      </div>}

          
          </div>






          <div
           className="relative"
          >
            <div className="flex flex-col   px-8 py-3 bg-white border-r hover:bg-[#ECF5FE]"
           onClick={() => handleClick("other")}>
            <label className="text-sm text-[#7E7979] font-medium">
              Rooms & Guests
            </label>
            <div className="flex items-baseline text-black">
              <span className="text-3xl py-1 pr-1 text-black font-semibold">
                {numberOfRoom}
              </span>
              <span className="text-sm font-semibold flex items-center gap-1">
                Room
              </span>
              <span className="ml-2 text-3xl py-1 pr-1 text-black font-semibold">
                {adultcount}
              </span>
              <span className="text-sm font-semibold flex items-center gap-1">
                Guests <FaChevronDown />
              </span>
            </div>
            </div>
            {isVisible=="other" && (
             
                <TravellerDropDownhotels adultCount={adultcount} setAdultCount={setadultcount}  childCount={childcount} setchildcount={setchildcount}
                 numberOfRoom={numberOfRoom} setNumberOfRoom={setNumberOfRoom} setIsVisible={setIsVisible} />
             
            )}
          </div>
          <button
        onClick={()=>handelhotelSearch()}
            className="text-white flex items-center justify-center text-2xl font-bold px-10 py-4 primary-col rounded-br-lg rounded-tr-lg"
          >
            Search
          </button>
        </div>

        <div
          
          className="flex justify-end "
        >
          <Link
            href="/listofhotels"
            className=" text-xs mt-4 mr-5 font-bold bg-white text-blue-600 py-1 px-3  rounded-full "
          >
            List of hotels
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hotelmobileheader;
