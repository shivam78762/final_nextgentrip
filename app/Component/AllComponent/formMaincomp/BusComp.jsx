

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
    route.push(`/buses/DateOfJourney=${newdate}&OriginId=${fromCity.CityId}&DestinationId=${toCity.CityId}`)

  }

  const dispatch=useDispatch()
  useEffect(() => {

    dispatch(getBuscityapi())

}, [])



const handelfromcity=(data)=>{
  setFromCity(data)

  setselected("to"), setsearchparam("")
}
const handeltocity=(data)=>{
  setToCity(data)

  setselected("date"), setsearchparam("")
}











 



  
 


  return (
    <>
      




      <div className="header    relative  md:px-5  lg:px-12 xl:px-24  pt-10 md:pt-14">
       <div className=" bg-[#002043] h-[12rem] absolute inset-0  -z-10"></div>

        <TypeWriterHeaderEffect />
        <div className="flex flex-col bg-white lg:block rounded-lg  text-white   ">
          <div className="bg-gray-200 rounded-sm shadow ">
            <Navbar/>

          </div>

          <div className=" px-4 border-b-2 shadow-sm  space-y-1 py-3 ">
            <div className="tabs FromDateDeapt grid lg:grid-cols-4 gap-4 ">



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
                <SearchCompnents type={selected} handelcity={handelfromcity}/>
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
                <SearchCompnents type={selected}  handelcity={handeltocity}/>
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

const SearchCompnents=({handelcity})=>{
const [searchparam,setsearchparam]=useState("")
const state = useSelector(state => state.busCityslice)

const   [busdata,setbusData]=useState()

useEffect(()=>{
  setbusData(state?.info?.BusCities)  
},[state])


useEffect(() => {
  const newArray = state?.info?.BusCities?.filter((item) =>
    item.CityName.toLowerCase().includes(searchparam.toLowerCase())
  );

  
  setbusData(newArray);

}, [searchparam]);





return(
  <div className="absolute top-full bg-white w-full z-30 ">
  <input type="text" value={searchparam}  className="w-full text-black" placeholder="Search city..." onChange={(e) =>setsearchparam(e.target.value)} />
  <div className="h-32 overflow-hidden overflow-y-scroll">
    { busdata?.map((item) => {
      return (
        <p className=" border-b-2 p-1 cursor-pointer" onClick={() => {
          handelcity({
            CityId: item.CityId,
            CityName: item.CityName,
          })
        }}>{item.CityName}</p>
      )
    })}</div>
</div>)



}