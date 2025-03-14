"use client";
import React, { useState } from "react";
import { FaCalendarCheck, FaClock, FaSearch } from "react-icons/fa";
import { FaCalendarXmark } from "react-icons/fa6";
import { MdPendingActions } from "react-icons/md";

const page = () => {
  const [tab, setTab] = useState("flight");

  const handleTabClick = (tabName) => {
    setTab(tabName);
  };

  const [flightTab, setFlightTab] = useState("Upcoming");

  const [flights] = useState([
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      bgcolor: "#f70000",
      status: "Cancel",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Pending",
      bgcolor: "#fdc904",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
  ]);

  const [train] = useState([
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UA",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      bgcolor: "#f70000",
      status: "Cancel",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Pending",
      bgcolor: "#fdc904",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
  ]);

  const [hotels] = useState([
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UA",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      bgcolor: "#f70000",
      status: "Cancel",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Pending",
      bgcolor: "#fdc904",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
  ]);
  const [cabs] = useState([
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UA",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      bgcolor: "#f70000",
      status: "Cancel",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Pending",
      bgcolor: "#fdc904",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
  ]);
  const [buses] = useState([
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UA",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      bgcolor: "#f70000",
      status: "Cancel",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Pending",
      bgcolor: "#fdc904",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
  ]);
  const [hotelflights] = useState([
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UA",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      bgcolor: "#f70000",
      status: "Cancel",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
    {
      airlineLogo: "/images/UK.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Pending",
      bgcolor: "#fdc904",
    },
    {
      airlineLogo: "/images/6E.webp",
      airlineName: "Vistara",
      airlineCode: "UK",
      flightNumber: "707",
      departureTime: "15:30",
      originCity: "Chandigarh",
      duration: "5h 45m",
      arrivalTime: "21:15",
      destinationCity: "Mumbai",
      price: "6691",
      status: "Confirm",
      bgcolor: "#008400",
    },
  ]);

  const confirmedFlights = flights.filter(
    (flight) => flight.status === "Confirm"
  );

  return (
    <>
      <div className="w-full bg-gray-100 overflow-hidden mb-2 h-44 relative custom-color">
        <div className="absolute top-5 right-10">
          {tab === "flight" && (
            <img
              src="/images/passenger.webp"
              alt="Flight"
              className="w-full h-36"
            />
          )}
          {tab === "hotel" && (
            <img
              src="/images/hotel-3d.webp"
              alt="Hotel"
              className="w-full h-36"
            />
          )}
          {tab === "train" && (
            <img
              src="/images/train-cartoon.webp"
              alt="Train"
              className="w-full h-40"
            />
          )}
          {tab === "bus" && (
            <img src="/images/bus-png.webp" alt="Bus" className="w-full h-40" />
          )}
          {tab === "car" && (
            <img
              src="/images/cab-driver.webp"
              alt="Car"
              className="w-full h-40"
            />
          )}
          {tab === "flighthotel" && (
            <img
              src="/images/hotelAir.webp"
              alt="Flight + Hotel"
              className="w-full h-40"
            />
          )}
        </div>

        <div className="flex justify-start text-center bg-white w-max ml-20  absolute top-10 p-2 rounded-md gap-4">
          <div
            className={`tabs cursor-pointer px-3 py-2 rounded-md ${
              tab === "flight" ? "bg-[#3286ed] text-white" : "bg-white"
            }`}
            onClick={() => handleTabClick("flight")}
          >
            <div
              className="w-10 h-10 meuicowidth flightmenuico mx-auto"
              style={{ transform: "rotate(312deg)" }}
            ></div>
            <div className="text-sm font-semibold">Flight</div>
          </div>
          <div
            className={`tabs cursor-pointer px-3 py-2 rounded-md ${
              tab === "hotel" ? "bg-[#3286ed] text-white" : "bg-white"
            }`}
            onClick={() => handleTabClick("hotel")}
          >
            <div className="w-10 h-10 meuicowidth hotelmenuico mx-auto"></div>
            <div className="text-sm font-semibold">Hotels</div>
          </div>
          <div
            className={`tabs cursor-pointer px-3 py-2 rounded-md ${
              tab === "train" ? "bg-[#3286ed] text-white" : "bg-white"
            }`}
            onClick={() => handleTabClick("train")}
          >
            <div className="w-10 h-10 meuicowidth trainmenuico mx-auto"></div>
            <div className="text-sm font-semibold">Train</div>
          </div>
          <div
            className={`tabs cursor-pointer px-3 py-2 rounded-md ${
              tab === "car" ? "bg-[#3286ed] text-white" : "bg-white"
            }`}
            onClick={() => handleTabClick("car")}
          >
            <div className="w-10 h-10 meuicowidth cabmenuico mx-auto"></div>
            <div className="text-sm font-semibold">Cabs</div>
          </div>
          <div
            className={`tabs cursor-pointer px-3 py-2 rounded-md ${
              tab === "bus" ? "bg-[#3286ed] text-white" : "bg-white"
            }`}
            onClick={() => handleTabClick("bus")}
          >
            <div className="w-10 h-10 meuicowidth busmenuico mx-auto"></div>
            <div className="text-sm font-semibold">Bus</div>
          </div>
          <div
            className={`tabs cursor-pointer px-3 py-2 rounded-md ${
              tab === "flighthotel" ? "bg-[#3286ed] text-white" : "bg-white"
            }`}
            onClick={() => handleTabClick("flighthotel")}
          >
            <div className="w-10 h-10 meuicowidth fphmenuico mx-auto"></div>
            <div className="text-sm font-semibold">Flight + Hotel</div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20  py-5 md:flex block gap-5 ">
        {tab === "flight" && (
          <div className="w-full md:w-3/4">
            <div className="block md:flex justify-between items-center  p-3 bg-white myshadow rounded-md">
              <div className="flex flex-col gap-2 md:flex-row ">
                <div
                  className={`flex items-center gap-2 border rounded-md p-2 ${
                    flightTab === "Upcoming" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Upcoming")}
                >
                  <FaClock />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Upcoming"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Upcoming
                    </div>
                    <div className="text-xs">0 Active Trip</div>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Cancelled" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Cancelled")}
                >
                  <FaCalendarXmark />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Cancelled"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Cancelled/Refunded
                    </div>
                    <div className="text-xs">Check/Refund Status</div>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Completed" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Completed")}
                >
                  <FaCalendarCheck />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Completed"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Completed
                    </div>
                    <div className="text-xs">Check Previous Trips</div>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Pending" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Pending")}
                >
                  <MdPendingActions />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Pending"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Unsuccessful
                    </div>
                    <div className="text-xs">Check Pending Trips</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a booking"
                  id=""
                  className="w-full py-2 pl-8 border border-gray-300 rounded-md focus:outline-none"
                />
                <FaSearch className="absolute top-[13px] left-[10px] text-gray-500" />
              </div>
            </div>

            <div className="w-full my-4">
              {flights && flights.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {flights.map((flight, index) => (
                    <div
                      key={index}
                      className="card flex  w-full bg-white hover:bg-[#ECF5FE] myshadow rounded-md border gap-5 justify-center p-4"
                    >
                      {" "}
                      <div className="">
                        <img
                          src={flight.airlineLogo}
                          alt={flight.airlineCode}
                          width={50}
                          className="mx-auto"
                        />
                        <span className="block text-center text-xs mt-2">{`${flight.airlineCode}-${flight.flightNumber}`}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 items-center">
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {flight.departureTime}
                          </div>
                          <div className="text-xs">{flight.originCity}</div>
                        </div>
                        <div className="text-center hidden md:block">
                          <div className="font-semibold border-b mb-1 pb-1 text-sm">
                            {flight.duration}
                          </div>
                          <div className="font-light text-xs">1-stop</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {flight.arrivalTime}
                          </div>
                          <div className="text-xs">
                            {flight.destinationCity}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-blue-600 text-xl">{`₹ ${flight.price}`}</div>
                          <div
                            className={`text-xs font-semibold rounded-md p-1 mt-1 text-white`}
                            style={{ backgroundColor: flight.bgcolor }}
                          >{`${flight.status}`}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full flex flex-col bg-white myshadow rounded-md my-5 items-center border-b py-4">
                  <img
                    src="/images/NoBooking.webp"
                    alt="No Bookings"
                    width={300}
                  />
                  <p className="text-base font-bold">
                    Currently You Have No Bookings.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        {tab === "train" && (
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center  p-3 bg-white myshadow rounded-md">
              <div className="flex flex-col gap-2 md:flex-row ">
                <div
                  className={`flex items-center gap-2 border rounded-md p-2 ${
                    flightTab === "Upcoming" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Upcoming")}
                >
                  <FaClock />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Upcoming"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Upcoming
                    </div>
                    <div className="text-xs">0 Active Trip</div>
                  </div>
                </div>

                {/* Cancelled Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Cancelled" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Cancelled")}
                >
                  <FaCalendarXmark />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Cancelled"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Cancelled/Refunded
                    </div>
                    <div className="text-xs">Check/Refund Status</div>
                  </div>
                </div>

                {/* Completed Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Completed" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Completed")}
                >
                  <FaCalendarCheck />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Completed"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Completed
                    </div>
                    <div className="text-xs">Check Previous Trips</div>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Pending" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Pending")}
                >
                  <MdPendingActions />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Pending"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Unsuccessful
                    </div>
                    <div className="text-xs">Check Pending Trips</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a booking"
                  id=""
                  className="w-full py-2 pl-8 border border-gray-300 rounded-md focus:outline-none"
                />
                <FaSearch className="absolute top-[13px] left-[10px] text-gray-500" />
              </div>
            </div>

            <div className="w-full my-4">
              {train && train.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {train.map((tra, index) => (
                    <div
                      key={index}
                      className="flex  w-full bg-white hover:bg-[#ECF5FE] myshadow rounded-md border gap-5 justify-center p-4"
                    >
                      {" "}
                      <div className="">
                        <img
                          src={tra.airlineLogo}
                          alt={tra.airlineCode}
                          width={50}
                          className="mx-auto"
                        />
                        <span className="block text-center text-xs mt-2">{`${tra.airlineCode}-${tra.flightNumber}`}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 items-center">
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {tra.departureTime}
                          </div>
                          <div className="text-xs">{tra.originCity}</div>
                        </div>
                        <div className="text-center hidden md:block">
                          <div className="font-semibold border-b mb-1 pb-1 text-sm">
                            {tra.duration}
                          </div>
                          <div className="font-light text-xs">1-stop</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {tra.arrivalTime}
                          </div>
                          <div className="text-xs">{tra.destinationCity}</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-blue-600 text-xl">{`₹ ${tra.price}`}</div>
                          <div
                            className={`text-xs font-semibold rounded-md p-1 mt-1 text-white`}
                            style={{ backgroundColor: tra.bgcolor }}
                          >{`${tra.status}`}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full flex flex-col bg-white myshadow rounded-md my-5 items-center border-b py-4">
                  <img
                    src="/images/NoBooking.webp"
                    alt="No Bookings"
                    width={300}
                  />
                  <p className="text-base font-bold">
                    Currently You Have No Bookings.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        {tab === "hotel" && (
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center  p-3 bg-white myshadow rounded-md">
              <div className="flex flex-col gap-2 md:flex-row ">
                <div
                  className={`flex items-center gap-2 border rounded-md p-2 ${
                    flightTab === "Upcoming" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Upcoming")}
                >
                  <FaClock />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Upcoming"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Upcoming
                    </div>
                    <div className="text-xs">0 Active Trip</div>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Cancelled" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Cancelled")}
                >
                  <FaCalendarXmark />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Cancelled"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Cancelled/Refunded
                    </div>
                    <div className="text-xs">Check/Refund Status</div>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Completed" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Completed")}
                >
                  <FaCalendarCheck />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Completed"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Completed
                    </div>
                    <div className="text-xs">Check Previous Trips</div>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Pending" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Pending")}
                >
                  <MdPendingActions />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Pending"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Unsuccessful
                    </div>
                    <div className="text-xs">Check Pending Trips</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a booking"
                  id=""
                  className="w-full py-2 pl-8 border border-gray-300 rounded-md focus:outline-none"
                />
                <FaSearch className="absolute top-[13px] left-[10px] text-gray-500" />
              </div>
            </div>

            <div className="w-full my-4">
              {hotels && hotels.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotels.map((hotel, index) => (
                    <div
                      key={index}
                      className="card flex  w-full bg-white hover:bg-[#ECF5FE] myshadow rounded-md border gap-5 justify-center p-4"
                    >
                      {" "}
                      <div className="">
                        <img
                          src={hotel.airlineLogo}
                          alt={hotel.airlineCode}
                          width={50}
                          className="mx-auto"
                        />
                        <span className="block text-center text-xs mt-2">{`${hotel.airlineCode}-${hotel.flightNumber}`}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 items-center">
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {hotel.departureTime}
                          </div>
                          <div className="text-xs">{hotel.originCity}</div>
                        </div>
                        <div className="text-center hidden md:block">
                          <div className="font-semibold border-b mb-1 pb-1 text-sm">
                            {hotel.duration}
                          </div>
                          <div className="font-light text-xs">1-stop</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {hotel.arrivalTime}
                          </div>
                          <div className="text-xs">{hotel.destinationCity}</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-blue-600 text-xl">{`₹ ${hotel.price}`}</div>
                          <div
                            className={`text-xs font-semibold rounded-md p-1 mt-1 text-white`}
                            style={{ backgroundColor: hotel.bgcolor }}
                          >{`${hotel.status}`}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full flex flex-col bg-white myshadow rounded-md my-5 items-center border-b py-4">
                  <img
                    src="/images/NoBooking.webp"
                    alt="No Bookings"
                    width={300}
                  />
                  <p className="text-base font-bold">
                    Currently You Have No Bookings.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        {tab === "car" && (
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center  p-3 bg-white myshadow rounded-md">
              <div className="flex flex-col gap-2 md:flex-row ">
                <div
                  className={`flex items-center gap-2 border rounded-md p-2 ${
                    flightTab === "Upcoming" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Upcoming")}
                >
                  <FaClock />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Upcoming"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Upcoming
                    </div>
                    <div className="text-xs">0 Active Trip</div>
                  </div>
                </div>

                {/* Cancelled Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Cancelled" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Cancelled")}
                >
                  <FaCalendarXmark />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Cancelled"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Cancelled/Refunded
                    </div>
                    <div className="text-xs">Check/Refund Status</div>
                  </div>
                </div>

                {/* Completed Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Completed" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Completed")}
                >
                  <FaCalendarCheck />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Completed"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Completed
                    </div>
                    <div className="text-xs">Check Previous Trips</div>
                  </div>
                </div>

                {/* Pending Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Pending" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Pending")}
                >
                  <MdPendingActions />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Pending"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Unsuccessful
                    </div>
                    <div className="text-xs">Check Pending Trips</div>
                  </div>
                </div>

                {/* Search Box */}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a booking"
                  id=""
                  className="w-full py-2 pl-8 border border-gray-300 rounded-md focus:outline-none"
                />
                <FaSearch className="absolute top-[13px] left-[10px] text-gray-500" />
              </div>
            </div>

            <div className="w-full my-4">
              {cabs && cabs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cabs.map((cab, index) => (
                    <div
                      key={index}
                      className="card flex  w-full bg-white hover:bg-[#ECF5FE] myshadow rounded-md border gap-5 justify-center p-4"
                    >
                      {" "}
                      <div className="">
                        <img
                          src={cab.airlineLogo}
                          alt={cab.airlineCode}
                          width={50}
                          className="mx-auto"
                        />
                        <span className="block text-center text-xs mt-2">{`${cab.airlineCode}-${cab.flightNumber}`}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 items-center">
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {cab.departureTime}
                          </div>
                          <div className="text-xs">{cab.originCity}</div>
                        </div>
                        <div className="text-center hidden md:block">
                          <div className="font-semibold border-b mb-1 pb-1 text-sm">
                            {cab.duration}
                          </div>
                          <div className="font-light text-xs">1-stop</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {cab.arrivalTime}
                          </div>
                          <div className="text-xs">{cab.destinationCity}</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-blue-600 text-xl">{`₹ ${cab.price}`}</div>
                          <div
                            className={`text-xs font-semibold rounded-md p-1 mt-1 text-white`}
                            style={{ backgroundColor: cab.bgcolor }}
                          >{`${cab.status}`}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full flex flex-col bg-white myshadow rounded-md my-5 items-center border-b py-4">
                  <img
                    src="/images/NoBooking.webp"
                    alt="No Bookings"
                    width={300}
                  />
                  <p className="text-base font-bold">
                    Currently You Have No Bookings.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        {tab === "bus" && (
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center  p-3 bg-white myshadow rounded-md">
              <div className="flex flex-col gap-2 md:flex-row ">
                <div
                  className={`flex items-center gap-2 border rounded-md p-2 ${
                    flightTab === "Upcoming" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Upcoming")}
                >
                  <FaClock />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Upcoming"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Upcoming
                    </div>
                    <div className="text-xs">0 Active Trip</div>
                  </div>
                </div>

                {/* Cancelled Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Cancelled" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Cancelled")}
                >
                  <FaCalendarXmark />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Cancelled"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Cancelled/Refunded
                    </div>
                    <div className="text-xs">Check/Refund Status</div>
                  </div>
                </div>

                {/* Completed Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Completed" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Completed")}
                >
                  <FaCalendarCheck />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Completed"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Completed
                    </div>
                    <div className="text-xs">Check Previous Trips</div>
                  </div>
                </div>

                {/* Pending Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Pending" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Pending")}
                >
                  <MdPendingActions />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Pending"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Unsuccessful
                    </div>
                    <div className="text-xs">Check Pending Trips</div>
                  </div>
                </div>

                {/* Search Box */}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a booking"
                  id=""
                  className="w-full py-2 pl-8 border border-gray-300 rounded-md focus:outline-none"
                />
                <FaSearch className="absolute top-[13px] left-[10px] text-gray-500" />
              </div>
            </div>

            <div className="w-full my-4">
              {buses && buses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {buses.map((bus, index) => (
                    <div
                      key={index}
                      className="card flex  w-full bg-white hover:bg-[#ECF5FE] myshadow rounded-md border gap-5 justify-center p-4"
                    >
                      {" "}
                      <div className="">
                        <img
                          src={bus.airlineLogo}
                          alt={bus.airlineCode}
                          width={50}
                          className="mx-auto"
                        />
                        <span className="block text-center text-xs mt-2">{`${bus.airlineCode}-${bus.flightNumber}`}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 items-center">
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {bus.departureTime}
                          </div>
                          <div className="text-xs">{bus.originCity}</div>
                        </div>
                        <div className="text-center hidden md:block">
                          <div className="font-semibold border-b mb-1 pb-1 text-sm">
                            {bus.duration}
                          </div>
                          <div className="font-light text-xs">1-stop</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {bus.arrivalTime}
                          </div>
                          <div className="text-xs">{bus.destinationCity}</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-blue-600 text-xl">{`₹ ${bus.price}`}</div>
                          <div
                            className={`text-xs font-semibold rounded-md p-1 mt-1 text-white`}
                            style={{ backgroundColor: bus.bgcolor }}
                          >{`${bus.status}`}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full flex flex-col bg-white myshadow rounded-md my-5 items-center border-b py-4">
                  <img
                    src="/images/NoBooking.webp"
                    alt="No Bookings"
                    width={300}
                  />
                  <p className="text-base font-bold">
                    Currently You Have No Bookings.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        {tab === "flighthotel" && (
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center  p-3 bg-white myshadow rounded-md">
              <div className="flex flex-col gap-2 md:flex-row ">
                <div
                  className={`flex items-center gap-2 border rounded-md p-2 ${
                    flightTab === "Upcoming" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Upcoming")}
                >
                  <FaClock />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Upcoming"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Upcoming
                    </div>
                    <div className="text-xs">0 Active Trip</div>
                  </div>
                </div>

                {/* Cancelled Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Cancelled" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Cancelled")}
                >
                  <FaCalendarXmark />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Cancelled"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Cancelled/Refunded
                    </div>
                    <div className="text-xs">Check/Refund Status</div>
                  </div>
                </div>

                {/* Completed Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Completed" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Completed")}
                >
                  <FaCalendarCheck />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Completed"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Completed
                    </div>
                    <div className="text-xs">Check Previous Trips</div>
                  </div>
                </div>

                {/* Pending Tab */}
                <div
                  className={`flex items-center gap-2 border rounded-md p-2  ${
                    flightTab === "Pending" ? "border-blue-600" : ""
                  }`}
                  onClick={() => setFlightTab("Pending")}
                >
                  <MdPendingActions />
                  <div className="">
                    <div
                      id=""
                      className={`text-md font-bold  ${
                        flightTab === "Pending"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      Unsuccessful
                    </div>
                    <div className="text-xs">Check Pending Trips</div>
                  </div>
                </div>

                {/* Search Box */}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a booking"
                  id=""
                  className="w-full py-2 pl-8 border border-gray-300 rounded-md focus:outline-none"
                />
                <FaSearch className="absolute top-[13px] left-[10px] text-gray-500" />
              </div>
            </div>

            <div className="w-full my-4">
              {hotelflights && hotelflights.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotelflights.map((hotelflight, index) => (
                    <div
                      key={index}
                      className="card flex  w-full bg-white hover:bg-[#ECF5FE] myshadow rounded-md border gap-5 justify-center p-4"
                    >
                      {" "}
                      <div className="">
                        <img
                          src={hotelflight.airlineLogo}
                          alt={hotelflight.airlineCode}
                          width={50}
                          className="mx-auto"
                        />
                        <span className="block text-center text-xs mt-2">{`${hotelflight.airlineCode}-${hotelflight.flightNumber}`}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 items-center">
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {hotelflight.departureTime}
                          </div>
                          <div className="text-xs">
                            {hotelflight.originCity}
                          </div>
                        </div>
                        <div className="text-center hidden md:block">
                          <div className="font-semibold border-b mb-1 pb-1 text-sm">
                            {hotelflight.duration}
                          </div>
                          <div className="font-light text-xs">1-stop</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            {hotelflight.arrivalTime}
                          </div>
                          <div className="text-xs">
                            {hotelflight.destinationCity}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-blue-600 text-xl">{`₹ ${hotelflight.price}`}</div>
                          <div
                            className={`text-xs font-semibold rounded-md p-1 mt-1 text-white`}
                            style={{ backgroundColor: hotelflight.bgcolor }}
                          >{`${hotelflight.status}`}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full flex flex-col bg-white myshadow rounded-md my-5 items-center border-b py-4">
                  <img
                    src="/images/NoBooking.webp"
                    alt="No Bookings"
                    width={300}
                  />
                  <p className="text-base font-bold">
                    Currently You Have No Bookings.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="w-full md:w-1/4 p-5 myshadow rounded-md">
          <h1 className="text-base font-bold">Recent Booking</h1>
          <div className="mt-4">
            {confirmedFlights.length > 0 ? (
              confirmedFlights.map((flight, index) => (
                <div
                  key={index}
                  className="recent-booking flex items-center justify-between bg-white myshadow p-3 rounded-md mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={flight.airlineLogo}
                      alt={flight.airlineCode}
                      width={40}
                      className="mr-4"
                    />
                    <div>
                      <p className="text-sm font-bold">
                        {flight.airlineCode} - {flight.flightNumber}
                      </p>
                      <p className="text-xs">
                        {flight.originCity} to {flight.destinationCity}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-blue-600">
                    ₹ {flight.price}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No confirmed bookings.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
