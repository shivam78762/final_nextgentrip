"use client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getBuscityapi } from "../../Store/slices/busSearchSlice";
import { select } from "@nextui-org/react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { getbuses } from "../../Store/slices/busslices";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaCalendarWeek, FaChevronDown, FaCalendarAlt, FaUserLarge } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import TypeWriterHeaderEffect from "../TypeWriterHeaderEffect";





const BusComp = () => {
  const [selected, setselected] = useState("")
  const defaultstore = JSON.parse(localStorage.getItem("busSearch"))

  const [fromCity, setFromCity] = useState((defaultstore && defaultstore.fromCity) || {
    CityId: 1354,
    CityName: "Delhi",

  });
  const [toCity, setToCity] = useState((defaultstore && defaultstore.toCity) || {
    CityId: 3534,
    CityName: "Mumbai",

  });
  const localTimeZone = getLocalTimeZone();
  const currentDate = today(localTimeZone);

  const [pickupdate, setpickdate] = useState((defaultstore && new Date(defaultstore.pickupdate)) || new Date(Date.now()))

  const route = useRouter()

  const handleRangeChange = (newRange) => {
    const date = new Date(newRange.year, newRange.month - 1, newRange.day + 1);
    1
    setpickdate(date);
    setselected("");
  };

  const handelSearch = () => {
    localStorage.setItem("busSearch", JSON.stringify({ fromCity, toCity, pickupdate }))
    const newdate = pickupdate.toISOString().split('T')[0];
    route.push(`/buses/DateOfJourney=${newdate}&OriginId=${fromCity.CityId}&DestinationId=${toCity.CityId}`)

  }










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



  const futureDate = new Date();



  const [isVisible, setIsVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();
  const state = useSelector(state => state.busCityslice)


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
  const [searchparam, setsearchparam] = useState("")
  const handelBusSearch = (e) => {

    setsearchparam(e.target.value)
  }
  useEffect(() => {
    const intervels = setTimeout(() => {
      dispatch(getBuscityapi(searchparam))
    }, 500);
    return () => clearTimeout(intervels)
  }, [searchparam])


  return (
    <>
      {/* <div className="flex flex-col  lg:block custom-color text-white md:px-10 lg:px-52  py-10">
    
              <span className=" text-lg mb-2 mr-2 font-bold  rounded-full ">Online Bus Tickets</span>
        
                <div className="bg-white custom-shadow grid grid-cols-4 gap-0 border-gray-300">
                
                <div className="relative">
                  <div
                    className="flex flex-col bg-white relative px-4 py-3 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                    onClick={() => setselected("from")}
                  >
                    <p className="text-sm text-[#7E7979] font-medium">From</p>
                    <span className="text-3xl py-1 text-black font-bold">
                      {fromCity.CityName}
                    </span>
                  
                  </div>

  { selected=="from" && 
   <div className="absolute top-full bg-white w-full z-30">
<input type="text" value={searchparam} className="w-full text-black" placeholder="Search city..." onChange={(e)=>handelBusSearch(e)}  />
<div className="h-32 overflow-hidden overflow-y-scroll">
{state && !state.isLoading && state.info && state.info.BusCities &&state.info.BusCities.map((item)=>{
  return(
    <p className=" border-b-2 p-1 cursor-pointer" onClick={()=>{setFromCity({
      CityId: item.CityId,
      CityName: item.CityName,
    }),setselected("to"),setsearchparam("")}}>{item.CityName}</p>
  )
})}</div>
     </div>}


                  </div>


                  <div className="relative">
                  <div
                    className="flex flex-col px-4 py-3 relative bg-white border-r hover:bg-[#ECF5FE]"
                    onClick={() => setselected("to")}
                  >
                    <label className="text-sm text-[#7E7979] font-medium">
                      To
                    </label>
                    <span className="text-3xl py-1 text-black font-bold">
                      {toCity.CityName}
                    </span>
                   
                  </div>
                  { selected=="to" && 
   <div className="absolute top-full bg-white w-full z-30">
<input type="text" value={searchparam} className="w-full text-black" placeholder="Search city..." onChange={(e)=>handelBusSearch(e)}  />
<div className="h-32 overflow-hidden overflow-y-scroll">
{state && !state.isLoading && state.info && state.info.BusCities &&state.info.BusCities.map((item)=>{
  return(
    <p className=" border-b-2 p-1 cursor-pointer" onClick={()=>{setToCity({
      CityId:item.CityId,
      CityName:item.CityName,
    }),setselected("date") ,setsearchparam("")   }}>{item.CityName}</p>
  )
})}</div>
     </div>}
 
     </div>




<div className="relative">
                  <div className="flex flex-col  px-4 py-3 bg-white  border-r hover:bg-[#ECF5FE]" onClick={()=>setselected("date")}>
                    <label className="text-sm text-[#7E7979] font-medium">
                      Departure Date
                    </label>
                    <div className="flex items-baseline text-black">
                      <span className="text-3xl py-1 pr-1 text-black font-bold">
                        {" "}
                        {pickupdate.getDate()-1}
                      </span>
                      <span className="text-sm font-semibold">
                        {pickupdate.toLocaleString('en-US', { month: 'short' })}'
                      </span>
                      <span className="text-sm font-semibold">
                        {" "}
                        {pickupdate.getFullYear()}
                      </span>
                      <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                    </div>
                  
                  </div>
                  { selected === "date" && (
                      <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                        <Calendar
                          aria-label="Select a date"
                          value={""}
                          onChange={handleRangeChange}
                          minValue={currentDate}
                          
                        />
                      </div>
                    )}
            </div>     
                  <button onClick={handelSearch} className="text-white flex items-center justify-center text-2xl font-bold p-4 primary-col rounded-br-lg rounded-tr-lg">
                    Search
                  </button>
                </div>
                </div> */}





      <div className="header    relative  md:px-5  lg:px-12 xl:px-24  pt-10 md:pt-14">
        <div className=" bg-[#002043] h-[12rem] absolute inset-0  -z-10" />

        <TypeWriterHeaderEffect />

        <div className="flex flex-col bg-white lg:block rounded-lg  text-white   ">
          <div className="bg-gray-200 rounded-sm shadow ">
            <Navbar/>

          </div>

          <div className=" px-4 border-b-2 shadow-sm  space-y-1 py-3 ">
            <div className="tabs FromDateDeapt grid lg:grid-cols-4 gap-4 ">
              <div className="relative">
                <div
                  onClick={() => setselected("from")}
                  className="1stInput relative rounded gap-3 h-full py-1 lg:py-0 flex items-center px-2 w-full truncate  border border-slate-400 text-black"
                >
                  <IoLocationSharp className="text-xl" />

                  <button
                    className="absolute rounded-full text-white  bg-gray-400 right-0 top-0 bg"
                  >
          
                  </button>
                  <div className="flex flex-col">
                    <span className="text-[22px] md:text-2xl text-black font-bold">
                      {fromCity.CityName}
                    </span>
                  </div>
                </div>
                {selected === "from" && (
  <div className="absolute top-full bg-white w-full z-30 shadow-lg rounded-md border border-gray-200">
    <input
      type="text"
      value={searchparam}
      className="w-full text-black p-2 border-b border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Search city..."
      onChange={(e) => handelBusSearch(e)}
    />
    <div className="max-h-40 overflow-y-auto">
      {state &&
        !state.isLoading &&
        state.info &&
        state.info.BusCities &&
        state.info.BusCities.map((item) => {
          return (
            <p
              key={item.CityId}
              className="p-2 cursor-pointer hover:bg-blue-100 transition duration-200"
              onClick={() => {
                setFromCity({
                  CityId: item.CityId,
                  CityName: item.CityName,
                });
                setselected("to");
                setsearchparam("");
              }}
            >
              {item.CityName}
            </p>
          );
        })}
    </div>
  </div>
)}

              </div>


              <div className="relative">
                <div
                  onClick={() => setselected("to")}
                  className="1stInput relative rounded 	 gap-3 h-full  flex items-center py-1 lg:py-0 px-2 w-full truncate  border border-slate-400 text-black"
                >
                  <IoLocationSharp className="text-xl" />

                  <button
                    className="absolute rounded-full text-white  bg-gray-400 right-0 top-0 bg"
                  >
                    {" "}
                   
                  </button>
                  <div className="flex flex-col">
                    <span className="text-[22px] md:text-2xl text-black font-bold">
                      {toCity.CityName}
                    </span>
                  </div>
                </div>
                {selected == "to" &&
                  <div className="absolute top-full bg-white w-full z-30">
                    <input type="text" value={searchparam} className="w-full text-black" placeholder="Search city..." onChange={(e) => handelBusSearch(e)} />
                    <div className="h-32 overflow-hidden overflow-y-scroll">
                      {state && !state.isLoading && state.info && state.info.BusCities && state.info.BusCities.map((item) => {
                        return (
                          <p className=" border-b-2 p-1 cursor-pointer" onClick={() => {
                            setToCity({
                              CityId: item.CityId,
                              CityName: item.CityName,
                            }), setselected("date"), setsearchparam("")
                          }}>{item.CityName}</p>
                        )
                      })}</div>
                  </div>}
              </div>







              <div className="relative">
                <div
                  onClick={() => setselected("date")}
                  className="flex items-center  gap-2 px-3 py-1 border-2 text-black border-slate-200  rounded-md"
                >
                  <FaCalendarAlt className="" />
                  <div className="text-slate-400">
                    <div className="flex items-baseline text-black">
                      <span className="text-3xl py-1 pr-1 text-black font-bold">
                        {" "}
                        {pickupdate.getDate() - 1}
                      </span>
                      <span className="text-sm font-semibold">
                        {pickupdate.toLocaleString('en-US', { month: 'short' })}'
                      </span>
                      <span className="text-sm font-semibold">
                        {" "}
                        {pickupdate.getFullYear()}
                      </span>
                      {/* <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" /> */}
                    </div>
                  </div>
                </div>

                {selected === "date" && (
                  <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                    <Calendar
                      aria-label="Select a date"
                      value={""}
                      onChange={handleRangeChange}
                      minValue={currentDate}

                    />
                  </div>
                )}
              </div>




              <div className="flex justify-center items-center">
                <button
                  onClick={handelSearch}
                  className="bg-[#0A5EB0] w-full md:w-fit  py-2 px-3  font-semibold  text-lg rounded-md  text-white "
                >
                  Search Bus
                </button>
              </div>
            </div>


          </div>
        </div>


      </div>









    </>
  );
};

export default BusComp;
