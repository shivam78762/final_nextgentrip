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

  const Gujarat= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Gujarat",
   
    
    seasons:[
      {
        mainHeading:"Winter Season (November to February):",
        list:[
         {
           heading:"Weather:",
           desc:"This is considered the best time to visit Gujarat. The weather is pleasantly cool and comfortable, with temperatures ranging from 10°C to 25°C (50°F to 77°F). The humidity is lower, making it ideal for sightseeing and outdoor activities."
          },
          {
              heading:"Activities:",
           desc:"Perfect for exploring Gujarat’s diverse attractions, including historical sites, wildlife sanctuaries, and cultural festivals. The pleasant weather makes it a great time for visiting cities like Ahmedabad, Vadodara, and the Rann of Kutch."
          },
          {
              
            heading:"Events:",
            desc:"Major festivals like the International Kite Festival (January) and Ratha Yatra (June or July) are celebrated during this period, providing a vibrant cultural experience."
          }
        ]
      },
      {
        mainHeading:"Summer Season (March to June):",
        list:[
         {
           heading:"Weather:",
           desc:"Gujarat experiences very hot temperatures during the summer months, often exceeding 35°C (95°F). The heat can be intense, especially in April and May, making outdoor exploration less comfortable."
          },
          {
              heading:"Activities:",
           desc:"While the summer heat can be challenging, it’s a good time to visit hill stations like Mount Abu, which is cooler than the rest of the state. Coastal areas like Diu also offer some respite from the heat."
          },
          {
              
            heading:"Crowds and Costs:",
            desc:"This period sees fewer tourists, so accommodations and travel costs may be lower. However, be prepared for the high temperatures and ensure adequate hydration and sun protection."
          }
        ]
      },
      {
        mainHeading:" Monsoon Season (July to October):",
        list:[
         {
           heading:"Weather:",
           desc:" The monsoon season brings moderate to heavy rainfall, with temperatures ranging from 25°C to 35°C (77°F to 95°F). Humidity levels increase, and some areas may experience flooding."
          },
          {
              heading:"Activities:",
           desc:"This is a good time for enjoying the lush landscapes and experiencing the natural beauty of Gujarat. The monsoon season is ideal for visiting the Gir National Park as the wildlife is more active and the park is lush green."
          },
          {
              
            heading:"Crowds and Costs:",
            desc:"Tourist numbers are lower, and you can often find better deals on accommodations. However, be prepared for occasional disruptions due to rain and check weather conditions before travel."
          }
        ]
      },
      {
        mainHeading:" Festivals and Events:",
        list:[
         {
           heading:"Navratri (September/October):",
           desc:" A major cultural festival celebrated with vibrant Garba and Dandiya dances. It’s a great time to experience Gujarat’s rich traditions and local celebrations."
          },
          {
              heading:"Diwali (October/November):",
           desc:"The Festival of Lights is celebrated with much enthusiasm across Gujarat, featuring fireworks, festivities, and traditional sweets."
          },
          {
              
            heading:"Kutch Festival (December to February):",
            desc:" Held in the Rann of Kutch, this festival showcases local crafts, music, and dance amidst the unique white salt desert landscape."
          }
        ]
      }
    ],
    
    faqData: [
      {
        "question": "When is the best time to visit Gujarat?",
        "answers": [
          "The best time to visit Gujarat is from November to February during the winter season. The weather is cooler and more comfortable, ranging from 10°C to 25°C (50°F to 77°F), making it ideal for sightseeing and outdoor activities.",
          "March to June is quite hot, with temperatures often exceeding 35°C (95°F).",
          "The monsoon season (July to October) brings heavy rains and high humidity, which may affect travel plans."
        ]
      },
      {
        "question": "Do I need a visa to travel to Gujarat?",
        "answers": [
          "Gujarat is part of India, so visa requirements depend on your nationality.",
          "Most international travelers need an Indian visa. You can apply for an e-visa online for short stays or visit the Indian embassy or consulate in your country for other visa options."
        ]
      },
      {
        "question": "What is the local currency in Gujarat, and can I use credit cards?",
        "answers": [
          "The local currency is the Indian Rupee (INR).",
          "Credit and debit cards are widely accepted in major cities and tourist areas.",
          "It’s advisable to carry some cash for smaller transactions or in more remote locations where card facilities might not be available."
        ]
      },
      {
        "question": "What languages are spoken in Gujarat?",
        "answers": [
          "The official language of Gujarat is Gujarati.",
          "Hindi and English are also commonly spoken, especially in tourist areas, hotels, and major cities, making communication relatively easy for international visitors."
        ]
      },
      {
        "question": "What should I pack for a trip to Gujarat?",
        "answers": [
          "Winter (November to February): Light layers, a warm jacket, and comfortable walking shoes.",
          "Summer (March to June): Light, breathable clothing, sun protection (hat, sunglasses, sunscreen), and plenty of water.",
          "Monsoon (July to October): Waterproof clothing, an umbrella, and sturdy shoes that can handle wet conditions."
        ]
      },
      {
        "question": "Are there any cultural norms or customs I should be aware of?",
        "answers": [
          "Be respectful of local customs. Dress modestly when visiting religious sites—covering shoulders and knees is essential.",
          "Remove your shoes before entering temples and homes.",
          "Public displays of affection are generally avoided, and it’s polite to use your right hand for giving and receiving items."
        ]
      },
      {
        "question": "Is Gujarat safe for tourists?",
        "answers": [
          "Gujarat is generally safe for tourists with a low crime rate.",
          "However, as with any travel destination, exercise standard safety precautions. Be mindful of your belongings, avoid isolated areas at night, and be cautious with local transportation."
        ]
      },
      {
        "question": "Can I find Wi-Fi easily in Gujarat?",
        "answers": [
          "Yes, Wi-Fi is widely available in Gujarat. Most hotels, cafes, and restaurants offer free Wi-Fi.",
          "Connectivity is generally reliable in urban areas and major tourist spots, though it may be less consistent in more remote locations."
        ]
      }
    ],
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Gujarat is from October to March when the weather is pleasant and suitable for sightseeing and outdoor activities.",
      },
      {
        heading: "Local Transport",
        description:
          "Utilize local taxis, buses, and auto-rickshaws to navigate between destinations. Consider hiring a private car for convenience.",
      },
      {
        heading: "Dress Code",
        description:
          "Dress modestly when visiting religious sites. Lightweight and comfortable clothing is recommended due to the state’s warm climate.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, use sunscreen, and be cautious with street food. Ensure you have travel insurance for a safe and enjoyable trip.",
      },
    ],

    exploreIsland: [
      {
        island: "Ahmedabad",
        attractions: [
          {
            name: "Sabarmati Ashram",
            description:
              "Visit Sabarmati Ashram, the former residence of Mahatma Gandhi, which played a pivotal role in India’s independence movement. Explore the museum and learn about Gandhi’s life and legacy.",
          },
          {
            name: "Sidi Saiyyed Mosque",
            description:
              "Admire the intricate lattice work of Sidi Saiyyed Mosque, renowned for its beautiful jaali (lattice) windows depicting delicate patterns.",
          },
          {
            name: "Jama Masjid",
            description:
              "Discover the grandeur of Jama Masjid, a historic mosque with stunning architecture and a serene atmosphere.",
          },
          {
            name: "Manek Chowk",
            description:
              "Experience the vibrant street food scene at Manek Chowk, where you can sample local delights like pav bhaji, khadiya, and more.",
          },
        ],
      },
      {
        island: "Gandhinagar",
        attractions: [
          {
            name: "Akshardham Temple",
            description:
              "Marvel at the grandeur of Akshardham Temple, a modern architectural marvel dedicated to Lord Swaminarayan. Explore the intricately carved structures, gardens, and exhibits.",
          },
          {
            name: "Gandhi Ashram",
            description:
              "Visit Gandhi Ashram, located on the banks of the Sabarmati River, to learn more about the life and principles of Mahatma Gandhi.",
          },
        ],
      },
      {
        island: "Kutch",
        attractions: [
          {
            name: "Rann of Kutch",
            description:
              "Explore the Rann of Kutch, a vast salt marsh known for its annual Rann Utsav festival. Witness the surreal landscape, enjoy cultural performances, and partake in activities like camel rides and handicraft shopping.",
          },
          {
            name: "Kalo Dungar",
            description:
              "Visit Kalo Dungar, the highest point in Kutch, for panoramic views of the Rann of Kutch and the surrounding landscape.",
          },
        ],
      },
      {
        island: "Gir National Park",
        attractions: [
          {
            name: "Wildlife Safari",
            description:
              "Embark on a thrilling wildlife safari in Gir National Park, the last refuge of the Asiatic lion. Spot these majestic lions along with other wildlife such as leopards, deer, and various bird species.",
          },
          {
            name: "Devalia Safari Park",
            description:
              "Explore Devalia Safari Park, a fenced-off area of Gir National Park, which offers a chance to see the Asiatic lion and other wildlife up close.",
          },
        ],
      },
      {
        island: "Somnath",
        attractions: [
          {
            name: "Somnath Temple",
            description:
              "Visit the Somnath Temple, one of the twelve Jyotirlingas dedicated to Lord Shiva. The temple’s rich history and stunning coastal location make it a significant pilgrimage site.",
          },
          {
            name: "Bhalka Tirth",
            description:
              "Explore Bhalka Tirth, a revered site where Lord Krishna is believed to have been mistaken for a deer and struck by an arrow.",
          },
        ],
      },
      {
        island: "Dwarka",
        attractions: [
          {
            name: "Dwarkadhish Temple",
            description:
              "Experience the spiritual ambiance of Dwarkadhish Temple, dedicated to Lord Krishna. The temple’s intricate carvings and religious significance make it a must-visit.",
          },
          {
            name: "Bet Dwarka",
            description:
              "Take a boat ride to Bet Dwarka, an island associated with the mythology of Lord Krishna. Explore the temples and enjoy the serene surroundings.",
          },
        ],
      },
      {
        island: "Saputara",
        attractions: [
          {
            name: "Hill Station Retreat",
            description:
              "Enjoy the natural beauty of Saputara, Gujarat’s only hill station, known for its lush greenery, pleasant climate, and scenic viewpoints.",
          },
          {
            name: "Saputara Lake",
            description:
              "Relax by Saputara Lake, where you can enjoy boating, picnicking, and the picturesque views of the surrounding hills.",
          },
        ],
      },
      {
        island: "Patan",
        attractions: [
          {
            name: "Rani ki Vav",
            description:
              "Discover Rani ki Vav, an exquisite stepwell and UNESCO World Heritage site, renowned for its intricate carvings and architectural brilliance.",
          },
          {
            name: "Patola Silk Weaving",
            description:
              "Explore Patan’s traditional silk weaving industry, known for its vibrant and intricate Patola sarees.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Cultural Tours",
        description:
          "Immerse yourself in Gujarat’s vibrant culture with guided tours of local festivals, traditional dance performances, and craft villages.",
      },
      {
        title: "Wildlife Safaris",
        description:
          "Enjoy thrilling wildlife safaris in Gir National Park and other wildlife sanctuaries, offering a chance to spot rare species and experience the region’s natural beauty.",
      },
      {
        title: "Handicraft Shopping",
        description:
          "Explore local markets and craft villages to buy exquisite handicrafts such as bandhani textiles, embroidery, and traditional jewelry.",
      },
      {
        title: "Gastronomic Journeys",
        description:
          "Savor the diverse flavors of Gujarati cuisine, including famous dishes like dhokla, khandvi, and undhiyu. Don’t miss out on local sweets like jalebi and shrikhand.",
      },
    ],

    reasons: {
      heading:
        "Gujarat stands out as a destination for its historical significance, cultural richness, and natural beauty. Here’s why Gujarat should be on your travel itinerary",
      reasonParts: [
        {
          title: "Historical Heritage",
          description:
            "Explore the state’s impressive forts, palaces, and ancient temples that tell the story of Gujarat’s rich history.",
        },
        {
          title: "Cultural Diversity",
          description:
            "Immerse yourself in Gujarat’s vibrant festivals, traditional crafts, and colorful local markets.",
        },
        {
          title: "Natural Wonders",
          description:
            "Discover the unique landscapes of the Rann of Kutch, the picturesque Gir Forest, and the serene beaches along the Arabian Sea.",
        },
        {
          title: "Culinary Delights",
          description:
            "Savor the diverse flavors of Gujarati cuisine, from spicy snacks to sweet delicacies.",
        },
      ],
    },

    packageOverView:
      "Welcome to Gujarat, a land of rich history, vibrant culture, and diverse landscapes. Located on the western coast of India, Gujarat offers an array of experiences that cater to every type of traveler.From ancient temples and historic forts to sprawling deserts and picturesque beaches, Gujarat is a treasure trove of unique destinations and activities. At Next Gen India, we are dedicated to crafting personalized itineraries that highlight the very best of this fascinating state. Let us guide you through Gujarat’s top attractions, activities, and experiences, ensuring a memorable journey.",
    price: 23999,
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
                {Gujarat.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE {Gujarat.placeName && Gujarat.placeName}
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
                src={Gujarat.exolreImage}
                alt={Gujarat.placeName}
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
              {Gujarat.inclusion && (
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
                Best Time to Visit {Gujarat.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Gujarat.packageOverView}</p>
            </div>
            {Gujarat.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Gujarat.exploreHotle}
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
                    {Gujarat.Accommodation &&
                      Gujarat.Accommodation.map((elm, index) => (
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
                {Gujarat.activities &&
                  Gujarat.activities.map((activity, index) => (
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

            {Gujarat.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Gujarat.inclusions &&
                      Gujarat.inclusions.map((inclusion, index) => (
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
                    {Gujarat.exclusions &&
                      Gujarat.exclusions.map((exclusion, index) => (
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
            {Gujarat.seasons && (
              <div
                id="BestTimetoVisit"
                className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
              >
                <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
                  Best Time to Visit {Gujarat.placeName}
                </h2>
                <ul className="space-y-6">
                  {Gujarat.seasons.map((season, index) => (
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
              {Gujarat.exploreIsland.map((island, index) => (
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

            {Gujarat.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Gujarat.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Gujarat.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Gujarat.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>{Gujarat.reasons && Gujarat.reasons.heading}</p>
                <div className="flex flex-col gap-3">
                  {Gujarat.reasons &&
                    Gujarat.reasons.reasonParts.map((reason, index) => (
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
            {Gujarat.faqData && (
              <section id="faq" className="py-6 ">
                <div className="container mx-auto px-4">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    FAQs About Traveling to {Gujarat.placeName}
                  </h2>
                  {Gujarat.faqData.map((faq, index) => (
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
                        className={`overflow-hidden list-disc pl-6 mt-2 text-gray-700 transition-all duration-500 ease-in-out ${
                          expandedIndex === index
                            ? "max-h-[300px] opacity-100"
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
                    <span>
                      {(Gujarat.price + 1122).toLocaleString("en-IN")}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Gujarat.price
                      ? Gujarat.price.toLocaleString("en-IN")
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
