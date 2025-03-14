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

  const Bhutan = {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",
    placeName: "Bhutan",
    seasons: [
      {
        mainHeading: "Spring Season (March to May):",
        list: [
          {
            heading: "Weather:",
            desc: "Spring in Bhutan is marked by pleasant temperatures ranging from 10°C to 25°C (50°F to 77°F). The weather is generally clear, with blooming flowers and rejuvenated landscapes after winter.",
          },
          {
            heading: "Activities:",
            desc: "This is an excellent time for trekking, sightseeing, and enjoying Bhutan’s vibrant festivals. Popular spots like the Tiger’s Nest Monastery and the Paro Valley are particularly scenic. Spring is also ideal for experiencing traditional festivals such as the Paro Tsechu.",
          },
          {
            heading: "Crowds and Costs:",
            desc: "Spring is a popular season for tourists, so accommodations and travel services may be in high demand. Early booking is advisable to secure your stay.",
          },
        ],
      },
      {
        mainHeading: "Autumn Season (September to November):",
        list: [
          {
            heading: "Weather:",
            desc: "Autumn offers crisp air and clear skies, with temperatures ranging from 10°C to 20°C (50°F to 68°F). The landscape is adorned with colorful autumn foliage, making it a picturesque time to visit.",
          },
          {
            heading: "Activities:",
            desc: "This season is perfect for trekking, cultural tours, and attending local festivals like the Thimphu Tsechu. The favorable weather conditions enhance the experience of exploring Bhutan’s natural and cultural treasures.",
          },
          {
            heading: "Crowds and Costs:",
            desc: "Autumn is a peak tourist season, with higher prices for accommodations and more visitors. It’s recommended to book your travel and lodging in advance.",
          },
        ],
      },
      {
        mainHeading: "Winter Season (December to February):",
        list: [
          {
            heading: "Weather:",
            desc: "Winter in Bhutan can be cold, especially in the higher altitudes, with temperatures ranging from -5°C to 15°C (23°F to 59°F). Lower altitudes experience milder weather with clearer skies and dry conditions.",
          },
          {
            heading: "Activities:",
            desc: "Winter is suitable for trekking in lower altitudes and exploring Bhutan’s cultural sites. It’s a quieter time for travel, allowing for a more serene experience. However, high-altitude treks may be challenging due to cold temperatures.",
          },
          {
            heading: "Crowds and Costs:",
            desc: "Fewer tourists visit Bhutan during winter, resulting in lower accommodation prices and less crowded attractions. Be prepared for cold weather and plan accordingly.",
          },
        ],
      },
      {
        mainHeading: "Monsoon Season (June to August):",
        list: [
          {
            heading: "Weather:",
            desc: "Monsoon season brings heavy rains and high humidity, with temperatures ranging from 15°C to 25°C (59°F to 77°F). The weather can be unpredictable, with the potential for landslides in hilly areas.",
          },
          {
            heading: "Activities:",
            desc: "While the monsoon season is less ideal for trekking and outdoor activities due to the risk of rain and travel disruptions, the lush green landscape can be appealing. Some cultural sites remain accessible, but outdoor activities may be limited.",
          },
          {
            heading: "Crowds and Costs:",
            desc: "Monsoon season sees fewer tourists, which may lead to lower prices for accommodation and travel. However, be prepared for potential rain-related travel disruptions and plan for indoor activities or cultural experiences.",
          },
        ],
      },
    ],

    faqData: [
      {
        question: "What is the best time to visit Bhutan?",
        answers: [
          "Spring (March to May): Enjoy pleasant temperatures, blooming flowers, and vibrant festivals. Ideal for trekking and sightseeing.",
          "Autumn (September to November): Experience clear skies, crisp air, and colorful landscapes. Perfect for exploring Bhutan’s natural beauty and cultural festivals.",
          "Winter (December to February): Cooler temperatures and fewer tourists make for a quieter visit. Good for cultural tours, though high-altitude treks may be challenging due to the cold.",
          "Monsoon (June to August): Expect heavy rainfall and high humidity. Best for those who enjoy lush greenery and can manage potential travel disruptions.",
        ],
      },
      {
        question: "Do I need a visa to travel to Bhutan?",
        answers: [
          "Yes, international travelers need a visa to visit Bhutan. It must be arranged through a licensed Bhutanese tour operator or an international partner. The visa is processed as part of your travel package.",
        ],
      },
      {
        question: "What is the local currency in Bhutan?",
        answers: [
          "The local currency is the Bhutanese Ngultrum (BTN). The Indian Rupee (INR) is also widely accepted. Credit cards are accepted in major cities and hotels, but it's advisable to carry some cash for smaller towns and rural areas.",
        ],
      },
      {
        question: "What languages are spoken in Bhutan?",
        answers: [
          "The official language is Dzongkha. English is widely spoken in tourist areas, hotels, and by tour guides, making communication easier for travelers.",
        ],
      },
      {
        question: "What should I pack for a trip to Bhutan?",
        answers: [
          "Spring/Autumn: Layered clothing for variable temperatures, comfortable walking shoes, and sun protection.",
          "Winter: Warm clothing, including jackets, hats, and gloves, especially for higher altitudes.",
          "Monsoon: Waterproof clothing, an umbrella, and quick-drying clothes. Sturdy shoes for wet conditions are also useful.",
        ],
      },
      {
        question: "Are there any cultural norms I should be aware of?",
        answers: [
          "Dress Modestly: When visiting monasteries and temples, dress respectfully by covering shoulders and knees.",
          "Respect Traditions: Follow local customs and practices, especially in religious settings. Removing your shoes before entering temples is customary.",
          "Greetings: A traditional Bhutanese greeting is 'Kuzu zangpo' or 'Hello.' It’s polite to join your hands in a prayer-like gesture when greeting.",
        ],
      },
      {
        question: "Is Bhutan safe for tourists?",
        answers: [
          "Bhutan is generally very safe for tourists. It is advisable to follow standard travel safety practices, such as securing your belongings and being aware of your surroundings.",
        ],
      },
      {
        question: "What types of accommodation are available in Bhutan?",
        answers: [
          "Bhutan offers a range of accommodations from luxury hotels and boutique lodges to comfortable guesthouses and budget hotels. Most accommodations are well-maintained and offer a unique cultural experience.",
        ],
      },
    ],
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal times to visit Bhutan are during the spring (March to May) and autumn (September to November) for pleasant weather and clear views.",
      },
      {
        heading: "Travel Requirements",
        description:
          "Bhutan requires a visa for entry, which must be arranged through a licensed tour operator. Ensure your passport is valid for at least six months beyond your intended stay.",
      },
      {
        heading: "Local Transport",
        description:
          "Use local taxis and shared transport options to navigate between destinations. Consider hiring a private driver for convenience and flexibility.",
      },
      {
        heading: "Dress Code",
        description:
          "Dress modestly when visiting religious sites. Traditional Bhutanese attire is encouraged for cultural activities and festivals.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, and be cautious with street food. It’s advisable to carry basic medications and consult with a travel health clinic before your trip.",
      },
    ],
    exploreIsland: [
      {
        island: "Thimphu",
        attractions: [
          {
            name: "Tashichho Dzong",
            description:
              "Visit the Tashichho Dzong, the seat of the national government and the King’s official residence. Admire its stunning architecture and tranquil surroundings.",
          },
          {
            name: "Buddha Dordenma",
            description:
              "See the majestic Buddha Dordenma statue, one of the largest Buddha statues in the world, offering panoramic views of Thimphu Valley.",
          },
          {
            name: "Memorial Chorten",
            description:
              "Pay your respects at the Memorial Chorten, a prominent stupa dedicated to the third King of Bhutan, and observe the locals performing their circumambulation rituals.",
          },
        ],
      },
      {
        island: "Paro",
        attractions: [
          {
            name: "Paro Taktsang (Tiger’s Nest Monastery)",
            description:
              "Embark on a thrilling hike to Tiger’s Nest Monastery, perched on a cliffside at 3,120 meters. This iconic site is a must-visit for its spiritual significance and stunning views.",
          },
          {
            name: "Paro Dzong",
            description:
              "Explore Paro Dzong, a historical fortress known for its impressive architecture and role in Bhutan’s history.",
          },
          {
            name: "Rinpung Dzong",
            description:
              "Visit Rinpung Dzong, a majestic fortress with a rich history, and stroll through the nearby traditional village for a glimpse into local life.",
          },
        ],
      },
      {
        island: "Punakha",
        attractions: [
          {
            name: "Punakha Dzong",
            description:
              "Marvel at the Punakha Dzong, an architectural masterpiece located at the confluence of the Pho Chhu and Mo Chhu rivers. This fortress is known for its stunning frescoes and historical significance.",
          },
          {
            name: "Chimi Lhakhang",
            description:
              "Visit the Chimi Lhakhang, the Temple of the Divine Madman, famous for its fertility blessings and unique architecture.",
          },
          {
            name: "Punakha Suspension Bridge",
            description:
              "Walk across the Punakha Suspension Bridge, one of the longest and highest suspension bridges in Bhutan, offering spectacular views of the valley.",
          },
        ],
      },
      {
        island: "Wangdue Phodrang",
        attractions: [
          {
            name: "Wangdue Dzong",
            description:
              "Explore Wangdue Dzong, a fortress that offers panoramic views of the surrounding landscapes. The dzong is renowned for its traditional architecture and strategic location.",
          },
          {
            name: "Gangtey Valley",
            description:
              "Discover the picturesque Gangtey Valley, known for its scenic beauty and as the winter home of the endangered black-necked cranes. Visit the Gangtey Monastery, an important Nyingma monastery in the valley.",
          },
        ],
      },
      {
        island: "Haa Valley",
        attractions: [
          {
            name: "Haa Dzong",
            description:
              "Visit Haa Dzong, a lesser-known but equally impressive fortress with historical and cultural significance.",
          },
          {
            name: "Haa Valley Trek",
            description:
              "Enjoy the Haa Valley Trek, which offers stunning views of the valley, traditional Bhutanese villages, and diverse flora and fauna.",
          },
          {
            name: "Lhakhang Karpo and Lhakhang Nagpo",
            description:
              "Explore these ancient temples, known for their architectural beauty and spiritual significance.",
          },
        ],
      },
      {
        island: "Bumthang",
        attractions: [
          {
            name: "Jakar Dzong",
            description:
              "Explore Jakar Dzong, an impressive fortress overlooking the Bumthang Valley, and visit the nearby Jambay Lhakhang and Kurjey Lhakhang, important pilgrimage sites.",
          },
          {
            name: "Ura Valley",
            description:
              "Discover the Ura Valley, a remote and picturesque area known for its traditional Bhutanese architecture and vibrant cultural festivals.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Cultural Festivals",
        description:
          "Witness Bhutan’s vibrant festivals, such as the Paro Tsechu and Thimphu Tsechu, which feature traditional dances, music, and colorful attire, offering a deep insight into Bhutanese culture.",
      },
      {
        title: "Traditional Crafts",
        description:
          "Explore Bhutan’s traditional crafts and textiles, including weaving, wood carving, and Thangka painting. Visit local workshops and markets to experience Bhutanese craftsmanship firsthand.",
      },
      {
        title: "Archery and Traditional Games",
        description:
          "Participate in traditional Bhutanese games such as archery and darts, and experience the country’s enthusiasm for these cultural activities.",
      },
    ],
    inclusions: [
      "Luxury Hotels: Stay in luxurious properties like Aman Kora, Uma by COMO, and Le Meridien Paro, which offer world-class amenities and exceptional service.",
      "Boutique Hotels: Enjoy a unique stay at boutique hotels such as Gangtey Lodge and Zhiwa Ling Ascent, known for their personalized service and charming ambiance.",
      "Budget Stays: Find comfortable and affordable options at budget hotels and guesthouses, including Kichu Resort and Hotel Tashi.",
    ],
    exclusions: [
      "International/Domestic Flights: Airfare to and from Bhutan is usually not included.",
      "Personal Expenses: Any personal purchases like souvenirs, laundry, or additional meals are not covered.",
      "Travel Insurance: Travel insurance is not typically included, but it is advisable to have one.",
      "Additional Activities: Activities not included in the accommodation package may incur extra charges.",
      "Health Services: Advanced medical treatments or specialized health services are not included.",
    ],
    reasons: {
      heading:
        "Bhutan stands out as a must-visit destination for numerous reasons:",
      reasonParts: [
        {
          title: "Stunning Natural Beauty",
          description:
            "From snow-capped peaks to lush valleys and pristine rivers, Bhutan’s landscapes are nothing short of breathtaking.",
        },
        {
          title: "Rich Cultural Heritage",
          description:
            "Experience the country’s vibrant culture through its traditional festivals, ancient monasteries, and historical landmarks.",
        },
        {
          title: "Adventure and Serenity",
          description:
            "Whether you’re an adventure seeker or looking for peaceful retreats, Bhutan offers a diverse range of activities in a serene environment.",
        },
        {
          title: "Unique Experiences",
          description:
            "Engage in unique cultural experiences and witness Bhutan’s commitment to preserving its heritage and natural beauty.",
        },
      ],
    },
    Accommodation: [
      {
        heading: "Luxury Hotels",
        AccommodationList:
          "Stay in luxurious properties like Aman Kora, Uma by COMO, and Le Meridien Paro, which offer world-class amenities and exceptional service.",
      },
      {
        heading: "Boutique Hotels",
        AccommodationList:
          "Enjoy a unique stay at boutique hotels such as Gangtey Lodge and Zhiwa Ling Ascent, known for their personalized service and charming ambiance.",
      },
      {
        heading: "Budget Stays",
        AccommodationList:
          "Find comfortable and affordable options at budget hotels and guesthouses, including Kichu Resort and Hotel Tashi.",
      },
    ],
    packageOverView:
      "Welcome to Bhutan, the Land of the Thunder Dragon, where tradition meets nature in a unique and mesmerizing blend. Nestled in the Eastern Himalayas, Bhutan offers a captivating escape with its breathtaking landscapes, rich cultural heritage, and commitment to preserving its ancient customs and environment. Known for its Gross National Happiness philosophy, Bhutan is a sanctuary for those seeking tranquility, adventure, and cultural immersion. At Next Gen India, we specialize in creating personalized travel experiences that highlight the best of this enchanting kingdom. Let us guide you through Bhutan’s top destinations, attractions, and activities to ensure an unforgettable journey.",
    price: 21233,
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
                {Bhutan.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE {Bhutan.placeName && Bhutan.placeName}
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
                src={Bhutan.exolreImage}
                alt={Bhutan.placeName}
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
              {Bhutan.inclusion && (
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
                Best Time to Visit {Bhutan.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Bhutan.packageOverView}</p>
            </div>
            {Bhutan.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Bhutan.exploreHotle}
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
                    {Bhutan.Accommodation &&
                      Bhutan.Accommodation.map((elm, index) => (
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
                {Bhutan.activities &&
                  Bhutan.activities.map((activity, index) => (
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

            {Bhutan.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Bhutan.inclusions &&
                      Bhutan.inclusions.map((inclusion, index) => (
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
                    {Bhutan.exclusions &&
                      Bhutan.exclusions.map((exclusion, index) => (
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
            {Bhutan.seasons && (
              <div
                id="BestTimetoVisit"
                className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
              >
                <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
                  Best Time to Visit {Bhutan.placeName}
                </h2>
                <ul className="space-y-6">
                  {Bhutan.seasons.map((season, index) => (
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
              {Bhutan.exploreIsland.map((island, index) => (
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

            {Bhutan.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Bhutan.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Bhutan.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Bhutan.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>{Bhutan.reasons && Bhutan.reasons.heading}</p>
                <div className="flex flex-col gap-3">
                  {Bhutan.reasons &&
                    Bhutan.reasons.reasonParts.map((reason, index) => (
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
            {Bhutan.faqData && (
              <section id="faq" className="py-6 ">
                <div className="container mx-auto px-4">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    FAQs About Traveling to {Bhutan.placeName}
                  </h2>
                  {Bhutan.faqData.map((faq, index) => (
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
                    <span>{(Bhutan.price + 1122).toLocaleString("en-IN")}</span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Bhutan.price
                      ? Bhutan.price.toLocaleString("en-IN")
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
