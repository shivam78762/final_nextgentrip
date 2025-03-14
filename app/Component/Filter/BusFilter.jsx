"use client";
import React, { useState } from "react";
import { TbAirConditioning, TbAirConditioningDisabled } from "react-icons/tb";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { MdEventSeat } from "react-icons/md";

const BusFilter = () => {
    const [openDropdowns, setOpenDropdowns] = useState({
        kanpur1: true,
        kanpur2: false,
        kanpur3: false,
      });
    
      const toggleDropdown = (id) => {
        setOpenDropdowns((prev) => ({
          ...prev,
          [id]: !prev[id],
        }));
      };

      
  return (
    <>
    
    <div className="  bg-white myshadow px-5  py-3 ">
          <div className="filter-container">
            <div className="flex justify-between items-center container header mb-3">
              <h3 className="font-black text-lg">Filters</h3>
              <p className="text-sm font-black flex items-center justify-center text-gray-400 cursor-not-allowed">
                CLEAR ALL
              </p>
            </div>
            <div>
              <ul>
                <li className="flex flex-col mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-700 font-semibold">AC</div>
                  </div>
                  <div className="bus-types-filter-section">
                    <div className="flex">
                      <div className="border w-full rounded-md p-3 mr-3 text-center">
                        <span className="text-sm text-gray-600 flex items-center gap-3">
                          <TbAirConditioning className="text-2xl" /> AC
                        </span>
                      </div>
                      <div className="border w-full rounded-md p-3 text-center">
                        <span className="text-sm text-gray-600 flex items-center gap-3">
                          <TbAirConditioningDisabled className="text-2xl" /> Non
                          AC
                        </span>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="flex flex-col mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-700 cursor-default font-semibold">
                      Seat type
                    </div>
                  </div>
                  <div className="bus-types-filter-section">
                    <div className="flex">
                      <div className="border w-full rounded-md p-3 mr-3 text-center">
                        <span className="text-sm text-gray-600 flex items-center gap-3">
                          <GiNightSleep className="text-2xl font-semibold" />{" "}
                          Sleeper
                        </span>
                      </div>
                      <div className="border w-full rounded-md p-3 text-center">
                        <span className="text-sm text-gray-600 flex items-center gap-3">
                          <MdEventSeat className="text-2xl" /> Seater
                        </span>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Single Seater/Sleeper Filter */}
                <li className="flex flex-col mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-700 cursor-default font-semibold">
                      Single Seater/Sleeper
                    </div>
                  </div>
                  <ul className="dropdown-wrap">
                    <li>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="checkbox" className="" />
                          <div className="flex flex-col ml-3">
                            <span className="font-bold text-base">Single</span>
                            <div className="text-sm mt-1">
                              Separate single window seats
                            </div>
                          </div>
                        </div>
                        <div className="text-sm">(40)</div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="flex flex-col my-4">
                  <div
                    className="flex items-center justify-between mb-2 cursor-pointer"
                    onClick={() => toggleDropdown("kanpur1")}
                  >
                    <div className="">Drop point - Kanpur</div>
                    <div className="text-sm font-black flex items-center justify-center text-gray-400">
                      {openDropdowns["kanpur1"] ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </div>
                  </div>
                  {openDropdowns["kanpur1"] && (
                    <>
                      <div className="search-container relative mb-3">
                        <input
                          type="text"
                          className="w-full p-2 border "
                          placeholder="Search"
                          id="Drop point"
                          maxLength="50"
                        />
                        <FaSearch className="absolute top-3 text-gray-400 right-2"/>
                      </div>
                      <ul className="dropdown-wrap">
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                          <input type="checkbox" className="" />
                            <span className="ml-3">Faizalganj</span>
                          </div>
                          <div className="text-sm">(47)</div>
                        </li>
                      </ul>
                      <div className="mt-3">
                        <span className="text-blue-500 text-sm font-bold cursor-pointer">
                          Show All(3)
                        </span>
                      </div>
                    </>
                  )}
                </li>
                <li className="flex flex-col mb-4">
                  <div
                    className="flex items-center justify-between mb-2 cursor-pointer"
                    onClick={() => toggleDropdown("kanpur2")}
                  >
                    <div className="">Drop point - Kanpur</div>
                    <div className="text-sm font-black flex items-center justify-center text-gray-400">
                      {openDropdowns["kanpur2"] ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </div>
                  </div>
                  {openDropdowns["kanpur2"] && (
                    <>
                      <div className="search-container relative mb-3">
                        <input
                          type="text"
                          className="w-full p-2 border "
                          placeholder="Search"
                          id="Drop point"
                          maxLength="50"
                        />
                        <FaSearch className="absolute top-3 text-gray-400 right-2"/>
                      </div>
                      <ul className="dropdown-wrap">
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                          <input type="checkbox" className="" />
                            <span className="ml-3">Faizalganj</span>
                          </div>
                          <div className="text-sm">(47)</div>
                        </li>
                      </ul>
                      <div className="mt-3">
                        <span className="text-blue-500 text-sm font-bold cursor-pointer">
                          Show All(3)
                        </span>
                      </div>
                    </>
                  )}
                </li>
                <li className="flex flex-col mb-4">
                  <div
                    className="flex items-center justify-between mb-2 cursor-pointer"
                    onClick={() => toggleDropdown("kanpur3")}
                  >
                    <div className="">Drop point - Kanpur</div>
                    <div className="text-sm font-black flex items-center justify-center text-gray-400">
                      {openDropdowns["kanpur3"] ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </div>
                  </div>
                  {openDropdowns["kanpur3"] && (
                    <>
                      <div className="search-container relative mb-3">
                        <input
                          type="text"
                          className="w-full p-2 border "
                          placeholder="Search"
                          id="Drop point"
                          maxLength="50"
                        />
                        <FaSearch className="absolute top-3 text-gray-400 right-2"/>
                      </div>
                      <ul className="dropdown-wrap">
                        <li className="flex items-center justify-between">
                          <div className="flex items-center">
                          <input type="checkbox" className="" />
                            <span className="ml-3">Faizalganj</span>
                          </div>
                          <div className="text-sm">(47)</div>
                        </li>
                      </ul>
                      <div className="mt-3">
                        <span className="text-blue-500 text-sm font-bold cursor-pointer">
                          Show All(3)
                        </span>
                      </div>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default BusFilter