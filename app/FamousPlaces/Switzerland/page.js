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

  const Switzerland= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Switzerland",

    seasons:[
      {
        "mainHeading": "Summer (June to August):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Summer in Switzerland is generally warm and pleasant, with temperatures ranging from 15°C to 25°C (59°F to 77°F). In the higher altitudes, temperatures are cooler."
          },
          {
            "heading": "Activities:",
            "desc": "Ideal for outdoor activities such as hiking, cycling, and exploring picturesque lakes and cities. Summer also brings numerous festivals and events, including music and cultural festivals."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "This is peak tourist season, so expect higher prices for accommodations and more crowded attractions. Booking in advance is recommended to secure the best deals."
          }
        ]
      },
      {
        "mainHeading": "Autumn (September to November):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Autumn offers mild temperatures ranging from 10°C to 20°C (50°F to 68°F). The weather can be variable, with clear days and occasional rain."
          },
          {
            "heading": "Activities:",
            "desc": "A great time for hiking and enjoying the beautiful fall foliage, especially in regions like the Lake Geneva area and the Engadine Valley. Autumn is also less crowded, making it a peaceful time to explore."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Fewer tourists compared to summer, leading to lower prices for accommodations and flights. It’s a good time for budget-conscious travelers."
          }
        ]
      },
      {
        "mainHeading": "Winter (December to February):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Winter brings colder temperatures, ranging from -5°C to 5°C (23°F to 41°F) in lower areas and significantly colder in the mountains. Snowfall is common, especially in alpine regions."
          },
          {
            "heading": "Activities:",
            "desc": "Perfect for winter sports such as skiing, snowboarding, and sledding. Popular destinations include Zermatt, St. Moritz, and Verbier. Winter is also festive, with Christmas markets and New Year celebrations."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "This is another peak season, especially in ski resorts, so expect higher prices and crowded areas. Early booking for accommodations and activities is advisable."
          }
        ]
      },
      {
        "mainHeading": "Spring (March to May):",
        "list": [
          {
            "heading": "Weather:",
            "desc": "Spring temperatures range from 5°C to 15°C (41°F to 59°F), with a gradual warming trend. Snow begins to melt in lower altitudes, while higher elevations may still have snow."
          },
          {
            "heading": "Activities:",
            "desc": "Spring is ideal for enjoying blooming landscapes and starting outdoor activities like hiking and cycling. It’s also a great time for exploring Swiss cities and cultural sites."
          },
          {
            "heading": "Crowds and Costs:",
            "desc": "Spring sees fewer tourists compared to summer and winter, leading to lower prices and less crowded attractions. It’s a good time for those who prefer a quieter travel experience."
          }
        ]
      }
    ],
    
    faqData: [
      {
        "question": "What is the best time to visit Switzerland?",
        "answers": [
          "Summer (June to August): Ideal for outdoor activities like hiking, cycling, and exploring cities and lakes with warm temperatures and vibrant festivals.",
          "Autumn (September to November): Offers mild temperatures and beautiful fall foliage, making it perfect for scenic walks and avoiding peak season crowds.",
          "Winter (December to February): Best for winter sports such as skiing and snowboarding, with festive Christmas markets and snow-covered landscapes.",
          "Spring (March to May): Enjoy mild weather, blooming flowers, and fewer tourists. It’s a great time for hiking and exploring cities with less congestion."
        ]
      },
      {
        "question": "Do I need a visa to travel to Switzerland?",
        "answers": [
          "Switzerland is part of the Schengen Area, so travelers from non-EU countries will need a Schengen visa. EU and EFTA nationals do not need a visa for short stays. Check the specific visa requirements based on your nationality."
        ]
      },
      {
        "question": "What is the local currency in Switzerland, and can I use credit cards?",
        "answers": [
          "The local currency is the Swiss Franc (CHF). Credit and debit cards are widely accepted in hotels, restaurants, and shops. However, it’s useful to carry some cash for smaller establishments and rural areas."
        ]
      },
      {
        "question": "What languages are spoken in Switzerland?",
        "answers": [
          "Switzerland has four official languages: German, French, Italian, and Romansh. German is the most widely spoken, while French is common in the western part, Italian in the south, and Romansh in some areas of the east. English is also widely understood in tourist areas."
        ]
      },
      {
        "question": "What should I pack for a trip to Switzerland?",
        "answers": [
          "Summer: Light, breathable clothing, a hat, sunglasses, and comfortable walking shoes. Pack a light jacket for cooler evenings.",
          "Winter: Warm clothing including a coat, gloves, hat, and scarf. If skiing or snowboarding, bring appropriate gear or rent it locally.",
          "Spring/Autumn: Layered clothing to adapt to variable temperatures, along with a light rain jacket and comfortable walking shoes."
        ]
      },
      {
        "question": "How can I get around Switzerland?",
        "answers": [
          "Public Transport: Switzerland has an extensive and efficient public transportation network, including trains, buses, and boats. The Swiss Travel Pass offers unlimited travel on public transport and discounts on various attractions.",
          "Car Rental: Renting a car is a good option if you plan to explore more remote areas, but be prepared for mountain roads and potential parking challenges in cities.",
          "Bicycles: Many cities and towns offer bike rentals, and Switzerland is known for its scenic cycling routes."
        ]
      },
      {
        "question": "Are there any cultural norms I should be aware of?",
        "answers": [
          "Punctuality: Being on time is highly valued in Switzerland. Make sure to arrive punctually for appointments and reservations.",
          "Tipping: Service charges are usually included in the bill, but rounding up the bill or leaving a small tip for exceptional service is appreciated.",
          "Quiet Public Spaces: Switzerland values quiet and orderliness in public spaces, such as trains and public transport."
        ]
      },
      {
        "question": "Is Switzerland safe for tourists?",
        "answers": [
          "Yes, Switzerland is considered very safe for tourists. Standard safety precautions, such as securing your belongings and being aware of your surroundings, should be followed."
        ]
      }
    ],

    packageOverView:
      "Welcome to Switzerland, a land where majestic mountains meet pristine lakes and charming villages. Known for its breathtaking landscapes, rich cultural heritage, and impeccable precision, Switzerland is a traveler&#39;s paradise. From the serene beauty of the Swiss Alps to the vibrant urban life in cities like Zurich and Geneva, Switzerland offers a wide range of experiences for every type of traveler. At Next Gen India, we specialize in creating personalized itineraries that capture the essence of this stunning country. Let us take you on a journey through Switzerland’s top destinations, attractions, and unique experiences.",
    price: 25999,
    reasons: {
      heading:
        "Switzerland is celebrated for its unparalleled natural beauty and diverse experiences. Here’s why Switzerland should be on your travel list:",
      reasonParts: [
        {
          title: "Spectacular Landscapes",
          description:
            "Marvel at the stunning Swiss Alps, serene lakes, and picturesque valleys.",
        },
        {
          title: "Rich Culture",
          description:
            "Experience Switzerland’s unique blend of French, German, and Italian influences through its architecture, festivals, and cuisine.",
        },
        {
          title: "Outdoor Adventures",
          description:
            "Engage in world-class skiing, hiking, and mountain biking.",
        },
        {
          title: "Charming Cities",
          description:
            "Explore vibrant cities with a mix of historical landmarks, modern amenities, and vibrant nightlife.",
        },
      ],
    },
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "Switzerland is a year-round destination. Visit in summer (June to August) for hiking and outdoor activities, or in winter (December to February) for skiing and snow sports.",
      },
      {
        heading: "Local Transport",
        description:
          "Utilize Switzerland’s efficient public transport system, including trains, trams, and buses. Consider purchasing a Swiss Travel Pass for unlimited travel on public transport.",
      },
      {
        heading: "Dress Code",
        description:
          "Pack clothing suitable for the season and activities you plan to undertake. Comfortable walking shoes and layers are recommended.",
      },
      {
        heading: "Health and Safety",
        description:
          "Switzerland is known for its cleanliness and safety. Ensure you have travel insurance, stay hydrated, and follow local guidelines for a safe trip.",
      },
    ],

    exploreIsland: [
      {
        island: "Zurich",
        attractions: [
          {
            name: "Old Town (Altstadt)",
            description:
              "Wander through Zurich’s historic Old Town, featuring medieval buildings, cobblestone streets, and charming squares.",
          },
          {
            name: "Lake Zurich",
            description:
              "Enjoy a leisurely stroll along the shores of Lake Zurich or take a scenic boat ride for panoramic views of the city and surrounding mountains.",
          },
          {
            name: "Bahnhofstrasse",
            description:
              "Shop on Bahnhofstrasse, one of the world’s most exclusive shopping streets, home to luxury boutiques and high-end stores.",
          },
        ],
      },
      {
        island: "Geneva",
        attractions: [
          {
            name: "Jet d’Eau",
            description:
              "Witness the iconic Jet d’Eau, a massive water fountain located on Lake Geneva, offering stunning views and photo opportunities.",
          },
          {
            name: "United Nations Headquarters",
            description:
              "Tour the European headquarters of the United Nations and learn about international diplomacy and global affairs.",
          },
          {
            name: "Old Town (Vieille Ville)",
            description:
              "Explore Geneva’s Old Town, known for its narrow streets, historical buildings, and landmarks like St. Pierre Cathedral.",
          },
        ],
      },
      {
        island: "Lucerne",
        attractions: [
          {
            name: "Chapel Bridge (Kapellbrücke)",
            description:
              "Admire the Chapel Bridge, a historic wooden bridge adorned with paintings and surrounded by charming medieval architecture.",
          },
          {
            name: "Lake Lucerne",
            description:
              "Take a boat cruise on Lake Lucerne to enjoy breathtaking views of the surrounding mountains and picturesque villages.",
          },
          {
            name: "Pilatus and Rigi",
            description:
              "Experience panoramic views and adventure at Mount Pilatus and Mount Rigi, accessible by cable cars and cogwheel trains.",
          },
        ],
      },
      {
        island: "Interlaken",
        attractions: [
          {
            name: "Adventure Sports",
            description:
              "Engage in a variety of outdoor activities, including skydiving, paragliding, and canyoning, with stunning alpine views.",
          },
          {
            name: "Jungfraujoch",
            description:
              "Take a day trip to Jungfraujoch, known as the 'Top of Europe,' and enjoy the breathtaking views of the Aletsch Glacier and surrounding peaks.",
          },
          {
            name: "Harder Kulm",
            description:
              "Ride the funicular to Harder Kulm for panoramic views of Interlaken and the Bernese Oberland.",
          },
        ],
      },
      {
        island: "Zermatt",
        attractions: [
          {
            name: "Matterhorn",
            description:
              "Marvel at the iconic Matterhorn, one of the most famous peaks in the Alps. Enjoy skiing, hiking, or simply soaking in the stunning views.",
          },
          {
            name: "Gornergrat Railway",
            description:
              "Ride the Gornergrat Railway for spectacular views of the Matterhorn and surrounding peaks, with stops at various observation points.",
          },
          {
            name: "Matterhorn Museum",
            description:
              "Learn about the history of Zermatt and the iconic Matterhorn at the Matterhorn Museum.",
          },
        ],
      },
      {
        island: "Lausanne",
        attractions: [
          {
            name: "Olympic Museum",
            description:
              "Explore the Olympic Museum, dedicated to the history and spirit of the Olympic Games, with interactive exhibits and multimedia displays.",
          },
          {
            name: "Old Town",
            description:
              "Wander through Lausanne’s Old Town, known for its historical buildings, charming streets, and the impressive Cathedral of Notre-Dame.",
          },
          {
            name: "Lake Geneva Promenade",
            description:
              "Enjoy a relaxing walk along the Lake Geneva promenade, offering beautiful views and vibrant local cafés.",
          },
        ],
      },
      {
        island: "Bern",
        attractions: [
          {
            name: "Old Town",
            description:
              "Discover Bern’s UNESCO-listed Old Town, featuring medieval architecture, the famous Zytglogge clock tower, and the Bear Park.",
          },
          {
            name: "Federal Palace",
            description:
              "Tour the Federal Palace, the seat of Switzerland’s government, and learn about the country’s political system.",
          },
          {
            name: "Einstein Museum",
            description:
              "Visit the Einstein Museum, dedicated to the life and work of physicist Albert Einstein, who lived in Bern for several years.",
          },
        ],
      },
      {
        island: "Montreux",
        attractions: [
          {
            name: "Montreux Jazz Festival",
            description:
              "Experience the world-renowned Montreux Jazz Festival, held annually on the shores of Lake Geneva, featuring international music acts.",
          },
          {
            name: "Chillon Castle",
            description:
              "Explore Chillon Castle, a medieval fortress located on the shores of Lake Geneva, with stunning views and rich history.",
          },
          {
            name: "Rochers-de-Naye",
            description:
              "Take a cogwheel train to Rochers-de-Naye for panoramic views of the Alps and Lake Geneva, and visit the marmot park at the summit.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Swiss Chocolate and Cheese Tours",
        description:
          "Indulge in Swiss culinary delights with tours that showcase the country’s famous chocolate and cheese-making traditions.",
      },
      {
        title: "Scenic Train Rides",
        description:
          "Enjoy scenic train journeys on routes such as the Glacier Express, Bernina Express, and GoldenPass Line, offering stunning views of the Swiss landscape.",
      },
      {
        title: "Mountain Excursions",
        description:
          "Explore the Swiss Alps with guided mountain excursions, including hiking, climbing, and mountaineering.",
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
                {Switzerland.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Switzerland.placeName &&
                    Switzerland.placeName}
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
                src={Switzerland.exolreImage}
                alt={Switzerland.placeName}
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
              {Switzerland.inclusion && (
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
                Best Time to Visit {Switzerland.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Switzerland.packageOverView}</p>
            </div>
            {Switzerland.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Switzerland.exploreHotle}
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
                    {Switzerland.Accommodation &&
                      Switzerland.Accommodation.map((elm, index) => (
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
                {Switzerland.activities &&
                  Switzerland.activities.map((activity, index) => (
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

            {Switzerland.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Switzerland.inclusions &&
                      Switzerland.inclusions.map((inclusion, index) => (
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
                    {Switzerland.exclusions &&
                      Switzerland.exclusions.map((exclusion, index) => (
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
      {Switzerland.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Switzerland.placeName}
  </h2>
  <ul className="space-y-6">
    {Switzerland.seasons.map((season, index) => (
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
              {Switzerland.exploreIsland.map((island, index) => (
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

            {Switzerland.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Switzerland.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Switzerland.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Switzerland.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Switzerland.reasons &&
                    Switzerland.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Switzerland.reasons &&
                    Switzerland.reasons.reasonParts.map(
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
            {Switzerland.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Switzerland.placeName}
                </h2>
                {Switzerland.faqData.map((faq, index) => (
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
                      {(Switzerland.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Switzerland.price
                      ? Switzerland.price.toLocaleString("en-IN")
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
