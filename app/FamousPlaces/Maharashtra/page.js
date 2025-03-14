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



 const  Maharashtra= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",

    placeName: "Maharashtra",

    packageOverView:
      "Welcome to Maharashtra, a state that beautifully blends history, culture, and natural splendor. From the bustling metropolis of Mumbai to the tranquil hill stations and stunning coastal regions, Maharashtra offers an array of experiences for every traveler. Whether you&#39;re an adventure seeker, a history buff, or simply looking to relax, Maharashtra has something special for you. At Next Gen India, we are dedicated to crafting personalized travel experiences to help you uncover the best of this diverse state. Let us guide you through Maharashtra’s top destinations, unique attractions, and unforgettable experiences.",
    price: 29999,
    reasons: {
      heading:
        "Maharashtra stands out as a travel destination due to its rich heritage, dynamic cities, and variedlandscapes. Here’s why you should consider Maharashtra for your next trip:",
      reasonParts: [
        {
          title: "Diverse Landscapes",
          description:
            "Experience the contrast between bustling cities, serene hill stations, and scenic beaches.",
        },
        {
          title: "Cultural Heritage",
          description:
            "Discover the state’s rich cultural legacy through its forts, temples, and festivals.",
        },
        {
          title: "Vibrant Cities",
          description:
            "Explore the modernity and energy of Mumbai and Pune, blending tradition with contemporary charm.",
        },
        {
          title: "Adventure and Relaxation",
          description:
            "From trekking in the Western Ghats to relaxing on beautiful beaches, Maharashtra offers activities for every preference.",
        },
      ],
    },
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Maharashtra is from October to March when the weather is pleasant and suitable for sightseeing and outdoor activities.",
      },
      {
        heading: "Local Transport",
        description:
          "Utilize local taxis, auto-rickshaws, and trains for navigating between destinations. Private cabs and rental cars are also convenient for exploring more remote areas.",
      },
      {
        heading: "Dress Code",
        description:
          "Dress comfortably and modestly, especially when visiting religious sites. Lightweight, breathable clothing and comfortable footwear are recommended.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, use sunscreen, and be cautious with street food. Ensure you have travel insurance for a safe and enjoyable trip.",
      },
    ],

    exploreIsland: [
      {
        island: "Mumbai",
        attractions: [
          {
            name: "Gateway of India",
            description:
              "Visit the iconic Gateway of India, a historic monument overlooking the Arabian Sea, and a symbol of Mumbai’s rich history.",
          },
          {
            name: "Marine Drive",
            description:
              "Stroll along Marine Drive, also known as the 'Queen’s Necklace,' and enjoy stunning views of the sunset over the Arabian Sea.",
          },
          {
            name: "Elephanta Caves",
            description:
              "Explore the Elephanta Caves, a UNESCO World Heritage site with ancient rock-cut temples dedicated to Hindu deities.",
          },
          {
            name: "Colaba Causeway",
            description:
              "Shop and dine at Colaba Causeway, a bustling street market offering a mix of local and international goods.",
          },
        ],
      },
      {
        island: "Pune",
        attractions: [
          {
            name: "Aga Khan Palace",
            description:
              "Discover the historical Aga Khan Palace, known for its beautiful architecture and its role in the Indian freedom struggle.",
          },
          {
            name: "Shaniwarwada Fort",
            description:
              "Explore Shaniwarwada Fort, a historic fortification with a rich past and captivating architecture.",
          },
          {
            name: "Osho Ashram",
            description:
              "Experience tranquility at the Osho Ashram, a spiritual retreat known for its meditation programs and serene environment.",
          },
          {
            name: "Khadakwasla Dam",
            description:
              "Enjoy a picnic and scenic views at Khadakwasla Dam, a popular spot for nature lovers and families.",
          },
        ],
      },
      {
        island: "Lonavala and Khandala",
        attractions: [
          {
            name: "Lonavala Lake",
            description:
              "Relax by Lonavala Lake, a picturesque spot perfect for leisurely outings and picnics.",
          },
          {
            name: "Bhushi Dam",
            description:
              "Visit Bhushi Dam, known for its scenic beauty and water splashes during the monsoon season.",
          },
          {
            name: "Tiger’s Leap",
            description:
              "Experience the stunning views from Tiger’s Leap, a popular viewpoint offering panoramic vistas of the Western Ghats.",
          },
          {
            name: "Karla and Bhaja Caves",
            description:
              "Explore the ancient Karla and Bhaja Caves, renowned for their impressive rock-cut temples and Buddhist stupas.",
          },
        ],
      },
      {
        island: "Goa",
        attractions: [
          {
            name: "North Goa Beaches",
            description:
              "Relax on the pristine beaches of North Goa, including Baga, Anjuna, and Calangute, known for their vibrant nightlife and water sports.",
          },
          {
            name: "South Goa Beaches",
            description:
              "Enjoy the tranquility of South Goa’s beaches, such as Palolem, Agonda, and Colva, offering a serene escape from the bustling tourist spots.",
          },
          {
            name: "Old Goa",
            description:
              "Discover the colonial charm of Old Goa with its historic churches, including the Basilica of Bom Jesus and Se Cathedral.",
          },
          {
            name: "Dudhsagar Waterfalls",
            description:
              "Marvel at the majestic Dudhsagar Waterfalls, a stunning four-tiered waterfall located in the Bhagwan Mahavir Wildlife Sanctuary.",
          },
        ],
      },
      {
        island: "Aurangabad",
        attractions: [
          {
            name: "Ellora Caves",
            description:
              "Explore the Ellora Caves, a UNESCO World Heritage site featuring a remarkable collection of Buddhist, Hindu, and Jain rock-cut temples.",
          },
          {
            name: "Ajanta Caves",
            description:
              "Visit the Ajanta Caves, renowned for their exquisite frescoes and sculptures depicting Buddhist themes.",
          },
          {
            name: "Bibi Ka Maqbara",
            description:
              "Admire the Bibi Ka Maqbara, often referred to as the 'Taj of the Deccan,' an impressive mausoleum built in memory of the wife of Emperor Aurangzeb.",
          },
          {
            name: "Daulatabad Fort",
            description:
              "Discover the historical Daulatabad Fort, known for its impressive architecture and strategic significance.",
          },
        ],
      },
      {
        island: "Mahabaleshwar",
        attractions: [
          {
            name: "Arthur’s Seat",
            description:
              "Enjoy breathtaking views from Arthur’s Seat, a popular viewpoint offering panoramic vistas of the surrounding valleys.",
          },
          {
            name: "Venna Lake",
            description:
              "Relax at Venna Lake, where you can enjoy boating and picturesque surroundings.",
          },
          {
            name: "Pratapgad Fort",
            description:
              "Explore Pratapgad Fort, known for its historical significance and commanding views of the Sahyadri mountains.",
          },
          {
            name: "Mapro Garden",
            description:
              "Visit Mapro Garden, a popular spot for fresh fruit products, delicious snacks, and beautiful garden views.",
          },
        ],
      },
      {
        island: "Alibaug",
        attractions: [
          {
            name: "Alibaug Beach",
            description:
              "Relax on Alibaug Beach, known for its clean sands and laid-back atmosphere.",
          },
          {
            name: "Kolaba Fort",
            description:
              "Explore Kolaba Fort, an ancient sea fort accessible during low tide and offering a glimpse into Maharashtra’s maritime history.",
          },
          {
            name: "Kihim Beach",
            description:
              "Enjoy the quietude of Kihim Beach, a serene spot ideal for a peaceful retreat and nature walks.",
          },
          {
            name: "Rewas Beach",
            description:
              "Visit Rewas Beach, a lesser-known beach offering tranquil surroundings and scenic beauty.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Cultural Tours",
        description:
          "Immerse yourself in Maharashtra’s rich culture with guided tours of historic forts, temples, and local festivals.",
      },
      {
        title: "Adventure Activities",
        description:
          "Engage in a variety of adventure activities such as trekking, paragliding, and water sports in destinations like Lonavala, Goa, and Mahabaleshwar.",
      },
      {
        title: "Local Cuisine",
        description:
          "Savor the diverse flavors of Maharashtrian cuisine, including dishes like vada pav, pav bhaji, puran poli, and seafood specialties.",
      },
      {
        title: "Heritage Walks",
        description:
          "Participate in heritage walks in cities like Mumbai and Pune to explore historical landmarks, colonial architecture, and local stories.",
      },
    ],

    inclusions: [
      "Accommodation: Stay at luxury hotels such as The Taj Mahal Palace in Mumbai, The Leela Palace in Goa, and Vivanta by Taj in Pune, boutique hotels like The Postcard Velha in Old Goa, Aamby Valley City in Lonavala, and Hotel Shree Krishna in Aurangabad, or budget stays including Hotel Panchsheel in Mumbai, Omkar Palace in Goa, and Hotel New Bharti in Pune.",
      "Meals: Breakfast, lunch, and dinner may be included depending on your booking, featuring a variety of local and international cuisines.",
      "Transfers: Airport transfers and local transportation to and from accommodation.",
      "Guided Tours: Some packages may include guided tours to local attractions and landmarks.",
      "Wi-Fi: Complimentary Wi-Fi access at the hotels.",
    ],
    exclusions: [
      "International/Domestic Flights: Airfare to and from your destination is typically not included.",
      "Personal Expenses: Any personal purchases such as souvenirs, additional meals, or laundry.",
      "Travel Insurance: Not included; travel insurance is recommended for safety.",
      "Additional Activities: Extra charges for activities not mentioned in the accommodation package.",
      "Health Services: Advanced medical facilities and specialized treatments are not included.",
    ],
    Accommodation: [
      {
        heading: "Luxury Hotels",
        AccommodationList:
          "Indulge in luxury at top hotels such as The Taj Mahal Palace in Mumbai, The Leela Palace in Goa, and Vivanta by Taj in Pune, offering world-class amenities and exceptional service.",
      },
      {
        heading: "Boutique Hotels",
        AccommodationList:
          "Enjoy a unique stay at boutique hotels like The Postcard Velha in Old Goa, Aamby Valley City in Lonavala, and Hotel Shree Krishna in Aurangabad, known for their charm and personalized service.",
      },
      {
        heading: "Budget Stays",
        AccommodationList:
          "Find comfortable and affordable options at budget hotels and guesthouses, including Hotel Panchsheel in Mumbai, Omkar Palace in Goa, and Hotel New Bharti in Pune, offering great value for money.",
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
                {Maharashtra.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Maharashtra.placeName &&
                    Maharashtra.placeName}
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
                src={Maharashtra.exolreImage}
                alt={Maharashtra.placeName}
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
              {Maharashtra.inclusion && (
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
                Best Time to Visit {Maharashtra.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Maharashtra.packageOverView}</p>
            </div>
            {Maharashtra.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Maharashtra.exploreHotle}
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
                    {Maharashtra.Accommodation &&
                      Maharashtra.Accommodation.map((elm, index) => (
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
                {Maharashtra.activities &&
                  Maharashtra.activities.map((activity, index) => (
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

            {Maharashtra.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Maharashtra.inclusions &&
                      Maharashtra.inclusions.map((inclusion, index) => (
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
                    {Maharashtra.exclusions &&
                      Maharashtra.exclusions.map((exclusion, index) => (
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
      {Maharashtra.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Maharashtra.placeName}
  </h2>
  <ul className="space-y-6">
    {Maharashtra.seasons.map((season, index) => (
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
              {Maharashtra.exploreIsland.map((island, index) => (
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

            {Maharashtra.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Maharashtra.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Maharashtra.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Maharashtra.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Maharashtra.reasons &&
                    Maharashtra.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Maharashtra.reasons &&
                    Maharashtra.reasons.reasonParts.map(
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
            {Maharashtra.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Maharashtra.placeName}
                </h2>
                {Maharashtra.faqData.map((faq, index) => (
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
                      {(Maharashtra.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Maharashtra.price
                      ? Maharashtra.price.toLocaleString("en-IN")
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
