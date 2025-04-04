"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDinnerDining, MdRoomService } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import Slider from "react-slick";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

import {
  FaCheck,
  FaChevronCircleRight,
  FaChevronDown,
  FaChevronRight,
  FaLocationArrow,
  FaShareAlt,
  FaStar,
  FaTimes,
} from "react-icons/fa";

const locations = [
  {
    id: "",
    imageSrc: "/images/DT_map.webp",
    title: "St.Francis Xavier'S Church, Chicalim",
    subtitle: "Tourist Attraction",
    distance: "3.1 Km",
  },
  {
    id: "",
    imageSrc: "/images/DT_map.webp",
    title: "Sa Jacinto Island",
    subtitle: "Tourist Attraction",
    distance: "3.7 Km",
  },
  {
    id: "",
    imageSrc: "/images/activity7.webp",
    tag: "POPULAR",
    title: "Majorda Beach",
    subtitle: "Live the Perfect Beach Life!",
    distance: "14.6 Km",
  },
  {
    id: "",
    imageSrc: "/images/activity5.webp",
    tag: "POPULAR",
    title: "Colva Beach",
    subtitle: "Sprawling & Scenic Beachfront",
    distance: "20 Km",
  },
];

const reviews = [
  {
    title: "Good experience with polite staff",
    author: "rohit.",
    date: "Aug 30, 2024",
    rating: 3.1,
    category: "Classic",
    content:
      "We had a good stay. The room was clean and comfy, and the staff was polite and helpful throughout our visit.",
  },
  {
    title: "Good experience with polite staff",
    author: "rohit.",
    date: "Aug 30, 2024",
    rating: 4.2,
    category: "Classic",
    content:
      "We had a good stay. The room was clean and comfy, and the staff was polite and helpful throughout our visit.",
  },
  {
    title: "Good experience with polite staff",
    author: "rohit.",
    date: "Aug 30, 2024",
    rating: 2.3,
    category: "Classic",
    content:
      "We had a good stay. The room was clean and comfy, and the staff was polite and helpful throughout our visit.",
  },
];

const page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [nights, setNights] = useState(1);
  const [hotelroom, setHotelroom] = useState(1);
  const handleNightsChange = (amount) => {
    setNights((prev) => Math.max(prev + amount, 1));
  };
  const handleRoomsChange = (amount) => {
    setHotelroom((prev) => Math.max(prev + amount, 1));
  };
  const [selectedDates, setSelectedDates] = useState({
    datePicker1: null,
    datePicker2: null,
  });
  const [openSections, setOpenSections] = useState({
    landmarks: true,
    attractions: false,
    transport: false,
  });

  const toggleSection = (section) => {
  
    setOpenSections(() => ({
      // Set the clicked section to true, and all others to false
      [section]: true,
    }));
  };
  const [selectedTab, setSelectedTab] = useState("all");

  const tabs = [
    { name: "all", label: "All" },
    { name: "couple", label: "Couple" },
    { name: "family", label: "Family" },
    { name: "business", label: "Business" },
  ];

  const [childrenCount, setChildrenCount] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);

  const handleChildrenCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setChildrenCount(count);
    setChildrenAges(Array(count).fill(""));
  };

  const handleAgeChange = (index, age) => {
    const updatedAges = [...childrenAges];
    updatedAges[index] = age;
    setChildrenAges(updatedAges);
  };

  const [activeFilter, setActiveFilter] = useState("All Reviews");
  const [activePage, setActivePage] = useState(1);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const [activePickerId, setActivePickerId] = useState(null);

  const handleClick = (id) => {
    setActivePickerId((prevId) => (prevId === id ? null : id));
  };

  const handleDateSelect = (date, id) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [id]: date,
    }));
    setActivePickerId(null);
  };

  const roomOne = {
    image: "main-image.webp",
    title: "Deluxe Room",
    allImages: [
      "/images/hotelSlider1.webp",
      "/images/hotelSlider2.webp",
      "/images/hotelSlider3.webp",
      "/images/oGulmarg.webp",
    ],
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const rooms = [
    {
      id: 1,
      title: "Classic",
      image: "/images/luxury-bedroom-hotel.webp",
      features: [
        "Air Conditioning",
        "Housekeeping",
        "In-room Dining",
        "Wi-Fi",
        "Bathroom",
        "Room Service",
      ],
      tag: "Top Rated",
      recommendation: "RECOMMENDED",
      roomType: "Room With Free Cancellation | Breakfast only",
      perks: [
        { icon: <MdDinnerDining />, text: "Complimentary Breakfast" },
        {
          icon: <FaCheck className="text-green-600" />,
          text: "Free Cancellation till check-in",
        },
      ],
      originalPrice: "₹ 3,496",
      discountedPrice: "₹ 1,526",
      taxes: "+₹ 354 taxes & fees / Per Night",
    },
    {
      id: 1,
      title: "Classic",
      image: "/images/luxury-bedroom-hotel.webp",
      features: [
        "Air Conditioning",
        "Housekeeping",
        "In-room Dining",
        "Wi-Fi",
        "Bathroom",
        "Room Service",
      ],
      tag: "Top Rated",
      recommendation: "RECOMMENDED",
      roomType: "Room With Free Cancellation | Breakfast only",
      perks: [
        { icon: <MdDinnerDining />, text: "Complimentary Breakfast" },
        {
          icon: <FaCheck className="text-green-600" />,
          text: "Free Cancellation till check-in",
        },
      ],
      originalPrice: "₹ 3,496",
      discountedPrice: "₹ 1,526",
      taxes: "+₹ 354 taxes & fees / Per Night",
    },
  ];
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openPopup = (index) => {
    setSelectedImageIndex(index);
    setIsOpenSecond(true);
  };

  const closePopup = () => {
  
    setIsOpenSecond(false);
  };

  const images = [
    "/images/checkin1.webp",
    "/images/checkin2.webp",
    "/images/checkin3.webp",
    "/images/checkin4.webp",
  ];

  return (
    <>
      <div className="px-20 py-5">
        <ul
          className="flex space-x-2 text-sm text-gray-600 mt-5 mb-5"
          id="detpg_bread_crumbs"
        >
          <li>
            <Link href="/hotels" className="text-blue-600 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <span>/</span>
          </li>
       
          <li>
            <span>/</span>
          </li>
          <li>
            <span>Super Townhouse Candolim</span>
          </li>
        </ul>
        <div className="p-6 bg-white rounded-3xl flex items-center myshadow">
          <div className="w-2/3">
            <div className="flex items-center justify-between mb-5" id="WBTH">
              <h1 className="text-2xl font-bold flex items-center gap-4">
                Super Townhouse Candolim
                <span className="flex text-base gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-[#ccc]" />
                  <FaStar className="text-[#ccc]" />
                  <FaStar className="text-[#ccc]" />
                </span>
              </h1>
            </div>
            <div className="flex gap-5 mb-5">
              <div>
               
                <div
                  className="relative w-[520px] h-[340px] mb-4"
                  onClick={() => openPopup(0)}
                >
                  <Image
                    src={images[0]} // Show the first image thumbnail
                    alt="hotel image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 rounded-b-lg bg-opacity-75 bg-gray-800 text-white text-center">
                    +{images.length} property photos
                  </div>
                </div>

                
                {isOpenSecond && (
                  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[999]">
                    <div className="relative w-[90%] h-[80%] max-w-4xl max-h-4xl p-4">
                      <button
                        onClick={() => closePopup()}
                        className="absolute top-2 z-20 right-2 text-white bg-gray-800 rounded-full p-1 w-10 h-10"
                      >
                        X
                      </button>
                      <div className="grid grid-cols-2 gap-4 h-full">
                        {images.slice(0, 4).map((image, index) => (
                          <div key={index} className="relative w-full h-full">
                            <Image
                              src={image}
                              alt={`Image ${index + 1}`}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="">
                <div className="relative w-[280px] h-40 mb-4 rounded-2xl">
                  <Image
                    src="/images/checkin2.webp"
                    alt="hotel image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 rounded-b-lg text-sm bg-gray-800 bg-opacity-15  text-white text-center">
                    Room photos
                  </div>
                </div>
                <div className="relative w-[280px] h-40 ">
                  <Image
                    src="/images/checkin3.webp"
                    alt="hotel image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <p>
                Being a traveler, have you ever wanted a premium accommodation
                which won’t dig a hole in your pocket? This exquisite townhouse
                is...{" "}
                <Link href="#" className="font-bold text-blue-600">
                  Read more
                </Link>
              </p>
            </div>
            <div className="mb-5">
              <h2 className="text-xl font-semibold">Services</h2>
              <ul className="flex mt-4 space-x-4">
                <li className="flex gap-2 items-center">
                  <FaCheck className="text-green-600" />
                  Wi-Fi
                </li>
                <li className="flex gap-2 items-center">
                  <MdRoomService />
                  Room Service
                </li>
                <li className="flex gap-2 items-center">
                  <TbAirConditioning />
                  Air Conditioning
                </li>

                <li>
                  <a href="#" className="text-blue-600 font-semibold">
                    + 14 Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/3">
            <div className="mb-5 border-2 rounded-2xl p-3">
              <h3 className="text-lg font-bold">Classic</h3>
              <p className="mt-2 text-gray-700">Fits 2 Adults</p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-3 items-center">
                  <MdDinnerDining />
                  Complimentary Breakfast
                </li>
                <li className="flex gap-3 items-center">
                  <FaCheck className="text-green-600" />
                  Free Cancellation till check-in
                </li>
              </ul>
              <div className="mt-5">
                <p className="text-lg line-through text-gray-500">₹ 3,496</p>
                <p className="text-2xl font-bold text-black">₹ 1,526</p>
                <p className="text-sm text-gray-700">+ ₹ 354 taxes & fees</p>
              </div>
              <div className="mt-5 flex items-center">
                <Link
                  href="/hotelbooking"
                  className="px-5 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700"
                >
                  BOOK THIS NOW
                </Link>
                <button className="ml-8 text-blue-600">1 More Option</button>
              </div>
            </div>
            <div className="mt-5 border-2 rounded-2xl p-3">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white text-lg font-bold p-2 rounded-full">
                  4.8
                </div>
                <div>
                  <span className="font-bold">Excellent</span>
                  <span className="ml-2 text-gray-600 text-sm">
                    (16 RATINGS)
                  </span>
                  <p className="text-gray-600 text-sm">
                    94% guests rated this property 4
                  </p>
                </div>
                <button className="ml-5 text-blue-600 text-sm">
                  All Reviews
                </button>
              </div>
              <hr className="my-5 border-gray-300" />
              <div className="flex gap-3 items-center">
                <Image
                  src="/images/google-maps.webp"
                  alt="Candolim"
                  width={24}
                  height={24}
                  className="mr-2 w-10 h-full"
                />
                <div>
                  <p className="font-bold">Candolim</p>
                  <p className="text-gray-600 text-sm">
                    5 minutes walk to Candolim Beach
                  </p>
                </div>
                <button className="ml-5 text-blue-600 text-sm">
                  See on Map
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg my-5 myshadow">
          <div className="">
            <div>
              <div className="flex justify-between items-center">
                <div className="">
                  <p className="text-lg font-semibold">
                    Change Dates and Guest(s)
                  </p>
                  <p className="text-sm mt-1">
                    Check-in: 12 PM | Check-out: 11 AM{" "}
                  </p>
                </div>
                <div className="flex items-center relative">
                  <div
                    id="datePicker1"
                    className="border px-4 py-2 flex gap-2 items-center"
                    onClick={() => handleClick("datePicker1")}
                  >
                    {selectedDates.datePicker1
                      ? selectedDates.datePicker1.toLocaleDateString()
                      : "29/11/2003"}{" "}
                    <FaChevronDown />
                  </div>
                  <div
                    id="datePicker2"
                    className="border px-4 py-2 ml-3 flex gap-2 items-center"
                    onClick={() => handleClick("datePicker2")}
                  >
                    {selectedDates.datePicker2
                      ? selectedDates.datePicker2.toLocaleDateString()
                      : "29/11/2003"}{" "}
                    <FaChevronDown />
                  </div>
                  {activePickerId === "datePicker1" && (
                    <div className="bg-white p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                      <DayPicker
                        mode="single"
                        selected={selectedDates.datePicker1}
                        onSelect={(date) =>
                          handleDateSelect(date, "datePicker1")
                        }
                      />
                    </div>
                  )}
                  {activePickerId === "datePicker2" && (
                    <div className="bg-white p-5 shadow-2xl absolute top-full right-0 mt-2 z-10">
                      <DayPicker
                        mode="single"
                        selected={selectedDates.datePicker2}
                        onSelect={(date) =>
                          handleDateSelect(date, "datePicker2")
                        }
                      />
                    </div>
                  )}
                  <div
                    className="border px-4 py-2 ml-3 flex gap-2 items-center cursor-pointer"
                    onClick={() => handleClick("roombook")}
                  >
                    2 Adults <FaChevronDown />
                  </div>
                  {activePickerId === "roombook" && (
                    <div className="bg-white shadow-2xl absolute top-full right-0 mt-2 z-10 cursor-pointer">
                      <div className="p-4 bg-white">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <p className="text-base font-black">Rooms</p>
                            <div className="relative">
                              <div className="flex items-center">
                                <button
                                  type="button"
                                  onClick={() => handleNightsChange(-1)}
                                  className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                                >
                                  -
                                </button>

                                <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-[fffbf3] ">
                                  {nights}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleNightsChange(1)}
                                  className=" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <p className="text-base font-black">Adults</p>
                            <div className="relative">
                              <div className="inline-block curs nter">
                                <div className="flex items-center">
                                  <button
                                    type="button"
                                    onClick={() => handleRoomsChange(-1)}
                                    className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                                  >
                                    -
                                  </button>

                                  <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-[fffbf3] ">
                                    {hotelroom}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => handleRoomsChange(1)}
                                    className=" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col space-y-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-base font-black">Children</p>
                                <p className="text-sm text-gray-500 mt-1">
                                  0 - 17 Years Old
                                </p>
                              </div>
                              <div className="relative">
                                <select
                                  value={childrenCount}
                                  onChange={handleChildrenCountChange}
                                  className="block w-20 px-4 py-1 border rounded cursor-pointer bg-white"
                                  data-testid="children_count"
                                >
                                  {[...Array(7).keys()].map((num) => (
                                    <option key={num} value={num}>
                                      {num}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            {childrenCount > 0 && (
                              <div className="space-y-2">
                                <h2 className="text-sm border-t pt-4 font-bold">
                                  Age Of Child
                                </h2>
                                {[...Array(childrenCount)].map((_, index) => (
                                  <>
                                    {" "}
                                    <div
                                      key={index}
                                      className="flex items-center space-x-4 justify-between"
                                    >
                                      <p className="text-base">
                                        Child {index + 1}
                                      </p>
                                      <select
                                        value={childrenAges[index]}
                                        onChange={(e) =>
                                          handleAgeChange(index, e.target.value)
                                        }
                                        className="block w-20 px-4 py-1 border rounded cursor-pointer bg-white"
                                        data-testid={`child_age_${index}`}
                                      >
                                        <option value="">Age</option>
                                        {[...Array(18).keys()].map((age) => (
                                          <option key={age} value={age}>
                                            {age}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </>
                                ))}
                              </div>
                            )}
                          </div>

                          <p className="text-sm text-gray-600 mt-4">
                            Please provide the correct number of children along
                            with their correct age for the best options and
                            prices.
                          </p>
                        </div>
                        <button className="bg-blue-600 text-white rounded w-20 mt-3 h-8 flex items-center justify-center text-center">
                          <span className="text-xs flex items-center gap-2">
                            Save
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                  <button className=" border border-blue-500 text-blue-500 font-semibold ml-3 px-4 py-2">
                    Update Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="" className="p-6  bg-white rounded-3xl my-5 myshadow">
          <div className="">
            <h4 className=" flex items-center gap-2">
              2 Room Types <FaChevronDown />{" "}
            </h4>
            <div className="flex justify-between my-4">
              <div>
                <ul className="flex gap-5">
                  <li
                    className={`cursor-pointer rounded-md border-2 py-2 px-4 ${
                      activeTab === 0
                        ? "border-blue-500 text-blue-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab(0)}
                  >
                    Free Cancellation
                  </li>
                  <li
                    className={`cursor-pointer rounded-md border-2 py-2 px-4 ${
                      activeTab === 1
                        ? "border-blue-500 text-blue-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab(1)}
                  >
                    Breakfast Included
                  </li>
                </ul>
              </div>
            </div>
            <div className="border rounded-t-3xl">
              <div className="px-5 py-2 border-b bg-[#e6fff9] rounded-t-3xl text-sm">
                Deal Applied: <span className="font-black">ATI2003</span>
                <span>. Get INR 197 Off</span>
              </div>
              <div>
                {rooms.map((room) => (
                  <div className="flex p-5 gap-10 border-b" key={room.id}>
                    <div className="border-r pr-5">
                      <div className="relative mb-4 rounded-2xl">
                        <span className="absolute top-2 bg-white text-xs font-bold left-2 rounded-full px-3 py-1">
                          {room.tag}
                        </span>

                        <Image
                          src={room.image}
                          alt={room.title}
                          title={room.title}
                          width={477}
                          height={200}
                          className="rounded-2xl cursor-pointer"
                          onClick={openModal}
                        />

                        <div className="absolute bottom-2 right-2">
                          <button className="bg-blue-600 text-white rounded-full w-20 h-8 flex items-center justify-center">
                            <span className="text-xs flex items-center gap-2">
                              Share <FaShareAlt />
                            </span>
                          </button>
                        </div>
                      </div>
                      <h2 className="text-xl font-extrabold">{room.title}</h2>
                      <div className="text-sm text-gray-600 leading-5 my-1">
                        (100 sq.ft (9.3 sq mt) | Queen Bed)
                      </div>
                      <ul className="flex list-disc ml-5 text-sm mt-4">
                        <div className="w-full">
                          {room.features.slice(0, 3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </div>
                        <div className="w-full">
                          {room.features.slice(3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </div>
                      </ul>
                    </div>

                    <div className="flex gap-20 w-full">
                      <div>
                        <span className="border border-black text-xs px-3 rounded py-1">
                          {room.recommendation}
                        </span>

                        <h5 className="my-4 font-bold text-xl">
                          {room.roomType}
                        </h5>
                        <ul>
                          {room.perks.map((perk, index) => (
                            <li className="flex items-center gap-2" key={index}>
                              {perk.icon}
                              <p>{perk.text}</p>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-2 text-blue-600 text-base font-bold leading-6 flex items-center  gap-3">
                          More Details <FaChevronDown />
                        </p>
                      </div>

                      <div>
                        <div>
                          <p className="text-base font-normal text-gray-500 line-through">
                            {room.originalPrice}
                          </p>
                          <div className="mt-1">
                            <p className="font-black text-2xl text-black">
                              {room.discountedPrice}
                            </p>
                          </div>
                          <div className="mt-1">
                            <p className="text-lg font-normal">{room.taxes}</p>
                          </div>
                        </div>
                        <Link
                          href=""
                          className=" mt-3 bg-blue-600 text-white rounded-full w-40 h-8 flex items-center justify-center"
                        >
                          SELECT ROOM
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 bg-white rounded-3xl my-5  shadow-lg" id="">
          <p className="text-lg font-semibold mb-1">Location</p>

          <span className="text-sm font-semibold">
            The Location of Super Townhouse Candolim has been rated 4.9 by 19
            guests
          </span>

          <div className="flex gap-10 mt-5">
            {" "}
            <div className="flex justify-center items-center w-4/6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22709340513!2d76.68831206468506!3d30.732254422013508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1725338049591!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 md:w-3/4 md:h-[475px] lg:w-full"
              />
            </div>
            <div className="w-2/6">
              <div>
                <div className="">
                  <div
                    className="selected flex items-center gap-4 cursor-pointer py-5 border-b"
                    onClick={() => toggleSection("landmarks")}
                  >
                    <Image
                      src="/images/location2.webp"
                      alt="CategoryIcon"
                      width={22}
                      height={32}
                    />
                    <p className="ml-2 flex w-full justify-between items-center">
                      <span>Key Landmarks</span>
                      {openSections.landmarks ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </p>
                  </div>
                  {openSections.landmarks && (
                    <ul className="space-y-4 w-full overflow-hidden h-[200px] custom-scrollbar overflow-y-auto p-3">
                      {locations.map((location) => (
                        <li key={location.id}>
                          <span className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              id={location.id}
                              className=""
                            />
                            <label
                              htmlFor={location.id}
                              className="flex w-full items-center cursor-pointer"
                            >
                              <Image
                                src={location.imageSrc}
                                alt="image"
                                width={50}
                                height={50}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="ml-4 w-full ">
                                {location.tag && (
                                  <div className="bg-blue-500 w-max text-white text-[8px] font-semibold  p-1 rounded mb-1">
                                    {location.tag}
                                  </div>
                                )}
                                <div className="flex w-full justify-between items-center">
                                  <div>
                                    <p className="font-semibold text-sm text-gray-900">
                                      {location.title}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      {location.subtitle}
                                    </p>
                                  </div>
                                  <div className="ml-4 text-right">
                                    <span className="inline-block bg-gray-200 p-2 rounded-full">
                                      <FaLocationArrow className="text-blue-300" />
                                    </span>
                                    <p className="text-xs text-gray-600">
                                      {location.distance}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              
                <div className="">
                  <div
                    className="selected flex items-center gap-4 cursor-pointer py-5 border-b"
                    onClick={() => toggleSection("attractions")}
                  >
                    <Image
                      src="/images/cameraonr.webp"
                      alt="CategoryIcon"
                      width={22}
                      height={39}
                    />
                    <p className="ml-2 flex w-full justify-between items-center">
                      <span>Attractions</span>
                      {openSections.attractions ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </p>
                  </div>
                  {openSections.attractions && (
                    <ul className="space-y-4 overflow-hidden h-[200px] custom-scrollbar overflow-y-auto p-3">
                      {locations.map((location) => (
                        <li key={location.id}>
                          <span className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              id={location.id}
                              className=""
                            />
                            <label
                              htmlFor={location.id}
                              className="flex w-full items-center cursor-pointer"
                            >
                              <Image
                                src={location.imageSrc}
                                alt="image"
                                width={50}
                                height={50}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="ml-4  w-full">
                                {location.tag && (
                                  <div className="bg-blue-500 w-max text-white text-[8px] font-semibold  p-1 rounded mb-1">
                                    {location.tag}
                                  </div>
                                )}
                                <div className="flex w-full justify-between items-center">
                                  <div>
                                    <p className="font-semibold text-sm text-gray-900">
                                      {location.title}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      {location.subtitle}
                                    </p>
                                  </div>
                                  <div className="ml-4 text-right">
                                    <span className="inline-block bg-gray-200 p-2 rounded-full">
                                      <FaLocationArrow className="text-blue-300" />
                                    </span>
                                    <p className="text-xs text-gray-600">
                                      {location.distance}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

               
                <div className="">
                  <div
                    className="selected flex w-full items-center gap-4  cursor-pointer py-5 border-b"
                    onClick={() => toggleSection("transport")}
                  >
                    <Image
                      src="/images/flight_train.webp"
                      alt="CategoryIcon"
                      width={22}
                      height={40}
                    />
                    <p className="ml-2 flex w-full justify-between items-center">
                      <span>Transport</span>
                      {openSections.transport ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </p>
                  </div>
                  {openSections.transport && (
                    <ul className="space-y-4 overflow-hidden h-[200px] custom-scrollbar overflow-y-auto p-3">
                      {locations.map((location) => (
                        <li key={location.id}>
                          <span className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              id={location.id}
                              className=""
                            />
                            <label
                              htmlFor={location.id}
                              className="flex w-full items-center cursor-pointer"
                            >
                              <Image
                                src={location.imageSrc}
                                alt="image"
                                width={50}
                                height={50}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="ml-4 w-full">
                                {location.tag && (
                                  <div className="bg-blue-500 w-max text-white text-[8px] font-semibold  p-1 rounded mb-1">
                                    {location.tag}
                                  </div>
                                )}
                                <div className="flex w-full justify-between items-center">
                                  <div>
                                    <p className="font-semibold text-sm text-gray-900">
                                      {location.title}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      {location.subtitle}
                                    </p>
                                  </div>
                                  <div className="ml-4 text-right">
                                    <span className="inline-block bg-gray-200 p-2 rounded-full">
                                      <FaLocationArrow className="text-blue-300" />
                                    </span>
                                    <p className="text-xs text-gray-600">
                                      {location.distance}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="">
                  <div
                    className="selected flex items-center gap-4  cursor-pointer py-5 border-b"
                    onClick={() => toggleSection("restaurants")}
                  >
                    <Image
                      src="/images/restaurant.webp"
                      alt="CategoryIcon"
                      width={22}
                      height={40}
                    />
                    <p className="ml-2 flex w-full justify-between items-center">
                      <span>Restaurants</span>
                      {openSections.restaurants ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </p>
                  </div>
                  {openSections.restaurants && (
                    <ul className="space-y-4 overflow-hidden h-[200px] custom-scrollbar overflow-y-auto p-3">
                      {locations.map((location) => (
                        <li key={location.id}>
                          <span className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              id={location.id}
                              className=""
                            />
                            <label
                              htmlFor={location.id}
                              className="flex w-full items-center cursor-pointer"
                            >
                              <Image
                                src={location.imageSrc}
                                alt="image"
                                width={50}
                                height={50}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="ml-4 w-full">
                                {location.tag && (
                                  <div className="bg-blue-500 w-max text-white text-[8px] font-semibold  p-1 rounded mb-1">
                                    {location.tag}
                                  </div>
                                )}
                                <div className="flex w-full justify-between items-center">
                                  <div>
                                    <p className="font-semibold text-sm text-gray-900">
                                      {location.title}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      {location.subtitle}
                                    </p>
                                  </div>
                                  <div className="ml-4 w-ful text-right">
                                    <span className="inline-block bg-gray-200 p-2 rounded-full">
                                      <FaLocationArrow className="text-blue-300" />
                                    </span>
                                    <p className="text-xs text-gray-600">
                                      {location.distance}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="p-6 bg-white rounded-3xl flex items-center shadow-lg"
          id=""
        >
          <div className="w-full">
            <div id="">
              <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-semibold mb-1">Property Rules</p>
                <div className="flex items-center text-base font-bold">
                  <span>Check-in: 12 PM</span>
                  <span className="ml-5">Check-out: 11 AM</span>
                </div>
              </div>
              <div
                className="border-b mb-4"
                style={{ backgroundColor: "rgb(216, 216, 216)" }}
              ></div>
              <ul className="columns-2 space-y-4 list-disc">
                <li className="flex flex-col ">
                  <p className="text-sm font-bold text-green-600">
                    Couple, Bachelor Rules
                    <span className="ml-2 inline-block text-xs font-normal bg-green-200 text-green-800 py-1 px-2 rounded">
                      Couple Friendly
                    </span>
                  </p>
                  <span className="text-sm">
                    Unmarried couples/guests with Local IDs are allowed.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm">
                    Guests below 18 years of age are not allowed at the
                    property.
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm">
                    Passport, Aadhar, Driving License, and Govt. ID are accepted
                    as ID proof(s).
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm">Pets are not allowed.</span>
                </li>
              </ul>
              <div className="flex items-center mt-4">
                <ul className="flex space-x-4">
                  <li>
                    <span className="bg-white border text-sm py-2 px-3 rounded">
                      Guest Profile
                    </span>
                  </li>
                  <li>
                    <span className="bg-white border text-sm py-2 px-3 rounded">
                      ID Proof Related
                    </span>
                  </li>
                </ul>
                <button className="text-blue-600 font-semibold  ml-4">
                  Read All Property Rules
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 bg-white rounded-3xl mt-5 shadow-lg" id="">
          <p className="text-lg font-semibold mb-1"> User Rating & Reviews</p>

          <div>
            <ul className="flex gap-10 my-5 border-b border-gray-200">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className={`cursor-pointer pb-2 font-semibold ${
                    selectedTab === tab.name
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setSelectedTab(tab.name)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>

            <div className="mt-4">
              {selectedTab === "all" && (
                <>
                  <div className="flex gap-10">
                    <div className="flex flex-col w-1/4">
                      <div className="flex flex-col space-y-5">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                            4.9
                          </div>
                          <div>
                            <div className="text-lg font-semibold">
                              Excellent
                            </div>
                            <p className="text-sm text-gray-600">19 Ratings</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[
                            "Excellent",
                            "Very good",
                            "Average",
                            "Poor",
                            "Bad",
                          ].map((rating, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <span className="text-sm font-medium">
                                {rating}
                              </span>
                              <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                                <div
                                  className={`absolute top-0 left-0 h-full rounded-full  bg-blue-500`}
                                  style={{
                                    width: `${
                                      index === 0 ? 95 : index === 3 ? 5 : 0
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm ml-2">
                                {index === 0
                                  ? "95%"
                                  : index === 3
                                  ? "5%"
                                  : "0%"}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t-2 border-gray-300 my-5"></div>

                        <div>
                          <p className="text-xl font-bold mb-4">
                            Rating Categories
                          </p>
                          <ul className="space-y-2">
                            {[
                              { category: "Location", rating: 4.9 },
                              { category: "Cleanliness", rating: 2.1 },
                              { category: "Value for Money", rating: 4.7 },
                              { category: "Food", rating: 4.9 },
                              { category: "Services", rating: 4.5 },
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm font-medium">
                                  {item.category}
                                </span>
                                <span className="text-sm px-2 py-1 border border-blue-600 rounded-md w-[39px] font-medium">
                                  {item.rating}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-3/4">
                      <div className="flex justify-between">
                        <div>
                          <div className="mb-4">
                            <p className="text-lg font-black mb-2">
                              Filter By:
                            </p>
                            <ul className="flex space-x-4">
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "All Reviews"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("All Reviews")
                                }
                              >
                                All Reviews
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Room Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Room Cleanliness")
                                }
                              >
                                Room Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Toilet Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Toilet Cleanliness")
                                }
                              >
                                Toilet Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Location"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() => handleFilterChange("Location")}
                              >
                                Location
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg">
                            <p className="font-bold mb-3">Sort by:</p>
                            <div className="border px-4 py-2 rounded-md">
                              <span>Latest first</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {reviews.map((review, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg shadow-sm"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-lg font-black">
                                  {review.title}
                                </p>
                                <div className="text-gray-500 text-sm mt-1">
                                  <span>{review.author}</span>
                                  <span className="mx-2">•</span>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                              <span className="text-sm border border-blue-600 rounded-md w-[39px]  px-2 py-1 font-bold">
                                {review.rating}
                              </span>
                            </div>
                            <p className="font-semibold mt-2 mb-1">
                              {review.category}
                            </p>
                            <p>{review.content}</p>
                            <p className="mt-2 cursor-pointer text-blue-500">
                              Helpful <span className="ml-2">👍</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-4">
                        <ul className="flex space-x-2">
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              disabled={activePage === 1}
                              onClick={() => handlePageChange(activePage - 1)}
                            >
                              «
                            </button>
                          </li>
                          <li>
                            <button
                              className={`px-4 py-2 ${
                                activePage === 1
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-700"
                              } rounded-lg`}
                              onClick={() => handlePageChange(1)}
                            >
                              1
                            </button>
                          </li>
                          
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              onClick={() => handlePageChange(activePage + 1)}
                            >
                              »
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {selectedTab === "couple" && (
                <>
                  <div className="flex gap-10">
                    <div className="flex flex-col w-1/4">
                      <div className="flex flex-col space-y-5">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                            4.9
                          </div>
                          <div>
                            <div className="text-lg font-semibold">
                              Excellent
                            </div>
                            <p className="text-sm text-gray-600">19 Ratings</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[
                            "Excellent",
                            "Very good",
                            "Average",
                            "Poor",
                            "Bad",
                          ].map((rating, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <span className="text-sm font-medium">
                                {rating}
                              </span>
                              <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                                <div
                                  className={`absolute top-0 left-0 h-full rounded-full  bg-blue-500`}
                                  style={{
                                    width: `${
                                      index === 0 ? 95 : index === 3 ? 5 : 0
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm ml-2">
                                {index === 0
                                  ? "95%"
                                  : index === 3
                                  ? "5%"
                                  : "0%"}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t-2 border-gray-300 my-5"></div>

                        <div>
                          <p className="text-xl font-bold mb-4">
                            Rating Categories
                          </p>
                          <ul className="space-y-2">
                            {[
                              { category: "Location", rating: 4.9 },
                              { category: "Cleanliness", rating: 2.1 },
                              { category: "Value for Money", rating: 4.7 },

                              { category: "Food", rating: 4.9 },
                              { category: "Services", rating: 4.5 },
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm font-medium">
                                  {item.category}
                                </span>
                                <span className="text-sm px-2 py-1 border border-blue-600 rounded-md w-[39px] font-medium">
                                  {item.rating}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-3/4">
                      <div className="flex justify-between">
                        <div>
                          <div className="mb-4">
                            <p className="text-lg font-black mb-2">
                              Filter By:
                            </p>
                            <ul className="flex space-x-4">
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "All Reviews"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("All Reviews")
                                }
                              >
                                All Reviews
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Room Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Room Cleanliness")
                                }
                              >
                                Room Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Toilet Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Toilet Cleanliness")
                                }
                              >
                                Toilet Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Location"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() => handleFilterChange("Location")}
                              >
                                Location
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg">
                            <p className="font-bold mb-3">Sort by:</p>
                            <div className="border px-4 py-2 rounded-md">
                              <span>Latest first</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {reviews.map((review, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg shadow-sm"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-lg font-black">
                                  {review.title}
                                </p>
                                <div className="text-gray-500 text-sm mt-1">
                                  <span>{review.author}</span>
                                  <span className="mx-2">•</span>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                              <span className="text-sm border border-blue-600 rounded-md w-[39px]  px-2 py-1 font-bold">
                                {review.rating}
                              </span>
                            </div>
                            <p className="font-semibold mt-2 mb-1">
                              {review.category}
                            </p>
                            <p>{review.content}</p>
                            <p className="mt-2 cursor-pointer text-blue-500">
                              Helpful <span className="ml-2">👍</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-4">
                        <ul className="flex space-x-2">
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              disabled={activePage === 1}
                              onClick={() => handlePageChange(activePage - 1)}
                            >
                              «
                            </button>
                          </li>
                          <li>
                            <button
                              className={`px-4 py-2 ${
                                activePage === 1
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-700"
                              } rounded-lg`}
                              onClick={() => handlePageChange(1)}
                            >
                              1
                            </button>
                          </li>
                          
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              onClick={() => handlePageChange(activePage + 1)}
                            >
                              »
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {selectedTab === "family" && (
                <>
                  <div className="flex gap-10">
                    <div className="flex flex-col w-1/4">
                      <div className="flex flex-col space-y-5">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                            4.9
                          </div>
                          <div>
                            <div className="text-lg font-semibold">
                              Excellent
                            </div>
                            <p className="text-sm text-gray-600">19 Ratings</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[
                            "Excellent",
                            "Very good",
                            "Average",
                            "Poor",
                            "Bad",
                          ].map((rating, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <span className="text-sm font-medium">
                                {rating}
                              </span>
                              <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                                <div
                                  className={`absolute top-0 left-0 h-full rounded-full  bg-blue-500`}
                                  style={{
                                    width: `${
                                      index === 0 ? 95 : index === 3 ? 5 : 0
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm ml-2">
                                {index === 0
                                  ? "95%"
                                  : index === 3
                                  ? "5%"
                                  : "0%"}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t-2 border-gray-300 my-5"></div>

                        <div>
                          <p className="text-xl font-bold mb-4">
                            Rating Categories
                          </p>
                          <ul className="space-y-2">
                            {[
                              { category: "Location", rating: 4.9 },
                              { category: "Cleanliness", rating: 2.1 },
                              { category: "Value for Money", rating: 4.7 },
                              { category: "Food", rating: 4.9 },
                              { category: "Services", rating: 4.5 },
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm font-medium">
                                  {item.category}
                                </span>
                                <span className="text-sm px-2 py-1 border border-blue-600 rounded-md w-[39px] font-medium">
                                  {item.rating}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-3/4">
                      <div className="flex justify-between">
                        <div>
                          <div className="mb-4">
                            <p className="text-lg font-black mb-2">
                              Filter By:
                            </p>
                            <ul className="flex space-x-4">
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "All Reviews"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("All Reviews")
                                }
                              >
                                All Reviews
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Room Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Room Cleanliness")
                                }
                              >
                                Room Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Toilet Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Toilet Cleanliness")
                                }
                              >
                                Toilet Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Location"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() => handleFilterChange("Location")}
                              >
                                Location
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg">
                            <p className="font-bold mb-3">Sort by:</p>
                            <div className="border px-4 py-2 rounded-md">
                              <span>Latest first</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {reviews.map((review, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg shadow-sm"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-lg font-black">
                                  {review.title}
                                </p>
                                <div className="text-gray-500 text-sm mt-1">
                                  <span>{review.author}</span>
                                  <span className="mx-2">•</span>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                              <span className="text-sm border border-blue-600 rounded-md w-[39px]  px-2 py-1 font-bold">
                                {review.rating}
                              </span>
                            </div>
                            <p className="font-semibold mt-2 mb-1">
                              {review.category}
                            </p>
                            <p>{review.content}</p>
                            <p className="mt-2 cursor-pointer text-blue-500">
                              Helpful <span className="ml-2">👍</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-4">
                        <ul className="flex space-x-2">
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              disabled={activePage === 1}
                              onClick={() => handlePageChange(activePage - 1)}
                            >
                              «
                            </button>
                          </li>
                          <li>
                            <button
                              className={`px-4 py-2 ${
                                activePage === 1
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-700"
                              } rounded-lg`}
                              onClick={() => handlePageChange(1)}
                            >
                              1
                            </button>
                          </li>
                          
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              onClick={() => handlePageChange(activePage + 1)}
                            >
                              »
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {selectedTab === "business" && (
                <>
                  <div className="flex gap-10">
                    <div className="flex flex-col w-1/4">
                      <div className="flex flex-col space-y-5">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                            4.9
                          </div>
                          <div>
                            <div className="text-lg font-semibold">
                              Excellent
                            </div>
                            <p className="text-sm text-gray-600">19 Ratings</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[
                            "Excellent",
                            "Very good",
                            "Average",
                            "Poor",
                            "Bad",
                          ].map((rating, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <span className="text-sm font-medium">
                                {rating}
                              </span>
                              <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                                <div
                                  className={`absolute top-0 left-0 h-full rounded-full  bg-blue-500`}
                                  style={{
                                    width: `${
                                      index === 0 ? 95 : index === 3 ? 5 : 0
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm ml-2">
                                {index === 0
                                  ? "95%"
                                  : index === 3
                                  ? "5%"
                                  : "0%"}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t-2 border-gray-300 my-5"></div>

                        <div>
                          <p className="text-xl font-bold mb-4">
                            Rating Categories
                          </p>
                          <ul className="space-y-2">
                            {[
                              { category: "Location", rating: 4.9 },
                              { category: "Cleanliness", rating: 2.1 },
                              { category: "Value for Money", rating: 4.7 },
                              { category: "Food", rating: 4.9 },
                              { category: "Services", rating: 4.5 },
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm font-medium">
                                  {item.category}
                                </span>
                                <span className="text-sm px-2 py-1 border border-blue-600 rounded-md w-[39px] font-medium">
                                  {item.rating}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-3/4">
                      <div className="flex justify-between">
                        <div>
                          <div className="mb-4">
                            <p className="text-lg font-black mb-2">
                              Filter By:
                            </p>
                            <ul className="flex space-x-4">
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "All Reviews"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("All Reviews")
                                }
                              >
                                All Reviews
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Room Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Room Cleanliness")
                                }
                              >
                                Room Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Toilet Cleanliness"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleFilterChange("Toilet Cleanliness")
                                }
                              >
                                Toilet Cleanliness
                              </li>
                              <li
                                className={`cursor-pointer border px-4 py-2 rounded-md ${
                                  activeFilter === "Location"
                                    ? "text-blue-500 font-bold"
                                    : ""
                                }`}
                                onClick={() => handleFilterChange("Location")}
                              >
                                Location
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg">
                            <p className="font-bold mb-3">Sort by:</p>
                            <div className="border px-4 py-2 rounded-md">
                              <span>Latest first</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {reviews.map((review, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg shadow-sm"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-lg font-black">
                                  {review.title}
                                </p>
                                <div className="text-gray-500 text-sm mt-1">
                                  <span>{review.author}</span>
                                  <span className="mx-2">•</span>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                              <span className="text-sm border border-blue-600 rounded-md w-[39px]  px-2 py-1 font-bold">
                                {review.rating}
                              </span>
                            </div>
                            <p className="font-semibold mt-2 mb-1">
                              {review.category}
                            </p>
                            <p>{review.content}</p>
                            <p className="mt-2 cursor-pointer text-blue-500">
                              Helpful <span className="ml-2">👍</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center mt-4">
                        <ul className="flex space-x-2">
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              disabled={activePage === 1}
                              onClick={() => handlePageChange(activePage - 1)}
                            >
                              «
                            </button>
                          </li>
                          <li>
                            <button
                              className={`px-4 py-2 ${
                                activePage === 1
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-700"
                              } rounded-lg`}
                              onClick={() => handlePageChange(1)}
                            >
                              1
                            </button>
                          </li>
                         
                          <li>
                            <button
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                              onClick={() => handlePageChange(activePage + 1)}
                            >
                              »
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[999] flex justify-center bg-black bg-opacity-50 overflow-hidden overflow-y-scroll">
          <div className="custom-slider relative my-10 w-full max-w-4xl bg-white h-max px-20 py-10 rounded-lg">
            <button
              className="fixed top-5 right-10  bg-white rounded-full p-1 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
            <Slider {...settings}>
              {roomOne?.allImages?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${roomOne.title} ${index + 1}`}
                  className="rounded-lg"
                />
              ))}
            </Slider>

            <div className=" mt-8">
              <p className="text-2xl font-black text-black">Room Services</p>
              <ul className="flex justify-evenly my-5">
                <li className="flex items-center gap-3">
                  <img
                    src="/images/square-dashed.webp"
                    alt="100 sq.ft (9.3 sq mt)"
                    className="w-10 h-full"
                  />
                  <span className="text-sm leading-4 font-bold">
                    100 sq.ft (9.3 sq mt)&nbsp;
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img
                    src="/images/bed.webp"
                    className="w-10 h-full"
                    alt="Queen Bed"
                  />
                  <span className="text-sm leading-4 font-bold">
                    Queen Bed&nbsp;
                  </span>
                </li>
              </ul>
              <div className="mt-5">
                <p className="text-lg leading-5 font-black">
                  Popular with Guests
                </p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                  {[
                    "Air Conditioning",
                    "Housekeeping",
                    "In-room Dining",
                    "Wi-Fi",
                    "Bathroom",
                    "Room Service",
                  ].map((item) => (
                    <li
                      key={item}
                      className="leading-5 flex items-center gap-3"
                    >
                      <FaCheck className="text-green-700 rounded-full p-[3px] text-lg" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-lg leading-5 font-black">Room Features</p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                  {[
                    "Telephone",
                    "Charging Points",
                    "Seating Area",
                    "Chair",
                  ].map((item) => (
                    <li
                      key={item}
                      className="leading-5 flex items-center gap-3"
                    >
                      <FaCheck className="text-green-700 rounded-full p-[3px] text-lg" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-lg leading-5 font-black">Beds and Blanket</p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                  {["Cushions", "Blanket", "Pillows"].map((item) => (
                    <li
                      key={item}
                      className="leading-5 flex items-center gap-3"
                    >
                      <FaCheck className="text-green-700 rounded-full p-[3px] text-lg" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-lg leading-5 font-black">
                  Media and Entertainment
                </p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                  <li className="leading-5 flex">
                    <FaCheck className="text-green-700 rounded-full p-[3px] text-lg" />
                    <span className="text-sm">TV</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-lg leading-5 font-black">Bathroom</p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                  {[
                    "Towels",
                    "Geyser/Water Heater",
                    "Toiletries",
                    "Western Toilet Seat",
                    "Dustbins",
                    "Hot & Cold Water",
                  ].map((item) => (
                    <li
                      key={item}
                      className="leading-5 flex items-center gap-3"
                    >
                      <FaCheck className="text-green-700 rounded-full p-[3px] text-lg" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-lg leading-5 font-black">Other Facilities</p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                  {["Fan", "Jetspray"].map((item) => (
                    <li
                      key={item}
                      className="leading-5 flex items-center gap-3"
                    >
                      <FaCheck className="text-green-700 rounded-full p-[3px] text-lg" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
