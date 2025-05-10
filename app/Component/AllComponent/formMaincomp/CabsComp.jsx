"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getCabCityApi } from "../../Store/slices/cabSearchSlice"; // Update to cab-specific slice
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaCalendarWeek, FaChevronDown, FaCalendarAlt, FaUserLarge } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import TypeWriterHeaderEffect from "../TypeWriterHeaderEffect";
import MiniNav from "../MiniNav";

const CabComp = () => {
  const [selected, setSelected] = useState("");
  const defaultStore = JSON.parse(localStorage.getItem("cabSearch")) || {};
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // State for cab-specific fields
  const [pickup, setPickup] = useState(
    defaultStore.pickup || {
      CityId: 1234,
      CityName: "Hyderabad",
      PickUpCode: "HYD",
      PickUpPointCode: "HYD-AIRPORT",
    }
  );
  const [dropoff, setDropoff] = useState(
    defaultStore.dropoff || {
      CityId: 5678,
      CityName: "Bengaluru",
      DropOffCode: "BLR",
      DropOffPointCode: "BLR-AIRPORT",
    }
  );
  const [transferDate, setTransferDate] = useState(
    (defaultStore.transferDate && new Date(defaultStore.transferDate)) || new Date(Date.now())
  );
  const [transferTime, setTransferTime] = useState(defaultStore.transferTime || "10:00");
  const [adultCount, setAdultCount] = useState(defaultStore.adultCount || 1);
  const [preferredLanguage, setPreferredLanguage] = useState(defaultStore.preferredLanguage || "EN");
  const [alternateLanguage, setAlternateLanguage] = useState(defaultStore.alternateLanguage || "ES");
  const [preferredCurrency, setPreferredCurrency] = useState(defaultStore.preferredCurrency || "USD");
  const [countryCode, setCountryCode] = useState(defaultStore.countryCode || "IN");

  const localTimeZone = getLocalTimeZone();
  const currentDate = today(localTimeZone);
  const router = useRouter();
  const dispatch = useDispatch();

  // Fetch cab cities on mount
  useEffect(() => {
    setLoading(true);
    dispatch(getCabCityApi())
      .unwrap()
      .catch((error) => {
        console.error("Failed to fetch cab cities:", error);
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  // // Handle date selection
  const handleRangeChange = (newRange) => {
    const date = new Date(newRange.year, newRange.month - 1, newRange.day + 1);
    setTransferDate(date);
    setSelected("");
  };

  // Handle search
  const handleSearch = () => {
    // Basic validation
    if (pickup.CityId === dropoff.CityId) {
      alert("Pickup and dropoff locations cannot be the same.");
      return;
    }
    if (new Date(transferDate) < new Date()) {
      alert("Transfer date must be in the future.");
      return;
    }

    const searchData = {
      pickup,
      dropoff,
      transferDate,
      transferTime,
      adultCount,
      preferredLanguage,
      alternateLanguage,
      preferredCurrency,
      countryCode,
    };
    localStorage.setItem("cabSearch", JSON.stringify(searchData));
    const newDate = transferDate.toISOString().split("T")[0];
    router.push(
    `/cabs?TransferDate=${newDate}&TransferTime=${transferTime}&PickUpCode=${pickup.PickUpCode}&PickUpPointCode=${pickup.PickUpPointCode}&DropOffCode=${dropoff.DropOffCode}&DropOffPointCode=${dropoff.DropOffPointCode}&CityId=${pickup.CityId}&CountryCode=${countryCode}&AdultCount=${adultCount}&PreferredLanguage=${preferredLanguage}&AlternateLanguage=${alternateLanguage}&PreferredCurrency=${preferredCurrency}&IsBaseCurrencyRequired=false`
    );
  };

  // Handle pickup and dropoff selection
  const handlePickup = (data) => {
    setPickup(data);
    setSelected("dropoff");
  };

  const handleDropoff = (data) => {
    setDropoff(data);
    setSelected("date");
  };

  return (
    <div className="header relative md:px-5 lg:px-12 xl:px-24 pt-10 md:pt-14">
      <div className="bg-[#002043] h-[12rem] absolute inset-0 -z-10"></div>
      <TypeWriterHeaderEffect />
      <div className="flex flex-col bg-white lg:block rounded-lg text-white">
        <div className="bg-gray-200 rounded-sm shadow">
          <Navbar />
        </div>
        <div className="px-4 border-b-2 shadow-sm space-y-1 py-3">
          <div className="tabs FromDateDeapt grid lg:grid-cols-7 gap-4">
      
            <div className="relative">
              <div
                onClick={() => setSelected("pickup")}
                className="cursor-pointer relative rounded gap-3 h-full flex items-center py-1 lg:py-0 px-2 w-full truncate border border-slate-400 text-black"
              >
                <IoLocationSharp className="text-xl" />
                <div className="flex flex-col">
                  <span className="text-[22px] md:text-2xl text-black font-bold">{pickup.CityName}</span>
                  <span className="text-sm text-gray-500">{pickup.PickUpPointCode}</span>
                </div>
              </div>
              {selected === "pickup" && (
                <SearchComponents type={selected} handelcity={handlePickup} />
              )}
            </div>


            <div className="relative">
              <div
                onClick={() => setSelected("dropoff")}
                className="cursor-pointer relative rounded gap-3 h-full flex items-center py-1 lg:py-0 px-2 w-full truncate border border-slate-400 text-black"
              >
                <IoLocationSharp className="text-xl" />
                <div className="flex flex-col">
                  <span className="text-[22px] md:text-2xl text-black font-bold">{dropoff.CityName}</span>
                  <span className="text-sm text-gray-500">{dropoff.DropOffPointCode}</span>
                </div>
              </div>
             {selected === "dropoff" && (
                <SearchComponents type={selected} handelcity={handleDropoff} />
              )} 
            </div>

   
            <div className="relative">
              <div
                onClick={() => setSelected("date")}
                className="flex items-center cursor-pointer gap-2 px-3 py-1 border-2 text-black border-slate-200 rounded-md"
              >
                <FaCalendarAlt className="" />
                <div className="text-slate-400">
                  <div className="flex items-baseline text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">{transferDate.getDate()}</span>
                    <span className="text-sm font-semibold">
                      {transferDate.toLocaleString("en-US", { month: "short" })}'
                    </span>
                    <span className="text-sm font-semibold"> {transferDate.getFullYear()}</span>
                  </div>
                </div>
              </div>
              {selected === "date" && (
                <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                  <Calendar
                    aria-label="Select a date"
                    value={""}
                    onChange={handleRangeChange}
                    minValue={currentDate}
                  />
                </div>
              )}
            </div>

  
            <div className="relative">
              <input
                type="time"
                value={transferTime}
                onChange={(e) => setTransferTime(e.target.value)}
                className="w-full px-3 py-1 border-2 border-slate-200 rounded-md text-black"
              />
            </div>


            <div className="relative">
              <div
                onClick={() => setIsVisible(!isVisible)}
                className="flex items-center cursor-pointer gap-2 px-3 py-1 border-2 text-black border-slate-200 rounded-md"
              >
                
                <div className="text-slate-400">
                  <div className="flex items-baseline text-black">
                    <span className="text-xl py-1 pr-1 text-black font-bold">{adultCount}</span>
                    <span className="text-sm font-semibold">Traveller(s)</span>
                  </div>
                </div>
              </div>
              {isVisible && (
                <div className="absolute top-[80%] min-w-full min-h-[5rem] left-1 md:-left-10 z-10">
                  <div className="shadow-2xl rounded-md bg-white mt-[10%] flex flex-col gap-4 p-4">
                    <div className="flex gap-3 justify-between">
                      <p className="text-nowrap">Adult Count</p>
                      <div className="flex items-center gap-3">
                        <button
                          className="px-2 border"
                          onClick={() => adultCount > 1 && setAdultCount(adultCount - 1)}
                        >
                          -
                        </button>
                        <p className="px-2 border">{adultCount}</p>
                        <button
                          className="px-2 border"
                          onClick={() => setAdultCount(adultCount + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            <div className="relative">
              <select
                value={preferredLanguage}
                onChange={(e) => setPreferredLanguage(e.target.value)}
                className="w-full px-3 py-1 border-2 border-slate-200 rounded-md text-black"
              >
                <option value="EN">English</option>
                <option value="ES">Spanish</option>
                <option value="FR">French</option>
              </select>
            </div>


            <div className="flex justify-center items-center">
              <button
               
                className="bg-[#0A5EB0] w-full md:w-fit py-2 px-3 font-semibold text-lg rounded-md text-white"
              >
                Search Cab
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchComponents = ({ type, handelcity }) => {
  const [searchParam, setSearchParam] = useState("");
  const state = useSelector((state) => state.cabSearchSlice); // Update to cab-specific slice
  const [loading, setLoading] = useState(true);
  const [cabData, setCabData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setCabData(state?.info?.CabCities || []);
    setLoading(false);
  }, [state]);

  useEffect(() => {
    const newArray = state?.info?.CabCities?.filter((item) =>
      item.CityName.toLowerCase().includes(searchParam.toLowerCase())
    );
    setCabData(newArray || []);
  }, [searchParam, state]);

  return (
    <div className="absolute top-full bg-white w-full z-30 shadow-md rounded-md mt-1">
      <input
        type="text"
        value={searchParam}
        className="w-full text-black px-3 py-2 border-b outline-none"
        placeholder={`Search ${type === "pickup" ? "pickup" : "dropoff"} city...`}
        onChange={(e) => setSearchParam(e.target.value)}
      />
      <div className="max-h-60 overflow-y-scroll custom-scroll">
        {loading ? (
          [...Array(5)].map((_, i) => (
            <div key={i} className="p-2 border-b animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))
        ) : (
          cabData?.map((item, idx) => (
            <p
              key={idx}
              className="border-b px-3 py-2 cursor-pointer hover:bg-gray-100 transition-all"
              onClick={() => {
                handelcity({
                  CityId: item.CityId,
                  CityName: item.CityName,
                  [type === "pickup" ? "PickUpCode" : "DropOffCode"]: item.Code,
                  [type === "pickup" ? "PickUpPointCode" : "DropOffPointCode"]: item.PointCode,
                });
                setSearchParam("");
              }}
            >
              {item.CityName} ({item.PointCode})
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default CabComp;