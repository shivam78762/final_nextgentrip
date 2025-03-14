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

 const Thailand= {
      exolreImage: "/images/hotelsss.webp",
      exploreHotle: "/images/Resort..webp",
      placeName: "Thailand",
   
      seasons:[
        {
          "mainHeading": "Best Time to Visit Thailand",
          "list": [
            {
              "heading": "Cool Season (November to February):",
              "desc": "This is the most popular time to visit Thailand. The weather is generally dry and comfortable, with temperatures ranging from 20°C to 30°C (68°F to 86°F). It's also the peak tourist season, so popular destinations might be crowded."
            },
            {
              "heading": "Hot Season (March to May):",
              "desc": "Expect high temperatures, often exceeding 35°C (95°F), and high humidity. It’s very hot, especially in April and May."
            },
            {
              "heading": "Rainy Season (June to October):",
              "desc": "This period experiences frequent rain showers and high humidity, with temperatures generally ranging from 25°C to 35°C (77°F to 95°F). The rain is often heavy but short-lived."
            },
            {
              "heading": "Summary:",
              "desc": "For pleasant weather and festivals: Cool Season (November to February) is the best time. For fewer crowds and lower prices: Consider visiting during the Hot Season (March to May), but be prepared for high temperatures. For lush scenery and budget travel: The Rainy Season (June to October) offers a quieter experience, though weather can be unpredictable."
            }
          ]
        }
        
      ],
      
      faqData:[
        {
          "question": "What are the main attractions in Thailand?",
          "answers": [
            "Thailand is renowned for its diverse attractions, including:",
            "Bangkok: The Grand Palace, Wat Pho, and bustling markets.",
            "Pattaya: Vibrant city known for its beaches, entertainment, and lively nightlife.",
            "Chiang Mai: Temples, night bazaars, and the annual Yi Peng Lantern Festival.",
            "Phuket: Beautiful beaches, vibrant nightlife, and nearby islands like Phi Phi.",
            "Krabi: Stunning limestone cliffs, clear waters, and Railay Beach.",
            "Ayutthaya: Historical ruins of the ancient city."
          ]
        },
        {
          "question": "What is the currency used in Thailand?",
          "answers": [
            "The official currency is the Thai Baht (THB). It’s advisable to carry some cash for small transactions, though credit and debit cards are widely accepted in most places."
          ]
        },
        {
          "question": "Do I need a visa to visit Thailand?",
          "answers": [
            "Visa requirements depend on your nationality. Many travelers can enter Thailand without a visa for up to 30 days. Check with the Thai embassy or consulate in your country for specific requirements."
          ]
        },
        {
          "question": "What are the top attractions in Pattaya?",
          "answers": [
            "Pattaya has a variety of attractions, including:",
            "Pattaya Beach: A popular spot for sunbathing, swimming, and water sports.",
            "Walking Street: The heart of Pattaya’s nightlife, with numerous bars, clubs, and restaurants.",
            "Sanctuary of Truth: A stunning wooden temple showcasing traditional Thai architecture and art.",
            "Pattaya Floating Market: A vibrant market with local goods, crafts, and food sold from boats.",
            "Nong Nooch Tropical Botanical Garden: A beautifully landscaped garden with cultural shows and elephant rides."
          ]
        },
        {
          "question": "What should I pack for a trip to Thailand?",
          "answers": [
            "Packing will vary based on the season and your activities:",
            "Cool Season: Light clothing, a jacket for cooler evenings, and sunscreen.",
            "Hot Season: Lightweight, breathable clothing, a hat, and plenty of water.",
            "Rainy Season: Waterproof gear, an umbrella, and quick-drying clothes."
          ]
        },
        {
          "question": "Is Thailand safe for tourists?",
          "answers": [
            "Thailand is generally safe for tourists. However, it’s wise to:",
            "Stay Aware: Keep an eye on your belongings and be cautious in crowded areas.",
            "Respect Local Customs: Follow local laws and dress appropriately when visiting temples.",
            "Check Health Precautions: Be mindful of health and safety guidelines, such as vaccinations and food hygiene."
          ]
        },
        {
          "question": "What languages are spoken in Thailand?",
          "answers": [
            "The official language is Thai. While English is widely spoken in tourist areas, knowing a few basic Thai phrases can enhance your experience and help in less touristy areas."
          ]
        },
        {
          "question": "What is the local cuisine like?",
          "answers": [
            "Thai cuisine is known for its bold flavors and includes dishes such as:",
            "Pad Thai: Stir-fried noodles with shrimp or chicken.",
            "Tom Yum Goong: Spicy shrimp soup.",
            "Green Curry: A spicy curry made with coconut milk.",
            "Som Tum: Spicy green papaya salad."
          ]
        },
        {
          "question": "Are there any cultural customs I should be aware of?",
          "answers": [
            "Yes, some key customs include:",
            "Respect for the Monarchy: Avoid making negative comments about the royal family.",
            "Dress Modestly: Especially when visiting temples and religious sites.",
            "Removing Shoes: It’s customary to remove your shoes before entering homes and some businesses."
          ]
        }
      ]
      ,

      packageOverView:
        "Welcome to Thailand, a land of captivating beauty, vibrant culture, and unforgettable experiences. From the bustling streets of Bangkok to the serene beaches of Phuket, Thailand offers an extraordinary range of attractions for every traveler. At Next Gen India, we specialize in crafting personalized itineraries that showcase the best of Thailand’s diverse destinations. Let us guide you through Thailand’s top tourist spots, unique activities, and essential travel tips for an unforgettable journey.",
      price: 33999,
      reasons: {
        heading: "Thailand is renowned for its",
        reasonParts: [
          {
            title: "Cultural Richness",
            description:
              "Explore ancient temples, vibrant festivals, and traditional Thai arts.",
          },
          {
            title: "Natural Beauty",
            description:
              "Discover stunning beaches, lush jungles, and majestic mountains.",
          },
          {
            title: "Exciting Cities",
            description:
              "Experience the dynamic energy of Bangkok and the historical charm of Chiang Mai.",
          },
          {
            title: "Delicious Cuisine",
            description: "Indulge in flavorful Thai dishes and street food.",
          },
        ],
      },
      TravelTips: [
        {
          heading: "Best Time to Visit",
          description:
            "The ideal time to visit Thailand is from November to April, when the weather is dry and pleasant.",
        },
        {
          heading: "Local Transport",
          description:
            "Use local transportation options like tuk-tuks, taxis, and public buses. The BTS Skytrain and MRT subway are convenient for navigating Bangkok.",
        },
        {
          heading: "Dress Code",
          description:
            "Dress modestly when visiting temples and religious sites. Lightweight, breathable clothing is recommended for the hot and humid climate.",
        },
        {
          heading: "Health and Safety",
          description:
            "Stay hydrated, use sunscreen, and be cautious with street food. Ensure you have travel insurance for a safe and enjoyable trip.",
        },
      ],

      exploreIsland: [
        {
          island: "Bangkok",
          attractions: [
            {
              name: "Grand Palace",
              description:
                "Visit this iconic landmark known for its intricate architecture and the Emerald Buddha Temple.",
            },
            {
              name: "Wat Arun",
              description:
                "Marvel at the stunning central spire of this riverside temple.",
            },
            {
              name: "Chatuchak Weekend Market",
              description:
                "Shop at one of the world’s largest markets for everything from clothing to antiques.",
            },
            {
              name: "Jim Thompson House",
              description:
                "Discover Thai architecture and silk industry history.",
            },
          ],
        },
        {
          island: "Chiang Mai",
          attractions: [
            {
              name: "Doi Suthep Temple",
              description:
                "Admire breathtaking views and a sacred temple on this mountain.",
            },
            {
              name: "Old City Temples",
              description:
                "Explore historical temples like Wat Chedi Luang and Wat Phra Singh.",
            },
            {
              name: "Night Bazaar",
              description:
                "Shop for local crafts, art, and souvenirs in a lively night market.",
            },
            {
              name: "Elephant Nature Park",
              description:
                "Experience ethical elephant tourism and learn about elephant conservation.",
            },
          ],
        },
        {
          island: "Phuket",
          attractions: [
            {
              name: "Patong Beach",
              description:
                "Enjoy vibrant nightlife, shopping, and beach activities at this famous beach.",
            },
            {
              name: "Old Phuket Town",
              description:
                "Stroll through historic streets with Sino-Portuguese architecture and local markets.",
            },
            {
              name: "Phang Nga Bay",
              description:
                "Take a boat tour to see stunning limestone cliffs and emerald waters, including the famous James Bond Island.",
            },
            {
              name: "Big Buddha",
              description:
                "Visit the impressive 45-meter-tall statue offering panoramic views of Phuket.",
            },
          ],
        },
        {
          island: "Krabi",
          attractions: [
            {
              name: "Railay Beach",
              description:
                "Relax on one of the most beautiful beaches in Thailand, surrounded by dramatic cliffs.",
            },
            {
              name: "Ao Nang",
              description:
                "Explore this vibrant coastal town with its lively beach scene and local eateries.",
            },
            {
              name: "Phi Phi Islands",
              description:
                "Take a boat trip to these stunning islands known for their crystal-clear waters and vibrant marine life.",
            },
            {
              name: "Tiger Cave Temple",
              description:
                "Climb the 1,237 steps to reach this temple for incredible views of the surrounding area.",
            },
          ],
        },
        {
          island: "Pattaya",
          attractions: [
            {
              name: "Walking Street",
              description:
                "Experience the bustling nightlife with bars, clubs, and street performances.",
            },
            {
              name: "Sanctuary of Truth",
              description:
                "Explore this intricate wooden temple dedicated to art, philosophy, and spirituality.",
            },
            {
              name: "Pattaya Floating Market",
              description:
                "Discover a unique market where vendors sell goods from boats.",
            },
            {
              name: "Nong Nooch Tropical Garden",
              description:
                "Enjoy beautiful gardens, cultural shows, and elephant rides at this expansive park.",
            },
          ],
        },
        {
          island: "Hua Hin",
          attractions: [
            {
              name: "Hua Hin Beach",
              description:
                "Relax on this long, sandy beach known for its calm waters and family-friendly atmosphere.",
            },
            {
              name: "Cicada Market",
              description:
                "Visit this weekend market for art, crafts, and delicious street food.",
            },
            {
              name: "Khao Sam Roi Yot National Park",
              description:
                "Explore caves, wetlands, and mountain scenery in this scenic park.",
            },
            {
              name: "Hua Hin Railway Station",
              description:
                "Admire the historic architecture of one of Thailand’s oldest train stations.",
            },
          ],
        },
        {
          island: "Chiang Rai",
          attractions: [
            {
              name: "White Temple (Wat Rong Khun)",
              description:
                "Marvel at the unique and contemporary design of this all-white temple.",
            },
            {
              name: "Golden Triangle",
              description:
                "Explore the region where Thailand, Laos, and Myanmar meet, and visit the Hall of Opium Museum.",
            },
            {
              name: "Blue Temple (Wat Rong Suea Ten)",
              description:
                "Visit this striking temple known for its vibrant blue color and intricate details.",
            },
            {
              name: "Baan Dam Museum",
              description:
                "Discover an eclectic collection of art and artifacts in this unique museum.",
            },
          ],
        },
        {
          island: "Sukhothai",
          attractions: [
            {
              name: "Sukhothai Historical Park",
              description:
                "Explore the ruins of the ancient Sukhothai Kingdom, a UNESCO World Heritage site.",
            },
            {
              name: "Wat Mahathat",
              description:
                "Visit this grand temple with its impressive central stupa and historical significance.",
            },
            {
              name: "Wat Si Chum",
              description:
                "Admire the massive seated Buddha statue housed in this historic temple.",
            },
            {
              name: "Sukhothai Night Market",
              description:
                "Enjoy local food and crafts in the vibrant night market.",
            },
          ],
        },
        {
          island: "Kanchanaburi",
          attractions: [
            {
              name: "Bridge on the River Kwai",
              description:
                "Learn about the historical significance of this iconic bridge from World War II.",
            },
            {
              name: "Erawan National Park",
              description:
                "Swim in the emerald green waterfalls and explore the park’s natural beauty.",
            },
            {
              name: "Hellfire Pass Memorial Museum",
              description:
                "Discover the history of the Death Railway and its construction.",
            },
            {
              name: "Elephant World",
              description:
                "Visit this sanctuary dedicated to the care and conservation of elephants.",
            },
          ],
        },
      ],

      activities: [
        {
          title: "Thai Cooking Classes",
          description:
            "Learn to cook traditional Thai dishes with hands-on classes led by local chefs.",
        },
        {
          title: "River Cruises",
          description:
            "Enjoy scenic boat rides along Thailand’s rivers, such as the Chao Phraya in Bangkok and the Mae Ping in Chiang Mai.",
        },
        {
          title: "Thai Massage and Spa",
          description:
            "Experience traditional Thai massage and spa treatments for relaxation and rejuvenation.",
        },
        {
          title: "Festivals",
          description:
            "Participate in local festivals such as Songkran (Thai New Year) and Loy Krathong (Festival of Lights).",
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
                {Thailand.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Thailand.placeName &&
                    Thailand.placeName}
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
                src={Thailand.exolreImage}
                alt={Thailand.placeName}
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
              {Thailand.inclusion && (
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
                Best Time to Visit {Thailand.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Thailand.packageOverView}</p>
            </div>
            {Thailand.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Thailand.exploreHotle}
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
                    {Thailand.Accommodation &&
                      Thailand.Accommodation.map((elm, index) => (
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
                {Thailand.activities &&
                  Thailand.activities.map((activity, index) => (
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

            {Thailand.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Thailand.inclusions &&
                      Thailand.inclusions.map((inclusion, index) => (
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
                    {Thailand.exclusions &&
                      Thailand.exclusions.map((exclusion, index) => (
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
      {Thailand.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Thailand.placeName}
  </h2>
  <ul className="space-y-6">
    {Thailand.seasons.map((season, index) => (
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
              {Thailand.exploreIsland.map((island, index) => (
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

            {Thailand.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Thailand.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Thailand.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Thailand.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Thailand.reasons &&
                    Thailand.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Thailand.reasons &&
                    Thailand.reasons.reasonParts.map(
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
            {Thailand.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Thailand.placeName}
                </h2>
                {Thailand.faqData.map((faq, index) => (
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
                      {(Thailand.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Thailand.price
                      ? Thailand.price.toLocaleString("en-IN")
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
