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


  const Rajasthan= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Rajasthan",
    seasons:[
      {
        "mainHeading": "Winter Season (October to March):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Winter is the most favorable time to visit Rajasthan. The temperatures range from 10°C to 25°C (50°F to 77°F), making it comfortable for sightseeing and outdoor activities. Nights can be chilly, especially in the desert regions, so packing some warm clothing is advisable."
          },
          {
            "heading": "Activities:",
            "desc": "Ideal for exploring the state’s palaces, forts, and vibrant cities. Popular activities include desert safaris in Jaisalmer, visiting the palaces of Udaipur, and enjoying the festivals in cities like Jaipur and Jodhpur."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "This is peak tourist season, so expect more crowds and higher accommodation rates. It’s best to book in advance to secure accommodations and tour arrangements."
          }
        ]
      },
      {
        "mainHeading": "Summer Season (April to June):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Summers in Rajasthan can be extremely hot, with temperatures often exceeding 40°C (104°F). The heat is intense, particularly in the desert areas, which can make outdoor activities uncomfortable."
          },
          {
            "heading": "Activities:",
            "desc": "While the extreme heat can be a deterrent, summer is a good time to explore the cooler hill stations or visit the state’s major cities early in the morning or late in the evening."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Tourist numbers are lower, and accommodation prices may be more affordable compared to the winter season. This can be a budget-friendly time if you can handle the heat."
          }
        ]
      },
      {
        "mainHeading": "Monsoon Season (July to September):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "The monsoon brings moderate to heavy rainfall, with temperatures ranging from 25°C to 35°C (77°F to 95°F). Rainfall varies across the state, with the southern regions experiencing more rain than the northern parts."
          },
          {
            "heading": "Activities:",
            "desc": "The monsoon season transforms the arid landscapes into lush green vistas. It’s a good time to experience Rajasthan’s unique flora and fauna. However, be prepared for occasional travel disruptions due to rains and possible flooding in low-lying areas."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Tourist crowds are typically lower, and you may find better deals on accommodations. However, the weather conditions might affect travel plans, so flexibility is important."
          }
        ]
      },
      {
        "mainHeading": "Festivals and Events:",
        "list": [
          {
            "heading": "Jaipur Literature Festival (January):",
            "desc": "An international literary festival held in Jaipur, attracting authors, scholars, and readers from around the world."
          },
          {
            "heading": "Desert Festival (January/February):",
            "desc": "Held in Jaisalmer, this festival features cultural performances, camel races, and folk music against the backdrop of the Thar Desert."
          },
          {
            "heading": "Pushkar Camel Fair (October/November):",
            "desc": "A vibrant event held in Pushkar, showcasing camel trading, traditional music, dance, and a unique glimpse into local life."
          }
        ]
      },
      {
        "mainHeading": "Regional Considerations:",
        "list": [
          {
            "heading": "North Rajasthan (Jaipur, Jodhpur):",
            "desc": "Best visited during the winter months (October to March) for pleasant weather."
          },
          {
            "heading": "West Rajasthan (Jaisalmer):",
            "desc": "The winter months are ideal, though the cooler months of late autumn can also be enjoyable."
          },
          {
            "heading": "South Rajasthan (Udaipur):",
            "desc": "Enjoyable during the cooler months, with the monsoon season bringing lush scenery."
          }
        ]
      }
      
    ],
    
    faqData: [
      {
        "question": "When is the best time to visit Rajasthan?",
        "answers": [
          "Winter (October to March): This is the best time to visit Rajasthan when the weather is cool and pleasant, ideal for sightseeing and exploring the state’s attractions.",
          "Summer (April to June): The weather can be extremely hot, making travel less comfortable.",
          "Monsoon (July to September): Brings moderate rainfall and can be less predictable, but offers a unique view of the landscape."
        ]
      },
      {
        "question": "Do I need a visa to travel to Rajasthan?",
        "answers": [
          "Rajasthan is a state in India, so visa requirements depend on your nationality. Most international travelers will need an Indian visa. You can apply for an e-visa online for short visits or consult the Indian embassy or consulate in your country for other visa types."
        ]
      },
      {
        "question": "What is the local currency in Rajasthan, and can I use credit cards?",
        "answers": [
          "The local currency is the Indian Rupee (INR). Credit and debit cards are widely accepted in hotels, restaurants, and major tourist spots. However, it’s advisable to carry some cash for smaller purchases and in more remote areas where card facilities might be limited."
        ]
      },
      {
        "question": "What languages are spoken in Rajasthan?",
        "answers": [
          "Hindi and Rajasthani are the primary languages spoken in Rajasthan. English is commonly used in tourist areas, hotels, and by many service providers, making it easier for international visitors to communicate."
        ]
      },
      {
        "question": "What should I pack for a trip to Rajasthan?",
        "answers": [
          "Winter (October to March): Light to warm clothing, including a jacket or sweater for cooler evenings. Comfortable shoes for exploring and sun protection items like hats and sunglasses.",
          "Summer (April to June): Lightweight, breathable clothing, a wide-brimmed hat, sunglasses, and plenty of sunscreen. Stay hydrated and carry water with you.",
          "Monsoon (July to September): Waterproof clothing, an umbrella, and sturdy shoes that can handle wet conditions. Light and quick-drying clothes are useful."
        ]
      },
      {
        "question": "How do I get around Rajasthan?",
        "answers": [
          "By Train: Well-connected by the Indian Railways with major stations in cities like Jaipur, Jodhpur, and Udaipur.",
          "By Air: Several cities in Rajasthan have airports with domestic flights connecting to major Indian cities.",
          "By Road: Buses, taxis, and auto-rickshaws are available. Renting a car or hiring a private driver is also a popular option for exploring the state."
        ]
      },
      {
        "question": "Are there any cultural norms or customs I should be aware of?",
        "answers": [
          "Dress Modestly: Especially when visiting religious sites. Cover your shoulders and knees.",
          "Remove Shoes: Take off your shoes before entering temples and certain homes.",
          "Use the Right Hand: In many local customs, use your right hand for giving and receiving items.",
          "Respect Local Traditions: Public displays of affection are generally avoided. Engage respectfully with local customs and practices."
        ]
      },
      {
        "question": "Is Rajasthan safe for tourists?",
        "answers": [
          "Rajasthan is generally safe for tourists with a low crime rate. As with any travel destination, practice standard safety precautions such as safeguarding your belongings, avoiding isolated areas at night, and being cautious with local transportation."
        ]
      },
      {
        "question": "What types of accommodation are available in Rajasthan?",
        "answers": [
          "Rajasthan offers a range of accommodations, from luxury heritage hotels and palaces to budget guesthouses and hostels. Major tourist cities like Jaipur, Udaipur, and Jodhpur have a variety of options to suit different preferences."
        ]
      },
      {
        "question": "Can I find Wi-Fi easily in Rajasthan?",
        "answers": [
          "Yes, Wi-Fi is available in many hotels, cafes, and restaurants in urban areas and popular tourist spots. However, connectivity may be less reliable in more remote areas. It’s a good idea to check for Wi-Fi availability when booking accommodations if it’s crucial for your travel needs."
        ]
      }
      
    ],

    packageOverView:
      "Welcome to Rajasthan, the Land of Kings, where history, culture, and majestic landscapes come together in a vibrant tapestry. From the shimmering sands of the Thar Desert to the opulent palaces and fortresses that whisper tales of bygone eras, Rajasthan offers a treasure trove of experiences. At Next Gen India, we specialize in curating personalized travel experiences that highlight the very best of this enchanting state. Let us guide you through Rajasthan’s top destinations, unique attractions, and unforgettable experiences.",
    price: 27999,
    reasons: {
      heading:
        "Rajasthan stands out as a travel destination for its royal heritage, diverse landscapes, and richcultural traditions. Here’s why you should consider Rajasthan for your next adventure:",
      reasonParts: [
        {
          name: "Royal Heritage",
          description:
            "Explore majestic forts, palaces, and havelis that narrate the glorious past of Rajasthan’s royal families.",
        },
        {
          name: "Vibrant Culture",
          description:
            "Immerse yourself in the colorful festivals, traditional dance performances, and bustling local markets.",
        },
        {
          name: "Desert Adventures",
          description:
            "Experience the thrill of desert safaris, camel rides, and stargazing in the vast Thar Desert.",
        },
        {
          name: "Culinary Delights",
          description:
            "Savor the flavors of traditional Rajasthani cuisine, known for its spicy curries, sweets, and street food.",
        },
      ],
    },
    TravelTips: [
      [
        {
          heading: "Best Time to Visit",
          description:
            "The ideal time to visit Rajasthan is from October to March when the weather is cooler and more comfortable for sightseeing and outdoor activities.",
        },
        {
          heading: "Local Transport",
          description:
            "Utilize local taxis, auto-rickshaws, and private cabs for navigating between destinations. Consider hiring a car for greater flexibility.",
        },
        {
          heading: "Dress Code",
          description:
            "Dress modestly, especially when visiting religious sites. Lightweight, breathable clothing and comfortable footwear are recommended due to the state’s warm climate.",
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
        island: "Jaipur",
        attractions: [
          {
            name: "Amber Fort",
            description:
              "Marvel at the grandeur of Amber Fort, a stunning example of Rajput architecture with its ornate palaces, courtyards, and breathtaking views.",
          },
          {
            name: "City Palace",
            description:
              "Discover the opulent City Palace, a magnificent complex that houses museums, courtyards, and the royal residence.",
          },
          {
            name: "Hawa Mahal",
            description:
              "Admire the intricate facade of Hawa Mahal, the Palace of Winds, known for its lattice windows and distinctive pink sandstone architecture.",
          },
          {
            name: "Jantar Mantar",
            description:
              "Explore Jantar Mantar, an astronomical observatory with impressive instruments used for tracking celestial bodies.",
          },
        ],
      },
      {
        island: "Udaipur",
        attractions: [
          {
            name: "City Palace",
            description:
              "Experience the splendor of Udaipur’s City Palace, a sprawling complex of courtyards, gardens, and palaces overlooking Lake Pichola.",
          },
          {
            name: "Lake Pichola",
            description:
              "Enjoy a serene boat ride on Lake Pichola, taking in the picturesque views of the lake, the Jag Mandir island, and the Lake Palace.",
          },
          {
            name: "Jag Mandir",
            description:
              "Visit Jag Mandir, a beautiful island palace on Lake Pichola, offering a tranquil escape with its stunning architecture and gardens.",
          },
          {
            name: "Saheliyon-ki-Bari",
            description:
              "Explore Saheliyon-ki-Bari, a charming garden known for its fountains, lotus pools, and lush greenery.",
          },
        ],
      },
      {
        island: "Jaisalmer",
        attractions: [
          {
            name: "Jaisalmer Fort",
            description:
              "Discover the golden fort of Jaisalmer, an impressive fortification with intricately carved havelis, temples, and vibrant bazaars.",
          },
          {
            name: "Sam Sand Dunes",
            description:
              "Experience the thrill of a camel safari in the Sam Sand Dunes, where you can enjoy a desert sunset, cultural performances, and stargazing.",
          },
          {
            name: "Patwon Ki Haveli",
            description:
              "Admire the ornate architecture of Patwon Ki Haveli, a cluster of five havelis known for their elaborate carvings and detailed frescoes.",
          },
          {
            name: "Gadisar Lake",
            description:
              "Relax by Gadisar Lake, an artificial reservoir surrounded by beautiful temples and shrines.",
          },
        ],
      },
      {
        island: "Jodhpur",
        attractions: [
          {
            name: "Mehrangarh Fort",
            description:
              "Explore Mehrangarh Fort, a formidable fortress offering panoramic views of Jodhpur and housing a museum with royal artifacts.",
          },
          {
            name: "Umaid Bhawan Palace",
            description:
              "Visit Umaid Bhawan Palace, an extravagant palace turned luxury hotel with stunning architecture and beautiful gardens.",
          },
          {
            name: "Jaswant Thada",
            description:
              "Pay your respects at Jaswant Thada, a serene marble cenotaph built in honor of Maharaja Jaswant Singh II.",
          },
          {
            name: "Clock Tower and Sardar Market",
            description:
              "Wander through the bustling Sardar Market, where you can shop for local handicrafts, spices, and textiles.",
          },
        ],
      },
      {
        island: "Ranthambore",
        attractions: [
          {
            name: "Ranthambore National Park",
            description:
              "Embark on a thrilling wildlife safari in Ranthambore National Park, renowned for its Bengal tiger population and diverse wildlife.",
          },
          {
            name: "Ranthambore Fort",
            description:
              "Explore the historic Ranthambore Fort, a UNESCO World Heritage site offering panoramic views of the surrounding wilderness.",
          },
        ],
      },
      {
        island: "Pushkar",
        attractions: [
          {
            name: "Pushkar Lake",
            description:
              "Visit Pushkar Lake, a sacred site surrounded by ghats and temples, known for its religious significance and tranquil ambiance.",
          },
          {
            name: "Brahma Temple",
            description:
              "Discover the Brahma Temple, one of the few temples dedicated to Lord Brahma, known for its unique architecture and spiritual importance.",
          },
          {
            name: "Pushkar Camel Fair",
            description:
              "Experience the vibrant Pushkar Camel Fair, an annual event featuring camel trading, cultural performances, and traditional crafts.",
          },
        ],
      },
      {
        island: "Mount Abu",
        attractions: [
          {
            name: "Dilwara Temples",
            description:
              "Marvel at the intricate marble carvings of Dilwara Temples, renowned for their architectural beauty and spiritual significance.",
          },
          {
            name: "Nakki Lake",
            description:
              "Enjoy boating and relaxation by Nakki Lake, a picturesque spot surrounded by hills and lush landscapes.",
          },
          {
            name: "Guru Shikhar",
            description:
              "Visit Guru Shikhar, the highest peak in the Aravalli range, offering panoramic views of the surrounding region.",
          },
        ],
      },
    ],
    activities: [
      
        {
          title: "Cultural Tours",
          description:
            "Immerse yourself in Rajasthan’s rich cultural heritage with guided tours of local festivals, traditional dance performances, and artisan workshops.",
        },
        {
          title: "Desert Safaris",
          description:
            "Experience the thrill of desert safaris, camel rides, and camping under the stars in the vast Thar Desert.",
        },
        {
          title: "Handicraft Shopping",
          description:
            "Explore local markets and craft villages to buy exquisite Rajasthani handicrafts, including textiles, jewelry, and pottery.",
        },
        {
          title: "Culinary Journeys",
          description:
            "Savor the diverse flavors of Rajasthani cuisine, including famous dishes like dal baati churma, gatte ki sabzi, and sweets like ghevar and kulfi.",
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
                {Rajasthan.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Rajasthan.placeName &&
                    Rajasthan.placeName}
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
                src={Rajasthan.exolreImage}
                alt={Rajasthan.placeName}
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
              {Rajasthan.inclusion && (
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
                Best Time to Visit {Rajasthan.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Rajasthan.packageOverView}</p>
            </div>
            {Rajasthan.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Rajasthan.exploreHotle}
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
                    {Rajasthan.Accommodation &&
                      Rajasthan.Accommodation.map((elm, index) => (
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
                {Rajasthan.activities &&
                  Rajasthan.activities.map((activity, index) => (
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

            {Rajasthan.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Rajasthan.inclusions &&
                      Rajasthan.inclusions.map((inclusion, index) => (
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
                    {Rajasthan.exclusions &&
                      Rajasthan.exclusions.map((exclusion, index) => (
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
      {Rajasthan.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Rajasthan.placeName}
  </h2>
  <ul className="space-y-6">
    {Rajasthan.seasons.map((season, index) => (
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
              {Rajasthan.exploreIsland.map((island, index) => (
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

            {Rajasthan.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Rajasthan.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Rajasthan.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Rajasthan.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Rajasthan.reasons &&
                    Rajasthan.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Rajasthan.reasons &&
                    Rajasthan.reasons.reasonParts.map(
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
            {Rajasthan.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Rajasthan.placeName}
                </h2>
                {Rajasthan.faqData.map((faq, index) => (
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
                      {(Rajasthan.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Rajasthan.price
                      ? Rajasthan.price.toLocaleString("en-IN")
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
