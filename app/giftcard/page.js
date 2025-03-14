"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import Image from "next/image";
import { FaArrowRight, FaPlus, FaStar, FaTimes } from "react-icons/fa";

const page = () => {
  const [location, setLocation] = useState("New York, USA");
  const [checkInDate, setCheckInDate] = useState("09/16/2024");
  const [checkOutDate, setCheckOutDate] = useState("09/16/2024");
  const [guests, setGuests] = useState("2 adults, 2 children");

  const [activeCategory, setActiveCategory] = useState("Tours");

  const categories = ["Tours", "Hotels", "Tickets", "Rental", "Activities"];

  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const activities = [
    {
      id: 1,
      title: "Adventure Activities",
      imageSrc: "/images/activity-big.webp",
      tours: "365 Tours",
      links: [
        "Mountain Hiking",
        "Tropical Zip-lining",
        "Rock Climbing",
        "Coastal Paragliding",
        "Rafting Excursion",
      ],
    },
    {
      id: 2,
      title: "Cultural Exploration",
      imageSrc: "/images/activity-big2.webp",
      tours: "365 Tours",
      links: [
        "Mountain Hiking",
        "Tropical Zip-lining",
        "Rock Climbing",
        "Coastal Paragliding",
        "Rafting Excursion",
      ],
    },
    {
      id: 3,
      title: "Wildlife Experiences",
      imageSrc: "/images/activity-big3.webp",
      tours: "365 Tours",
      links: [
        "Mountain Hiking",
        "Tropical Zip-lining",
        "Rock Climbing",
        "Coastal Paragliding",
        "Rafting Excursion",
      ],
    },
    // Add more activities as needed
  ];

  const slides = [
    { src: "/images/activity9.webp", title: "Paris", tours: "100+ Tours" },
    { src: "/images/activity6.webp", title: "Singapore", tours: "300+ Tours" },
    { src: "/images/activity7.webp", title: "Roma", tours: "400+ Tours" },
    { src: "/images/activity8.webp", title: "Bangkok", tours: "100+ Tours" },
    { src: "/images/activity1.webp", title: "Bali", tours: "600+ Tours" },
    { src: "/images/activity2.webp", title: "Phuket", tours: "200+ Tours" },
    { src: "/images/activity3.webp", title: "Tokyo", tours: "700+ Tours" },
    { src: "/images/activity4.webp", title: "Cappadocia", tours: "900+ Tours" },
    { src: "/images/activity5.webp", title: "Paris", tours: "100+ Tours" },
  ];
  const cardData = [
    {
      title: "Singapore Skylines: Urban Exploration",
      rating: "4.96",
      reviews: "672 reviews",
      duration: "2 days 3 nights",
      guests: "4-6 guests",
      price: "$48.25",
      link: "/tour-detail-4",
      imageSrc: "/images/tour.webp",
    },
    {
      title: "Bali Beach Adventure",
      rating: "4.85",
      reviews: "320 reviews",
      duration: "3 days 2 nights",
      guests: "2-4 guests",
      price: "$60.00",
      link: "/tour-detail-5",
      imageSrc: "/images/tour2.webp",
    },
    // Add more card objects as needed
    {
      title: "Paris City Lights",
      rating: "4.90",
      reviews: "500 reviews",
      duration: "5 days 4 nights",
      guests: "2-4 guests",
      price: "$120.00",
      link: "/tour-detail-6",
      imageSrc: "/images/tour3.webp",
    },
    {
      title: "Tokyo Adventure",
      rating: "4.75",
      reviews: "450 reviews",
      duration: "4 days 3 nights",
      guests: "2-4 guests",
      price: "$90.00",
      link: "/tour-detail-7",
      imageSrc: "/images/tour4.webp",
    },
    {
      title: "New York City Tour",
      rating: "4.80",
      reviews: "600 reviews",
      duration: "3 days 2 nights",
      guests: "2-6 guests",
      price: "$110.00",
      link: "/tour-detail-8",
      imageSrc: "/images/NewYork..webp",
    },
    {
      title: "Sydney Opera House Visit",
      rating: "4.88",
      reviews: "380 reviews",
      duration: "2 days 1 night",
      guests: "2-4 guests",
      price: "$75.00",
      link: "/tour-detail-9",
      imageSrc: "/images/Sydney.webp",
    },
  ];

  return (
    <>
      <div className="relative mb-[440px] md:mb-52">
        <div className="block-banner-home5 bg-[#e3f0ff]">
          <div className="container py-10 px-5 lg:px-28 mx-auto">
            <div
              className="relative bg-no-repeat   md:bg-[position:bottom_0px_right] "
              style={{
                backgroundImage: 'url("/images/bg-banner2.da536dd2.webp")',
              }}
            >
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-7/12 xl:w-6/12 wow fadeInUp">
                  <div className="mt-5 mb-9 text-neutral-900 leading-10">
                    <span className="text-4xl lg:text-6xl">Begin Your </span>{" "}
                    <br />
                    <span className="text-3xl lg:text-6xl font-extrabold">
                      Fantastic Travel Experience
                    </span>
                    <span className="text-base  lg:text-5xl">&nbsp;Here</span>
                  </div>
                  <h6 className="text-xl font-medium text-neutral-500 mb-8">
                    Discover handcrafted travel experiences that blend adventure
                    and luxury, creating memories that last a lifetime
                  </h6>
                  <Link
                    href="#"
                    className="text-neutral-900 w-max bg-blue-200 hover:bg-gray-400 text-base font-bold px-5 py-3 rounded-full flex items-center"
                  >
                    Discover Now
                  </Link>
                </div>
                <img
                  src="/images/giftcardbanner.webp"
                  alt=""
                  className="mr-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="box-search-advance bg-white shadow-lg rounded-lg p-6 mx-0 md:mx-36 w-full md:w-[80%] absolute -bottom-96 md:-bottom-40">
          <div className="box-top-search flex flex-wrap justify-between items-center">
            {categories.map((item, index) => (
              <a
                key={index}
                className={`category-link px-4 py-2 rounded-lg cursor-pointer ${
                  item === activeCategory
                    ? "bg-black text-white"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveCategory(item)}
              >
                {item}
              </a>
            ))}
            <div className="right-top-search">
              <a
                className="text-sm font-medium text-blue-500"
                href="/help-center"
              >
                Need some help?
              </a>
            </div>
          </div>

          <div className="box-bottom-search mt-6 grid md:grid-cols-1 lg:grid-cols-5 gap-4 border rounded-xl p-6 items-center">
            <div className="item-search">
              <label className="text-sm font-bold text-neutral-500">
                Location
              </label>
              <div className="dropdown">
                <button className="btn-dropdown-search w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  {location}
                </button>
              </div>
            </div>

            <div className="item-search">
              <label className="text-sm font-bold text-neutral-500">
                Check In
              </label>
              <div className="box-calendar-date">
                <input
                  type="text"
                  className="search-input w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
            </div>

            <div className="item-search">
              <label className="text-sm font-bold text-neutral-500">
                Check Out
              </label>
              <div className="box-calendar-date">
                <input
                  type="text"
                  className="search-input w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
            </div>

            <div className="item-search">
              <label className="text-sm font-bold text-neutral-500">
                Guest
              </label>
              <div className="dropdown">
                <button className="btn-dropdown-search w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  {guests}
                </button>
              </div>
            </div>

            <div className="item-search">
              <button className="btn px-6 py-3 bg-black mx-auto text-white rounded-lg flex items-center space-x-2">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="section-box box-partners bg-gray-100  p-5 md:p-20 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center gap-0 md:gap-10">
            <div className="lg:w-1/3 w-full mb-5 lg:mb-0 border-2 rounded-md p-2">
              <div className="flex items-center">
                <div className="flex items-center min-w-[160px]">
                  <img
                    src="/images/author.webp"
                    alt=""
                    className="w-[51px] h-[51px] border border-[#e4e6e8] mr-[-20px] rounded-full"
                  />
                  <img
                    src="/images/author2.webp"
                    alt=""
                    className="w-[51px] h-[51px] border border-[#e4e6e8] mr-[-20px] rounded-full"
                  />
                  <img
                    src="/images/author3.webp"
                    alt=""
                    className="w-[51px] h-[51px] border border-[#e4e6e8] mr-[-20px] rounded-full"
                  />
                  <FaPlus className="inline-block p-3 h-[51px] w-[51px] border rounded-full bg-[#fefa17]  text-center min-w-[51px]" />
                </div>
                <p className="ml-4 text-sm text-gray-900">
                  1684 people used <strong></strong> in the last{" "}
                  <strong>24 hours</strong>
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 w-full mb-5 lg:mb-0">
              <h6 className="text-gray-900">Partner with</h6>
              <p className="text-xs text-gray-600">
                We are a trusted partner of airlines, payment gateways, and
                travel services around the world.
              </p>
            </div>

            <div className="lg:w-[35%] w-full">
              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                breakpoints={{
                  // when window width is >= 320px (mobile)
                  320: {
                    slidesPerView: 2,
                  },
                  // when window width is >= 768px (tablet and above)
                  768: {
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="px-4 py-2 h-12 leading-[45px] border border-gray-300 rounded-md text-center mr-2 mb-2 min-w-[111px]">
                    <img src="/images/stripe.webp" alt="Stripe" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="px-6 py-2 h-12 leading-[45px] mx-auto border border-gray-300 rounded-md text-center mr-2 mb-2 min-w-[111px]">
                    <img src="/images/mastercard.webp" alt="Mastercard" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="px-6 py-3 h-12 leading-[45px] border border-gray-300 rounded-md text-center mr-2 mb-2 min-w-[111px]">
                    <img src="/images/skrill.webp" alt="Skrill" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="px-4 py-3 h-12 leading-[45px] border border-gray-300 rounded-md text-center mr-2 mb-2 min-w-[111px]">
                    <img src="/images/paypal.webp" alt="Paypal" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap items-center px-5 md:px-20 pt-20 ">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-neutral-900 text-3xl font-bold mb-2">
            Top Tour Activities
          </h2>
          <p className="text-xl font-medium text-neutral-500">
            Explore the world by multi adventure activities
          </p>
        </div>

        <div className="lg:w-1/2 flex flex-wrap items-center justify-center lg:justify-end gap-4">
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("categories")}
          >
            <button className="py-2 px-[18px] flex items-center gap-2 rounded-full border border-[#e4e6e8] text-neutral-1000 text-sm leading-6 font-medium bg-[#e4e6e8] bg-no-repeat bg-right-[15px]">
              Categories
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {openDropdown === "categories" && (
              <ul
                className="absolute z-50 mt-1 bg-white text-gray-900 text-sm shadow-lg rounded-lg overflow-hidden w-44"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 bg-blue-200 font-semibold"
                  >
                    Attractives
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Active
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Nature
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("duration")}
          >
            <button
              type="button"
              className="py-2 px-[18px] flex rounded-full items-center gap-2 border border-[#e4e6e8] text-neutral-1000 text-sm leading-6 font-medium bg-[#e4e6e8] bg-no-repeat bg-right-[15px]"
            >
              <span>Duration</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {openDropdown === "duration" && (
              <ul
                className="absolute z-50 mt-1 bg-white text-gray-900 text-sm shadow-lg overflow-hidden rounded-lg w-44"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 bg-blue-200 font-semibold"
                  >
                    4 Hours
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    8 Hours
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    2 Days
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("rating")}
          >
            <button
              type="button"
              className="py-2 px-[18px] flex items-center gap-2 rounded-full border border-[#e4e6e8] text-neutral-1000 text-sm leading-6 font-medium bg-[#e4e6e8] bg-no-repeat bg-right-[15px]"
            >
              <span>Review / Rating</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {openDropdown === "rating" && (
              <ul
                className="absolute z-50 mt-1 bg-white text-gray-900 text-sm shadow-lg overflow-hidden rounded-lg w-44"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 bg-blue-200 font-semibold"
                  >
                    Newest
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Oldest
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("range")}
          >
            <button
              type="button"
              className="py-2 px-[18px] flex items-center gap-2 rounded-full border border-[#e4e6e8] text-neutral-1000 text-sm leading-6 font-medium bg-[#e4e6e8] bg-no-repeat bg-right-[15px]"
            >
              <span>Price range</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {openDropdown === "range" && (
              <ul
                className="absolute z-50 mt-1 bg-white text-gray-900 text-sm shadow-lg overflow-hidden rounded-lg w-44"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 bg-blue-200 font-semibold"
                  >
                    $10 - $100
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    $100 - $1,000
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    $1,000 - $10,000
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  px-5 md:px-20 my-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <Link
                href="#"
                className="absolute top-2 left-2 bg-white text-black py-1 px-2 rounded-md text-sm font-medium"
              >
                Top Rated
              </Link>
              <Link href="#" className="absolute top-2 right-2 text-red-500">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z"
                    stroke=""
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  ></path>
                </svg>
              </Link>
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={500}
                height={300}
                className="w-full object-cover h-[250px]"
              />
            </div>
            <div className="bg-white p-4 rounded-lg relative">
              <div className="flex justify-between items-center absolute right-2 -top-10">
                <div className="text-right  bg-white  p-1 px-2 rounded-md ">
                  <span className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    {card.rating}
                    <span className="text-sm text-gray-500">
                      ({card.reviews})
                    </span>
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <Link
                  href={card.link}
                  className="text-xl font-semibold text-gray-800 hover:underline"
                >
                  {card.title}
                </Link>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500">
                  <p>{card.duration}</p>
                  <p>{card.guests}</p>
                </div>
                <div className="text-right">
                  <h6 className="text-xl font-semibold text-gray-800">
                    {card.price}
                  </h6>
                  <p className="text-sm text-gray-500">/ person</p>
                </div>
              </div>
              <div className="text-end">
                <Link
                  href={card.link}
                  className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 md:px-20 py-12">
        <div className="flex justify-center mb-8 items-center">
          <div className="text-center">
            <h2
              data-aos="fade-up"
              className="text-xl md:text-[24px] font-semibold aos-init aos-animate"
            >
              Travel By Activities
            </h2>
            <p>Navigate the Globe with Confidence</p>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={8}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-32">
              <Link href="#" className="block text-center">
                <div className="mx-auto rounded-full">
                  <img
                    alt={slide.title}
                    loading="lazy"
                    className="w-32 h-40 mx-auto object-cover rounded-full"
                    src={slide.src}
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4">{slide.title}</h3>
                <p className="text-sm">{slide.tours}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="box-list-activities my-10 px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-100 hover:shadow-xl"
            >
              <div className="card-image relative">
                <Image
                  src={activity.imageSrc}
                  alt={activity.title}
                  width={400}
                  height={250}
                  className="w-full h-auto rounded-t-lg"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="flex justify-between w-full items-center absolute bottom-4 px-5 text-white">
                  <h3 className="text-lg font-bold">{activity.title}</h3>
                  <p className="flex gap-2 items-center p-3 rounded-xl bg-white border border-gray-300 shadow-md">
                    {" "}
                    <TbRosetteDiscountCheckFilled />
                    {activity.tours}
                  </p>
                </div>
              </div>
              <div className="p-3 md:p-8 bg-neutral-0 rounded-[30px] relative">
                <ul className="flex items-center  flex-wrap list-disc pl-5  gap-4">
                  {activity.links.map((link, index) => (
                    <li key={index} className="w-[46%]   text-neutral-500">
                      <Link
                        href="/activities-2"
                        className=" hover:text-gray-800 font-medium transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-[url('/images/bg-newyear.webp')] bg-top text-center bg-no-repeat bg-cover h-80 py-[55px] pt-16 md:pt-[90px] relative">
        <div className="overlay bg-[#101a16] top-0 flex justify-center   opacity-25 absolute h-full w-full"></div>
        <div className="absolute z-50  w-full  text-center mx-auto">
          <h2 className="text-white mb-4 text-3xl font-bold">
            New Year, New Adventures
          </h2>
          <h6 className="text-white text-lg">
            Save 15% or more when you book and stay <br /> before 1 April 2025
          </h6>
          <div className="flex justify-center mt-6">
            <Link
              href="#"
              className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-secondary-dark transition duration-300"
            >
              <span>Find Early 2024 Deals</span>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
