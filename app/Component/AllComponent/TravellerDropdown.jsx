"use client";
import React ,{useState} from "react";
import { FaUsers } from "react-icons/fa";

const AutoSearch = ({ value,setAdultCount,adultCount,childCount,setChildCount,infantCount,setInfantCount,isGroup
 , setIsGroup,selectedClass,setSelectedClass,handleClick
 }) => {


  const handleChange = (setter) => (change) => {
    setter((prev) => Math.max(0, prev + change));
  };

  const handleGroupChange = () => setIsGroup((prev) => !prev);

  const handleClassChange = (cls) => () => setSelectedClass(cls);

  return (
    <div className="autosearch traveller fromsectr" id="fromautoFill_in">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex flex-col space-y-4">
          {/* Adults */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black font-semibold">Adults</p>
              <p className="text-xs mt-1 text-gray-600">(12+ Years)</p>
            </div>
            <div className="flex items-center">
              <span
                className=" text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                onClick={() => handleChange(setAdultCount)(-1)}
              >
                -
              </span>
              <span
                className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-gray-300 "
             >{adultCount}</span> 
              <span
                className=" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                onClick={() => handleChange(setAdultCount)(1)}
              >
                +
              </span>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black font-semibold">Children</p>
              <p className="text-xs mt-1 text-gray-600">(2-12 Years)</p>
            </div>
            <div className="flex items-center ">
              <span
                className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                onClick={() => handleChange(setChildCount)(-1)}
              >
                -
              </span>
              <span
                className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-gray-300 ">
            {childCount}
            </span>
               <span
                className="text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                onClick={() => handleChange(setChildCount)(1)}
              >
                +
              </span>
            </div>
          </div>

          {/* Infants */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black font-semibold">Infant</p>
              <p className="text-xs mt-1 text-gray-600">(0-2 Years)</p>
            </div>
            <div className="flex items-center">
               <span
                className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                onClick={() => handleChange(setInfantCount)(-1)}
              >
                -
              </span>
              <span
                className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-gray-300 ">
               {infantCount}
                </span>
            <span
                className="text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                onClick={() => handleChange(setInfantCount)(1)}
              >
                +
              </span>
            </div>
          </div>

          {/* Group Booking */}
          <label className="flex items-center gap-2 p-2 rounded bg-[#ECF5FE] ">
          <input
              type="checkbox"
              className="form-checkbox"
              checked={isGroup}
              onChange={handleGroupChange}
            />  <span className="text-gray-800 text-sm ">More than 9 Travellers </span>
           <FaUsers className="text-black ml-3 text-xl"/>
          </label>

          {/* Class Selection */}
          <div className="space-y-1 text-black" >
          <label className="flex items-center gap-2">
              <input
                type="radio"
                name="optClass"
                value="All"
                checked={selectedClass === 1}
                onChange={handleClassChange(1)}
                className="form-radio"
              />
              <span>All</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="optClass"
                value="Economy"
                checked={selectedClass === 2}
                onChange={handleClassChange(2)}
                className="form-radio"
              />
              <span>Economy</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="optClass"
                value="Premium Economy"
                checked={selectedClass === 3}
                onChange={handleClassChange(3)}
                className="form-radio"
              />
              <span>Premium Economy</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="optClass"
                value="Business"
                checked={selectedClass === 4}
                onChange={handleClassChange(4)}
                className="form-radio"
              />
              <span>Business</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="optClass"
                value="PremiumBusiness"
                checked={selectedClass === 5}
                onChange={handleClassChange(5)}
                className="form-radio"
              />
              <span>PremiumBusiness</span>
            </label>
            <label className="flex items-center gap-2 m-0 p-0">
              <input
                type="radio"
                name="optClass"
                value="First Class"
                checked={selectedClass === 6}
                onChange={handleClassChange(6)}
                className="form-radio"
              />
              <span>First Class</span>
            </label>
          </div>

          {/* Done Button */}
          <button
            id="traveLer"
            className="bg-white border border-[#2196f3] text-[#2196f3] hover:bg-[#2196f3] hover:text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => handleClick('')}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoSearch;
