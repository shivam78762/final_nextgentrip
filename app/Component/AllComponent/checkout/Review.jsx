"use client";

import React, { useState } from "react";
import { MdArrowForwardIos, MdEmail } from "react-icons/md";
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

const page = ({ setActiveTab,CheckOutData }) => {
  // const [inuranceShowMOre,setInuranceShowMOre]=useState(false)
  const [insuranceHide, setInsurance] = useState(false);

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
  const [ email, setEmail] = useState('')
  const [showError, setShowError] = useState(false);
const handleClick =()=>{
    if(email.trim() ===""){
        setShowError(true)

    }else if (!/\S+@\S+\.\S+/.test(email)) {
        setShowError(true);
    }else{
        setShowError(false)
        setActiveTab(2)

    }
}
console.log(CheckOutData,"sdcsdnmcpwepn")
  
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
                <div>
                <span className="text-sm md:text-xl font-medium">
                  Flight Detail
                </span>
               
                </div>
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
                    <h4 className="">{CheckOutData?.Origin?.Airport?.CityName} - {CheckOutData?.Destination?.Airport?.CityName}</h4>
                    <p className="border-s-2 border-black px-2  text-sm">
                      { new Date(CheckOutData?.Origin?.DepTime)}
                    </p>
                  </div>
                </div>
                <div className="flex  gap-5 flex-col  md:flex-row items-start  justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="flex items-center gap-4 ">
                    <img
                      src={`/images/${CheckOutData?.Airline?.AirlineCode}.png`}
                      alt=""
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                      <p className="text-sm md:text-lg">{CheckOutData?.Airline?.AirlineName}</p>
                      <p className="text-xs">{CheckOutData?.Airline?.AirlineCode}-{CheckOutData?.Airline?.FlightNumber}</p>
                      <p className="text-xs">{CheckOutData?.CabinClass}</p>
                    </div>
                  </div>

                  <div className="flex  w-full  gap-2 justify-between md:w-[70%] md:px-3">
                    <div className="flex flex-col gap-1  items-start">
                      <h4 className="font-extrabold text-md md:text-xl">
                        15:10
                      </h4>
                      <div className="flex flex-col text-xs ">
                        <span className="font-bold text-nowrap">
                        {CheckOutData?.Origin?.Airport?.CityName} ({CheckOutData?.Origin?.Airport?.AirlineCode} )
                        </span>
                        <span>Fri-20 Sep 2024</span>
                        <span>Terminal -1</span>
                      </div>
                    </div>

                    <div className="flex  flex-col gap-4 items-center">
                      <p className="text-xs">{ Math.floor(CheckOutData?.Duration / 60)}h-{CheckOutData?.Duration % 60}m</p>
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
                          {CheckOutData?.Destination?.Airport?.CityName} ({CheckOutData?.Destination?.Airport?.AirlineCode})
                        </span>
                        <span>Fri-20 Sep 2024</span>
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
              </div>
            </div>
          </div>

          <div className="secondChild  space-y-2 border rounded-lg md:px-3 md:py-4 shadow-lg ">
            <div className="flex  items-center gap-2 bg-blue-400 md:bg-transparent px-3 rounded-t-lg md:rounded-t-none py-4 md:py-0">
              <img
                src="/images/checkout/Indigo.webp"
                alt="refund policy"
                className="h-8 w-8 rounded-lg"
              />
              <div>
                <h6 className="md:text-blue-400 text-black text-sm font-bold capitalize">
                  Free Medical Refund policy
                </h6>
              </div>
            </div>
            <p className="text-sm  ps-5">
              Get full airline refund, if you cancel tickets due to illness or
              sickness. This service is provided at sickness. This service is
              provided at{" "}
              <span className="font-bold text-xs">
                ZERO additional charges.
              </span>
            </p>
            <div className="inputVlaues text-xs md:text-sm ps-2 md:ps-5 space-y-2 py-3 md:py-0">
              <div className="flex gap-4  ">
                <input type="radio" id="yes" name="refund" />
                <label htmlFor="yes">
                  {" "}
                  Yes, I want to add Medical Refund Policy (FREE) to the Flight
                </label>
              </div>
              <div className="flex gap-4">
                <input type="radio" id="No" name="refund" />
                <label htmlFor="No">
                  {" "}
                  No, I dont wish to add Medical Refund Policy (FREE) to the
                  Flight
                </label>
              </div>
            </div>
          </div>

          <div className="third space-y-2 border rounded-lg shadow-lg ">
            <div className="px-3 py-2 bg-[#DCFBD0] flex items-start gap-3 border">
              <div className="h-10 w-10 border-4 flex justify-center items-center rounded-full border-green-400">
                <IoIosThumbsUp className="text-green-500 text-xl" />
              </div>
              <div className="flex flex-col ">
                <h4 className="font-bold text-sm">Good to know</h4>
                <p className="text-[0.7rem]">Information you should Know</p>
              </div>
            </div>
            <ul className="list-disc px-8 text-sm py-3 space-y-4 md:space-y-1">
              <li>
                15 Kgs per passenger Check-in Baggage included for your selected
                flight on the sector Delhi to Mumbai
              </li>
              <li>
                Airline Cancellation Fee is Rs 2999 per passenger for your
                selected flight on the sector Delhi to Mumbai
              </li>
              <li>Remember to web check-in before arriving at the airport</li>
            </ul>
          </div>

          <div className="Fourth border  rounded-lg shadow-lg">
            <div className="sub1">
              <div className="px-3 py-2 bg-[#E0D5FF] flex flex-row justify-between md:items-center  border">
                <div className="flex flex-col md:flex-row items-start gap-3">
                  <div className="flex justify-center items-center rounded-full border-green-400">
                    <MdOutlineSecurity className="text-purple-800 text-4xl" />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      Add Travel Insurance and Secure your Trip with ACKO View/
                      print your booking{" "}
                      <span className="font-bold flex items-center">
                        {" "}
                        <FaRupeeSign />
                        199/Person
                      </span>
                    </h4>
                    <p className="text-[0.7rem]">
                      (Upon Selecting Travel Insurance ,You accept the Terms and
                      Conditions of the travel insurance policy )
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => setInsurance(!insuranceHide)}
                  className="cursor-pointer"
                >
                  <IoIosArrowForward
                    className={`${insuranceHide ? "rotate-90" : ""}`}
                  />
                </div>
              </div>
              <div
                className={`mainShow ${
                  insuranceHide
                    ? "  h-max duration-500  opacity-100"
                    : "max-h-0 py-0 opacity-0"
                } `}
              >
                <div className="swiper section sub2 grid grid-cols-2 py-5 px-4  gap-4 items-center text-nowrap">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    loop={true}
                    className="mySwiper mt-5"
                    breakpoints={{
                      // when window width is <= 640px
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      // when window width is > 640px
                      641: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                  >
                    {hospitalizationData.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="border rounded py-3 px-4 flex flex-col items-center gap-2">
                          <RiHospitalLine className="text-red-400" />
                          <h5 className="font-bold">{item.title}</h5>
                          <p className="font-semibold">
                            Sum Insured: {item.sumInsured}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="sub3 radioSection ps-3 text-xs pt-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input type="radio" id="insurance" name="insurance" />
                  <label htmlFor="insurance">
                    Yes i want to secure my trip with insurance
                  </label>
                </div>
                <p className="text-gray-800 bg-[#DCFBD0] text-sm w-fit py-1 px-5 rounded">
                  More than 306% of our customer choose to secure their trip
                </p>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <div className="flex items-center gap-2">
                  <input type="radio" id="insurance" name="insurance" />
                  <label htmlFor="insurance">
                    No i do not want to secure my trip{" "}
                  </label>
                </div>
                <p className=" text-sm w-fit py-1 px-5 rounded bg-[#FFF3CD] text-amber-900">
                  <span className="font-bold">Mr. USER</span> got Rs 2000 for
                  the dealy in trip since insurance was done for the trip
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 ">
              <h3 className="text-lg ">Contact Information</h3>
              <p className="text-[12px] text-gray-500 mt-1">
                Your ticket will be sent to this email address
              </p>
            </div>
            {showError && (
                 <p className="text-sm p-4 my-2 w-fit bg-[#ab2515] text-white font-medium ">
                 Please enter a valid email address *
                   </p>
            )}
            <div style={{ position: "relative" }} className="py-2">
              <input
                type="email"
                className="border-2 p-3"
                autoComplete="off"
                name="txtEmailId"
                id="txtEmailId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter Email Address"
                style={{
                  width: "64%",
                  height: "13%",
                  paddingLeft: "2.5rem", // Add space for the icon
                }}
              />
              <MdEmail
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                  fontSize: "1.5rem",
                  color: "#888", // Adjust color as needed
                }}
              />
            </div>
            <p className="text-sm text-red-600 ">
            Please enter your email address *
              </p>
          </div>
        </div>

        <div className=" w-full md:col-span-2 rightSide space-y-4 md:px-4  ">
          <div className="sticky top-0 ">
            <div className="priceBoxAndDetails border rounded shadow-lg">
              <div className="border rounded-t flex items-center px-3 py-2 bg-[#D1EAFF]">
                <h3>Price Summary</h3>
              </div>
              <div className="flex justify-between px-3 py-3 text-sm border-b">
                <p>Adult x 1</p>
                <p className="flex  items-center font-bold text-xs">
                  <FaRupeeSign />
                  4516
                </p>
              </div>
              <div className="flex justify-between px-3 py-3 text-xs border-b">
                <p>Total Taxes +</p>
                <p className="flex  items-center font-bold">
                  <FaRupeeSign />
                  4516
                </p>
              </div>
              <div className="flex justify-between px-3 py-3 t border-b">
                <p>Medical Refund Policy </p>
                <div className="flex items-center gap-2 text-xs">
                  <p className="flex  items-center font-bold line-through">
                    <FaRupeeSign />
                    4516
                  </p>
                  <span className="font-bold text-green-500">Free</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-3 py-3 font-bold text-lg text-red-600">
                <p>Grand Total</p>
                <p className="flex items-center">
                  <FaRupeeSign />
                  5,235
                </p>
              </div>
            </div>
            <div className="offersAndPromoCode border rounded shadow-lg ">
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
              <button
                className="bg-[#DA5200] text-xl text-white rounded-full w-full py-4"
                onClick={()=>{handleClick()}}
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
