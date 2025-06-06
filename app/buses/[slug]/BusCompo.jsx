"use client"


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getbuses } from '../../Component/Store/slices/busslices'
import { getBusSeatLayout } from "../../Component/Store/slices/busSeatlayout"
import BusComp from '../../Component/AllComponent/formMaincomp/BusComp'
import BusFilter from "../../Component/Filter/BusFilter";
import Slider from "react-slick";
import { FaChevronDown, FaFilter, FaTimes } from "react-icons/fa";
import Link from 'next/link'

import { useRouter } from 'next/navigation';

const BusCompo = ({ slug }) => {
  const router = useRouter();
  const decodeslug = decodeURIComponent(slug);
  const params = new URLSearchParams(decodeslug)
  const OriginId = params.get("OriginId")
  const DestinationId = params.get("DestinationId")

  const DateOfJourney = params.get("DateOfJourney")

  const currencylist = useSelector(state => state.currencySlice);
  const defaultcurrency = JSON.parse(localStorage.getItem("usercurrency")) || { symble: "₹", code: "INR", country: "India", }
  const cuntryprice = currencylist?.info?.rates?.[`${defaultcurrency.code}`]
  const dispatch = useDispatch()
  const state = useSelector(state => state.busslice)
  useEffect(() => {
    dispatch(getbuses({ DateOfJourney, OriginId, DestinationId }))

  }, [])







  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [busData, setBusData] = useState();



  useEffect(() => {
    setBusData(state.info.BusSearchResult && state.info.BusSearchResult.BusResults && state.info.BusSearchResult.BusResults)
  }, [state])





  const handleSelectSeats = (bus) => {
    // console.log("bus", bus);

    // Save data to localStorage
    localStorage.setItem("selectedBus", JSON.stringify(bus));



    router.push(`/buses/selectseat/index=${state.info.BusSearchResult.TraceId}&resultindex=${bus.ResultIndex}`);
  };



  return (
    <>
      <BusComp />
      <div className="container mx-auto block md:flex px-0 lg:px-28 items-start gap-3 my-5">
        <div className="hidden md:block w-1/4 sticky top-24">
          <BusFilter />
        </div>

        <div className="w-full md:w-3/4  ">
          <div className="myshadow bg-white flex items-center">
            <Slider {...settings} className="custom-slider flex w-full items-center">
              {/* {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center px-3 md:px-5 py-2 md:py-4 border justify-center ${
                    activeIndex === index ? "text-blue-600 border-blue-600" : ""
                  }`}
                >
                  <div className="flex text-xs text-center font-semibold items-center  justify-center">
                    {item.time}
                  </div>
                </div>
              ))} */}
            </Slider>
          </div>

          <div>
            {state.isLoading && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                  <h4 className="mt-4 text-white text-lg font-semibold">Loading...</h4>
                </div>
              </div>

            )}



            {busData && busData.map((bus) => (
              <div
                key={bus.id}
                className="bg-white hover:border-blue-500 px-5 pt-3 my-5 border myshadow rounded-lg"
              >
                <div className="">
                  <div className="flex flex-col lg:flex-row justify-between">

                    <div className="busInfo flex flex-col mb-6 lg:mb-0">
                      <div className="flex items-center mb-2">
                        <p className="font-bold text-black mr-4">
                          {bus.TravelName}
                        </p>
                      </div>
                      <p className="text-gray-500">{bus.BusType}</p>
                    </div>

                    <div className="flex items-center mb-6 lg:mb-0">
                      <div className="mr-6">
                        <span className="text-lg font-bold text-black">
                          {new Date(bus.DepartureTime).getFullYear()}-{new Date(bus.DepartureTime).toLocaleDateString("en", { month: "short" })}-{new Date(bus.DepartureTime).getDate()}
                        </span>
                        <span className="text-sm text-gray-500 block">
                          {new Date(bus.DepartureTime).getHours() <= 9 ? `0${new Date(bus.DepartureTime).getHours()}` : new Date(bus.DepartureTime).getHours()}:{new Date(bus.DepartureTime).getMinutes() <= 9 ? `0${new Date(bus.DepartureTime).getMinutes()}` : new Date(bus.DepartureTime).getMinutes()}
                        </span>
                      </div>
                      <div className="h-px w-16 bg-gray-300 mx-6"></div>
                      <div className="text-sm text-gray-500">
                        {/* <span>{bus.duration.hours}</span>hrs{" "}
                        <span>{bus.duration.minutes}</span>mins */}
                      </div>
                      <div className="h-px w-16 bg-gray-300 mx-6"></div>
                      <div>
                        <span className="text-lg text-black">
                          {new Date(bus.ArrivalTime).getFullYear()}-{new Date(bus.ArrivalTime).toLocaleDateString("en", { month: "short" })}-{new Date(bus.ArrivalTime).getDate()}

                        </span>
                        <span className="text-sm text-gray-500 block">
                          {new Date(bus.ArrivalTime).getHours() <= 9 ? `0${new Date(bus.ArrivalTime).getHours()}` : new Date(bus.ArrivalTime).getHours()}:{new Date(bus.ArrivalTime).getMinutes() <= 9 ? `0${new Date(bus.ArrivalTime).getMinutes()}` : new Date(bus.ArrivalTime).getMinutes()}

                        </span>
                      </div>
                    </div>


                    <div className="priceSection flex flex-col items-end">
                      <div className="mb-2">
                        <span className="text-lg font-bold text-green-600">
                          {defaultcurrency.symble}
                          {(() => {
                            const publishedPrice = Number(bus.BusPrice?.PublishedPrice || 0);
                            const agentCommission = Number(bus.BusPrice?.AgentCommission || 0);

                            const totalPrice = (publishedPrice + agentCommission) * cuntryprice;

                            const priceString = totalPrice.toFixed(2);

                            // Split into integer and decimal parts
                            const [integerPart, decimalPart] = priceString.split(".");

                            // Ensure the decimal part has exactly two digits and return the formatted price
                            return `${integerPart}.${(decimalPart || "00").slice(0, 2)}`;
                          })()}
                        </span>
                      </div>
                    </div>
                  </div>


                  <div className="flex justify-between items-center mt-6">
                    <ul className="busFacility flex items-center">
                      <li className="mr-6">
                        <span className="flex gap-[1px] items-center bg-[#1a7971] p-1 px-2 rounded-md ">

                          <span className="text-white text-sm font-semibold">
                            {bus.ServiceName}
                          </span>
                        </span>
                      </li>

                    </ul>
                    <div className="text-sm text-gray-500">
                      {bus.AvailableSeats} Seats Left
                    </div>
                  </div>
                </div>


                <div className="border-t py-2 flex justify-between mt-6">

                  <button
                    onClick={() => handleSelectSeats(bus)}
                    className="selectSeats text-center cursor-pointer bg-blue-100 border border-blue-600 rounded px-3 py-1 text-blue-600 font-semibold"
                  >
                    Select Seats
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BusCompo
