"use client";
import React, { useState } from "react";
import Header from "../Component/AllComponent/Header";
import CustomSlider from "../Component/AllComponent/Slider";
import FAQSection from "../Component/AllComponent/FAQ";
import Link from "next/link";
import MobileHeader from "../Component/AllComponent/MobileHeader";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("flight");
  const [city, setCity] = useState("DEL-Delhi, India");
  const [selectedMonth, setSelectedMonth] = useState(0);

  // Get the current month index (0-based)
  const currentMonthIndex = new Date().getMonth();

  // Function to generate random dates within a given month
  const getRandomDate = (monthIndex) => {
    const currentYear = new Date().getFullYear(); // Get the current year
    const currentDate = new Date(); // Get the current date and time
    const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate(); // Get number of days in the month
  
    // Generate a random day within the month
    let randomDay = Math.floor(Math.random() * daysInMonth) + 1;
    let date = new Date(currentYear, monthIndex, randomDay);
  
    // If the generated date is in the past, adjust it to be in the future
    if (date < currentDate) {
      // Add the difference in days to ensure the date is in the future
      const differenceInDays = Math.ceil((currentDate - date) / (1000 * 60 * 60 * 24));
      randomDay += differenceInDays;
      date = new Date(currentYear, monthIndex, randomDay);
    }
  
    return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };
  // Function to generate flight deals for a given month
  const generateDealsForMonth = (monthIndex) => {
    const destinations = ["Mumbai", "Bangalore", "GOA", "Pune", "Ahmedabad", "Lucknow"];
    const airlines = ["Indigo", "Air India", "SpiceJet", "Vistara"];

    return destinations.map((destination) => {
      const date = getRandomDate(monthIndex);
      const returnDate = getRandomDate(monthIndex); // Random return date
      const price = Math.floor(Math.random() * (10000 - 4000 + 1)) + 4000; // Random price between 4000 and 10000
        

      // Generate flight link
      const flightLink = `flightto=BOM&from=DEL&date=${date}T00:00:00&prfdate=${date}T00:00:00&JourneyType=1&adultcount=1&childCount=0&infantCount=0&selectedClass=1&returndate=${returnDate}T00:00:00&PreferredAirlines=null`;

      return {
        destination,
        date: new Date(date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        airline: airlines[Math.floor(Math.random() * airlines.length)],
        price,
        flightLink,
      };
    });
  };

  // Generate deals for the current month and the next two months
  const deals = Array.from({ length: 3 }, (_, i) =>
    generateDealsForMonth((currentMonthIndex + i) % 12)
  );

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleMonthChange = (monthOffset) => {
    setSelectedMonth(monthOffset);
  };

  const handleFlightSearch = (deal) => {
    // Handle flight search logic here
  };

  const renderDeals = (monthIndex) => {
    return deals[monthIndex]?.map((deal, index) => (
      <li
        key={index}
        className="flex items-center justify-between p-4 border-b last:border-b-0"
      >
        <div className="flex-1">
          <p className="text-black text-sm lg:text-lg font-bold">
            To {deal.destination}
          </p>
          <p className="text-gray-500 text-sm lg:text-lg">
            {deal.date} | {deal.airline}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-gray-700 text-xs lg:text-lg ">
            One way as low as{" "}
            <strong className="text-orange-600 text-center font-bold">{`₹${deal.price}`}</strong>
          </p>
        </div>
        <div>
          <Link
            href={`/${deal.flightLink}`}
            onClick={() => handleFlightSearch(deal)}
            className="bg-blue-500 text-white font-semibold text-xs lg:text-lg py-2 px-2 lg:px-4 rounded-full hover:bg-blue-600"
          >
            Book now
          </Link>
        </div>
      </li>
    ));
  };

  return (
    <>
      <Header />
      <CustomSlider />

      <div className="container mx-auto">
        <h2 className="text-lg lg:text-3xl mb-1 lg:mb-0 font-bold text-black text-center py-0 lg:py-5">
          Best Deals on Flight Tickets
        </h2>

        <div className="">
          <div className="flex justify-between bg-gray-100 px-5 lg:px-40 py-5">
            <div className="">
              <div className="text-gray-700 mb-2">Departing from</div>
              <div className="relative w-32 lg:w-52">
                <select
                  className="block w-full bg-white border text-xs lg:text-base border-gray-300 rounded-lg py-2 px-3 text-gray-700"
                  value={city}
                  onChange={handleCityChange}
                >
                  <option value="">Select</option>
                  <option value="DEL-Delhi, India">Delhi (DEL)</option>
                  <option value="BOM-Mumbai, India">Mumbai (BOM)</option>
                  <option value="BLR-Bengaluru, India">Bengaluru (BLR)</option>
                  <option value="HYD-Hyderabad, India">Hyderabad (HYD)</option>
                  <option value="CCU-Kolkata, India">Kolkata (CCU)</option>
                  <option value="MAA-Chennai, India">Chennai (MAA)</option>
                  <option value="GOI-Goa, India">GOA (GOI)</option>
                  <option value="PNQ-Pune, India">Pune (PNQ)</option>
                  <option value="AMD-Ahmedabad, India">Ahmedabad (AMD)</option>
                  <option value="GAU-Guwahati, India">Guwahati (GAU)</option>
                </select>
              </div>
            </div>

            <div className="">
              <div className="text-gray-700 mb-2">Travel Period</div>
              <div className="flex border rounded text-sm lg:text-base border-black">
                {[0, 1, 2].map((monthOffset) => {
                  const monthIndex = (currentMonthIndex + monthOffset) % 12;
                  const monthName = new Date(2024, monthIndex).toLocaleString("default", {
                    month: "short",
                  });
                  return (
                    <button
                      key={monthOffset}
                      onClick={() => handleMonthChange(monthOffset)}
                      className={`py-1 px-4 border-r border-black ${
                        selectedMonth === monthOffset
                          ? "bg-black text-white rounded-none"
                          : ""
                      }`}
                    >
                      {monthName}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <ul className="px-0 list-none lg:px-20">{renderDeals(selectedMonth)}</ul>
        </div>
      </div>

      <div className="px-5 lg:px-20 py-5 lg:py-10 container mx-auto">
        <h6 className="text-lg lg:text-xl font-semibold">{t("memorable")}</h6>
        <p className="mt-5 text-justify">{t("memorable_1")}</p>
        <p className="mt-5 text-justify">{t("memorable_2")}</p>
      </div>

      <FAQSection />
    </>
  );
};

export default Page;