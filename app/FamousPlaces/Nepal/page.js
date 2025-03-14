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


const  Nepal= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Nepal",
    seasons: [
      {
        "mainHeading": "Autumn Season (September to November)",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Autumn is one of the most popular times to visit Nepal. The weather is clear and dry, with pleasant temperatures ranging from 15°C to 25°C (59°F to 77°F). This is considered the best time for trekking and exploring the natural beauty of Nepal."
          },
          {
            "heading": "Activities:",
            "desc": "Ideal for trekking, particularly in the Annapurna and Everest regions. Clear skies offer stunning mountain views, and the stable weather conditions make travel and outdoor activities enjoyable."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "This is a peak tourist season, so expect more visitors and higher prices for accommodation and flights. Booking in advance is recommended to secure the best deals and availability."
          }
        ]
      },
      {
        "mainHeading": "Spring Season (March to May)",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Spring is another excellent time to visit Nepal, with temperatures ranging from 10°C to 20°C (50°F to 68°F). The weather is generally clear, though occasional showers can occur. The blooming rhododendrons and other flowers add vibrant colors to the landscape."
          },
          {
            "heading": "Activities:",
            "desc": "Ideal for trekking, wildlife safaris, and cultural tours. The pleasant weather and blooming flora enhance the trekking experience, and it’s a great time for visiting national parks and cultural sites."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Spring sees a moderate number of tourists, making it a good time for those who prefer fewer crowds compared to autumn. Prices are generally more reasonable than in the peak season."
          }
        ]
      },
      {
        "mainHeading": "Monsoon Season (June to August)",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Monsoon season brings heavy rainfall, with temperatures ranging from 20°C to 30°C (68°F to 86°F). The rain can lead to muddy trails, landslides, and travel disruptions. Humidity is high, and the weather can be unpredictable."
          },
          {
            "heading": "Activities:",
            "desc": "While some trekking routes may be challenging due to rain and slippery paths, this is a good time to visit the Terai region for wildlife viewing, as the rain brings lush vegetation and abundant wildlife sightings."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Tourist numbers are lower during the monsoon season, and you may find reduced rates for accommodation and flights. However, be prepared for the possibility of rain-related disruptions and travel difficulties."
          }
        ]
      },
      {
        "mainHeading": "Winter Season (December to February)",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Winter in Nepal is cool to cold, with temperatures ranging from 0°C to 15°C (32°F to 59°F). The weather can be crisp and clear, especially in the lowlands, but temperatures in the mountains can drop significantly."
          },
          {
            "heading": "Activities:",
            "desc": "Winter is suitable for trekking in lower altitudes, such as the Kathmandu Valley or lower regions of Annapurna and Everest. Higher altitude treks can be challenging due to cold temperatures and snow."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Winter sees fewer tourists, which can lead to lower accommodation costs and less crowded attractions. However, some high-altitude treks may be less accessible due to snow and cold weather."
          }
        ]
      },
      {
        "mainHeading": "Regional Considerations",
        "list": [
          {
            "heading": "Kathmandu Valley and Terai Region:",
            "desc": "Can be visited year-round, with the best weather during the autumn and spring seasons."
          },
          {
            "heading": "Mountain Regions:",
            "desc": "Best visited during autumn and spring for trekking and outdoor activities, as the weather is more favorable for hiking and exploration."
          }
        ]
      }
    ],
    
    faqData:[
      {
        "question": "Do I need a visa to travel to Nepal?",
        "answers": [
          "Yes, most travelers require a visa to enter Nepal. You can obtain a visa upon arrival at Tribhuvan International Airport in Kathmandu or apply for an e-visa online before your trip. Ensure you check the specific visa requirements based on your nationality and the length of your stay."
        ]
      },
      {
        "question": "What is the best time to visit Nepal?",
        "answers": [
          "Kathmandu and the Terai Region: The best time to visit is during the autumn season (September to November) and the spring season (March to May) when the weather is pleasant and clear.",
          "Trekking Regions: For trekking in the mountains, autumn (September to November) and spring (March to May) are ideal due to favorable weather and clear views. The monsoon season (June to August) brings heavy rains, while winter (December to February) can be cold and challenging at higher altitudes."
        ]
      },
      {
        "question": "What is the local currency, and can I use credit cards?",
        "answers": [
          "The local currency is the Nepalese Rupee (NPR). Credit and debit cards are accepted in major cities like Kathmandu and Pokhara, as well as in many hotels, restaurants, and shops. However, it’s advisable to carry cash, especially when traveling to rural areas."
        ]
      },
      {
        "question": "What languages are spoken in Nepal?",
        "answers": [
          "The official language is Nepali. In tourist areas, English is widely spoken, making communication relatively easy. Nepal is a multilingual country with various ethnic groups speaking different languages and dialects."
        ]
      },
      {
        "question": "What should I pack for a trip to Nepal?",
        "answers": [
          "Kathmandu and Urban Areas: Light, comfortable clothing suitable for variable temperatures. Bring a jacket or sweater for cooler evenings.",
          "Trekking: Pack appropriate gear based on the season. For autumn and spring, lightweight, breathable clothing and layers are ideal. For monsoon, waterproof gear is necessary, while winter treks require warm clothing and insulated layers."
        ]
      },
      {
        "question": "Are there any cultural norms or customs I should be aware of?",
        "answers": [
          "Dress Modestly: Especially when visiting religious sites. Cover your shoulders and knees.",
          "Religious Respect: Remove shoes before entering temples and be mindful of local customs. Avoid touching religious artifacts or statues.",
          "Greetings: A traditional Nepali greeting involves placing your palms together and bowing slightly."
        ]
      },
      {
        "question": "Is Nepal safe for tourists?",
        "answers": [
          "Nepal is generally safe for tourists, with a relatively low crime rate. Exercise standard safety precautions such as securing your belongings, avoiding isolated areas at night, and using reputable transportation services."
        ]
      },
      {
        "question": "What types of accommodation are available in Nepal?",
        "answers": [
          "Nepal offers a range of accommodations from luxury hotels and boutique lodges to budget guesthouses and hostels. In trekking regions, options can vary from basic teahouses to more comfortable lodges."
        ]
      },
      {
        "question": "Can I find Wi-Fi in Nepal?",
        "answers": [
          "Wi-Fi is widely available in Kathmandu and other major cities, with many hotels, cafes, and restaurants offering it. However, connectivity may be less reliable in rural or remote areas."
        ]
      }
    ]
    ,
    packageOverView:
      "Welcome to Nepal, a land of unparalleled natural beauty, spiritual depth, and adventurous spirit. Nestled in the heart of the Himalayas, Nepal is a treasure trove of majestic mountains, ancient temples, vibrant cultures, and thrilling adventures. Whether you&#39;re seeking tranquility in the serene landscapes or an adrenaline rush in high-altitude adventures, Nepal offers a wealth of experiences for every traveler. At Next Gen India, we are dedicated to crafting bespoke travel itineraries that will help you uncover the best of this enchanting country. Let us guide you through Nepal’s top destinations, unique attractions, and unforgettable experiences.",
    price: 12999,
    reasons: {
      heading: "Nepal is a traveler’s paradise for many reasons",
      reasonParts: [
        {
          title: "Stunning Natural Landscapes",
          description:
            "From the towering peaks of the Himalayas to lush valleys and serene lakes, Nepal’s natural beauty is truly breathtaking.",
        },
        {
          title: "Rich Cultural Heritage",
          description:
            "Immerse yourself in Nepal’s vibrant culture with its ancient temples, colorful festivals, and diverse traditions.",
        },
        {
          title: "Adventure Opportunities",
          description:
            "Engage in a variety of adventure activities, including trekking, mountaineering, white-water rafting, and paragliding.",
        },
        {
          title: "Spiritual Retreats",
          description:
            "Find inner peace in the country’s numerous monasteries and temples, offering a serene environment for meditation and reflection.",
        },
      ],
    },
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Nepal is from September to November for clear skies and pleasant weather, or from March to May for trekking and adventure activities.",
      },
      {
        heading: "Local Transport",
        description:
          "Use local buses, taxis, and rental cars to navigate cities and rural areas. Consider hiring a private driver for more convenience and flexibility.",
      },
      {
        heading: "Dress Code",
        description:
          "Dress modestly when visiting religious sites. Pack layers, as temperatures can vary widely between day and night, and comfortable walking shoes are essential.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, use sunscreen, and be cautious with street food. Ensure you have travel insurance and consult with a travel health clinic for vaccinations and health advice.",
      },
    ],

    exploreIsland: [
      {
        island: "Kathmandu and Surroundings",
        attractions: [
          {
            name: "Durbar Square",
            description:
              "Explore Kathmandu’s historic Durbar Square, a UNESCO World Heritage site renowned for its stunning temples, palaces, and intricate architecture.",
          },
          {
            name: "Swayambhunath (Monkey Temple)",
            description:
              "Visit Swayambhunath Stupa, one of the oldest and most revered pilgrimage sites, offering panoramic views of the Kathmandu Valley.",
          },
          {
            name: "Patan Durbar Square",
            description:
              "Discover the artistic splendor of Patan Durbar Square, known for its exquisite temples, statues, and traditional Newari architecture.",
          },
        ],
      },
      {
        island: "Pokhara",
        attractions: [
          {
            name: "Phewa Lake",
            description:
              "Enjoy a serene boat ride on Phewa Lake, with the iconic Machapuchare (Fishtail) Peak reflecting on its tranquil waters.",
          },
          {
            name: "Sarangkot",
            description:
              "Hike or drive to Sarangkot for stunning sunrise views over the Annapurna Range and the Pokhara Valley.",
          },
          {
            name: "World Peace Pagoda",
            description:
              "Visit the World Peace Pagoda, a serene stupa offering panoramic views of Pokhara and the surrounding Himalayan peaks.",
          },
        ],
      },
      {
        island: "Chitwan National Park",
        attractions: [
          {
            name: "Wildlife Safari",
            description:
              "Experience an exciting jungle safari in Chitwan National Park, home to the endangered one-horned rhinoceros, Bengal tigers, and diverse bird species.",
          },
          {
            name: "Elephant Rides",
            description:
              "Enjoy a memorable elephant ride through the park’s dense forests and grasslands.",
          },
          {
            name: "Tharu Village Tour",
            description:
              "Explore a traditional Tharu village to learn about the local culture and way of life.",
          },
        ],
      },
      {
        island: "Lumbini",
        attractions: [
          {
            name: "Birthplace of Buddha",
            description:
              "Visit Lumbini, the birthplace of Siddhartha Gautama, who became the Buddha. Explore the sacred garden, Maya Devi Temple, and various monasteries built by different Buddhist communities.",
          },
          {
            name: "Lumbini Museum",
            description:
              "Discover the history of Buddhism and the life of the Buddha at the Lumbini Museum.",
          },
        ],
      },
      {
        island: "Everest Region",
        attractions: [
          {
            name: "Everest Base Camp Trek",
            description:
              "Embark on the legendary Everest Base Camp Trek, offering spectacular views of Mount Everest and an opportunity to experience the unique culture of the Sherpa people.",
          },
          {
            name: "Kala Patthar",
            description:
              "Hike to Kala Patthar for breathtaking panoramic views of Mount Everest and the surrounding peaks.",
          },
          {
            name: "Namche Bazaar",
            description:
              "Acclimate in Namche Bazaar, a bustling town and gateway to the Everest region, known for its vibrant market and cultural significance.",
          },
        ],
      },
      {
        island: "Bhaktapur",
        attractions: [
          {
            name: "Bhaktapur Durbar Square",
            description:
              "Explore Bhaktapur Durbar Square, famous for its well-preserved medieval architecture, including the 55-Window Palace, Vatsala Temple, and the Golden Gate.",
          },
          {
            name: "Patan Museum",
            description:
              "Visit the Patan Museum, renowned for its extensive collection of traditional Nepalese art and artifacts housed in a beautifully restored palace.",
          },
        ],
      },
      {
        island: "Nagarkot",
        attractions: [
          {
            name: "Sunrise Views",
            description:
              "Stay in Nagarkot to witness stunning sunrise views over the Himalayas, including Mount Everest, and enjoy the peaceful environment of this hill station.",
          },
          {
            name: "Hiking Trails",
            description:
              "Explore scenic hiking trails in the surrounding hills, offering panoramic views and a tranquil escape from the city.",
          },
        ],
      },
      {
        island: "Bandipur",
        attractions: [
          {
            name: "Hilltop Village",
            description:
              "Discover Bandipur, a picturesque hilltop village known for its traditional Newari architecture, stunning mountain views, and vibrant local culture.",
          },
          {
            name: "Trekking and Hiking",
            description:
              "Enjoy hiking and trekking in the surrounding hills, with trails offering beautiful views of the Himalayas and the surrounding landscape.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Cultural Festivals",
        description:
          "Experience Nepal’s vibrant festivals, such as Dashain, Tihar, and Holi, which showcase the country’s rich traditions and cultural heritage.",
      },
      {
        title: "Trekking and Adventure Sports",
        description:
          "Engage in thrilling activities such as white-water rafting on the Trishuli River, paragliding over Pokhara, and mountain biking in the Kathmandu Valley.",
      },
      {
        title: "Ayurvedic and Wellness Retreats",
        description:
          "Rejuvenate with Ayurvedic treatments and wellness retreats, incorporating traditional healing practices and therapies in serene settings.",
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
                {Nepal.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Nepal.placeName &&
                    Nepal.placeName}
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
                src={Nepal.exolreImage}
                alt={Nepal.placeName}
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
              {Nepal.inclusion && (
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
                Best Time to Visit {Nepal.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Nepal.packageOverView}</p>
            </div>
            {Nepal.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Nepal.exploreHotle}
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
                    {Nepal.Accommodation &&
                      Nepal.Accommodation.map((elm, index) => (
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
                {Nepal.activities &&
                  Nepal.activities.map((activity, index) => (
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

            {Nepal.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Nepal.inclusions &&
                      Nepal.inclusions.map((inclusion, index) => (
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
                    {Nepal.exclusions &&
                      Nepal.exclusions.map((exclusion, index) => (
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
      {Nepal.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Nepal.placeName}
  </h2>
  <ul className="space-y-6">
    {Nepal.seasons.map((season, index) => (
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
              {Nepal.exploreIsland.map((island, index) => (
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

            {Nepal.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Nepal.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Nepal.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Nepal.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Nepal.reasons &&
                    Nepal.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Nepal.reasons &&
                    Nepal.reasons.reasonParts.map(
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
            {Nepal.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Nepal.placeName}
                </h2>
                {Nepal.faqData.map((faq, index) => (
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
                      {(Nepal.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Nepal.price
                      ? Nepal.price.toLocaleString("en-IN")
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
