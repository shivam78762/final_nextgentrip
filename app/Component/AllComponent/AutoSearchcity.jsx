// import Link from 'next/link';
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { FaLocationDot } from "react-icons/fa6";


import { getAllcityes } from "../Store/slices/citysearchSlice";


const AutoSearch = ({ value, onSelect, visible }) => {
  const addCitdef = {
    info: [
      {
        "Code": "144306",
        "Name": "Mumbai,   Maharashtra"
      },
      {
        "Code": "138673",
        "Name": "Shimla,   Himachal Pradesh"
      },
      {
        "Code": "111124",
        "Name": "Bangalore,   Karnataka"
      }, {
        "Code": "127352",
        "Name": "Majorda Beach,   Goa"
      },
      {
        "Code": "128914",
        "Name": "Mobor Beach,   Goa"
      },
      {
        "Code": "129778",
        "Name": "Nagoa,   Goa"
      },
      {
        "Code": "130443",
        "Name": "New Delhi,   DELHI"
      },
      {
        "Code": "147501",
        "Name": "Rewari,   Delhi National Territory"
      },
      {
        "Code": "100804",
        "Name": "Ajmer,   Rajasthan"
      },
      {
        "Code": "109093",
        "Name": "Alwar,   Rajasthan"
      },
      {
        "Code": "111142",
        "Name": "Barmer,   Rajasthan"
      },
      {
        "Code": "110564",
        "Name": "Behror,   Rajasthan"
      },
      {
        "Code": "111484",
        "Name": "Bharatpur,   Rajasthan"
      },
      {
        "Code": "144228",
        "Name": "Bhiwadi,   Rajasthan"
      },
      {
        "Code": "111499",
        "Name": "Bijaipur,   Rajasthan"
      },
      {
        "Code": "144247",
        "Name": "Bikaner,   Rajasthan"
      }, {
        "Code": "134001",
        "Name": "Pushkar,   Rajasthan"
      },
      {
        "Code": "134213",
        "Name": "Ramathra Fort,   Rajasthan"
      },
      {
        "Code": "133676",
        "Name": "Ranakpur,   Rajasthan"
      },
      {
        "Code": "136093",
        "Name": "Sardargarh,   Rajasthan"
      },
      {
        "Code": "137380",
        "Name": "Shahpura,   Rajasthan"
      },
      {
        "Code": "137404",
        "Name": "Siana,   Rajasthan"
      },
      {
        "Code": "136312",
        "Name": "Sikar,   Rajasthan"
      },
      {
        "Code": "140098",
        "Name": "Uchiyarda,   Rajasthan"
      },
      {
        "Code": "138127",
        "Name": "Solan,   Himachal Pradesh"
      },
      {
        "Code": "141097",
        "Name": "Una,   Himachal Pradesh"
      }

    ],
  };

  const [cities, setAllCities] = useState(addCitdef);
  const allCities = useSelector((state) => state.citysearch);
  const [inputValue, setInputValue] = useState("");
  const debounceTimeoutRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allCities && allCities.info) {
      setAllCities({ info: allCities.info });
    }
  }, [allCities]);

  const handleInputChange = (e) => {
    setInputValue(e);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      dispatch(getAllcityes(e));
    }, 400);
  };

  useEffect(() => {
    dispatch(getAllcityes());
  }, []);

  useEffect(() => {
    setAllCities(allCities);
  }, [allCities]);

  return (
    <div className="autosearch fromsectr" id="fromautoFill_in">
      <div className="searcityCol flex gap-3 bg-white p-3 items-center">
        <img src="/images/icon-search.svg" alt="Search" />
        <input
          id="a_FromSector_show"
          type="text"
          className="srctinput autoFlll w-full text-black text-sm"
          placeholder={value}
          autoComplete="off"
          value={inputValue}
          autoFocus
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>

      <div
        id="fromautoFill"
        className="text-black overflow-hidden max-h-72 overflow-y-auto"
        onMouseLeave={() => visible("")}
      >
        <div className="clr"></div>
        <div className="bg-[#ECF5FE] py-1 px-2 border-t border-[#ECECEC] text-sm font-semibold">
          Top Cities
        </div>

        <ul className="bg-white shadow-md mt-2">

          {inputValue.length > 0 && allCities?.isLoading ? (
            [...Array(4)].map((_, index) => (
              <li
                key={index}
                className="m-auto my-2 p-3  animate-pulse flex items-center gap-2"
              >
                <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </li>
            ))
          ) : (
            <>
             

              {(inputValue.length > 0 && cities?.info?.length > 0
                ? cities.info
                : addCitdef.info
              ).map((item) => (
                <li
                  key={item.Code}
                  className="m-auto my-1 px-4 py-2 border-b last:border-none hover:bg-blue-100 cursor-pointer duration-150 flex items-center gap-2 transition-all"
                  onClick={() => onSelect(item)}
                >
                  <FaLocationDot/>
                  <span className="text-black font-medium">{item.Name}</span>
                </li>
              ))}
            </>
          )}
        </ul>

      </div>
    </div>
  );
};




export default AutoSearch;
