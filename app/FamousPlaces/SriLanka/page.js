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


 const  SriLanka= {
  exolreImage: "/images/hotelsss.webp",
  exploreHotle: "/images/Resort..webp",

  placeName: "Sri Lanka",

  packageOverView:
    "Welcome to Sri Lanka, a tropical paradise renowned for its stunning landscapes, richcultural heritage, and vibrant biodiversity. This island nation, known as the “Pearl of the Indian Ocean,” offers a diverse range of experiences from ancient temples and lush tea plantations to pristine beaches and bustling markets. At Next Gen India, we are dedicated to crafting customized travel itineraries that allow you to experience the very best of Sri Lanka. Let us guide you through the  top destinations, unique attractions, and unforgettable experiences that this beautiful country has to offer.",
  price: 25999,
  reasons: {
    heading: "Sri Lanka captivates with its",
    reasonParts: [
      {
        title: "Breathtaking Landscapes",
        description:
          "From golden beaches and verdant hills to lush rainforests and serene lakes, Sri Lanka’s natural beauty is truly diverse.",
      },
      {
        title: "Rich Cultural Heritage",
        description:
          "Discover ancient cities, temples, and traditional festivals that reflect the island’s deep cultural roots.",
      },
      {
        title: "Wildlife Encounters",
        description:
          "Experience exciting safaris and see an array of wildlife in their natural habitats, including elephants, leopards, and exotic birds.",
      },
      {
        title: "Culinary Delights",
        description:
          "Indulge in Sri Lankan cuisine, famous for its vibrant spices and unique flavors, from street food to gourmet dining.",
      },
    ],
  },
  TravelTips: [
    {
      heading: "Best Time to Visit",
      description:
        "The ideal time to visit Sri Lanka is from December to March for the west coast and cultural cities, and from April to September for the east coast and northern regions.",
    },
    {
      heading: "Local Transport",
      description:
        "Use tuk-tuks, local buses, and trains for exploring cities and rural areas. Consider hiring a private driver for more convenience and flexibility.",
    },
    {
      heading: "Dress Code",
      description:
        "Dress modestly when visiting religious sites. Lightweight, breathable clothing is recommended for the warm climate, and comfortable walking shoes are essential.",
    },
    {
      heading: "Health and Safety",
      description:
        "Stay hydrated, use sunscreen, and be cautious with street food. Ensure you have travel insurance and consult with a travel health clinic for vaccinations and health advice.",
    },
  ],

  exploreIsland: [
    {
      island: "Colombo",
      attractions: [
        {
          name: "Galle Face Green",
          description:
            "Enjoy a stroll along Colombo’s Galle Face Green, a vibrant urban park with stunning ocean views, street food stalls, and lively evening activities.",
        },
        {
          name: "Gangaramaya Temple",
          description:
            "Visit this iconic Buddhist temple known for its eclectic mix of architectural styles and rich collection of religious artifacts.",
        },
        {
          name: "National Museum",
          description:
            "Explore the National Museum of Colombo to delve into Sri Lanka’s history, art, and cultural heritage through an extensive collection of artifacts and exhibits.",
        },
      ],
    },
    {
      island: "Kandy",
      attractions: [
        {
          name: "Temple of the Tooth Relic",
          description:
            "Discover the Temple of the Tooth Relic, one of Sri Lanka’s most revered Buddhist sites, housing a sacred tooth relic of the Buddha.",
        },
        {
          name: "Kandy Lake",
          description:
            "Relax by Kandy Lake, a picturesque body of water surrounded by lush greenery and offering serene boat rides.",
        },
        {
          name: "Royal Botanical Gardens",
          description:
            "Explore the Royal Botanical Gardens in Peradeniya, renowned for its vast collection of tropical plants, orchids, and beautiful landscapes.",
        },
      ],
    },
    {
      island: "Sigiriya",
      attractions: [
        {
          name: "Sigiriya Rock Fortress",
          description:
            "Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage site with ancient frescoes, royal gardens, and panoramic views from the top.",
        },
        {
          name: "Pidurangala Rock",
          description:
            "For an alternative view of Sigiriya, hike up Pidurangala Rock, which offers stunning vistas and a less crowded experience.",
        },
      ],
    },
    {
      island: "Dambulla",
      attractions: [
        {
          name: "Dambulla Cave Temple",
          description:
            "Explore the Dambulla Cave Temple complex, featuring a series of impressive caves adorned with ancient Buddhist murals and statues.",
        },
        {
          name: "Golden Temple",
          description:
            "Visit the Golden Temple of Dambulla, renowned for its striking golden facade and intricate interior decorations.",
        },
      ],
    },
    {
      island: "Nuwara Eliya",
      attractions: [
        {
          name: "Tea Plantations",
          description:
            "Tour the picturesque tea plantations in Nuwara Eliya and learn about the tea-making process while enjoying scenic views of lush green hills.",
        },
        {
          name: "Victoria Park",
          description:
            "Stroll through Victoria Park, a beautifully maintained green space offering serene surroundings and colorful flower beds.",
        },
        {
          name: "Horton Plains National Park",
          description:
            "Venture to Horton Plains National Park for a scenic trek to World’s End, a dramatic cliff offering breathtaking views of the surrounding landscape.",
        },
      ],
    },
    {
      island: "Ella",
      attractions: [
        {
          name: "Nine Arches Bridge",
          description:
            "Marvel at the Nine Arches Bridge, an architectural marvel nestled in the lush hills of Ella, and enjoy the picturesque scenery.",
        },
        {
          name: "Little Adam’s Peak",
          description:
            "Hike to Little Adam’s Peak for stunning views of the surrounding valleys and tea plantations, an ideal spot for photography and relaxation.",
        },
        {
          name: "Ella Rock",
          description:
            "Challenge yourself with a trek to Ella Rock, offering panoramic views of the beautiful landscape and surrounding hills.",
        },
      ],
    },
    {
      island: "Galle",
      attractions: [
        {
          name: "Galle Fort",
          description:
            "Wander through Galle Fort, a well-preserved colonial fortification with charming streets, historic buildings, and scenic coastal views.",
        },
        {
          name: "Galle Lighthouse",
          description:
            "Visit the Galle Lighthouse, located within the fort, offering stunning views of the Indian Ocean and the surrounding area.",
        },
        {
          name: "Dutch Reformed Church",
          description:
            "Explore the Dutch Reformed Church, known for its historical significance and beautifully preserved architecture.",
        },
      ],
    },
    {
      island: "Unawatuna",
      attractions: [
        {
          name: "Unawatuna Beach",
          description:
            "Relax on the golden sands of Unawatuna Beach, famous for its clear waters, vibrant coral reefs, and excellent snorkeling opportunities.",
        },
        {
          name: "Japanese Peace Pagoda",
          description:
            "Visit the Japanese Peace Pagoda, a serene monument offering panoramic views of the surrounding coastline and a tranquil atmosphere.",
        },
      ],
    },
    {
      island: "Yala National Park",
      attractions: [
        {
          name: "Wildlife Safari",
          description:
            "Experience an exciting wildlife safari in Yala National Park, home to Sri Lanka’s largest population of leopards, as well as elephants, sloth bears, and a diverse range of bird species.",
        },
        {
          name: "Scenic Landscapes",
          description:
            "Enjoy the park’s varied landscapes, including grasslands, forests, and lagoons, offering a rich and immersive safari experience.",
        },
      ],
    },
  ],
  activities: [
    {
      title: "Cultural Festivals",
      description:
        "Witness traditional festivals such as the Kandy Esala Perahera, a grand procession featuring dancers, drummers, and elephants.",
    },
    {
      title: "Ayurvedic Spa Treatments",
      description:
        "Relax and rejuvenate with traditional Ayurvedic spa treatments and wellness therapies, incorporating ancient practices and natural ingredients.",
    },
    {
      title: "Local Cuisine",
      description:
        "Savor Sri Lankan dishes such as hoppers, string hoppers, and seafood curry, and experience local dining experiences from street food stalls to high-end restaurants.",
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
                {SriLanka.placeName} <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl uppercase">
                  {" "}
                  EXPLORE{" "}
                  {SriLanka.placeName &&
                    SriLanka.placeName}
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
                src={SriLanka.exolreImage}
                alt={SriLanka.placeName}
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
              {SriLanka.inclusion && (
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
                Best Time to Visit {SriLanka.placeName}
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">{SriLanka.packageOverView}</p>
            </div>
            {SriLanka.Accommodation && (
              <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
                <h3 className="font-bold">Hotel Details</h3>
                <div className="flex flex-col lg:flex-row   items-start gap-5">
                  <figure className="h-24 w-full lg:w-96">
                    <img
                      src={SriLanka.exploreHotle}
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
                    {SriLanka.Accommodation &&
                      SriLanka.Accommodation.map((elm, index) => (
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
                {SriLanka.activities &&
                  SriLanka.activities.map((activity, index) => (
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

            {SriLanka.inclusions && (
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
                id="ExclusionsInclusions"
              >
                <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                  <h3 className="font-bold">Inclusions</h3>
                  <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                    {SriLanka.inclusions &&
                      SriLanka.inclusions.map((inclusion, index) => (
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
                    {SriLanka.exclusions &&
                      SriLanka.exclusions.map((exclusion, index) => (
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
      {SriLanka.seasons &&  <div
  id="BestTimetoVisit"
  className="p-3 md:p-6 bg-white shadow-lg rounded-lg"
>
  <h2 className="font-bold text-gray-800 mb-5 border-b-2 border-gray-300 pb-2">
    Best Time to Visit {SriLanka.placeName}
  </h2>
  <ul className="space-y-6">
    {SriLanka.seasons.map((season, index) => (
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
              {SriLanka.exploreIsland.map((island, index) => (
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

            {SriLanka.TravelTips && (
              <section
                className="py-8 px-4 bg-white shadow-lg border rounded"
                id="TravelTips"
              >
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-xl font-bold mb-6">
                    Travel Tips for {SriLanka.placeName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SriLanka.TravelTips.map((elm, index) => (
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
              <h4 className="font-bold text-xl">Why {SriLanka.placeName}?</h4>
              <div className="flex flex-col gap-5 text-md text-justify">
                <p>
                  {SriLanka.reasons &&
                    SriLanka.reasons.heading}
                </p>
                <div className="flex flex-col gap-3">
                  {SriLanka.reasons &&
                    SriLanka.reasons.reasonParts.map(
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
            {SriLanka.faqData &&  <section id="faq" className="py-6 ">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  FAQs About Traveling to {SriLanka.placeName}
                </h2>
                {SriLanka.faqData.map((faq, index) => (
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
                      {(SriLanka.price + 1122).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    {SriLanka.price
                      ? SriLanka.price.toLocaleString("en-IN")
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
