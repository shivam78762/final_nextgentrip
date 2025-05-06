"use client";

import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function InsuranceHeader() {
  const navigation = useRouter();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const planCategories = [
    { id: 1, title: "Domestic Travel Policy" },
    { id: 2, title: "Overseas Travel Insurance" },
    { id: 3, title: "Student Overseas Insurance" },
    { id: 4, title: "Schengen Overseas Insurance" },
    { id: 5, title: "Inbound Travel Policy" },
    { id: 6, title: "Cancellation Insurance" },
  ];

  const planCoverage = [
    { id: 1, name: "US" },
    { id: 2, name: "Non US" },
    { id: 3, name: "World Wide" },
    { id: 4, name: "India" },
    { id: 5, name: "Asia" },
    { id: 6, name: "Canada" },
    { id: 7, name: "Australia" },
  ];

  const planTypes = [
    { id: "1", name: "Single Trip" },
    { id: "2", name: "Annual Multi-Trip" },
  ];

  const [isOpen, setIsOpen] = useState(null);
  const [alldata, setAllData] = useState({
    Plan_Category: planCategories[0],
    Plan_Coverage: planCoverage[0],
    Plan_Type: planTypes[0].id,
    TravelStartDate: "",
    TravelEndDate: "",
    NoOfPax: 1,
    PaxAge: [],
  });

  const DropDownHandler = (auth) => {
    setIsOpen((prevVal) => (prevVal === auth ? null : auth));
  };

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("insuranceData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setAllData({
        ...parsedData,
        Plan_Category: planCategories.find(cat => cat.id === parsedData.Plan_Category.id) || planCategories[0],
        Plan_Coverage: planCoverage.find(cov => cov.id === parsedData.Plan_Coverage.id) || planCoverage[0],
        Plan_Type: parsedData.Plan_Type || planTypes[0].id,
      });
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("insuranceData", JSON.stringify(alldata));
  }, [alldata]);

  const handlePaxChange = (increment) => {
    const newNoOfPax = Math.max(1, alldata.NoOfPax + (increment ? 1 : -1));
    const updatedPaxAge = increment
      ? [...alldata.PaxAge, ""]
      : alldata.PaxAge.slice(0, -1);
    setAllData({
      ...alldata,
      NoOfPax: newNoOfPax,
      PaxAge: updatedPaxAge,
    });
  };

  const handleAgeChange = (index, age) => {
    const updatedAges = [...alldata.PaxAge];
    updatedAges[index] = age;
    setAllData({ ...alldata, PaxAge: updatedAges });
  };

  const handelIncSearch = () => {
    setIsLoading(true); // Show loader
    setTimeout(() => {  // Simulate async operation
      navigation.push(
        `/Insurance/plancategory=${alldata.Plan_Category.id}&plancoverage=${alldata.Plan_Coverage.id}&plantype=${alldata.Plan_Type}&travelstartdate=${encodeURIComponent(alldata.TravelStartDate)}&travelenddate=${encodeURIComponent(alldata.TravelEndDate)}&noofpax=${alldata.NoOfPax}&paxage=${encodeURIComponent(alldata.PaxAge.join(","))}`
      );
      setIsLoading(false); // Hide loader after navigation
    }, 1000); // Adjust delay as needed
  };

  return (
    <>
      <div className="relative px-5 md:px-16 xl:px-32 pt-10">
        <div className="bg-gradient-to-r from-[#002043] to-[#004080] h-[6rem] absolute inset-0 -z-10" />
        <div className="InsuranceHeader shadow-2xl bg-white rounded-md">
          <div className="bg-gray-200 border-b rounded-sm shadow">
            <Navbar />
          </div>

          <div className="bg-white flex flex-wrap lg:flex-nowrap items-center gap-5 md:gap-8 py-5 px-4 md:px-4">
            <div className="flex flex-col w-full justify-between lg:w-fit md:flex-row gap-4 md:gap-4">
              <div className="w-full">
                <p>Travel Start Date</p>
                <input
                  type="date"
                  value={alldata.TravelStartDate}
                  onChange={(e) =>
                    setAllData({ ...alldata, TravelStartDate: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="w-full">
                <p>Travel End Date</p>
                <input
                  type="date"
                  value={alldata.TravelEndDate}
                  onChange={(e) =>
                    setAllData({ ...alldata, TravelEndDate: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="w-full lg:w-auto relative">
              <label className="text-sm font-medium text-gray-700">No. of Passengers</label>
              <div
                className="flex items-start gap-2 p-2 border-2 text-black border-gray-200 rounded-lg mt-1 bg-white hover:border-blue-500 transition cursor-pointer"
                onMouseEnter={() => setIsVisible(true)}
              >
                <div className="text-gray-400">
                  <h5 className="font-bold text-lg text-black">{alldata.NoOfPax}</h5>
                  <p className="text-gray-400 text-xs">Traveller(s)</p>
                </div>
                <button className="ml-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Edit
                </button>
                {isVisible && (
                  <div
                    onMouseLeave={() => setIsVisible(false)}
                    className="absolute top-[100%] left-0 min-w-full z-[99] mt-2"
                  >
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
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Plan Category</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={alldata.Plan_Category.id}
                onChange={(e) =>
                  setAllData({
                    ...alldata,
                    Plan_Category: planCategories.find((cat) => cat.id == e.target.value),
                  })
                }
              >
                {planCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Plan Coverage</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={alldata.Plan_Coverage.id}
                onChange={(e) =>
                  setAllData({
                    ...alldata,
                    Plan_Coverage: planCoverage.find((cov) => cov.id == e.target.value),
                  })
                }
              >
                {planCoverage.map((coverage) => (
                  <option key={coverage.id} value={coverage.id}>
                    {coverage.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Plan Type</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={alldata.Plan_Type}
                onChange={(e) => setAllData({ ...alldata, Plan_Type: e.target.value })}
              >
                {planTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="bg-[#0c3a48] mt-5 z-30 float-end text-white p-3 px-4 rounded-md relative"
              onClick={handelIncSearch}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
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
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                    ></path>
                  </svg>
                  Loading...
                </div>
              ) : (
                "Search"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}