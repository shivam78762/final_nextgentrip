"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaWifi } from "react-icons/fa";
import Image from "next/image";
import { FaArrowRight, FaClock } from "react-icons/fa6";
import { IoMdTrain } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import axios from "axios";

const page = () => {
 



  const [isLoading, setLoading] = useState(true);
  const [showLoader, setshowLoader] = useState(false);

  const [pnr, setPnr] = useState(""); // State to store the entered PNR
  const [pnrData, setPnrData] = useState(null); // State to store API response
  const [error, setError] = useState(null);

  // data/tripOverview.js
  const tripOverview = {
    trainDetails: "Snsi Kalka Exp - 22455 | Sleeper Class",
    stations: [
      {
        name: "Sainagar Shirdi",
        city: "Shirdi",
        platform: "2",
        dateTime: "3 Dec | 10:00",
      },
      {
        name: "Kalka",
        city: "Kalka",
        platform: "2",
        dateTime: "4 Dec | 12:10",
      },
    ],
    duration: "26hr 10min",
    wifiLink: "#",
    wifiStation: "Sainagar Shirdi",
  };

  // data/travellers.js
  const travellers = [
    {
      sNo: 1,
      bookingStatus: "S2 ,58",
      currentStatus: "S2 ,58",
      coach: "NA",
      berth: "Middle",
      confirmationChances: "NA",
    },
    {
      sNo: 2,
      bookingStatus: "S2 ,59",
      currentStatus: "S2 ,59",
      coach: "NA",
      berth: "Upper",
      confirmationChances: "NA",
    },
    {
      sNo: 3,
      bookingStatus: "S2 ,59",
      currentStatus: "S2 ,59",
      coach: "NA",
      berth: "Upper",
      confirmationChances: "NA",
    },
    {
      sNo: 4,
      bookingStatus: "S2 ,59",
      currentStatus: "S2 ,59",
      coach: "NA",
      berth: "Upper",
      confirmationChances: "NA",
    },
    {
      sNo: 5,
      bookingStatus: "S2 ,59",
      currentStatus: "S2 ,59",
      coach: "NA",
      berth: "Upper",
      confirmationChances: "NA",
    },
    // Add more traveller data as needed
  ];
  // data/fareDetails.js
  const fareDetails = {
    fareCharges: 4170,
    cancellationCharges: 360,
    refundPolicy: "No Refund is applicable after 03 Dec, 09:30 am",
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStation, setSelectedStation] = useState("");

  const stations = [
    "Sainagar Shirdi",
    "Manmad Jn",
    "Bhusaval Jn",
    "Khandwa",
    "Itarsi Jn",
    "Bhopal Jn",
    "V Lakshmibai Jhansi Jhs",
    "Gwalior",
    "Agra Cantt",
    "Mathura Jn",
    "H Nizamuddin",
    "New Delhi",
    "Panipat Jn",
    "Ambala Cant Jn",
    "Chandigarh",
    "Kalka",
  ];

  const handleSelect = (station) => {
    setSelectedStation(station);
    setIsDropdownOpen(false);
  };

  const handleSearch = async () => {
    setshowLoader(true)
     

    
    if (pnr.length !== 10) {
      setError("Please enter a valid 10-digit PNR number.");
      return;
    }
    setLoading(true)

    try {
      setError(null); // Reset errors
      setPnrData(null); // Clear previous results

      const options = {
        method: "GET",
        url: `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnr}`,
        headers: {
          "x-rapidapi-key":
            "e38e6c040cmsh8dd59b67de504ecp1b5f1djsn77152414c226",
          "x-rapidapi-host": "irctc-indian-railway-pnr-status.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      console.log("frrfrfertfetrfter", response);

      setPnrData(response.data); // Store API response
      setLoading(false)
    } catch (err) {
      setError("Failed to fetch PNR status. Please try again later.");
      setLoading(false)
    }
  };

  const {
    pnrNumber,
    trainName,
    trainNumber,
    sourceStation,
    destinationStation,
    chartStatus,
    passengerList,
    dateOfJourney,
  } = pnrData?.data || {};
  

  return (
    <>
      <div className="relative pt-6 lg:pt-0">
        <div className="relative h-60 custom-color"></div>

        <div className="absolute bottom-10 left-0 right-0 text-center pb-6">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            PNR Status
          </h1>
          <div className="flex justify-between mt-5 items-center border rounded-full w-full md:w-[600px] bg-white mx-auto">
            <div className="relative flex p-2 px-4 w-full items-center">
              <img
                src="/images/search.svg"
                alt="Search Icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                id="txtDesCity"
                className="ml-2 w-full flex-grow border-none p-2 rounded-lg placeholder-gray-500"
                placeholder="Enter your 10 digit PNR number"
                onChange={(e) => setPnr(e.target.value)}
              />
            </div>
            <button
              className="ml-2 primary-col text-white px-8 py-2 h-14 rounded-full hover:bg-[#ef6414ed]"
              type="button"
              onClick={() => handleSearch()}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-[#f2f2f2] px-5 md:px-24 py-10">
        {/* <ol className="hidden md:flex space-x-2 text-sm text-gray-500">
          <li className="flex items-center">
            <Link
              href="/"
              className="breadcrumb-item text-blue-500 hover:underline"
            >
              Home
            </Link>
            <span className="mx-2">››</span>
          </li>
          <li className="flex items-center">
            <span className="nolink-text text-gray-700">
              PNR Status Enquiry
            </span>
          </li>
        </ol> */}

       {showLoader? <div className="bg-slate-100 px-3 py-10 lg:px-36 space-y-4 ">
          {isLoading ? (
            // Skeleton Loader for PNR Info
            <div class="bg-white p-4 rounded-md">
            <div class="skeleton h-6 w-1-2 mb-2"></div>
            <div class="skeleton h-4 w-1-4"></div>
          </div>
          ) : (
            <div className="bg-white flex items-center justify-between p-4 rounded-md">
              <div>
                <h2 className="font-normal text-lg">PNR {pnrNumber}</h2>
                <div className="bg-[#e9f6ea] flex items-center justify-between px-1 gap-2 text-[#2bac36]">
                  <span className="text-[13px]">
                    {chartStatus?.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow flex flex-col items-center py-1 px-2">
                <span className="text-[13px] text-[#2276e3]">Print</span>
              </div>
            </div>
          )}

          {/* Passenger Cards */}
          {isLoading ? (
            // Skeleton Loader for Passenger Cards
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="psngr-card p-4 rounded-md bg-white "
                  >
                    <div className="h-6 skeleton bg-slate-300 rounded-md w-1/2 mb-2"></div>
                    <div className="h-4 skeleton bg-slate-200 rounded-md w-3/4"></div>
                    <div className="mt-4 flex justify-between text-[13px]">
                      <div className="h-4 skeleton bg-slate-200 rounded-md w-1/4"></div>
                      <div className="h-4 skeleton bg-slate-200 rounded-md w-1/4"></div>
                      <div className="h-4 skeleton bg-slate-200 rounded-md w-1/4"></div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {passengerList.map((passenger) => (
                <div
                  key={passenger.passengerSerialNumber}
                  className="psngr-card p-4 rounded-md bg-white"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-base font-bold text-black">
                      <img
                        src="/passengeruser.png"
                        alt={`passenger${passenger.passengerSerialNumber}`}
                        className="w-8 h-8"
                      />
                      Passenger {passenger.passengerSerialNumber}
                    </div>
                    <div className="text-[13px] text-gray-600">
                      Quota:{" "}
                      <span className="font-bold text-black">
                        {passenger.passengerQuota}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-1">
                    <div className="text-[13px] text-gray-600">
                      Current Status&nbsp;&nbsp;
                      <span className="text-base font-bold text-[#417505]">
                        {passenger.bookingStatusDetails}
                      </span>
                    </div>
                    <div className="text-[13px] bg-slate-100 px-2 py-1">
                      <span className="text-gray-600 mr-1">
                        Booking status:
                      </span>
                      <span className="text-[13px] font-semibold text-[#417505]">
                        {passenger.bookingStatusDetails}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between text-[13px] text-gray-600">
                    <div>
                      Class:
                      <span className="font-bold text-black ml-1">
                        {pnrData.data.journeyClass}
                      </span>
                    </div>
                    <span>|</span>
                    <div>
                      Seat no:
                      <span className="font-bold text-black ml-1">
                        {passenger.bookingBerthNo}
                      </span>
                    </div>
                    <span>|</span>
                    <div>
                      Coach no:
                      <span className="font-bold text-black ml-1">
                        {passenger.bookingCoachId}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <section className="">
            <h2 className="text-lg font-bold mb-2 text-gray-800">
              Boarding details
            </h2>
            {isLoading ? (
              // Skeleton Loader for Boarding Details
              <div className="p-4  bg-gray-50 rounded-md shadow-md ">
                <div className="h-6 skeleton bg-slate-300 rounded-md w-1/3 mb-2"></div>
                <div className="h-4 skeleton bg-slate-200 rounded-md w-2/3"></div>
              </div>
            ) : (
              <div className="p-4 bg-gray-50 rounded-md shadow-md">
                <div className="flex items-center mb-2">
                  <h2 className="text-base font-semibold text-gray-900 flex items-center gap-1">
                    <IoMdTrain className="text-lg" />
                    {trainNumber} {trainName}
                  </h2>
                </div>
                <div className="md:flex items-stretch justify-between">
                  <div className="flex justify-between items-start md:items-center w-full">
                    <div className="flex-1 mb-4 md:mb-0 space-y-1">
                      <span className="text-white font-semibold bg-black text-xs py-[3px] px-[6px] rounded">
                        Boarding Station
                      </span>
                      <div className="text-gray-800 font-bold text-sm">
                        {sourceStation},{" "}
                        <span className="font-normal">New Delhi</span>
                      </div>
                      <div className="text-gray-800 text-sm">
                        {dateOfJourney}
                      </div>
                    </div>
                    <div className="text-center text-slate-900 text-xs bg-slate-200 py-[3px] px-2 font-normal">
                      4h 53m
                    </div>
                    <div className="flex-1 text-right pl-4 space-y-1">
                      <span className="text-white font-semibold bg-black text-xs py-[3px] px-[6px] rounded">
                        Destination Station
                      </span>
                      <div className="text-gray-800 font-bold text-sm">
                        {destinationStation},{" "}
                        <span className="font-normal">Chandigarh</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>:''}

        <section className="">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Why Check PNR Status with Next Gen?
          </h2>

          <div className="flex items-center justify-center mb-6">
            <img
              src="/images/IRTC.webp"
              alt="Official IRCTC Partner for train ticket booking"
              width="50"
              height="50"
              className="mr-4"
            />
            <h4 className="text-lg font-semibold">IRCTC Authorised Partner</h4>
          </div>

          <div className="block md:flex gap-8">
            <div className="text-center">
              <img
                src="/images/ticket.webp"
                alt="Railway ticket check"
                width="50"
                height="50"
                className="mx-auto"
              />
              <div>
                <h4 className="text-lg font-bold my-3">
                  PNR Status Indian Railways
                </h4>
                <p className="text-sm">
                  Using PNR status 10 digit, you can check the latest PNR status
                  with ease on Next Gen or use the PNR Prediction feature and
                  avoid getting waitlisted.
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/images/services.webp"
                alt="24x7 Customer Support for train booking"
                width="50"
                height="50"
                className="mx-auto"
              />
              <div>
                <h4 className="text-lg font-bold my-3">
                  24x7 Support for Ticket Booking
                </h4>
                <p className="text-sm">
                  Whatever your questions may be, Next Gen will provide 24x7
                  assistance. You can reach out to the Customer Support team by
                  clicking on the 'Contact Us' section on the Next Gen Trains
                  app.
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/images/cancelled.webp"
                alt="Hassle-Free Cancellation on Train tickets"
                width="50"
                height="50"
                className="mx-auto"
              />
              <div>
                <h4 className="text-lg font-bold my-3">
                  Free Cancellation on Train Tickets
                </h4>
                <p className="text-sm">
                  Unsure of your travel plans? Opt for Assured Flex by paying a
                  nominal fee and modify your train bookings without any hassle!
                  Get an instant full train fare refund after cancellation with
                  Assured Flex.
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/images/mobile-app.webp"
                alt="Live running status"
                width="50"
                height="50"
                className="mx-auto"
              />
              <div>
                <h4 className="text-lg font-bold my-3">
                  Check Live Train Running Status
                </h4>
                <p className="text-sm">
                  Is your train running late? Check the live status of your
                  train on the Next Gen app or website. You can also see the
                  train route, coach position, and the expected delays along the
                  way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="py-10 px-5 md:px-28">
        <div className="block md:flex gap-10 ">
          <div className="w-3/4">
            <div className="info-section">
              <h2 className="text-2xl font-semibold mb-2">Trip Overview</h2>
              <p className="text-lg mb-4">{tripOverview.trainDetails}</p>
              <div className="flex justify-start items-center relative mb-4">
                {tripOverview.stations.map((station, index) => (
                  <div key={index} className="flex-1">
                    <div className="text-2xl font-bold text-[#00000061]">
                      {station.name}
                    </div>
                    <div className="text-3xl  font-semibold my-3">
                      {station.city}
                    </div>

                    <div className="text-lg text-[#00000061]">
                      Expected Platform: {station.platform}
                    </div>
                    <div className="text-lg text-gray-600">
                      {station.dateTime}
                    </div>
                  </div>
                ))}
                <div className="text-center absolute left-60">
                  <FaArrowRight className="text-6xl mx-auto text-blue-600" />

                  <span className="text-lg text-gray-400">
                    {tripOverview.duration}
                  </span>
                </div>
              </div>
              <div className="my-4  text-md font-semibold  text-gray-600">
                <Link href={tripOverview.wifiLink} className=" flex gap-1">
                  <FaWifi className="text-xl" />{" "}
                  <span className="text-blue-600 uppercase"> Free WiFi</span>{" "}
                  available at {tripOverview.wifiStation}
                </Link>{" "}
              </div>
            </div>

            <div className="info-section mt-10 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Traveller Info</h2>
              <table className="min-w-full text-center text-sm  border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className=" p-3">S.No</th>
                    <th className=" p-3">Booking Status</th>
                    <th className=" p-3">Current Status</th>
                    <th className=" p-3">Coach</th>
                    <th className=" p-3">Berth</th>
                    <th className=" p-3">Confirmation Chances</th>
                  </tr>
                </thead>
                <tbody className="font-semibold">
                  {travellers.map((traveller, index) => (
                    <tr key={index} className="">
                      <td className=" p-4">{traveller.sNo}</td>
                      <td className=" p-4">{traveller.bookingStatus}</td>
                      <td className=" p-4 text-green-500">
                        {traveller.currentStatus}
                      </td>
                      <td className=" p-4">{traveller.coach}</td>
                      <td className=" p-4">{traveller.berth}</td>
                      <td className=" p-4">{traveller.confirmationChances}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4  text-md text-gray-600">
                Chart not prepared | Synced moments ago
              </div>
            </div>

           
            <div className=" border-y py-10 my-8">
              <h2 className="text-lg font-semibold mb-2">Fare Details</h2>
              <div className="flex gap-10 my-4">
                <div className="text-md ">
                  Fare Charges:{" "}
                  <span className="text-gray-600">
                    {fareDetails.fareCharges}
                  </span>
                </div>
                <div className="text-md ">
                  Cancellation Charges:{" "}
                  <span className="text-gray-600">
                    {fareDetails.cancellationCharges}
                  </span>
                </div>
              </div>
              <div className="text-sm">
                <h3 className="text-lg py-2">Refund/ Cancellation Policy</h3>
                <p>{fareDetails.refundPolicy}</p>
              </div>
            </div>

            <div className="disclaimer">
              <h3 className="text-lg font-bold mb-2">Disclaimer</h3>
              <ul className=" text-gray-500 list-decimal pl-4">
                <li>
                  Train timings and status are subject to change without prior
                  notice.
                </li>
                <li className="my-3">
                  Please verify them with Indian Railways before boarding. The
                  confirmation chances, cancellation charges, platform numbers,
                  and berth types are projections alone, and ixigo does not take
                  responsibility if the predictions are not accurate.
                </li>
                <li>
                  The user will get a full refund of cancellation if the train
                  is delayed by more than 3 hours, subject to the condition that
                  the cancellation is done prior to the departure time.
                </li>
              </ul>
            </div>
          </div>

          <div className="border h-max px-3 py-5 w-3/12">
            <h2 className="text-lg font-semibold mb-2">Coach Position</h2>
            <div className="text-sm border-b pb-1">16 Coaches</div>
            <div className=" relative">
              <p className="text-center py-4 text-sm ">
                {" "}
                Click on coach to view seat layout
              </p>
              <div className="relative">
                <div className="border-b pb-1 border-gray-400">
                  <input
                    type="text"
                    className="w-full cursor-pointer bg-transparent focus:outline-none"
                    value={selectedStation}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    readOnly
                    placeholder="Select Station"
                  />
                </div>
                {isDropdownOpen && (
                  <ul className="absolute bg-white border border-gray-200 mt-2 w-full max-h-40 overflow-auto z-10">
                    {stations.map((station, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelect(station)}
                      >
                        {station}
                      </li>
                    ))}
                  </ul>
                )}
                <div
                  className="absolute right-2 top-0 transform rotate-0 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  &#9662;
                </div>
              </div>

              <div className="">
                <div className="">
                  <input className="" readOnly placeholder="" type="text" />
                </div>
                <ul className="dropdown-list box list-none hidden">
                  {[
                    "Sainagar Shirdi",
                    "Manmad Jn",
                    "Bhusaval Jn",
                    "Khandwa",
                    "Itarsi Jn",
                    "Bhopal Jn",
                    "V Lakshmibai Jhansi Jhs",
                    "Gwalior",
                    "Agra Cantt",
                    "Mathura Jn",
                    "H Nizamuddin",
                    "New Delhi",
                    "Panipat Jn",
                    "Ambala Cant Jn",
                    "Chandigarh",
                    "Kalka",
                  ].map((station, index) => (
                    <li
                      key={index}
                      data-index={index}
                      className="dropdown-list-item"
                    >
                      <span>{station}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" relative">
                <div className=" h-screen overflow-hidden overflow-y-auto custom-scrollbar">
                  {[
                    { number: 0, code: "EN" },
                    { number: 1, code: "SLR" },
                    { number: 2, code: "GN" },
                    { number: 3, code: "GN" },
                    { number: 4, code: "3A" },
                    { number: 5, code: "3A" },
                    { number: 6, code: "2A" },
                    { number: 7, code: "SL" },
                    { number: 8, code: "SL" },
                    { number: 9, code: "SL" },
                    { number: 10, code: "SL" },
                    { number: 11, code: "SL" },
                    { number: 12, code: "GN" },
                    { number: 13, code: "GN" },
                    { number: 14, code: "GN" },
                    { number: 15, code: "SLR" },
                  ].map((coach) => (
                    <div className="text-center" key={coach.number}>
                      <div className="text-[#4285f4] inline-block">
                        {coach.number}
                      </div>

                      <div className="text-xs w-[54px] mx-[10px] mb-[11px] bg-[#89b2f8] rounded-md inline-block">
                        <div className="w-[38px] text-center py-[23px] bg-[#4285f4] text-white mx-auto break-words max-h-[63px]">
                          {coach.code}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-4">
              *Coach position is historic data and does not represent current
              status.
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default page;
