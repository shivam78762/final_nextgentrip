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

  const Vietnam= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Vietnam",
    seasons:[
      {
        "mainHeading": "Northern Vietnam (Hanoi, Halong Bay, Sapa):",
        "list": [
          {
            "heading": "Spring (March to May):",
            "desc": "This period is ideal for exploring Northern Vietnam. The weather is mild, with temperatures ranging from 15°C to 25°C (59°F to 77°F), and the landscape is lush and green. It’s a great time for visiting Hanoi and cruising in Halong Bay."
          },
          {
            "heading": "Autumn (September to November):",
            "desc": "Autumn is another excellent time to visit Northern Vietnam. The weather is cooler and less humid, with temperatures around 20°C to 28°C (68°F to 82°F). The autumn months also bring beautiful clear skies and are perfect for trekking in Sapa or exploring the historic sites in Hanoi."
          }
        ]
      },
      {
        "mainHeading": "Central Vietnam (Hue, Hoi An, Da Nang):",
        "list": [
          {
            "heading": "Spring (March to May):",
            "desc": "Central Vietnam enjoys pleasant weather during this time, with moderate temperatures and lower humidity. It’s a great period to explore the ancient town of Hoi An and the historical sites in Hue."
          },
          {
            "heading": "Autumn (September to November):",
            "desc": "Autumn is also a good time to visit Central Vietnam, as the weather is generally warm and dry. However, be mindful of the potential for typhoons and heavy rains, especially in October and November."
          }
        ]
      },
      {
        "mainHeading": "Southern Vietnam (Ho Chi Minh City, Mekong Delta, Phu Quoc):",
        "list": [
          {
            "heading": "Dry Season (December to April):",
            "desc": "This is the best time to visit Southern Vietnam. The weather is hot and dry, with temperatures ranging from 25°C to 35°C (77°F to 95°F). It’s perfect for exploring Ho Chi Minh City, relaxing in the Mekong Delta, or enjoying the beaches of Phu Quoc."
          },
          {
            "heading": "Wet Season (May to October):",
            "desc": "While it’s the rainy season, showers are usually short and heavy, with plenty of sunny periods in between. It’s a good time for fewer crowds and lower prices, though be prepared for occasional flooding in low-lying areas."
          }
        ]
      },
      {
        "mainHeading": "Festivals and Events:",
        "list": [
          {
            "heading": "Tet Festival (Lunar New Year, January or February):",
            "desc": "This major holiday is celebrated across the country with vibrant parades, family gatherings, and traditional festivities. It’s a unique cultural experience, though travel during this period can be busy and accommodations may be in high demand."
          },
          {
            "heading": "Mid-Autumn Festival (September or October):",
            "desc": "Celebrated with lantern festivals and cultural events, particularly in Hanoi and Hoi An. It’s a colorful and festive time to experience local traditions."
          }
        ]
      },
      {
        "mainHeading": "Weather Patterns:",
        "list": [
          {
            "heading": "Northern Vietnam:",
            "desc": "Experiences four distinct seasons. Spring and autumn are generally the best for comfortable weather."
          },
          {
            "heading": "Central Vietnam:",
            "desc": "Has a more variable climate, with a risk of typhoons during late summer and early autumn."
          },
          {
            "heading": "Southern Vietnam:",
            "desc": "Has a tropical climate with a clear distinction between the dry and wet seasons."
          }
        ]
      }
      
    ],
    
    faqData: [
      {
        "question": "When is the best time to visit Vietnam?",
        "answers": [
          "Northern Vietnam (Hanoi, Halong Bay, Sapa): Spring (March to May) and autumn (September to November) offer pleasant weather.",
          "Central Vietnam (Hue, Hoi An, Da Nang): Spring (March to May) and autumn (September to November) are ideal, but be mindful of possible typhoons in late autumn.",
          "Southern Vietnam (Ho Chi Minh City, Mekong Delta, Phu Quoc): The dry season (December to April) is the best time for warm and dry weather."
        ]
      },
      {
        "question": "Do I need a visa to travel to Vietnam?",
        "answers": [
          "Visa requirements vary by nationality. Many travelers can obtain a visa on arrival or apply for an e-visa online for stays of up to 30 days. Always check the latest visa requirements and entry regulations with the Vietnamese embassy or consulate in your country before your trip."
        ]
      },
      {
        "question": "What is the local currency in Vietnam, and can I use credit cards?",
        "answers": [
          "The local currency is the Vietnamese Dong (VND). Credit and debit cards are widely accepted in cities and tourist areas. However, it’s advisable to carry some cash for smaller purchases and in more rural areas."
        ]
      },
      {
        "question": "What languages are spoken in Vietnam?",
        "answers": [
          "The official language is Vietnamese. English is increasingly spoken in tourist areas, hotels, and restaurants, but it may be less common in rural or less touristy regions."
        ]
      },
      {
        "question": "What should I pack for a trip to Vietnam?",
        "answers": [
          "Pack lightweight and breathable clothing suitable for tropical weather. Essentials include comfortable walking shoes, sunscreen, a hat, and a rain jacket or umbrella for unexpected showers. If visiting temples or religious sites, dress modestly with shoulders and knees covered."
        ]
      },
      {
        "question": "Are there any cultural norms or customs I should be aware of?",
        "answers": [
          "Yes, respect local customs by dressing modestly when visiting temples, removing your shoes before entering homes or religious sites, and avoiding public displays of affection. It’s also courteous to use both hands when giving or receiving items."
        ]
      },
      {
        "question": "Is Vietnam safe for tourists?",
        "answers": [
          "Vietnam is generally safe for tourists with a low crime rate. However, be cautious with your belongings, especially in crowded areas. Watch out for common scams and be aware of road safety if you plan to rent a scooter."
        ]
      },
      {
        "question": "Can I find Wi-Fi easily in Vietnam?",
        "answers": [
          "Yes, Wi-Fi is widely available in Vietnam. Most hotels, cafes, and restaurants offer free Wi-Fi. In larger cities and tourist areas, connectivity is generally reliable, but it may be less so in more remote regions."
        ]
      }
    ],
    packageOverView:
      "Welcome to Vietnam, a country brimming with captivating landscapes, rich history, and vibrant culture. From the bustling streets of Hanoi to the serene beauty of Halong Bay and the historical allure of Hoi An, Vietnam offers a diverse range of experiences for every traveler. At Next Gen India, we are dedicated to crafting bespoke travel itineraries that help you explore the very best of this enchanting Southeast Asian destination. Let us guide you through Vietnam’s top tourist destinations, unique attractions, and unforgettable experiences.",
    price: 24999,
    reasons: {
      heading: "Vietnam stands out for its",
      reasonParts: [
        {
          title: "Diverse Landscapes",
          description:
            "Experience everything from lush rice paddies and dramatic mountains to pristine beaches and bustling cities.",
        },
        {
          title: "Rich Cultural Heritage",
          description:
            "Discover a blend of ancient traditions, historical landmarks, and vibrant local culture.",
        },
        {
          title: "Culinary Delights",
          description:
            "Savor a range of delicious Vietnamese dishes, from street food to fine dining.",
        },
        {
          title: "Adventure and Relaxation",
          description:
            "Whether you seek adventure or tranquility, Vietnam offers activities and landscapes for every preference.",
        },
      ],
    },
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Vietnam is from October to April when the weather is generally dry and pleasant. However, specific regions may have varying optimal times.",
      },
      {
        heading: "Local Transport",
        description:
          "Use taxis, motorbike rentals, and domestic flights for traveling between cities. Ride-sharing apps and local buses are also widely available.",
      },
      {
        heading: "Dress Code",
        description:
          "Dress modestly when visiting religious sites. Lightweight, breathable clothing is recommended for the warm climate, and comfortable walking shoes are essential.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, use sunscreen, and be cautious with street food. Ensure you have travel insurance and consult with a travel health clinic for vaccinations and health advice.",
      },
    ],

    exploreIsland: [
      {
        island: "Hanoi",
        attractions: [
          {
            name: "Old Quarter",
            description:
              "Wander through the historic Old Quarter with its narrow streets, colonial architecture, and bustling markets. Experience the charm of traditional Vietnamese life.",
          },
          {
            name: "Hoan Kiem Lake",
            description:
              "Relax by this picturesque lake in the heart of Hanoi, visit the Ngoc Son Temple, and enjoy the vibrant atmosphere of the surrounding area.",
          },
          {
            name: "Ho Chi Minh Mausoleum",
            description:
              "Pay your respects at this grand mausoleum dedicated to Vietnam’s revolutionary leader, Ho Chi Minh, and explore the surrounding complex.",
          },
          {
            name: "Temple of Literature",
            description:
              "Discover Vietnam’s first university, a beautiful example of traditional Vietnamese architecture set in tranquil gardens.",
          },
        ],
      },
      {
        island: "Halong Bay",
        attractions: [
          {
            name: "Cruise the Bay",
            description:
              "Take a cruise through Halong Bay, a UNESCO World Heritage site known for its emerald waters and thousands of limestone islands. Enjoy activities such as kayaking, swimming, and exploring hidden caves.",
          },
          {
            name: "Cat Ba Island",
            description:
              "Visit Cat Ba Island, the largest island in Halong Bay, for hiking, beautiful beaches, and the serene Cat Ba National Park.",
          },
          {
            name: "Sung Sot Cave",
            description:
              "Explore the impressive Sung Sot (Surprise) Cave, one of the largest and most spectacular caves in Halong Bay.",
          },
        ],
      },
      {
        island: "Hue",
        attractions: [
          {
            name: "Imperial City",
            description:
              "Step back in time as you explore the Imperial City of Hue, a UNESCO World Heritage site that was once the capital of Vietnam. Discover ancient palaces, temples, and royal tombs.",
          },
          {
            name: "Thien Mu Pagoda",
            description:
              "Visit this iconic seven-story pagoda overlooking the Perfume River, an important symbol of Buddhism in Vietnam.",
          },
          {
            name: "Royal Tombs",
            description:
              "Explore the tombs of Nguyen emperors, such as the Tomb of Tu Duc and the Tomb of Khai Dinh, known for their intricate designs and historical significance.",
          },
        ],
      },
      {
        island: "Hoi An",
        attractions: [
          {
            name: "Ancient Town",
            description:
              "Wander through the beautifully preserved Ancient Town of Hoi An, a UNESCO World Heritage site famous for its charming streets, traditional architecture, and vibrant lanterns.",
          },
          {
            name: "Japanese Covered Bridge",
            description:
              "Visit this iconic bridge, a symbol of Hoi An, known for its historical significance and unique design.",
          },
          {
            name: "Tailor Shops",
            description:
              "Enjoy bespoke tailoring services at one of Hoi An’s many tailor shops, known for their high-quality fabrics and custom clothing.",
          },
        ],
      },
      {
        island: "Da Nang",
        attractions: [
          {
            name: "My Khe Beach",
            description:
              "Relax on the sandy shores of My Khe Beach, renowned for its clear waters and excellent conditions for swimming and sunbathing.",
          },
          {
            name: "Marble Mountains",
            description:
              "Explore the Marble Mountains, a group of five limestone hills with caves, temples, and panoramic views of Da Nang.",
          },
          {
            name: "Dragon Bridge",
            description:
              "Witness the impressive Dragon Bridge, an architectural marvel that breathes fire and water during special events.",
          },
        ],
      },
      {
        island: "Saigon (Ho Chi Minh City)",
        attractions: [
          {
            name: "Ben Thanh Market",
            description:
              "Dive into the vibrant atmosphere of Ben Thanh Market, a bustling hub for local food, crafts, and souvenirs.",
          },
          {
            name: "War Remnants Museum",
            description:
              "Gain insights into Vietnam’s history with exhibits on the Vietnam War, offering a profound perspective on the country’s past.",
          },
          {
            name: "Cu Chi Tunnels",
            description:
              "Explore the Cu Chi Tunnels, an extensive network of underground tunnels used during the Vietnam War, providing a fascinating glimpse into wartime life.",
          },
        ],
      },
      {
        island: "Mekong Delta",
        attractions: [
          {
            name: "Boat Tours",
            description:
              "Experience the Mekong Delta’s unique waterways with a boat tour, visiting floating markets, traditional villages, and lush landscapes.",
          },
          {
            name: "Vinh Long",
            description:
              "Visit Vinh Long to explore its vibrant markets, traditional workshops, and beautiful river scenery.",
          },
          {
            name: "Can Tho",
            description:
              "Discover Can Tho, the largest city in the Mekong Delta, known for its lively floating market and charming canals.",
          },
        ],
      },
      {
        island: "Sapa",
        attractions: [
          {
            name: "Trekking",
            description:
              "Embark on treks through the stunning landscapes of Sapa, known for its terraced rice fields, ethnic minority villages, and towering mountains.",
          },
          {
            name: "Fansipan",
            description:
              "Conquer Fansipan, the highest peak in Vietnam, offering challenging hikes and breathtaking views of the surrounding mountains.",
          },
          {
            name: "Local Markets",
            description:
              "Visit local markets in Sapa to experience the vibrant culture and traditional crafts of the region’s ethnic communities.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Cooking Classes",
        description:
          "Learn to prepare traditional Vietnamese dishes with hands-on cooking classes that delve into local culinary techniques and flavors.",
      },
      {
        title: "Cycling Tours",
        description:
          "Explore Vietnam’s landscapes on a cycling tour, from rural villages to scenic countryside routes.",
      },
      {
        title: "Traditional Performances",
        description:
          "Enjoy cultural performances such as water puppet shows in Hanoi and traditional music and dance in Hoi An.",
      },
      {
        title: "Spa and Wellness",
        description:
          "Indulge in relaxing spa treatments and wellness therapies, combining traditional Vietnamese techniques with modern relaxation methods.",
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
                {Vietnam.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Vietnam.placeName &&
                    Vietnam.placeName}
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
                src={Vietnam.exolreImage}
                alt={Vietnam.placeName}
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
              {Vietnam.inclusion && (
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
                Best Time to Visit {Vietnam.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Vietnam.packageOverView}</p>
            </div>
            {Vietnam.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Vietnam.exploreHotle}
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
                    {Vietnam.Accommodation &&
                      Vietnam.Accommodation.map((elm, index) => (
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
                {Vietnam.activities &&
                  Vietnam.activities.map((activity, index) => (
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

            {Vietnam.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Vietnam.inclusions &&
                      Vietnam.inclusions.map((inclusion, index) => (
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
                    {Vietnam.exclusions &&
                      Vietnam.exclusions.map((exclusion, index) => (
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
      {Vietnam.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Vietnam.placeName}
  </h2>
  <ul className="space-y-6">
    {Vietnam.seasons.map((season, index) => (
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
              {Vietnam.exploreIsland.map((island, index) => (
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

            {Vietnam.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Vietnam.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Vietnam.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Vietnam.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Vietnam.reasons &&
                    Vietnam.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Vietnam.reasons &&
                    Vietnam.reasons.reasonParts.map(
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
            {Vietnam.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Vietnam.placeName}
                </h2>
                {Vietnam.faqData.map((faq, index) => (
                  <div
                    key={index}
                    className=" mb-4 border-b border-gray-300 pb-4 border flex flex-col justify-center py-5 px-3 rounded"
                  >
                    <h3
                      className={` text-lg flex justify-between items-center font-semibold cursor-pointer text-gray-600 hover:text-amber-900 transition-colors duration-300 ${expandedIndex === index &&"text-amber-800"}`}
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
                      {(Vietnam.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Vietnam.price
                      ? Vietnam.price.toLocaleString("en-IN")
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
