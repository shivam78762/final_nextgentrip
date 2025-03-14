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
  };

  const   Dubai= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Dubai",
  
    seasons:[
      {
        "mainHeading": "November to March.:",
        "list": [
          {
            "heading": "Weather:",
            "desc": "During this period, the weather is much more comfortable, with temperatures ranging from around 20°C to 30°C (68°F to 86°F), making it ideal for outdoor activities and sightseeing."
          },
          {
            "heading": "experiencing:",
            "desc": "Dubai’s famous events and festivals, consider visiting in January or February when events like the Dubai Shopping Festival take place. However, if you’re a fan of warmer weather and don’t mind the heat, you could visit in the summer months (June to August), but be prepared for high temperatures, often exceeding 40°C (104°F)."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Keep in mind that Dubai can be quite crowded and more expensive during the peak tourist season,so planning ahead and booking accommodations early can be beneficial."
          }
        ]
      },
     
    ],
    
    faqData:[
      {
        "question": "What is the best time to visit Dubai?",
        "answers": [
          "The best time to visit Dubai is from November to March.During these months, the weather is cooler and more comfortable for outdoor activities, withtemperatures ranging from 20°C to 30°C (68°F to 86°F). Summer months can be extremely hot,with temperatures often exceeding 40°C (104°F)."
        ]
      },
      {
        "question": "Do I need a visa to travel to Dubai?",
        "answers": [
          "Visa requirements depend on your nationality. Many travelers can obtain a visa on arrival or apply for an e-visa online. It’s best to check the latest visa requirements with the UAE embassy or consulate before your trip."
        ]
      },
      {
        "question": "What is the local currency, and can I use credit cards?",
        "answers": [
          "The local currency is the United Arab Emirates Dirham (AED). Credit and debit cards are widely accepted in Dubai, but it’s always a good idea to carry some cash for smaller purchases and local markets."
        ]
      },
      {
        "question": "What are the top attractions to visit in Dubai?",
        "answers": [
          "Popular attractions include the Burj Khalifa,Dubai Mall, Dubai Marina, Palm Jumeirah, and the Dubai Desert Conservation Reserve. Don’t miss the Dubai Fountain show and a visit to the historic Al Fahidi Neighborhood."
        ]
      },
      {
        "question": "Are there any cultural norms I should be aware of?",
        "answers": [
          "Dubai is a modern and cosmopolitan city, but it’s important to respect local customs. Dress modestly, especially in public places and religious sites. Public displays of affection are frowned upon, and it&#39;s advisable to avoid loud behavior and excessive public drinking."
        ]
      },
      {
        "question": " Is Dubai safe for tourists?",
        "answers": [
          "Dubai is generally considered very safe for tourists. The crime rate is low, and the city is known for its strict laws and regulations. However, it’s always wise to follow standard travel safety practices and stay informed about local regulations."
        ]
      },
      {
        "question": " What type of accommodation is available in Dubai?",
        "answers": [
          "Dubai offers a wide range of accommodation options, from luxurious 5-star hotels to budget-friendly hostels and serviced apartments. Areas like Downtown Dubai and Dubai Marina are popular among tourists."
        ]
      },
      {
        "question": " What should I pack for a trip to Dubai?",
        "answers": [
          "Pack lightweight and breathable clothing for the cooler months and appropriate layers for warmer months. Don’t forget sun protection like hats, sunglasses, and sunscreen. If you plan to visit religious sites, bring modest clothing."
        ]
      },
      {
        "question": " Are there any local dishes or foods I should try?",
        "answers": [
          "Dubai offers a rich array of culinary experiences. Try local dishes such as shawarma, hummus, falafel, and traditional Emirati dishes like Al Harees and Al Machboos. The city’s diverse food scene also includes international cuisines."
        ]
      }
    ],
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          " The ideal time to visit Dubai is from November to April when the weather is cooler and more pleasant for outdoor activities.",
      },
      {
        heading: "Local Transport",
        description:
          "Utilize Dubai’s efficient public transport system, including the Metro, buses, and taxis. Consider using ride-hailing apps for convenience.",
      },
      {
        heading: "Dress Code",
        description:
          "Dress modestly in public areas, respecting local customs. Swimwear is appropriate at the beach and pool areas.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated and use sunscreen to protect against the sun. Be cautious with street food and ensure you have travel insurance for a safe and enjoyable trip.",
      },
    ],
    exploreIsland: [
      {
        island: "Havelock Island",
        attractions: [
          {
            name: "Radhanagar Beach",
            description:
              "Renowned for its stunning sunsets and pristine sands, this beach is often listed among the best in Asia. The clear, calm waters are perfect for swimming and relaxation.",
          },
          {
            name: "Elephant Beach",
            description:
              "Accessible by a short boat ride, Elephant Beach is famous for its vibrant coral reefs and is ideal for snorkeling.",
          },
          {
            name: "Kalapathar Beach",
            description:
              "A quieter beach offering panoramic views and a perfect spot for a peaceful retreat.",
          },
        ],
      },
      {
        island: "Neil Island",
        attractions: [
          {
            name: "Laxmanpur Beach",
            description:
              "Known for its serene atmosphere and stunning coral formations. Laxmanpur Beach is a great spot for a leisurely stroll and sunset views.",
          },
          {
            name: "Bharatpur Beach",
            description:
              "Ideal for water sports and snorkeling, Bharatpur Beach boasts shallow waters and rich marine life.",
          },
          {
            name: "Sitapur Beach",
            description:
              "Less frequented, this beach offers a tranquil environment and beautiful sunrise views.",
          },
        ],
      },
      {
        island: "Port Blair",
        attractions: [
          {
            name: "Cellular Jail",
            description:
              "A historical monument that stands as a testament to India’s freedom struggle. Explore the jail’s museum and learn about its poignant history through guided tours and light-and-sound shows.",
          },
          {
            name: "Corbyn’s Cove Beach",
            description:
              "A popular beach close to the city, offering a range of water activities and picturesque views.",
          },
          {
            name: "Chidiya Tapu",
            description:
              "Known as the 'Bird Island,' it’s a paradise for bird watchers and nature enthusiasts. The sunset views here are breathtaking.",
          },
        ],
      },
      {
        island: "Baratang Island",
        attractions: [
          {
            name: "Limestone Caves",
            description:
              "Marvel at the unique limestone formations created over millennia. A boat ride through mangroves and a short trek lead to these fascinating caves.",
          },
          {
            name: "Mud Volcanoes",
            description:
              "Witness rare geological formations where mud erupts from the earth’s surface, creating an unusual and intriguing landscape.",
          },
        ],
      },
      {
        island: "Middle and South Dubai",
        attractions: [
          {
            name: "Wandoor Beach",
            description:
              "Part of the Mahatma Gandhi Marine National Park, Wandoor Beach is ideal for swimming and offers access to beautiful coral reefs.",
          },
          {
            name: "Rangat",
            description:
              "Explore the lush green forests, serene beaches, and visit the beautiful Amkunj Beach for a quieter experience.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Scuba Diving and Snorkeling",
        description:
          "Dive into the vibrant underwater world of the Andamans with dive sites such as North Reef and South Button offering mesmerizing coral gardens and diverse marine life.",
      },
      {
        title: "Kayaking and Canoeing",
        description:
          "Glide through the serene mangrove forests and explore the hidden waterways, especially around Havelock and Neil Islands.",
      },
      {
        title: "Trekking and Nature Walks",
        description:
          "Embark on treks through dense forests and scenic trails, including the trek to Mount Harriet for panoramic views of the archipelago.",
      },
    ],
 
    reasons: {
      heading:
        "Dubai is renowned for its incredible contrasts and world-class attractions. Here’s why Dubai should be your next travel destination:",
      reasonParts: [
        {
          title: "Iconic Architecture",
          description:
            "Marvel at the world’s tallest buildings, innovative designs, and luxurious resorts.",
        },
        {
          title: "Vibrant Culture",
          description:
            "Experience the fusion of traditional Arabian culture with modern cosmopolitan life.",
        },
        {
          title: "Luxurious Shopping and Dining",
          description:
            "Enjoy high-end shopping at lavish malls and dine in some of the most prestigious restaurants globally.",
        },
        {
          title: "Adventure and Relaxation",
          description:
            "From thrilling desert safaris to tranquil beach resorts, Dubai offers a diverse range of activities.",
        },
      ],
    },
   
    packageOverView:
      "Welcome to Dubai, a dazzling city where futuristic architecture, luxurious experiences, and rich cultural heritage blend seamlessly. As a global hub for innovation and opulence, Dubai offers an unparalleled travel experience, from its towering skyscrapers to its golden deserts. Whether you are seeking adventure, relaxation, or a taste of luxury, Dubai caters to every traveler&#39;s dream. At Next Gen India, we specialize in crafting bespoke travel itineraries that showcase the best of this extraordinary city. Let us take you through Dubai’s top destinations, must-see attractions, and unique experiences that make it a premier travel destination.",
    price: 22999,
  }

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
                {Dubai.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE {Dubai.placeName && Dubai.placeName}
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
                src={Dubai.exolreImage}
                alt={Dubai.placeName}
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
              {Dubai.inclusion && (
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
                Best Time to Visit {Dubai.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Dubai.packageOverView}</p>
            </div>
            {Dubai.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Dubai.exploreHotle}
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
                    {Dubai.Accommodation &&
                      Dubai.Accommodation.map((elm, index) => (
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
                {Dubai.activities &&
                  Dubai.activities.map((activity, index) => (
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

            {Dubai.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Dubai.inclusions &&
                      Dubai.inclusions.map((inclusion, index) => (
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
                    {Dubai.exclusions &&
                      Dubai.exclusions.map((exclusion, index) => (
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
            {Dubai.seasons && (
              <div
                id="BestTimetoVisit"
                className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
              >
                <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
                  Best Time to Visit {Dubai.placeName}
                </h2>
                <ul className="space-y-6">
                  {Dubai.seasons.map((season, index) => (
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
              {Dubai.exploreIsland.map((island, index) => (
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

            {Dubai.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Dubai.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Dubai.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Dubai.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>{Dubai.reasons && Dubai.reasons.heading}</p>
                <div className="flex flex-col gap-3">
                  {Dubai.reasons &&
                    Dubai.reasons.reasonParts.map((reason, index) => (
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
            {Dubai.faqData && (
              <section id="faq" className="py-6 ">
                <div className="container mx-auto px-4">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    FAQs About Traveling to {Dubai.placeName}
                  </h2>
                  {Dubai.faqData.map((faq, index) => (
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
                        className={`overflow-hidden list-disc pl-6  text-gray-700 transition-all duration-500 ease-in-out ${
                          expandedIndex === index
                            ? "max-h-[300px] opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
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
                    <span>{(Dubai.price + 1122).toLocaleString("en-IN")}</span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Dubai.price
                      ? Dubai.price.toLocaleString("en-IN")
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
