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
    setFaqIcon(false)
  };

 const Kerala= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",

    placeName: "Kerala",

    packageOverView:
      "Welcome to Kerala, a tropical paradise known as “God’s Own Country,” where lush landscapes,serene backwaters, and rich cultural heritage come together to create an unforgettable travel experience. From pristine beaches and verdant hill stations to vibrant festivals and delectable cuisine, Kerala offers something for every traveler. At Next Gen India, we specialize in crafting bespoke travel itineraries to help you explore the best of Kerala. Let us guide you through Kerala’stop destinations, attractions, and unique experiences.",
    price: 28999,
    reasons: {
      heading:
        "Kerala is renowned for its diverse offerings and natural beauty. Here’s why Kerala should be on your travel list:",
      reasonParts: [
        [
          {
            title: "Natural Wonders",
            description:
              "Experience the breathtaking landscapes of beaches, backwaters, hill stations, and lush plantations.",
          },
          {
            title: "Cultural Richness",
            description:
              "Immerse yourself in Kerala’s vibrant culture through its festivals, traditional dance forms, and local cuisine.",
          },
          {
            title: "Relaxation and Wellness",
            description:
              "Enjoy world-class Ayurvedic treatments and wellness retreats in serene surroundings.",
          },
          {
            title: "Adventure and Exploration",
            description:
              "Engage in various outdoor activities, including trekking, wildlife safaris, and water sports.",
          },
        ],
      ],
    },
    TravelTips: [
      [
        {
          heading: "Best Time to Visit",
          description:
            "The ideal time to visit Kerala is from October to March when the weather is pleasant and conducive to outdoor activities.",
        },
        {
          heading: "Local Transport",
          description:
            "Utilize local taxis, auto-rickshaws, and buses to navigate between destinations. Consider hiring a private car for added convenience.",
        },
        {
          heading: "Dress Code",
          description:
            "Wear lightweight, breathable clothing suitable for the tropical climate. Comfortable shoes are recommended for sightseeing.",
        },
        {
          heading: "Health and Safety",
          description:
            "Stay hydrated, use sunscreen, and be cautious with street food. Ensure you have travel insurance for a safe and enjoyable trip.",
        },
      ],
    ],

    exploreIsland: [
      {
        island: "Alleppey (Alappuzha)",
        attractions: [
          {
            name: "Backwater Cruises",
            description:
              "Glide through the tranquil backwaters of Alleppey on a traditional houseboat. Enjoy the picturesque scenery of lush paddy fields, coconut groves, and local village life.",
          },
          {
            name: "Kuttanadu Region",
            description:
              "Explore the scenic Kuttanadu region, known as the 'Venice of the East,' and experience the unique lifestyle of the people living below sea level.",
          },
          {
            name: "Alleppey Beach",
            description:
              "Relax on the sandy shores of Alleppey Beach, known for its beautiful sunsets and serene atmosphere.",
          },
        ],
      },
      {
        island: "Munnar",
        attractions: [
          {
            name: "Tea Gardens",
            description:
              "Wander through the sprawling tea plantations of Munnar and visit the Tea Museum to learn about the tea-making process.",
          },
          {
            name: "Anamudi Peak",
            description:
              "Trek to Anamudi Peak, the highest point in South India, offering panoramic views of the Western Ghats.",
          },
          {
            name: "Attukal Waterfalls",
            description:
              "Visit Attukal Waterfalls, a stunning cascade surrounded by lush greenery, perfect for a refreshing dip.",
          },
        ],
      },
      {
        island: "Kochi (Cochin)",
        attractions: [
          {
            name: "Fort Kochi",
            description:
              "Explore the historic Fort Kochi area, known for its colonial architecture, Chinese fishing nets, and vibrant arts scene.",
          },
          {
            name: "Jew Town",
            description:
              "Visit Jew Town, home to the historic Paradesi Synagogue and a bustling antique market.",
          },
          {
            name: "Mattancherry Palace",
            description:
              "Discover the Mattancherry Palace, also known as the Dutch Palace, renowned for its beautiful murals and historical artifacts.",
          },
        ],
      },
      {
        island: "Kumarakom",
        attractions: [
          {
            name: "Vembanad Lake",
            description:
              "Enjoy a tranquil houseboat cruise on Vembanad Lake, the largest lake in Kerala, and experience the beauty of the surrounding backwaters.",
          },
          {
            name: "Bird Sanctuary",
            description:
              "Visit the Kumarakom Bird Sanctuary, a haven for birdwatchers, and spot various migratory and resident bird species.",
          },
          {
            name: "Traditional Kerala Cuisine",
            description:
              "Savor traditional Kerala dishes at local eateries and resorts, featuring fresh seafood and authentic flavors.",
          },
        ],
      },
      {
        island: "Wayanad",
        attractions: [
          {
            name: "Edakkal Caves",
            description:
              "Explore the Edakkal Caves, famous for their ancient petroglyphs and rock engravings.",
          },
          {
            name: "Pookode Lake",
            description:
              "Visit Pookode Lake, a serene freshwater lake surrounded by lush forests, perfect for boating and picnicking.",
          },
          {
            name: "Soochipara Waterfalls",
            description:
              "Marvel at the majestic Soochipara Waterfalls, a three-tiered waterfall nestled in the Western Ghats.",
          },
        ],
      },
      {
        island: "Thekkady",
        attractions: [
          {
            name: "Periyar Wildlife Sanctuary",
            description:
              "Go on a jungle safari in Periyar Wildlife Sanctuary, home to elephants, tigers, and a variety of bird species.",
          },
          {
            name: "Spice Plantations",
            description:
              "Tour the spice plantations and learn about the cultivation of cardamom, pepper, and other spices.",
          },
          {
            name: "Bamboo Rafting",
            description:
              "Experience bamboo rafting on the Periyar Lake and enjoy the scenic beauty of the sanctuary.",
          },
        ],
      },
      {
        island: "Varkala",
        attractions: [
          {
            name: "Varkala Beach",
            description:
              "Relax on Varkala Beach, known for its dramatic cliffs, golden sands, and vibrant beachside atmosphere.",
          },
          {
            name: "Papanasam Beach",
            description:
              "Visit Papanasam Beach, a sacred beach with religious significance, believed to have cleansing properties.",
          },
          {
            name: "Janardanaswamy Temple",
            description:
              "Explore the Janardanaswamy Temple, a historic Hindu temple located near the beach.",
          },
        ],
      },
      {
        island: "Kovalam",
        attractions: [
          {
            name: "Lighthouse Beach",
            description:
              "Enjoy the scenic beauty of Lighthouse Beach, known for its iconic lighthouse and lively beach scene.",
          },
          {
            name: "Hawa Beach",
            description:
              "Relax on Hawa Beach, a less crowded beach with a relaxed atmosphere and beautiful sunsets.",
          },
          {
            name: "Ayurvedic Treatments",
            description:
              "Indulge in rejuvenating Ayurvedic treatments at one of Kovalam’s renowned wellness centers.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Ayurvedic Wellness Retreats",
        description:
          "Rejuvenate with authentic Ayurvedic treatments and therapies at top wellness resorts and spas in Kerala.",
      },
      {
        title: "Traditional Festivals",
        description:
          "Experience Kerala’s vibrant festivals, including Onam, Vishu, and Thrissur Pooram, with colorful processions, traditional performances, and local festivities.",
      },
      {
        title: "Cooking Classes",
        description:
          "Join a cooking class to learn how to prepare traditional Kerala dishes, including favorites like Kerala Sadya and Fish Moilee.",
      },
    ],
  }

 
//   const Kerala = ExploreCities[explore];
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
                {Kerala.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Kerala.placeName &&
                    Kerala.placeName}
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
                src={Kerala.exolreImage}
                alt={Kerala.placeName}
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
              {Kerala.inclusion && (
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
                Best Time to Visit {Kerala.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Kerala.packageOverView}</p>
            </div>
            {Kerala.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Kerala.exploreHotle}
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
                    {Kerala.Accommodation &&
                      Kerala.Accommodation.map((elm, index) => (
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
                {Kerala.activities &&
                  Kerala.activities.map((activity, index) => (
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

            {Kerala.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Kerala.inclusions &&
                      Kerala.inclusions.map((inclusion, index) => (
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
                    {Kerala.exclusions &&
                      Kerala.exclusions.map((exclusion, index) => (
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
      {Kerala.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Kerala.placeName}
  </h2>
  <ul className="space-y-6">
    {Kerala.seasons.map((season, index) => (
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
              <strong className="text-gray-800">{item.heading}</strong> {item.desc}
            </p>
          ))}
        </div>
      </li>
    ))}
  </ul>
</div>
}

           
            {/* best time  to visit end  */}

            <div className=" flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-md">
              <h3 className="font-bold " id="topPlaces">
                Top Tourist Places and Attractions
              </h3>
              {Kerala.exploreIsland.map((island, index) => (
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



            {/* faq  */}
            {Kerala.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Kerala.placeName}
                </h2>
                {Kerala.faqData.map((faq, index) => (
                  <div
                    key={index}
                    className=" mb-4 border-b border-gray-300 pb-4 border flex flex-col justify-center py-5 px-3 rounded"
                  >
                    <h3
                      className={`text-lg flex justify-between items-center font-semibold cursor-pointer text-gray-600 hover:text-amber-900 transition-colors duration-300 ${expandedIndex === index&&"text-amber-900"}`}
                      onClick={() => toggleAnswer(index)}
                    >
                      {index + 1}. {faq.question}  <span>  {expandedIndex === index?<TiMinus />:<TiPlus/>}  </span>
                    </h3>
                   
                      <ul className={`${expandedIndex === index?"h-max md:max-h-[300px]":"h-0 overflow-hidden"} list-disc pl-6 mt-5 text-gray-700 space-y-2  duration-500`}>
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
}
          
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
                      {(Kerala.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Kerala.price
                      ? Kerala.price.toLocaleString("en-IN")
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
