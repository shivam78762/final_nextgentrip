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



  const  Bengaluru= {
    exolreImage: "/images/hotelsss.webp",
    exploreHotle: "/images/Resort..webp",

    placeName: "Bengaluru",

    TravelTips: [ 
      {
        heading: "Best Time to Visit",
        description:
          "The ideal time to visit Bengaluru is from October to March when the weather is pleasant and conducive to outdoor activities.",
      },
      {
        heading: "Local Transport",
        description:
          "Use Bengaluru’s efficient public transportation system, including buses, auto-rickshaws, and the Namma Metro. Alternatively, consider hiring a private car for added convenience.",
      },
      {
        heading: "Dress Code",
        description:
          "Wear lightweight, breathable clothing due to the city’s moderate climate. Comfortable shoes are recommended for exploring various attractions.",
      },
      {
        heading: "Health and Safety",
        description:
          "Stay hydrated, use sunscreen, and be cautious with street food. Ensure you have travel insurance for a safe and enjoyable trip.",
      },
    ],
    exploreIsland: [
      {
        island: "Bangalore Palace",
        attractions: [
          {
            name: "Royal Elegance",
            description:
              "Visit Bangalore Palace, an architectural marvel inspired by England’s Windsor Castle. Explore its opulent interiors, sprawling grounds, and historic artworks.",
          },
          {
            name: "Guided Tours",
            description:
              "Take a guided tour to delve into the palace’s history and learn about the royal family that once resided here.",
          },
        ],
      },
      {
        island: "Lalbagh Botanical Garden",
        attractions: [
          {
            name: "Botanical Wonderland",
            description:
              "Stroll through Lalbagh Botanical Garden, a sprawling oasis in the heart of the city. Admire its diverse collection of flora, serene lakes, and the iconic Glass House.",
          },
          {
            name: "Flower Shows",
            description:
              "Time your visit with the annual flower shows for a vibrant display of floral artistry.",
          },
        ],
      },
      {
        island: "Cubbon Park",
        attractions: [
          {
            name: "Urban Retreat",
            description:
              "Escape to Cubbon Park, a lush green space offering walking trails, cycling paths, and peaceful picnic spots. It’s a perfect spot for relaxation amidst nature.",
          },
          {
            name: "Historical Monuments",
            description:
              "Explore the park’s historical landmarks, including the State Library and the High Court building.",
          },
        ],
      },
      {
        island: "Vidhana Soudha",
        attractions: [
          {
            name: "Architectural Splendor",
            description:
              "Marvel at the grandeur of Vidhana Soudha, the seat of the state legislature. Its Neo-Dravidian architecture and imposing façade make it a must-see landmark.",
          },
          {
            name: "Photo Opportunities",
            description:
              "Capture stunning photographs of the illuminated building in the evening.",
          },
        ],
      },
      {
        island: "Nandi Hills",
        attractions: [
          {
            name: "Scenic Escape",
            description:
              "Take a short trip to Nandi Hills, a scenic hill station located just outside the city. Enjoy breathtaking sunrise views, trekking opportunities, and historical sites like Tipu Sultan’s Summer Palace.",
          },
          {
            name: "Adventure Activities",
            description:
              "Engage in activities such as paragliding and cycling in the picturesque surroundings.",
          },
        ],
      },
      {
        island: "Bangalore’s Culinary Scene",
        attractions: [
          {
            name: "Local Delicacies",
            description:
              "Indulge in Bengaluru’s diverse culinary offerings, from street food favorites like idli and dosa to gourmet dining experiences. Don’t miss trying local specialties such as Bisi Bele Bath and Ragi Mudde.",
          },
          {
            name: "Food Tours",
            description:
              "Join a food tour to sample the best of Bengaluru’s food scene and discover hidden culinary gems.",
          },
        ],
      },
      {
        island: "Shopping Hotspots",
        attractions: [
          {
            name: "Commercial Street",
            description:
              "Shop for trendy fashion, accessories, and souvenirs at Commercial Street, a bustling shopping destination with a vibrant atmosphere.",
          },
          {
            name: "UB City Mall",
            description:
              "Experience luxury shopping at UB City Mall, home to high-end brands, gourmet dining, and entertainment options.",
          },
        ],
      },
    ],

    activities: [
      {
        title: "Cultural Tours:",
        description:
          "Explore Bengaluru’s rich cultural heritage with guided tours that cover historical landmarks, local traditions, and art galleries.",
      },
      
      {
        title: "Craft Beer Tasting:",
        description:
          "Bengaluru is known for its craft beer scene. Visit popular microbreweries and enjoy a variety of locally brewed beers and unique flavors.",
      },
      {
        title: "Music and Arts:",
        description:
          "Experience Bengaluru’s lively music and arts scene by attending concerts, theater performances, and art exhibitions at renowned venues.",
      },
    ],
    inclusions: [
      "Accommodation: Stay at luxury hotels, boutique hotels, or budget-friendly options as per your choice.",
      "Meals: Breakfast may be included, depending on your hotel or package. Some hotels offer additional meal options.",
      "Permits: Not applicable as Bangalore does not require special entry permits.",
      "Transfers: Airport pick-up and drop-off may be included, depending on the hotel or package.",
      "Guided Tours: Some luxury and boutique hotels may offer guided tours of local attractions.",
      "Medical Support: Basic medical support is generally available at most hotels.",
    ],
    exclusions: [
      "International/Domestic Flights: Airfare to and from Bangalore is usually not included.",
      "Personal Expenses: Any personal purchases like souvenirs, additional meals, or laundry are not covered.",
      "Travel Insurance: Travel insurance is not typically included, but it is advisable to have one.",
      "Additional Activities: Activities or excursions not included in the package may incur extra charges.",
      "Advanced Medical Services: Specialized medical treatments or facilities are not included and may need to be arranged separately.",
    ],

    reasons: {
      heading:
        "Bengaluru, the capital city of Karnataka, is celebrated for its perfect blend of modernity and tradition. Here’s why Bengaluru should be on your travel itinerary:",
      reasonParts: [
        {
          title: "Technological Hub",
          description:
            "Explore the city’s status as India’s tech capital, with state-of-the-art infrastructure and a thriving start-up ecosystem.",
        },
        {
          title: "Green Spaces",
          description:
            "Enjoy the city’s numerous parks and gardens, providing a refreshing escape from the urban hustle.",
        },
        {
          title: "Cultural Fusion:",
          description:
            "Experience Bengaluru’s diverse culture through its vibrant arts scene, historical landmarks, and culinary delights.",
        },
        {
          title: "Shopping and Entertainment",
          description:
            "Discover a wide range of shopping options, from bustling markets to high-end malls, and enjoy a thriving nightlife.",
        },
      ],
    },
    Accommodation: [
      {
        heading: "Luxury Hotels",
        AccommodationList:
          "Indulge in luxury at hotels such as The Ritz-Carlton, Taj West End, and Leela Palace, offering world-class amenities and exceptional service.",
      },
      {
        heading: "Boutique Hotels",
        AccommodationList:
          "Enjoy a unique stay at boutique hotels like The Park Bangalore and Hotel Ivory Tower, known for their personalized service and charming ambiance.",
      },
      {
        heading: "Budget Stays",
        AccommodationList:
          "Find comfortable and affordable accommodations at budget hotels and hostels, including options like Nextgentrip.com.",
      },
    ],
    packageOverView:
      "Welcome to Bengaluru, India’s vibrant “Silicon Valley,” where technology meets tradition amidst lush green landscapes and a bustling cosmopolitan scene. Known for its pleasant climate, innovative spirit, and rich cultural heritage, Bengaluru offers an exceptional travel experience for every type of explorer. At Next Gen India, we specialize in crafting unique and personalized itineraries that showcase the best of this dynamic city. Let us guide you through Bengaluru’s top attractions, hidden gems, and unforgettable experiences.",
    price: 28999,
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
                {Bengaluru.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {Bengaluru.placeName &&
                    Bengaluru.placeName}
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
                src={Bengaluru.exolreImage}
                alt={Bengaluru.placeName}
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
              {Bengaluru.inclusion && (
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
                Best Time to Visit {Bengaluru.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{Bengaluru.packageOverView}</p>
            </div>
            {Bengaluru.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={Bengaluru.exploreHotle}
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
                    {Bengaluru.Accommodation &&
                      Bengaluru.Accommodation.map((elm, index) => (
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
                {Bengaluru.activities &&
                  Bengaluru.activities.map((activity, index) => (
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

            {Bengaluru.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {Bengaluru.inclusions &&
                      Bengaluru.inclusions.map((inclusion, index) => (
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
                    {Bengaluru.exclusions &&
                      Bengaluru.exclusions.map((exclusion, index) => (
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
      {Bengaluru.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {Bengaluru.placeName}
  </h2>
  <ul className="space-y-6">
    {Bengaluru.seasons.map((season, index) => (
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
              {Bengaluru.exploreIsland.map((island, index) => (
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

            {Bengaluru.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {Bengaluru.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Bengaluru.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {Bengaluru.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {Bengaluru.reasons &&
                    Bengaluru.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {Bengaluru.reasons &&
                    Bengaluru.reasons.reasonParts.map(
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
            {Bengaluru.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {Bengaluru.placeName}
                </h2>
                {Bengaluru.faqData.map((faq, index) => (
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
                      {(Bengaluru.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {Bengaluru.price
                      ? Bengaluru.price.toLocaleString("en-IN")
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
