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

 const Uttarakhand= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",

    placeName: "Uttarakhand",

    packageOverView:
      "Welcome to Uttarakhand, a mesmerizing land of divine beauty and serene landscapes, nestled in the lap of the Himalayas. Known for its spiritual significance, lush valleys, picturesque hill stations, and adventure opportunities, Uttarakhand offers a perfect blend of tranquility and excitement. Whether you seek spiritual solace, thrilling adventures, or scenic retreats, Uttarakhand has something special for everyone. At Next Gen India, we are dedicated to curating personalized travel experiences that allow you to explore the best of this enchanting state. Let us guide you through Uttarakhand’s top destinations, unique attractions, and unforgettable experiences.",
    price: 24999,
    reasons: {
      heading:
        "Uttarakhand, often referred to as the &quot;Land of the Gods,&quot; is renowned for its:",
      reasonParts: [
        {
          title: "Stunning Landscapes",
          description:
            "From majestic mountain ranges to verdant valleys and pristine lakes, experience the natural splendor of Uttarakhand.",
        },
        {
          title: "Spiritual Significance",
          description:
            "Visit sacred temples and pilgrimage sites that attract spiritual seekers from around the world.",
        },
        {
          title: "Adventure Activities",
          description:
            "Engage in thrilling activities such as trekking, river rafting, skiing, and camping.",
        },
        {
          title: "Serene Retreats",
          description:
            "Find peace and rejuvenation in the tranquil hill stations and scenic retreats.",
        },
      ],
    },
    TravelTips: [
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Uttarakhand is from March to June for pleasant weather or from October to February for snow and winter sports.",
      },
      {
        heading: "Local Transport",
        description:
          "Utilize local buses, taxis, and rental cars to navigate between destinations. Private cabs and rental scooters are also popular options for exploring smaller towns.",
      },
      {
        heading: "Dress Code",
        description:
          "Pack warm clothing, especially if you’re visiting during winter or high-altitude areas. Comfortable walking shoes are recommended for sightseeing.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, acclimate to higher altitudes gradually, and be cautious with street food. Ensure you have travel insurance for a safe and enjoyable trip.",
      },
    ],

    exploreIsland: [
      {
        island: "Dehradun",
        attractions: [
          {
            name: "Gateway to the Hills",
            description:
              "Explore Dehradun, the capital city of Uttarakhand, known for its pleasant climate, colonial architecture, and vibrant markets.",
          },
          {
            name: "Robber's Cave",
            description:
              "Visit this natural cave formation surrounded by lush greenery and enjoy a refreshing dip in the cool waters.",
          },
          {
            name: "Sahastradhara",
            description:
              "Experience the therapeutic benefits of the sulfur-rich springs at Sahastradhara, offering a natural spa experience.",
          },
        ],
      },
      {
        island: "Rishikesh",
        attractions: [
          {
            name: "Spiritual Center",
            description:
              "Immerse yourself in the spiritual ambiance of Rishikesh, renowned for its ashrams, yoga centers, and the sacred Ganges River.",
          },
          {
            name: "Laxman Jhula",
            description:
              "Walk across the iconic Laxman Jhula bridge, believed to be the spot where Lord Rama’s brother Laxman crossed the Ganges.",
          },
          {
            name: "River Rafting",
            description:
              "Embark on an exhilarating river rafting adventure on the Ganges, surrounded by stunning landscapes.",
          },
        ],
      },
      {
        island: "Haridwar",
        attractions: [
          {
            name: "Sacred City",
            description:
              "Discover Haridwar, one of the seven holiest places in Hinduism, known for its ghats, temples, and vibrant Ganga Aarti ceremonies.",
          },
          {
            name: "Ganga Aarti at Har Ki Pauri",
            description:
              "Witness the grand Ganga Aarti ceremony at Har Ki Pauri, a spiritual experience with thousands of lamps floating on the river.",
          },
        ],
      },
      {
        island: "Nainital",
        attractions: [
          {
            name: "Lake District",
            description:
              "Explore Nainital, a charming hill station famous for its picturesque lakes and pleasant weather.",
          },
          {
            name: "Naini Lake",
            description:
              "Enjoy a serene boat ride on Naini Lake, surrounded by lush hills and colonial-era buildings.",
          },
          {
            name: "Naina Devi Temple",
            description:
              "Visit the Naina Devi Temple, located on the northern shore of Naini Lake, for a spiritual experience with panoramic views.",
          },
        ],
      },
      {
        island: "Mussoorie",
        attractions: [
          {
            name: "Queen of the Hills",
            description:
              "Discover Mussoorie, a popular hill station known for its colonial charm, scenic views, and pleasant climate.",
          },
          {
            name: "Kempty Falls",
            description:
              "Enjoy a refreshing experience at Kempty Falls, a popular picnic spot with cascading waters and scenic beauty.",
          },
          {
            name: "Gun Hill",
            description:
              "Take a cable car ride to Gun Hill for breathtaking views of the Doon Valley and the Himalayan ranges.",
          },
        ],
      },
      {
        island: "Auli",
        attractions: [
          {
            name: "Skiing Paradise",
            description:
              "Experience Auli, a renowned ski resort known for its snow-capped slopes and panoramic views of the Himalayas.",
          },
          {
            name: "Skiing and Snowboarding",
            description:
              "Engage in thrilling winter sports like skiing and snowboarding on the pristine slopes of Auli.",
          },
          {
            name: "Gurso Bugyal",
            description:
              "Explore the beautiful meadows of Gurso Bugyal, offering stunning views of the surrounding peaks.",
          },
        ],
      },
      {
        island: "Ranikhet",
        attractions: [
          {
            name: "Quiet Retreat",
            description:
              "Discover Ranikhet, a serene hill station with lush green meadows, ancient temples, and colonial architecture.",
          },
          {
            name: "Chaubatia Gardens",
            description:
              "Visit the Chaubatia Gardens, known for its beautiful flower beds, fruit orchards, and panoramic views of the Himalayas.",
          },
          {
            name: "Jhula Devi Temple",
            description:
              "Explore the ancient Jhula Devi Temple, dedicated to the goddess Jhula Devi, and enjoy the peaceful surroundings.",
          },
        ],
      },
      {
        island: "Jim Corbett National Park",
        attractions: [
          {
            name: "Wildlife Safari",
            description:
              "Experience a thrilling wildlife safari in Jim Corbett National Park, India’s oldest national park, known for its diverse flora and fauna.",
          },
          {
            name: "Tiger Sightings",
            description:
              "Spot the majestic Bengal tiger along with other wildlife species like elephants, leopards, and various bird species.",
          },
          {
            name: "River Rafting in Kosi River",
            description:
              "Enjoy river rafting in the Kosi River, surrounded by scenic landscapes and rich biodiversity.",
          },
        ],
      },
    ],
    activities: [
      {
        title: "Spiritual Retreats",
        description:
          "Engage in meditation and yoga retreats at ashrams and spiritual centers in Rishikesh and Haridwar.",
      },
      {
        title: "Adventure Activities",
        description:
          "Participate in a range of adventure activities such as trekking in the Valley of Flowers, paragliding in Bir-Billing, and camping in the scenic landscapes of Uttarakhand.",
      },
      {
        title: "Local Cuisine",
        description:
          "Savor the local flavors with cuisine, including dishes like Chana Madra, Aloo Keema, and Siddu. Explore local markets and food festivals for an authentic taste of the region.",
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
                {Uttarakhand.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Uttarakhand.placeName &&
                    Uttarakhand.placeName}
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
                src={Uttarakhand.exolreImage}
                alt={Uttarakhand.placeName}
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
              {Uttarakhand.inclusion && (
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
                Best Time to Visit {Uttarakhand.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Uttarakhand.packageOverView}</p>
            </div>
            {Uttarakhand.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Uttarakhand.exploreHotle}
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
                    {Uttarakhand.Accommodation &&
                      Uttarakhand.Accommodation.map((elm, index) => (
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
                {Uttarakhand.activities &&
                  Uttarakhand.activities.map((activity, index) => (
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

            {Uttarakhand.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Uttarakhand.inclusions &&
                      Uttarakhand.inclusions.map((inclusion, index) => (
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
                    {Uttarakhand.exclusions &&
                      Uttarakhand.exclusions.map((exclusion, index) => (
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
      {Uttarakhand.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Uttarakhand.placeName}
  </h2>
  <ul className="space-y-6">
    {Uttarakhand.seasons.map((season, index) => (
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
              {Uttarakhand.exploreIsland.map((island, index) => (
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

            {Uttarakhand.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Uttarakhand.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Uttarakhand.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Uttarakhand.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Uttarakhand.reasons &&
                    Uttarakhand.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Uttarakhand.reasons &&
                    Uttarakhand.reasons.reasonParts.map(
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
            {Uttarakhand.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Uttarakhand.placeName}
                </h2>
                {Uttarakhand.faqData.map((faq, index) => (
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
                      {(Uttarakhand.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Uttarakhand.price
                      ? Uttarakhand.price.toLocaleString("en-IN")
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
