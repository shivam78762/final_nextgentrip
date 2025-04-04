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
                      
                    </p>
                  </div>
               
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
                      
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </section> 

       
        </>}



      </div>


</>
  )
}



export default HotelSlugComp
