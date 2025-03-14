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
    setFaqIcon(false)
  };



  const Lakshdeep= {
      exolreImage: "/images/hotelsss.webp",
      exploreHotle: "/images/Resort..webp",
      placeName: "Lakshdeep",
    
      seasons:[
        {
          mainHeading:"Winter Season (October to March):",
          list:[
           {
             heading:"Weather:",
             desc:"Winter is the best time to visit Lakshadweep. The weather is pleasantly warm, with temperatures ranging from 25°C to 32°C (77°F to 89°F). Humidity is lower, and there is minimal rainfall, making it ideal for beach activities and water sports."
            },
            {
                heading:"Activities:",
             desc:"Perfect for snorkeling, scuba diving, and exploring the stunning coral reefs andturquoise waters. The clear skies and calm seas offer excellent conditions for boating and other outdoor adventures."
            },
            {
                
              heading:"Crowds and Costs:",
              desc:"This is peak tourist season, so expect higher prices and more visitors. It’s advisable to book accommodations and travel in advance to secure the best options."
            }
          ]
        },
        {
          mainHeading:"Monsoon Season (June to September):",
          list:[
           {
             heading:"Weather:",
             desc:"The monsoon season brings heavy rainfall and high humidity, with temperatures ranging from 24°C to 30°C (75°F to 86°F). The frequent rains can lead to rough seas and potential travel disruptions."
            },
            {
                heading:"Activities:",
             desc:"While the monsoon season is not ideal for water sports and beach activities due to unpredictable weather and strong currents, the landscape becomes lush and green. It’s a quieter time for travel with fewer tourists."
            },
            {
                
              heading:"Crowds and Costs:",
              desc:"This is the off-peak season, so you may find lower prices for flights and accommodations. However, be prepared for potential rain-related disruptions and limited outdoor activities."
            }
          ]
        },
        {
          mainHeading:"Summer Season (April to June): ",
          list:[
           {
             heading:"Weather:",
             desc:"Summer can be hot and humid, with temperatures rising up to 35°C (95°F). The high humidity and warmth can make outdoor activities less comfortable."
            },
            {
                heading:"Activities:",
             desc:"Despite the heat, you can still enjoy beach visits and water sports if you can handle the weather. Early mornings and late afternoons are more comfortable for outdoor activities."
            },
            {
                
              heading:"Crowds and Costs:",
              desc:"Summer sees fewer tourists compared to winter, leading to lower accommodation prices. If you’re okay with the heat, this can be a good time for budget travel."
            }
          ]
        }
      ],
      
      faqData: [
        {
          question: "What is the best time to visit Lakshadweep?",
          answers: [
            "Winter (October to March): Ideal for pleasant temperatures ranging from 25°C to 32°C (77°F to 89°F), lower humidity, and minimal rainfall. Perfect for beach activities and water sports.",
            "Monsoon (June to September): Characterized by heavy rains and high humidity. While outdoor activities may be limited, the islands are lush and green. Fewer tourists and lower prices are advantages.",
            "Summer (April to June): Temperatures can rise up to 35°C (95°F), making it hot and humid. This season offers fewer crowds and lower costs if you can handle the heat.",
          ],
        },
        {
          question: "Do I need a special permit to visit Lakshadweep?",
          answers: [
            "Yes, a special permit is required. Indian citizens can obtain this from the Lakshadweep Administration or authorized travel agents. Foreign nationals need to apply through the Ministry of Home Affairs or specialized travel agents.",
          ],
        },
        {
          question: "What is the local currency, and can I use credit cards?",
          answers: [
            "The local currency is the Indian Rupee (INR). Credit and debit cards are accepted at most hotels, resorts, and major establishments. However, carrying some cash is advisable for transactions in smaller shops and remote areas.",
          ],
        },
        {
          question: "What languages are spoken in Lakshadweep?",
          answers: [
            "The primary language is Malayalam. English and Hindi are also widely understood and spoken, especially in tourist areas and by service staff.",
          ],
        },
        {
          question: "What should I pack for a trip to Lakshadweep?",
          answers: [
            "Winter (October to March): Light, breathable clothing, swimwear, sun protection, and comfortable footwear for beach activities.",
            "Monsoon (June to September): Waterproof clothing, an umbrella, quick-drying clothes, and sturdy shoes for wet conditions.",
            "Summer (April to June): Lightweight and breathable clothing, sun protection, and plenty of water to stay hydrated.",
          ],
        },
        {
          question:
            "Are there any cultural norms or customs I should be aware of?",
          answers: [
            "Dress Modestly: Swimwear is appropriate only at the beach. Dress modestly and respectfully when visiting local communities or religious sites.",
            "Respect the Environment: Follow guidelines for responsible tourism, such as avoiding contact with coral reefs and not littering.",
          ],
        },
        {
          question: "Is Lakshadweep safe for tourists?",
          answers: [
            "Yes, Lakshadweep is generally safe for tourists. It is advisable to follow common safety practices, such as securing your belongings and being mindful of local customs.",
          ],
        },
      ],
      TravelTips: [
        {
          heading: "Best Time to Visit",
          description:
            "The ideal time to visit Lakshadweep is between October and May when the weather is pleasant, and conditions are perfect for beach and water activities.",
        },
        {
          heading: "Permits and Regulations",
          description:
            "Indian nationals need an entry permit to visit Lakshadweep, which we can assist you in obtaining. Foreign nationals require special permits, so consult with us for detailed information and assistance.",
        },
        {
          heading: "Health and Safety",
          description:
            "Pack sun protection, light clothing, swimwear, and stay hydrated. Be aware of local health advisories and ensure you have necessary vaccinations and health precautions.",
        },
        {
          heading: "Travel Logistics",
          description:
            "Plan your travel arrangements well in advance, including flights and boat transfers to Lakshadweep. We can help you coordinate all aspects of your journey for a smooth and enjoyable experience.",
        },
      ],

      exploreIsland: [
        {
          island: "Agatti Island",
          attractions: [
            {
              name: "Agatti Beach",
              description:
                "Famous for its pristine white sand and clear blue waters. Perfect for sunbathing, swimming, and snorkelling in calm, shallow waters.",
            },
            {
              name: "Coral Gardens",
              description:
                "Explore the stunning underwater gardens teeming with colourful corals and marine life. Snorkelling and diving here offer spectacular views of the vibrant marine ecosystem.",
            },
            {
              name: "Agatti Lagoon",
              description:
                "A serene spot ideal for kayaking and paddle boarding, offering a peaceful setting to enjoy the natural beauty.",
            },
          ],
        },
        {
          island: "Bangaram Island",
          attractions: [
            {
              name: "Bangaram Lagoon",
              description:
                "Known for its crystal-clear waters and vibrant marine life, this lagoon is a top spot for snorkelling, kayaking, and paddle boarding. Enjoy the tranquil beauty of the lagoon and its rich underwater world.",
            },
            {
              name: "Secluded Beaches",
              description:
                "Relax on the island’s exclusive, palm-fringed beaches where you can unwind and enjoy stunning sunsets in a serene environment.",
            },
          ],
        },
        {
          island: "Kavaratti Island",
          attractions: [
            {
              name: "Kavaratti Beach",
              description:
                "A beautiful, tranquil beach ideal for leisurely strolls, swimming, and sunbathing. The calm waters and scenic surroundings make it a perfect spot for relaxation.",
            },
            {
              name: "Marine Aquarium",
              description:
                "Visit the Marine Aquarium to see a diverse range of marine species native to the Lakshadweep archipelago. The aquarium provides educational insights into the local marine life.",
            },
            {
              name: "Kavaratti Lagoon",
              description:
                "An excellent location for snorkelling and diving, offering clear waters and abundant marine life.",
            },
          ],
        },
        {
          island: "Kalapeni Island",
          attractions: [
            {
              name: "Kalapeni Lagoon",
              description:
                "Known for its shallow waters and stunning views, the lagoon is perfect for snorkelling and swimming. The clear waters make it easy to observe colourful fish and coral formations.",
            },
            {
              name: "Sandbanks",
              description:
                "Explore the sandbanks that emerge during low tide, creating picturesque landscapes perfect for walking and photography.",
            },
          ],
        },
        {
          island: "Minicoy Island",
          attractions: [
            {
              name: "Minicoy Lighthouse",
              description:
                "Climb the historic lighthouse for panoramic views of the island and the surrounding ocean. The lighthouse offers a unique vantage point for capturing breathtaking photographs.",
            },
            {
              name: "Local Culture and Cuisine",
              description:
                "Experience the rich Maldivian culture of Minicoy through local cuisine, traditional crafts, and cultural performances. The island offers a glimpse into the unique heritage of the region.",
            },
          ],
        },
        {
          island: "Suheli Par (South Suheli)",
          attractions: [
            {
              name: "Suheli Atoll",
              description:
                "A remote and stunning atoll ideal for diving and snorkelling. The area is known for its pristine coral reefs and diverse marine species, providing a true underwater adventure.",
            },
            {
              name: "White Sand Beaches",
              description:
                "Enjoy the untouched beauty of Suheli’s white sand beaches, perfect for a peaceful retreat and experiencing the natural beauty of the atoll.",
            },
          ],
        },
        {
          island: "Tinnakara Island",
          attractions: [
            {
              name: "Tinnakara Beach",
              description:
                "A secluded island known for its pristine beaches and clear waters. Tinnakara is ideal for a tranquil escape, swimming, and enjoying the natural beauty of Lakshadweep.",
            },
          ],
        },
        {
          island: "Kalapeni Reef",
          attractions: [
            {
              name: "Diving and Snorkeling",
              description:
                "The reef around Kalapeni Island is renowned for its spectacular coral formations and marine biodiversity. It’s an excellent spot for diving and snorkeling to see the vibrant underwater life.",
            },
          ],
        },
      ],
      activities: [
        {
          title: "Scuba Diving",
          description:
            "Discover the underwater world of Lakshadweep with scuba diving adventures at top dive sites like Bangaram, Agatti, and Suheli Atoll. Marvel at the vibrant coral reefs and diverse marine life.",
        },
        {
          title: "Snorkeling",
          description:
            "Enjoy snorkeling excursions in the clear, shallow waters around Lakshadweep’s lagoons and reefs. Witness the rich marine biodiversity and colorful coral formations up close.",
        },
        {
          title: "Kayaking and Paddleboarding",
          description:
            "Explore the calm lagoons and serene waters of Lakshadweep with kayaking and paddleboarding activities. These water sports offer a unique way to experience the beauty of the islands.",
        },
        {
          title: "Fishing Expeditions",
          description:
            "Engage in deep-sea fishing trips to catch various fish species in the rich waters surrounding Lakshadweep. Experience the thrill of fishing in one of India’s top fishing destinations.",
        },
        {
          title: "Island Hopping",
          description:
            "Discover the unique charm of multiple Lakshadweep islands with guided island-hopping tours. Each island offers its own scenic beauty, attractions, and opportunities for exploration.",
        },
      ],
      inclusions: [
        "Accommodation: Stay at premium resorts, hotels, or government-approved guesthouses on various islands.",
        "Meals: Breakfast, lunch, and dinner may be included, depending on your package. Local seafood and Indian cuisine are commonly offered.",
        "Permits: Assistance in obtaining the necessary entry permits for Indian nationals and special permits for foreign nationals.",
        "Transfers: Pick-up and drop-off from airports and boat transfers between islands.",
        "Water Sports: Snorkeling, kayaking, scuba diving, and other water sports activities can be part of your package.",
        "Guided Tours: Explore local attractions and cultural sites with guided tours.",
        "Medical Support: First aid and basic medical support are typically available.",
      ],
      exclusions: [
        "International/Domestic Flights: Airfare to and from Lakshadweep is usually not included.",
        "Personal Expenses: Any personal purchases like souvenirs, laundry, or additional meals outside of the package.",
        "Travel Insurance: It is advisable to have travel insurance, but it is not typically included.",
        "Additional Activities: Activities not mentioned in the package may incur extra charges.",
        "Health Services: Advanced medical facilities may not be available, and specialized treatments are excluded.",
      ],
      reasons: {
        heading:
          "Lakshadweep is a hidden gem offering a unique blend of unspoiled beauty, vibrant marine life, andtranquillity. Here’s why it should be your next destination:",
        reasonParts: [
          {
            title: "Stunning Coral Atolls",
            description:
              "Experience breathtaking coral atolls with sparkling turquoise waters and powdery white-sand beaches.",
          },
          {
            title: "Diverse Marine Ecosystem",
            description:
              "Dive into some of India’s most vibrant coral reefs and encounter an array of marine life.",
          },
          {
            title: "Exclusive Island Experience",
            description:
              "Enjoy a less crowded, serene environment ideal for relaxation and rejuvenation.",
          },
          {
            title: "Adventure and Leisure",
            description:
              "From exhilarating water sports to peaceful beach lounging, Lakshadweep caters to all types of travellers.",
          },
        ],
      },
      Accommodation: [ 
        {
          heading: "Luxury Resorts",
          AccommodationList:
            " Enjoy luxurious stays at top resorts like Taj Exotica  Resort &amp; Spa on Agatti Island, offering high-end   amenities, stunning views, and exceptional service.",
        },
        {
          heading: "Boutique Hotels",
          AccommodationList:
            "  Experience personalized comfort and unique charm at    boutique properties such as Bangaram Island Resort and  Kavaratti Island Resort.",
        },
        {
          heading: "Eco-Friendly Lodges",
          AccommodationList:
            " Choose eco-conscious lodges like Agatti Island Beach  Resort, which combines luxury with sustainable practices and offers a more intimate, environmentally friendly    experience.",
        },
      ],
      packageOverView:
        "Welcome to Lakshadweep, a stunning tropical paradise that promises an unforgettablegetaway with its pristine coral atolls, crystal-clear waters, and rich marine biodiversity. As India’ssmallest Union Territory, Lakshadweep offers an exclusive and serene escape perfect for nature lovers, adventure seekers, and those looking for a peaceful retreat. At Next Gen India, we offer meticulously crafted travel packages to ensure your Lakshadweep adventure is traordinary from start to finish.",
      price: 23999,
    }

//   const Lakshdeep = ExploreCities[explore];
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
                {Lakshdeep.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Lakshdeep.placeName &&
                    Lakshdeep.placeName}
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
                src={Lakshdeep.exolreImage}
                alt={Lakshdeep.placeName}
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
              {Lakshdeep.inclusion && (
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
                Best Time to Visit {Lakshdeep.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Lakshdeep.packageOverView}</p>
            </div>
            {Lakshdeep.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Lakshdeep.exploreHotle}
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
                    {Lakshdeep.Accommodation &&
                      Lakshdeep.Accommodation.map((elm, index) => (
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
                {Lakshdeep.activities &&
                  Lakshdeep.activities.map((activity, index) => (
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

            {Lakshdeep.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Lakshdeep.inclusions &&
                      Lakshdeep.inclusions.map((inclusion, index) => (
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
                    {Lakshdeep.exclusions &&
                      Lakshdeep.exclusions.map((exclusion, index) => (
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
      {Lakshdeep.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Lakshdeep.placeName}
  </h2>
  <ul className="space-y-6">
    {Lakshdeep.seasons.map((season, index) => (
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
              {Lakshdeep.exploreIsland.map((island, index) => (
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

            {Lakshdeep.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Lakshdeep.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Lakshdeep.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Lakshdeep.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Lakshdeep.reasons &&
                    Lakshdeep.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Lakshdeep.reasons &&
                    Lakshdeep.reasons.reasonParts.map(
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
            {Lakshdeep.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Lakshdeep.placeName}
                </h2>
                {Lakshdeep.faqData.map((faq, index) => (
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
                   
                      <ul className={`${expandedIndex === index?"h-max md:max-h-[300px]":"h-0 overflow-hidden"} list-disc pl-6 mt-5 text-gray-700 space-y-2  duration-500`}>
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
                      {(Lakshdeep.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Lakshdeep.price
                      ? Lakshdeep.price.toLocaleString("en-IN")
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
