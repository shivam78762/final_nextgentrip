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


 const  Sikkim= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",

    placeName: "Sikkim",

    packageOverView:
      "Welcome to Sikkim, India’s serene Himalayan gem, where lush landscapes, majestic mountains, and vibrant cultures converge to create an unforgettable travel experience. Nestled in the northeastern part of India, Sikkim offers a unique blend of natural beauty, adventure, and rich heritage. At Next Gen India, we specialize in designing bespoke itineraries that showcase the very best of this stunning state. Let us guide you through Sikkim’s top destinations, activities, and experiences, ensuring your journey is both captivating and memorable.",
    price: 29999,
    reasons: {
      heading:
        "Sikkim stands out as a travel destination for its breathtaking landscapes and cultural diversity. Here’s why Sikkim should be on your travel radar:",
      reasonParts: [
        {
          title: "Majestic Mountains",
          description:
            "Admire the awe-inspiring views of the world’s third-highest peak, Kanchenjunga, and enjoy the pristine natural beauty that surrounds it.",
        },
        {
          title: "Cultural Richness",
          description:
            "Discover the vibrant culture of Sikkim through its monasteries, festivals, and traditional cuisine.",
        },
        {
          title: "Adventure Activities",
          description:
            "Engage in thrilling outdoor activities like trekking, paragliding, and river rafting amidst stunning natural settings.",
        },
        {
          title: "Tranquil Retreats",
          description:
            "Find peace and rejuvenation in serene hill stations and beautiful landscapes.",
        },
      ],
    },
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Sikkim is from March to June and September to December when the weather is pleasant and ideal for sightseeing and outdoor activities.",
      },
      {
        heading: "Local Transport",
        description:
          "Utilize local taxis, private cabs, and shared jeeps to navigate between destinations. Consider hiring a car with a driver for convenience.",
      },
      {
        heading: "Dress Code",
        description:
          "Pack warm clothing, especially if visiting higher altitudes or during the winter months. Comfortable walking shoes are recommended for exploring various attractions.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, acclimate to higher altitudes gradually, and be cautious with street food. Ensure you have travel insurance for a safe and enjoyable trip.",
      },
    ],

    exploreIsland: [
      {
        island: "Gangtok",
        attractions: [
          {
            name: "MG Road",
            description:
              "Stroll along MG Road, Gangtok’s main street, lined with vibrant shops, cafes, and local handicraft stores. Enjoy the lively atmosphere and breathtaking views of the surrounding hills.",
          },
          {
            name: "Rumtek Monastery",
            description:
              "Visit Rumtek Monastery, one of Sikkim’s most important monasteries, known for its impressive architecture and spiritual significance.",
          },
          {
            name: "Enchey Monastery",
            description:
              "Explore this historic monastery, offering panoramic views of Gangtok and a serene atmosphere for reflection and peace.",
          },
          {
            name: "Tsomgo Lake",
            description:
              "Take a scenic drive to Tsomgo Lake, a high-altitude glacial lake surrounded by snow-capped mountains. Enjoy yak rides and the stunning views of the pristine waters.",
          },
        ],
      },
      {
        island: "Pelling",
        attractions: [
          {
            name: "Khecheopalri Lake",
            description:
              "Discover Khecheopalri Lake, a sacred lake for both Buddhists and Hindus, surrounded by lush forests and offering stunning reflections of the surrounding mountains.",
          },
          {
            name: "Pemayangtse Monastery",
            description:
              "Visit this ancient monastery, known for its exquisite architecture and panoramic views of the Himalayas.",
          },
          {
            name: "Rabdentse Ruins",
            description:
              "Explore the historical ruins of Rabdentse, the former capital of Sikkim, and enjoy the spectacular views of the Kanchenjunga range.",
          },
        ],
      },
      {
        island: "Namchi",
        attractions: [
          {
            name: "Samdruptse Statue",
            description:
              "Marvel at the towering Samdruptse Statue, dedicated to Guru Padmasambhava, offering panoramic views of the surrounding landscapes.",
          },
          {
            name: "Namchi Rock Garden",
            description:
              "Enjoy a leisurely stroll through the Namchi Rock Garden, featuring beautifully landscaped gardens, rock formations, and scenic viewpoints.",
          },
        ],
      },
      {
        island: "Lachung",
        attractions: [
          {
            name: "Yumthang Valley",
            description:
              "Experience the stunning beauty of Yumthang Valley, known as the “Valley of Flowers,” with its colorful meadows, hot springs, and picturesque landscapes.",
          },
          {
            name: "Zero Point",
            description:
              "Take a trip to Zero Point, located at the end of the road in Lachung, offering breathtaking views of the snow-capped peaks and pristine landscapes.",
          },
        ],
      },
      {
        island: "Lachen",
        attractions: [
          {
            name: "Gurudongmar Lake",
            description:
              "Visit Gurudongmar Lake, one of the highest lakes in the world, known for its pristine waters and breathtaking surroundings.",
          },
          {
            name: "Chopta Valley",
            description:
              "Explore Chopta Valley, a scenic area known for its beautiful landscapes, lush greenery, and serene environment.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Trekking Adventures",
        description:
          "Embark on exciting trekking trails like the Goecha La Trek and Singalila Ridge Trek, offering stunning views of the Himalayas and a chance to immerse yourself in nature.",
      },
      {
        title: "Cultural Tours",
        description:
          "Immerse yourself in Sikkim’s rich cultural heritage with guided tours of local monasteries, traditional festivals, and local villages.",
      },
      {
        title: "Local Cuisine",
        description:
          "Savor Sikkimese cuisine, including local delicacies like momos, thukpa, and gundruk. Explore local markets and street food for an authentic culinary experience.",
      },
      {
        title: "River Rafting",
        description:
          "Experience the thrill of river rafting in the Teesta and Rangit Rivers, surrounded by the breathtaking landscapes of Sikkim.",
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
                {Sikkim.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Sikkim.placeName &&
                    Sikkim.placeName}
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
                src={Sikkim.exolreImage}
                alt={Sikkim.placeName}
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
              {Sikkim.inclusion && (
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
                Best Time to Visit {Sikkim.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Sikkim.packageOverView}</p>
            </div>
            {Sikkim.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Sikkim.exploreHotle}
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
                    {Sikkim.Accommodation &&
                      Sikkim.Accommodation.map((elm, index) => (
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
                {Sikkim.activities &&
                  Sikkim.activities.map((activity, index) => (
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

            {Sikkim.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Sikkim.inclusions &&
                      Sikkim.inclusions.map((inclusion, index) => (
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
                    {Sikkim.exclusions &&
                      Sikkim.exclusions.map((exclusion, index) => (
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
      {Sikkim.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Sikkim.placeName}
  </h2>
  <ul className="space-y-6">
    {Sikkim.seasons.map((season, index) => (
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
              {Sikkim.exploreIsland.map((island, index) => (
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

            {Sikkim.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Sikkim.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Sikkim.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Sikkim.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Sikkim.reasons &&
                    Sikkim.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Sikkim.reasons &&
                    Sikkim.reasons.reasonParts.map(
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
            {Sikkim.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Sikkim.placeName}
                </h2>
                {Sikkim.faqData.map((faq, index) => (
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
                      {(Sikkim.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Sikkim.price
                      ? Sikkim.price.toLocaleString("en-IN")
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
