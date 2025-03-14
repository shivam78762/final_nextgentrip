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

  const   Singapore= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Singapore",
    seasons:[
      {
        "mainHeading": "Weather Considerations",
        "list": [
          {
            "heading": "General Climate:",
            "desc": "Singapore has a tropical climate, meaning it’s generally hot and humid throughout the year, with temperatures ranging between 25°C and 31°C (77°F to 88°F). Rain is frequent, with occasional thunderstorms."
          },
          {
            "heading": "Dry Season:",
            "desc": "The drier months are typically from February to April. During this period, you may experience slightly less rainfall, making it more pleasant for outdoor activities and sightseeing."
          }
        ]
      },
      {
        "mainHeading": "Peak Tourist Season",
        "list": [
          {
            "heading": "June to August:",
            "desc": "This period coincides with summer vacations in many countries, so Singapore may be busier, especially with international tourists. Events like the Great Singapore Sale usually take place, offering shopping enthusiasts great deals."
          },
          {
            "heading": "December:",
            "desc": "The end-of-year holiday season is also popular, with Christmas and New Year’s festivities adding to the city’s vibrant atmosphere. However, it can be crowded and more expensive due to holiday travel."
          }
        ]
      },
      {
        "mainHeading": "Shoulder Seasons",
        "list": [
          {
            "heading": "May:",
            "desc": "This month can be relatively quieter, but it’s also the start of the Southwest Monsoon season, so occasional rain showers are possible."
          },
          {
            "heading": "September to November:",
            "desc": "This period can be a good balance of fewer crowds and manageable weather. However, do note that Singapore can experience haze from nearby forest fires during these months, particularly in September and October."
          }
        ]
      },
      {
        "mainHeading": "Festivals and Events",
        "list": [
          {
            "heading": "Chinese New Year:",
            "desc": "Celebrated between late January and February, this is a vibrant time to visit if you’re interested in cultural festivities and parades."
          },
          {
            "heading": "Singapore Food Festival (July):",
            "desc": "A great time for food lovers to experience the city’s culinary scene."
          },
          {
            "heading": "Singapore Grand Prix (September):",
            "desc": "Formula 1 fans might want to visit during this exciting event, which transforms the city into a bustling racing hub."
          }
        ]
      }
    ],
    
    faqData:[
      {
        "question": "When is the best time to visit Singapore?",
        "answers": [
          "Singapore is a year-round destination, but the best time to visit is typically between February and April when the weather is slightly drier. This period offers a more comfortable climate for outdoor activities and sightseeing. However, each season has its own appeal depending on your interests and tolerance for heat and rain."
        ]
      },
      {
        "question": "Do I need a visa to travel to Singapore?",
        "answers": [
          "Visa requirements depend on your nationality. Many travelers can enter Singapore visa-free for stays of up to 30 or 90 days. Check the latest visa requirements and entry regulations with the Singaporean embassy or consulate in your country before traveling."
        ]
      },
      {
        "question": "What is the local currency in Singapore, and can I use credit cards?",
        "answers": [
          "The local currency is the Singapore Dollar (SGD). Credit and debit cards are widely accepted in most establishments, including hotels, restaurants, and shops. It’s also useful to carry some cash for smaller purchases or in places that don’t accept cards."
        ]
      },
      {
        "question": "What languages are spoken in Singapore?",
        "answers": [
          "The official languages are English, Mandarin, Malay, and Tamil. English is commonly used in business and government, so communication should be relatively easy for most travelers."
        ]
      },
      {
        "question": "What should I pack for a trip to Singapore?",
        "answers": [
          "Pack light, breathable clothing suitable for the tropical climate. Essentials include comfortable walking shoes, sunscreen, a hat, and an umbrella for sudden rain showers. If you plan to visit religious sites, bring modest clothing to respect local customs."
        ]
      },
      {
        "question": "Are there any cultural norms or customs I should be aware of?",
        "answers": [
          "Yes, Singapore is a multicultural city with strict laws. Respect local customs by dressing modestly when visiting religious sites. Avoid public displays of affection, and be mindful of local regulations, such as rules against eating or drinking on public transport."
        ]
      },
      {
        "question": "Is Singapore safe for tourists?",
        "answers": [
          "Singapore is known for being very safe for tourists, with a low crime rate and strict law enforcement. However, it’s always wise to follow standard travel safety practices, such as keeping your belongings secure and staying aware of your surroundings."
        ]
      }
    ],

    packageOverView:
      "Welcome to Singapore, a captivating city-state that perfectly blends modernity with tradition. Renowned for its stunning skyline, lush gardens, and rich cultural tapestry, Singapore offers an unparalleled travel experience. From futuristic architecture to vibrant street markets, Singapore is a city of contrasts and delights. At Next Gen India, we specialize in crafting bespoke itineraries that ensure you experience the very best of this dynamic city. Join us as we explore Singapore’s top destinations, attractions, and unique experiences.",
    price: 27999,
    reasons: {
      heading:
        "Singapore is a global metropolis known for its innovation, cleanliness, and multicultural charm. Here’s why Singapore should be your next destination:",
      reasonParts: [
        {
          title: "Iconic Landmarks",
          description:
            "Discover world-renowned landmarks, including the Marina Bay Sands and Gardens by the Bay.",
        },
        {
          title: "Cultural Diversity",
          description:
            "Experience a melting pot of cultures with diverse neighborhoods, festivals, and culinary delights.",
        },
        {
          title: "Green Spaces",
          description:
            "Enjoy the city’s beautiful parks, gardens, and waterfronts, offering a peaceful retreat from urban life.",
        },
        {
          title: "Shopping and Dining",
          description:
            "Indulge in luxury shopping and savor gourmet dining in some of the finest establishments in the world.",
        },
      ],
    },
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "Singapore enjoys a tropical climate year-round, but the best time to visit is from February to April when the weather is relatively cooler and drier.",
      },
      {
        heading: "Local Transport",
        description:
          "Utilize Singapore’s efficient public transport system, including the MRT (Mass Rapid Transit), buses, and taxis. Consider purchasing an EZ-Link card for convenient travel.",
      },
      {
        heading: "Dress Code",
        description:
          "Wear light, breathable clothing due to the hot and humid weather. Comfortable walking shoes are recommended for exploring the city.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, use sunscreen, and be cautious with street food. Singapore is known for its safety and cleanliness, but always exercise common sense.",
      },
    ],

    exploreIsland: [
      {
        island: "Marina Bay Sands",
        attractions: [
          {
            name: "SkyPark Observation Deck",
            description:
              "Visit the Marina Bay Sands SkyPark for panoramic views of Singapore’s skyline, including the city’s iconic landmarks.",
          },
          {
            name: "Infinity Pool",
            description:
              "Enjoy a swim in the world’s largest rooftop infinity pool, exclusively available to hotel guests.",
          },
          {
            name: "The Shoppes at Marina Bay Sands",
            description:
              "Explore high-end shopping, luxury boutiques, and gourmet dining options at this premier retail destination.",
          },
        ],
      },
      {
        island: "Gardens by the Bay",
        attractions: [
          {
            name: "Supertree Grove",
            description:
              "Marvel at the futuristic Supertrees, vertical gardens that light up in a spectacular display every evening.",
          },
          {
            name: "Cloud Forest & Flower Dome",
            description:
              "Wander through the Cloud Forest, featuring a towering indoor waterfall, and the Flower Dome, showcasing diverse plant species from around the world.",
          },
          {
            name: "OCBC Skyway",
            description:
              "Stroll along the elevated walkway connecting the Supertrees for a bird’s-eye view of the gardens.",
          },
        ],
      },
      {
        island: "Sentosa Island",
        attractions: [
          {
            name: "Universal Studios Singapore",
            description:
              "Experience thrilling rides and attractions at this world-famous theme park, featuring movie-themed zones and live shows.",
          },
          {
            name: "S.E.A. Aquarium",
            description:
              "Discover marine life at one of the world’s largest aquariums, home to thousands of sea creatures and interactive exhibits.",
          },
          {
            name: "Sentosa Beaches",
            description:
              "Relax on Sentosa’s sandy beaches, such as Siloso Beach, Palawan Beach, and Tanjong Beach, offering sunbathing and water sports.",
          },
        ],
      },
      {
        island: "Singapore Zoo & Night Safari",
        attractions: [
          {
            name: "Singapore Zoo",
            description:
              "Explore the Singapore Zoo, renowned for its open and naturalistic enclosures, housing a diverse range of animals.",
          },
          {
            name: "Night Safari",
            description:
              "Experience the world’s first nocturnal zoo, where you can observe animals in their natural nighttime habitats on a tram ride or walking trails.",
          },
        ],
      },
      {
        island: "Orchard Road",
        attractions: [
          {
            name: "Shopping Extravaganza",
            description:
              "Stroll along Orchard Road, Singapore’s premier shopping street, lined with luxury malls, department stores, and boutique shops.",
          },
          {
            name: "Dining and Entertainment",
            description:
              "Enjoy a range of dining options and entertainment venues, from fine dining restaurants to casual eateries.",
          },
        ],
      },
      {
        island: "Chinatown",
        attractions: [
          {
            name: "Cultural Exploration",
            description:
              "Discover the vibrant culture of Chinatown, featuring traditional shops, temples, and street food stalls.",
          },
          {
            name: "Sri Mariamman Temple",
            description:
              "Visit Singapore’s oldest Hindu temple, renowned for its intricate architectural details and colorful facade.",
          },
          {
            name: "Chinatown Heritage Centre",
            description:
              "Learn about the history of Singapore’s Chinatown through interactive exhibits and preserved historical artifacts.",
          },
        ],
      },
      {
        island: "Little India",
        attractions: [
          {
            name: "Cultural Immersion",
            description:
              "Experience the vibrant colors, smells, and sounds of Little India, a bustling neighborhood known for its Indian heritage.",
          },
          {
            name: "Sri Veeramakaliamman Temple",
            description:
              "Explore this historic Hindu temple, known for its elaborate decorations and religious significance.",
          },
          {
            name: "Mustafa Centre",
            description:
              "Shop at Mustafa Centre, a 24-hour shopping complex offering everything from electronics to groceries.",
          },
        ],
      },
      {
        island: "Clarke Quay",
        attractions: [
          {
            name: "Riverside Entertainment",
            description:
              "Enjoy the lively atmosphere of Clarke Quay, a riverside quay with a wide range of restaurants, bars, and nightclubs.",
          },
          {
            name: "Boat Quay",
            description:
              "Take a scenic boat ride along the Singapore River and enjoy views of the city’s historical and modern landmarks.",
          },
        ],
      },
      {
        island: "Singapore Botanic Gardens",
        attractions: [
          {
            name: "UNESCO World Heritage Site",
            description:
              "Explore this expansive garden, featuring lush greenery, tranquil lakes, and the National Orchid Garden.",
          },
          {
            name: "Recreational Activities",
            description:
              "Enjoy leisurely walks, picnics, and outdoor concerts.",
          },
        ],
      },
    ],
    activities: [
      
      {
        title: "Marina Bay Sands Light & Water Show",
        description:
          "Witness the spectacular light and water show at Marina Bay Sands, featuring a dazzling display of music, lights, and water effects.",
      },
      {
        title: "Singapore Flyer",
        description:
          "Take a ride on the Singapore Flyer, one of the world’s largest observation wheels, offering panoramic views of the city and beyond.",
      },
      {
        title: "Hawker Centres",
        description:
          "Experience authentic Singaporean street food at hawker centres like Maxwell Food Centre and Lau Pa Sat, where you can sample local dishes such as Hainanese chicken rice and laksa.",
      },
    ],
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
                {Singapore.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Singapore.placeName &&
                    Singapore.placeName}
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
                src={Singapore.exolreImage}
                alt={Singapore.placeName}
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
              {Singapore.inclusion && (
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
                Best Time to Visit {Singapore.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Singapore.packageOverView}</p>
            </div>
            {Singapore.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Singapore.exploreHotle}
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
                    {Singapore.Accommodation &&
                      Singapore.Accommodation.map((elm, index) => (
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
                {Singapore.activities &&
                  Singapore.activities.map((activity, index) => (
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

            {Singapore.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Singapore.inclusions &&
                      Singapore.inclusions.map((inclusion, index) => (
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
                    {Singapore.exclusions &&
                      Singapore.exclusions.map((exclusion, index) => (
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
      {Singapore.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Singapore.placeName}
  </h2>
  <ul className="space-y-6">
    {Singapore.seasons.map((season, index) => (
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
              {Singapore.exploreIsland.map((island, index) => (
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

            {Singapore.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Singapore.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Singapore.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Singapore.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Singapore.reasons &&
                    Singapore.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Singapore.reasons &&
                    Singapore.reasons.reasonParts.map(
                      (reason, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <FaCheck className="text-green-700" />
                          <div>
                            <strong>{reason.title}:</strong>{" "}
                            {reason.description}
                          </div>
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>

            {/* faq  */}
            {Singapore.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Singapore.placeName}
                </h2>
                {Singapore.faqData.map((faq, index) => (
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
                   
                    <ul
        className={`overflow-hidden list-disc pl-6 mt-2 text-gray-700 transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
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
                      {(Singapore.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Singapore.price
                      ? Singapore.price.toLocaleString("en-IN")
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
