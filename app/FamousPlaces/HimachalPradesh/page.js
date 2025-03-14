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


 
  const HimachalPradesh= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Himachal Pradesh,",
    seasons:[
      {
        "mainHeading": "Summer Season (March to June):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "This is one of the most popular times to visit Himachal Pradesh. The weather is generally pleasant, with temperatures ranging from 15°C to 30°C (59°F to 86°F) in most regions. The higher altitudes offer cooler temperatures and a refreshing escape from the heat of the plains."
          },
          {
            "heading": "Activities:",
            "desc": "Ideal for sightseeing, trekking, and enjoying the lush green landscapes. Popular destinations like Shimla, Manali, and Dharamshala are perfect for outdoor activities and exploring the natural beauty of the region."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "This period is peak tourist season, so expect higher accommodation rates and more crowds at popular tourist spots. It’s advisable to book in advance to secure better rates and availability."
          }
        ]
      },
      {
        "mainHeading": "Monsoon Season (July to September):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "The monsoon season brings moderate to heavy rainfall, with temperatures ranging from 20°C to 30°C (68°F to 86°F). The rains can lead to landslides and travel disruptions, especially in hilly areas."
          },
          {
            "heading": "Activities:",
            "desc": "This is a quieter time, and the rain brings out the lush greenery and vibrant landscapes. It’s a good time for nature lovers who enjoy the monsoon ambiance. However, travel can be challenging, and some areas might be less accessible."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Fewer tourists visit during the monsoon season, leading to lower accommodation prices. If you don’t mind the rain and potential travel disruptions, this can be a cost-effective time to visit."
          }
        ]
      },
      {
        "mainHeading": "Autumn Season (October to November):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Autumn is a wonderful time to visit Himachal Pradesh. The weather is crisp and clear, with temperatures ranging from 10°C to 25°C (50°F to 77°F). The post-monsoon landscapes are lush and vibrant."
          },
          {
            "heading": "Activities:",
            "desc": "Ideal for outdoor activities, sightseeing, and exploring cultural sites. The clear skies and pleasant temperatures enhance the experience of visiting hill stations, temples, and nature reserves."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "This period is less crowded compared to summer, and accommodation rates are generally reasonable. It’s a great time to enjoy the region’s beauty without the peak season rush."
          }
        ]
      },
      {
        "mainHeading": "Winter Season (December to February):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Winter brings cold temperatures, with snow in higher altitudes and temperatures ranging from -5°C to 15°C (23°F to 59°F) in various parts. Areas like Shimla and Manali experience snowfall, while the lower altitudes remain chilly."
          },
          {
            "heading": "Activities:",
            "desc": "Perfect for snow enthusiasts and winter sports. Popular activities include skiing in Solang Valley, enjoying the snow-covered landscapes, and experiencing winter festivals."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Winter can attract tourists seeking snow, particularly around popular spots like Manali and Shimla. Accommodation rates may vary, and it’s advisable to book in advance if you plan to visit during the peak winter season."
          }
        ]
      },
      {
        "mainHeading": "Festivals and Events:",
        "list": [
          {
            "heading": "Losar Festival (February/March):",
            "desc": "Celebrated by the Tibetan community, it marks the Tibetan New Year with traditional music, dance, and rituals."
          },
          {
            "heading": "Kullu Dussehra (September/October):",
            "desc": "A grand festival celebrated with traditional music, dance, and colorful processions in the Kullu Valley."
          },
          {
            "heading": "Ice Skating Carnival (December/January):",
            "desc": "Held in Shimla, this festival features ice skating and other winter activities.."
          }
        ]
      }
      
    ] ,
    
    faqData: [
      {
        "question": "When is the best time to visit Himachal Pradesh?",
        "answers": [
          "The best time to visit Himachal Pradesh is from March to June during the summer season, when the weather is pleasant and ideal for sightseeing and outdoor activities.",
          "October to November is also a great time, with crisp air and clear skies.",
          "July to September is the monsoon season with heavy rains and potential travel disruptions.",
          "December to February offers a winter experience with snow in higher altitudes."
        ]
      },
      {
        "question": "Do I need a visa to travel to Himachal Pradesh?",
        "answers": [
          "Himachal Pradesh is a state in India, so visa requirements depend on your nationality. Most international travelers require an Indian visa.",
          "You can apply for an e-visa online for short stays or consult the Indian embassy or consulate in your country for other visa options."
        ]
      },
      {
        "question": "What is the local currency in Himachal Pradesh, and can I use credit cards?",
        "answers": [
          "The local currency is the Indian Rupee (INR).",
          "Credit and debit cards are widely accepted in major cities and tourist areas.",
          "It’s advisable to carry some cash for smaller transactions and in remote locations where card facilities may be limited."
        ]
      },
      {
        "question": "What languages are spoken in Himachal Pradesh?",
        "answers": [
          "The primary languages spoken in Himachal Pradesh are Hindi and various local dialects like Kinnauri, Spiti, and Lahauli.",
          "English is commonly spoken in tourist areas, hotels, and major cities, making communication relatively easy for international visitors."
        ]
      },
      {
        "question": "What should I pack for a trip to Himachal Pradesh?",
        "answers": [
          "Summer (March to June): Light, breathable clothing, sun protection (hat, sunglasses, sunscreen), and comfortable walking shoes.",
          "Monsoon (July to September): Waterproof clothing, an umbrella, and sturdy shoes suitable for wet conditions.",
          "Winter (December to February): Warm clothing, including thermal wear, a good quality jacket, and layers to stay warm, especially if visiting higher altitudes."
        ]
      },
      {
        "question": "Are there any cultural norms or customs I should be aware of?",
        "answers": [
          "Dress modestly, particularly when visiting religious sites, covering your shoulders and knees.",
          "Remove shoes before entering temples and homes.",
          "In many local customs, use your right hand for giving and receiving items.",
          "Public displays of affection are generally avoided. Engaging respectfully with local traditions is appreciated."
        ]
      },
      {
        "question": "Is Himachal Pradesh safe for tourists?",
        "answers": [
          "Himachal Pradesh is generally safe for tourists with a low crime rate.",
          "As with any travel destination, practice standard safety precautions, such as keeping an eye on your belongings, avoiding isolated areas at night, and being cautious with local transportation, especially in hilly and remote regions."
        ]
      },
      {
        "question": "What types of accommodation are available in Himachal Pradesh?",
        "answers": [
          "Accommodation options range from luxury resorts and boutique hotels to budget guesthouses and hostels.",
          "Major destinations like Shimla, Manali, and Dharamshala offer various choices to suit different preferences."
        ]
      },
      {
        "question": "Can I find Wi-Fi easily in Himachal Pradesh?",
        "answers": [
          "Yes, Wi-Fi is available in many hotels, cafes, and restaurants in urban areas and popular tourist destinations.",
          "However, connectivity may be less reliable in remote or high-altitude areas. It’s a good idea to confirm Wi-Fi availability when booking accommodations if it’s essential for your travel needs."
        ]
      }
      
    ],


    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Himachal Pradesh is from March to June for pleasant weather or from October to February for snow and winter sports.",
      },
      {
        heading: "Local Transport",
        description:
          "Utilize local buses, taxis, and rental cars to navigate between destinations. Private cabs and rental scooters are also popular options for exploring smaller towns.",
      },
      {
        heading: "Dress Code",
        description:
          "Pack warm clothing, especially if you’re visiting during winter or high-altitude areas. Comfortable walking shoes are recommended for sightseeing.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, acclimate to higher altitudes gradually, and be cautious with street food. Ensure you have travel insurance for a safe and enjoyable trip.",
      },
    ],

    exploreIsland: [
      {
        island: "Shimla",
        attractions: [
          {
            name: "Historical Charm",
            description:
              "Explore Shimla, the state capital, known for its colonial architecture, picturesque landscapes, and vibrant market streets.",
          },
          {
            name: "Mall Road",
            description:
              "Stroll along Mall Road, lined with shops, cafes, and local handicrafts, and enjoy stunning views of the surrounding mountains.",
          },
          {
            name: "Christ Church",
            description:
              "Visit the iconic Christ Church, one of the oldest churches in North India, with its beautiful stained glass windows and historic charm.",
          },
        ],
      },
      {
        island: "Manali",
        attractions: [
          {
            name: "Adventure Hub",
            description:
              "Experience Manali, a popular hill station known for its adventure sports and natural beauty. Enjoy activities like skiing in Solang Valley, river rafting in the Beas River, and paragliding over lush landscapes.",
          },
          {
            name: "Old Manali",
            description:
              "Wander through Old Manali’s charming streets, visit local cafes, and explore traditional temples and artisan shops.",
          },
          {
            name: "Rohtang Pass",
            description:
              "Take a day trip to Rohtang Pass, a high-altitude pass offering stunning snow views and exciting snow sports.",
          },
          {
            name: "Solang Valley",
            description:
              "Discover Solang Valley, a perfect spot for skiing, paragliding, and enjoying panoramic views of the snow-capped peaks.",
          },
        ],
      },
      {
        island: "Kasol",
        attractions: [
          {
            name: "Hippie Haven",
            description:
              "Explore Kasol, a small village known for its scenic beauty and vibrant hippie culture. Nestled along the Parvati River, Kasol offers a relaxed vibe, perfect for unwinding and connecting with nature.",
          },
          {
            name: "Trekking Trails",
            description:
              "Embark on treks to nearby spots like Tosh and Kheerganga, renowned for their stunning views and serene landscapes. Kheerganga is famous for its hot springs and breathtaking panoramic vistas.",
          },
          {
            name: "Local Cafes",
            description:
              "Experience the bohemian charm of Kasol’s cafes, offering a range of international and local cuisines, where you can relax and soak in the beautiful surroundings.",
          },
        ],
      },
      {
        island: "Dharamshala",
        attractions: [
          {
            name: "Spiritual Haven",
            description:
              "Discover Dharamshala, home to the Dalai Lama and a center of Tibetan culture. Visit the Namgyal Monastery, attend teachings by the Dalai Lama, and explore the Tibetan Museum.",
          },
          {
            name: "McLeod Ganj",
            description:
              "Explore McLeod Ganj, a vibrant town known for its mix of Tibetan and Indian culture, and enjoy scenic walks through lush pine forests.",
          },
        ],
      },
      {
        island: "Kullu",
        attractions: [
          {
            name: "River Rafting",
            description:
              "Experience Kullu, a charming town known for its adventure activities, including thrilling river rafting in the Beas River.",
          },
          {
            name: "Great Himalayan National Park",
            description:
              "Explore the Great Himalayan National Park, a UNESCO World Heritage site, known for its rich biodiversity and stunning landscapes.",
          },
        ],
      },
      {
        island: "Kasauli",
        attractions: [
          {
            name: "Charming Hill Station",
            description:
              "Visit Kasauli, a small hill station known for its quaint charm and serene environment. Enjoy leisurely walks through pine forests, visit the Kasauli Brewery, and explore the local market.",
          },
        ],
      },
      {
        island: "Chamba",
        attractions: [
          {
            name: "Historical Beauty",
            description:
              "Discover Chamba, a town known for its historical temples, traditional handicrafts, and beautiful landscapes. Visit the Chamba Palace and the Bhuri Singh Museum for insights into the region’s history and art.",
          },
        ],
      },
      {
        island: "Dalhousie",
        attractions: [
          {
            name: "Colonial Elegance",
            description:
              "Enjoy the colonial charm of Dalhousie, known for its scenic beauty and pleasant weather. Explore the old-world architecture, serene lakes, and picturesque viewpoints.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Cultural Tours",
        description:
          "Immerse yourself in Himachal Pradesh’s rich cultural heritage with guided tours covering traditional festivals, local crafts, and historical landmarks.",
      },
      {
        title: "Adventure Sports",
        description:
          "Engage in a variety of adventure sports such as trekking, skiing, paragliding, and river rafting across different destinations in Himachal Pradesh.",
      },
      {
        title: "Local Cuisine",
        description:
          "Savor Himachali cuisine with local delicacies like Chana Madra, Siddu, and Chha Gosht. Explore local markets and food festivals for an authentic taste of the region.",
      },
    ],

    reasons: {
      heading:
        "Himachal Pradesh is renowned for its diverse landscapes and rich cultural heritage. Here’s why it should be your next travel destination:",
      reasonParts: [
        {
          title: "Spectacular Landscapes",
          description:
            "Witness the awe-inspiring beauty of the Himalayas, from towering peaks to lush green valleys.",
        },
        {
          title: "Adventure Awaits",
          description:
            "Engage in a variety of outdoor activities, including trekking, paragliding, skiing, and river rafting.",
        },
        {
          title: "Cultural Richness",
          description:
            "Immerse yourself in the local culture with traditional festivals, local cuisine, and historical landmarks.",
        },
        {
          title: "Tranquil Retreats",
          description:
            "Find peace and rejuvenation in serene hill stations and peaceful monasteries.",
        },
      ],
    },

    packageOverView:
      "Welcome to Himachal Pradesh, a land of breathtaking landscapes, serene mountain peaks, and vibrant cultures. Nestled in the northern part of India, this Himalayan paradise offers a perfect blend of adventure, relaxation, and cultural immersion. From snow-capped mountains to lush valleys and charming hill stations, Himachal Pradesh promises an unforgettable experience. At Next Gen India, we specialize in crafting personalized travel itineraries to help you explore the best that this magnificent state has to offer. Let us guide you through Himachal Pradesh’s top destinations, nique attractions,and memorable experiences.",
    price: 26999,
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
                {HimachalPradesh.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {HimachalPradesh.placeName &&
                    HimachalPradesh.placeName}
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
                src={HimachalPradesh.exolreImage}
                alt={HimachalPradesh.placeName}
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
              {HimachalPradesh.inclusion && (
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
                Best Time to Visit {HimachalPradesh.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{HimachalPradesh.packageOverView}</p>
            </div>
            {HimachalPradesh.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={HimachalPradesh.exploreHotle}
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
                    {HimachalPradesh.Accommodation &&
                      HimachalPradesh.Accommodation.map((elm, index) => (
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
                {HimachalPradesh.activities &&
                  HimachalPradesh.activities.map((activity, index) => (
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

            {HimachalPradesh.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {HimachalPradesh.inclusions &&
                      HimachalPradesh.inclusions.map((inclusion, index) => (
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
                    {HimachalPradesh.exclusions &&
                      HimachalPradesh.exclusions.map((exclusion, index) => (
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
      {HimachalPradesh.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {HimachalPradesh.placeName}
  </h2>
  <ul className="space-y-6">
    {HimachalPradesh.seasons.map((season, index) => (
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
              {HimachalPradesh.exploreIsland.map((island, index) => (
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

            {HimachalPradesh.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {HimachalPradesh.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {HimachalPradesh.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {HimachalPradesh.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {HimachalPradesh.reasons &&
                    HimachalPradesh.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {HimachalPradesh.reasons &&
                    HimachalPradesh.reasons.reasonParts.map(
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
            {HimachalPradesh.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {HimachalPradesh.placeName}
                </h2>
                {HimachalPradesh.faqData.map((faq, index) => (
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
                      {(HimachalPradesh.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {HimachalPradesh.price
                      ? HimachalPradesh.price.toLocaleString("en-IN")
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
