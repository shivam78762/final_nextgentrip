"use client";
import React, { useState } from "react";

const page = () => {
  const [activeTabFirst, setActiveTabFirst] = useState("airasia1"); // Default active tab for first section
  const [activeTabSecond, setActiveTabSecond] = useState("airasia1"); // Default active tab for second section

  const handleTabChangeFirst = (tabId) => {
    setActiveTabFirst(tabId);
  };

  const handleTabChangeSecond = (tabId) => {
    setActiveTabSecond(tabId);
  };

  const tabData = {
    airasia1: {
      title: "Check Flight Status",
      content: (
        <>
          <p className="text-sm mb-4">
            <strong>Please visit: </strong>
            <a
              href="https://www.airasia.com/flightstatus/en/gb"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.airasia.com/flightstatus
            </a>
          </p>
          <ol className="list-disc pl-5 space-y-2">
            <li>
              Input the carrier code and flight number, Or Search by Route
            </li>
            <li>Click on Find Flights</li>
          </ol>
          <p className="text-sm mt-4">
            <strong>Please Note: </strong>Flight Status can be checked for
            flights on the previous day, same day, and next day.
          </p>
        </>
      ),
    },
    airasia2: {
      title: "Web Check-in",
      content: (
        <>
          <p className="text-sm mb-4">
            <strong>Please visit: </strong>
            <a
              href="https://www.airasia.com/check-in/"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.airasia.com/check-in
            </a>
          </p>
          <ol className="list-disc pl-5 space-y-2">
            <li>
              Input the Departure City, PNR, and Last Name as per the booking
            </li>
            <li>Select the passenger and add Nationality</li>
            <li>Tick to complete the Covid-19 and other self-declarations</li>
            <li>Select add-ons (Seats, Baggage, etc.) and continue</li>
          </ol>
          <p className="text-sm mt-4">
            The AirAsia boarding pass will be generated which is required to
            access the terminal building.
          </p>
        </>
      ),
    },
    airasia3: {
      title: "Update Contact Details",
      content: (
        <>
          <p className="text-sm mb-4">
            <strong>Please visit: </strong>
            <a
              href="https://www.airasia.com/member/search"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.airasia.com/member/search
            </a>
          </p>
          <ol className="list-disc pl-5 space-y-2">
            <li>Input the Departure City, PNR, Last Name & Click on Search</li>
            <li>Click on Manage Booking, Guest and Contact details</li>
            <li>Scroll and update Contact info</li>
          </ol>
          <p className="text-sm mt-4">
            <strong>Please Note: </strong>It is mandatory to provide a guest
            contact number and email ID in the booking.
          </p>
        </>
      ),
    },
  };

  const tabDataSecond = {
    airasia1: {
      title: "Check Flight Status",
      content: (
        <>
          <p className="text-sm mb-4">
            <strong>Please visit: </strong>
            <a
              href="https://www.goindigo.in/check-flight-status.html"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.goindigo.in/check-flight-status
            </a>
          </p>

          <ol className="list-disc pl-5 space-y-2">
            <li>
              Input the carrier code and flight number, Or Search by Route
            </li>
            <li>Click on Find Flights</li>
          </ol>
          <p className="text-sm mt-4">
            <strong>Please Note: </strong>Flight Status can be checked for
            flights on the previous day, same day, and next day.
          </p>
        </>
      ),
    },
    airasia2: {
      title: "Web Check-in",
      content: (
        <>
          <p className="text-sm mb-4">
            <strong>Please visit: </strong>
            <a
              href="https://www.airasia.com/check-in/"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.airasia.com/check-in
            </a>
          </p>
          <ol className="list-disc pl-5 space-y-2">
            <li>
              Input the Departure City, PNR, and Last Name as per the booking
            </li>
            <li>Select the passenger and add Nationality</li>
            <li>Tick to complete the Covid-19 and other self-declarations</li>
            <li>Select add-ons (Seats, Baggage, etc.) and continue</li>
          </ol>
          <p className="text-sm mt-4">
            The AirAsia boarding pass will be generated which is required to
            access the terminal building.
          </p>
        </>
      ),
    },
    airasia3: {
      title: "Update Contact Details",
      content: (
        <>
          <p className="text-sm mb-4">
            <strong>Please visit: </strong>
            <a
              href="https://www.airasia.com/member/search"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.airasia.com/member/search
            </a>
          </p>
          <ol className="list-disc pl-5 space-y-2">
            <li>Input the PNR, Email/Last Name & Click on Update Contact</li>
          </ol>
          <p className="text-sm mt-4">
            <strong>Please Note: </strong>It is mandatory to provide a guest
            contact number and email ID in the booking.
          </p>
        </>
      ),
    },
  };

  return (
    <>
      <div className='HeroImage h-40 bg-[url("/images/airplane-flying-colorful.webp")] bg-no-repeat bg-cover bg-center flex flex-col justify-center gap-5'>
        <div className="px-5 sm:px-8 md:px-12 lg:px-20 py-8 text-left space-y-8">
          <h3 className="text-sm md:text-3xl lg:text-4xl font-bold text-white">
            Airlines Web Check-in
          </h3>
        </div>
      </div>
      <div className="px-0 lg:px-20 py-10">
        <p className="font-bold bg-[#fff3cd] px-3 py-2 rounded">
          Important Information:
          <span className="font-normal text-sm">
            &nbsp; Airlines may change their rules without notice, at their
            discretion, please refer to airline policies for the most recent
            update. For any amendments and cancellations, you will be charged as
            per the latest airline policy applicable.
          </span>
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-start p-4 mt-3 gap-5">
          <div className="flex-1 lg:flex lg:flex-col border p-4">
            <div className="flex-shrink-0  lg:mb-0 w-full h-28">
              <img
                src="/images/air-asia.webp"
                width="90"
                alt="AirAsia"
                className="mx-auto mb-0 md:mb-4 "
              />
            </div>
            <div className="flex gap-2 sm:gap-4 mb-4 flex-wrap justify-center lg:justify-start">
              {Object.keys(tabData).map((tabId) => (
                <button
                  key={tabId}
                  className={`py-2 px-4 text-nowrap text-xs md:text-base rounded ${
                    activeTabFirst === tabId
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleTabChangeFirst(tabId)}
                >
                  {tabData[tabId].title}
                </button>
              ))}
            </div>

            <div className="space-y-4">{tabData[activeTabFirst]?.content}</div>
          </div>

      
          <div className="flex-1 lg:flex lg:flex-col border p-4">
            <div className="flex-shrink-0  lg:mb-0 w-full h-28">
              <img
                src="/images/indigo-logo.webp"
                alt="AirAsia"
                 className="mx-auto mb-0 md:mb-4 "
              />
            </div>
            <div className="flex gap-2 sm:gap-4 mb-4 flex-wrap justify-center lg:justify-start">
              {Object.keys(tabDataSecond).map((tabId) => (
                <button
                  key={tabId}
                  className={`py-2 px-4 text-nowrap text-xs md:text-base rounded ${
                    activeTabSecond === tabId
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleTabChangeSecond(tabId)}
                >
                  {tabDataSecond[tabId].title}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {tabDataSecond[activeTabSecond]?.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
