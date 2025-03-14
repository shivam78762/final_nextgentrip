"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaRupeeSign } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { CiStopwatch } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import Link from "next/link";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

const page = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setFaqIcon(false);
  };

  const Kashmir = {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",

    placeName: "Kashmir",

    packageOverView:
      "Welcome to Kashmir, the crown jewel of India’s northern Himalayas. Renowned for its breathtaking landscapes, lush meadows, pristine lakes, and vibrant culture, Kashmir is a destination that promises an unforgettable escape into nature’s splendor. At Next Gen India, we specialize in curating exceptional travel experiences to Kashmir, ensuring every moment of your journey is filled with awe and wonder.",
    price: 27999,
    reasons: {
      heading:
        "Kashmir is celebrated for its unparalleled beauty and diverse range of experiences. Here’s why you should consider this majestic region for your next getaway:",
      reasonParts: [
        {
          title: "Spectacular Landscapes",
          description:
            "Immerse yourself in the stunning scenery of snow-capped mountains, serene lakes, and verdant valleys.",
        },
        {
          title: "Rich Cultural Heritage",
          description:
            "Discover the unique cultural traditions, exquisite handicrafts, and delicious cuisine that define Kashmiri culture.",
        },
        {
          title: "Adventure and Relaxation",
          description:
            "Whether you seek thrilling outdoor activities or peaceful retreats, Kashmir offers something for every type of traveler.",
        },
        {
          title: "Unique Experiences",
          description:
            "Enjoy one-of-a-kind experiences such as staying in traditional houseboats, exploring ancient temples, and savoring local delicacies.",
        },
      ],
    },
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Kashmir is from March to October. Summer (April to June) offers pleasant weather, while winter (November to February) is perfect for snow sports and enjoying snow-covered landscapes.",
      },
      {
        heading: "Permits and Regulations",
        description:
          "Indian travelers do not require special permits to visit Kashmir. However, foreign nationals need to register with the Foreigners Registration Office (FRO) upon arrival.",
      },
      {
        heading: "Health and Safety",
        description:
          "Pack warm clothing if traveling during the winter months. Be prepared for high altitudes and carry essential medications. Ensure you have adequate travel insurance.",
      },
      {
        heading: "Travel Logistics",
        description:
          "Arrange your travel itinerary, including flights to Srinagar and local transfers, well in advance. We can assist you with all travel arrangements to ensure a smooth and enjoyable trip.",
      },
    ],

    exploreIsland: [
      {
        island: "Srinagar",
        attractions: [
          {
            name: "Dal Lake",
            description:
              "Famous for its serene beauty and traditional houseboats. Enjoy a Shikara ride on the lake, taking in the picturesque views of the surrounding mountains and lush gardens.",
          },
          {
            name: "Mughal Gardens",
            description:
              "Explore the stunning Mughal Gardens of Shalimar Bagh, Nishat Bagh, and Chashme Shahi. Admire the intricately designed gardens, flowing fountains, and vibrant floral displays.",
          },
          {
            name: "Old City",
            description:
              "Wander through the historic old city of Srinagar to see ancient mosques, bustling markets, and traditional Kashmiri architecture. Don’t miss the iconic Jamia Masjid and the vibrant Lal Chowk.",
          },
        ],
      },
      {
        island: "Gulmarg",
        attractions: [
          {
            name: "Gulmarg Gondola",
            description:
              "Take a ride on one of the world’s highest cable cars to reach the top of Mount Apharwat. Enjoy panoramic views of the snow-capped peaks and lush meadows.",
          },
          {
            name: "Skiing and Snowboarding",
            description:
              "In winter, Gulmarg transforms into a snow sports paradise. Experience thrilling skiing and snowboarding on its pristine slopes.",
          },
          {
            name: "Golf Course",
            description:
              "Play a round of golf at one of the highest golf courses in the world, offering spectacular views and a unique golfing experience.",
          },
        ],
      },
      {
        island: "Pahalgam",
        attractions: [
          {
            name: "Lidder River",
            description:
              "Enjoy the scenic beauty of Lidder River, which is perfect for white-water rafting and relaxing by its banks. The river adds to Pahalgam’s charm with its crystal-clear waters and lush surroundings.",
          },
          {
            name: "Aru Valley",
            description:
              "Explore the picturesque Aru Valley, known for its scenic meadows, gentle slopes, and stunning views of the surrounding peaks. It’s an ideal spot for nature walks and photography.",
          },
          {
            name: "Betaab Valley",
            description:
              "Visit Betaab Valley, named after a Bollywood movie, to witness its enchanting landscapes and enjoy a peaceful picnic amidst the natural beauty.",
          },
        ],
      },
      {
        island: "Sonamarg",
        attractions: [
          {
            name: "Thajiwas Glacier",
            description:
              "Embark on a trek to the Thajiwas Glacier, a captivating sight with its shimmering ice and stunning backdrop. The glacier trek offers an adventurous experience and breathtaking views.",
          },
          {
            name: "Sonamarg Meadows",
            description:
              "Explore the lush meadows of Sonamarg, which are perfect for nature walks, picnics, and leisurely hikes. The meadows are surrounded by towering mountains and provide a serene escape.",
          },
        ],
      },
      {
        island: "Yusmarg",
        attractions: [
          {
            name: "Yusmarg Meadows",
            description:
              "Discover the tranquil meadows of Yusmarg, often referred to as the “Meadow of Jesus,” offering serene landscapes, lush greenery, and a peaceful atmosphere ideal for relaxation and reflection.",
          },
          {
            name: "Doodh Ganga River",
            description:
              "Visit the Doodh Ganga River, known for its milky white waters and scenic surroundings. It’s a great spot for a relaxing day out and enjoying the natural beauty.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Houseboat Stays",
        description:
          "Experience traditional Kashmiri hospitality by staying in one of Srinagar’s famous houseboats on Dal Lake. Enjoy a unique and comfortable stay with beautiful views and personalized service.",
      },
      {
        title: "Local Cuisine",
        description:
          "Savor the rich flavors of Kashmiri cuisine, including dishes like Rogan Josh, Yakhni, and Gustaba. Don’t miss out on the traditional Wazwan feast, a celebration of Kashmiri culinary traditions.",
      },
      {
        title: "Shopping for Handicrafts",
        description:
          "Shop for exquisite Kashmiri handicrafts such as Pashmina shawls, Kashmiri carpets, and intricate wooden carvings. Explore local markets in Srinagar and other towns for unique souvenirs.",
      },
      {
        title: "Cultural Tours",
        description:
          "Engage in cultural tours to learn about Kashmiri traditions, including visits to historic temples, local festivals, and traditional music performances.",
      },
    ],
    inclusions: [
      "Accommodation: Stay in high-end properties such as The Lalit Grand Palace, Taj Vivanta, and Khyber Himalayan Resort & Spa, offering luxurious amenities, stunning views, and exceptional service.",
      "Boutique Hotels: Enjoy charming boutique hotels like Hotel Hilltop, Hotel Signature, and Hotel New Shaheen, providing a blend of comfort and local character.",
      "Traditional Houseboats: Experience a stay on a traditional houseboat like Houseboat Lily of Dal Lake or New Shaheen Houseboat, offering a unique and picturesque lodging experience on Dal Lake.",
    ],
    exclusions: [
      "International/Domestic Flights: Airfare to and from your destination is usually not included.",
      "Personal Expenses: Any personal purchases like souvenirs, laundry, or additional meals outside of the package.",
      "Travel Insurance: It is advisable to have travel insurance, but it is not typically included.",
      "Additional Activities: Activities not mentioned in the package may incur extra charges.",
      "Health Services: Advanced medical facilities may not be available, and specialized treatments are excluded.",
    ],

    Accommodation: [
      {
        heading: "Luxury Hotels and Resorts:",
        AccommodationList:
          " Stay in high-end properties such as The Lalit Grand Palace, Taj Vivanta, and Khyber Himalayan Resort &amp; Spa, offering luxurious amenities,stunning views, and exceptional service.",
      },
      {
        heading: "Boutique Hotels",
        AccommodationList:
          "Enjoy charming boutique hotels like Hotel Hilltop, Hotel Signature, and Hotel New Shaheen, providing a blend of comfort and local character.",
      },
      {
        heading: "Traditional Houseboats:",
        AccommodationList:
          "Experience a stay on a traditional houseboat like Houseboat Lily of Dal Lake or New Shaheen Houseboat, offering a unique and picturesque lodging experience on Dal Lake ",
      },
    ],
  };

  return (
    <>
      <section className="px-5 sm:px-5 md:px-10 lg:px-20 py-8">
        <div className="flex flex-col gap-5 ">
          <div>
            <ul className="text-xs flex items-center flex-wrap gap-2">
              <li className="flex items-center gap-1 text-blue-900">
                Home <MdKeyboardArrowRight />
              </li>
              <li className="flex items-center gap-1 text-blue-900">
                Holidays <MdKeyboardArrowRight />
              </li>
              <li className="flex items-center gap-1 text-blue-900">
                {Kashmir.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE {Kashmir.placeName && Kashmir.placeName}
                </h2>
                <div className="font-bold flex items-center gap-2 text-sm">
                  <span> 3 Nights / 4 Days</span>
                  <span className="bg-[#FFF6A4] hidden lg:block text-[#9F7A34] px-3 py-2 rounded-full text-xs">
                    Land Only
                  </span>
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-500">
                1N Cochin/ 2N Agatti
              </h3>
            </div>
            <span className="bg-[#FFF6A4] lg:hidden text-[#9F7A34] text-nowrap  px-3 py-2 rounded-full text-xs">
              Land Only
            </span>
          </div>
        </div>

        <div className="second-section grid grid-cols-1  lg:grid-cols-3 mt-3 gap-y-8 lg:mt-8 lg:gap-10">
          <div className="firstleft col-span-2 flex flex-col gap-y-4 lg:gap-8">
            <div className="md:h-60 lg:h-96">
              <img
                src={Kashmir.exolreImage}
                alt={Kashmir.placeName}
                className="w-[100%] h-[100%] "
              />
            </div>

            <div className="Btns-and-links flex items-center gap-3 whitespace-nowrap overflow-x-auto text-gray-400">
              <Link
                href="#package-overView "
                className="px-5 py-2 hover:bg-[#2196f3] hover:text-white rounded-full border"
              >
                Overview
              </Link>
              <Link
                href="#topPlaces"
                className="px-5 py-2 hover:bg-[#2196f3] hover:text-white rounded-full border"
              >
                Top Tourist Places
              </Link>
              {Kashmir.inclusion && (
                <Link
                  href="#ExclusionsInclusions"
                  className="px-5 py-2 hover:bg-[#2196f3] hover:text-white rounded-full border"
                >
                  Inclusion/Exclusions
                </Link>
              )}

              <Link
                href="#"
                className="px-5 py-2 hover:bg-[#2196f3] hover:text-white rounded-full border"
              >
                Additional Info
              </Link>
              <Link
                href="#BestTimetoVisit"
                className="px-5 py-2 hover:bg-[#2196f3] hover:text-white rounded-full border"
              >
                Best Time to Visit {Kashmir.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Kashmir.packageOverView}</p>
            </div>
            {Kashmir.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Kashmir.exploreHotle}
                      alt=""
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </figure>
                  <div className="all-Details flex flex-col gap-5">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5">
                      <h6 className="font-bold text-gray-600">
                        THE DUNES CONTINENTAL or similar
                      </h6>
                      <div className="flex items-center gap-1 text-yellow-500 text-xs">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                    {Kashmir.Accommodation &&
                      Kashmir.Accommodation.map((elm, index) => (
                        <div
                          key={index}
                          className="text-sm flex flex-col gap-1 text-justify"
                        >
                          <h2 className="font-bold">{elm.heading}</h2>
                          <p className="text-gray-700">
                            {elm.AccommodationList}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            <div className="Day Wise Itinerary flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
              <h3 className="font-bold">Day Wise Activities and Experiences</h3>
              <div className="flex flex-col items-center gap-5">
                {Kashmir.activities &&
                  Kashmir.activities.map((activity, index) => (
                    <div
                      key={index}
                      className="day-1 flex flex-col items-center lg:flex-row gap-9 lg:items-start"
                    >
                      <div className=" font-bold  bg-[#2196F3] w-full lg:w-fit   flex justify-center gap-3 items-center text-white px-5 py-3 text-[0.8rem]   rounded-full">
                        <h4>Activity</h4> <span>{index + 1}</span>
                      </div>
                      <div className="flex flex-col gap-4 border rounded-xl">
                        <h3 className="bg-[#D3ECFF] px-3 py-2 rounded-xl font-bold text-sm text-slate-600">
                          {activity.title}
                        </h3>
                        <div className="flex items-start gap-3 px-3">
                          <FaCheck className="text-green-700" />
                          <p className="text-base leading-relaxed text-gray-700">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {Kashmir.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Kashmir.inclusions &&
                      Kashmir.inclusions.map((inclusion, index) => (
                        <p
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <FaCheck className="text-green-700 text-sm" />
                          {inclusion}
                        </p>
                      ))}
                  </div>
                </div>
                <div className="border bg-[#FBEBEB] rounded-xl  px-3 py-2 flex flex-col gap-5">
                  <h3 className="font-bold">Exclusions</h3>
                  <div className="overflow-x-hidden h-40 exclusions   overflow-scroll flex flex-col gap-2">
                    {Kashmir.exclusions &&
                      Kashmir.exclusions.map((exclusion, index) => (
                        <p
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <RxCross2 className="text-red-700  " />
                          {exclusion}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* best time to visit  */}
            {Kashmir.seasons && (
              <div
                id="BestTimetoVisit"
                className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
              >
                <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
                  Best Time to Visit {Kashmir.placeName}
                </h2>
                <ul className="space-y-6">
                  {Kashmir.seasons.map((season, index) => (
                    <li
                      key={index}
                      className="border border-gray-200 rounded-lg shadow-lg"
                    >
                      <div className="p-4 space-y-4">
                        <h3 className="text-md font-semibold text-gray-600 mb-3">
                          {season.mainHeading}
                        </h3>
                        {season.list.map((item, i) => (
                          <p key={i} className="mb-2 text-md text-gray-600">
                            <strong className="text-gray-800">
                              {item.heading}
                            </strong>{" "}
                            {item.desc}
                          </p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* best time  to visit end  */}

            <div className=" flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-md">
              <h3 className="font-bold " id="topPlaces">
                Top Tourist Places and Attractions
              </h3>
              {Kashmir.exploreIsland.map((island, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 border rounded-md mb-4"
                >
                  <h3 className="bg-[#D3ECFF] px-3 py-2 rounded-md font-bold text-sm text-slate-600">
                    {island.island}
                  </h3>

                  {island.attractions.map((attraction, idx) => (
                    <div key={idx} className="flex items-start px-3">
                      <ul className="  ">
                        <li className="list-disc lg:flex flex-col  list-inside  text-gray-800 font-bold">
                          {attraction.name} :{" "}
                          <span className="text-base leading-relaxed text-gray-700 font-normal ">
                            {attraction.description}
                          </span>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {Kashmir.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Kashmir.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Kashmir.TravelTips.map((elm, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md"
                      >
                        <h3 className="text-gray-800 font-bold  mb-4">
                          {elm.heading}
                        </h3>
                        <p className="text-base leading-relaxed text-gray-700 font-normal">
                          {elm.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <div className="why  flex flex-col gap-5 px-5">
              <h4 className="font-bold text-xl">Why {Kashmir.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>{Kashmir.reasons && Kashmir.reasons.heading}</p>
                <div className="flex flex-col gap-3">
                  {Kashmir.reasons &&
                    Kashmir.reasons.reasonParts.map((reason, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <FaCheck className="text-green-700" />
                        <div>
                          <strong>{reason.title}:</strong> {reason.description}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* faq  */}
            {Kashmir.faqData && (
              <section id="faq" className="py-6 ">
                <div className="container mx-auto px-4">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    FAQs About Traveling to {Kashmir.placeName}
                  </h2>
                  {Kashmir.faqData.map((faq, index) => (
                    <div
                      key={index}
                      className=" mb-4 border-b border-gray-300 pb-4 border flex flex-col justify-center py-5 px-3 rounded"
                    >
                      <h3
                        className={`text-lg flex justify-between items-center font-semibold cursor-pointer text-gray-600 hover:text-amber-900 transition-colors duration-300 ${
                          expandedIndex === index && "text-amber-900"
                        }`}
                        onClick={() => toggleAnswer(index)}
                      >
                        {index + 1}. {faq.question}{" "}
                        <span>
                          {" "}
                          {expandedIndex === index ? (
                            <TiMinus />
                          ) : (
                            <TiPlus />
                          )}{" "}
                        </span>
                      </h3>

                      <ul
                        className={`${
                          expandedIndex === index
                            ? "h-max md:max-h-[300px]"
                            : "h-0 overflow-hidden"
                        } list-disc pl-6 mt-5 text-gray-700 space-y-2  duration-500`}
                      >
                        {faq.answers.map((answer, i) => (
                          <li key={i} className="text-md">
                            {answer}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* faq end  */}
          </div>

          <div className="secondFixedCardRight   ">
            <div className="price-help-card flex flex-col gap-6 items-center overflow-hidden w-full  sticky top-28">
              <div className="border-2 border-gray-200 rounded-xl flex flex-col shadow-sm bg-white w-[100%]">
                <div className="price-box bg-[#D2EBFF] px-6 py-4 rounded-t-xl">
                  <span className="text-sm text-gray-600">Starting from</span>
                  <p className="flex items-center gap-2 line-through text-sm text-gray-500 mt-1">
                    <FaRupeeSign className="text-sm" />
                    <span>
                      {(Kashmir.price + 1122).toLocaleString("en-IN")}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Kashmir.price
                      ? Kashmir.price.toLocaleString("en-IN")
                      : "Price not available"}{" "}
                    <span className="text-xs font-normal ml-1">per person</span>
                  </p>
                  <div className="text-sm  flex items-center gap-2 text-gray-700 mt-3">
                    <GiTakeMyMoney className="text-xl text-green-500" />
                    <p className="flex items-center gap-1">
                      No Cost EMI Starts from ₹ 4,590
                      <span className="text-[#2196F3] font-bold cursor-pointer">
                        see options
                      </span>
                    </p>
                  </div>
                </div>
                <div className="py-3 px-4 flex justify-center items-center bg-white rounded-b-xl">
                  <button className="uppercase text-white bg-[#2196F3] hover:bg-[#1976D2] w-full py-2 rounded-full font-bold text-sm transition-colors duration-300">
                    Submit Your Query
                  </button>
                </div>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-4 shadow-sm bg-white flex flex-col gap-4  w-[100%]">
                <div className="duration-box space-y-3">
                  <p className="flex items-center gap-2 text-sm text-gray-700">
                    <CiStopwatch className="text-red-500 text-lg" />
                    <span className="font-medium">
                      Duration: 3 Nights & 4 Days
                    </span>
                  </p>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <MdOutlinePlace className="text-red-500 text-lg" />
                    <p className="flex items-center gap-2">
                      <span className="font-bold">Places to Visit:</span>
                      <span className="text-xs font-bold text-slate-700">
                        1N Cochin / 2N Agatti
                      </span>
                    </p>
                  </div>
                  <div className="text-sm flex items-center gap-2 text-gray-700">
                    <GiTakeMyMoney className="text-xl text-green-500" />
                    <p className="flex items-center gap-1">
                      No Cost EMI Starts from ₹ 4,590
                      <span className="text-[#2196F3] font-bold cursor-pointer">
                        see options
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2    border-gray-200 rounded-xl p-4 shadow-sm bg-white flex items-start gap-4  w-[100%]">
                <div className="pt-2">
                  <TbPhoneCall />
                </div>
                <div className="">
                  <h3 className="">Need Help ?</h3>
                  <p>
                    <span className="font-semibold"> call us : </span>9877579319
                  </p>
                  <p>
                    <span className="font-semibold"> Mail us : </span>
                    NextGenindia@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
