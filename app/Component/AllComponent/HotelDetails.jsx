
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRupeeSign } from "react-icons/fa";
import { IoReturnDownForwardOutline } from "react-icons/io5";
import FlightFliter from "../Filter/FlightFliter";

export default function ChooseFlightHotelDetailchild({ getChildValue }) {
  
  const flightDetails = [
    {
      airLine: "IndiGo",
      image:"airIndia.webp",
      airLineNo: "6E-2096",
      departureTime: "19:10",
      departureCity: "Delhi",
      duration: "04h 55m",
      durationStop: "1-stop",
      arrivalTime: "00:05",
      arrivalCity: "Mumbai",
      price: "9235",
    },
    {
      airLine: "Air India",
      image:"airIndia.webp",
      airLineNo: "AI-101",
      departureTime: "09:30",
      departureCity: "Delhi",
      duration: "02h 15m",
      durationStop: "Non-stop",
      arrivalTime: "11:45",
      arrivalCity: "Mumbai",
      price: "11350",
    },
    {
      airLine: "SpiceJet",
      image:"6E.webp",
      airLineNo: "SG-726",
      departureTime: "15:45",
      departureCity: "Delhi",
      duration: "02h 10m",
      durationStop: "Non-stop",
      arrivalTime: "17:55",
      arrivalCity: "Mumbai",
      price: "9850",
    },
    {
      airLine: "Vistara",
      
      image:"airIndia.webp",
      airLineNo: "UK-987",
      departureTime: "07:00",
      departureCity: "Delhi",
      duration: "02h 05m",
      durationStop: "Non-stop",
      arrivalTime: "09:05",
      arrivalCity: "Mumbai",
      price: "12990",
    },
    {
      airLine: "GoAir",
      image:"6E.webp",
      image:"airIndia.webp",
      airLineNo: "G8-453",
      departureTime: "13:15",
      departureCity: "Delhi",
      duration: "03h 30m",
      durationStop: "1-stop",
      arrivalTime: "16:45",
      arrivalCity: "Mumbai",
      price: "8799",
    },
    {
      airLine: "IndiGo",
      image:"6E.webp",
      airLineNo: "6E-3074",
      departureTime: "18:00",
      departureCity: "Delhi",
      duration: "04h 20m",
      durationStop: "1-stop",
      arrivalTime: "22:20",
      arrivalCity: "Mumbai",
      price: "9400",
    },
    {
      airLine: "Air India",
      image:"airIndia.webp",
      airLineNo: "AI-504",
      departureTime: "21:50",
      departureCity: "Delhi",
      duration: "02h 10m",
      durationStop: "Non-stop",
      arrivalTime: "00:00",
      arrivalCity: "Mumbai",
      price: "11800",
    },
    {
      airLine: "SpiceJet",
      airLineNo: "SG-139",
      image:"6E.webp",
      departureTime: "05:50",
      departureCity: "Delhi",
      duration: "02h 20m",
      durationStop: "Non-stop",
      arrivalTime: "08:10",
      arrivalCity: "Mumbai",
      price: "9100",
    },
  ];

  return (
      <div>
        <div className="hidden lg:block col-span-1"></div>
        <div className="col-span-1 lg:col-span-8 bg-white rounded-lg space-y-5 px-3 py-5 ">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-lg">Choose Flight</h4>
            <button
              onClick={() => getChildValue(false)}
              className="flex items-center text-xs font-bold"
            >
              Close <RxCross2 className="font-bold ml-1" />
            </button>
          </div>

          <div className="bg-[#F3FAFF] grid grid-cols-1 gap-8 md:grid-cols-8 border-b-2 px-2 py-5 rounded-3x px-2l md:px-5 items-center">
            <div className="col-span-2">
              <h4 className="font-bold md:text-xl">Delhi to Mumbai</h4>
              <p className="text-xs">Fri - 13 Sep 2024</p>
            </div>
            <div className="col-span-6   grid grid-cols-3 sm:grid-cols-6 items-center justify-between text-xs space-y-3 md:space-y-0">
              <div className="flex text-xs gap-2 items-center">
                <img src="/images/airIndia.webp" alt="" className="w-10" />
                <div className="flex flex-col justify-start gap-1">
                  <span>Air India</span>
                  <span>AI-655</span>
                </div>
              </div>
              <div className="Time text-center">
                <h6>14:00</h6>
                <h6>Delhi</h6>
              </div>
              <div className="non-stop text-center">
                <p className="border-b-2">02h 15m</p>
                <p>non-stop</p>
              </div>
              <div className="time text-center">
                <p>16:11</p>
                <p>Mumbai</p>
              </div>
              <div className="Price font-bold text-md md:text-xl flex items-center">
                <FaRupeeSign />
                13538
              </div>
              <div>
                <button onClick={() => getChildValue(false)} className="rounded-full flex items-center gap-2 lg:gap-1 text-nowrap px-2 lg:px-5 py-3 bg-orange-400 font-bold text-xs md:text-md text-white">
                  Continue <span className="hidden lg:block">Booking</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
            <div className="hidden md:block col-span-2 overflow-auto h-[70vh] custom-scrollbar">
             <div className=" ">
             <FlightFliter />
             </div>
            </div>


            <div className=" col-span-1 md:col-span-6 overflow-auto h-[70vh] px-2 custom-scrollbar">
              <div className="Heading-details hidden md:grid grid-cols-3 md:grid-cols-5 text-xs font-bold py-2 border-b">
                <p>AirLine</p>
                <p>DEPARTURE</p>
                <p>DURATION</p>
                <p>ARRIVE</p>
                <p>PRICE</p>
              </div>

              <div className="space-y-4 mt-5">
                {flightDetails.map((elm, index) => (
                  <div className="w-full p-4  Flights text-xs rounded border shadow-lg  ">
                    <div className="flex justify-between flex-col gap-5 lg:gap-0 lg:flex-row ">
                      <div className="flex  Image-and-Detail gap-3 justify-between  items-center md:items-start space-y-1">
                        <img
                          src={`/images/${elm.image}`}
                          alt="flight"
                          className="w-10 rounded"
                        />
                        <div className="Depature text-center">
                          <h4 className="font-bold text-sm">{elm.airLine}</h4>
                          <p>{elm.airLineNo}</p>
                        </div>
                      </div>

                      <div className="flex  justify-between md:gap-40 ">
                        <div className="Depature  text-center">
                          <h4 className="font-bold text-sm">
                            {elm.departureTime}
                          </h4>
                          <p>{elm.arrivalCity}</p>
                        </div>

                        <div className="Duration flex flex-col gap-0 text-center items-center">
                          <h3>2h20m</h3>
                          <div className="flex items-center gap-1">
                            <IoReturnDownForwardOutline className="text-lg" />
                            <p>Non-stop</p>
                          </div>
                        </div>

                        <div className="arrive text-center">
                          <h3 className="font-bold text-sm">
                            {elm.arrivalTime}
                          </h3>
                          <p>{elm.arrivalCity}</p>
                        </div>
                      </div>

                      <div className="flex justify-between md:gap-20 ">
                        <div className="Price font-bold text-md md:text-lg flex items-center justify-center">
                          <FaRupeeSign />
                          {elm.price}
                        </div>
                        <div className="flex justify-center">
                          <button className="border border-orange-300 px-5 py-2 rounded-full font-bold text-orange-400">
                            Select
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
