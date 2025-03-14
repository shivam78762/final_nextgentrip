"use client";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  ChakraProvider,
  Box,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md"; // Import the icon
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiFilter2Line } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import { TbRosetteDiscount } from "react-icons/tb";
import Link from "next/link";

const FamousPlacesFilter = ({ selectedRange = [0, 300000], onApply }) => {
    const [priceRange, setPriceRange] = useState(selectedRange);
  
    const handlePriceRangeChange = (values) => {
      setPriceRange(values);
    };
  

    const [moreFilter, setMoreFilter] = useState(false);
   
  

  return (
    <>
      <div className="FilterMainBar bg-white">
        <div className="border filter1Bar rounded grid grid-cols-1 md:grid-cols-2 items-center  lg:grid-cols-6 gap-0 md:gap-4 ">
          <div className="flex flex-col border-r border-gray-300 p-4">
            <h3 className="text-sm font-semibold mb-2">From City</h3>
            <select
              name="city"
              id="city"
              className="border font-bold text-xs border-gray-300 rounded p-2"
            >
              <option value="">Select a City</option>
              <option value="new-delhi">New Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="kolkata">Kolkata</option>
              <option value="chennai">Chennai</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="pune">Pune</option>
              <option value="jaipur">Jaipur</option>
              <option value="ahmedabad">Ahmedabad</option>
              <option value="surat">Surat</option>
              <option value="lucknow">Lucknow</option>
              <option value="kanpur">Kanpur</option>
              <option value="nagpur">Nagpur</option>
              <option value="indore">Indore</option>
              <option value="bhopal">Bhopal</option>
              <option value="patna">Patna</option>
              <option value="ludhiana">Ludhiana</option>
              <option value="agra">Agra</option>
              <option value="varanasi">Varanasi</option>
              <option value="meerut">Meerut</option>
              <option value="visakhapatnam">Visakhapatnam</option>
              <option value="coimbatore">Coimbatore</option>
              <option value="madurai">Madurai</option>
            </select>
          </div>
          <div className="flex flex-col border-r border-gray-300 p-4">
            <h3 className="text-sm font-semibold mb-2">Sorted By</h3>
            <select
              name="price"
              id="price"
              className="border font-bold text-xs border-gray-300 rounded p-2"
            >
              <option value="">Select</option>
              <option value="Low-to-High">Low to High</option>
              <option value="High-to-Low">High to Low</option>
            </select>
          </div>
          <div className="flex priceSection flex-col border-r border-gray-300 p-4">
            <h3 className="text-sm font-semibold mb-2">Price</h3>
            <ChakraProvider>
              <div className="relative inline-block mx-2">
                <span className="font-semibold">{`₹${priceRange[0]} - ₹${priceRange[1]}`}</span>
                <div className="">
                  <label className="block text-md font-bold text-gray-700"></label>
                  <RangeSlider
                    min={0}
                    max={300000}
                    step={1000}
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    mt={2}
                    aria-label={["min", "max"]}
                  >
                    <RangeSliderTrack bg="gray.200">
                      <RangeSliderFilledTrack bg="black" />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0}>
                      <Box color="black" as={MdGraphicEq} />
                    </RangeSliderThumb>
                    <RangeSliderThumb boxSize={6} index={1}>
                      <Box color="black" as={MdGraphicEq} />
                    </RangeSliderThumb>
                  </RangeSlider>
                </div>
              </div>
            </ChakraProvider>
          </div>
          <div className="flex durationSection flex-col border-r border-gray-300 p-4">
            <h3 className="text-sm font-semibold mb-2">Duration</h3>
            <ChakraProvider>
              <div className="relative inline-block mx-2">
                {/* <span className="font-semibold">{`₹${priceRange[0]} - ₹${priceRange[1]}`}</span> */}
                <div className="">
                  <label className="block text-md font-bold text-gray-700"></label>
                  <RangeSlider
                    min={0}
                    max={300000}
                    step={1000}
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    mt={2}
                    aria-label={["min", "max"]}
                  >
                    <RangeSliderTrack bg="gray.200">
                      <RangeSliderFilledTrack bg="black" />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0}>
                      <Box color="black" as={MdGraphicEq} />
                    </RangeSliderThumb>
                    <RangeSliderThumb boxSize={6} index={1}>
                      <Box color="black" as={MdGraphicEq} />
                    </RangeSliderThumb>
                  </RangeSlider>
                </div>
              </div>
            </ChakraProvider>{" "}
          </div>
          <div className="flex flex-col border-r border-gray-300 py-4">
            <div className="flex justify-between mb-2 px-3">
              <h3 className="text-sm font-semibold">Package Type</h3>
              <span className="text-xs text-blue-700 cursor-pointer font-bold">
                Clear
              </span>
            </div>
            <div className="flex gap-2 text-xs">
              <button className="border text-nowrap hover:border-sky-800 hover:bg-sky-100 px-3 py-1 rounded-full">
                With Flights
              </button>
              <button className="border text-nowrap hover:border-sky-800 hover:bg-sky-100 px-3 py-1 rounded-full">
                Without Flights
              </button>
            </div>
          </div>
          <div className="flex flex-col font-bold text-blue-700 p-4 ">
            <div
              onClick={() => setMoreFilter(!moreFilter)}
              className="cursor-pointer"
            >
              <RiFilter2Line className="text-2xl mb-2" />
              <h3 className="text-sm capitalize">More Filter</h3>
            </div>
          </div>
        </div>
        {moreFilter && (
          <div className=" items-show-white-filter-true border filter1Bar rounded mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 ">
            <div className="Theme flex flex-col gap-4  border-gray-300 p-4">
              <h3 className="font-bold text-md">Theme</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full p-3 hover:bg-gray-200 border"></div>
                  <h4>Winters</h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full p-3 hover:bg-gray-200 border"></div>
                  <h4>Winters</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FamousPlacesFilter;
