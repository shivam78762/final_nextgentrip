"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { GiEarthAmerica } from "react-icons/gi";
import { MdOutlineTour } from "react-icons/md";
import { MdOutlineGroups3 } from "react-icons/md";
import { GoQuestion } from "react-icons/go";

import { IoIosArrowDown } from "react-icons/io";

export default function page() {
  const [closer, setCloser] = useState("Overview");

  const closerFunc = (closerValue) => {
    setCloser((preval) => (preval == closerValue ? "" : closerValue));
  };

  const tours = [
    {
      title: "Singapore Skylines: Urban Exploration",
      image: "/images/post.webp",
      price: 48.25,
      originalPrice: 60.75,
    },

    {
      title: "Singapore Garden City Tour",
      image: "/images/post2.webp",
      price: 45.0,
      originalPrice: 58.0,
    },
    {
      title: "Island Adventures and Cultural Tour",
      image: "/images/post4.webp",
      price: 53.0,
      originalPrice: 68.0,
    },
  ];

  const sections = [
    {
      title: "Overview",
      content: [
        "Traveling is an enriching experience that broadens our horizons and opens us to new cultures, landscapes, and perspectives. It provides a break from daily routines, offering a chance to explore the unknown and embrace adventure. Whether it's wandering through ancient cities, trekking in the mountains, relaxing on serene beaches, or experiencing vibrant local markets, each journey brings its own unique stories and memories.",
        "Travel encourages personal growth, pushing us out of our comfort zones. It challenges us to adapt to new environments, communicate across language barriers, and immerse ourselves in different ways of life. Through travel, we develop empathy and understanding for people from diverse backgrounds, breaking down prejudices and misconceptions.",
      ],
    },
    {
      title: "Highlight",
      content: [
        "Ultimately, traveling creates lasting memories and connections, whether through meaningful interactions with locals, shared moments with fellow travelers, or the profound impact of new experiences. It is a journey that continuously reshapes our understanding of the world, leaving us with a greater appreciation for its beauty.",
        "Adventure and exploration lie at the heart of travel, driving us to venture beyond our everyday boundaries. Whether it’s scaling rugged mountains, navigating through bustling markets, or discovering vast and varied wonders.",
      ],
    },
    {
      title: "Included/Excluded",
      included: [
        "Round-trip airfare",
        "3-star hotel accommodations",
        "Daily breakfast",
        "Guided city tours",
      ],
      excluded: [
        "Travel insurance",
        "Lunch and dinner",
        "Personal expenses",
        "Optional excursions",
      ],
    },
    {
      title: "Duration",
      content: [
        "Capture the thrill and excitement of exploring new territories and engaging in exhilarating activities. These experiences are often defined by their unique challenges and the sense of discovery they bring.",
        "Adventure highlights are not just about the activities themselves but also about the emotions and personal growth they inspire. Each adventure offers a unique mix of excitement, challenge, and discovery that contributes to a deeper appreciation of the world.",
      ],
      list: [
        {
          title: "Epic Landscapes",
          description:
            "Encountering breathtaking natural wonders such as rugged mountains, vast deserts, and serene lakes.",
        },
        {
          title: "Thrilling Activities",
          description:
            "Engaging in high-energy pursuits like rock climbing, white-water rafting, zip-lining, and paragliding.",
        },
        {
          title: "Unforgettable Memories",
          description:
            "Creating lasting stories and cherished memories through unexpected discoveries, camaraderie, and personal growth.",
        },
      ],
    },
    {
      title: "Question Answers",
      questions: [
        {
          question: "Is The High Roller suitable for all ages?",
          answer:
            "Absolutely! The High Roller offers a family-friendly experience suitable for visitors of all ages. Children must be accompanied by an adult.",
        },
        {
          question: "Can I bring food or drinks aboard The High Roller?",
          answer:
            "Outside food and beverages are not permitted on The High Roller. However, there are nearby dining options at The LINQ Promenade where you can enjoy a meal before or after your ride.",
        },
        {
          question: "Is The High Roller wheelchair accessible?",
          answer:
            "Yes, The High Roller cabins are wheelchair accessible, making it possible for everyone to enjoy the breathtaking views of Las Vegas.",
        },
      ],
    },
    {
      title: "Rates-Reviews",
      ratings: [
        { score: "4.92/5", reviews: "(672 reviews)" },
        { category: "Price", score: "4.8/5" },
        { category: "Services", score: "4.2/5" },
        { category: "Safety", score: "4.3/5" },
        { category: "Entertainment", score: "4.4/5" },
        { category: "Accessibility", score: "4.3/5" },
        { category: "Support", score: "5/5" },
      ],
      reviews: [
        {
          user: "Sarah Johnson",
          date: "December 4, 2024 at 3:12 pm",
          review:
            "The [Travel Website Name] offers a comprehensive and user-friendly platform for planning and booking trips. The website features an intuitive navigation system that makes it easy for users to search for destinations, accommodations, and activities.",
          rating: 5,
        },
        // Add more reviews as needed
      ],
    },
  ];

  return (
    <div>
      <div className="">
        <div className="top-home-tour px-3 sm:px-5 gap-2 lg:px-20  xl:px-28 flex flex-col lg:flex-row lg:items-center md:gap-3 pt-5">
          <div className="flex items-center  gap-3">
            <div className="flex items-center gap-1 text-gray-600 text-sm sm:text-base">
              Home
              <IoIosArrowForward />
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm sm:text-base">
              Tour
              <IoIosArrowForward />
            </div>
          </div>
          <h5 className=" lg:w-[96%] text-gray-500  text-sm md:text-lg  font-bold ">
            The High Roller Experience: Tickets for The LINQ Observation Wheel,
            Las Vegas Strip
          </h5>
        </div>

        <div className="Swiper-section  px-2 lg:px-10 mt-6 lg:mt-5 bg-sgreen-500 relative  ">
          <div className="swiper overflow-hidden rounded-lg lg:rounded-3xl ">
            <Swiper
              className="mySwiper"
              spaceBetween={30}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
            >
              <SwiperSlide>
                <img
                  src="/images/hotelsss.webp"
                  alt="Hotel"
                  className="max-h-[25vh]  sm:max-h-[60vh]  xl:max-h-[80vh] w-full rounded-lg lg:rounded-3xl object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/banner-detail-2.webp"
                  alt="Resort"
                  className="max-h-[25vh] sm:max-h-[60vh] xl:max-h-[80vh] w-full rounded-lg lg:rounded-3xl object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/tour12..webp"
                  alt="Beach"
                  className="max-h-[25vh] sm:max-h-[60vh] xl:max-h-[80vh] w-full rounded-lg lg:rounded-3xl object-cover"
                />
              </SwiperSlide>

              <div className="swiper-button-next-custom">
                <IoMdArrowForward />
              </div>
              <div className="swiper-button-prev-custom">
                <IoMdArrowForward className="rotate-180" />
              </div>
            </Swiper>
          </div>

          <div className=" mt-5 space-y-5 lg:mt-0  lg:absolute lg:bottom-5 xl:bottom-10 md:space-y-4 lg:space-y-0 lg:z-20 lg:flex Swiper-overLay flex-col gap-6 px-2 md:px-10 lg:px-20 xl:px-28 ">
            <div>
              <button className="flex px-5 py-2 sm:py-3 rounded-full items-center gap-2 bg-gray-300 lg:bg-white text-xs sm:text-sm">
                <FaStar className="text-yellow-400" />
                <span className="font-bold">4.56</span>
                <span className="text-black md:text-gray-400">
                  (672 reviews)
                </span>
              </button>
            </div>
            <div>
              <h3 className="text-sm md:text-lg lg:w-[96%] text-gray-500 leading-snug lg:text-2xl xl:text-3xl xl:pe-48 font-bold lg:text-white">
                The High Roller Experience Tickets for The LINQ Observation
                Wheel, Las Vegas Strip
              </h3>
            </div>
            <div className=" flex flex-col pe-5 gap-5 lg:flex-row lg:justify-between lg:items-center  ">
              <div className="lg:text-white flex items-center gap-3 sm:gap-5">
                <div className="flex  items-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base">
                  <FaLocationDot />
                  <h3>Las Vegas, USA</h3>
                </div>
                <h5 className="font-bold underline text-xs sm:text-sm lg:text-base">
                  Show on map
                </h5>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 font-bold">
                <button className=" bg-gray-300 lg:bg-white flex items-center gap-2  rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm">
                  <FaShareAlt />
                  Share
                </button>
                <button className=" bg-gray-300 lg:bg-white flex items-center gap-2 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm">
                  <FaHeart />
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="Main-content-section  px-3 lg:px-9 xl:px-40 py-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-10">
            <div className="left-side col-span-4 space-y-3 md:space-y-7">
              <div className="fist-child grid grid-cols-2  items-center 	 gap-5 md:space-y-0  md:grid-cols-4 md:gap-10 border shadow-lg px-2 py-4 md:px-6  md:py-5 rounded-xl text-sm md:text-base">
                <div className="calendar flex md:flex-col xl:flex-row  items-center  gap-2 xl:gap-5">
                  <div className="bg-[#E4F9F9] p-4 rounded-lg border">
                    <FaRegCalendarAlt />
                  </div>
                  <div className="text-center text-nowrap">
                    <p className="text-gray-400 ">Duration</p>
                    <h5 className="font-bold ">5-7 Days</h5>
                  </div>
                </div>
                <div className="Group-size flex md:flex-col xl:flex-row  items-center gap-2 xl:gap-5">
                  <div className="bg-[#FFF0EC] text-lg p-4 rounded-lg border">
                    <MdOutlineGroups3 />
                  </div>
                  <div className="text-center text-nowrap">
                    <p className="text-gray-400 ">Group size</p>
                    <h5 className="font-bold ">0 8 people</h5>
                  </div>
                </div>
                <div className="Tour-type flex md:flex-col xl:flex-row  items-center gap-2 xl:gap-5">
                  <div className="bg-[#FCF2FA] p-4 rounded-lg border">
                    <MdOutlineTour />
                  </div>
                  <div className="text-center text-nowrap">
                    <p className="text-gray-400 ">Tour Type</p>
                    <h5 className="font-bold ">Daily Tour</h5>
                  </div>
                </div>
                <div className="Languages flex md:flex-col xl:flex-row  items-center gap-2 xl:gap-5">
                  <div className="bg-[#E3F0FF] text-lg p-4 rounded-lg border">
                    <GiEarthAmerica />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 ">Languages</p>
                    <h5 className="font-bold  ">English</h5>
                  </div>
                </div>
              </div>

              {sections.map((section, index) => (
                <div
                  key={index}
                  className="border shadow-lg    md:px-6 md:py-3 py-3  px-3  lg:py-5 rounded-xl"
                >
                  <div
                    onClick={() => closerFunc(section.title)}
                    className="cursor-pointer flex group justify-between items-center"
                  >
                    <h3 className="font-bold text-sm md:text-lg group-hover:text-orange-400 duration-100">
                      {section.title}
                    </h3>
                    <IoIosArrowDown
                      className={`${
                        closer === section.title ? "rotate-180" : ""
                      } transition-transform duration-200`}
                    />
                  </div>

                  {section.content && (
                    <div
                      className={`${
                        closer === section.title
                          ? " space-y-5 py-5 h-max duration-500  opacity-100"
                          : "max-h-0 py-0 opacity-0"
                      }`}
                    >
                      {section.content.map((text, idx) => (
                        <p key={idx} className="text-gray-500 text-justify ">
                          {text}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.included && section.excluded && (
                    <div
                      className={`flex flex-col md:flex-row justify-between items-start ${
                        closer === section.title
                          ? "py-5 h-max duration-500  opacity-100"
                          : "max-h-0 py-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <div className="space-y-3 md:space-y-5">
                        <h4 className="font-semibold text-base md:text-lg">
                          Included:
                        </h4>
                        <ul className="list-disc text-gray-700 space-y-2 text-sm md:text-base pl-5">
                          {section.included.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3 md:space-y-5">
                        <h4 className="font-semibold text-base md:text-lg">
                          Excluded:
                        </h4>
                        <ul className="list-disc text-gray-700 space-y-2 text-sm md:text-base pl-5">
                          {section.excluded.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {section.list && (
                    <div
                      className={`space-y-5 ${
                        closer === section.title
                          ? "py-5 h-max duration-500  opacity-100"
                          : "max-h-0 py-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      {section.content.map((text, idx) => (
                        <p
                          key={idx}
                          className="text-gray-500 text-sm md:text-base"
                        >
                          {text}
                        </p>
                      ))}
                      <ul className="list-decimal pl-3 text-gray-700 space-y-5 text-sm">
                        {section.list.map((item, idx) => (
                          <li key={idx}>
                            <strong>{item.title}:</strong> {item.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.questions && (
                    <div
                      className={`space-y-5 ${
                        closer === section.title
                          ? "py-5 h-max duration-500  opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      {section.questions.map((q, idx) => (
                        <div
                          key={idx}
                          className="border shadow-lg px-4 py-5 space-y-3 rounded-lg hover:bg-gray-100"
                        >
                          <div className="flex items-center text-sm font-bold gap-2">
                            <GoQuestion />
                            {q.question}
                          </div>
                          <p className="text-sm md:text-base">{q.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.ratings && (
                    <div
                      className={`space-y-5 ${
                        closer === section.title
                          ? "py-5 h-max duration-500  opacity-100 "
                          : "max-h-0 py-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row ratings gap-5 md:gap-10">
                        <div className="bg-[#FCFCF3] flex justify-center items-center h-32 md:h-40 w-full md:w-1/3 lg:w-1/4 border shadow-lg">
                          <div className="space-y-2 text-center">
                            <h3 className="font-bold text-lg md:text-xl">
                              {section.ratings[0].score}
                            </h3>
                            <p className="text-sm md:text-base">
                              {section.ratings[0].reviews}
                            </p>
                            <div className="text-yellow-600 flex justify-center items-center">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-start">
                          <div className="flex flex-col gap-2">
                            {section.ratings.slice(1).map((rating, idx) => (
                              <span key={idx} className="text-sm md:text-base">
                                {rating.category}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-col gap-2 md:gap-3">
                            {section.ratings.slice(1).map((rating, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <div className="rounded-full w-full md:w-[220px] bg-gray-300">
                                  <div
                                    className="py-1 rounded-full w-[180px] bg-orange-400"
                                    style={{ width: `${rating.score * 20}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm md:text-base">
                                  {rating.score}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {section.reviews.map((review, idx) => (
                        <div
                          key={idx}
                          className="border space-y-6 shadow-lg px-4 md:px-6 py-4 md:py-6 rounded-xl"
                        >
                          <div className="border-b-2 flex justify-between pb-3">
                            <div className="flex items-center gap-5">
                              <img
                                src="/images/Resort..webp"
                                alt="User"
                                className="w-12 md:w-16 rounded-full h-12 md:h-16"
                              />
                              <div>
                                <h4 className="font-bold text-base md:text-lg">
                                  {review.user}
                                </h4>
                                <p className="text-xs md:text-sm">
                                  {review.date}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center text-yellow-300">
                              {[...Array(review.rating)].map((_, i) => (
                                <FaStar key={i} />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm md:text-base">
                            {review.review}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="text-sm md:text-lg eigth-child-add-reviews space-y-5 border shadow-lg px-5 py-6 rounded-xl sm:px-7 sm:py-8">
                <h3 className="font-bold  hover:text-orange-400 duration-100 ">
                  Add a Review
                </h3>
                <div className="space-y-5 border-b pb-5">
                  <div className="grid text-xs md:text-sm grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="flex items-center gap-5">
                      <p className="flex-shrink-0">Price</p>
                      <div className="flex items-center text-yellow-300">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                        <FaStar />
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="flex-shrink-0">Safety</p>
                      <div className="flex items-center text-yellow-300">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                        <FaStar />
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="flex-shrink-0">Accessibility</p>
                      <div className="flex items-center text-yellow-300">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                        <FaStar />
                      </div>
                    </div>
                  </div>

                  <div className="grid text-xs md:text-sm  grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="flex items-center gap-5">
                      <p className="flex-shrink-0">Services</p>
                      <div className="flex items-center text-yellow-300">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                        <FaStar />
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="flex-shrink-0">Entertainment</p>
                      <div className="flex items-center text-yellow-300">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                        <FaStar />
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="flex-shrink-0">Support</p>
                      <div className="flex items-center text-yellow-300">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Leave-feedBack space-y-3">
                  <h3 className="font-bold text-sm md:text-lg hover:text-orange-400 duration-100 ">
                    Leave Feedback
                  </h3>
                  <div className="space-y-5">
                    <div className="flex text-xs md:text-sm  flex-col gap-5 w-full sm:flex-row">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="border w-full px-5 rounded-lg py-4"
                      />
                      <input
                        type="text"
                        placeholder="Email address"
                        className="border w-full px-5 rounded-lg py-4"
                      />
                    </div>
                    <div>
                      <textarea
                        id="description"
                        name="description"
                        className="w-full text-xs md:text-sm  h-20 md:min-h-40 p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 hover:border-blue-200"
                        placeholder="Your Comment"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="flex hover:bg-gray-200 hover:text-black px-5 py-3 rounded-lg font-bold items-center gap-3 bg-black text-white text-sm md:text-lg">
                      Submit review <IoMdArrowForward />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side  lg:col-span-2 text-xs md:text-sm ">
              <div className="  space-y-11">
                <div className="child1 space-y-5 bg-white border shadow-lg rounded-lg">
                  <div className="bg-gray-100 text-sm md:text-lg font-bold py-3 px-4 rounded-t-lg">
                    Booking Form
                  </div>

                  <div className="px-4 border-b pb-3">
                    <div className="flex items-center space-x-4">
                      <h6 className="text-gray-700  font-bold">From:</h6>
                      <div className="relative w-full">
                        <input
                          type="text"
                          aria-label="Date input"
                          className="w-full focus:outline-none border py-2 px-4 rounded-md shadow-sm"
                        />
                        <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 border-b pb-3">
                    <div className="flex items-center justify-between space-x-4">
                      <h6 className="text-gray-700 font-bold">Time:</h6>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <input type="radio" name="time" id="time-12" />
                          <label htmlFor="time-12">12:00</label>
                        </div>
                        <div className="flex items-center gap-1">
                          <input type="radio" name="time" id="time-17" />
                          <label htmlFor="time-17">17:00</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 border-b pb-3">
                    <div className="space-y-4">
                      <h6 className="text-gray-700 font-bold">Tickets:</h6>
                      <div className="flex items-center justify-between">
                        <p>Adult (18+ Years)</p>
                        <p>$42.50</p>
                        <div className="flex items-center">
                          <p>01</p>
                          <IoIosArrowDown className="ml-2 text-gray-500" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Child (5-17 Years)</p>
                        <p>$30.00</p>
                        <div className="flex items-center">
                          <p>01</p>
                          <IoIosArrowDown className="ml-2 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 border-b pb-3">
                    <div className="space-y-4">
                      <h6 className="text-gray-700 font-bold">Add Extra:</h6>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input id="extra-1" type="checkbox" />
                          <label htmlFor="extra-1">Add service Booking</label>
                        </div>
                        <p>$32.00</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input id="extra-2" type="checkbox" />
                          <label htmlFor="extra-2">Add service Booking</label>
                        </div>
                        <p>$32.00</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pb-3 space-y-3 text-sm md:text-lg">
                    <div className="flex items-center justify-between">
                      <h6 className=" ">Total:</h6>
                      <h5 className=" font-bold">$124.00</h5>
                    </div>
                    <button className="bg-black text-yellow-300 rounded-lg py-4 w-full text-center font-bold hover:bg-yellow-500 hover:text-black transition-all">
                      Book Now
                    </button>
                    <div className="flex items-center gap-2 justify-center text-gray-700">
                      <FaUser />
                      <p>Need Some Help?</p>
                    </div>
                  </div>
                </div>

                <div className="child2 bg-white space-y-5 border text-md md:text-lg shadow-lg rounded-lg px-4 py-6">
                  <h3 className="text-gray-700 font-bold  ">Popular Tours</h3>
                  <div className="space-y-8">
                    {tours.map((tour, index) => (
                      <div key={index} className="flex gap-4  ">
                        <div>
                          <img
                            src={tour.image}
                            alt={tour.title}
                            className="max-w-24 max-h-24 rounded object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between ">
                          <h4 className=" text-gray-800 text-sm font-bold">
                            {tour.title}
                          </h4>
                          <p className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="text-gray-800 font-semibold">
                              ${tour.price.toFixed(2)}
                            </span>
                            <span className="line-through text-gray-400">
                              ${tour.originalPrice.toFixed(2)}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="child3">
                  <img
                    src="/images/Resort..webp"
                    alt=""
                    className="w-full rounded-lg  "
                  />
                </div>
                <div className="child4">
                  <img
                    src="/images/banner-detail-2.webp "
                    alt=""
                    className="w-full rounded-lg  "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
