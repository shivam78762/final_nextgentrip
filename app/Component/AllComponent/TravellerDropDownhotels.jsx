"use client";
import React ,{useState} from "react";
import { FaUsers } from "react-icons/fa";

const AutoSearch = ({ adultCount,setAdultCount,childCount,setchildcount,numberOfRoom,setNumberOfRoom,setIsVisible}) => {

    const handlecountnegative=()=>{
        if(adultCount > 1){
            setAdultCount((prev)=>prev-1)
        }
        else{}
    }
   const handelChildNegative =()=>{
    if(childCount > 1){
        setchildcount((prev)=>prev-1)
    }
    else{}
}
const handelRoomNegative=()=>{
    if(numberOfRoom > 1){
        setNumberOfRoom((prev)=>prev-1)
    }
    else{}
}

  return (
    <div className="autosearch traveller fromsectr" id="fromautoFill_in">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex flex-col space-y-4">
          {/* adultCount */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black font-semibold">Adults</p>
              <p className="text-xs mt-1 text-gray-600">(12+ Years)</p>
            </div>
            <div className="flex items-center " >
              <span
                className=" text-gray-600 cursor-pointer px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                onClick={handlecountnegative}
              >
                -
              </span>
              <span
                className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-gray-300 "
             >{adultCount}</span> 
              <span
                className=" text-gray-600 cursor-pointer border border-l-0 px-2 py-1  rounded-tr rounded-br"
                onClick={() => setAdultCount((prev)=>prev+1)}
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
                className="text-gray-600 px-2 cursor-pointer border border-r-0 py-1 rounded-tl rounded-bl"
                onClick={handelChildNegative}
              >
                -
              </span>
              <span
                className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-gray-300 ">
            {childCount}
            </span>
               <span
                className="text-gray-600 cursor-pointer border border-l-0 px-2 py-1  rounded-tr rounded-br"
                onClick={() => setchildcount((prev)=>prev+1)}
              >
                +
              </span>
            </div>
          </div>

          {/* Infants */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black font-semibold">Rooms</p>
              <p className="text-xs mt-1 text-gray-600"></p>
            </div>
            <div className="flex items-center">
               <span
                className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                onClick={handelRoomNegative}
              >
                -
              </span>
              <span
                className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-gray-300 ">
               {numberOfRoom}
                </span>
            <span
                className="text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                onClick={() => setNumberOfRoom((prev)=>prev+1)}
              >
                +
              </span>
            </div>
          </div>

       
         

       
          <button
            id="traveLer"
            className="bg-white border border-[#2196f3] text-[#2196f3] hover:bg-[#2196f3] hover:text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setIsVisible('')}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoSearch;
