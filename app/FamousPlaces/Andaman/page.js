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

  const   Andaman= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Andaman",
  
    seasons:[
      {
        "mainHeading": "Winter Season (October to March):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "This is the most favorable time to visit the Andaman and Nicobar Islands. Temperatures range from 23°C to 30°C (73°F to 86°F), with low humidity and pleasant breezes."
          },
          {
            "heading": "Activities:",
            "desc": "Ideal for beach activities, water sports, and sightseeing. Popular activities include snorkeling, scuba diving, and exploring the islands’ natural beauty. The clear skies and calm seas make it perfect for visiting attractions like Havelock Island, Neil Island, and the Cellular Jail."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "This is peak tourist season, so expect higher prices for accommodations and flights. Early booking is recommended to secure the best rates and availability."
          }
        ]
      },
      {
        "mainHeading": "Monsoon Season (April to September):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "The monsoon season brings heavy rainfall and high humidity, with temperatures ranging from 24°C to 31°C (75°F to 88°F). The rain can lead to rough seas and occasional flooding."
          },
          {
            "heading": "Activities:",
            "desc": "While the monsoon season is not ideal for beach and water sports due to unpredictable weather and rough seas, the lush greenery and rejuvenated landscapes can be appealing to some travelers. This is a good time for exploring the islands' natural beauty and enjoying fewer crowds."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "This is the off-peak season, so you may find lower prices for flights and accommodations. However, be prepared for rain and potential travel disruptions."
          }
        ]
      },
      {
        "mainHeading": "Summer Season (April to June):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Summer in the Andaman and Nicobar Islands can be hot and humid, with temperatures reaching up to 35°C (95°F). The weather can be quite sticky and uncomfortable for outdoor activities."
          },
          {
            "heading": "Activities:",
            "desc": "While not the most comfortable time for travel, summer is still good for beach visits and water sports if you can handle the heat. It’s also a less crowded period, which may provide a more relaxed experience."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Summer is a less popular time for tourists, leading to lower accommodation and travel costs. If you don’t mind the heat, this can be a good time to visit for budget travelers."
          }
        ]
      },
      {
        "mainHeading": "Regional Considerations:",
        "list": [
          {
            "heading": "North Andaman:",
            "desc": "Best visited during the winter months for the most enjoyable weather. The monsoon season can bring heavy rains and affect travel plans."
          },
          {
            "heading": "South Andaman:",
            "desc": "Similar to the rest of the islands, winter is ideal for travel, while monsoon can bring rough seas and heavy rains."
          }
        ]
      }
    ],
    
    faqData:[
      {
        "question": "What is the best time to visit the Andaman and Nicobar Islands?",
        "answers": [
          "Winter (October to March): This is the ideal time to visit due to pleasant weather, with temperatures between 23°C and 30°C (73°F to 86°F). It’s perfect for beach activities, water sports, and sightseeing.",
          "Monsoon (April to September): This period sees heavy rains and high humidity, making travel less predictable. It’s suitable for travelers who enjoy fewer crowds and can manage the weather conditions.",
          "Summer (April to June): The temperatures can be quite high, reaching up to 35°C (95°F), with high humidity. It’s less crowded and more budget-friendly but can be uncomfortable for some."
        ]
      },
      {
        "question": "Do I need a visa to travel to the Andaman and Nicobar Islands?",
        "answers": [
          "Domestic Travelers: Indian citizens do not need a visa to travel within India, including the Andaman and Nicobar Islands.",
          "International Travelers: A valid Indian visa is required for international visitors. You can obtain this from an Indian embassy or consulate in your country. Ensure your visa covers the entire duration of your stay."
        ]
      },
      {
        "question": "What is the local currency, and can I use credit cards?",
        "answers": [
          "The local currency is the Indian Rupee (INR). Credit and debit cards are widely accepted in major hotels, restaurants, and shops. However, it’s wise to carry some cash, especially when traveling to more remote areas."
        ]
      },
      {
        "question": "What languages are spoken in the Andaman and Nicobar Islands?",
        "answers": [
          "The primary language spoken is Hindi, with English also widely used, especially in tourist areas. Regional languages such as Bengali and Tamil are spoken by local communities."
        ]
      },
      {
        "question": "What should I pack for a trip to the Andaman and Nicobar Islands?",
        "answers": [
          "Winter (October to March): Light, comfortable clothing, sun protection, and swimwear.",
          "Monsoon (April to September): Waterproof clothing, an umbrella, quick-drying clothes, and sturdy shoes for wet conditions.",
          "Summer (April to June): Lightweight and breathable clothing, sun protection, and plenty of water to stay hydrated."
        ]
      },
      {
        "question": "Are there any cultural norms I should be aware of?",
        "answers": [
          "Dress Modestly: When visiting local communities or religious sites, it’s respectful to dress modestly. Swimwear is appropriate only at the beach.",
          "Respect Nature: The Andaman and Nicobar Islands have fragile ecosystems. Avoid touching or disturbing marine life and follow local guidelines for responsible tourism."
        ]
      }
    ],
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          " Plan your trip between November and April for optimal weather conditions, featuring clear skies and warm temperatures.",
      },
      {
        heading: "Permits and Regulations:",
        description:
          "Certain areas require permits for entry. Let our team handle the paperwork to ensure a hassle-free experience.",
      },
      {
        heading: "Health Precautions:",
        description:
          "Bring sun protection, insect repellent, and keep hydrated. Check any health advisories and ensure vaccinations are up to date.",
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
        island: "Middle and South Andaman",
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
      {
        title: "Island Hopping:",
        description:
          "Discover the unique charm of different islands with organized island- hopping tours, exploring secluded beaches and untouched nature.",
      },
    ],
    inclusions: [
      "Accommodation: Stay at premium resorts, hotels, or guesthouses.",
      "Meals: Breakfast and dinner may be included, depending on your package.",
      "Transfers: Pick-up and drop-off from airports and ferry transfers between islands.",
      "Guided Tours: Explore local attractions with guided tours.",
      "Permits: Assistance in obtaining necessary permits for Indian and foreign nationals.",
      "Water Sports: Scuba diving, snorkeling, and kayaking can be part of your package.",
    ],
    exclusions: [
      "Flights: Airfare is usually not included.",
      "Personal Expenses: Any personal purchases like souvenirs or additional meals.",
      "Travel Insurance: It is advisable to have travel insurance, but it is not typically included.",
      "Advanced Activities: Specialized tours or activities may incur extra charges.",
      "Health Services: Advanced medical services may not be available.",
    ],
    reasons: {
      heading:
        "The Andaman Islands offer an unparalleled escape with their pristine landscapes and diverse activities. Whether you’re seeking relaxation, adventure, or cultural exploration, Andaman caters to every traveler’s desires.",
      reasonParts: [
        {
          title: "Spectacular Beaches",
          description:
            "Bask in the serene beauty of white sandy shores and turquoise waters.",
        },
        {
          title: "Underwater Wonders",
          description:
            "Discover the vibrant marine life in some of the best diving and snorkeling spots.",
        },
        {
          title: "Rich Cultural Heritage",
          description:
            "Delve into the island’s historical significance and indigenous culture.",
        },
        {
          title: "Adventure and Nature",
          description:
            "Engage in thrilling activities amidst lush greenery and unique ecosystems.",
        },
      ],
    },
    Accommodation: [
      {
        heading: "Luxury Resorts",
        AccommodationList:
          " Indulge in opulence at resorts like Taj Exotica Resort &amp; Spa and The Barefoot at Havelock, offering top-notch amenities and breathtaking views.",
      },
      {
        heading: "Boutique Hotels",
        AccommodationList:
          "  Experience personalized comfort and unique charm at    boutique properties such as Bangaram Island Resort and  Kavaratti Island Resort.",
      },
      {
        heading: "Budget-Friendly Stays",
        AccommodationList:
          " Enjoy comfortable and affordable options at places like J Hotel and Port Blair’s Hotel Shompen.",
      },
    ],
    packageOverView:
      "Unveil the magic of the Andaman Islands, a haven of sun-kissed beaches, vibrant coral reefs, and lush jungles. At NextGen  India, we bring you exclusive packages and tailoredexperiences to make your Andaman adventure truly unforgettable. Dive into a world of natural beauty and rich history with our expertly curated travel itineraries.",
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
                {Andaman.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE {Andaman.placeName && Andaman.placeName}
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
                src={Andaman.exolreImage}
                alt={Andaman.placeName}
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
              {Andaman.inclusion && (
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
                Best Time to Visit {Andaman.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Andaman.packageOverView}</p>
            </div>
            {Andaman.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Andaman.exploreHotle}
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
                    {Andaman.Accommodation &&
                      Andaman.Accommodation.map((elm, index) => (
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
                {Andaman.activities &&
                  Andaman.activities.map((activity, index) => (
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

            {Andaman.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Andaman.inclusions &&
                      Andaman.inclusions.map((inclusion, index) => (
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
                    {Andaman.exclusions &&
                      Andaman.exclusions.map((exclusion, index) => (
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
            {Andaman.seasons && (
              <div
                id="BestTimetoVisit"
                className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
              >
                <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
                  Best Time to Visit {Andaman.placeName}
                </h2>
                <ul className="space-y-6">
                  {Andaman.seasons.map((season, index) => (
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
              {Andaman.exploreIsland.map((island, index) => (
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

            {Andaman.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Andaman.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Andaman.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Andaman.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>{Andaman.reasons && Andaman.reasons.heading}</p>
                <div className="flex flex-col gap-3">
                  {Andaman.reasons &&
                    Andaman.reasons.reasonParts.map((reason, index) => (
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
            {Andaman.faqData && (
              <section id="faq" className="py-6 ">
                <div className="container mx-auto px-4">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    FAQs About Traveling to {Andaman.placeName}
                  </h2>
                  {Andaman.faqData.map((faq, index) => (
                    <div
                      key={index}
                      className=" mb-4 border-b border-gray-300 pb-4 border flex flex-col justify-center py-5 px-3 rounded"
                    >
                      <h3
                        className={`text-lg flex justify-between items-center font-semibold cursor-pointer text-gray-600 hover:text-amber-900 transition-colors duration-300 ${
                          expandedIndex === index ? "text-amber-900" : ""
                        }`}
                        onClick={() => toggleAnswer(index)}
                      >
                        {index + 1}. {faq.question}
                        <span>
                          {expandedIndex === index ? <TiMinus /> : <TiPlus />}
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
                    <span>
                      {(Andaman.price + 1122).toLocaleString("en-IN")}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Andaman.price
                      ? Andaman.price.toLocaleString("en-IN")
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
