"use client";
import Link from "next/link";
import React, { useState } from "react";
import Subscribe from "./AllComponent/Subscribe";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const [activeTab, setActiveTab] = useState(1);
  const tabsContent = {
    bestCheapFlight: [
      { name: "Ryanair", link: "https://www.ryanair.com" },
      { name: "easyJet", link: "https://www.easyjet.com" },
      { name: "Southwest Airlines", link: "https://www.southwest.com" },
      { name: "AirAsia", link: "https://www.airasia.com" },
      { name: "JetBlue Airways", link: "https://www.jetblue.com" },
      { name: "Spirit Airlines", link: "https://www.spirit.com" },
      { name: "IndiGo", link: "https://www.goindigo.in" },
      { name: "Wizz Air", link: "https://www.wizzair.com" },
      { name: "Norwegian Air Shuttle", link: "https://www.norwegian.com" },
      { name: "Frontier Airlines", link: "https://www.flyfrontier.com" },
      { name: "Scoot", link: "https://www.flyscoot.com" },
      { name: "Vueling", link: "https://www.vueling.com" },
      { name: "Allegiant Air", link: "https://www.allegiantair.com" },
      { name: "Tigerair", link: "https://www.tigerair.com" },
      { name: "Peach Aviation", link: "https://www.flypeach.com" },
      { name: "VivaAerobus", link: "https://www.vivaaerobus.com" },
      { name: "Flynas", link: "https://www.flynas.com" },
      { name: "Azul Brazilian Airlines", link: "https://www.voeazul.com.br" },
      { name: "Cebu Pacific", link: "https://www.cebupacificair.com" },
      { name: "Gol Linhas Aéreas", link: "https://www.voegol.com.br" },
      { name: "Air Arabia", link: "https://www.airarabia.com" },
      { name: "Jeju Air", link: "https://www.jejuair.net" },
      { name: "Flydubai", link: "https://www.flydubai.com" },
      { name: "Blue Air", link: "https://www.flyblueair.com" },
      { name: "HK Express", link: "https://www.hkexpress.com" },
      { name: "Sun Country Airlines", link: "https://www.suncountry.com" },
      { name: "Transavia", link: "https://www.transavia.com" },
      { name: "AirBaltic", link: "https://www.airbaltic.com" },
      { name: "Eurowings", link: "https://www.eurowings.com" },
      { name: "Volotea", link: "https://www.volotea.com" },
    ],
    FavouriteAirlineAndAirports: [
      { type: "Airline", name: "Ryanair", link: "https://www.ryanair.com" },
      { type: "Airline", name: "easyJet", link: "https://www.easyjet.com" },
      {
        type: "Airline",
        name: "Southwest Airlines",
        link: "https://www.southwest.com",
      },
      { type: "Airline", name: "AirAsia", link: "https://www.airasia.com" },
      {
        type: "Airline",
        name: "JetBlue Airways",
        link: "https://www.jetblue.com",
      },
      {
        type: "Airline",
        name: "Spirit Airlines",
        link: "https://www.spirit.com",
      },
      { type: "Airline", name: "IndiGo", link: "https://www.goindigo.in" },
      { type: "Airline", name: "Wizz Air", link: "https://www.wizzair.com" },
      {
        type: "Airline",
        name: "Norwegian Air Shuttle",
        link: "https://www.norwegian.com",
      },
      {
        type: "Airline",
        name: "Frontier Airlines",
        link: "https://www.flyfrontier.com",
      },
      {
        type: "Airport",
        name: "Heathrow Airport",
        link: "https://www.heathrow.com",
      },
      {
        type: "Airport",
        name: "Changi Airport",
        link: "https://www.changiairport.com",
      },
      {
        type: "Airport",
        name: "Los Angeles International Airport (LAX)",
        link: "https://www.flylax.com",
      },
      {
        type: "Airport",
        name: "Dubai International Airport (DXB)",
        link: "https://www.dubaiairports.ae",
      },
      {
        type: "Airport",
        name: "Tokyo Narita Airport",
        link: "https://www.narita-airport.jp",
      },
      { type: "Airline", name: "Scoot", link: "https://www.flyscoot.com" },
      { type: "Airline", name: "Vueling", link: "https://www.vueling.com" },
      {
        type: "Airport",
        name: "Singapore Changi Airport",
        link: "https://www.changiairport.com",
      },
      {
        type: "Airline",
        name: "Allegiant Air",
        link: "https://www.allegiantair.com",
      },
      { type: "Airline", name: "Tigerair", link: "https://www.tigerair.com" },
      {
        type: "Airport",
        name: "San Francisco International Airport (SFO)",
        link: "https://www.flysfo.com",
      },
      {
        type: "Airline",
        name: "Peach Aviation",
        link: "https://www.flypeach.com",
      },
      {
        type: "Airline",
        name: "VivaAerobus",
        link: "https://www.vivaaerobus.com",
      },
      { type: "Airline", name: "Flynas", link: "https://www.flynas.com" },
      {
        type: "Airport",
        name: "Sydney Kingsford Smith Airport",
        link: "https://www.sydneyairport.com.au",
      },
      {
        type: "Airline",
        name: "Azul Brazilian Airlines",
        link: "https://www.voeazul.com.br",
      },
      {
        type: "Airline",
        name: "Cebu Pacific",
        link: "https://www.cebupacificair.com",
      },
      {
        type: "Airport",
        name: "Hartsfield-Jackson Atlanta International Airport",
        link: "https://www.atl.com",
      },
      {
        type: "Airline",
        name: "Gol Linhas Aéreas",
        link: "https://www.voegol.com.br",
      },
      {
        type: "Airport",
        name: "Frankfurt Airport",
        link: "https://www.frankfurt-airport.com",
      },
    ],
  };
  return (
    <>
      <Subscribe />
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading text-[300px] bg-red-500" className="sr-only">
          Footer
        </h2>

        <div className="mx-auto max-w-7xl lg:py-10 px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-10">
     {/*     <div className="Recomended TabChanges space-y-4">
            <p className="text-sm font-semibold text-gray-700 lg:text-3xl ">
              Recommended by <span className="text-blue-500">Nextgentrip.com</span>
            </p>

            <div className="tabSection">
              <div className="flex overflow-hidden items-center  gap-3 ">
                <button
                  onClick={() => setActiveTab(1)}
                  className={`${
                    activeTab == 1
                      ? "bg-slate-700 text-white"
                      : "bg-slate-100 hover:text-blue-500"
                  } py-2 px-4   text-nowrap text-sm font-medium text-gray-600 border-b-2 border-transparent  focus:outline-none rounded-sm`}
                >
                  Best Cheap Flights
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`${
                    activeTab == 2
                      ? "bg-slate-700 text-white"
                      : "bg-slate-100 hover:text-blue-500"
                  }  py-2 px-4   text-sm font-medium text-nowrap  text-gray-600 border-b-2 border-transparent  focus:outline-none rounded-sm`}
                >
                  Favourite Airline & Airports
                </button>
              </div>
              {activeTab == 1 ? (
                <ul className=" w-full overflow-x-auto tab-content px-3 text-xs grid grid-cols-2 lg:grid-cols-4   gap-4 rounded-md py-8">
                  {tabsContent.bestCheapFlight.map((elm, index) => (
                    <li key={index} className="ml-0   lg:text-md lg:ml-20">
                      <h5>{elm.name}</h5>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="tab-content text-xs w-full overflow-x-auto   grid grid-cols-2 lg:grid-cols-4 gap-4  px-5 py-8 rounded-md">
                  {tabsContent.FavouriteAirlineAndAirports.map(
                    (item, index) => (
                      <li key={index} className="ml-0 lg:ml-20">
                        <h3>
                          {item.name} 
                        </h3>
                        
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div> */}

          <div className="my-10 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <img
                className=" block w-auto h-14 md:h-20"
                src="/images/NextGenTrip.jpg"
                alt=""
              />
              <p className="text-sm leading-6 text-gray-600">
                Your Journey, Our Responsibility. <br />
                आपकी यात्रा, हमारी ज़िम्मेदारी।
              </p>
              <div className="flex items-center space-x-6">
                <Link
                  href="https://www.facebook.com/"
                  className="hover:text-blue-400 text-blue-500"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <Link
                  href="https://x.com/?lang=en"
                  className="hover:text-gray-400 text-gray-500"
                >
                  <span className="sr-only">X</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  className="hover:text-black-400 text-black-500"
                >
                  <span className="sr-only">instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </Link>
                <Link
                  href="/https://www.youtube.com/"
                  className=" text-red-500  hover:text-red-400  "
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href="/listofhotels"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("listofhotels")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/TrainComponent/pnrcheck"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("pnr")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/activities"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("activities")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/MyBooking/mybooking"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("booking")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    Service
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href="/flight"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("flights")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hotels"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("hotels")}
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        href="/flight+hotels"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("fhotels")}
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href="/train"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("trains")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href="/about"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("about")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/condition/privacy-policy"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("privacy")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/condition/terms-condition"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {t("contactus")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    More Services
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <Link
                        href="/ATI/atimate"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        Business Associate
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ATI/atidesk"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        Corporate Travel Desk
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ATI/atipro"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        Elite Luxury
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ATI/atibharat"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 text-nowrap"
                      >
                        Explore World
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ATI/loyalty-program"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 text-nowrap"
                      >
                        Loyalty Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ATI/membership-club"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        Membership Club
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" ftnew h  mt-16 border-t border-gray-900/10 hidden sm:block pt-4 sm:mt-20 lg:mt-10">
            <div className="flex justify-between items-center">
              <div className="text-sm leading-6 text-gray-600 hover:text-gray-900 w-full">
                <p>{t("text1")}</p>
              </div>

              {/* <div className=" ">
                <div className=" mb-3">
                  Download Next Gen  App <span className=""></span>
                </div>
                <div className="flex">
                  <div className="apiconh">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/images/androidft.webp"
                        alt="Google Play"
                        width={120}
                        height={40}
                      />
                    </Link>
                  </div>
                   <div className="">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/images/iosnovft.webp"
                        alt="App Store"
                        width={120}
                        height={40}
                      />
                    </Link>
                  </div> 
                </div>
              </div> 
               <div className="">
                <div className=" mb-3">
                  Scan QR Code<span className=""></span>
                </div>
                <div className="">
                  <div className="">
                    <img
                      src="/images/tripscan.webp"
                      alt="Scan QR"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="belowFooter mt-16 flex justify-between border-t border-gray-900/10 pt-4 sm:mt-20 lg:mt-6 ">
            <p className="text-sm leading-5 text-gray-500">
              © 2025 Next Gen  All Rights Reserved.
            </p>
            <Link
              href="/condition/privacy-policy"
              className="text-sm hidden md:block leading-5 text-gray-500 cursor-pointer"
            >
              privacy-policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};


export default Footer;
