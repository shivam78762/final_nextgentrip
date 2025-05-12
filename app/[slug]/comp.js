"use client";
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getfarequote } from "../Component/Store/slices/farequateflight";
import { MdCancel } from "react-icons/md";
import { FaPlaneDeparture, FaPlaneArrival, FaLuggageCart, FaMoneyCheckAlt, FaChair, FaMoneyBillWave } from 'react-icons/fa';
import {
  FaArrowRight,
  FaFilter,
  FaPlane,
  FaTimes,
  FaUsb,
  FaWheelchair,
} from "react-icons/fa";
import FlightFliter from "../Component/Filter/FlightFliter";
import Header from "../Component/AllComponent/Header";
import { FaSpoon } from "react-icons/fa6";

import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { searchFlightApi } from "../Component/Store/slices/SearchFlight";

import axios from "axios";
import { searchreturnflightapi } from "../Component/Store/slices/searchreturnFlight";
import { getfareRule } from "../Component/Store/slices/fairRuleflight";
import { getssrFlight } from "../Component/Store/slices/ssrRuleFlight";

const comp = ({ slug }) => {
  const [faredata, setfareData] = useState([]);
  const [isLoading, setisLoading] = useState([]);
  const [isloadingQoute, setisloadingQoute] = useState(false);


  const dispatch = useDispatch();

  const returnstate = useSelector((state) => state.searchreturn);
  const [activePopup, setActivePopup] = useState(null);
  const info = useSelector((state) => state.searchFlightslice);
  const ssrFair = useSelector((state) => state.farequoteSlice);
  const [srrFairdata, setssrFair] = useState();

  const [newtIp, setmineIp] = useState(null);

  const decodedSlug = decodeURIComponent(slug);
  const params = new URLSearchParams(decodedSlug);

  const fromCityCode = params.get("from");
  const toCityCode = params.get("flightto");
  const selectedMinDate = params.get("date");
  const prfdate = params.get("prfdate");
  const JourneyType = params.get("JourneyType");
  const adultCount = params.get("adultcount");
  const childCount = params.get("childCount");
  const infantCount = params.get("infantCount");
  const selectedClass = params.get("selectedClass");
  const PreferredAirlines = params.get("PreferredAirlines");
  const r_localFormattedDate = params.get("returndate");
  const date = new Date(selectedMinDate);
  const currencylist = useSelector((state) => state.currencySlice);
  const defaultcurrency = JSON.parse(localStorage.getItem("usercurrency")) || {
    symble: "₹",
    code: "INR",
    country: "India",
  };
  const cuntryprice = currencylist?.info?.rates?.[`${defaultcurrency.code}`];

  const offset = 6 * 60 * 55 * 1000;

  const localDate = new Date(date.getTime() + offset);
  const localFormattedDate = localDate.toISOString().slice(0, 19);

  useEffect(() => {
    const getIp = async () => {
      try {
        const res = await axios.get(`https://api.ipify.org/?format=json`);
        const ip = res.data.ip;
        setmineIp(ip);
      } catch (err) {
        console.error("Failed to fetch IP", err);
      }
    };
    getIp();
  }, []);

  useEffect(() => {
    setssrFair(ssrFair && ssrFair.info && ssrFair.info.Response);
  }, [ssrFair]);

  useEffect(() => {

    if (newtIp && fromCityCode && toCityCode && JourneyType == 1) {
      dispatch(
        searchFlightApi({
          EndUserIp: newtIp,
          AdultCount: adultCount,
          ChildCount: childCount,
          InfantCount: 0,
          DirectFlight: false,
          OneStopFlight: false,
          JourneyType: JourneyType,
          PreferredAirlines: PreferredAirlines == 'null' ? null : PreferredAirlines,
          Origin: toCityCode,
          Destination: fromCityCode,
          FlightCabinClass: selectedClass,
          PreferredDepartureTime: selectedMinDate,
          PreferredArrivalTime: prfdate || localFormattedDate,
        })
      );
    } else if (newtIp && fromCityCode && toCityCode && JourneyType == 2) {
      dispatch(
        searchreturnflightapi({
          EndUserIp: newtIp,
          AdultCount: adultCount,
          ChildCount: childCount,
          InfantCount: 0,
          DirectFlight: false,
          OneStopFlight: false,
          JourneyType: JourneyType,
          PreferredAirlines: PreferredAirlines == 'null' ? null : PreferredAirlines,
          Origin: fromCityCode,
          Destination: toCityCode,
          FlightCabinClass: selectedClass,
          PreferredDepartureTime: selectedMinDate,
          PreferredArrivalTime: prfdate || localFormattedDate,
          PreferredDepartureTime2: r_localFormattedDate,
        })
      );
    }
  }, [
    dispatch,
    newtIp,
    fromCityCode,
    toCityCode,
    selectedMinDate,
    prfdate,
    localFormattedDate,
  ]);

  const [state, setstate] = useState();
  const [state2, setstate2] = useState();

  const [airlines, setairlines] = useState([]);

  useEffect(() => {
    setstate(info);

    const getports = () => {
      let uniqueport = [];

      info &&
        info.data &&
        info.data.Response &&
        info.data.Response.Results &&
        info.data.Response.Results[0].forEach((info1) => {
          const airlineName = info1.Segments[0][0].Airline.AirlineName;
          if (!uniqueport.includes(airlineName)) {
            uniqueport.push(airlineName);
          }
        });

      setairlines(uniqueport);
    };

    getports();
  }, [info]);

  const [traceid, settraceid] = useState();

  useEffect(() => {





    setstate2(
      state &&
      !state.isLoading &&
      state.data &&
      state.data.Response &&
      state.data.Response.Results &&
      state.data.Response.Results &&
      state.data.Response.Results
    );
    settraceid(
      state &&
      !state.isLoading &&
      state.data &&
      state.data.Response &&
      state.data.Response.TraceId
    );
  }, [state]);

  useEffect(() => {
    setstate2(
      returnstate &&
      !returnstate.isLoading &&
      returnstate.data &&
      returnstate.data.Response &&
      returnstate.data.Response.Results &&
      returnstate.data.Response.Results[0] &&
      returnstate.data.Response.Results
    );
  }, [returnstate]);

  const [activeIndex, setActiveIndex] = useState(null);

  const [showDetailsIndex, setShowDetailsIndex] = useState();
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (index) => {
    setShowDetailsIndex(showDetailsIndex === index ? null : index);
  };

  const handelFilter = (value) => {
    if (value === "All") {
      setstate2([state?.data?.Response?.Results?.[0] || []]);
    } else {
      const filterdata =
        state?.data?.Response?.Results?.[0]?.filter(
          (info) => info.Segments[0][0].Airline.AirlineName === value
        ) || [];

      setstate2([filterdata]);
    }
  };

  const handelnonstop = (e) => {
    if (e.target.defaultValue == "direct") {
      const filterdata =
        state?.data?.Response?.Results?.[0]?.filter(
          (info) => info.Segments[0].length == 1
        ) || [];

      setstate2([filterdata]);
    } else {
      const filterdata =
        state?.data?.Response?.Results?.[0]?.filter(
          (info) => info.Segments[0].length > 1
        ) || [];

      setstate2([filterdata]);
    }
  };

  const togglePopup = (id, ResultIndex) => {
    setisloadingQoute(true); // Set loading to true when starting

    // Dispatch the action and handle the response
    dispatch(getfarequote({ ResultIndex: ResultIndex.ResultIndex, TraceId: traceid }))
      .then(() => {
        // This runs when the dispatch is successful
        if (activePopup === id) {
          setActivePopup(null);
        } else {
          setActivePopup(id);
        }

        let data = [];
        data.push(ResultIndex);

        const addate = Date.now();
        localStorage.setItem(
          "checkOutFlightDetail",
          JSON.stringify({
            addat: addate,
            data: ResultIndex,
            ResultIndex: ResultIndex.ResultIndex,
            IsLCC: ResultIndex.IsLCC,
            traceid,
            ip: newtIp,
          })
        );

        // Optionally redirect
        // window.location.href = "/flight/checkout";
      })
      .catch((error) => {
        // Handle any errors from the dispatch
        console.error("Error fetching fare quote:", error);
      })
      .finally(() => {
        // Set loading to false when everything is done (success or failure)
        setisloadingQoute(false);
      });
  };



  useEffect(() => {



    localStorage.setItem("farebreakdown", JSON.stringify({ data: ssrFair.info.Response?.Results?.FareBreakdown }));

  }, [ssrFair])


  const saveDataInLocal = (flight, price) => {

    window.location.href = "/flight/checkout";



  };
  const SkeletonLoader = () => {
    return (
      <div className="my-3 border p-2 md:p-5 w-full">


        <div className="overflow-hidden px-4">
          <div className="my-3 w-full h-[120px]  lg:h-[160px] border p-2 md:p-5">
            <div className=" ">
              <div className="flex animate-pulse items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-[50px] h-[50px] bg-gray-300 rounded"></div>
                  <div className="hidden sm:block">
                    <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-20"></div>
                  </div>
                </div>

                <div className=" text-center">
                  <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-20"></div>
                </div>

                <div className="text-center">
                  <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                  <div className="relative h-3 bg-gray-300 rounded w-32"></div>
                  <div className="h-3 bg-gray-300 rounded w-16 mt-2"></div>
                </div>

                <div className="hidden lg:block  text-center">
                  <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-20"></div>
                </div>

                <div className=" hidden lg:flex  items-center gap-x-3">
                  <div className="text-right flex-1">
                    <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                  </div>
                  <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                </div>
              </div>

              <div className="my-4 p-2 bg-yellow-100 h-5 w-full"></div>

              <div className="hidden md:flex justify-between items-center text-sm card-footer-v2">
                <div className="h-4 bg-gray-300 rounded w-40"></div>
              </div>
            </div>
          </div>
          <div className="my-3 w-full h-[120px]  lg:h-[160px] border p-2 md:p-5">
            <div className=" ">
              <div className="flex animate-pulse items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-[50px] h-[50px] bg-gray-300 rounded"></div>
                  <div className="hidden sm:block">
                    <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-20"></div>
                  </div>
                </div>

                <div className=" text-center">
                  <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-20"></div>
                </div>

                <div className="text-center">
                  <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                  <div className="relative h-3 bg-gray-300 rounded w-32"></div>
                  <div className="h-3 bg-gray-300 rounded w-16 mt-2"></div>
                </div>

                <div className="hidden lg:block  text-center">
                  <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-20"></div>
                </div>

                <div className=" hidden lg:flex  items-center gap-x-3">
                  <div className="text-right flex-1">
                    <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                  </div>
                  <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                </div>
              </div>

              <div className="my-4 p-2 bg-yellow-100 h-5 w-full"></div>

              {/* Footer Skeleton */}
              <div className="hidden md:flex justify-between items-center text-sm card-footer-v2">
                <div className="h-4 bg-gray-300 rounded w-40"></div>
              </div>
            </div>
          </div>

          <div className="my-3 w-full h-[120px]  lg:h-[160px] border p-2 md:p-5">
            <div className=" ">
              <div className="flex animate-pulse items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-[50px] h-[50px] bg-gray-300 rounded"></div>
                  <div className="hidden sm:block">
                    <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-20"></div>
                  </div>
                </div>

                <div className=" text-center">
                  <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-20"></div>
                </div>

                <div className="text-center">
                  <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                  <div className="relative h-3 bg-gray-300 rounded w-32"></div>
                  <div className="h-3 bg-gray-300 rounded w-16 mt-2"></div>
                </div>

                <div className="hidden lg:block  text-center">
                  <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-20"></div>
                </div>

                <div className=" hidden lg:flex  items-center gap-x-3">
                  <div className="text-right flex-1">
                    <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                  </div>
                  <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                </div>
              </div>

              <div className="my-4 p-2 bg-yellow-100 h-5 w-full"></div>

              {/* Footer Skeleton */}
              <div className="hidden md:flex justify-between items-center text-sm card-footer-v2">
                <div className="h-4 bg-gray-300 rounded w-40"></div>
              </div>
            </div>
          </div>
        </div>




      </div>
    );
  };



  const handelnonlcc = (id, ResultIndex) => {
    const addate = Date.now()
    localStorage.setItem("checkOutFlightDetail", JSON.stringify({ addat: addate, data: ResultIndex, ResultIndex: ResultIndex.ResultIndex, IsLCC: ResultIndex.IsLCC, traceid, ip: newtIp }));

    window.location.href = "/flight/checkout";

  }





  return (
    <>
      {activePopup === "view-price" && srrFairdata && !ssrFair.isLoading && (
        <div className="fixed p-4 inset-0 flex  z-[9999] items-center justify-center bg-black bg-opacity-50  overflow-y-auto">
          <div className="p-6  bg-gray-100  rounded-md h-auto md:max-h-screen relative">
            <MdCancel
              className="absolute top-2 right-2 text-2xl cursor-pointer"
              onClick={() => setActivePopup(null)}
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {srrFairdata.Results?.Segments[0]?.map((flight, index) => (
                <div
                  key={index}
                  className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <h2 className="text-2xl font-extrabold mb-4 text-gray-800 flex items-center">
                    <FaPlaneDeparture className="mr-3 text-indigo-500" />
                    {flight.Destination.Airport.CityName} - {flight.Origin.Airport.CityName}
                  </h2>

                  <h3 className="text-xl font-semibold text-gray-700 mb-2">{flight.airline}</h3>
                  <p className="text-sm text-gray-600 flex flex-col lg:flex-row items-center mb-4">
                    <FaPlaneDeparture className="mr-2 text-blue-500" />
                    <strong>Departure:</strong>{" "}
                    {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    }).format(new Date(flight?.Origin?.DepTime))}{" "}
                    | <FaPlaneArrival className="ml-4 mr-2 text-blue-500" />
                    <strong>Arrival:</strong>{" "}
                    {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    }).format(new Date(flight?.Destination?.ArrTime))}
                  </p>

                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-gray-800 font-medium flex items-center">
                      <FaLuggageCart className="mr-2 text-gray-500" />
                      <strong>Baggage:</strong> {flight.CabinBaggage}
                    </p>
                    <p className="text-sm text-gray-800 font-medium flex items-center">
                      <FaMoneyCheckAlt className="mr-2 text-green-500" />
                      <strong>Refundable:</strong> {srrFairdata.Results.IsRefundable ? 'Yes' : 'No'}
                    </p>
                    <p className="text-sm text-gray-800 font-medium flex items-center">
                      <FaChair className="mr-2 text-indigo-500" />
                      <strong>Cabin Type:</strong>{" "}
                      {[
                        "All",
                        "Economy",
                        "PremiumEconomy",
                        "Business",
                        "PremiumBusiness",
                        "First",
                      ].filter((inf, ind) => ind + 1 == flight.CabinClass)}
                    </p>
                    <p className="text-sm text-gray-800 font-medium">
                      <strong>Tax Breakdown:</strong>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {srrFairdata?.Results?.FareBreakdown?.[0]?.TaxBreakUp?.map(
                          (taxinfo, index) => (
                            <p key={index} className="text-sm text-gray-600 flex items-center">
                              <FaMoneyBillWave className="mr-2 text-yellow-500" />
                              {taxinfo.key}: {taxinfo.value}
                            </p>
                          )
                        ) || <p className="text-sm text-gray-500">No tax information available.</p>}
                      </div>
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                      <p className="text-lg font-bold text-indigo-400 flex items-center">
                        <FaMoneyBillWave className="mr-2 text-indigo-400" />
                        Base Price: {defaultcurrency.symble}
                        {(() => {
                          const baseFare = srrFairdata?.Results?.FareBreakdown?.[0]?.BaseFare || 0;
                          const price = baseFare * cuntryprice;
                          const priceString = price.toFixed(2);
                          const [integerPart, decimalPart] = priceString.split(".");
                          return `${integerPart},${(decimalPart || "00").slice(0, 2)}`;
                        })()}
                      </p>
                      <p className="text-lg font-bold text-indigo-600 flex items-center">
                        <FaMoneyBillWave className="mr-2 text-indigo-600" />
                        Total Price: {defaultcurrency.symble}
                        {(() => {
                          const baseFare = Number(srrFairdata?.Results?.FareBreakdown?.[0]?.BaseFare || 0);
                          const taxBreakUpTotal =
                            srrFairdata?.Results?.FareBreakdown?.[0]?.TaxBreakUp?.reduce(
                              (acc, arr) => acc + Number(arr.value || 0),
                              0
                            ) || 0;
                          const totalPrice = (baseFare + taxBreakUpTotal) * cuntryprice;
                          const priceString = totalPrice.toFixed(2);
                          const [integerPart, decimalPart] = priceString.split(".");
                          return `${integerPart},${(decimalPart || "00").slice(0, 2)}`;
                        })()}
                      </p>
                    </div>
                    <button
                      onClick={() => saveDataInLocal(flight, (() => {
                        const baseFare = Number(srrFairdata?.Results?.FareBreakdown?.[0]?.BaseFare || 0);
                        const taxBreakUpTotal =
                          srrFairdata?.Results?.FareBreakdown?.[0]?.TaxBreakUp?.reduce(
                            (acc, arr) => acc + Number(arr.value || 0),
                            0
                          ) || 0;
                        const totalPrice = (baseFare + taxBreakUpTotal) * cuntryprice;
                        const priceString = totalPrice.toFixed(2);
                        const [integerPart, decimalPart] = priceString.split(".");
                        return `${integerPart},${(decimalPart || "00").slice(0, 2)}`;
                      })())}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center"
                    >
                      <FaPlaneDeparture className="mr-2" /> Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Header />
      <div className="block md:flex px-0 lg:px-28 items-start gap-3 my-5  ">
        <div className="hidden md:block  sticky top-6 w-1/4">
          <FlightFliter
            airlines={airlines}
            handelFilter={handelFilter}
            handelnonstop={handelnonstop}
          />
        </div>


        <div className={` w-full md:w-3/4   `}>
          {state && state.isLoading && (
            <div className="overflow-hidden px-4">
              <div className="my-3 w-full h-[120px]  lg:h-[160px] border p-2 md:p-5">
                <div className=" ">
                  <div className="flex animate-pulse items-center justify-between">
                    <div className="flex gap-3">
                      <div className="w-[50px] h-[50px] bg-gray-300 rounded"></div>
                      <div className="hidden sm:block">
                        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>

                    <div className=" text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className="text-center">
                      <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                      <div className="relative h-3 bg-gray-300 rounded w-32"></div>
                      <div className="h-3 bg-gray-300 rounded w-16 mt-2"></div>
                    </div>

                    <div className="hidden lg:block  text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className=" hidden lg:flex  items-center gap-x-3">
                      <div className="text-right flex-1">
                        <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-24"></div>
                      </div>
                      <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                    </div>
                  </div>

                  <div className="my-4 p-2 bg-yellow-100 h-5 w-full"></div>

                  <div className="hidden md:flex justify-between items-center text-sm card-footer-v2">
                    <div className="h-4 bg-gray-300 rounded w-40"></div>
                  </div>
                </div>
              </div>
              <div className="my-3 w-full h-[120px]  lg:h-[160px] border p-2 md:p-5">
                <div className=" ">
                  <div className="flex animate-pulse items-center justify-between">
                    <div className="flex gap-3">
                      <div className="w-[50px] h-[50px] bg-gray-300 rounded"></div>
                      <div className="hidden sm:block">
                        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>

                    <div className=" text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className="text-center">
                      <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                      <div className="relative h-3 bg-gray-300 rounded w-32"></div>
                      <div className="h-3 bg-gray-300 rounded w-16 mt-2"></div>
                    </div>

                    <div className="hidden lg:block  text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className=" hidden lg:flex  items-center gap-x-3">
                      <div className="text-right flex-1">
                        <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-24"></div>
                      </div>
                      <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                    </div>
                  </div>

                  <div className="my-4 p-2 bg-yellow-100 h-5 w-full"></div>

                  {/* Footer Skeleton */}
                  <div className="hidden md:flex justify-between items-center text-sm card-footer-v2">
                    <div className="h-4 bg-gray-300 rounded w-40"></div>
                  </div>
                </div>
              </div>

              <div className="my-3 w-full h-[120px]  lg:h-[160px] border p-2 md:p-5">
                <div className=" ">
                  <div className="flex animate-pulse items-center justify-between">
                    <div className="flex gap-3">
                      <div className="w-[50px] h-[50px] bg-gray-300 rounded"></div>
                      <div className="hidden sm:block">
                        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>

                    <div className=" text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className="text-center">
                      <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                      <div className="relative h-3 bg-gray-300 rounded w-32"></div>
                      <div className="h-3 bg-gray-300 rounded w-16 mt-2"></div>
                    </div>

                    <div className="hidden lg:block  text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className=" hidden lg:flex  items-center gap-x-3">
                      <div className="text-right flex-1">
                        <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-24"></div>
                      </div>
                      <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                    </div>
                  </div>

                  <div className="my-4 p-2 bg-yellow-100 h-5 w-full"></div>

                  {/* Footer Skeleton */}
                  <div className="hidden md:flex justify-between items-center text-sm card-footer-v2">
                    <div className="h-4 bg-gray-300 rounded w-40"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {state2 && state2.isLoading && (
            <div className="overflow-hidden px-4">
              <div className="my-3 w-full h-[120px]  lg:h-[160px] border p-2 md:p-5">
                <div className=" ">
                  <div className="flex animate-pulse items-center justify-between">
                    <div className="flex gap-3">
                      <div className="w-[50px] h-[50px] bg-gray-300 rounded"></div>
                      <div className="hidden sm:block">
                        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>

                    <div className=" text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className="text-center">
                      <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                      <div className="relative h-3 bg-gray-300 rounded w-32"></div>
                      <div className="h-3 bg-gray-300 rounded w-16 mt-2"></div>
                    </div>

                    <div className="hidden lg:block  text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className=" hidden lg:flex  items-center gap-x-3">
                      <div className="text-right flex-1">
                        <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-24"></div>
                      </div>
                      <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                    </div>
                  </div>

                  <div className="my-4 p-2 bg-yellow-100 h-5 w-full"></div>

                  <div className="hidden md:flex justify-between items-center text-sm card-footer-v2">
                    <div className="h-4 bg-gray-300 rounded w-40"></div>
                  </div>
                </div>
              </div>
              <div className="my-3 w-full h-[120px]  lg:h-[160px] border p-2 md:p-5">
                <div className=" ">
                  <div className="flex animate-pulse items-center justify-between">
                    <div className="flex gap-3">
                      <div className="w-[50px] h-[50px] bg-gray-300 rounded"></div>
                      <div className="hidden sm:block">
                        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>

                    <div className=" text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className="text-center">
                      <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                      <div className="relative h-3 bg-gray-300 rounded w-32"></div>
                      <div className="h-3 bg-gray-300 rounded w-16 mt-2"></div>
                    </div>

                    <div className="hidden lg:block  text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className=" hidden lg:flex  items-center gap-x-3">
                      <div className="text-right flex-1">
                        <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-24"></div>
                      </div>
                      <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                    </div>
                  </div>

                  <div className="my-4 p-2 bg-yellow-100 h-5 w-full"></div>

                  {/* Footer Skeleton */}
                  <div className="hidden md:flex justify-between items-center text-sm card-footer-v2">
                    <div className="h-4 bg-gray-300 rounded w-40"></div>
                  </div>
                </div>
              </div>

              <div className="my-3 w-full h-[120px]  lg:h-[160px] border p-2 md:p-5">
                <div className=" ">
                  <div className="flex animate-pulse items-center justify-between">
                    <div className="flex gap-3">
                      <div className="w-[50px] h-[50px] bg-gray-300 rounded"></div>
                      <div className="hidden sm:block">
                        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>

                    <div className=" text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className="text-center">
                      <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                      <div className="relative h-3 bg-gray-300 rounded w-32"></div>
                      <div className="h-3 bg-gray-300 rounded w-16 mt-2"></div>
                    </div>

                    <div className="hidden lg:block  text-center">
                      <div className="h-4 bg-gray-300 rounded w-16 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>

                    <div className=" hidden lg:flex  items-center gap-x-3">
                      <div className="text-right flex-1">
                        <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-24"></div>
                      </div>
                      <div className="h-8 bg-gray-300 rounded-full w-20"></div>
                    </div>
                  </div>

                  <div className="my-4 p-2 bg-yellow-100 h-5 w-full"></div>

                  {/* Footer Skeleton */}
                  <div className="hidden md:flex justify-between items-center text-sm card-footer-v2">
                    <div className="h-4 bg-gray-300 rounded w-40"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {info &&
            info.data &&
            info.data.Response &&
            state &&
            !state.isLoading &&
            info.data.Response &&
            info.data.Response.ResponseStatus == 3 && (
              <div className="text-center">
                <h1 className="mb-4 text-6xl font-semibold text-red-500">
                  Oops!
                </h1>
                <p className="mb-4 text-lg text-gray-600"> Flight not found.</p>
                <div className="animate-bounce">
                  <svg
                    className="mx-auto h-16 w-16 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </div>
                <p className="mt-4 text-gray-600">
                  Let's get you back{" "}
                  <Link href="/" className="text-blue-500">
                    home
                  </Link>
                </p>
              </div>
            )}
          {info &&
            info.data &&
            info.data.Response &&
            state &&
            !state.isLoading &&
            info.data.Response &&
            info.data.Response.ResponseStatus == 2 && (
              <div className="text-center">
                <h1 className="mb-4 text-6xl font-semibold text-red-500">
                  Oops!
                </h1>
                <p className="mb-4 text-lg text-gray-600"> Flight not found.</p>
                <div className="animate-bounce">
                  <svg
                    className="mx-auto h-16 w-16 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </div>
                <p className="mt-4 text-gray-600">
                  Let's get you back{" "}
                  <Link href="/" className="text-blue-500">
                    home
                  </Link>
                  .
                </p>
              </div>
            )}

          <div className="myshadow w-full md:flex bg-white gap-1 px-4 overflow-hidden">
            {!state2 ? (
              // Show skeleton loader while data is being fetched
            <SkeletonLoader />
            ) : (
              state2?.map((flightinfo) => {

                return (

                  <div className="w-full">


                    {flightinfo?.map((flight, index) => {

                      return (
                        <>
                          {flight.Segments[0].length > 1 ? (
                            <div
                              key={index}
                              className="my-3 border  p-2 md:p-5 w-full"
                            >

                              <div className="flex flex-col">
                                {flight?.Segments[0]?.map((info, index2) => (
                                  <div
                                    className="flex items-center justify-between my-5"
                                    key={index2}
                                  >
                                    <div className="flex gap-3">
                                      <img
                                        className="w-[50px]"
                                        src={
                                          info.Airline.AirlineName
                                            ? `/images/${info.Airline.AirlineCode}.png`
                                            : "/images/planeicon.svg"
                                        }
                                        alt={`${info.Airline.AirlineName || "Default"
                                          } Logo`}
                                      />

                                      <div className="hidden sm:block ">
                                        <p className="font-bold text-black ">
                                          {info.Airline.AirlineName}
                                        </p>
                                        <p className="text-black text-xs">
                                          {info.Airline.FlightNumber}
                                        </p>
                                      </div>

                                      
                                      
                                    </div>

                                    <div className="text-center">
                                      <p className="mb-1 text-sm md:text-lg font-semibold">
                                        {info.Origin.DepTime.split(
                                          "T"
                                        )[1].slice(0, 5)}
                                      </p>
                                      <p className="text-black text-xs">
                                        {info.Origin.Airport.CityName}
                                      </p>
                                    </div>

                                    <div className="text-center">
                                      <p className="text-center text-sm md:text-lg">
                                        {Math.floor(info.Duration / 60)} h
                                        <font color="#757575"></font>
                                        {info.Duration % 60} Min
                                        <font color="#757575"> </font>
                                      </p>
                                      <div>
                                        <div className="relative">
                                          <p
                                            style={{
                                              borderTop:
                                                "3px solid rgb(245, 166, 34)",
                                            }}
                                          ></p>
                                        </div>
                                        <p className="text-black text-xs mt-1">
                                          {flight.stop}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="text-center">
                                      <p className="mb-1 text-sm md:text-lg font-semibold">
                                        {info.Destination.ArrTime.split(
                                          "T"
                                        )[1].slice(0, 5)}
                                      </p>
                                      <p className="text-black text-xs">
                                        {info.Destination.Airport.CityName}{" "}
                                      </p>
                                    </div>


                                  </div>
                                ))}
                              </div>




                              <div className="flex items-center justify-between gap-x-3">
                                <div className="text-right ">
                                  <div className="text-black text-lg font-bold whitespace-nowrap ">
                                    <span className="text-sm md:text-lg font-bold">
                                      {defaultcurrency.symble}
                                      {(() => {
                                        const offeredFare =
                                          flight.Fare?.OfferedFare || 0;
                                        const price =
                                          Number(offeredFare) *
                                          Number(cuntryprice);
                                        const priceString =
                                          price.toFixed(2);
                                        const [
                                          integerPart,
                                          decimalPart,
                                        ] = priceString.split(".");
                                        return `${integerPart}.${(
                                          decimalPart || "00"
                                        ).slice(0, 2)}`;
                                        // return offeredFare;
                                      })()}
                                    </span>
                                    <p className="text-sm text-gray-700 font-light leading-tight">
                                      Total Price
                                    </p>
                                  </div>
                                </div>
                                {flight.IsLCC &&
                                  <button
                                    onClick={() =>
                                      togglePopup("view-price", flight)
                                    }
                                    className="block text-[11.5px] md:text-sm font-semibold md:h-8 text-blue-600 rounded-full p-1 px-2 md:px-4 bg-blue-200 border border-blue-600 relative overflow-hidden"
                                    disabled={isloadingQoute}
                                  >
                                    {isloadingQoute ? (
                                      <div className="flex items-center justify-center">
                                        <svg
                                          className="animate-spin h-5 w-5 text-blue-600"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                        >
                                          <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                          />
                                          <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                          />
                                        </svg>
                                      </div>
                                    ) : (
                                      <>
                                        <span className="hidden md:inline">VIEW</span> PRICES
                                      </>
                                    )}
                                  </button>}


                                {!flight.IsLCC &&
                                  <button
                                    onClick={() =>
                                      togglePopup("view-price", flight)
                                    }
                                    className="block text-[11.5px] md:text-sm font-semibold md:h-8 text-blue-600 rounded-full p-1 px-2 md:px-4 bg-blue-200 border border-blue-600 relative overflow-hidden"
                                    disabled={isloadingQoute} // Optional: disable button while loading
                                  >
                                    {isloadingQoute ? (
                                      <div className="flex items-center justify-center">
                                        <svg
                                          className="animate-spin h-5 w-5 text-blue-600"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                        >
                                          <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                          />
                                          <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                          />
                                        </svg>
                                      </div>
                                    ) : (
                                      <>
                                        <span className="hidden md:inline">VIEW</span> PRICES
                                      </>
                                    )}
                                  </button>
                                }

                              </div>


                              <p className="my-4 p-1 text-center bg-yellow-100">
                                <span className="text-[9px] md:text-xs text-center ">
                                  {flight.offer}
                                </span>
                              </p>

                              <div
                                className="hidden md:flex justify-between items-center text-sm card-footer-v2"
                                onClick={() => toggle(index)}
                              >
                                <span className="text-blue-600 flex items-center gap-2">
                                  View Flight Details <FaArrowRight />
                                </span>
                              </div>

                              {showDetailsIndex === index && (
                                <div className="">
                                  <nav className="my-4 flex justify-between m-0 p-0 bg-[#f6f4f4] w-full float-left rounded-[20px]">
                                    <button
                                      onClick={() => setActiveTab(1)}
                                      aria-selected={activeTab == "1"}
                                      className={`cursor-pointer float-left p-2 list-none text-black text-sm  w-[23%] text-center font-medium${activeTab == "1"
                                          ? " text-white rounded-full bg-[#2196f3]"
                                          : ""
                                        }`}
                                    >
                                      FLIGHT DETAILS
                                    </button>
                                    <button
                                      onClick={() => setActiveTab(2)}
                                      aria-selected={activeTab == "2"}
                                      className={`cursor-pointer float-left p-2 list-none text-black text-sm  w-[23%] text-center font-medium${activeTab == "2"
                                          ? " text-white rounded-full bg-[#2196f3]"
                                          : ""
                                        }`}
                                    >
                                      FARE SUMMARY
                                    </button>
                                    <button
                                      onClick={() => setActiveTab(3)}
                                      aria-selected={activeTab == "3"}
                                      className={`cursor-pointer float-left p-2 list-none text-black text-sm  w-[23%] text-center font-medium${activeTab === "3"
                                          ? " text-white rounded-full bg-[#2196f3]"
                                          : ""
                                        }`}
                                    >
                                      CANCELLATION
                                    </button>
                                    <button
                                      onClick={() => setActiveTab(4)}
                                      aria-selected={activeTab == "4"}
                                      className={`cursor-pointer float-left p-2 list-none text-black text-sm  w-[23%] text-center font-medium${activeTab == "4"
                                          ? " text-white rounded-full bg-[#2196f3]"
                                          : ""
                                        }`}
                                    >
                                      DATE CHANGE
                                    </button>
                                  </nav>

                                  <div className="">
                                    {activeTab === "1" && (
                                      <div className="">
                                        <span className="border w-full p-2 text-sm font-bold ">
                                          {
                                            flight.Segments[0][0].Origin.Airport
                                              .CityName
                                          }{" "}
                                          to{" "}
                                          {
                                            flight.Segments[0][0].Destination
                                              .Airport.CityName
                                          }{" "}
                                          , 20 Sep
                                        </span>
                                        <div className="">
                                          <div className="flex items-center gap-5 my-4">
                                            <img
                                              src={
                                                flight.Segments[0][0].Airline
                                                  .AirlineName
                                                  ? `/images/${flight.Segments[0][0].Airline.AirlineCode}.png`
                                                  : "/images/logo-flight.webp"
                                              }
                                              alt=" "
                                              className="w-6 h-6"
                                            />
                                            <span className="">
                                              <strong>
                                                {
                                                  flight.Segments[0][0].Airline
                                                    .AirlineName
                                                }
                                              </strong>{" "}
                                              <span className="text-gray-500">
                                                {
                                                  flight.Segments[0][0].Airline
                                                    .FareClass
                                                }
                                                |{" "}
                                                {
                                                  flight.Segments[0][0].Airline
                                                    .FlightNumber
                                                }
                                              </span>
                                            </span>
                                            <span className="border border-gray-400 text-xs px-2 rounded-full text-gray-400">
                                              Airbus A350
                                            </span>
                                          </div>

                                          <div className="flex gap-10">
                                            <div className="flex items-center justify-between w-[50%]">
                                              <div className="">
                                                <p className="text-lg font-bold">
                                                  {" "}
                                                  {new Date(
                                                    flight.Segments[0][0].Origin.DepTime
                                                  ).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: true,
                                                  })}
                                                </p>
                                                <p className="text-sm font-bold mb-2">
                                                  {new Date(
                                                    flight.Segments[0][0].Origin.DepTime
                                                  ).toLocaleTimeString([], {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                  })}
                                                </p>
                                                <p className="text-gray-600">
                                                  Terminal  {flight?.Segments[0][0]?.Origin?.Airport?.Terminal}

                                                </p>
                                                <p className="text-sm">
                                                  New Delhi, India
                                                </p>
                                              </div>
                                              <div
                                                className=" text-sm flex items-center"
                                                style={{
                                                  borderBottom:
                                                    "3px solid rgb(245, 166, 34)",
                                                }}
                                              >
                                                <p className="text-center text-sm md:text-lg">
                                                  {Math.floor(
                                                    flight.Segments[0][0]
                                                      .Duration / 60
                                                  )}
                                                  .<font color="#757575"></font>
                                                  {flight.Segments[0][0]
                                                    .Duration % 60}{" "}
                                                  h
                                                  <font color="#757575"> </font>
                                                </p>
                                              </div>

                                              <div className="">
                                                <p className="text-lg font-bold">
                                                  {new Date(
                                                    flight.Segments[0][0].Destination.ArrTime
                                                  ).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: true,
                                                  })}
                                                </p>
                                                <p className="text-sm font-bold mb-2">
                                                  {new Date(
                                                    flight.Segments[0][0].Destination.ArrTime
                                                  ).toLocaleTimeString([], {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                  })}
                                                </p>
                                                <p className="text-gray-600">
                                                  Terminal  {flight.Segments[0][0].Destination.Airport.Terminal}
                                                </p>
                                                <p className="text-sm">
                                                  Bengaluru, India
                                                </p>
                                              </div>
                                            </div>

                                            <div className="flex gap-10  w-[45%]">
                                              <p>
                                                <span className="font-bold text-sm">
                                                  BAGGAGE:
                                                </span>{" "}
                                                <br />
                                                <span className="text-gray-700">
                                                  ADULT
                                                </span>
                                              </p>
                                              <p>
                                                <span className="font-bold text-sm">
                                                  CHECK IN
                                                </span>
                                                {""}
                                                <br />
                                                <span className="text-gray-700">
                                                  {flight.Segments[0][0].Baggage
                                                    ? flight.Segments[0][0]
                                                      .Baggage
                                                    : "Not Allowed"}
                                                </span>
                                              </p>
                                              <p>
                                                <span className="font-bold text-sm">
                                                  CABIN
                                                </span>{" "}
                                                <br />
                                                <span className="text-gray-700">
                                                  {" "}
                                                  {
                                                    flight.Segments[0][0]
                                                      .CabinBaggage
                                                  }
                                                </span>
                                              </p>
                                            </div>
                                          </div>

                                          <div className="flex gap-10 flex-wrap mt-5">
                                            <div className="flex items-center gap-2 mb-2">
                                              <FaSpoon />
                                              <div className="text-sm">
                                                Complimentary Meals
                                              </div>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                              <FaPlane />
                                              <div className="text-sm">
                                                3-3-3 Layout
                                              </div>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                              <FaWheelchair />
                                              <div className="text-sm">
                                                Standard Recliner (31'' Legroom)
                                              </div>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                              <FaUsb />
                                              <div className="text-sm">
                                                Power and USB Available
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {activeTab === "2" && (
                                      <div
                                        id="Tab-1-tabpane-2"
                                        className="fade tab-pane"
                                      >
                                        <div className="">
                                          <span className="border w-full p-2 text-sm font-bold ">
                                            Fare breakup
                                          </span>

                                          <div className="mt-4">
                                            <table className="min-w-full table-auto border-collapse border border-gray-300">
                                              <thead>
                                                <tr className="">
                                                  <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                                    TOTAL
                                                  </th>
                                                  <th className="border border-gray-300 px-4 text-sm py-2 text-left">
                                                    {defaultcurrency.symble}{" "}
                                                    {(() => {
                                                      // Calculate the PublishedFare
                                                      const publishedFare =
                                                        Number(
                                                          flight.Fare
                                                            ?.PublishedFare || 0
                                                        );

                                                      // Total price calculation
                                                      const totalPrice =
                                                        publishedFare *
                                                        cuntryprice;

                                                      // Format the price to two decimal places
                                                      const priceString =
                                                        totalPrice.toFixed(2);

                                                      // Split into integer and decimal parts
                                                      const [
                                                        integerPart,
                                                        decimalPart,
                                                      ] =
                                                        priceString.split(".");

                                                      // Ensure the decimal part has exactly two digits
                                                      return `${integerPart},${(
                                                        decimalPart || "00"
                                                      ).slice(0, 2)}`;
                                                    })()}
                                                  </th>
                                                </tr>
                                              </thead>

                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    Base Fare
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    {defaultcurrency.symble}{" "}
                                                    {(() => {
                                                      const baseFare = Number(
                                                        flight.Fare?.BaseFare ||
                                                        0
                                                      );
                                                      const totalPrice =
                                                        baseFare * cuntryprice;
                                                      const priceString =
                                                        totalPrice.toFixed(2);

                                                      const [
                                                        integerPart,
                                                        decimalPart,
                                                      ] =
                                                        priceString.split(".");
                                                      return `${integerPart},${(
                                                        decimalPart || "00"
                                                      ).slice(0, 2)}`;
                                                    })()}
                                                  </td>
                                                </tr>
                                                <tr className="">
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    Tax
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    {defaultcurrency.symble}{" "}
                                                    {(() => {
                                                      // Get the Tax and multiply by cuntryprice
                                                      const tax = Number(
                                                        flight.Fare?.Tax || 0
                                                      );

                                                      // Calculate the total tax price
                                                      const totalTaxPrice =
                                                        tax * cuntryprice;

                                                      // Format the price to two decimal places
                                                      const priceString =
                                                        totalTaxPrice.toFixed(
                                                          2
                                                        );

                                                      // Split into integer and decimal parts
                                                      const [
                                                        integerPart,
                                                        decimalPart,
                                                      ] =
                                                        priceString.split(".");

                                                      // Ensure the decimal part has exactly two digits and return the formatted price
                                                      return `${integerPart},${(
                                                        decimalPart || "00"
                                                      ).slice(0, 2)}`;
                                                    })()}
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {activeTab === "3" && (
                                      <div
                                        id="Tab-1-tabpane-3"
                                        className="fade tab-pane"
                                      >
                                        <div className="">
                                          <span className="border w-full p-2 text-sm font-bold ">
                                            Cancellation Policy
                                          </span>
                                          <div className="mt-4">
                                            <table className="min-w-full table-auto border-collapse border border-gray-300">
                                              <thead>
                                                <tr className="">
                                                  <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                                    Time Frame
                                                  </th>
                                                  <th className="border border-gray-300 px-4 text-sm py-2 text-left">
                                                    Airline Fee + Next Gen Fee
                                                    (Per Passenger)
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    0 hours to 4 hours*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    Non Refundable
                                                  </td>
                                                </tr>
                                                <tr className="">
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    4 hours to 4 days*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    ₹ 3,999 + ₹ 300
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    4 days to 365 days*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    ₹ 2,999 + ₹ 300
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {activeTab === "4" && (
                                      <div
                                        id="Tab-1-tabpane-4"
                                        className="fade tab-pane"
                                      >
                                        <div className="">
                                          <span className="border w-full p-2 text-sm font-bold ">
                                            Date Change Policy
                                          </span>
                                          <div className="overflow-x-auto mt-4">
                                            <table className="min-w-full table-auto border-collapse border border-gray-300">
                                              <thead>
                                                <tr className="">
                                                  <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                                    Time Frame
                                                  </th>
                                                  <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                                    Airline Fee + Next Gen Fee
                                                    (Per Passenger)
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    0 hours to 4 hours*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    ADULT :{" "}
                                                    <b>Non Changeable </b>
                                                  </td>
                                                </tr>
                                                <tr className="">
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    4 hours to 4 days*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    ADULT :{" "}
                                                    <b>
                                                      ₹ 2,999 + ₹ 300 + Fare
                                                      difference
                                                    </b>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    4 days to 365 days*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    ADULT :{" "}
                                                    <b>
                                                      ₹ 2,250 + ₹ 300 + Fare
                                                      difference
                                                    </b>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div key={index} className="my-3 border p-2 md:p-5">
                              <>
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                  <div className="flex gap-3 items-center w-full sm:w-auto">
                                    <img
                                      className="w-[40px] md:w-[50px]"
                                      src={
                                        flight.Segments[0][0].Airline
                                          .AirlineName
                                          ? `/images/${flight.Segments[0][0].Airline.AirlineCode}.png`
                                          : "/images/logo-flight.webp"
                                      }
                                      alt={`${flight.Segments[0][0].Airline
                                          .AirlineName || "Default"
                                        } Logo`}
                                    />

                                  

                                        <div className="">
                                        <p className="font-bold text-black ">
                                          {flight.Segments[0][0].Airline.AirlineName}
                                          
                                          {/* { console.log('flight.Airline',flight.Segments[0][0].Airline.AirlineName)} */}
                                        </p>
                                        <p className="text-black text-xs">
                                          {flight.Segments[0][0].Airline.FlightNumber}
                                        </p>
                                      </div>

                                  </div>
                                    


                                  <div className=" w-full flex md:hidden lg:hidden  ">
                                    <div className="text-center w-1/3 sm:w-auto">
                                      <p className="mb-1 text-sm md:text-lg font-semibold">
                                        {flight.Segments[0][0].Origin.DepTime.split(
                                          "T"
                                        )[1].slice(0, 5)}
                                      </p>
                                      <p className="text-black text-xs">
                                        {
                                          flight.Segments[0][0].Origin
                                            .Airport.CityName
                                        }
                                      </p>
                                    </div>

                                    <div className="text-center w-1/3 sm:w-auto">
                                      <p className="text-sm md:text-lg">
                                        {Math.floor(
                                          flight.Segments[0][0].Duration / 60
                                        )}{" "}
                                        h {flight.Segments[0][0].Duration % 60}{" "}
                                        Min
                                      </p>
                                      <div className="relative">
                                        <p
                                          style={{
                                            borderTop:
                                              "3px solid rgb(245, 166, 34)",
                                          }}
                                        >

                                          


                                        </p>
                                      </div>
                                      <p className="text-black text-xs mt-1">
                                     
                                      </p>
                                    </div>

                                    <div className="text-center w-1/3 sm:w-auto">
                                      <p className="mb-1 text-sm md:text-lg font-semibold">
                                        {flight.Segments[0][0].Destination.ArrTime.split(
                                          "T"
                                        )[1].slice(0, 5)}
                                      </p>

                                       <p className="text-black text-xs">
                                        {
                                          flight.Segments[0][0].Destination
                                            .Airport.CityName
                                        }
                                      </p>

                                    </div>
                                  </div>

                                  <div className="text-center w-1/3 sm:w-auto  hidden md:block lg:block">
                                    <p className="mb-1 text-sm md:text-lg font-semibold">
                                      {flight.Segments[0][0].Origin.DepTime.split(
                                        "T"
                                      )[1].slice(0, 5)}
                                    </p>
                                    <p className="text-black text-xs">
                                      {
                                        flight.Segments[0][0].Origin.Airport.CityName
                                      }
                                    </p>

                                  </div>

                                  <div className="text-center w-1/3 sm:w-auto hidden md:block lg:block">
                                    <p className="text-sm md:text-lg">
                                      {Math.floor(
                                        flight.Segments[0][0].Duration / 60
                                      )}{" "}
                                      h {flight.Segments[0][0].Duration % 60}{" "}
                                      Min
                                    </p>
                                    <div className="relative">
                                      <p
                                        style={{
                                          borderTop:
                                            "3px solid rgb(245, 166, 34)",
                                        }}
                                      ></p>
                                    </div>
                                    <p className="text-black text-xs mt-1">
                                      {flight.stop}
                                    </p>
                                  </div>

                                  <div className="text-center w-1/3 sm:w-auto hidden md:block lg:block ">
                                    <p className="mb-1 text-sm md:text-lg font-semibold">
                                      {flight.Segments[0][0]?.Destination?.ArrTime?.split(
                                        "T"
                                      )[1].slice(0, 5)}
                                    </p>
                                    <p className="text-black text-xs">
                                      {
                                        flight.Segments[0][0]?.Destination?.Airport
                                          .CityName
                                      }

                                    </p>
                                     <p className="text-black text-xs mt-1">
                                      {flight.stop}
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-3 w-full justify-between lg:justify-center sm:w-auto">
                                    <div className="text-right ">
                                      <div className="text-black text-lg font-bold whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold">
                                          {defaultcurrency.symble}
                                          {(() => {
                                            const offeredFare =
                                              flight.Fare?.OfferedFare || 0;
                                            const price =
                                              Number(offeredFare) *
                                              Number(cuntryprice);
                                            const priceString =
                                              price.toFixed(2);
                                            const [integerPart, decimalPart] =
                                              priceString.split(".");
                                            return `${integerPart}.${(
                                              decimalPart || "00"
                                            ).slice(0, 2)}`;
                                          })()}
                                        </span>
                                        <p className="text-sm text-gray-700 font-light leading-tight">
                                          Total Price
                                        </p>
                                      </div>
                                    </div>
                                    <button
                                      onClick={() =>
                                        togglePopup("view-price", flight)
                                      }
                                      className="block text-[11.5px] md:text-sm font-semibold md:h-8 text-blue-600 rounded-full p-1 px-2 md:px-4 bg-blue-200 border border-blue-600 relative overflow-hidden"
                                      disabled={isloadingQoute} // Optional: disable button while loading
                                    >
                                      {isloadingQoute ? (
                                        <div className="flex items-center justify-center">
                                          <svg
                                            className="animate-spin h-5 w-5 text-blue-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                          >
                                            <circle
                                              className="opacity-25"
                                              cx="12"
                                              cy="12"
                                              r="10"
                                              stroke="currentColor"
                                              strokeWidth="4"
                                            />
                                            <path
                                              className="opacity-75"
                                              fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                          </svg>
                                        </div>
                                      ) : (
                                        <>
                                          <span className="hidden md:inline">VIEW</span> PRICES
                                        </>
                                      )}
                                    </button>
                                  </div>

                                  <p className="my-4 p-2 text-center bg-yellow-100 w-full">
                                    <span className="text-[9px] md:text-xs">
                                      {flight.offer}
                                    </span>
                                  </p>

                                  <div
                                    className="hidden md:flex justify-between items-center text-sm card-footer-v2 w-full"
                                    onClick={() => toggle(index)}
                                  >
                                    <span className="text-blue-600 flex items-center gap-2">
                                      View Flight Details <FaArrowRight />
                                    </span>
                                  </div>
                                </div>

                                {showDetailsIndex === index && (
                                  <div className="">
                                    <nav className="my-4 flex justify-between m-0 p-0 bg-[#f6f4f4] w-full float-left rounded-[20px]">
                                      <button
                                        onClick={() => setActiveTab("1")}
                                        className={`cursor-pointer float-left p-2 list-none text-black text-sm w-[23%] text-center font-medium ${activeTab == "1"
                                            ? "text-white rounded-full bg-[#2196f3]"
                                            : ""
                                          }`}
                                      >
                                        FLIGHT DETAILS
                                      </button>
                                      <button
                                        onClick={() => setActiveTab("2")}
                                        className={`cursor-pointer float-left p-2 list-none text-black text-sm w-[23%] text-center font-medium ${activeTab == "2"
                                            ? "text-white rounded-full bg-[#2196f3]"
                                            : ""
                                          }`}
                                      >
                                        FARE SUMMARY
                                      </button>
                                      <button
                                        onClick={() => setActiveTab("3")}
                                        className={`cursor-pointer float-left p-2 list-none text-black text-sm w-[23%] text-center font-medium ${activeTab == "3"
                                            ? "text-white rounded-full bg-[#2196f3]"
                                            : ""
                                          }`}
                                      >
                                        CANCELLATION
                                      </button>
                                      <button
                                        onClick={() => setActiveTab("4")}
                                        className={`cursor-pointer float-left p-2 list-none text-black text-sm w-[23%] text-center font-medium ${activeTab == "4"
                                            ? "text-white rounded-full bg-[#2196f3]"
                                            : ""
                                          }`}
                                      >
                                        DATE CHANGE
                                      </button>
                                    </nav>

                                    {activeTab == "1" && (
                                      <div className="">
                                        <div>
                                          <span className="border w-full p-2 text-sm font-bold">
                                            {
                                              flight.Segments[0][0].Origin
                                                .Airport.CityName
                                            }{" "}
                                            to{" "}
                                            {
                                              flight.Segments[0][0].Destination
                                                .Airport.CityName
                                            }{" "}
                                            , 20 Sep
                                          </span>
                                          <div className="">
                                            <div className="flex items-center gap-5 my-4">
                                              <img
                                                src={
                                                  flight.Segments[0][0].Airline
                                                    .AirlineName
                                                    ? `/images/${flight.Segments[0][0].Airline.AirlineCode}.png`
                                                    : "/images/logo-flight.webp"
                                                }
                                                alt=" "
                                                className="w-6 h-6"
                                              />
                                              <span className="">
                                                <strong>
                                                  {
                                                    flight.Segments[0][0]
                                                      .Airline.AirlineName
                                                  }
                                                </strong>{" "}
                                                <span className="text-gray-500">
                                                  {
                                                    flight?.Segments[0][0]
                                                      ?.Airline.FareClass
                                                  }
                                                  |
                                                  {
                                                    flight.Segments[0][0]
                                                      .Airline.FlightNumber
                                                  }
                                                </span>
                                              </span>
                                              <span className="border border-gray-400 text-xs px-2 rounded-full text-gray-400">
                                                Airbus A350
                                              </span>
                                            </div>



                                            <div className="flex gap-10">
                                              <div className="flex items-center justify-between w-[50%]">
                                                <div className="">
                                                  <p className="text-lg font-bold">
                                                    {" "}
                                                    {new Date(
                                                      flight.Segments[0][0].Origin.DepTime
                                                    ).toLocaleTimeString([], {
                                                      hour: "2-digit",
                                                      minute: "2-digit",
                                                      hour12: true,
                                                    })}
                                                  </p>
                                                  <p className="text-sm font-bold mb-2">
                                                    {new Date(
                                                      flight.Segments[0][0].Origin.DepTime
                                                    ).toLocaleTimeString([], {
                                                      year: "numeric",
                                                      month: "long",
                                                      day: "numeric",
                                                    })}
                                                  </p>
                                                  <p className="text-gray-600">
                                                    Terminal  {flight.Segments[0][0].Origin.Airport.Terminal}
                                                  </p>
                                                  <p className="text-sm">
                                                    {flight.Segments[0][0].Origin.Airport.CityName},{flight.Segments[0][0].Origin.Airport.CountryName}
                                                  </p>
                                                </div>
                                                <div
                                                  className=" text-sm flex items-center"
                                                  style={{
                                                    borderBottom:
                                                      "3px solid rgb(245, 166, 34)",
                                                  }}
                                                >
                                                  <p className="text-center text-sm md:text-lg">
                                                    {Math.floor(
                                                      flight.Segments[0][0]
                                                        .Duration / 60
                                                    )}
                                                    .
                                                    <font color="#757575"></font>
                                                    {flight.Segments[0][0]
                                                      .Duration % 60}{" "}
                                                    h
                                                    <font color="#757575">
                                                      {" "}
                                                    </font>
                                                  </p>
                                                </div>

                                                <div className="">
                                                  <p className="text-lg font-bold">
                                                    {
                                                      flight.Segments[0][0]
                                                        .Destination.ArrTime
                                                    }
                                                  </p>
                                                  <p className="text-sm font-bold mb-2">
                                                    {
                                                      flight?.Segments[0][0]
                                                        .Destination.ArrTime
                                                    }
                                                  </p>
                                                  <p className="text-gray-600">
                                                    Terminal {flight.Segments[0][0]?.Destination?.Airport?.Terminal}
                                                  </p>
                                                  <p className="text-sm">
                                                    {flight.Segments[0][0]?.Origin?.Destination?.CityName},{flight.Segments[0][0]?.Origin?.Destination?.CountryName}

                                                  </p>
                                                </div>
                                              </div>

                                              <div className="flex gap-10  w-[45%]">
                                                <p>
                                                  <span className="font-bold text-sm">
                                                    BAGGAGE:
                                                  </span>{" "}
                                                  <br />
                                                  <span className="text-gray-700">
                                                    ADULT
                                                  </span>
                                                </p>
                                                <p>
                                                  <span className="font-bold text-sm">
                                                    CHECK IN
                                                  </span>
                                                  {""}
                                                  <br />
                                                  <span className="text-gray-700">
                                                    {flight.Segments[0][0]
                                                      .Baggage
                                                      ? flight.Segments[0][0]
                                                        .Baggage
                                                      : "Not Allowed"}
                                                  </span>
                                                </p>
                                                <p>
                                                  <span className="font-bold text-sm">
                                                    CABIN
                                                  </span>{" "}
                                                  <br />
                                                  <span className="text-gray-700">
                                                    {" "}
                                                    {
                                                      flight.Segments[0][0]
                                                        .CabinBaggage
                                                    }
                                                  </span>
                                                </p>
                                              </div>
                                            </div>

                                            <div className="flex gap-10 flex-wrap mt-5">
                                              <div className="flex items-center gap-2 mb-2">
                                                <FaSpoon />
                                                <div className="text-sm">
                                                  Complimentary Meals
                                                </div>
                                              </div>
                                              <div className="flex items-center gap-2 mb-2">
                                                <FaPlane />
                                                <div className="text-sm">
                                                  3-3-3 Layout
                                                </div>
                                              </div>
                                              <div className="flex items-center gap-2 mb-2">
                                                <FaWheelchair />
                                                <div className="text-sm">
                                                  Standard Recliner (31''
                                                  Legroom)
                                                </div>
                                              </div>
                                              <div className="flex items-center gap-2 mb-2">
                                                <FaUsb />
                                                <div className="text-sm">
                                                  Power and USB Available
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {activeTab == "2" && (
                                      <div>
                                        <div>
                                          <span className="border w-full p-2 text-sm font-bold">
                                            Fare breakup
                                          </span>
                                          <div className="mt-4">
                                            <table className="min-w-full table-auto border-collapse border border-gray-300">
                                              <thead>
                                                <tr className="">
                                                  <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                                    TOTAL
                                                  </th>
                                                  <th className="border border-gray-300 px-4 text-sm py-2 text-left">
                                                    {defaultcurrency.symble}{" "}
                                                    {(() => {
                                                      const publishedFare =
                                                        Number(
                                                          flight.Fare
                                                            ?.PublishedFare || 0
                                                        );

                                                      const totalPrice =
                                                        publishedFare *
                                                        cuntryprice;

                                                      const priceString =
                                                        totalPrice.toFixed(2);

                                                      const [
                                                        integerPart,
                                                        decimalPart,
                                                      ] =
                                                        priceString.split(".");

                                                      // Ensure the decimal part has exactly two digits and return the formatted price
                                                      return `${integerPart},${(
                                                        decimalPart || "00"
                                                      ).slice(0, 2)}`;
                                                    })()}
                                                  </th>
                                                </tr>
                                              </thead>

                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    Base Fare
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    {defaultcurrency.symble}{" "}
                                                    {(() => {
                                                      const baseFare = Number(
                                                        flight.Fare?.BaseFare ||
                                                        0
                                                      );

                                                      // Calculate the total price
                                                      const totalPrice =
                                                        baseFare * cuntryprice;

                                                      // Format the total price to two decimal places
                                                      const priceString =
                                                        totalPrice.toFixed(2);

                                                      // Split into integer and decimal parts
                                                      const [
                                                        integerPart,
                                                        decimalPart,
                                                      ] =
                                                        priceString.split(".");

                                                      // Ensure the decimal part has exactly two digits and return the formatted price
                                                      return `${integerPart},${(
                                                        decimalPart || "00"
                                                      ).slice(0, 2)}`;
                                                    })()}
                                                  </td>
                                                </tr>
                                                <tr className="">
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    Tax
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    {defaultcurrency.symble}{" "}
                                                    {(() => {
                                                      // Get the Tax and multiply by cuntryprice
                                                      const tax = Number(
                                                        flight.Fare?.Tax || 0
                                                      );

                                                      // Calculate the total tax price
                                                      const totalTaxPrice =
                                                        tax * cuntryprice;

                                                      // Format the price to two decimal places
                                                      const priceString =
                                                        totalTaxPrice.toFixed(
                                                          2
                                                        );

                                                      // Split into integer and decimal parts
                                                      const [
                                                        integerPart,
                                                        decimalPart,
                                                      ] =
                                                        priceString.split(".");

                                                      // Ensure the decimal part has exactly two digits and return the formatted price
                                                      return `${integerPart},${(
                                                        decimalPart || "00"
                                                      ).slice(0, 2)}`;
                                                    })()}
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {activeTab == "3" && (
                                      <div
                                        id="Tab-1-tabpane-3"
                                        className="fade tab-pane"
                                      >
                                        <div className="">
                                          <span className="border w-full p-2 text-sm font-bold ">
                                            Cancellation Policy
                                          </span>
                                          <div className="mt-4">
                                            <table className="min-w-full table-auto border-collapse border border-gray-300">
                                              <thead>
                                                <tr className="">
                                                  <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                                    Time Frame
                                                  </th>
                                                  <th className="border border-gray-300 px-4 text-sm py-2 text-left">
                                                    Airline Fee + Next Gen Fee
                                                    (Per Passenger)
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    0 hours to 4 hours*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    Non Refundable
                                                  </td>
                                                </tr>
                                                <tr className="">
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    4 hours to 4 days*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    ₹ 3,999 + ₹ 300
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    4 days to 365 days*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    ₹ 2,999 + ₹ 300
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {activeTab == "4" && (
                                      <div
                                        id="Tab-1-tabpane-4"
                                        className="fade tab-pane"
                                      >
                                        <div className="">
                                          <span className="border w-full p-2 text-sm font-bold ">
                                            Date Change Policy
                                          </span>
                                          <div className="overflow-x-auto mt-4">
                                            <table className="min-w-full table-auto border-collapse border border-gray-300">
                                              <thead>
                                                <tr className="">
                                                  <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                                    Time Frame
                                                  </th>
                                                  <th className="border border-gray-300 px-4 py-2 text-sm text-left">
                                                    Airline Fee + Next Gen Fee
                                                    (Per Passenger)
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    0 hours to 4 hours*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    ADULT :{" "}
                                                    <b>Non Changeable </b>
                                                  </td>
                                                </tr>
                                                <tr className="">
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    4 hours to 4 days*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    ADULT :{" "}
                                                    <b>
                                                      ₹ 2,999 + ₹ 300 + Fare
                                                      difference
                                                    </b>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    4 days to 365 days*
                                                  </td>
                                                  <td className="border border-gray-300 px-4 py-2 text-sm ">
                                                    ADULT :{" "}
                                                    <b>
                                                      ₹ 2,250 + ₹ 300 + Fare
                                                      difference
                                                    </b>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </>
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                );
              })




            )
            }
          </div>


        </div>
      </div>

      <div className="block md:hidden">
        <div
          className="icon-container fixed bottom-5 right-4 z-[9999] grid"
          onClick={() => togglePopup("flight-filter-popup")}
        >
          <FaFilter className="bg-[#52c3f1] text-white p-1 text-3xl rounded cursor-pointer" />
        </div>

        {activePopup === "flight-filter-popup" && (
          <div className="popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[10000]">
            <div className="popup-content shadow-lg">
              <button
                onClick={() => togglePopup("flight-filter-popup")}
                className="px-4 py-2 bg-blue-500 flex justify-between items-center w-full text-white"
              >
                Filter <FaTimes />
              </button>

              <FlightFliter />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default comp;
