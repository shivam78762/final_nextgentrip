"use client"
import React, { useEffect, useState } from 'react'
import { getSingleHotel } from '../../Component/Store/slices/getHotelSlice';

import { useDispatch, useSelector } from 'react-redux'
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



import { MdDinnerDining, MdRoomService,MdOutlineBreakfastDining,MdOutlineLocalLaundryService  ,MdPool ,MdFitnessCenter 
  ,MdOutlineHealthAndSafety,MdCancel
 } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { GiElevator,GiCoffeeCup  } from "react-icons/gi";

import {
    FaCheck,
    FaChevronCircleRight,
    FaChevronDown,
    FaChevronRight,
    FaLocationArrow,
    FaShareAlt,
    FaStar,
    FaTimes,
    FaWifi 
  } from "react-icons/fa";
  import { FaBath ,FaCarSide,FaMapLocationDot } from "react-icons/fa6";

  import { IoWifiOutline } from "react-icons/io5";
  import { RiWheelchairFill } from "react-icons/ri";
  import { PiBowlSteamDuotone } from "react-icons/pi";



  import { ImCancelCircle } from "react-icons/im";
import { gethotelPreBookingApi } from '../../Component/Store/slices/hotelpreBookslice';
import { useRouter } from 'next/navigation';


const HotelSlugComp = ({slugs}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hotel,sethotel]=useState()


const router = useRouter();
    const decodedSlug =  decodeURIComponent(slugs)
  const params = new URLSearchParams(decodedSlug); 

const checkIn=params.get("checkin")
const checkOut=params.get("checkout")
const adults=Number(params.get("adult"))
const children=Number(params.get("child"))
const roomes=params.get("roomes")
const HotelCode=params.get("hotelcode")

const dispatch=useDispatch()
const state=useSelector(state=>state.gethotelslice)
const preBookinghotelState=useSelector(state=>state.preBookSlice)
const [imgToggle,setimgToggle]=useState(false)

const [hotelinfo,sethotelinfo]=useState()
const [isOpenSecond,setisopen]=useState(false)
const [handelpricesection,sethandelpriceSection]=useState(false)
const [description,setDescription]=useState(false);
const [showingsection,setShowingsection]=useState("")
const [viewmore,setViewmore]=useState(false)

useEffect(()=>{
  dispatch(getSingleHotel({HotelCode,checkIn,checkOut,adults,children,roomes}))
},[])

useEffect(()=>{
   
    sethotelinfo(state)
},[state])
const handelprebooking=(BookingCode)=>{
dispatch(gethotelPreBookingApi({BookingCode}))
setIsOpen(true)
}
useEffect(()=>{

sethotel(preBookinghotelState && preBookinghotelState.info  &&preBookinghotelState.info.HotelResult && preBookinghotelState.info.HotelResult[0])

},[preBookinghotelState])


const togglePopup = () => setIsOpen(!isOpen);



  return (
<>
{isOpen && hotel && (
<div className='fixed top-0 left-0 w-screen   h-screen flex justify-center items-center bg-[#0000008a] z-50 overflow-y-scroll md:pt-16   '>

     

    
       <div className="bg-white rounded-lg shadow-xl w-full  max-h-[80vh] overflow-y-auto  max-w-3xl mx-4 p-6 ">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{hotel.Rooms[0].Name[0]}</h2>
              <button onClick={togglePopup} className="text-red-500 font-bold text-xl">&times;</button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Room Information:</h3>
                <p>{hotel.Rooms[0].Inclusion}</p>
                <p className="font-semibold text-gray-700">
                  Price per Night: ₹{hotel.Rooms[0].DayRates[0][0].BasePrice} INR
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Total Fare:</h3>
                <p>₹{hotel.Rooms[0].TotalFare}</p>
                <p className="text-sm text-gray-600">Including taxes: ₹{hotel.Rooms[0].TotalTax}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Cancellation Policy:</h3>
                <ul className="list-disc pl-6 text-sm text-gray-700">
                  {hotel.Rooms[0].CancelPolicies.map((policy, index) => (
                    <li key={index}>
                      <span className="font-semibold">{policy.FromDate}:</span> 
                      {policy.CancellationCharge === 0 ? "Free cancellation" : `Charge: ₹${policy.CancellationCharge}`}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Amenities:</h3>
               {!viewmore &&  <ul className="grid grid-cols-3 gap-4 text-sm text-gray-700">
                  {  hotel.Rooms[0].Amenities.slice(0,11).map((amenity, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✓</span>{amenity}
                    </li>
                  ))}
                 {hotel.Rooms[0].Amenities.length>11 &&  <li className='text-blue-600 cursor-pointer flex items-center'  onClick={()=>setViewmore(true)}>View More</li>}
                </ul>}
                {viewmore &&  <ul className="grid grid-cols-3 gap-4 text-sm text-gray-700">
                  {  hotel.Rooms[0].Amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✓</span>{amenity}
                    </li>
                  ))}
                   <li className='text-green-800 cursor-pointer flex items-center' onClick={()=>setViewmore(false)}>View less</li>
                </ul>}
                
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => router.push('/hotelcheckout')}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-all"
              >
                Book Now
              </button>
            </div>
          </div> 
        </div>
      )}



































<div className="lg:px-20 py-5">
        <ul
          className="flex space-x-2 text-s m text-gray-600 mt-5 mb-5"
          id="detpg_bread_crumbs"
        >
       <li>
            <Link href="/hotels" className="text-blue-600 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <span>/</span>
          </li>
         
          <li>
            <span>/</span>
          </li>
          <li>
         
          </li>
        </ul>
        { hotelinfo && !hotelinfo.isLoading &&  hotelinfo.info && hotelinfo.info.hoteldetail1 &&
         <>
       <div className="p-6 bg-white rounded-3xl flex  myshadow">
          <div className="lg:w-2/3 relative">
            <div className="flex items-center justify-between mb-5" id="WBTH">
              <h1 className="text-2xl font-bold flex items-center gap-4">
              {hotelinfo.info.hoteldetail1[0].HotelName}
                <span className="flex text-base gap-1">
             {  imgToggle &&
        <div className=' fixed  top-[20px] left-0 h-screen w-screen flex justify-center items-center p-10 z-50 bg-[#000000bc]'>
          <div className='absolute top-[10%] right-6 z-[999]'>
<MdCancel className='cursor-pointer text-4xl text-[#c1c1c1]  ' onClick={()=>setimgToggle(false)} />
          </div>
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper "
      >

        {hotelinfo.info.hoteldetail1[0].images.map((img)=> <SwiperSlide><img src={img} alt="" className='h-full w-full z-40' /> </SwiperSlide>)}
       
      
      </Swiper>





        </div>}
                  {Array.from({ length: hotelinfo.info.hoteldetail1[0].HotelRating }, (_, index) => (
        <FaStar key={index} />
      ))}
                </span>
              </h1>
            </div>
            <div className="lg:flex gap-5 mb-5">
              <div >
            
                <div
                  className="relative w-full lg:w-[600px] h-[200px] lg:h-[340px] mb-4"
                  // onClick={() => openPopup(0)}
                >
                  <Image
                    src={hotelinfo.info?.hoteldetail1[0]?.images?.[0]} // Show the first image thumbnail
                    alt="hotel image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg  "
                
                  />
                  <div onClick={()=>setimgToggle(true)} className="cursor-pointer absolute bottom-0 left-0 w-full p-2 rounded-b-lg bg-opacity-75 bg-gray-800 text-white text-center">
                    +{hotelinfo.info.hoteldetail1[0]?.images?.length} property photos
                  </div>
                </div>

                {isOpenSecond && (
                  <div className="fixed top-24 left-0 w-screen h-screen overflow-x-auto bg-white  flex items-center justify-center z-40">
                  
                      
                      <div className="grid grid-cols-4 gap-4 h-full p-4 ">
                        {hotelinfo.info.hoteldetail1[0].images.map((image, index) => (
                          <div key={index} className="relative w-full h-full">
                            <img
                              src={image}
                              alt={`Image ${index + 1}`}
                          
                              className="rounded-lg h-[20rem] w-full"
                            />
                          </div>
                        ))}
                      
                    </div>
                  </div>
                )}




                
              </div>

              <div className="">
                <div className="relative w-full lg:w-[280px] h-40 mb-4 rounded-2xl">
                  <Image
                    src={hotelinfo.info.hoteldetail1[0]?.images?.[1]}
                    alt="hotel image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 rounded-b-lg text-sm bg-gray-800 bg-opacity-15  text-white text-center">
                    Room photos
                  </div>
                </div>
                <div className="relative  w-full lg:w-[280px] h-40 ">
                  <Image
                    src={hotelinfo.info.hoteldetail1[0]?.images?.[2]}
                    alt="hotel image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <p>
              <div
                                 className={` ${description? "h-full":"h-[9.1rem]"} overflow-hidden w-5/6`}   
                                    dangerouslySetInnerHTML={{
                                      __html: hotelinfo.info.hoteldetail1[0].Description,
                                    }}
                                  ></div>
        
                <button onClick={()=>setDescription(!description)} className="font-bold text-blue-600">
                  {description? "Read less":"Read more"}
                </button>
              </p>
            </div>
            <div className="mb-5">
              <h2 className="text-xl font-semibold">Services</h2>
              <ul className="flex mt-4 space-x-4 text-sm ">
                <li className="flex gap-2 items-center">
                  <FaCheck className="text-green-600" />
                  Wi-Fi
                </li>
                <li className="flex gap-2 items-center">
                  <MdRoomService />
                  Room Service
                </li>
                <li className="flex gap-2 items-center">
                  <TbAirConditioning />
                  Air Conditioning
                </li>

                <li>
                  <button onClick={()=>sethandelpriceSection("services")} href="#" className="text-blue-600 font-semibold">
                    + 14 Services
                  </button>
                </li>
              </ul>
            </div>
 {handelpricesection=="services"&&
 <div className='absolute top-0 left-0 h-full w-full bg-white '>
 
    <ImCancelCircle className='absolute top-0 right-10 text-3xl ' onClick={()=>sethandelpriceSection("")}/>
  
  <div className='grid grid-cols-3  p-4 overflow-y-auto h-full w-full'>
  {hotelinfo.info.hoteldetail1[0].HotelFacilities.map((service_items)=>(

     <p className='flex gap-2 my-2 items-center'> {service_items.toLowerCase().includes("wifi")?<FaWifi  /> :
     
     service_items.toLowerCase().includes("wheelchair")?<RiWheelchairFill className='text-xl' />: 
     service_items.toLowerCase().includes("breakfast")?<MdOutlineBreakfastDining  className='text-xl' />: 
      service_items.toLowerCase().includes("bathroom")?<FaBath   className='text-xl' />: 
            service_items.toLowerCase().includes("parking")?<FaCarSide    className='text-xl' />: 
            service_items.toLowerCase().includes("elevator")?<GiElevator    className='text-xl' />: 
            service_items.toLowerCase().includes("laundry")?<MdOutlineLocalLaundryService     className='text-xl' />: 
            service_items.toLowerCase().includes("pools")?<MdPool      className='text-xl' />: 
            service_items.toLowerCase().includes("fitness")?<MdFitnessCenter      className='text-xl' />: 
            service_items.toLowerCase().includes("coffee")?<GiCoffeeCup       className='text-xl' />: 
            service_items.toLowerCase().includes("health")?<MdOutlineHealthAndSafety       className='text-xl' />: 

            
     <MdRoomService />} {service_items}</p>

  ))}
  </div>
  </div>}

          </div>
          <div className="lg:w-1/3 hidden lg:block  lg:sticky lg:top-24  h-full  ">
            <div className="mb-5 border-2 rounded-2xl p-3">
              <h3 className="text-lg font-bold">Classic</h3>
              <p className="mt-2 text-gray-700">Fits 2 Adults</p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-3 items-center">
                  <MdDinnerDining />
                  Complimentary Breakfast
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-green-600" />
                  Free Cancellation till check-in
                </li>
              </ul>
              <div className="mt-5">
                <p className="text-lg line-through text-gray-500">
                    {hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalFare}
                    </p>
                <p className="text-2xl font-bold text-black">₹  {Math.floor(hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalFare-hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalTax)}</p>

                <p className="text-sm text-gray-700">+ ₹ {hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalTax} taxes & fees</p>
              </div>
              <div className="mt-5 flex items-center">
                <button
                onClick={()=>handelprebooking(hotelinfo.info.hoteldetail2[0].
                  Rooms[0].BookingCode)}
                  className="px-5 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700"
                >
                  BOOK THIS NOW
                </button>
                <button className="ml-8 text-blue-600" onClick={()=>sethandelpriceSection("price")}>Price List</button>
              </div>
            </div>
            <div className="mt-5 border-2 rounded-2xl p-3">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white text-lg font-bold p-2 rounded-full">
                  4.8
                </div>
                <div>
                  <span className="font-bold">Excellent</span>
                  <span className="ml-2 text-gray-600 text-sm">
                    (16 RATINGS)
                  </span>
                  <p className="text-gray-600 text-sm">
                    94% guests rated this property 4
                  </p>
                </div>
                <button className="ml-5 text-blue-600 text-sm">
                  All Reviews
                </button>
              </div>
              <hr className="my-5 border-gray-300" />
              <div className="flex gap-3 items-center">
                <img
                  src="/images/google-maps.webp"
                  alt="Candolim"
                  
                  className="mr-2 lg:w-10 h-full"
                />
                <div>
                  <p className="font-bold">Candolim</p>
                  <p className="text-gray-600 text-sm">
                    5 minutes walk to Candolim Beach
                  </p>
                </div>
                <a target='_blank'  href={`http://maps.google.com/maps?q=${hotelinfo.info.hoteldetail1[0].Map.split("|")[0]},${hotelinfo.info.hoteldetail1[0].Map.split("|")[1]}&z=15&output=embed`} className="ml-5 text-blue-600 text-sm">
                  See on Map
                </a>
              </div>
            </div>
            {handelpricesection=="price" &&
            <div className='absolute top-0 h-full overflow-y-scroll w-full bg-white p-4'>
             <p className='text-center my-2 text-2xl'>Price List </p>
            <ImCancelCircle className='absolute top-0 right-0 text-3xl ' onClick={()=>sethandelpriceSection("")}/>
            <div className='flex flex-col gap-4'>
            {hotelinfo.info.hoteldetail2[0].
Rooms[0].DayRates[0].map((info_p,indp)=>(
                <div className='flex gap-3 '>
                    <p>Day {indp+1}</p> : <p> ₹ {info_p.BasePrice}</p>
                </div>
                ))}
                 <div className='flex gap-3 '>
                    <p className='font-semibold'>Taxs</p> : <p>₹ {hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalTax}</p>
                </div>
               
                </div>

                <div className='flex gap-3 my-9 font-bold text-2xl '>
                    <p className=''>Total</p> : <p> ₹{hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalFare}</p>
                </div>

          </div>
}


          </div>

         
        </div> 


  <div className="p-6 bg-white rounded-lg my-5 myshadow">
          
         
              <div className="flex justify-between items-center">
                <div className="">
                  <p className="text-lg font-semibold">
                    Change Dates and Guest(s)
                  </p>
                  <p className="text-sm mt-1">
                    Check-in: {hotelinfo.info.hoteldetail1[0].CheckInTime}  | Check-out: {hotelinfo.info.hoteldetail1[0].CheckOutTime}{" "}
                  </p>
                </div>
              <div>
              <p className="text-lg font-semibold">
                 Address: 
                  </p>
                  <p className="text-sm mt-1 flex justify-center items-center  gap-2">
                     <FaMapLocationDot className='text-xl text-[#000000c9]' />          {hotelinfo.info.hoteldetail1[0].Address}
                  </p>
              </div>
              </div>
            
              <div className="  xl:w-1/3 flex lg:hidden flex-col md:flex-row md:justify-around   h-full  ">
            <div className="mb-5 border-2 rounded-2xl p-3">
              <h3 className="text-lg font-bold">Classic</h3>
              <p className="mt-2 text-gray-700">Fits 2 Adults</p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-3 items-center">
                  <MdDinnerDining />
                  Complimentary Breakfast
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-green-600" />
                  Free Cancellation till check-in
                </li>
              </ul>
              <div className="mt-5">
                <p className="text-lg line-through text-gray-500">
                    {hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalFare}
                    </p>
                <p className="text-2xl font-bold text-black">₹  {Math.floor(hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalFare-hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalTax)}</p>

                <p className="text-sm text-gray-700">+ ₹ {hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalTax} taxes & fees</p>
              </div>
              <div className="mt-5 flex items-center">
                <button
                onClick={()=>handelprebooking(hotelinfo.info.hoteldetail2[0].
                  Rooms[0].BookingCode)}
                  className="px-5 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700"
                >
                  BOOK THIS NOW
                </button>
                <button className="ml-8 text-blue-600" onClick={()=>sethandelpriceSection("price")}>Price List</button>
              </div>
            </div>
            <div className="mt-5 border-2 rounded-2xl p-3">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white text-lg font-bold p-2 rounded-full">
                  4.8
                </div>
                <div>
                  <span className="font-bold">Excellent</span>
                  <span className="ml-2 text-gray-600 text-sm">
                    (16 RATINGS)
                  </span>
                  <p className="text-gray-600 text-sm">
                    94% guests rated this property 4
                  </p>
                </div>
                <button className="ml-5 text-blue-600 text-sm">
                  All Reviews
                </button>
              </div>
              <hr className="my-5 border-gray-300" />
              <div className="flex gap-3 items-center">
                
                <div>
                  <p className="font-bold">Candolim</p>
                  <p className="text-gray-600 text-sm">
                    5 minutes walk to Candolim Beach
                  </p>
                </div>
                <a target='_blank'  href={`http://maps.google.com/maps?q=${hotelinfo.info.hoteldetail1[0].Map.split("|")[0]},${hotelinfo.info.hoteldetail1[0].Map.split("|")[1]}&z=15&output=embed`} className="ml-5 text-blue-600 text-sm">
                  See on Map
                </a>
              </div>
            </div>
            {handelpricesection=="price" &&
            <div className='absolute top-0 h-full overflow-y-scroll w-full bg-white p-4'>
             <p className='text-center my-2 text-2xl'>Price List </p>
            <ImCancelCircle className='absolute top-0 right-0 text-3xl ' onClick={()=>sethandelpriceSection("")}/>
            <div className='flex flex-col gap-4'>
            {hotelinfo.info.hoteldetail2[0].
Rooms[0].DayRates[0].map((info_p,indp)=>(
                <div className='flex gap-3 '>
                    <p>Day {indp+1}</p> : <p> ₹ {info_p.BasePrice}</p>
                </div>
                ))}
                 <div className='flex gap-3 '>
                    <p className='font-semibold'>Taxs</p> : <p>₹ {hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalTax}</p>
                </div>
               
                </div>

                <div className='flex gap-3 my-9 font-bold text-2xl '>
                    <p className=''>Total</p> : <p> ₹{hotelinfo.info.hoteldetail2[0].
Rooms[0].TotalFare}</p>
                </div>

          </div>
}


          </div>
        </div>

     {/*    <div className="p-6 bg-white rounded-lg my-5 myshadow">
          <div className="">
            <div>
              <div className="flex justify-between items-center">
                <div className="">
                  <p className="text-lg font-semibold">
                    Change Dates and Guest(s)
                  </p>
                  <p className="text-sm mt-1">
                    Check-in: 12 PM | Check-out: 11 AM{" "}
                  </p>
                </div>
                <div className="flex items-center relative">
                  <div
                    id="datePicker1"
                    className="border px-4 py-2 flex gap-2 items-center"
                    onClick={() => handleClick("datePicker1")}
                  >
                    {selectedDates.datePicker1
                      ? selectedDates.datePicker1.toLocaleDateString()
                      : "29/11/2003"}{" "}
                    <FaChevronDown />
                  </div>
                  <div
                    id="datePicker2"
                    className="border px-4 py-2 ml-3 flex gap-2 items-center"
                    onClick={() => handleClick("datePicker2")}
                  >
                    {selectedDates.datePicker2
                      ? selectedDates.datePicker2.toLocaleDateString()
                      : "29/11/2003"}{" "}
                    <FaChevronDown />
                  </div>
                  {activePickerId === "datePicker1" && (
                    <div className="bg-white p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                      <DayPicker
                        mode="single"
                        selected={selectedDates.datePicker1}
                        onSelect={(date) =>
                          handleDateSelect(date, "datePicker1")
                        }
                      />
                    </div>
                  )}
                  {activePickerId === "datePicker2" && (
                    <div className="bg-white p-5 shadow-2xl absolute top-full right-0 mt-2 z-10">
                      <DayPicker
                        mode="single"
                        selected={selectedDates.datePicker2}
                        onSelect={(date) =>
                          handleDateSelect(date, "datePicker2")
                        }
                      />
                    </div>
                  )}
                  <div
                    className="border px-4 py-2 ml-3 flex gap-2 items-center cursor-pointer"
                    onClick={() => handleClick("roombook")}
                  >
                    2 Adults <FaChevronDown />
                  </div>
                  {activePickerId === "roombook" && (
                    <div className="bg-white shadow-2xl absolute top-full right-0 mt-2 z-10 cursor-pointer">
                      <div className="p-4 bg-white">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <p className="text-base font-black">Rooms</p>
                            <div className="relative">
                              <div className="flex items-center">
                                <button
                                  type="button"
                                  onClick={() => handleNightsChange(-1)}
                                  className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                                >
                                  -
                                </button>

                                <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-[fffbf3] ">
                                  {nights}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleNightsChange(1)}
                                  className=" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <p className="text-base font-black">Adults</p>
                            <div className="relative">
                              <div className="inline-block curs nter">
                                <div className="flex items-center">
                                  <button
                                    type="button"
                                    onClick={() => handleRoomsChange(-1)}
                                    className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                                  >
                                    -
                                  </button>

                                  <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-[fffbf3] ">
                                    {hotelroom}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => handleRoomsChange(1)}
                                    className=" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col space-y-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-base font-black">Children</p>
                                <p className="text-sm text-gray-500 mt-1">
                                  0 - 17 Years Old
                                </p>
                              </div>
                              <div className="relative">
                                <select
                                  value={childrenCount}
                                  onChange={handleChildrenCountChange}
                                  className="block w-20 px-4 py-1 border rounded cursor-pointer bg-white"
                                  data-testid="children_count"
                                >
                                  {[...Array(7).keys()].map((num) => (
                                    <option key={num} value={num}>
                                      {num}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            {childrenCount > 0 && (
                              <div className="space-y-2">
                                <h2 className="text-sm border-t pt-4 font-bold">
                                  Age Of Child
                                </h2>
                                {[...Array(childrenCount)].map((_, index) => (
                                  <>
                                    {" "}
                                    <div
                                      key={index}
                                      className="flex items-center space-x-4 justify-between"
                                    >
                                      <p className="text-base">
                                        Child {index + 1}
                                      </p>
                                      <select
                                        value={childrenAges[index]}
                                        onChange={(e) =>
                                          handleAgeChange(index, e.target.value)
                                        }
                                        className="block w-20 px-4 py-1 border rounded cursor-pointer bg-white"
                                        data-testid={`child_age_${index}`}
                                      >
                                        <option value="">Age</option>
                                        {[...Array(18).keys()].map((age) => (
                                          <option key={age} value={age}>
                                            {age}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </>
                                ))}
                              </div>
                            )}
                          </div>

                          <p className="text-sm text-gray-600 mt-4">
                            Please provide the correct number of children along
                            with their correct age for the best options and
                            prices.
                          </p>
                        </div>
                        <button className="bg-blue-600 text-white rounded w-20 mt-3 h-8 flex items-center justify-center text-center">
                          <span className="text-xs flex items-center gap-2">
                            Save
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                  <button className=" border border-blue-500 text-blue-500 font-semibold ml-3 px-4 py-2">
                    Update Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}


        {/* <section id="" className="p-6  bg-white rounded-3xl my-5 myshadow">
          <div className="">
            <h4 className=" flex items-center gap-2">
              2 Room Types <FaChevronDown />{" "}
            </h4>
            <div className="flex justify-between my-4">
              <div>
                <ul className="flex gap-5">
                  <li
                    className={`cursor-pointer rounded-md border-2 py-2 px-4 ${
                      activeTab === 0
                        ? "border-blue-500 text-blue-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab(0)}
                  >
                    Free Cancellation
                  </li>
                  <li
                    className={`cursor-pointer rounded-md border-2 py-2 px-4 ${
                      activeTab === 1
                        ? "border-blue-500 text-blue-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab(1)}
                  >
                    Breakfast Included
                  </li>
                </ul>
              </div>
            </div>
            <div className="border rounded-t-3xl">
              <div className="px-5 py-2 border-b bg-[#e6fff9] rounded-t-3xl text-sm">
                Deal Applied: <span className="font-black">ATI2003</span>
                <span>. Get INR 197 Off</span>
              </div>
              <div>
                {rooms.map((room) => (
                  <div className="flex p-5 gap-10 border-b" key={room.id}>
                    <div className="border-r pr-5">
                      <div className="relative mb-4 rounded-2xl">
                        <span className="absolute top-2 bg-white text-xs font-bold left-2 rounded-full px-3 py-1">
                          {room.tag}
                        </span>

                        <Image
                          src={room.image}
                          alt={room.title}
                          title={room.title}
                          width={477}
                          height={200}
                          className="rounded-2xl cursor-pointer"
                          onClick={openModal}
                        />

                        <div className="absolute bottom-2 right-2">
                          <button className="bg-blue-600 text-white rounded-full w-20 h-8 flex items-center justify-center">
                            <span className="text-xs flex items-center gap-2">
                              Share <FaShareAlt />
                            </span>
                          </button>
                        </div>
                      </div>
                      <h2 className="text-xl font-extrabold">{room.title}</h2>
                      <div className="text-sm text-gray-600 leading-5 my-1">
                        (100 sq.ft (9.3 sq mt) | Queen Bed)
                      </div>
                      <ul className="flex list-disc ml-5 text-sm mt-4">
                        <div className="w-full">
                          {room.features.slice(0, 3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </div>
                        <div className="w-full">
                          {room.features.slice(3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </div>
                      </ul>
                    </div>

                    <div className="flex gap-20 w-full">
                      <div>
                        <span className="border border-black text-xs px-3 rounded py-1">
                          {room.recommendation}
                        </span>

                        <h5 className="my-4 font-bold text-xl">
                          {room.roomType}
                        </h5>
                        <ul>
                          {room.perks.map((perk, index) => (
                            <li className="flex items-center gap-2" key={index}>
                              {perk.icon}
                              <p>{perk.text}</p>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-2 text-blue-600 text-base font-bold leading-6 flex items-center  gap-3">
                          More Details <FaChevronDown />
                        </p>
                      </div>

                      <div>
                        <div>
                          <p className="text-base font-normal text-gray-500 line-through">
                            {room.originalPrice}
                          </p>
                          <div className="mt-1">
                            <p className="font-black text-2xl text-black">
                              {room.discountedPrice}
                            </p>
                          </div>
                          <div className="mt-1">
                            <p className="text-lg font-normal">{room.taxes}</p>
                          </div>
                        </div>
                        <Link
                          href=""
                          className=" mt-3 bg-blue-600 text-white rounded-full w-40 h-8 flex items-center justify-center"
                        >
                          SELECT ROOM
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
         */}

         <section className="p-6 bg-white rounded-3xl my-5  shadow-lg" id="">
          <p className="text-lg font-semibold mb-1">Location</p>

          <span className="text-sm font-semibold">
            The Location of Super Townhouse Candolim has been rated 4.9 by 19
            guests
          </span>

          <div className="flex flex-col lg:flex-row gap-10 mt-5">
            {" "}
            <div className="flex justify-center items-center lg:w-4/6">
             <pre></pre>
              <iframe 
            
  allowFullScreen=""
   loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
   className="w-full h-96 lg:w-full md:h-[475px]"
  
  src={`http://maps.google.com/maps?q=${hotelinfo.info.hoteldetail1[0].Map.split("|")[0]},${hotelinfo.info.hoteldetail1[0].Map.split("|")[1]}&z=15&output=embed`}
 >
 </iframe>
            </div>
            <div className="lg:w-2/6">
              <div>
                <div className="">
                  <div
                    className="selected flex items-center gap-4 cursor-pointer py-5 border-b"
                    onClick={() => setShowingsection("contact")}
                  >
                    <Image
                      src="/images/location2.webp"
                      alt="CategoryIcon"
                      width={22}
                      height={32}
                    />
                    <p className="ml-2 flex w-full justify-between items-center">
                      <span>Contacts</span>
                      {showingsection=="contact"  ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </p>
                  </div>
                  {showingsection=="contact" && (
                    <ul className="space-y-4 w-full overflow-hidden h-[200px] custom-scrollbar overflow-y-auto p-3">
                     
                        <li key={location.id}>
                          <span className="flex items-center gap-4">
                           
                      
                            
                              <div className="ml-4 w-full flex flex-col  gap-2 ">
                           
                                <div className=' flex items-center gap-2 '>
                                  <div>
                               Number :  
                             </div>
                                  <a  href={`tel:${hotelinfo.info.hoteldetail1[0].PhoneNumber}`} className="bg-blue-500 w-max px-3 text-white text-nowrap font-semibold  p-1 rounded mb-1">
                          + {hotelinfo.info.hoteldetail1[0].PhoneNumber}
                                  </a>
                                </div>

                                <div className=' flex items-center gap-2 '>
                                  <div>
                               Fax-number :  
                             </div>
                                  <a  href={`tel:${hotelinfo.info.hoteldetail1[0].FaxNumber}`} className="bg-blue-500 w-max px-3 text-white text-nowrap font-semibold  p-1 rounded mb-1">
                          + {hotelinfo.info.hoteldetail1[0].FaxNumber}
                                  </a></div>
                              </div>
                       

                       
                          </span>
                        </li>
                      
                    </ul>
                  )}
                </div>

               
                <div className="">
                  <div
                    className="selected flex items-center gap-4 cursor-pointer py-5 border-b"
                    onClick={() => setShowingsection("attractions")}
                  >
                    <Image
                      src="/images/cameraonr.webp"
                      alt="CategoryIcon"
                      width={22}
                      height={39}
                    />
                    <p className="ml-2 flex w-full justify-between items-center">
                      <span>Attractions</span>
                      {showingsection=="attractions"  ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </p>
                  </div>
                  {showingsection=="attractions"  && (
                    <ul className="space-y-4 w-full overflow-hidden h-[200px] custom-scrollbar overflow-y-auto p-3">
                     
                        <li key={location.id}>
                          <span className="flex items-center gap-4">
                        
<div dangerouslySetInnerHTML={{__html:hotelinfo.info.hoteldetail1[0].Attractions["1) "]} }>
</div>

                               
                            

                       
                          </span>
                        </li>
                      
                    </ul>
                  )} 
                </div>

            
                <div className="">
                  <div
                    className="selected flex w-full items-center gap-4  cursor-pointer py-5 border-b"
                    onClick={() => toggleSection("transport")}
                  >
                    <Image
                      src="/images/flight_train.webp"
                      alt="CategoryIcon"
                      width={22}
                      height={40}
                    />
                    <p className="ml-2 flex w-full justify-between items-center">
                      <span>Transport</span>
                      {/* {openSections.transport ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )} */}
                    </p>
                  </div>
                  {/* {openSections.transport && (
                    <ul className="space-y-4 overflow-hidden h-[200px] custom-scrollbar overflow-y-auto p-3">
                      {locations.map((location) => (
                        <li key={location.id}>
                          <span className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              id={location.id}
                              className=""
                            />
                            <label
                              htmlFor={location.id}
                              className="flex w-full items-center cursor-pointer"
                            >
                              <Image
                                src={location.imageSrc}
                                alt="image"
                                width={50}
                                height={50}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="ml-4 w-full">
                                {location.tag && (
                                  <div className="bg-blue-500 w-max text-white text-[8px] font-semibold  p-1 rounded mb-1">
                                    {location.tag}
                                  </div>
                                )}
                                <div className="flex w-full justify-between items-center">
                                  <div>
                                    <p className="font-semibold text-sm text-gray-900">
                                      {location.title}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      {location.subtitle}
                                    </p>
                                  </div>
                                  <div className="ml-4 text-right">
                                    <span className="inline-block bg-gray-200 p-2 rounded-full">
                                      <FaLocationArrow className="text-blue-300" />
                                    </span>
                                    <p className="text-xs text-gray-600">
                                      {location.distance}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </div>
                <div className="">
                  <div
                    className="selected flex items-center gap-4  cursor-pointer py-5 border-b"
                    onClick={() => toggleSection("restaurants")}
                  >
                    <Image
                      src="/images/restaurant.webp"
                      alt="CategoryIcon"
                      width={22}
                      height={40}
                    />
                    <p className="ml-2 flex w-full justify-between items-center">
                      <span>Restaurants</span>
                      {/* {openSections.restaurants ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )} */}
                    </p>
                  </div>
                  {/* {openSections.restaurants && (
                    <ul className="space-y-4 overflow-hidden h-[200px] custom-scrollbar overflow-y-auto p-3">
                      {locations.map((location) => (
                        <li key={location.id}>
                          <span className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              id={location.id}
                              className=""
                            />
                            <label
                              htmlFor={location.id}
                              className="flex w-full items-center cursor-pointer"
                            >
                              <Image
                                src={location.imageSrc}
                                alt="image"
                                width={50}
                                height={50}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="ml-4 w-full">
                                {location.tag && (
                                  <div className="bg-blue-500 w-max text-white text-[8px] font-semibold  p-1 rounded mb-1">
                                    {location.tag}
                                  </div>
                                )}
                                <div className="flex w-full justify-between items-center">
                                  <div>
                                    <p className="font-semibold text-sm text-gray-900">
                                      {location.title}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      {location.subtitle}
                                    </p>
                                  </div>
                                  <div className="ml-4 w-ful text-right">
                                    <span className="inline-block bg-gray-200 p-2 rounded-full">
                                      <FaLocationArrow className="text-blue-300" />
                                    </span>
                                    <p className="text-xs text-gray-600">
                                      {location.distance}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </section> 

        {/* <section
          className="p-6 bg-white rounded-3xl flex items-center shadow-lg"
          id=""
        >
          <div className="w-full">
            <div id="">
              <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-semibold mb-1">Property Rules</p>
                <div className="flex items-center text-base font-bold">
                  <span>Check-in: 12 PM</span>
                  <span className="ml-5">Check-out: 11 AM</span>
                </div>
              </div>
              <div
                className="border-b mb-4"
                style={{ backgroundColor: "rgb(216, 216, 216)" }}
              ></div>
              <ul className="columns-2 space-y-4 list-disc">
                <li className="flex flex-col ">
                  <p className="text-sm font-bold text-green-600">
                    Couple, Bachelor Rules
                    <span className="ml-2 inline-block text-xs font-normal bg-green-200 text-green-800 py-1 px-2 rounded">
                      Couple Friendly
                    </span>
                  </p>
                  <span className="text-sm">
                    Unmarried couples/guests with Local IDs are allowed.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm">
                    Guests below 18 years of age are not allowed at the
                    property.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm">
                    Passport, Aadhar, Driving License, and Govt. ID are accepted
                    as ID proof(s).
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm">Pets are not allowed.</span>
                </li>
              </ul>
              <div className="flex items-center mt-4">
                <ul className="flex space-x-4">
                  <li>
                    <span className="bg-white border text-sm py-2 px-3 rounded">
                      Guest Profile
                    </span>
                  </li>
                  <li>
                    <span className="bg-white border text-sm py-2 px-3 rounded">
                      ID Proof Related
                    </span>
                  </li>
                </ul>
                <button className="text-blue-600 font-semibold  ml-4">
                  Read All Property Rules
                </button>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="p-6 bg-white rounded-3xl mt-5 shadow-lg" id="">
          <p className="text-lg font-semibold mb-1"> User Rating & Reviews</p>

          <div>
            <ul className="flex gap-10 my-5 border-b border-gray-200">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className={`cursor-pointer pb-2 font-semibold ${
                    selectedTab === tab.name
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setSelectedTab(tab.name)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>

            <div className="mt-4">
              {selectedTab === "all" && (
                <>
                  <div className="flex gap-10">
                    <div className="flex flex-col w-1/4">
                      <div className="flex flex-col space-y-5">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                            4.9
                          </div>
                          <div>
                            <div className="text-lg font-semibold">
                              Excellent
                            </div>
                            <p className="text-sm text-gray-600">19 Ratings</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[
                            "Excellent",
                            "Very good",
                            "Average",
                            "Poor",
                            "Bad",
                          ].map((rating, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <span className="text-sm font-medium">
                                {rating}
                              </span>
                              <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                                <div
                                  className={`absolute top-0 left-0 h-full rounded-full  bg-blue-500`}
                                  style={{
                                    width: `${
                                      index === 0 ? 95 : index === 3 ? 5 : 0
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm ml-2">
                                {index === 0
                                  ? "95%"
                                  : index === 3
                                  ? "5%"
                                  : "0%"}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t-2 border-gray-300 my-5"></div>

                        <div>
                          <p className="text-xl font-bold mb-4">
                            Rating Categories
                          </p>
                          <ul className="space-y-2">
                            {[
                              { category: "Location", rating: 4.9 },
                              { category: "Cleanliness", rating: 2.1 },
                              { category: "Value for Money", rating: 4.7 },
                              { category: "Food", rating: 4.9 },
                              { category: "Services", rating: 4.5 },
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm font-medium">
                                  {item.category}
                                </span>
                                <span className="text-sm px-2 py-1 border border-blue-600 rounded-md w-[39px] font-medium">
                                  {item.rating}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-3/4">
                      <div className="flex justify-between">
                        <div>
                          <div className="mb-4">
                            <p className="text-lg font-black mb-2">
                              Filter By:
                            </p>
                            <ul className="flex space-x-4">
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "All Reviews"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("All Reviews")
                                }
                              >
                                All Reviews
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Room Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Room Cleanliness")
                                }
                              >
                                Room Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Toilet Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Toilet Cleanliness")
                                }
                              >
                                Toilet Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Location"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() => handleFilterChange("Location")}
                              >
                                Location
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg">
                            <p className="font-bold mb-3">Sort by:</p>
                            <div className="border px-4 py-2 rounded-md">
                              <span>Latest first</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {reviews.map((review, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg shadow-sm"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-lg font-black">
                                  {review.title}
                                </p>
                                <div className="text-gray-500 text-sm mt-1">
                                  <span>{review.author}</span>
                                  <span className="mx-2">•</span>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                              <span className="text-sm border border-blue-600 rounded-md w-[39px]  px-2 py-1 font-bold">
                                {review.rating}
                              </span>
                            </div>
                            <p className="font-semibold mt-2 mb-1">
                              {review.category}
                            </p>
                            <p>{review.content}</p>
                            <p className="mt-2 cursor-pointer text-blue-500">
                              Helpful <span className="ml-2">👍</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-4">
                        <ul className="flex space-x-2">
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              disabled={activePage === 1}
                              onClick={() => handlePageChange(activePage - 1)}
                            >
                              «
                            </button>
                          </li>
                          <li>
                            <button
                              className={`px-4 py-2 ${
                                activePage === 1
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-700"
                              } rounded-lg`}
                              onClick={() => handlePageChange(1)}
                            >
                              1
                            </button>
                          </li>
                          
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              onClick={() => handlePageChange(activePage + 1)}
                            >
                              »
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {selectedTab === "couple" && (
                <>
                  <div className="flex gap-10">
                    <div className="flex flex-col w-1/4">
                      <div className="flex flex-col space-y-5">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                            4.9
                          </div>
                          <div>
                            <div className="text-lg font-semibold">
                              Excellent
                            </div>
                            <p className="text-sm text-gray-600">19 Ratings</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[
                            "Excellent",
                            "Very good",
                            "Average",
                            "Poor",
                            "Bad",
                          ].map((rating, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <span className="text-sm font-medium">
                                {rating}
                              </span>
                              <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                                <div
                                  className={`absolute top-0 left-0 h-full rounded-full  bg-blue-500`}
                                  style={{
                                    width: `${
                                      index === 0 ? 95 : index === 3 ? 5 : 0
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm ml-2">
                                {index === 0
                                  ? "95%"
                                  : index === 3
                                  ? "5%"
                                  : "0%"}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t-2 border-gray-300 my-5"></div>

                        <div>
                          <p className="text-xl font-bold mb-4">
                            Rating Categories
                          </p>
                          <ul className="space-y-2">
                            {[
                              { category: "Location", rating: 4.9 },
                              { category: "Cleanliness", rating: 2.1 },
                              { category: "Value for Money", rating: 4.7 },

                              { category: "Food", rating: 4.9 },
                              { category: "Services", rating: 4.5 },
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm font-medium">
                                  {item.category}
                                </span>
                                <span className="text-sm px-2 py-1 border border-blue-600 rounded-md w-[39px] font-medium">
                                  {item.rating}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-3/4">
                      <div className="flex justify-between">
                        <div>
                          <div className="mb-4">
                            <p className="text-lg font-black mb-2">
                              Filter By:
                            </p>
                            <ul className="flex space-x-4">
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "All Reviews"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("All Reviews")
                                }
                              >
                                All Reviews
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Room Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Room Cleanliness")
                                }
                              >
                                Room Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Toilet Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Toilet Cleanliness")
                                }
                              >
                                Toilet Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Location"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() => handleFilterChange("Location")}
                              >
                                Location
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg">
                            <p className="font-bold mb-3">Sort by:</p>
                            <div className="border px-4 py-2 rounded-md">
                              <span>Latest first</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {reviews.map((review, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg shadow-sm"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-lg font-black">
                                  {review.title}
                                </p>
                                <div className="text-gray-500 text-sm mt-1">
                                  <span>{review.author}</span>
                                  <span className="mx-2">•</span>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                              <span className="text-sm border border-blue-600 rounded-md w-[39px]  px-2 py-1 font-bold">
                                {review.rating}
                              </span>
                            </div>
                            <p className="font-semibold mt-2 mb-1">
                              {review.category}
                            </p>
                            <p>{review.content}</p>
                            <p className="mt-2 cursor-pointer text-blue-500">
                              Helpful <span className="ml-2">👍</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-4">
                        <ul className="flex space-x-2">
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              disabled={activePage === 1}
                              onClick={() => handlePageChange(activePage - 1)}
                            >
                              «
                            </button>
                          </li>
                          <li>
                            <button
                              className={`px-4 py-2 ${
                                activePage === 1
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-700"
                              } rounded-lg`}
                              onClick={() => handlePageChange(1)}
                            >
                              1
                            </button>
                          </li>
                        
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              onClick={() => handlePageChange(activePage + 1)}
                            >
                              »
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {selectedTab === "family" && (
                <>
                  <div className="flex gap-10">
                    <div className="flex flex-col w-1/4">
                      <div className="flex flex-col space-y-5">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                            4.9
                          </div>
                          <div>
                            <div className="text-lg font-semibold">
                              Excellent
                            </div>
                            <p className="text-sm text-gray-600">19 Ratings</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[
                            "Excellent",
                            "Very good",
                            "Average",
                            "Poor",
                            "Bad",
                          ].map((rating, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <span className="text-sm font-medium">
                                {rating}
                              </span>
                              <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                                <div
                                  className={`absolute top-0 left-0 h-full rounded-full  bg-blue-500`}
                                  style={{
                                    width: `${
                                      index === 0 ? 95 : index === 3 ? 5 : 0
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm ml-2">
                                {index === 0
                                  ? "95%"
                                  : index === 3
                                  ? "5%"
                                  : "0%"}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t-2 border-gray-300 my-5"></div>

                        <div>
                          <p className="text-xl font-bold mb-4">
                            Rating Categories
                          </p>
                          <ul className="space-y-2">
                            {[
                              { category: "Location", rating: 4.9 },
                              { category: "Cleanliness", rating: 2.1 },
                              { category: "Value for Money", rating: 4.7 },
                              { category: "Food", rating: 4.9 },
                              { category: "Services", rating: 4.5 },
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm font-medium">
                                  {item.category}
                                </span>
                                <span className="text-sm px-2 py-1 border border-blue-600 rounded-md w-[39px] font-medium">
                                  {item.rating}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-3/4">
                      <div className="flex justify-between">
                        <div>
                          <div className="mb-4">
                            <p className="text-lg font-black mb-2">
                              Filter By:
                            </p>
                            <ul className="flex space-x-4">
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "All Reviews"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("All Reviews")
                                }
                              >
                                All Reviews
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Room Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Room Cleanliness")
                                }
                              >
                                Room Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Toilet Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Toilet Cleanliness")
                                }
                              >
                                Toilet Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Location"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() => handleFilterChange("Location")}
                              >
                                Location
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg">
                            <p className="font-bold mb-3">Sort by:</p>
                            <div className="border px-4 py-2 rounded-md">
                              <span>Latest first</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {reviews.map((review, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg shadow-sm"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-lg font-black">
                                  {review.title}
                                </p>
                                <div className="text-gray-500 text-sm mt-1">
                                  <span>{review.author}</span>
                                  <span className="mx-2">•</span>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                              <span className="text-sm border border-blue-600 rounded-md w-[39px]  px-2 py-1 font-bold">
                                {review.rating}
                              </span>
                            </div>
                            <p className="font-semibold mt-2 mb-1">
                              {review.category}
                            </p>
                            <p>{review.content}</p>
                            <p className="mt-2 cursor-pointer text-blue-500">
                              Helpful <span className="ml-2">👍</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-4">
                        <ul className="flex space-x-2">
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              disabled={activePage === 1}
                              onClick={() => handlePageChange(activePage - 1)}
                            >
                              «
                            </button>
                          </li>
                          <li>
                            <button
                              className={`px-4 py-2 ${
                                activePage === 1
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-700"
                              } rounded-lg`}
                              onClick={() => handlePageChange(1)}
                            >
                              1
                            </button>
                          </li>
                        
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              onClick={() => handlePageChange(activePage + 1)}
                            >
                              »
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {selectedTab === "business" && (
                <>
                  <div className="flex gap-10">
                    <div className="flex flex-col w-1/4">
                      <div className="flex flex-col space-y-5">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                            4.9
                          </div>
                          <div>
                            <div className="text-lg font-semibold">
                              Excellent
                            </div>
                            <p className="text-sm text-gray-600">19 Ratings</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[
                            "Excellent",
                            "Very good",
                            "Average",
                            "Poor",
                            "Bad",
                          ].map((rating, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <span className="text-sm font-medium">
                                {rating}
                              </span>
                              <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                                <div
                                  className={`absolute top-0 left-0 h-full rounded-full  bg-blue-500`}
                                  style={{
                                    width: `${
                                      index === 0 ? 95 : index === 3 ? 5 : 0
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm ml-2">
                                {index === 0
                                  ? "95%"
                                  : index === 3
                                  ? "5%"
                                  : "0%"}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t-2 border-gray-300 my-5"></div>

                        <div>
                          <p className="text-xl font-bold mb-4">
                            Rating Categories
                          </p>
                          <ul className="space-y-2">
                            {[
                              { category: "Location", rating: 4.9 },
                              { category: "Cleanliness", rating: 2.1 },
                              { category: "Value for Money", rating: 4.7 },
                              { category: "Food", rating: 4.9 },
                              { category: "Services", rating: 4.5 },
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm font-medium">
                                  {item.category}
                                </span>
                                <span className="text-sm px-2 py-1 border border-blue-600 rounded-md w-[39px] font-medium">
                                  {item.rating}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-3/4">
                      <div className="flex justify-between">
                        <div>
                          <div className="mb-4">
                            <p className="text-lg font-black mb-2">
                              Filter By:
                            </p>
                            <ul className="flex space-x-4">
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "All Reviews"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("All Reviews")
                                }
                              >
                                All Reviews
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Room Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Room Cleanliness")
                                }
                              >
                                Room Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Toilet Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Toilet Cleanliness")
                                }
                              >
                                Toilet Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Location"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() => handleFilterChange("Location")}
                              >
                                Location
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg">
                            <p className="font-bold mb-3">Sort by:</p>
                            <div className="border px-4 py-2 rounded-md">
                              <span>Latest first</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {reviews.map((review, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg shadow-sm"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-lg font-black">
                                  {review.title}
                                </p>
                                <div className="text-gray-500 text-sm mt-1">
                                  <span>{review.author}</span>
                                  <span className="mx-2">•</span>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                              <span className="text-sm border border-blue-600 rounded-md w-[39px]  px-2 py-1 font-bold">
                                {review.rating}
                              </span>
                            </div>
                            <p className="font-semibold mt-2 mb-1">
                              {review.category}
                            </p>
                            <p>{review.content}</p>
                            <p className="mt-2 cursor-pointer text-blue-500">
                              Helpful <span className="ml-2">👍</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-4">
                        <ul className="flex space-x-2">
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              disabled={activePage === 1}
                              onClick={() => handlePageChange(activePage - 1)}
                            >
                              «
                            </button>
                          </li>
                          <li>
                            <button
                              className={`px-4 py-2 ${
                                activePage === 1
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-700"
                              } rounded-lg`}
                              onClick={() => handlePageChange(1)}
                            >
                              1
                            </button>
                          </li>
                
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              onClick={() => handlePageChange(activePage + 1)}
                            >
                              »
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section> */}
        </>}



      </div>


</>
  )
}



export default HotelSlugComp
