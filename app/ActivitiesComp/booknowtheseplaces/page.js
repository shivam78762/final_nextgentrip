"use client"
import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar, FaClock, FaCopy, FaStar } from "react-icons/fa";
import { FaCheck, FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const page = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [travelerCounts, setTravelerCounts] = useState({
    adult: 0,
    child: 0,
    infant: 0,
    senior: 0,
    traveler: 0,
    couple: 0,
    youth: 0,
  });
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  const handleTravelerCountChange = (type, operation) => {
    setTravelerCounts((prevCounts) => {
      const newCount =
        operation === "add"
          ? prevCounts[type] + 1
          : Math.max(prevCounts[type] - 1, 0);
      return { ...prevCounts, [type]: newCount };
    });
  };

  const reviews = [
    {
      userName: "Climber17508989120",
      date: "2024-05-04T00:00:00Z",
      rating: 5,
      ratingType: { 1: "★", 2: "★★", 3: "★★★", 4: "★★★★", 5: "★★★★★" },
      title: "Amazing cultural adventure 😋",
      text: 'An amazing cultural adventure … I thoroughly enjoyed every bite of it! My tourguide Stanley is "the man" and knows everything and everyone in Old Delhi. Highly recommend!',
    },
    {
      userName: "Traveler567823",
      date: "2024-04-15T00:00:00Z",
      rating: 4,
      ratingType: { 1: "★", 2: "★★", 3: "★★★", 4: "★★★★", 5: "★★★★★" },
      title: "Great experience",
      text: "The tour was amazing, but the timing was a bit off. The guide was knowledgeable and friendly.",
    },
    {
      userName: "Explorer987654",
      date: "2024-03-22T00:00:00Z",
      rating: 3,
      ratingType: { 1: "★", 2: "★★", 3: "★★★", 4: "★★★★", 5: "★★★★★" },
      title: "Good, but room for improvement",
      text: "Overall a good tour, but it could have been better with more time at each location.",
    },
    // You can add more reviews here
  ];
  const inclusions = [
    "Comfortable Travel",
    "Personalized Experience",
    "Refreshments Provided",
    "Weather Considerations",
    "Photo Opportunities",
    "Weather Considerations",
    "Small Group Setting",
  ];
  const exclusions = [
    "Shopping of any items in the market",
    "Hotel pick-up and drop off",
    ,
  ];
  const [packages, setPackages] = useState([
    {
      id: 0,
      name: "Vegetarian Delight",
      duration: "5 hours (approx.)",
      description:
        "Vegetarian Food: In this tour of Old Delhi, we are exploring the vegetarian food of Old Delhi.",
      price: 3992,
    },
    {
      id: 1,
      name: "Non Vegetarian Delight",
      duration: "5 hours (approx.)",
      description:
        "Both Cuisines of Old Delhi: In this walk, we cover the Veg and Non-Vegetarian cuisine of Old Delhi.",
      price: 5377,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null); // State to track the active index

  const pkgChange = (index) => {
    setActiveIndex(index); // Set the clicked index as active
  };

  return (
    <>
      <div className="custom-color border-b text-white px-5 md:px-20 py-6">
        <div className="flex flex-col ">
          <div>
            <ul className="text-xs flex items-center flex-wrap gap-2">
              <li className="flex items-center gap-1 text-sm font-semibold  text-white">
                Home <MdKeyboardArrowRight />
              </li>
              <li className="flex items-center gap-1 text-base font-semibold text-white">
                Activities <MdKeyboardArrowRight />
              </li>
              <li className="hidden md:flex items-center gap-1 text-white text-base font-semibold ">
                Old Delhi Food and Heritage Walk
              </li>
            </ul>
          </div>

          <div className="text-xl font-bold py-3">
            Old Delhi Food and Heritage Walk
          </div>

          <div className="flex items-center gap-4">
            <div className=" text-[#ffc107] flex items-center text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-white">826 Reviews</p>
            <div className="flex gap-2 items-center">
              <FaLocationDot /> New Delhi
            </div>
          </div>
        </div>
      </div>
      <div className="block md:flex gap-10 px-3 md:px-20 py-8">
        <div className=" w-full md:w-3/4 ">
          <div className="p-4  border ">
            <h3 className="text-lg font-semibold">Select Package Options</h3>
            <div className="flex flex-col md:flex-row justify-between gap-4 mt-3">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className={`flex justify-between items-start flex-col sm:flex-row  p-4 border rounded-lg   ${
                    activeIndex === index ? "bg-blue-50" : "bg-white"
                  }`}
                  id={`varnt${pkg.id}`}
                  onClick={() => pkgChange(index)}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex flex-col cursor-pointer">
                      <h4 className="text-md font-semibold">{pkg.name}</h4>
                      {pkg.duration && (
                        <div className="flex gap-2 items-center mt-2 w-max py-2 px-4 bg-[#dbeafe]  text-blue-600">
                          <FaClock />
                          <span className="text-sm font-semibold">
                            {pkg.duration}
                          </span>
                        </div>
                      )}
                      <section>
                        <div className="article text-sm mt-2">
                          <p>{pkg.description}</p>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="flex flex-col items-end cursor-pointer mt-4 sm:mt-0">
                    <div className="text-xl font-bold">
                      ₹<span>{pkg.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-5 border p-4">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="mt-2 text-justify">
              The food and Heritage walk is an experience of a lifetime,
              ditching those typical tourist sites, here we are exploring it in
              depth as a local, experiencing the local cuisine which has been
              passed through generations (we eat 11 to 14 different food items),
              and fall in love with the legacy of the great Mughal dynasty.
              Showing you an insight into Old Delhi is the motive that is
              missing in guidebooks. Feel Shahjahanabad (Old Delhi) with us.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4   py-6  border p-4 ">
            <div className="border W-1/2 bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
              <h3 className="font-bold">Inclusions</h3>
              <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                {inclusions.map((inclusion, index) => (
                  <p key={index} className="flex items-center gap-2 text-sm">
                    <FaCheck className="text-green-700 text-sm" />
                    {inclusion}
                  </p>
                ))}
              </div>
            </div>
            <div className="border W-1/2 bg-[#FBEBEB] rounded-xl  px-3 py-2 flex flex-col gap-5">
              <h3 className="font-bold">Exclusions</h3>
              <div className="overflow-x-hidden h-40 exclusions   overflow-scroll flex flex-col gap-2">
                {/* <p className="flex items-center gap-1 text-sm">
                  <RxCross2 className="text-red-700" />
                  Water sports activities
                </p> */}
                {exclusions.map((exclusion, index) => (
                  <p key={index} className="flex items-center gap-2 text-sm">
                    <RxCross2 className="text-red-700  " />
                    {exclusion}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="border-none md:border p-0 md:p-4 my-5">
            <h3 className="text-lg font-semibold">Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {reviews.map((r, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-lg font-semibold">
                        <p className="font-bold">{r.userName}</p>
                        <span className="text-gray-500 text-sm">
                          {new Date(r.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-xl">
                        {r.ratingType[r.rating]}
                      </span>
                      <div className="ml-2 font-bold">{r.rating} / 5</div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4">{r.title}</h4>

                  <p className="text-sm text-gray-700">{r.text}</p>
                </div>
              ))}
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
                    last-minute meeting, Next Gen has the perfect cab for your
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
                    back and enjoy a smooth and comfortable ride with Next Gen.
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

        <div className=" w-full md:w-1/4 h-max">
          <div className="border border-gray-300  p-4  bg-white">
            <div className="">
              <div className=" mb-4">
                Starting from{""}
                <span className="text-lg font-semibold">{""} ₹ 3,992 </span>
              </div>

              <div className="flex justify-between gap-4">
                <div className="w-1/2">
                  <div className="relative">
                    <p className="text-xs font-semibold mb-2">Select Date</p>
                    <FaCalendar className="text-[#aeb4be] absolute left-[8px] top-[34px] z-50" />
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      className="w-full p-2 pl-8 border border-gray-300 text-[#9fa6b1] text-sm rounded-lg focus:outline-none"
                      placeholderText="Choose Date"
                    />
                  </div>
                  {!selectedDate && (
                    <p className="text-red-500 text-sm mt-1">
                      Please select a date
                    </p>
                  )}
                </div>

                <div className="w-1/2 relative">
                  <p className="text-xs font-semibold mb-2">Select Date</p>
                  <div
                    className="flex items-center justify-between border border-gray-300 p-2 rounded-lg cursor-pointer"
                    onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                  >
                    <div className="flex items-center gap-2">
                      <FaClock className="text-[#aeb4be] " />
                      <span className="text-sm text-[#9fa6b1]">
                        {selectedTime || "Select Time"}
                      </span>
                    </div>
                  </div>
                  {showTimeDropdown && (
                    <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-2 p-3 rounded-lg z-10">
                      {["10:00 AM", "12:00 PM", "2:00 PM"].map((time) => (
                        <li
                          key={time}
                          onClick={() => {
                            setSelectedTime(time);
                            setShowTimeDropdown(false);
                          }}
                          className="cursor-pointer py-1 hover:bg-gray-100"
                        >
                          {time}
                        </li>
                      ))}
                    </ul>
                  )}
                  {!selectedTime && (
                    <p className="text-red-500 text-sm mt-1">
                      Please select time
                    </p>
                  )}
                </div>
              </div>

              {/* Traveler Selection */}
              <div className="mt-6 relative">
                <p className="text-xs font-semibold mb-2">Select Date</p>
                <div
                  className="border border-gray-300 p-3 rounded-lg cursor-pointer"
                  onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
                >
                  <span className="text-[#9fa6b1] text-sm">
                    {travelerCounts.adult + travelerCounts.child > 0
                      ? `${travelerCounts.adult} Adults, ${travelerCounts.child} Children`
                      : "Select Travelers"}
                  </span>
                </div>
                {showTravelerDropdown && (
                  <div className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-2 p-3 rounded-lg z-10">
                    {["adult", "child", "infant", "senior"].map((type) => (
                      <div
                        key={type}
                        className="flex items-center justify-between mb-3"
                      >
                        <span className="capitalize">{type}</span>
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            className="px-3 py-1 bg-gray-200 rounded-lg"
                            onClick={() =>
                              handleTravelerCountChange(type, "sub")
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            readOnly
                            value={travelerCounts[type]}
                            className="w-12 text-center border border-gray-300 rounded-lg"
                          />
                          <button
                            type="button"
                            className="px-3 py-1 bg-gray-200 rounded-lg"
                            onClick={() =>
                              handleTravelerCountChange(type, "add")
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      className="block w-full bg-blue-500 text-white py-2 rounded-lg mt-3"
                      onClick={() => setShowTravelerDropdown(false)}
                    >
                      Done
                    </button>
                  </div>
                )}
                {travelerCounts.adult + travelerCounts.child === 0 && (
                  <p className="text-red-500 text-sm mt-1">
                    Please select traveler
                  </p>
                )}
              </div>
              <button className="flex justify-center  gap-2 items-center mt-4 w-full py-2 px-4 bg-[#dbeafe]  text-blue-600">
                     Submit
                        </button>


            </div>
          </div>

          <div className="border border-gray-300 my-4   bg-white">
            <div className="flex bg-blue-100 p-4 items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
              </div>
              <h2 className="text-xl font-semibold">Cancellation Policy</h2>
            </div>
            <div className=" p-4">
              For a full refund, cancel at least 24 hours before the scheduled
              departure time.
            </div>
          </div>

          <div className="border border-gray-300  p-4  bg-white ">
            <div className="text-lg font-semibold flex gap-2 items-center">
              <FaCopy />
              Important Information
            </div>
            <div className="mt-3">
              <ul className="list-disc pl-5">
                <li>Public transportation options are available nearby</li>
                <li>
                  Not recommended for travelers with poor cardiovascular health
                </li>
                <li>Suitable for all physical fitness levels</li>
                <li>Let us know if you are allergic to any type of food.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
