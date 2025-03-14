"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";

const page = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.id);
  };

  return (
    <>
      <div className="bg-white shadow custom-color  px-20 py-6">
        <div className="flex flex-col ">
          <div className="text-xl font-semibold text-white">Review Booking</div>

          <p className="text-white font-semibold py-3">Bangalorex</p>
          <div className="flex items-center">
            <div className="bg-gray-200 text-gray-700 py-2 px-4 font-bold rounded-full text-sm">
              Hourly Rental
            </div>
            
            <div className="text-white">Pickup : Thu, 12 Sep ‘24, 11:30 AM</div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 px-20 py-8">
        <div className=" w-3/4 ">
          <div className="flex flex-col md:flex-row justify-between border ">
            <div className="flex flex-col md:flex-row">
              <div className="flex justify-center ">
                <Image
                  className="w-full h-full md:h-40"
                  src="/images/taxi.webp"
                  alt="Cab Image"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-4 flex flex-col justify-center space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-base md:text-lg font-black">
                    Tata Tigor
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500 text-white py-1 px-2 rounded">
                      <span className="font-bold text-sm">4.6</span>
                      <span className="text-xs">/5</span>
                    </div>
                    <p className="text-gray-500 text-xs">4400 ratings</p>
                  </div>
                </div>
                <div className="text-sm text-black flex flex-wrap space-x-2">
                  <span className="flex items-center">
                    <div className="w-2.5 h-2.5 bg-black rounded-full mx-1"></div>
                    Sedan
                  </span>
                  <span className="flex items-center">
                    <div className="w-2.5 h-2.5 bg-black rounded-full mx-1"></div>
                    AC
                  </span>
                  <span className="flex items-center">
                    <div className="w-2.5 h-2.5 bg-black rounded-full mx-1"></div>
                    4 Seats
                  </span>
                  <span className="flex items-center">
                    <div className="w-2.5 h-2.5 bg-black rounded-full mx-1"></div>
                    10 kms included
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-sm md:text-lg font-bold text-green-600">
                    Electric & Sustainable
                  </span>
                  <Image
                    className="w-4 h-4 md:w-5 md:h-5"
                    src="/images/charging-station.webp"
                    alt="Green Leaf"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end pt-0 md:pt-4 p-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <Image
                    className="w-3 h-3 md:w-4 md:h-4 mr-2"
                    src="/images/location.webp"
                    alt="Extra km fare"
                    width={16}
                    height={16}
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="font-bold text-sm md:text-base">
                      Extra km fare
                    </div>
                    <div className="text-xs md:text-sm ">
                      ₹25.0/km after 10 kms
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image
                    className="w-3 h-3 md:w-4 md:h-4 mr-2"
                    src="/images/alarm-plus.webp"
                    alt="Extra km fare"
                    width={16}
                    height={16}
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="font-bold text-sm md:text-base">
                      Extra time fare
                    </div>
                    <div className="text-xs md:text-sm ">
                      ₹3.0 per min after 1hr
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image
                    className="w-3 h-3 md:w-4 md:h-4 mr-2"
                    src="/images/gas-station.webp"
                    alt="Extra km fare"
                    width={16}
                    height={16}
                  />
                  <div className="flex items-center justify-between w-full">
                    <div className="font-bold text-sm md:text-base">
                      Fuel Type
                    </div>
                    <div className="text-xs md:text-sm ">Electric Car</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image
                    className="w-3 h-3 md:w-4  md:h-4 mr-2"
                    src="/images/remove.webp"
                    alt="Extra km fare"
                    width={16}
                    height={16}
                  />
                  <div className="flex items-center gap-10 w-full">
                    <div className="font-bold text-sm md:text-base">
                      Cancellation
                    </div>
                    <div className="text-xs text-end md:text-sm text-green-700">
                      Free till 1 hour of departure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 border p-4">
            <div className=" text-black">
              <p className="font-bold text-2xl text-black mb-3">
                Driver & Cab details
              </p>
              <p className="text-base">
                <span>
                  Cab operator will be assigned on booking completion. Cab and
                  driver details will be shared up to 15 mins prior to
                  departure.
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-6 flex-grow border p-4">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="flex gap-3 items-center mb-5">
                <FaCheck className="text-green-500" />
                <p className="font-black text-xl text-black">
                  Inclusions&nbsp;
                  <span className="font-normal">(Included in the Price)</span>
                </p>
              </div>
              <ul className="text-black list-disc pl-5 font-bold">
                <li>
                  <p>
                    <span>Driver Allowance</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span>1 hr(s) and 10 kms included</span>
                  </p>
                </li>
              </ul>
            </div>

            <div className="hidden md:block border-l border-gray-300 mx-4"></div>

            <div className="w-full md:w-1/2">
              <div className="flex gap-3 items-center mb-5">
                <FaTimes />
                <p className="font-black text-xl text-black">
                  Exclusions&nbsp;
                  <span className="font-normal">(Extra Charges)</span>
                </p>
              </div>
              <ul className="text-black pl-5 list-disc">
                <li>
                  <div className="flex justify-between mb-2">
                    <span className="flex-grow">Toll Charges</span>
                    <span className="font-bold">As applicable</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-2">
                    <span className="flex-grow">Parking Charges</span>
                    <span className="font-bold">As applicable</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-2">
                    <span className="flex-grow">State Tax</span>
                    <span className="font-bold">As applicable</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-2">
                    <span className="flex-grow">Waiting Charges</span>
                    <span className="font-bold">After 10 mins, ₹ 1.5/min</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-2">
                    <span className="flex-grow">Fare beyond 10 Kms</span>
                    <span className="font-bold">₹. 32.86/km</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-2">
                    <span className="flex-grow">Fare beyond 1 Hr</span>
                    <span className="font-bold">₹. 3.65 per min</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border p-4 my-5">
            <p className="font-black text-2xl text-black mb-5">Trip details</p>

            <div className="border-b mb-5">
              <div className="">
                <div className=" flex flex-col">
                  <label className="font-bold mb-2 text-sm text-black">
                    Pick-up Address
                    <span className="font-normal text-xs text-gray-400">
                      &nbsp;(This will help our driver reach you on time)
                    </span>
                  </label>

                  <input
                    data-testid=""
                    readOnly
                    className=" border rounded p-2"
                    type="text"
                    placeholder="Enter exact pick-up address/nearby location / building name"
                  />
                </div>
              </div>
            </div>

            <p className="font-bold text-lg text-black mb-5">
              Confirm Traveller information
            </p>

            <div className=" text-black">
              <div className="flex justify-between">
                <div className="w-1/2">
                  <p className="font-bold mb-2">Name</p>
                  <input
                    className="border rounded p-2 w-full"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="w-2/5 flex flex-col">
                  <p className="font-bold text-sm mb-2">Gender</p>
                  <div className="flex items-center gap-5">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="mr-2"
                      />
                      <span className="font-normal text-lg">Male</span>
                    </label>
                    <label className="flex items-center ml-5">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="mr-2"
                      />
                      <span className="font-normal text-lg">Female</span>
                    </label>
                    <label className="flex items-center ml-5">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        className="mr-2"
                      />
                      <span className="font-normal text-lg">Other</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <div className="w-1/2">
                  <label className="font-bold mb-2 block">
                    Email Id
                    <span className="font-normal text-xs text-gray-400">
                      (Your booking confirmation will be sent here)
                    </span>
                  </label>
                  <input
                    className="border rounded p-2 w-full"
                    type="text"
                    placeholder="Enter Email ID"
                  />
                </div>

                <div className="w-2/5 flex flex-col">
                  <label className="font-bold mb-2">Contact Number</label>
                  <div className="relative">
                    <span className="font-bold absolute left-0 pl-2 pt-2">
                      +
                    </span>
                    <input
                      className="pl-5 border rounded-l w-10 p-2"
                      type="text"
                      maxLength="3"
                      placeholder="91"
                      value="91"
                      data-testid="country_code_input"
                    />
                    <span className="font-bold absolute pl-2 pt-2">-</span>
                    <input
                      className="border rounded-r w-9/12 p-2 ml-6 "
                      type="text"
                      maxLength="10"
                      name="phone"
                      placeholder="Enter 10 digit mobile number"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p>
                  By proceeding to book, I Agree to Next Gen 's
                  <a href="#" className="font-bold">
                    Privacy Policy
                  </a>
                  ,
                  <a href="#" className="font-bold">
                    User Agreement
                  </a>
                  and
                  <a href="#" className="font-bold">
                    Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border p-4 my-5">
            <p className="font-bold text-xl text-black mb-7">
              Read before you book!
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li>
                <div>
                  <p className="text-lg font-bold text-black mb-1">
                    Instant Booking
                  </p>
                  <p className="leading-6 pt-2 text-base">
                    Book your ride in minutes through our app or website.
                    Whether it's a daily commute, a quick errand, or a
                    last-minute meeting, Next Gen  has the perfect cab for your
                    local travel needs.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p className="text-lg font-bold text-black mb-1">
                    Wide Coverage
                  </p>
                  <p className="leading-6 pt-2 text-base">
                    Get picked up from anywhere in the city and reach your
                    destination without hassle.Transparent and competitive
                    pricing, so you always know what you’re paying.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p className="text-lg font-bold text-black mb-1">
                    Multiple Cab Options
                  </p>
                  <p className="leading-6 pt-2 text-base">
                    Choose from budget cars, sedans, or luxury vehicles to suit
                    your preference and budget. Pay with cash, credit card, or
                    digital wallets.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p className="text-lg font-bold text-black mb-1">
                    Office Commutes
                  </p>
                  <p className="leading-6 pt-2 text-base">
                    Make your daily work commute stress-free with our reliable
                    cab service. Heading to the mall or local market? We’ll get
                    you there comfortably.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p className="text-lg font-bold text-black mb-1">
                    Outings with Friends & Family
                  </p>
                  <p className="leading-6 pt-2 text-base">
                    Enjoy a seamless ride to your favorite restaurants, parks,
                    or entertainment spots. Reach the airport or train station
                    on time, every time.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p className="text-lg font-bold text-black mb-1">
                    Enter Pickup & Drop Location
                  </p>
                  <p className="leading-6 pt-2 text-base">
                    Specify your pickup point and destination. Select from a
                    range of cab types—economy, premium, or luxury.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p className="text-lg font-bold text-black mb-1">
                    Confirm & Track
                  </p>
                  <p className="leading-6 pt-2 text-base">
                    Confirm your booking and track your cab in real-time. Sit
                    back and enjoy a smooth and comfortable ride with Next Gen .
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p className="text-lg font-bold text-black mb-1">Delays</p>
                  <p className="leading-6 pt-2 text-base">
                    Due to traffic or any other unavoidable reason, pickup may
                    be delayed by 30 mins.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p className="text-lg font-bold text-black mb-1">
                    Real-Time Driver Verification
                  </p>
                  <p className="leading-6 pt-2 text-base">
                    Receive driver details, including name, vehicle number, and
                    ratings before your ride starts.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p className="text-lg font-bold text-black mb-1">
                    Share Ride Status
                  </p>
                  <p className="leading-6 pt-2 text-base">
                    Share your ride’s live status with friends or family for
                    added security and peace of mind. Access emergency support
                    directly from the app, available during your ride.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/4 sticky top-24 h-max">
          <div className=" text-blue-600 text-sm flex items-center bg-blue-200 px-3 py-2">
            <FaCheckCircle className="w-4 h-4 mr-2" />
            <span className="font-semibold">
              Free Cancellation before available
            </span>
            <span data-testid="" className="  ml-2">
              <IoMdInformationCircle className="w-5 h-5" />
            </span>
            <div className=" z-50 group">
              <div className=" bg-white text-black p-4 rounded-lg shadow-lg absolute hidden group-hover:block">
                <p className="flex justify-between text-lg mb-6">
                  <span>Cancellation time</span>
                  <span>Charges</span>
                </p>
                <p className="flex justify-between text-base leading-6 mb-4">
                  <span>Till 12 Sep 2024 10:30 AM</span>
                  <span>Free</span>
                </p>
                <p className="flex justify-between text-base leading-6 mb-4">
                  <span>Till 12 Sep 2024 11:30 AM</span>
                  <span>₹30</span>
                </p>
                <p className="flex justify-between text-base leading-6">
                  <span>After 12 Sep 2024 11:30 AM</span>
                  <span>₹464</span>
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <div className=" overflow-hidden ">
              {/* <div className="relative flex justify-between items-center p-4 bg-gray-100 border rounded-lg">
                <div>
                  <p className="text-lg font-bold mb-2">Price updated!</p>
                  <p className="text-sm">
                    We have calculated price as per your new drop-off location
                  </p>
                </div>
                <span className="cursor-pointer text-gray-500 text-2xl">✖</span>
              </div> */}
              <ul className="">
                <li>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payOption"
                      id="option1"
                      checked={selectedOption === "option1"}
                      onChange={handleOptionChange}
                      className="mr-2"
                    />
                    <div className="flex justify-between items-center w-full">
                      <p className="font-semibold text-base">
                        Make part payment now
                        <span className="text-sm font-medium block">
                          Pay the rest to the driver
                        </span>
                      </p>
                      <span className="font-semibold text-xl">₹ 180</span>
                    </div>
                  </label>
                </li>
                <li>
                  <label className="flex mt-3 items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payOption"
                      id="option2"
                      checked={selectedOption === "option2"}
                      onChange={handleOptionChange}
                      className="mr-2"
                    />
                    <div className="flex justify-between w-full">
                      <p className="font-semibold text-base">
                        Make full payment now
                      </p>
                      <span className="font-semibold text-xl">₹ 517</span>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-lg">Total Amount</p>
              <span className="font-bold text-2xl">₹ 517</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <p>Inclusive of GST</p>
              <div>
                <p className="font-bold text-blue-500">Fare Breakup</p>
              </div>
            </div>
            <div className=" mt-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-bold mb-2">Enter Coupon code</p>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="eg. CAB100"
                    className="border border-gray-300  py-2 px-4 flex-1"
                  />
                  <Link
                    href=""
                    className=" rounded-r-lg text-sm font-semibold absolute right-3 top-3"
                  >
                    APPLY
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="bg-blue-500 text-white px-4 py-2 w-full block mt-3 text-center rounded-lg text-lg font-semibold"
            >
              Pay ₹ 180 Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
