"use client";
import React from "react";
import Image from "next/image";
import {
  FaClock,
  FaLocationCrosshairs,
  FaLocationDot,
  FaTrainSubway,
} from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { LuRefreshCcw } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";

const page = () => {
  const loadLiveStatusDateWise = (day, month, year) => {

    // You can add your logic here to handle the date selection
  };

  const dates = [
    { day: "Thursday", date: "05/09/2024" },
    { day: "Friday", date: "06/09/2024" },
    { day: "Saturday", date: "07/09/2024" },
    { day: "Sunday", date: "08/09/2024" },
    { day: "Monday", date: "09/09/2024" },
  ];
  const handleRefresh = () => {
    location.reload();
  };

  const liveStations = [
    {
      StationName: "New York",
      Icon: FaCheckCircle,
      stnCode: "NYC",
      distance: "100",
      schArrTime: "14:00",
      actArr: "14:10",
      schDepTime: "14:15",
      actDep: "14:20",
      delayDep: "10", // Delay in minutes
      pfNo: "3", // Platform number
      Halt: "5 min", // Halt time
      dayCnt: "1", // Day of the journey
      travelled: "true",
    },
    {
      StationName: "Boston",
      stnCode: "BOS",
      distance: "200",
      schArrTime: "16:00",
      Icon: FaCheckCircle,
      actArr: "16:00",
      schDepTime: "16:10",
      actDep: "16:10",
      delayDep: "0", // No delay
      pfNo: "2",
      Halt: "3 min",
      dayCnt: "1",
      travelled: "true",
    },
    {
      StationName: "Chicago",
      stnCode: "CHI",
      Icon: FaCheckCircle,
      distance: "500",
      schArrTime: "19:00",
      actArr: "19:30",
      schDepTime: "19:40",
      actDep: "19:50",
      delayDep: "20",
      pfNo: "1",
      Halt: "7 min",
      dayCnt: "2",
      travelled: "false",
    },
    {
      StationName: "Chicago",
      stnCode: "CHI",
      Icon: FaCheckCircle,
      distance: "500",
      schArrTime: "19:00",
      actArr: "19:30",
      schDepTime: "19:40",
      actDep: "19:50",
      delayDep: "20",
      pfNo: "1",
      Halt: "7 min",
      dayCnt: "2",
      travelled: "false",
    },
    {
      StationName: "Chicago",
      stnCode: "CHI",
      distance: "500",
      Icon: FaTrainSubway,
      schArrTime: "19:00",
      actArr: "19:30",
      schDepTime: "19:40",
      actDep: "19:50",
      delayDep: "20",
      pfNo: "1",
      Halt: "7 min",
      dayCnt: "2",
      travelled: "false",
    },
  ];

  return (
    <>
      <div className="flex px-20 py-10 gap-5">
        <div className="flex flex-col w-1/4 ">
          <div className="bg-white">
            <div className="secondshadow ">
              <div className="flex items-center p-4 border-b border-dashed">
                <div className="mr-4 bg-[#2196F3] p-2 text-2xl rounded-full">
                  <FaTrainSubway className=" text-white " />
                </div>
                <div>
                  <p className="text-lg font-bold" id="">
                  Next Gen
                  </p>
                  <p className="text-sm font-medium" id="trnName">
                    GOA EXPRESS
                  </p>
                </div>
              </div>

              <div className=" ">
                <div className="border-b border-dashed p-4 flex gap-2 items-center">
                  <FaClock className="text-[#2196f3] border border-blue-600 p-[1px] w-6 h-6 rounded-full bg-white" />
                  <span className="inline-block w-4/5 ml-2">
                    Train Crossed{" "}
                    <span className="font-bold text-sm">Hazrat Nizamuddin</span>{" "}
                    <span className="font-bold text-sm">NZM</span> at 16:45
                  </span>
                </div>

                <div className="p-4">
                  <div className="mt-4 flex justify-between">
                    <div className="text-sm font-bold">Hazrat Nizamuddin</div>

                    <div className="text-sm font-bold">Vasco Da Gama</div>
                  </div>

                  <div className="mt-2 flex justify-between">
                    <p>0 Km</p>
                    <span>2145 Km</span>
                  </div>

                  <div className="flex relative items-center gap-2 mt-5">
                    <FaLocationCrosshairs className="absolute left-0 text-blue-500 w-5 h-5 text-6xl" />

                    <div className="relative mx-auto w-[90%] h-1 bg-gray-200">
                      <div
                        className="absolute top-0 left-0 bg-blue-500 h-full"
                        style={{ width: "67%" }}
                      ></div>
                      <FaTrainSubway
                        className="absolute  bg-blue-500 w-6 h-6  -top-[10px] text-white p-1 rounded-full"
                        style={{ left: "67%" }}
                      ></FaTrainSubway>
                    </div>

                    <FaLocationDot className="absolute right-0 text-blue-500 w-5 h-5" />
                  </div>
                  <p className="font-bold mt-5 text-sm text-center mx-auto">
                    Distance Cover : <span className="font-medium">1429Km</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white mt-4 secondshadow p-4">
              <span className="block text-blue-600  font-semibold text-md">
                * Tentative Platform Disclaimer:
              </span>
              <p className="text-sm">
                The platform number shown is tentative and could change. Please
                check at the station for the exact platform number.
              </p>
            </div>

            <div className="bg-white mt-4 secondshadow p-4">
              <span className="block text-blue-600  font-semibold text-md">
                Disclaimer:
              </span>
              <p className="text-sm">
                This train running information is not affiliated with or
                endorsed by Indian Railways or IRCTC.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-3/4">
          <div className="">
            <div className=" secondshadow ">
              <div className="flex justify-between items-center  px-4 py-3 rounded-t-md bg-[#F2F9FF]">
                <div className="text-sm font-bold ">
                  <span id="">GOA EXPRESS</span> -{" "}
                  <span id="" className="text-gray-600">
                    12780
                  </span>{" "}
                  |<span> 58 Stops</span>
                </div>
                <div className="flex gap-10 items-center">
                  <div className="">
                    <span>
                      <strong>Class: </strong>
                      <span className="text-sm"> 1A:2A:3A:3E:SL</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-xs">Type: </span>
                    <span className="text-xs border border-blue-600 rounded-full px-2 py-1">
                      superfast
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between py-4 px-8">
                <div className="">
                  <div className="">
                    <span className="font-extrabold text-2xl">15:15</span>
                  </div>
                  <div className=""></div>
                  <div className="text-xs">NZM</div>
                  <div className="text-xs">Hazrat Nizamuddin</div>
                </div>
                <div className="text-center">
                  <div className="">39 hrs 45 mints</div>
                  <div className="">
                    <div className=""></div>
                  </div>
                  <div className=" mt-4">
                    <ul className="flex space-x-1">
                      <li className="border border-blue-600 py-1 px-2 text-xs rounded-sm">
                        S
                      </li>
                      <li className="border border-blue-600 py-1 px-2 text-xs rounded-sm">
                        M
                      </li>
                      <li className="border border-blue-600 py-1 px-2 text-xs rounded-sm">
                        T
                      </li>
                      <li className="border border-blue-600 py-1 px-2 text-xs rounded-sm">
                        W
                      </li>
                      <li className="border border-blue-600 py-1 px-2 text-xs rounded-sm">
                        T
                      </li>
                      <li className="border border-blue-600 py-1 px-2 text-xs rounded-sm">
                        F
                      </li>
                      <li className="border border-blue-600 py-1 px-2 text-xs rounded-sm">
                        S
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-end">
                  <div className="">
                    <span className="font-extrabold text-2xl">07:00</span>
                  </div>
                  <div className="">
                    <p className="text-xs ">VSG</p>
                    <p className="text-xs">Vasco Da Gama</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="secondshadow  my-5 pt-4">
              <div className="flex justify-between items-center px-5 pb-4">
                <div className="flex space-x-4">
                  {dates.map((dateItem, index) => {
                    const [day, month, year] = dateItem.date.split("/");
                    return (
                      <div
                        key={index}
                        onClick={() => loadLiveStatusDateWise(day, month, year)}
                        className="cursor-pointer p-2 bg-[#F2F9FF] hover:bg-[#ffffff] rounded-lg shadow"
                      >
                        <div className="text-sm font-semibold">
                          {dateItem.day}
                        </div>
                        <div className="text-xs text-gray-500">
                          {dateItem.date}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="cursor-pointer" onClick={handleRefresh}>
                  <div className="bg-white float-right h-[33px] p-[6px] border border-blue-600 rounded-[8px]  text-blue-600  cursor-pointer flex items-center gap-2">
                    <span>
                      <LuRefreshCcw />
                    </span>
                    Refresh
                  </div>
                </div>
              </div>

              <div className="overflow-hidden overflow-y-auto h-92 custom-scrollbar">
                <table className="min-w-full table-auto border-collapse border-t border-gray-300">
                  <thead className="bg-[#F2F9FF]">
                    <tr className="">
                      <th className="px-6 py-2 text-left text-sm font-semibold">
                        Station
                      </th>
                      <th className="px-6 py-2 text-left text-sm font-semibold">
                        Arrival{" "}
                        <p className="text-xs font-light mt-1">
                          Scheduled/Actual
                        </p>
                      </th>
                      <th className="px-6 py-2 text-left text-sm font-semibold">
                        Departure{" "}
                        <p className="text-xs font-light mt-1">
                          Scheduled/Actual
                        </p>
                      </th>
                      <th className="px-6 py-2 text-left text-sm font-semibold">
                        Delay
                      </th>
                      <th className="px-6 py-2 text-left text-sm font-semibold">
                        PF/Halt
                      </th>
                      <th className="px-6 py-2 text-left text-sm font-semibold">
                        Day
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {liveStations.map((station, index) => (
                      <tr key={station.StationName}>
                        <td className="flex-1 flex items-center gap-3 t px-6 py-4 text-sm  text-black">
                          <div className="relative z-10">
                            <station.Icon className="text-blue-600 text-lg" />
                            <div className="dark absolute left-[9px] top-[4px] w-0 min-h-full -z-10 border border-[#cbcbcb]"></div>
                            <div className="absolute left-[9px] top-[4px] w-0 h-[70px] -z-10  border border-[#2196F3]"></div>
                          </div>
                          <span>
                            <span className="text-blue-600 font-bold">
                              {" "}
                              {station.StationName} ({station.stnCode})
                            </span>
                            <div>{station.distance} kms</div>
                          </span>
                        </td>

                        <td className="flex-1 px-6 py-4 text-sm">
                          <div
                            className={`text-sm ${
                              station.actArr !== station.schArrTime
                                ? "text-red-600"
                                : "text-green-600"
                            }`}
                          >
                            {station.actArr || "No Delay"}
                          </div>
                          <div className="text-xs">
                            {station.schArrTime || "Source"}
                          </div>
                        </td>

                        <td className="flex-1 px-6 py-4 text-sm">
                          <div
                            className={`text-sm ${
                              station.actDep !== station.schDepTime
                                ? "text-red-600"
                                : "text-green-600"
                            }`}
                          >
                            {station.actDep || "15:15"}
                          </div>
                          <div className="text-xs">
                            {station.schDepTime || "15:15"}
                          </div>
                        </td>

                        <td className="flex-1 px-6 py-4 text-sm">
                          {station.delayDep !== "No Delay" &&
                          station.delayDep !== "0" ? (
                            <span className="text-red-600">
                              {station.delayDep}
                            </span>
                          ) : (
                            <span className="text-green-600">On Time</span>
                          )}
                        </td>

                        <td className="flex-1 px-6 py-4 text-sm">
                          <div>{station.pfNo || "-"}</div>
                          <div>{station.Halt || "00:00"}</div>
                        </td>
                        <td className="flex-1 px-6 py-4 text-sm">
                          <span className="text-black">
                            {station.dayCnt || "1"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
