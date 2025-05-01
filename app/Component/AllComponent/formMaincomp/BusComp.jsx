

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
import MiniNav from "../MiniNav";




const BusComp = () => {
  const [selected, setselected] = useState("")
  const defaultstore = JSON.parse(localStorage.getItem("busSearch"))
  const [loading, setloading] = useState(true)
  const [isVisible, setIsVisible] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [fromCity, setFromCity] = useState((defaultstore && defaultstore.fromCity) || {
    CityId: 9573,
    CityName: "Hyderabad",

  });
  const [toCity, setToCity] = useState((defaultstore && defaultstore.toCity) || {
    CityId: 8463,
    CityName: "Bengaluru",

  });
  const localTimeZone = getLocalTimeZone();
  const currentDate = today(localTimeZone);

  const [pickupdate, setpickdate] = useState((defaultstore && new Date(defaultstore.pickupdate)) || new Date(Date.now()))

  const route = useRouter()

  const handleRangeChange = (newRange) => {
    const date = new Date(newRange.year, newRange.month - 1, newRange.day + 1);

    setpickdate(date);
    setselected("");
  };


  const [searchparam, setsearchparam] = useState("")


  const handelSearch = () => {
    localStorage.setItem("busSearch", JSON.stringify({ fromCity, toCity, pickupdate }))
    const newdate = pickupdate.toISOString().split('T')[0];
    route.push(`/buses/DateOfJourney=${newdate}&OriginId=${fromCity.CityId}&DestinationId=${toCity.CityId}&adult=${adultCount}`)

  }

  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getBuscityapi())

  }, [])



  const handelfromcity = (data) => {
    setFromCity(data)

    setselected("to"), setsearchparam("")
  }
  const handeltocity = (data) => {
    setToCity(data)

    setselected("date"), setsearchparam("")
  }















  const TravellerDropdown = ({ adultCount, setAdultCount, childCount, setChildCount, infantCount, setInfantCount }) => {
    return (
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <span>Adults</span>
          <div className="flex items-center gap-2">
            <button onClick={() => setAdultCount(Math.max(1, adultCount - 1))}>-</button>
            <span>{adultCount}</span>
            <button onClick={() => setAdultCount(adultCount + 1)}>+</button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Children</span>
          <div className="flex items-center gap-2">
            <button onClick={() => setChildCount(Math.max(0, childCount - 1))}>-</button>
            <span>{childCount}</span>
            <button onClick={() => setChildCount(childCount + 1)}>+</button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span>Infants</span>
          <div className="flex items-center gap-2">
            <button onClick={() => setInfantCount(Math.max(0, infantCount - 1))}>-</button>
            <span>{infantCount}</span>
            <button onClick={() => setInfantCount(infantCount + 1)}>+</button>
          </div>
        </div>
      </div>
    );
  };



  return (
    <>





      <div className="header    relative  md:px-5  lg:px-12 xl:px-24  pt-10 md:pt-14">
        <div className=" bg-[#002043] h-[12rem] absolute inset-0  -z-10"></div>

        <TypeWriterHeaderEffect />
        <div className="flex flex-col bg-white lg:block rounded-lg  text-white   ">
          <div className="bg-gray-200 rounded-sm shadow ">
            <Navbar />

          </div>

          <div className=" px-4 border-b-2 shadow-sm  space-y-1 py-3 ">
            <div className="tabs FromDateDeapt grid lg:grid-cols-5 gap-4 ">



              <div className="relative">
                <div
                  onClick={() => setselected("form")}
                  className=" cursor-pointer relative rounded 	 gap-3 h-full  flex items-center py-1 lg:py-0 px-2 w-full truncate  border border-slate-400 text-black"
                >
                  <IoLocationSharp className="text-xl" />


                  <div className="flex flex-col">
                    <span className="text-[22px] md:text-2xl text-black font-bold">
                      {fromCity.CityName}
                    </span>
                  </div>
                </div>
                {selected == "form" &&
                  <SearchCompnents type={selected} handelcity={handelfromcity} />
                }

              </div>






              <div className="relative">
                <div
                  onClick={() => setselected("to")}
                  className=" cursor-pointer relative rounded 	 gap-3 h-full  flex items-center py-1 lg:py-0 px-2 w-full truncate  border border-slate-400 text-black"
                >
                  <IoLocationSharp className="text-xl" />


                  <div className="flex flex-col">
                    <span className="text-[22px] md:text-2xl text-black font-bold">
                      {toCity.CityName}
                    </span>
                  </div>
                </div>
                {selected == "to" &&
                  <SearchCompnents type={selected} handelcity={handeltocity} />
                }

              </div>







              <div className="relative">
                <div
                  onClick={() => setselected("date")}
                  className="flex items-center cursor-pointer  gap-2 px-3 py-1 border-2 text-black border-slate-200  rounded-md"
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


              <div className="flex items-start gap-2   px-3 py-1  border-2 text-black border-slate-200 rounded-md relative" onMouseLeave={() => setIsVisible(false)}>
      
                <div className="text-slate-400">
                  <h5 className="font-bold text-lg text-black">{adultCount + childCount + infantCount}</h5>
                  <p className="text-slate-400 text-xs">Traveller(s)</p>
                </div>
                <button onClick={() => { setIsVisible(true), setSelectedOption("count") }}>Edit</button>
                {isVisible && selectedOption === "count" &&
                  <div className="absolute top-[80%]  min-w-full min-h-[10rem] left-1 md:-left-10  z-10 " >
                    <div className="shadow-2xl rounded-md  bg-white mt-[10%]  flex flex-col gap-4 p-4">
                      <div className="flex gap-3 justify-between"><p className="text-nowrap">Adult Count </p> <div className="flex items-center gap-3"> <button className="px-2 border" onClick={() => { adultCount > 1 ? setAdultCount(adultCount - 1) : null }}>-</button> <p className=" px-2 border">{adultCount}</p> <button className="px-2 border" onClick={() => setAdultCount(adultCount + 1)} >+</button> </div> </div>
                     </div>
                  </div>
                }
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

const SearchCompnents = ({ handelcity }) => {
  const [searchparam, setsearchparam] = useState("")
  const state = useSelector(state => state.busCityslice)
  const [loading, setLoading] = useState(true)
  const [busdata, setbusData] = useState()

  useEffect(() => {
    setLoading(true);
    setbusData(state?.info?.BusCities)
    setLoading(false);
  }, [state])


  useEffect(() => {
    const newArray = state?.info?.BusCities?.filter((item) =>
      item.CityName.toLowerCase().includes(searchparam.toLowerCase())
    );


    setbusData(newArray);

  }, [searchparam]);





  return (
    <div className="absolute top-full bg-white w-full z-30 shadow-md rounded-md mt-1">
      <input
        type="text"
        value={searchparam}
        className="w-full text-black px-3 py-2 border-b outline-none"
        placeholder="Search city..."
        onChange={(e) => setsearchparam(e.target.value)}
      />

      <div className="max-h-60 overflow-y-scroll custom-scroll">
        {loading ? (
          // Show 5 skeleton items when loading is true
          [...Array(5)].map((_, i) => (
            <div key={i} className="p-2 border-b animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))
        ) : (
          busdata?.map((item, idx) => (
            <p
              key={idx}
              className="border-b px-3 py-2 cursor-pointer hover:bg-gray-100 transition-all"
              onClick={() => {
                handelcity({
                  CityId: item.CityId,
                  CityName: item.CityName,
                });
              }}
            >
              {item.CityName}
            </p>
          ))
        )}
      </div>
    </div>
  )



}