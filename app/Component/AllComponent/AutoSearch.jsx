// import Link from 'next/link';
"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import axios from "axios";
import { toast, Flip } from "react-toastify";

// import { usePathname } from "next/navigation";
import { apilink } from "../common";

const AutoSearch = ({ value, onSelect, Click, fromCity }) => {
  const state = useSelector((state) => state.Allairport);
  // const state2 = useSelector((state) => state.topPortsSlice);
  // const allcityes=useSelector((state)=>state.citysearch)
  // const pathname=usePathname()

  const defaultAirports = [
    {
      
        iata: "DEL",
        municipality: "New Delhi",
        name: "Indira Gandhi International Airport",
        country: "India" ,
     
    },
    {
  
        iata: "BLR",
        municipality: "Bangalore",
        name: "Kempegowda International Airport",
        country:  "India" 
    },
    {
      iata: "IXC",
      municipality: "Chandigarh",
      name: "Shaheed Bhagat Singh International Airport",
      country: "India"
  },
  
    {
      
        iata: "BKK",
        municipality: "Bangkok",
        name: "Suvarnabhumi Airport",
        country: "Thailand" 
    },
    {
      
        iata: "SIN",
        municipality: "Singapore",
        name: "Changi Airport",
        country:  "Singapore" 
    },
    {
    
        iata: "DXB",
        municipality: "Dubai",
        name: "Dubai International Airport",
        country:  "UAE" 
    },
  ];

  const dispatch = useDispatch();
  const [allport, setAllport] = useState();
  const [inputValue, setInputValue] = useState("");

  const [debouncedValue, setDebouncedValue] = useState("");
  const [airports, setAirports] = useState(defaultAirports);


  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSelect = (city) => {
  


    if (fromCity && fromCity == city) {
      toast.info("You choese same airport", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    } else {
      onSelect(city);
    }

    Click(false);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  useEffect(() => {
    const fetchAirports = async () => {

      
      if (debouncedValue.length >= 2) {
        setIsLoading(true);
        setIsError(false);    
     
        try {
          const res = await axios.get(
            `${apilink}/ports/all/${debouncedValue}`
          );
          

         
          setAirports(res.data); // Assuming API returns "features" array
        } catch (error) {
          console.error("Error fetching airports:", error);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      } else {
        // Show default airports if search string is less than 3 chars
        setAirports(defaultAirports);
      }
    };

    fetchAirports();
  }, [debouncedValue]);

 


  const handleInputChange = (e) => {
  
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setAllport(state);


  }, [state]);

  return (
    <div className="autosearch fromsectr" id="fromautoFill_in">
      <div className="searcityCol flex gap-3 bg-white p-3 items-center " >
        <img src="/images/icon-search.svg" alt="Search" />
        <input
          id="a_FromSector_show"
          type="text"
          className="srctinput autoFlll w-full text-black text-sm"
          placeholder={value}
          autoComplete="off"
          value={inputValue}
          autoFocus
          onChange={handleInputChange}

        />
      </div>

      <div
        id="fromautoFill"
        className="text-black overflow-hidden h-72 overflow-y-auto"
        onMouseLeave={()=>Click(false)}
      >
        <div className="clr"></div>
        <div className="bg-[#ECF5FE] py-1 px-2 border-t border-[#ECECEC] text-sm font-semibold">
          Top Cities
        </div>

        <ul>
          {isLoading &&  [...Array(4)].map((_, index) => (
              <li
                key={index}
                className="m-auto my-2 p-3  animate-pulse flex items-center gap-2"
              >
                <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </li>
            ))}
          {isError && <p>Error fetching data.</p>}

          {!isLoading && !isError && (
            <>
              {airports.length > 0 ? (
                <ul>
                  {airports.map((airport) => {
                    if (!airport?.iata) {
                      return null;
                    }
                    return (
                      <li
                        key={airport.iata} // Using airport.iata
                        onClick={() => handleSelect(airport)}
                        className="border-b border-gray-200 py-3 px-2 hover:bg-gray-100"
                      >
                        <div className="flex px-2">
                        <img
                            src="/images/planeicon.svg"
                            alt="Flight"
                            className="mr-2"
                          />
                          <div>
                            <p>
                              <span className="font-semibold text-base">
                                {`${airport.municipality} (${airport.iata})`}{" "}
                              </span>
                            </p>
                            <p className="text-xs font-medium mt-1 text-gray-600">
                              {airport.name}
                            </p>
                          </div>
                          <div className="flex items-end font-medium text-xs text-gray-600 ml-auto">
                            {airport.country.name}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                debouncedValue.length >= 3 && <p>No results found.</p>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AutoSearch;
