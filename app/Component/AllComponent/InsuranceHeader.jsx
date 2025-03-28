"use client";

import Navbar from "./Navbar";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function InsuranceHeader() {
  const navigation = useRouter();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const planCategories = [
    { id: 1, title: "DomesticTravelPolicy" },
    { id: 2, title: "OverseasTravelInsurance" },
    { id: 3, title: "StudentOverseasInsurance" },
    { id: 4, title: "SchengenOverseasInsurance" },
    { id: 5, title: "InboundTravelPolicy" },
    { id: 6, title: "CancellationInsurance" },
  ];

  const planCoverage = [
    { id: 1, name: "US" },
    { id: 2, name: "Non_US" },
    { id: 3, name: "WorldWide" },
    { id: 4, name: "India" },
    { id: 5, name: "Asia" },
    { id: 6, name: "Canada" },
    { id: 7, name: "Australia" },
    { id: 8, name: "SchenegenCountries" },
  ];

  const [isOpen, setIsOpen] = useState(null);
  const [alldata, setallData] = useState({
    Plan_Category: { title: planCategories[0].title, num: planCategories[0].id },
    Plan_Coverage: { name: planCoverage[0].name, num: planCoverage[0].id },
    Plan_Type: "1",
    TravelStartDate: "",
    TravelEndDate: "",
    NoOfPax: 1,
    PaxAge: [],
  });

  const DropDownHandler = (auth) => {
    setIsOpen((prevVal) => (prevVal === auth ? null : auth));
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleDOBChange = (index, dob) => {
    const updatedAges = [...alldata.PaxAge];
    updatedAges[index] = dob; // Store the DOB string; calculate age when needed
    setallData({ ...alldata, PaxAge: updatedAges });
  };

  const handlePaxChange = (increment) => {
    const newNoOfPax = Math.max(1, alldata.NoOfPax + (increment ? 1 : -1));
    const updatedPaxAge = increment
      ? [...alldata.PaxAge, ""] // Add a new empty DOB field
      : alldata.PaxAge.slice(0, -1); // Remove the last DOB field
    setallData({
      ...alldata,
      NoOfPax: newNoOfPax,
      PaxAge: updatedPaxAge,
    });
  };


  const handleAgeChange = (index, age) => {
    const updatedAges = [...alldata.PaxAge];
    updatedAges[index] = age;
    setallData({ ...alldata, PaxAge: updatedAges });
  };



  const handelIncSearch = () => {
    navigation.push(
      `/Insurance/plancategory=${alldata.Plan_Category.num}&plancoverage=${alldata.Plan_Coverage.num}&plantype=${alldata.Plan_Type}&travelstartdate=${encodeURIComponent(alldata.TravelStartDate)}&travelenddate=${encodeURIComponent(alldata.TravelEndDate)}&noofpax=${alldata.NoOfPax}&paxage=${encodeURIComponent(alldata.PaxAge.join(","))}`
    );
  };

  return (
    <>
      <div className="relative px-5 md:px-16 xl:px-32 pt-10">
        <div className="bg-gradient-to-r from-[#002043] to-[#004080] h-[6rem] absolute inset-0 -z-10" />
        <div className="InsuranceHeader shadow-2xl bg-red-500 rounded-md">
          <div className="bg-gray-200 border-b rounded-sm shadow">
            <Navbar />
          </div>

          <div className="bg-white flex flex-wrap lg:flex-nowrap items-center gap-5 md:gap-8 py-5 px-4 md:px-4">
            <div className="flex flex-col w-full justify-between lg:w-fit md:flex-row gap-4 md:gap-4">

              <div className="w-full">
                <p>Travel Start Date</p>
                <input
                  type="date"
                  onChange={(e) =>
                    setallData({ ...alldata, TravelStartDate: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>


              <div className="w-full">
                <p>Travel End Date</p>
                <input
                  type="date"
                  onChange={(e) =>
                    setallData({ ...alldata, TravelEndDate: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>



            <div className="w-full lg:w-auto relative">
              <label className="text-sm font-medium text-gray-700">Number of Passengers</label>
              <div
                className="flex items-start gap-2 px-3 py-2 border-2 text-black border-gray-200 rounded-lg mt-1 bg-white hover:border-blue-500 transition cursor-pointer"
               onMouseEnter={() => setIsVisible(true)}
              //  onMouseLeave={() => setIsVisible(false)}

              >
                {/* <FaUserLarge className="text-lg mt-1 text-gray-600" /> */}
                <div className="text-gray-400">
                  <h5 className="font-bold text-lg text-black">{alldata.NoOfPax}</h5>
                  <p className="text-gray-400 text-xs">Traveller(s)</p>
                </div>
                <button
           
                  className="ml-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Edit
                </button>
                {isVisible ?(
                  <div className="absolute top-[100%] left-0 min-w-full z-[99] mt-2">
                    <div className="shadow-2xl rounded-lg bg-white flex flex-col gap-4 p-4 border border-gray-200">
                      <div className="flex gap-3 justify-between items-center">
                        <p className="text-sm font-medium text-gray-700">Adult Count</p>
                        <div className="flex items-center gap-3">
                          <button
                            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
                            onClick={() => handlePaxChange(false)}
                            disabled={alldata.NoOfPax <= 1}
                          >
                            -
                          </button>
                          <p className="px-4 py-1 border border-gray-300 rounded text-gray-800 font-semibold">
                            {alldata.NoOfPax}
                          </p>
                          <button
                            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
                            onClick={() => handlePaxChange(true)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                  
                      <div className="mt-2 space-y-2">
                        {Array.from({ length: alldata.NoOfPax }).map((_, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <span className="text-sm text-gray-600">Passenger {index + 1} Age:</span>
                            <input
                              type="number"
                              min="1"
                              max="100"
                              value={alldata.PaxAge[index] || ""}
                              onChange={(e) => handleAgeChange(index, e.target.value)}
                              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : '' }

              </div>
            </div>








            <li className="flex flex-col items-start md:items-center gap-3">
              <h4 className="text-sm md:text-base font-semibold">Plan Type</h4>
              <div className="flex flex-row items-start md:items-center gap-2">
                <div>
                  <input
                    id="SingleType"
                    type="radio"
                    name="planType"
                    className="mr-2"
                    value={"1"}
                    checked={alldata.Plan_Type === "1"}
                    onChange={(e) =>
                      setallData({ ...alldata, Plan_Type: e.target.value })
                    }
                  />
                  <label htmlFor="SingleType" className="text-sm md:text-base">
                    Single Type = 1
                  </label>
                </div>
                <div>
                  <input
                    id="AMT2"
                    type="radio"
                    value={"2"}
                    name="planType"
                    className="mr-2"
                    checked={alldata.Plan_Type === "2"}
                    onChange={(e) =>
                      setallData({ ...alldata, Plan_Type: e.target.value })
                    }
                  />
                  <label htmlFor="AMT2" className="text-sm md:text-base">
                    AMT = 2
                  </label>
                </div>
              </div>
            </li>

            <button
              className="bg-[#0c3a48] text-white p-3 px-4 rounded-md"
              onClick={handelIncSearch}
            >
              Search Insurance
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
