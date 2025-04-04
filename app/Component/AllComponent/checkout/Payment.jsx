"use client";

import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoIosThumbsUp } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { RiHospitalLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import Link from "next/link";
import axios from "axios";
import { apilink } from "../../common";

const page = ({CheckOutData}) => {
  // const [inuranceShowMOre,setInuranceShowMOre]=useState(false)
  const [insuranceHide, setInsurance] = useState(false);
const [user,setUser]=useState()

  const offers = [
    {
      id: 1,
      title: "DELIGHT",
      description:
        "Win a flight, hotel stay, and holidays and get assured voucher worth INR 4000",
      terms: "T&C apply",
    },
    {
      id: 2,
      title: "UPIPAY",
      description:
        "Get up to Rs. 750 Off on Flights and holidays and get assured voucher ",
      terms: "T&C apply",
    },
    {
      id: 3,
      title: "HSBCEMI",
      description:
        "Use this coupon and get up to Rs 4000 off holidays and get assured voucher",
      terms: "T&C apply",
    },
    {
      id: 1,
      title: "AUEMI",
      description:
        "Use this coupon get Rs 4005 OFF For  payments holidays and get assured voucher",
      terms: "T&C apply",
    },
    {
      id: 2,
      title: "UPIPAY",
      description: "Get up to Rs. 750 Off on Flights",
      terms: "T&C apply",
    },
  ];

  const hospitalizationData = [
    { id: 1, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 2, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 3, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 4, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 5, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 6, title: "Hospitalization", sumInsured: "INR 1,00,000" },
    { id: 7, title: "Hospitalization", sumInsured: "INR 1,00,000" },
  ];
 
  
  useEffect(()=>{

    const userid=JSON.parse(localStorage.getItem("NextGenUser"));
  // if(!userid) router.push("/user/login")
  
  const fetchuserData=async()=>{
  
  
    const data= await axios.get(`${apilink}/user/${userid}`);
    if(data.data.success){
      setUser(data.data.user);
    }
  
  }
  fetchuserData()
  
  },[])
  const formatDate = (dateStr) => {
    const targetDate = new Date(dateStr);
  

    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = targetDate.toLocaleDateString('en-US', options);
  
  
    const [weekday, month, day, year] = formattedDate.split(/[\s,]+/);
    return `${weekday}-${day} ${month} ${year}`;
  };

  return (
    <div className="">
      
      <div className="md:grid md:grid-cols-6 gap-5 mt-3">
        <div className=" col-span-4 leftSide space-y-6">
          <div className="FirstChild border rounded-lg shadow-lg">
            <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg">
              <div className="flex items-center gap-3 ">
                <div className="border-4 bg-white border-orange-100  h-10 w-10 flex justify-center items-center text-2xl rounded-full">
                  <GiAirplaneDeparture />
                </div>
                <span className="text-sm md:text-xl font-medium">
                  Flight Detail
                </span>
              </div>
            </div>
            <div className=" ">
              <div className=" rounded-sm border  px-3 py-4 relative space-y-5">
                <h3 className="bg-gray-600 text-white text-xs w-fit px-3 font-bold rounded-br-xl absolute top-0 left-0">
                  Depart
                </h3>
                <div className="flex items-center gap-3 text-md md:text-xl">
                  <IoAirplaneSharp className=" font-bold -rotate-45" />
                  <div className="flex items-center gap-1">
                    <h4 className="">{CheckOutData?.Segments[0][0]?.Origin?.Airport?.CityName} - {CheckOutData?.Segments[0][0]?.Destination?.Airport?.CityName}</h4>
                    <p className="border-s-2 border-black px-2  text-sm">
                    {formatDate(CheckOutData?.Segments[0][0]?.Origin?.DepTime)}
                    </p>
                  </div>
                </div>
                <div className="flex  gap-5 flex-col  md:flex-row items-start  justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="flex items-center gap-4 ">
                    <img
                    src={`/images/${CheckOutData?.Segments[0][0]?.Airline?.AirlineCode}.png`}
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                    <p className="text-sm md:text-lg">{CheckOutData?.Segments[0][0]?.Airline?.AirlineName}</p>
                      <p className="text-xs">{CheckOutData?.Segments[0][0]?.Airline?.AirlineCode}-{CheckOutData?.Segments[0][0]?.Airline?.FlightNumber}</p>
                      <p className="text-xs">{CheckOutData?.Segments[0][0]?.CabinClass}</p>
                    </div>
                  </div>

                  <div className="flex  w-full  gap-2 justify-between md:w-[70%] md:px-3">
                    <div className="flex flex-col gap-1  items-start">
                      <h4 className="font-extrabold text-md md:text-xl">
                        15:10
                      </h4>
                      <div className="flex flex-col text-xs ">
                        <span className="font-bold text-nowrap">
                        {CheckOutData?.Segments[0][0]?.Origin?.Airport?.CityName} ({CheckOutData?.Segments[0][0]?.Origin?.Airport?.AirportCode} )
                        </span>
                        <span>{ formatDate(CheckOutData?.Segments[0][0]?.Origin?.DepTime)}</span>
                        <span>Terminal -1</span>
                      </div>
                    </div>

                    <div className="flex  flex-col gap-4 items-center">
                      <p className="text-xs">{ Math.floor(CheckOutData?.Segments[0][0]?.Duration / 60)}h-{CheckOutData?.Segments[0][0]?.Duration % 60}m</p>
                      <div className="border-t-2 border-black border-dotted w-full flex justify-center relative">
                        <div className="absolute -top-3 bg-white text-lg rounded-full">
                          <GiAirplaneDeparture />
                        </div>
                      </div>
                      <span className="border border-green-400 px-6 md:px-8 m-0 py-1 rounded-full font-bold text-[0.5rem]">
                        REFUNDABLE
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 items-start">
                      <h4 className="font-extrabold text-sm md:text-xl">
                        17:40
                      </h4>
                      <div className="flex flex-col text-xs ">
                        <span className="text-nowrap font-bold">
                        {CheckOutData?.Segments[0][0]?.Destination?.Airport?.CityName} ({CheckOutData?.Segments[0][0]?.Destination?.Airport?.AirportCode})
                        </span>
                        <span>{formatDate(CheckOutData?.Segments[0][0]?.Destination?.ArrTime)}</span>
                        <span>Terminal -2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-5">
                  <h3 className="bg-gray-200  font-bold w-fit text-gray-800 rounded-full px-5 text-xs py-1">
                    saver
                  </h3>
                  <p className="text-xs text-gray-400">Fare Rules Baggage</p>
                </div>
                {/* payment page part */}
                <div className="border-2 ">
                  <div className="p-2 bg-gray-50">
                  <div className="flex justify-between items-center mx-20  text-sm font-semibold">
                    <p className="text-gray-400">Airline</p>
                    <p className="text-gray-400">Check-in-Baggage</p>
                    <p className="text-gray-400">Cabin Baggage</p>
                  </div>
                  </div>
                  <div className="flex justify-between items-start p-2">
                    <div className="flex justify-start items-center w-[35%] gap-6">
                      <div className="flex  items-center   md:bg-transparent px-3 rounded-t-lg md:rounded-t-none py-4 md:py-0">
                        <img
                       src={`/images/${CheckOutData?.Segments[0][0]?.Airline?.AirlineCode}.png`}
                          alt="refund policy"
                          className="h-7 w-h-7 rounded-lg"
                        />
                      </div>
                      <div className="">
                        <h6 className=" text-black text-sm font-semibold capitalize">
                        {CheckOutData?.Segments[0][0]?.Airline?.AirlineName}
                        </h6>
                        <p className="text-gray-500 text-[12px] font-semibold">  {CheckOutData?.Segments[0][0]?.Airline?.AirlineCode}-{CheckOutData?.Segments[0][0]?.Airline?.FlightNumber}</p>
                      </div>
                    </div>
                    <div className="text-black text-sm font-semibold capitalize  w-[28%]">  {CheckOutData?.Segments[0][0]?.Baggage}</div>
                    <div className="text-black text-sm font-semibold capitalize w-[20%]">{CheckOutData?.Segments[0][0]?.CabinBaggage}</div>
                  </div>
                </div>
                {/* payment page part */}

              </div>
            </div>
          </div>








        <div className="FirstChild border rounded-lg shadow-lg">
            <div className="bg-[#D5EEFE] py-3 px-4 rounded-t-lg">
              <div className="flex items-center gap-3 ">
                <div className="border-4 bg-white border-orange-100  h-10 w-10 flex justify-center items-center text-2xl rounded-full">
                  <GiAirplaneDeparture />
                </div>
                <span className="text-sm md:text-xl font-medium">
                Traveller Details
                </span>
              </div>
            </div>
            <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-sm font-normal p-4">
  <li>
    <h3 className="font-medium">E-mail</h3>
    <p className="text-gray-600 pt-2 break-words">{user?.email}</p>
  </li>
  <li>
    <h3 className="font-medium">Contact No.</h3>
    <p className="text-gray-600 pt-2">7988532993</p>
  </li>
  <li>
    <h3 className="font-medium">Adult (1)</h3>
    <p className="text-gray-600 pt-2">Mr. {user?.name}</p>
  </li>
  <li>
    <h3 className="font-medium">Child (0)</h3>
  </li>
  <li>
    <h3 className="font-medium">Infant (0)</h3>
  </li>
</ul>

               
            </div>
          </div>










          <div className="FirstChild border rounded-lg shadow-lg">
  <div className="flex flex-row justify-between items-center p-6 gap-4">
    <div className="flex items-center gap-4 text-center md:text-left">
      <img
        src="/images/checkout/wallet.webp"
        alt="wallet"
        className="h-6 w-6 md:h-8 md:w-8 object-cover"
      />
      <span className="text-sm sm:text-base lg:text-lg font-medium">
        You have to login to use your <strong>wallet amount</strong>
      </span>
    </div>
    <Link
      className="bg-blue-500 text-white font-bold text-sm sm:text-base md:text-lg rounded-xl px-2 md:px-4 py-2 text-center"
      href="/"
    >
      Log In
    </Link>
  </div>
</div>


         
        </div>

        <div className=" w-full md:col-span-2 rightSide space-y-4 md:px-4  ">
          <div className="sticky top-0">
            <div className="priceBoxAndDetails border rounded shadow-lg">
              <div className="border rounded-t flex items-center px-3 py-2 bg-[#D1EAFF]">
                <h3>Price Summary</h3>
              </div>
              <div className="flex justify-between px-3 py-3 text-sm border-b">
                <p>Adult x 1</p>
                <p className="flex  items-center font-bold text-xs">
                  <FaRupeeSign />
                  {CheckOutData?.Fare?.BaseFare}
                </p>
              </div>
              <div className="flex justify-between px-3 py-3 text-xs border-b">
                <p>Total Taxes +</p>
                <p className="flex  items-center font-bold">
                  <FaRupeeSign />
                  {CheckOutData?.Fare?.Tax +CheckOutData?.Fare?.OtherCharges}
                </p>
              </div>
              <div className="flex justify-between px-3 py-3 t border-b">
                <p>Medical Refund Policy </p>
                <div className="flex items-center gap-2 text-xs">
                  <p className="flex  items-center font-bold line-through">
                    <FaRupeeSign />
                    00
                  </p>
                  <span className="font-bold text-green-500">Free</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-3 py-3 font-bold text-lg text-red-600">
                <p>Grand Total</p>
                <p className="flex items-center">
                  <FaRupeeSign />
                  {CheckOutData?.Fare?.PublishedFare}
                </p>
              </div>
            </div>
            <div className="offersAndPromoCode border rounded shadow-lg">
              <div className="bg-[#2196F3] px-3 py-2 text-white ">
                Offers and Promo Codes
              </div>
              <div className="border-b py-3 px-3 flex justify-center lg:justify-beween flex-wrap gap-2 lg:gap-0">
                <input
                  type="text"
                  placeholder="ENTER COUPON CODE"
                  className="border-b outline-none text-gray-600 uppercase font-semibold text-sm w-fit"
                />
                <div>
                  <button className="bg-[#2196F3] px-16 lg:px-8 py-3 lg:py-1 rounded-full text-sm font-bold text-white">
                    apply
                  </button>
                </div>
              </div>

              <div className="applyOffers  max-h-[300px] overflow-hidden overflow-y-scroll ">
                {offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="flex items-start gap-2 border-b py-4 px-3"
                  >
                    <div className="rounded-full w-[22px] flex items-center justify-center h-[18px] border hover:bg-gray-700">
                      <FaCheck className="text-xs text-white" />
                    </div>
                    <div>
                      <h6 className="font-bold text-xs">{offer.title}</h6>
                      <p className="text-xs">{offer.description}</p>
                      <p className="text-[10px] font-bold uppercase text-[#2196F3]">
                        {offer.terms}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="booking">
              <button className="bg-[#DA5200] text-xl text-white rounded-full w-full py-4"
            
              >
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;