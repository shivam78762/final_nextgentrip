"use client";

import React, { useEffect, useState } from "react";
import InfoSection from "./InfoSection";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import axios from "axios";
import { apilink } from "../common";
import FeaturedProperties from "./FeaturedProperties";
import HotelSliderCompo from "../../hotels/HotelSliderCompo";

const TopFlight = () => {
  const [viewAll, setviewAll] = useState(true);
  const t = useTranslations("Popular");
  let date = new Date(Date.now());
  date.setMonth(date.getMonth() + 1);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");
  const hours = "00";
  const minutes = "00";
  const seconds = "00";
  date = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

  console.log(date.split("T"), "scsdlkjcndjcfvnodcf");

  const cityData = [
    {
      head: t("heading1"),
      images: [
        {
          image: "/images/london.webp",
          title: "Delhi to UAE",
          description: t("des1"),
          link: `flightto=DEL&from=BOM&date=${date}&prfdate=${date}&JourneyType=1&adultcount=1&childCount=0&infantCount=0&selectedClass=1/`,
        },
        {
          image: "/images/lose.webp",
          title: "Mumbai to indonesia",
          description: t("des2"),
          link: `flightto=BOM&from=BOM&date=2024-12-22T00:00:00&prfdate=2024-12-22T00:00:00&JourneyType=1&adultcount=1&childCount=0&infantCount=0&selectedClass=1/`,
        },
        {
          image: "/images/tokyo.webp",
          title: " delhi to Mumbai",
          description: t("des3"),
          link: `flightto=DEL&from=BOM&date=2024-12-22T00:00:00&prfdate=2024-12-22T00:00:00&JourneyType=1&adultcount=1&childCount=0&infantCount=0&selectedClass=1/`,
        },
        {
          image: "/images/rome.webp",
          title: "New York to London",
          description: t("des4"),
          link: `flightto=DEL&from=BOM&date=2024-12-22T00:00:00&prfdate=2024-12-22T00:00:00&JourneyType=1&adultcount=1&childCount=0&infantCount=0&selectedClass=1/`,
        },
        {
          image: "/images/dubai.webp",
          title: "Dubai to Hong Kong",
          description: t("des5"),
          link: `flightto=DEL&from=BOM&date=2024-12-22T00:00:00&prfdate=2024-12-22T00:00:00&JourneyType=1&adultcount=1&childCount=0&infantCount=0&selectedClass=1/`,
        },
      ],
    },
    {
      head: t("heading2"),
      images: [
        {
          image: "/images/europe.webp",
          title: "Explore the Wonders of Europe",
          description: t("desa1"),
        },
        {
          image: "/images/getways.webp",
          title: "Exotic Getaways to the Caribbean",
          description: t("desa2"),
        },
        {
          image: "/images/adventure.webp",
          title: "Adventure Awaits in Southeast Asia ",
          description: t("desa3"),
        },
        {
          image: "/images/maldives.webp",
          title: "Serene Escapes to the Maldives",
          description: t("desa4"),
        },
        {
          image: "/images/america2.webp",
          title: "Cultural Immersion in South America",
          description: t("desa5"),
        },
      ],
    },
    {
      head: t("heading3"),

      images: [
        {
          image: "/images/car1.webp",
          title: "Delhi",
          description: t("desb1"),
          link: `/hotels/cityName=delhi&citycode=130443&checkin=${
            date.split("T")[0]
          }&checkout=${
            date.split("T")[0]
          }&adult=1&child=0&roomes=1&page=0&star=0/`,
        },
        {
          image: "/images/24.webp",
          title: "Mumbai",
          description: t("desb2"),
          link: `/hotels/cityName=Mumbai,%20%20%20Maharashtra&citycode=144306&checkin=${
            date.split("T")[0]
          }&checkout=${
            date.split("T")[0]
          }&adult=1&child=0&roomes=1&page=0&star=0/`,
        },
        {
          image: "/images/wifi.webp",
          title: "Shimla",
          description: t("desb3"),
          link: `/hotels/cityName=Shimla,%20%20%20Himachal%20Pradesh&citycode=138673&checkin=${
            date.split("T")[0]
          }&checkout=${
            date.split("T")[0]
          }&adult=1&child=0&roomes=1&page=0&star=0/`,
        },
        {
          image: "/images/safety-first.webp",
          title: "Guwahati Assam",
          description: t("desb4"),
          link: `/hotels/cityName=Guwahati,%20%20%20Assam&citycode=121139&checkin=${
            date.split("T")[0]
          }&checkout=${
            date.split("T")[0]
          }&adult=1&child=0&roomes=1&page=0&star=0/`,
        },
        {
          image: "/images/businesswoman.webp",
          title: "Amritsar Punjab",
          description: t("desb5"),
          link: `/hotels/cityName=Amritsar,%20%20%20Punjab&citycode=101129&checkin=${
            date.split("T")[0]
          }&checkout=${
            date.split("T")[0]
          }&adult=1&child=0&roomes=1&page=0&star=0/`,
        },
      ],
    },
  ];

  const attractions = [
    {
      name: "Jaipur",
      icon: "🏰",
      isNew: true,
      link: "/FamousPlaces/InnerLakshadweep",
    },
    { name: "Bali", icon: "🏝️", link: "/FamousPlaces/Bali" },
    { name: "Goa ", icon: "🏖️", link: "/FamousPlaces/Andaman" },
    { name: "Australia ", icon: "🦘", link: "/FamousPlaces/Kashmir" },
    { name: "Dubai", icon: "🏢", link: "/FamousPlaces/Dubai" },
    { name: "Paris", icon: "🗼", link: "/FamousPlaces/Jaipur" },
    { name: "Kashmir", icon: "🏔️", link: "/FamousPlaces/Bengaluru" },
    { name: "Singapore", icon: "🛳️", link: "/FamousPlaces/Singapore" },
    { name: "Leh", icon: "🏯", link: "/FamousPlaces/Leh" },
    { name: "Singapore", icon: "🦁", link: "/FamousPlaces/Leh" },
    { name: "France", icon: "🌉", link: "/FamousPlaces/Leh" },

    { name: "Thar", icon: "🏜️", link: "/FamousPlaces/Kerala" },
  ];
  const [topport, settopport] = useState();

  useEffect(() => {
    const fetchTopport = async () => {
      const data = await axios.get(`${apilink}/Popular-Flight`);
      settopport(data.data, "sdfsdfjwe");
    };
    fetchTopport();
  }, []);

  return (
    <>
      <div>
        <main className="flight pt-0 lg:pt-10 px-0 md:px-10  lg:px-40">
          <div className="">
            <div className="relative ">
              <div className="relative text-lg md:text-xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center gap-2  mb-5 lg:mb-6">
                {t("mainheading")}
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3  gap-8  xl:px-5 pb-5 justify-center ">
            <div className="bg-white border shadow-md my-5 lg:my-0  mx-auto lg:mx-2 rounded-xl overflow-hidden relative  w-full ">
              <div className="city-head bg-[#0291d2] text-center">
                <h4 className="text-white text-lg font-semibold py-3">
                  {t("heading1")}
                </h4>
              </div>
              {topport && (
                <div className=" ">
                  {topport.map((imageData, i) => (
                    <Link
                      href={`flightto=${imageData.from_code}&from=${imageData.to_code}&date=${date}&prfdate=${date}&JourneyType=1&adultcount=1&childCount=0&infantCount=0&selectedClass=1/`}
                      className="items-center border-b px-4 flex hover:shadow-lg cursor-pointer"
                      key={i}
                    >
                      <div className="city-image">
                        <img
                          src={cityData[0].images[i].image}
                          alt={imageData.from}
                          className="rounded-full h-9 object-cover w-9"
                        />
                      </div>
                      <div className="px-4 w-[80%]">
                        <h3 className="text-sm font-semibold mb-0 mt-4 ">
                          {imageData.from} to {imageData.to}
                        </h3>
                        <p className="text-[#525252] text-xs font-normal mb-5 pt-1">
                          {imageData.dis}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white border shadow-md my-5 lg:my-0  mx-auto lg:mx-2 rounded-xl overflow-hidden relative  w-full ">
              <div className="city-head bg-[#0291d2] text-center">
                <h4 className="text-white text-lg font-semibold py-3">
                  {t("heading2")}
                </h4>
              </div>
              <div className=" ">
                {cityData[1].images.map((imageData, i) => (
                  <Link
                    href="/"
                    className="items-center border-b px-4 flex hover:shadow-lg cursor-pointer"
                    key={i}
                  >
                    <div className="city-image">
                      <img
                        src={imageData.image}
                        alt={imageData.title}
                        className="rounded-full h-9 object-cover w-9"
                      />
                    </div>
                    <div className="px-4 w-[80%]">
                      <h3 className="text-sm font-semibold mb-0 mt-4 ">
                        {imageData.title}
                      </h3>
                      <p className="text-[#525252] text-xs font-normal mb-5 pt-1">
                        {imageData.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white border shadow-md my-5 lg:my-0  mx-auto lg:mx-2 rounded-xl overflow-hidden relative  w-full ">
              <div className="city-head bg-[#0291d2] text-center">
                <h4 className="text-white text-lg font-semibold py-3">
                  {t("heading3")}
                </h4>
              </div>
              <div className=" ">
                {cityData[2].images.map((imageData, i) => (
                  <Link
                    href={imageData.link}
                    className="items-center border-b px-4 flex hover:shadow-lg cursor-pointer"
                    key={i}
                  >
                    <div className="city-image">
                      <img
                        src={imageData.image}
                        alt={imageData.title}
                        className="rounded-full h-9 object-cover w-9"
                      />
                    </div>
                    <div className="px-4 w-[80%]">
                      <h3 className="text-sm font-semibold mb-0 mt-4 ">
                        {imageData.title}
                      </h3>
                      <p className="text-[#525252] text-xs font-normal mb-5 pt-1">
                        {imageData.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <InfoSection />


      <div className='px-2 lg:px-40 my-8'>

        <h3 className="text-center text-3xl font-bold my-4"> Our Packages</h3>
      {/* <FeaturedProperties /> */}
      <HotelSliderCompo />

      </div>

      <div className="w-full mx-auto px-6 md:md:px-10 lg:px-52  pt:0 lg:pt-12 z-[-1]">
        <div className="relative text-xl md:text-xl lg:text-4xl tracking-tighter	 gfont1  font-bold text-gray-900 flex justify-center items-center gap-2 mb-4 lg:mb-14">
          Tourist 💕<span className="text-[#521010]"> Love</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5 md:gap-y-8 ">
          {viewAll &&
            attractions.slice(0, 7).map((attraction, index) => (
              <div className="  border-b-4 border-b-[#009dff] duration-200 text-xl shadow-md">
                <Link href={attraction.link}>
                  <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="icon-box">
                        <p className="text-3xl ">{attraction.icon}</p>
                      </div>
                      <div className="ml-4">
                        <h5 className="font-semibold text-lg">
                          {attraction.name}
                        </h5>
                        <span className="text-gray-500 text-[1rem]">
                          View All Pakage
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          {!viewAll &&
            attractions.map((attraction, index) => (
              <div className="col-span-1 border-b-4 border-b-[#009dff] duration-200 text-xl shadow-md">
                <Link href={attraction.link}>
                  <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="icon-box">
                        <p className="text-3xl ">{attraction.icon}</p>
                      </div>
                      <div className="ml-4">
                        <h5 className="font-semibold text-lg">
                          {attraction.name}
                        </h5>
                        <span className="text-gray-500 text-[1rem]">
                          View All Pakage
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          {viewAll && (
            <div
              onClick={() => setviewAll(false)}
              className="col-span-1 border-b-4 hover:border-b-[#009dff] duration-200 text-xl shadow-md cursor-pointer"
            >
              <span>
                <div className="bg-white shadow-md rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="icon-box">
                      <p className="text-2xl ">🧾</p>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold text-lg">View All</h5>
                      <span className="text-gray-500 text-[1rem]">
                        Destination Pakage
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          )}
        </div>

        <div className="view_btn my-10 flex justify-center">
          {/* <Link
            href="/FamousPlaces/Cities"
            className="bg-[#2196F3] text-white py-2 px-4 rounded-full"
          >
            View All
          </Link> */}
        </div>
      </div>

      <div className="bg-gray-100 p-5 lg:p-20 mt-12">
        <div className=" flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <div className="">
            <div className="p-4">
              <h3 className="text-4xl font-normal">
                {t("service")} <br />
              </h3>
              <p className="mt-4 mb-6">{t("serviceans")}</p>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <img
                    src="/images/blog2.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">{t("moreabout")}</h5>
                    <p className="mt-2">{t("moreaboutans")}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <img
                    src="/images/shield.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                      {t("serviceprovider")}
                    </h5>
                    <p className="mt-2">{t("serviceproviderans")}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <img
                    src="/images/general.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                      {t("happyservice")}
                    </h5>
                    <p className="mt-2">{t("happyserviceans")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 my-5 lg:my-0">
            <img
              src="/images/online-booking.webp"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFlight;
