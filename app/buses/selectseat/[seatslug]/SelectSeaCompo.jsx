"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBusSeatLayout } from '../../../Component/Store/slices/busSeatlayout';
import { FaChair } from "react-icons/fa";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaUser, FaEnvelope, FaPhone, FaIdCard } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";

const SelectSeaCompo=({slug})=>{
  const decodeslug=decodeURIComponent(slug);
const params=new URLSearchParams(decodeslug)

const resultindex=params.get("resultindex")

const index=params.get("index")
const dispatch =useDispatch();
const state=useSelector(state=>state.busSeatSlice)


const [busSeatInfo,setBusSeatInfo]=useState();
const [busBoarding,setBusBoarding]=useState();
const [bookseatdeatle,setBookseatdeatle]=useState()
const [bookinginfopage,setbookinginfopage]=useState(false)
const currencylist=useSelector(state=>state.currencySlice);
const defaultcurrency= JSON.parse(localStorage.getItem("usercurrency")) || {symble:"₹",code:"INR",country:"India",}
const cuntryprice=currencylist?.info?.rates?.[`${defaultcurrency.code}`]
useEffect(()=>{

dispatch(getBusSeatLayout({TraceId:index,ResultIndex:resultindex}))
},[])
useEffect(()=>{
setBusSeatInfo(state && state.info && state.info?.buslayout?.GetBusSeatLayOutResult);

setBusBoarding(state?.info?.busbording?.GetBusRouteDetailResult)
},[state])

const handelseetbook=(seat)=>{
  setBookseatdeatle({seat});
 
}


  return (
    <div>
{bookinginfopage &&  <div className=" fixed top-0 left-0  h-screen w-screen overflow-x-auto z-[999] p-10 flex items-center justify-center bg-[#808080b5] py-10">
<ImCancelCircle  className='fixed top-5 right-5 cursor-pointer text-2xl text-[#3a40ff]' onClick={()=>setbookinginfopage(false)}/>

  <div className="bg-white shadow-2xl rounded-lg p-8 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-2">
        Nextgentrip.com
        </h1>
        <form className="space-y-6">
          {/* Title */}
          <div className='flex gap-5'>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <select
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none transition duration-200"
              required
            >
              <option value="">Select</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
              <FaUser className="text-gray-400 mx-3" />
              <input
                type="text"
                className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                placeholder="Enter your first name"
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
              <FaUser className="text-gray-400 mx-3" />
              <input
                type="text"
                className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
              <FaEnvelope className="text-gray-400 mx-3" />
              <input
                type="email"
                className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
              <FaPhone className="text-gray-400 mx-3" />
              <input
                type="tel"
                className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className='flex gap-2'>
          <div className='w-full'>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none transition duration-200 bg-gray-50"
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className='w-full'>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none transition duration-200 bg-gray-50"
              placeholder="Enter your age"
              required
            />
          </div>
          </div>

          {/* ID Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">ID Type</label>
            <select
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none transition duration-200 bg-gray-50"
              required
            >
              <option value="">Select</option>
              <option value="Aadhaar card">Aadhaar card</option>
              <option value="PAN card">PAN card</option>
              <option value="Passport">Passport</option>
              <option value="Driving License">Driving License</option>
              <option value="Voter ID">Voter ID</option>
            </select>
          </div>

          {/* ID Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">ID Number</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
              <FaIdCard className="text-gray-400 mx-3" />
              <input
                type="text"
                className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                placeholder="Enter your ID number"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-1 bg-gray-50 focus-within:ring focus-within:ring-indigo-300 transition">
              <FaMapMarkerAlt className="text-gray-400 mx-3" />
              <input
                type="text"
                className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
                placeholder="Enter your address"
                required
              />
            </div>
          </div>

          {/* Age */}
          

          {/* Submit Button */}
          <div>
            <button
            
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

}


      {busSeatInfo &&<div>
        
        <div 
          
          className=''
          
          dangerouslySetInnerHTML={{
            __html:busSeatInfo?.SeatLayoutDetails?.HTMLLayout
          }}
  
          >

           
          </div>
      
          <p className="text-3xl font-bold text-center mb-6">Bus Seat Layout</p>
        {busSeatInfo?.SeatLayoutDetails?.SeatLayout.SeatDetails.map((setRow,rowindex)=>{
          return(
          <div Key={rowindex} className='flex  gap-2 px-10'>
        {  setRow.map((seat,index)=>{
            return(
              <div
            key={index}
            className={`flex flex-col items-center p-4  border rounded-lg shadow-md relative transition-all duration-300 ${
              !seat.SeatStatus
                ? "bg-red-100 border-red-400" // Booked seats
                : "bg-green-100 border-green-400" // Available seats
            } cursor-pointer`}
    onClick={()=>handelseetbook(seat.SeatStatus?seat:null)}
      

          >
          { bookseatdeatle?.seat?.SeatIndex==seat?.SeatIndex &&   seat.SeatStatus &&
            <TiTick   className='absolute top-1 text-2xl right-2' />
            }
            <FaChair
              className={`text-2xl ${
                !seat.SeatStatus ? "text-red-600" : "text-green-600"
              }`}
            />

            
            <span className="mt-2 text-lg font-semibold text-gray-800">
              Seat {seat.SeatName}
            </span>
            <span className="text-sm text-gray-500">
               {defaultcurrency.symble}   {(() => {
    const offeredPrice = Number(seat.Price?.OfferedPriceRoundedOff || 0);
    const priceString = offeredPrice.toFixed(2);
    const [integerPart, decimalPart] = priceString.split(".");
    return `${integerPart},${(decimalPart || "00").slice(0, 2)}`;
  })()}
            </span>

          
            <span
              className={`text-xs mt-1 uppercase font-bold ${
                !seat.SeatStatus ? "text-red-500" : "text-green-500"
              }`}
            >
              {!seat.SeatStatus ? "Booked" : "Available"}
            </span>
          </div>
            )
            
            
            })}
          </div>
          
          
          )
          



          }) }</div>}




{
busBoarding &&
<>




<div className=" mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Bus Route Details
      </h1>

      {/* Boarding Points */}
      <div className='flex justify-around items-center'>
      <div className="mb-6 ">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Boarding Points
        </h2>
        {busBoarding?.BoardingPointsDetails?.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-blue-50 rounded-lg transition"
          >
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {point.CityPointName}
              </h3>
              <p className="text-gray-600 text-sm">
                <FaClock className="inline-block mr-1 text-gray-500" />
                Time: {new Date(point.CityPointTime).toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm">
                <FaPhoneAlt className="inline-block mr-1 text-gray-500" />
                Contact: {point.CityPointContactNumber}
              </p>
              <p className="text-gray-600 text-sm">
                Landmark: {point.CityPointLandmark}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-[1px] rounded-lg group'  onClick={()=>setbookinginfopage(true)}>
        <div className='h-1 bg-orange-500 w-full group-hover:w-[0px] duration-300 rounded-t-full'></div>
      <div className='bg-orange-500 text-white font-semibold p-1 px-3 rounded-md cursor-pointer ' >Book Now</div>
      <div className='h-1 bg-orange-500 w-full group-hover:w-[0px] duration-300 rounded-b-full	'></div>
      </div>
      {/* Dropping Points */}
      <div>
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Dropping Points
        </h2>
        {busBoarding?.DroppingPointsDetails?.map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-green-50 rounded-lg transition"
          >
            <FaMapMarkerAlt className="text-green-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {point.CityPointName}
              </h3>
              <p className="text-gray-600 text-sm">
                <FaClock className="inline-block mr-1 text-gray-500" />
                Time: {new Date(point.CityPointTime).toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm">
                Location: {point.CityPointLocation}
              </p>
            </div>
          </div>
        ))}
      </div>

   
      </div>
    </div>


</>

}





    </div>
  )
}

export default SelectSeaCompo
