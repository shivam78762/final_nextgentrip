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


  const Goa= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Goa",
    seasons:[
      {
        "mainHeading": "Winter Season (November to February):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "This is the peak tourist season in Goa. The weather is pleasantly cool and dry, with temperatures ranging from 20°C to 30°C (68°F to 86°F). The humidity is lower, and rainfall is minimal, making it ideal for beach activities and outdoor exploration."
          },
          {
            "heading": "Activities:",
            "desc": "Perfect for enjoying the vibrant beach scene, water sports, and exploring Goa’s rich cultural festivals. It’s also a great time for experiencing the lively New Year and Christmas celebrations."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "This period sees the highest number of tourists, so popular areas and accommodations can be crowded and more expensive. It’s advisable to book accommodations and flights well in advance."
          }
        ]
      },
      {
        "mainHeading": "Monsoon Season (June to September):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "The monsoon season brings heavy rains and high humidity, with temperatures ranging from 25°C to 30°C (77°F to 86°F). Expect frequent showers, which can lead to lush green landscapes and fewer crowds."
          },
          {
            "heading": "Activities:",
            "desc": "This is a quieter time, making it ideal for those seeking solitude and natural beauty. It’s a good time to explore Goa’s scenic landscapes, waterfalls, and spice plantations. However, some beach activities and outdoor tours might be limited due to the weather."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Fewer tourists visit during this season, leading to lower prices for accommodations and flights. It’s a budget-friendly time to visit if you don’t mind the rain."
          }
        ]
      },
      {
        "mainHeading": "Shoulder Seasons (March to May and October):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "These months are transitional periods. March to May is the start of the pre-monsoon heat with temperatures climbing to around 30°C to 35°C (86°F to 95°F). October marks the end of the monsoon with decreasing rainfall and improving weather conditions."
          },
          {
            "heading": "Activities:",
            "desc": "March to May can be quite hot, but it’s a good time for beach lovers looking for less crowded shores. October offers a pleasant mix of lower humidity and the return of outdoor activities as the monsoon season winds down."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Both periods see fewer tourists compared to peak season, with lower accommodation and flight costs. The shoulder season can offer a balance between good weather and manageable crowds."
          }
        ]
      },
      {
        "mainHeading": "Festivals and Events:",
        "list": [
          {
            "heading": "Goa Carnival (February):",
            "desc": "Held before Lent, the Carnival is a vibrant festival featuring parades, music, and dance. It’s a lively time to experience Goan culture."
          },
          {
            "heading": "Shigmo Festival (March):",
            "desc": "A traditional Goan festival with colorful parades, folk dances, and cultural performances, celebrated primarily in rural areas."
          },
          {
            "heading": "Ganesh Chaturthi (August/September):",
            "desc": "Celebrated with elaborate decorations and processions, this festival offers a glimpse into local religious and cultural practices."
          }
        ]
      }
      
    ],
    
    faqData: [
      {
        "question": "When is the best time to visit Goa?",
        "answers": [
          "The best time to visit Goa is from November to February during the winter season. The weather is pleasant and ideal for beach activities, with temperatures ranging from 20°C to 30°C (68°F to 86°F).",
          "For those seeking a quieter experience with fewer tourists and lower costs, consider traveling during the monsoon season (June to September) or the shoulder seasons (March to May and October)."
        ]
      },
      {
        "question": "Do I need a visa to travel to Goa?",
        "answers": [
          "Goa is part of India, so visa requirements depend on your nationality. Many travelers need an Indian visa to enter. Some countries can apply for an e-visa online for short stays.",
          "Check the latest visa requirements with the Indian embassy or consulate in your country before traveling."
        ]
      },
      {
        "question": "What is the local currency in Goa, and can I use credit cards?",
        "answers": [
          "The local currency is the Indian Rupee (INR). Credit and debit cards are widely accepted in hotels, restaurants, and larger shops.",
          "It’s advisable to carry some cash for smaller transactions and in more remote areas where card facilities might not be available."
        ]
      },
      {
        "question": "What languages are spoken in Goa?",
        "answers": [
          "The official languages of Goa are Konkani and Marathi. English and Hindi are also commonly spoken, especially in tourist areas, hotels, and restaurants, making it relatively easy for international visitors to communicate."
        ]
      },
      {
        "question": "What should I pack for a trip to Goa?",
        "answers": [
          "Pack light, breathable clothing suitable for tropical weather. Essentials include swimwear, sunscreen, a hat, sunglasses, and comfortable footwear.",
          "If visiting religious sites or temples, bring modest clothing that covers your shoulders and knees."
        ]
      },
      {
        "question": "Are there any cultural norms or customs I should be aware of?",
        "answers": [
          "Yes, respect local customs by dressing modestly when visiting religious sites and removing your shoes before entering temples and homes.",
          "Public displays of affection are generally avoided. It’s also polite to use your right hand for giving and receiving items, as the left hand is considered unclean in traditional practices."
        ]
      },
      {
        "question": "Is Goa safe for tourists?",
        "answers": [
          "Goa is generally considered safe for tourists with a low crime rate. However, as with any travel destination, exercise standard safety precautions.",
          "Keep an eye on your belongings, avoid isolated areas at night, and be cautious with water activities and road safety if renting a scooter."
        ]
      },
      {
        "question": "Can I find Wi-Fi easily in Goa?",
        "answers": [
          "Yes, Wi-Fi is widely available in Goa. Most hotels, cafes, and restaurants offer free Wi-Fi. Connectivity is generally reliable in tourist areas, though it might be less consistent in more remote locations."
        ]
      }
      
      
      
    ],

    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Goa is from November to March when the weather is pleasant and conducive to beach activities and outdoor exploration.",
      },
      {
        heading: "Local Transport",
        description:
          "Utilize local taxis, rent scooters or bikes, or use ride-sharing apps to navigate Goa. Consider hiring a car for exploring remote areas.",
      },
      {
        heading: "Dress Code",
        description:
          "Wear light, comfortable clothing and swimwear for the beaches. Carry sunscreen, sunglasses, and a hat for sun protection.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, use sunscreen, and be cautious with street food. Ensure you have travel insurance for a safe and enjoyable trip.",
      },
    ],

    exploreIsland: [
      {
        island: "North Goa Beaches",
        attractions: [
          {
            name: "Baga Beach",
            description:
              "Known for its lively atmosphere and water sports, Baga Beach is a hotspot for tourists looking for action. Enjoy parasailing, jet skiing, and vibrant beach shacks.",
          },
          {
            name: "Anjuna Beach",
            description:
              "Famous for its bohemian vibe and flea market, Anjuna Beach is perfect for shopping, dining, and enjoying sunset views.",
          },
          {
            name: "Calangute Beach",
            description:
              "One of the most popular beaches, Calangute offers a mix of relaxation and entertainment with numerous cafes, bars, and shops.",
          },
        ],
      },
      {
        island: "South Goa Beaches",
        attractions: [
          {
            name: "Palolem Beach",
            description:
              "Renowned for its picturesque beauty and calm waters, Palolem Beach is ideal for a relaxed day by the sea. Enjoy kayaking and dolphin-watching tours.",
          },
          {
            name: "Agonda Beach",
            description:
              "A serene and less crowded beach, Agonda is perfect for those seeking peace and solitude away from the bustling crowds.",
          },
          {
            name: "Colva Beach",
            description:
              "A popular beach with a long stretch of white sand, Colva Beach is great for swimming and enjoying local seafood at beachside shacks.",
          },
        ],
      },
      {
        island: "Old Goa",
        attractions: [
          {
            name: "Basilica of Bom Jesus",
            description:
              "Visit this UNESCO World Heritage site known for its stunning baroque architecture and the tomb of St. Francis Xavier.",
          },
          {
            name: "Se Cathedral",
            description:
              "Explore one of the largest churches in Asia, famous for its impressive Portuguese-Gothic architecture and historical significance.",
          },
          {
            name: "St. Cajetan Church",
            description:
              "A beautiful example of baroque architecture, St. Cajetan Church is known for its elegant interiors and historical value.",
          },
        ],
      },
      {
        island: "Panaji",
        attractions: [
          {
            name: "Fontainhas",
            description:
              "Wander through the Latin Quarter of Panaji, known for its colorful Portuguese-style houses, quaint streets, and vibrant cultural scene.",
          },
          {
            name: "Dona Paula Viewpoint",
            description:
              "Enjoy panoramic views of the Arabian Sea and the Mandovi River from this popular viewpoint, perfect for capturing stunning photographs.",
          },
        ],
      },
      {
        island: "Dudhsagar Waterfalls",
        attractions: [
          {
            name: "Majestic Falls",
            description:
              "Witness the majestic Dudhsagar Waterfalls, one of India’s highest waterfalls, cascading down from a height of 310 meters. Take a jeep safari or trek through the lush forests to reach the falls.",
          },
        ],
      },
      {
        island: "Spice Plantations",
        attractions: [
          {
            name: "Plantation Tours",
            description:
              "Explore Goa’s spice plantations and learn about the cultivation of various spices such as cardamom, pepper, and cloves. Enjoy guided tours that offer insights into traditional spice farming and local culinary practices.",
          },
        ],
      },
      {
        island: "Wildlife Sanctuaries",
        attractions: [
          {
            name: "Bhagwan Mahavir Wildlife Sanctuary",
            description:
              "Discover the rich biodiversity of this sanctuary, home to a variety of flora and fauna, including tigers, leopards, and various bird species.",
          },
          {
            name: "Cotigao Wildlife Sanctuary",
            description:
              "Explore this sanctuary known for its dense forests and diverse wildlife, including the Indian bison and the Malabar giant squirrel.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Water Sports",
        description:
          "Engage in thrilling water sports such as parasailing, jet skiing, and windsurfing. Goa’s beaches offer ample opportunities for adventure enthusiasts.",
      },
      {
        title: "Cruise Tours",
        description:
          "Take a sunset or dinner cruise on the Mandovi River, enjoying scenic views, live music, and delicious Goan cuisine.",
      },
      {
        title: "Local Markets",
        description:
          "Visit Goa’s vibrant markets like the Anjuna Flea Market and Mapusa Market to shop for local handicrafts, souvenirs, and delicious street food.",
      },
      {
        title: "Cultural Festivals",
        description:
          "Experience Goa’s vibrant festivals, such as the Goa Carnival and Shigmo Festival, featuring colorful parades, traditional dances, and local music.",
      },
    ],

    reasons: {
      heading:
        "Goa stands out as a travel destination for its unique blend of natural beauty and cultural richness.Here’s why Goa should be at the top of your travel list:",
      reasonParts: [
        {
          title: "Stunning Beaches",
          description:
            "Enjoy a range of beaches from bustling shores to tranquil coves, each offering its own charm and activities.",
        },
        {
          title: "Vibrant Nightlife",
          description:
            "Dive into Goa’s lively nightlife with beach parties, nightclubs, and music festivals.",
        },
        {
          title: "Rich History and Culture",
          description:
            "Explore Goa’s Portuguese heritage through its architecture, churches, and vibrant festivals.",
        },
        {
          title: "Adventure and Relaxation",
          description:
            "Whether you seek thrilling water sports or peaceful relaxation, Goa caters to all preferences.",
        },
      ],
    },

    packageOverView:
      "Welcome to Goa, India’s premier beach destination where sun, sand, and vibrant culture come together to create an unforgettable getaway. Known for its stunning coastlines, lively nightlife, and rich Portuguese heritage, Goa offers a diverse range of experiences for every traveler. At Next Gen India, we specialize in crafting personalized itineraries that ensure you make the most of your Goan adventure. Let us guide you through Goa’s top destinations, activities, and unique experiences.",
    price: 21999,
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
                {Goa.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Goa.placeName &&
                    Goa.placeName}
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
                src={Goa.exolreImage}
                alt={Goa.placeName}
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
              {Goa.inclusion && (
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
                Best Time to Visit {Goa.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Goa.packageOverView}</p>
            </div>
            {Goa.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Goa.exploreHotle}
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
                    {Goa.Accommodation &&
                      Goa.Accommodation.map((elm, index) => (
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
                {Goa.activities &&
                  Goa.activities.map((activity, index) => (
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

            {Goa.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Goa.inclusions &&
                      Goa.inclusions.map((inclusion, index) => (
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
                    {Goa.exclusions &&
                      Goa.exclusions.map((exclusion, index) => (
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
      {Goa.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Goa.placeName}
  </h2>
  <ul className="space-y-6">
    {Goa.seasons.map((season, index) => (
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
              {Goa.exploreIsland.map((island, index) => (
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

            {Goa.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Goa.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Goa.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Goa.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Goa.reasons &&
                    Goa.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Goa.reasons &&
                    Goa.reasons.reasonParts.map(
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
            {Goa.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Goa.placeName}
                </h2>
                {Goa.faqData.map((faq, index) => (
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
                      {(Goa.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Goa.price
                      ? Goa.price.toLocaleString("en-IN")
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
