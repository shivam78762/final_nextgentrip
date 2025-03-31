"use client";

import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaEnvelope,
  FaEyeDropper,
  FaTimes,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./AllComponent/Navbar";
import Cookies from "js-cookie";
import { IoMdCall } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FaHotel } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { getCurrencyDef } from "./Store/slices/currencySlice";

const Topbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userlogin, setUserLogine] = useState(null);
  const [selectedLang, setSelectedLang] = useState("en");
  const [topDropdown, setTopDropdown] = useState(null);

  useEffect(() => {
    // Set the initial state from cookies (if available)
    const localeFromCookie = Cookies.get("locale");
    if (localeFromCookie) setSelectedLang(localeFromCookie);

    const allreadyuser = JSON.parse(localStorage.getItem("NextGenUser"));
    setUserLogine(allreadyuser);
  }, []);

  const handleLanguageChange = (code) => {
    const newLang = code;
    setSelectedLang(newLang);
    Cookies.set("locale", newLang);

    setCounrtyOpner(false);
    window.location.reload();
  };

  const openNav3 = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const [showPopup, setShowPopup] = useState(null);
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const dummyNotifications = [
    "You have a new message.",
    "Your booking is confirmed.",
    "Your flight has been delayed.",
  ];

  const togglePopup = (id) => {
    if (showPopup === id) {
      setShowPopup(null);
    } else {
      setShowPopup(id);
      setHasNewNotification(false);
    }
  };
  const [activeTab, setActiveTab] = useState("signup");
  const [currencyappled, setcurrencyappled] = useState(false);
  const [defaultcurrency, setdefaultcurrency] = useState(
    JSON.parse(localStorage.getItem("usercurrency")) || {
      symble: "₹",
      code: "INR",
      country: "India",
    }
  );
  const [countryOpner, setCounrtyOpner] = useState(false);
  const countryLanguages = [
    { name: "English (US)", image: "/images/flags/us.webp", langCode: "en" },
    {
      name: "Spanish (Spain)",
      image: "/images/flags/spain.png",
      langCode: "es",
    },
    {
      name: "French (France)",
      image: "/images/flags/france.png",
      langCode: "fr",
    },
    {
      name: "German (Germany)",
      image: "/images/flags/germany.png",
      langCode: "de",
    },
    {
      name: "Italian (Italy)",
      image: "/images/flags/italy.png",
      langCode: "it",
    },
    {
      name: "Portuguese (Brazil)",
      image: "/images/flags/brazil.png",
      langCode: "pt",
    },
    {
      name: "Russian (Russia)",
      image: "/images/flags/russia.png",
      langCode: "ru",
    },
    {
      name: "Chinese (China)",
      image: "/images/flags/china.png",
      langCode: "zh",
    },
    {
      name: "Japanese (Japan)",
      image: "/images/flags/japan.png",
      langCode: "ja",
    },
    {
      name: "Korean (South Korea)",
      image: "/images/flags/south-korea.png",
      langCode: "ko",
    },
    { name: "Hindi (India)", image: "/images/flags/india.png", langCode: "hi" },
    {
      name: "Arabic (Saudi Arabia)",
      image: "/images/flags/saudi-arabia.png",
      langCode: "ar",
    },
    {
      name: "Turkish (Turkey)",
      image: "/images/flags/turkey.png",
      langCode: "tr",
    },
    {
      name: "Thai (Thailand)",
      image: "/images/flags/thailand.png",
      langCode: "th",
    },
    {
      name: "Swedish (Sweden)",
      image: "/images/flags/sweden.png",
      langCode: "sv",
    },
    {
      name: "Norwegian (Norway)",
      image: "/images/flags/norway.png",
      langCode: "no",
    },
    {
      name: "Danish (Denmark)",
      image: "/images/flags/denmark.png",
      langCode: "da",
    },
    {
      name: "Finnish (Finland)",
      image: "/images/flags/finland.png",
      langCode: "fi",
    },
    {
      name: "Polish (Poland)",
      image: "/images/flags/poland.png",
      langCode: "pl",
    },
    {
      name: "Bengali (India)",
      image: "/images/flags/india.png",
      langCode: "bn",
    },
    { name: "Tamil (India)", image: "/images/flags/india.png", langCode: "ta" },
    {
      name: "Punjabi (India)",
      image: "/images/flags/india.png",
      langCode: "pa",
    },
    {
      name: "Gujarati (India)",
      image: "/images/flags/india.png",
      langCode: "gu",
    },
    {
      name: "Marathi (India)",
      image: "/images/flags/india.png",
      langCode: "mr",
    },
  ];

  const currency = [
    {
      country: "India",
      symble: "₹",
      code: "INR",
      image: "/images/flags/india.png",
    },
    {
      country: "United States",
      symble: "$",
      code: "USD",
      image: "/images/flags/us.webp",
    },
    {
      country: "European Union",
      symble: "€",
      code: "EUR",
    },
    {
      country: "China",
      symble: "¥",
      code: "CNY",
    },
    {
      country: "Russia",
      symble: "₽",
      code: "RUB",
    },
    {
      country: "Japan",
      symble: "¥",
      code: "JPY",
    },
    {
      country: "Australia",
      symble: "$",
      code: "AUD",
    },
    {
      country: "Canada",
      symble: "$",
      code: "CAD",
    },
    {
      country: "United Arab Emirates",
      symble: "د.إ",
      code: "AED",
    },
    {
      country: "Afghanistan",
      symble: "؋",
      code: "AFN",
    },
    {
      country: "Albania",
      symble: "L",
      code: "ALL",
    },
    {
      country: "Thailand",
      symble: "฿",
      code: "THB",
    },
    {
      country: "Indonesia",
      symble: "Rp",
      code: "IDR",
    },
    {
      country: "Iraq",
      symble: "د.ع",
      code: "IQD",
    },
    {
      country: "Kuwait",
      symble: "د.ك",
      code: "KWD",
    },
  ];

  useEffect(() => {
    dispatch(getCurrencyDef());
  }, []);

  const handelCurrencySEt = (info) => {
    localStorage.setItem("usercurrency", JSON.stringify(info));

    setdefaultcurrency(info);
    setcurrencyappled(false);
    window.location.reload();

  };
  const getLangAbbreviation = (name) => {
    const parts = name.split(" "); // Split by space
    const firstPart = parts[0]; // Get "Hindi" or "English"
    return firstPart.charAt(0).toUpperCase() + (firstPart.charAt(1) || "").toUpperCase(); // First two letters in uppercase
  };

  return (
    <div className="bg-red-400 border-b     relative md:sticky top-0 navbar-main pe-4 py-2 border-blue-100   md:px-8 lg:px-16 xl:px-20">
      <div className="container mx-auto flex py-0  flex-row justify-between items-center">
        <div className="flex gap-2 items-center space-x-2">
          <div
            className="flex   lg:hidden flex-col  justify-center cursor-pointer"
            onClick={openNav3}
          >
            {/* <div className="w-6 h-[3px] bg-gray-800 mb-1"></div>
            <div className="w-5 h-[2px] bg-gray-800 mb-1"></div>
            <div className="w-4 h-[2px] bg-gray-800"></div> */}
          </div>
          <Link href="/">
            <img src="/images/NextGenTrip.jpg" alt="" className="h-[35px] md:h-[75px]" />
          </Link>
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        <div className="Contact-county-login-singnup flex items-center gap-1 lg:gap-4">
          <div className=" flex justify-start lg:justify-end">
            <Link
              href="/property-listing"
              className="  hidden  md:flex justify-center items-center gap-3 mx-4 px-8 py-3 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 hover:shadow-xl hover:opacity-90 transition-all duration-300 text-sm"
            >
              <FaHotel />
              List Your Property
            </Link>
          </div>

          <a href="tel:+9877579319" className="hidden">
            <div className="border border-gray-300 rounded-full  text-white px-4 text-center shadow-md cursor-pointer transition duration-300 flex items-center gap-4 relative">

              <IoMdCall className="text-green-500  z-20 topPhoneRingingAnime absolute bottom-0 left-1  text-xl animate-pulse" />


              <div className="flex-shrink-0">
                <img
                  src="/images/TopPhoneRing.webp"
                  alt="User"
                  className=" topPhoneRingingAnime rounded-full h-10 w-10 border-2 border-white"
                />
              </div>


              <p className="text-sm  font-semibold">
                Book Now - Call us 24/7:{" "}
                <span className="font-bold text-[#2F80ED]">+91 9877579319</span>
              </p>
            </div>
          </a>
          <a
            href="tel:+9877579319"
            className="fixed topPhoneRingingAnime bottom-4 right-4 "
          >
            <div
              className="flex  relative items-center gap-4 p-2 bg-gradient-to-tr from-slate-100 via-sky-200
  text-white rounded-full shadow-lg cursor-pointer transition-all duration-300"
            >

              <IoMdCall className="text-green-500 text-3xl absolute  bottom-0 -translate-y-2  " />


              <div className="flex-shrink-0">
                <img
                  src="/images/TopPhoneRing.webp"
                  alt="User"
                  className="rounded-full h-12 w-12 border-2 border-white"
                />
              </div>
            </div>
          </a>


          <div className=" flex justify-center items-center ">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setcurrencyappled(true)}
            >
              <p className="text-xl lg:text-2xl font-semibold">{defaultcurrency.symble}</p>
              <p>{defaultcurrency.code}</p>
            </div>
          </div>

          {
            currencyappled && (
              <div className="fixed flex justify-center items-center bg-[rgba(0,0,0,0.6)] inset-0 p-4">
              <div  onClick={(e) => e.stopPropagation()} className="h-[32rem] w-[700px] rounded-xl p-6 bg-white shadow-lg overflow-y-scroll">
 
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">Select Your Currency</h3>
               
                </div>
            
 
                <div className="flex flex-wrap gap-4 ">
                  {currency.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => handelCurrencySEt(currency)}
                      className={`flex items-center gap-3 px-5 py-3 text-sm font-medium border rounded-full shadow-sm transition duration-300 ${
                        currency.code === defaultcurrency.code
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-300"
                      }`}
                    >
             
                      <span className="w-5 h-5 hidden   rounded-full bg-gray-300 lg:flex items-center justify-center text-xs">
                        🌍
                      </span>
          
                      <div>
                        <p>{currency.symble} - {currency.code}</p>
                        <p className="text-xs text-gray-500">{currency.country}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            

            )
          }




          <div className="flex  justify-between items-center   ">
            <div className="flex items-center space-x-2">
              {/* counry selction  */}
              <div className="ContrySection">
                {countryLanguages.map(
                  (lang, ind) =>
                    lang.langCode === selectedLang && (
                      <button
                        key={ind}
                        onClick={() => setCounrtyOpner(!countryOpner)}
                        className="flex relative z-40 mx-2 items-center space-x-1 text-[12px]  md:text-md"
                      >
                        <img
                          src={lang.image}
                          className="w-6 h-6   md:w-8 md:h-8 rounded-full object-fill max-w-full"
                          alt=""
                        />
                        <span className="text-nowrap hidden lg:block">{lang.name} </span>
                        <span className="text-nowrap  block lg:hidden ">
                        {getLangAbbreviation(lang.name)}
                        </span>
                        <FaChevronDown
                          className={`${
                            countryOpner && "rotate-180"
                          } hidden md:block`}
                        />
                      </button>
                    )
                )}

                {countryOpner && (
                  <div className="fixed flex justify-center items-center bg-[rgba(0,0,0,0.5)] inset-0 p-4">
                    <div className="h-[40rem] w-[800px] rounded-lg p-3 bg-white overflow-y-scroll">
                      <div className="space-y-5 ">
                        <div className="flex justify-between">
                          <h4 className="font-extrabold text-lg">Languages</h4>
                          <button
                            onClick={() => setCounrtyOpner(false)}
                            className=""
                          >
                            <RxCross2 />
                          </button>
                        </div>
                        <div className="flex gap-11">
                          <div>
                            <p className="text-sm font-bold">
                              Cureent Language
                            </p>
                            {countryLanguages.map(
                              (lang) =>
                                lang.langCode === selectedLang && (
                                  <div
                                    key={lang.langCode}
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => setcurrencyappled(false)}
                                  >
                                    <img
                                      src={lang.image}
                                      className="w-8 h-8 rounded-full object-fill max-w-full"
                                      alt={lang.name}
                                    />
                                    <p>{lang.name}</p>
                                  </div>
                                )
                            )}
                          </div>

                          {/* <div className="">
                            <p className="text-sm font-bold">
                              Cureent Currency
                            </p>
                            <div
                              className="flex items-center gap-2 cursor-pointer"
                              onClick={() => setcurrencyappled(true)}
                            >
                              <p className="text-2xl font-semibold">
                                {defaultcurrency.symble}
                              </p>
                              <p>{defaultcurrency.code}</p>
                            </div>
                          </div> */}
                        </div>
                      </div>

                      <div className="h-[2px] mt-5 bg-gray-200"></div>

                      {!currencyappled && (
                        <div className="Languages-choose">
                          <h4 className="font-bold text-sm">All Languages</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3  gap-4">
                            {countryLanguages.map((lang, index) => (
                              <div
                                key={index}
                                className="flex cursor-pointer  text-xs items-center gap-2 p-2 "
                                onClick={() =>
                                  handleLanguageChange(lang.langCode)
                                }
                              >
                                <img
                                  src={lang.image}
                                  alt={lang.name}
                                  className="w-12 h-12 rounded-full object-fill max-w-full"
                                />
                                <span>{lang.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {currencyappled && (
                        <div className="Languages-choose">
                          <h4 className="font-bold text-sm">All Currency</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-5  gap-4">
                            {currency.map((lang, index) => (
                              <div
                                key={index}
                                className="flex flex-col items-center cursor-pointer  text-xs  gap-2 p-2  "
                                onClick={() => handelCurrencySEt(lang)}
                              >
                                <p className="text-2xl font-bold">
                                  {lang.symble}
                                </p>

                                <span>
                                  {lang.code} ({lang.country})
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* below md screen  */}
              <div className="">
                <div
                  className="hidden relative top-[4px]  ml-5"
                  onClick={() => togglePopup(2)} // Toggle popup with ID 2
                >
                  {hasNewNotification && (
                    <p className="w-2 h-2 bg-[#E91E63] rounded-full absolute top-0 right-0"></p>
                  )}
                  <span className="notibellico w-4 h-6 bg-cover bg-no-repeat"></span>
                </div>

                {showPopup === 2 && (
                  <div className="fixed top-0 -right-2 w-80 z-[9999] h-full bg-[#effbff] transform translate-x-0 transition-transform duration-500">
                    <button
                      onClick={() => togglePopup(2)} // Close popup
                      className="absolute top-[20px] right-[25px] text-black"
                    >
                      <FaTimes />
                    </button>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-4">
                        Notifications
                      </h2>
                      {dummyNotifications.length > 0 ? (
                        <ul>
                          {dummyNotifications.map((notification, index) => (
                            <li
                              key={index}
                              className="p-2 mb-2 bg-gradient-to-b from-white via-[#fafdff] to-[#fafdff]"
                            >
                              {notification}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No new notifications.</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* login and singup  */}
            <div className=" flex items-center justify-center space-x-4 mt-1   ">
              {userlogin && (
                <Link href={"/user"}>
                  <FaUserCircle className="text-2xl md:text-3xl mb-2 " />
                </Link>
              )}
              {!userlogin && (
                <Link className="relative" href={"/user/login"}>
                  <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-3  lg:px-6 py-2 font-semibold rounded-full text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300 cursor-pointer">
                    Login <span className="hidden md:inline"> or Signup</span>
                  </div>
                  {/* 
                {openDropdown === "signUp" && (
                  <div
                    className="absolute w-72 z-[999] top-full right-0 mt-2 bg-white text-black rounded-lg shadow-two"
                    onMouseLeave={handleMouseLeave}
                  >
                    <div>
                      <div
                        className="flex items-center  border-b p-3"
                        onClick={() => togglePopup(1)}
                      >
                        <span
                          className="w-10 h-10 bg-[#f9f8fa] bg-center rounded-lg bg-no-repeat mr-2 custlog-roico"
                          style={{ backgroundSize: "100%" }}
                        ></span>
                        <div>
                          <span className="font-semibold text-xs">
                            Customer Login
                          </span>
                          <span className="block text-sm font-semibold">
                            Login & check bookings
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/admin-login"
                      className="flex items-center  border-b p-3"
                    >
                      <span
                        className="w-10 h-10 bg-[#f9f8fa] bg-center rounded-lg bg-no-repeat mr-2 corplog-roico"
                        style={{ backgroundSize: "100%" }}
                      ></span>
                      <div>
                        <span className="font-semibold text-xs">
                          Admin Login
                        </span>
                        <span className="block text-sm font-semibold">
                          Login your admin account
                        </span>
                      </div>
                    </Link>

                    <Link href="/profile" className="flex items-center p-3">
                      <span
                        className="w-10 h-10 bg-[#f9f8fa] bg-center rounded-lg bg-no-repeat mr-2 mybooking-roico"
                        style={{ backgroundSize: "100%" }}
                      ></span>
                      <div>
                        <span className="font-semibold text-xs">
                          My Booking
                        </span>
                        <span className="block text-sm font-semibold">
                          Manage your bookings here
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
                {showPopup === 1 ? (
                  <div className="fixed inset-0 flex z-[9999] items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full">
                      <div className="flex items-center mb-4 justify-between">
                        <h2 className="text-lg font-bold">
                          {activeTab === "signup" ? "Sign Up" : "Login"}
                        </h2>
                        <button className="text-sm" onClick={togglePopup}>
                          <FaTimes />
                        </button>
                      </div>
                      <div className="mb-4">
                        <div className="flex border-b">
                          <button
                            className={`w-1/2 py-2 text-sm font-semibold ${
                              activeTab === "signup"
                                ? "border-b-2 border-blue-500"
                                : ""
                            }`}
                            onClick={() => setActiveTab("signup")}
                          >
                            Sign Up
                          </button>
                          <button
                            className={`w-1/2 py-2 text-sm font-semibold ${
                              activeTab === "login"
                                ? "border-b-2 border-blue-500"
                                : ""
                            }`}
                            onClick={() => setActiveTab("login")}
                          >
                            Login
                          </button>
                        </div>
                      </div>
                      <form>
                        {activeTab === "signup" ? (
                          <>
                            <div className="mb-4 ">
                              <label className="block text-sm relative font-semibold mb-2">
                                Email
                                <FaEnvelope className="absolute right-3 top-10" />
                              </label>
                              <input
                                type="email"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter your email"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-semibold relative mb-2">
                                Password
                                <FaEyeDropper className="absolute right-3 top-10" />
                              </label>
                              <input
                                type="password"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter your password"
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-blue-500 text-white py-2 rounded-md"
                            >
                              Sign Up
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="mb-4">
                              <label className="block text-sm font-semibold relative mb-2">
                                Email
                                <FaEnvelope className="absolute right-3 top-10" />
                              </label>
                              <input
                                type="email"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter your email"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-semibold relative mb-2">
                                Password
                                <FaEyeDropper className="absolute right-3 top-10" />
                              </label>
                              <input
                                type="password"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter your password"
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-blue-500 text-white py-2 rounded-md"
                            >
                              Login
                            </button>
                          </>
                        )}
                      </form>
                    </div>
                  </div>
                ) : (
                  ""
                )} */}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
