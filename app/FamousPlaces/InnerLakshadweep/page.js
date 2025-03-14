"use client";
import React from "react";
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
const page = () => {
  const lakshadweepIslands = [
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
  ];
  const activities = [
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
  ];
  const inclusions = [
    "Accommodation: Stay at premium resorts, hotels, or government-approved guesthouses on various islands.",
    "Meals: Breakfast, lunch, and dinner may be included, depending on your package. Local seafood and Indian cuisine are commonly offered.",
    "Permits: Assistance in obtaining the necessary entry permits for Indian nationals and special permits for foreign nationals.",
    "Transfers: Pick-up and drop-off from airports and boat transfers between islands.",
    "Water Sports: Snorkeling, kayaking, scuba diving, and other water sports activities can be part of your package.",
    "Guided Tours: Explore local attractions and cultural sites with guided tours.",
    "Medical Support: First aid and basic medical support are typically available.",
  ];
  const exclusions = [
    "International/Domestic Flights: Airfare to and from Lakshadweep is usually not included.",
    "Personal Expenses: Any personal purchases like souvenirs, laundry, or additional meals outside of the package.",
    "Travel Insurance: It is advisable to have travel insurance, but it is not typically included.",
    "Additional Activities: Activities not mentioned in the package may incur extra charges.",
    "Health Services: Advanced medical facilities may not be available, and specialized treatments are excluded.",
  ];

  const reasons = [
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
  ];

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
                Lakshadweep <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:gap-3">
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
                <h2 className="font-bold text-nowrap text-md lg:text-xl">
                  {" "}
                  EXPLORE LAKSHADWEEP
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
                src="/images/lakshadweep2.webp"
                alt="LAKSHADWEEP"
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
              <Link
                href="#ExclusionsInclusions"
                className="px-5 py-2 hover:bg-[#2196f3] hover:text-white rounded-full border"
              >
                Inclusion/Exclusions
              </Link>
              <Link
                href="#"
                className="px-5 py-2 hover:bg-[#2196f3] hover:text-white rounded-full border"
              >
                Additional Info
              </Link>
            </div>
            <div
              id="package-overView"
              className="package-overView flex flex-col gap-5 border px-6 py-5 shadow-lg bg-white rounded-xl"
            >
              <h3 className="font-bold">Package Overview</h3>
              <p className="text-sm ">
                Welcome to Lakshadweep, a stunning tropical paradise that
                promises an unforgettable getaway with its pristine coral
                atolls, crystal-clear waters, and rich marine biodiversity. As
                India’s smallest Union Territory, Lakshadweep offers an
                exclusive and serene escape perfect for nature lovers, adventure
                seekers, and those looking for a peaceful retreat. At Next Gen
                India, we offer meticulously crafted travel packages to ensure
                your Lakshadweep adventure is extraordinary from start to
                finish.
              </p>
            </div>
            <div className="HotelDetails flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
              <h3 className="font-bold">Hotel Details</h3>
              <div className="flex flex-col lg:flex-row   items-start gap-5">
                <figure className="h-24 w-full lg:w-96">
                  <img
                    src="/images/hotelDetails..webp"
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
                  <div className="text-sm flex flex-col gap-1 text-justify">
                    <h2 className="font-bold"> Luxury Resorts</h2>
                    <p className="text-gray-700">
                      Enjoy luxurious stays at top resorts like Taj Exotica
                      Resort &amp; Spa on Agatti Island, offering high-end
                      services, stunning views, and exceptional service.
                    </p>
                  </div>
                  <div className="text-sm flex flex-col gap-1 text-justify">
                    <h2 className="font-bold"> Boutique Hotels</h2>
                    <p className="text-gray-700">
                      Experience personalized comfort and unique charm at
                      boutique properties such as Bangaram Island Resort and
                      Kavaratti Island Resort.
                    </p>
                  </div>
                  <div className="text-sm flex flex-col gap-1 text-justify">
                    <h2 className="font-bold"> Eco-Friendly Lodges</h2>
                    <p className="text-gray-700">
                      Choose eco-conscious lodges like Agatti Island Beach
                      Resort, which combines luxury with sustainable practices
                      and offers a more intimate, environmentally friendly
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Day Wise Itinerary flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-xl">
              <h3 className="font-bold">Day Wise Activities and Experiences</h3>
              <div className="flex flex-col items-center gap-5">
                {activities.map((activity, index) => (
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

            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-4    "
              id="ExclusionsInclusions"
            >
              <div className="border bg-[#EAFAEA] px-3 py-2 flex flex-col gap-5 rounded-xl ">
                <h3 className="font-bold">Inclusions</h3>
                <div className="overflow-x-hidden h-40  inclusions  overflow-scroll flex flex-col gap-5">
                  {inclusions.map((inclusion, index) => (
                    <p key={index} className="flex items-center gap-2 text-sm">
                      <FaCheck className="text-green-700 text-sm" />
                      {inclusion}
                    </p>
                  ))}
                </div>
              </div>
              <div className="border bg-[#FBEBEB] rounded-xl  px-3 py-2 flex flex-col gap-5">
                <h3 className="font-bold">Exclusions</h3>
                <div className="overflow-x-hidden h-40 exclusions   overflow-scroll flex flex-col gap-2">
                  {/* <p className="flex items-center gap-1 text-sm">
                  <RxCross2 className="text-red-700" />
                  Water sports activities
                </p> */}
                  {exclusions.map((exclusion, index) => (
                    <p key={index} className="flex items-center gap-2 text-sm">
                      <RxCross2 className="text-red-700  " />
                      {exclusion}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-5 border px-2 lg:px-6 py-5 shadow-lg bg-white rounded-md">
              <h3 className="font-bold " id="topPlaces">
                Top Tourist Places and Attractions
              </h3>
              {lakshadweepIslands.map((island, index) => (
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

            <div className="why Lakshadweep flex flex-col gap-5">
              <h4 className="font-bold text-xl">Why Lakshadweep?</h4>
              <div className="flex flex-col gap-5 text-sm text-justify">
                <p>
                  Lakshadweep is a hidden gem offering a unique blend of
                  unspoiled beauty, vibrant marine life, and tranquillity.
                  Here’s why it should be your next destination:
                </p>
                <div className="flex flex-col gap-3">
                  {reasons.map((reason, index) => (
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
          </div>

          <div className="secondFixedCardRight   ">
            <div className="price-help-card flex flex-col gap-6 items-center overflow-hidden w-full  sticky top-28">
              <div className="border-2 border-gray-200 rounded-xl flex flex-col shadow-sm bg-white w-[100%]">
                <div className="price-box bg-[#D2EBFF] px-6 py-4 rounded-t-xl">
                  <span className="text-sm text-gray-600">Starting from</span>
                  <p className="flex items-center gap-2 line-through text-sm text-gray-500 mt-1">
                    <FaRupeeSign className="text-sm" />
                    <span>24,999</span>
                  </p>
                  <p className="text-3xl flex items-center font-bold text-gray-800">
                    <FaRupeeSign className="text-xl" />
                    22,999{" "}
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
