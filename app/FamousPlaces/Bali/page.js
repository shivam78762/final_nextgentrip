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

  const Bali = {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Bali",

    seasons: [
      {
        mainHeading: "Dry Season (April to October):",
        list: [
          {
            heading: "Weather:",
            desc: "This is the most popular time to visit Bali. The dry season features sunny weather, low humidity, and minimal rainfall. Temperatures are typically warm, ranging from 23°C to 32°C (73°F to 89°F), making it ideal for beach activities, outdoor excursions, and exploring the island.",
          },
          {
            heading: "Activities:",
            desc: "Great for surfing, diving, snorkeling, and hiking. The clear skies and lower humidity make it perfect for outdoor adventures and enjoying Bali’s natural beauty.",
          },
          {
            heading: "Crowds and Costs:",
            desc: "This period sees the highest number of tourists, especially from June to August. Accommodations and flights may be more expensive, and popular attractions can be crowded.",
          },
        ],
      },
      {
        mainHeading: "Wet Season (November to March):",
        list: [
          {
            heading: "Weather:",
            desc: "During the wet season, Bali experiences higher humidity and frequent rainfall. Rain showers are often heavy but typically short-lived, with temperatures remaining warm. The wet season also features occasional thunderstorms.",
          },
          {
            heading: "Activities:",
            desc: "While it may not be ideal for beach activities, the wet season is a good time for exploring Bali’s lush landscapes, waterfalls, and rice terraces. The rain also brings fewer tourists, providing a more tranquil experience.",
          },
          {
            heading: "Crowds and Costs:",
            desc: "This period generally has fewer tourists and lower prices for accommodations and flights. However, some outdoor activities might be limited due to the weather.",
          },
        ],
      },
      {
        mainHeading: "Shoulder Seasons (April and October):",
        list: [
          {
            heading: "Weather:",
            desc: "These transitional months can offer a mix of dry and wet conditions. April marks the start of the dry season, while October is the end of it. Weather can be variable, with occasional rain showers but generally pleasant conditions.",
          },
          {
            heading: "Activities:",
            desc: "Ideal for those seeking a balance between good weather and fewer crowds. You can enjoy a quieter experience while still having access to a range of activities.",
          },
          {
            heading: "Crowds and Costs:",
            desc: "Shoulder seasons can offer lower prices and less crowded attractions compared to peak times.",
          },
        ],
      },
      {
        mainHeading: "Festivals and Events:",
        list: [
          {
            heading: "Nyepi Day (March):",
            desc: "The Balinese Day of Silence is a unique cultural experience where the island observes a day of silence and reflection. Note that during Nyepi, the island is essentially shut down, with no flights or public transportation operating.",
          },
          {
            heading: "Ubud Food Festival (June):",
            desc: "A great time for food enthusiasts to explore Bali’s culinary scene.",
          },
          {
            heading: "Bali Arts Festival (June to July):",
            desc: "An annual event celebrating Balinese culture with traditional music, dance, and art.",
          },
        ],
      },
    ],

    faqData: [
      {
        question: "When is the best time to visit Bali?",
        answers: [
          "The best time to visit Bali is during the dry season, from April to October. This period offers sunny weather, low humidity, and minimal rainfall, making it ideal for outdoor activities and beach trips.",
          "The wet season, from November to March, features higher humidity and frequent rain but can also be a good time for fewer crowds and lower prices.",
        ],
      },
      {
        question: "Do I need a visa to travel to Bali?",
        answers: [
          "Visa requirements depend on your nationality. Many travelers can enter Indonesia (including Bali) without a visa for stays up to 30 days.",
          "Some may extend their stay by applying for a visa on arrival or a tourist visa. Always check the latest entry requirements and visa regulations with the Indonesian embassy or consulate in your country before your trip.",
        ],
      },
      {
        question:
          "What is the local currency in Bali, and can I use credit cards?",
        answers: [
          "The local currency is the Indonesian Rupiah (IDR).",
          "Credit and debit cards are widely accepted in hotels, restaurants, and larger shops.",
          "However, it’s a good idea to carry some cash for smaller transactions and in more rural areas.",
        ],
      },
      {
        question: "What languages are spoken in Bali?",
        answers: [
          "The official language of Indonesia is Bahasa Indonesia.",
          "In Bali, Balinese and English are also commonly spoken, especially in tourist areas.",
          "English is widely understood in hotels, restaurants, and popular tourist spots.",
        ],
      },
      {
        question: "What should I pack for a trip to Bali?",
        answers: [
          "Pack light, breathable clothing suitable for tropical weather.",
          "Essentials include swimwear, sunscreen, sunglasses, a hat, and comfortable walking shoes.",
          "If you plan to visit temples or religious sites, dress modestly with shoulders and knees covered.",
        ],
      },
      {
        question:
          "Are there any cultural norms or customs I should be aware of?",
        answers: [
          "Yes, Bali has rich cultural traditions and customs.",
          "Dress modestly when visiting temples—covering shoulders and knees is essential.",
          "Show respect during religious ceremonies, and be mindful of local customs and practices.",
          "Public displays of affection are generally avoided.",
        ],
      },
      {
        question: "Is Bali safe for tourists?",
        answers: [
          "Bali is generally safe for tourists, with a low crime rate.",
          "However, as with any travel destination, exercise standard safety precautions, such as keeping your belongings secure and being aware of your surroundings.",
          "Be cautious with water sports and road safety if renting scooters.",
        ],
      },
      {
        question: "Can I find Wi-Fi easily in Bali?",
        answers: [
          "Yes, Wi-Fi is widely available in Bali, especially in hotels, cafes, and restaurants.",
          "Many establishments offer free Wi-Fi to guests.",
          "However, internet speed and reliability can vary, particularly in more remote areas.",
        ],
      },
    ],

    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Bali is during the dry season, from April to October, when the weather is sunny and perfect for outdoor activities.",
      },
      {
        heading: "Local Transport",
        description:
          "Use taxis, motorbikes, or car rentals to get around Bali. Ride-sharing apps are also popular in major areas.",
      },
      {
        heading: "Dress Code",
        description:
          "Dress modestly when visiting temples and religious sites. Light and breathable clothing is recommended for the tropical climate.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, use sunscreen, and be cautious with street food. Ensure you have travel insurance and take necessary vaccinations.",
      },
    ],
    exploreIsland: [
      {
        island: "Ubud",
        attractions: [
          {
            name: "Sacred Monkey Forest Sanctuary",
            description:
              "Wander through this lush forest, home to hundreds of playful monkeys and ancient temple ruins.",
          },
          {
            name: "Tegallalang Rice Terraces",
            description:
              "Admire the breathtaking beauty of these iconic rice terraces and enjoy a scenic walk through the verdant landscape.",
          },
          {
            name: "Ubud Art Market",
            description:
              "Shop for traditional Balinese crafts, souvenirs, and local art at this bustling market.",
          },
          {
            name: "Campuhan Ridge Walk",
            description:
              "Take a scenic walk along this ridge for panoramic views of Ubud’s natural beauty.",
          },
        ],
      },
      {
        island: "Seminyak",
        attractions: [
          {
            name: "Seminyak Beach",
            description:
              "Relax on the golden sands of Seminyak Beach, known for its vibrant sunset views and upscale beach clubs.",
          },
          {
            name: "Eat Street",
            description:
              "Explore this lively street lined with trendy restaurants, bars, and boutique shops.",
          },
          {
            name: "Petitenget Temple",
            description:
              "Visit this historic sea temple with its unique Balinese architecture and serene coastal setting.",
          },
          {
            name: "Seminyak Village",
            description:
              "Enjoy shopping and dining at this modern lifestyle complex with international brands and gourmet eateries.",
          },
        ],
      },
      {
        island: "Kuta",
        attractions: [
          {
            name: "Kuta Beach",
            description:
              "Experience the bustling energy of Kuta Beach, ideal for surfing, sunbathing, and vibrant nightlife.",
          },
          {
            name: "Beachwalk Shopping Center",
            description:
              "Shop at this modern mall featuring international brands, dining options, and a rooftop garden.",
          },
          {
            name: "Waterbom Bali",
            description:
              "Have fun at this popular water park, known for its thrilling slides and family-friendly attractions.",
          },
          {
            name: "Kuta Art Market",
            description:
              "Browse through this market for local crafts, souvenirs, and traditional Balinese goods.",
          },
        ],
      },
      {
        island: "Nusa Dua",
        attractions: [
          {
            name: "Nusa Dua Beach",
            description:
              "Enjoy the pristine white sands and crystal-clear waters of this upscale beach destination, perfect for relaxation and water sports.",
          },
          {
            name: "Bali Collection",
            description:
              "Shop and dine at this luxury shopping complex with a variety of international and local stores.",
          },
          {
            name: "Geger Beach",
            description:
              "Explore this serene beach with calm waters and beautiful coral reefs, ideal for snorkeling.",
          },
          {
            name: "Waterblow",
            description:
              "Witness the impressive natural phenomenon where ocean waves crash against the rocks, creating dramatic splashes.",
          },
        ],
      },
      {
        island: "Uluwatu",
        attractions: [
          {
            name: "Uluwatu Temple",
            description:
              "Visit this cliffside temple perched above the Indian Ocean, renowned for its stunning sunset views and traditional Kecak dance performances.",
          },
          {
            name: "Padang Padang Beach",
            description:
              "Relax on this picturesque beach known for its clear waters and excellent surf breaks.",
          },
          {
            name: "Suluban Beach",
            description:
              "Discover this hidden beach with its dramatic rock formations and vibrant surf scene.",
          },
          {
            name: "Single Fin",
            description:
              "Enjoy a meal and drink at this popular clifftop bar with breathtaking views of the ocean and sunset.",
          },
        ],
      },
      {
        island: "Canggu",
        attractions: [
          {
            name: "Echo Beach",
            description:
              "Surf or relax on the black sand beaches of Echo Beach, known for its laid-back atmosphere and surf breaks.",
          },
          {
            name: "Tanah Lot",
            description:
              "Visit this iconic sea temple situated on a rocky outcrop, offering stunning sunset views and a glimpse into Balinese spirituality.",
          },
          {
            name: "Canggu Club",
            description:
              "Enjoy leisure activities and entertainment at this exclusive members’ club with a range of facilities.",
          },
          {
            name: "La Laguna Bali",
            description:
              "Dine and unwind at this eclectic beachfront venue with a bohemian vibe and beautiful sunset views.",
          },
        ],
      },
      {
        island: "Lovina",
        attractions: [
          {
            name: "Dolphin Watching",
            description:
              "Embark on an early morning boat tour to spot playful dolphins in their natural habitat off the coast of Lovina.",
          },
          {
            name: "Gitgit Waterfall",
            description:
              "Visit this impressive waterfall surrounded by lush jungle, perfect for a refreshing dip and a scenic hike.",
          },
          {
            name: "Hot Springs",
            description:
              "Relax in natural hot springs near Lovina, offering a soothing and therapeutic experience.",
          },
          {
            name: "Buddha Statue",
            description:
              "Explore this serene Buddhist statue and temple complex nestled in the tranquil landscape of Lovina.",
          },
        ],
      },
      {
        island: "Nusa Penida",
        attractions: [
          {
            name: "Keling King Beach",
            description:
              "Marvel at the stunning cliffs and unique rock formations of this remote beach, accessible via a scenic hike.",
          },
          {
            name: "Angel’s Billabong",
            description:
              "Swim in the natural infinity pool formed by a rock formation, offering crystal-clear waters and spectacular views.",
          },
          {
            name: "Broken Beach",
            description:
              "Discover this natural archway with a beautiful lagoon, perfect for photography and sightseeing.",
          },
          {
            name: "Atuh Beach",
            description:
              "Relax on this secluded beach with white sand and turquoise waters, ideal for a peaceful escape.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Balinese Cooking Classes",
        description:
          "Learn to cook traditional Balinese dishes with hands-on classes led by local chefs, providing an immersive culinary experience.",
      },
      {
        title: "Spa Treatments",
        description:
          "Indulge in rejuvenating spa treatments, including traditional Balinese massages and wellness therapies for ultimate relaxation.",
      },
      {
        title: "Traditional Dance Performances",
        description:
          "Experience Balinese culture through captivating traditional dance performances, such as the Kecak and Barong dances.",
      },
      {
        title: "Temple Visits",
        description:
          "Explore Bali’s sacred temples, including Tirta Empul and Gunung Kawi, to learn about local spirituality and rituals.",
      },
    ],

    reasons: {
      heading: "Bali is celebrated for its:",
      reasonParts: [
        {
          title: "Stunning Beaches:",
          description:
            "Relax on some of the world’s most beautiful beaches, from serene shores to lively surf spots.",
        },
        {
          title: "Rich Cultural ",
          description:
            "Immerse yourself in Balinese traditions with unique festivals, art, and architecture.",
        },
        {
          title: "Adventure Opportunities",
          description:
            "Engage in thrilling activities such as surfing, diving, and trekking.",
        },
        {
          title: "Serene Retreats",
          description:
            "Find peace in tranquil resorts, lush landscapes, and spiritual retreats.",
        },
      ],
    },

    packageOverView:
      "Welcome to Bali, the Island of the Gods, where stunning landscapes, rich culture, and endless adventure converge. From its pristine beaches to lush rice terraces and vibrant temples, Bali offers an unparalleled travel experience. At Next Gen India, we are dedicated to curating personalized itineraries that highlight the best of Bali’s top tourist destinations. Let us guide you through Bali’s must-see spots, exciting activities, and cultural experiences for an unforgettable journey.",
    price: 25233,
  };

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
                {Bali.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE {Bali.placeName && Bali.placeName}
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
                src={Bali.exolreImage}
                alt={Bali.placeName}
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
              {Bali.inclusion && (
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
                Best Time to Visit {Bali.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Bali.packageOverView}</p>
            </div>
            {Bali.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Bali.exploreHotle}
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
                    {Bali.Accommodation &&
                      Bali.Accommodation.map((elm, index) => (
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
                {Bali.activities &&
                  Bali.activities.map((activity, index) => (
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

            {Bali.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Bali.inclusions &&
                      Bali.inclusions.map((inclusion, index) => (
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
                    {Bali.exclusions &&
                      Bali.exclusions.map((exclusion, index) => (
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
            {Bali.seasons && (
              <div
                id="BestTimetoVisit"
                className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
              >
                <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
                  Best Time to Visit {Bali.placeName}
                </h2>
                <ul className="space-y-6">
                  {Bali.seasons.map((season, index) => (
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
              {Bali.exploreIsland.map((island, index) => (
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

            {Bali.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Bali.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Bali.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Bali.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>{Bali.reasons && Bali.reasons.heading}</p>
                <div className="flex flex-col gap-3">
                  {Bali.reasons &&
                    Bali.reasons.reasonParts.map((reason, index) => (
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
            {Bali.faqData && (
              <section id="faq" className="py-6 ">
                <div className="container mx-auto px-4">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    FAQs About Traveling to {Bali.placeName}
                  </h2>
                  {Bali.faqData.map((faq, index) => (
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
                    <span>{(Bali.price + 1122).toLocaleString("en-IN")}</span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Bali.price
                      ? Bali.price.toLocaleString("en-IN")
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
