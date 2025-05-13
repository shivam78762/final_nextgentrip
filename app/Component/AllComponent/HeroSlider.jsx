// components/HeroSlider.js
"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apilink } from "../common";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </div>
    ),
  };

  const slides = [
    {
      href: "/himachal-pradesh-tours-packages/",
      title: "Himachal Tour Packages",
      cardsImg: "/images/australia-banner-home.webp",
    },
    {
      href: "/australia-tours-packages/",
      title: "Australia Tour Packages",
      cardsImg: "/images/australia-banner-home.webp",
    },
    {
      href: "/azerbaijan-tours-packages/",
      title: "Azerbaijan Holidays",
      cardsImg: "/images/australia-banner-home.webp",
    },
    {
      href: "/kerala-tours-packages/",
      title: "Kerala Tour Packages",
      cardsImg: "/images/australia-banner-home.webp",
    },
    {
      href: "/europe-tours-packages/",
      title: "Europe Tour Packages",
      cardsImg: "/images/australia-banner-home.webp",
    },
    {
      href: "/kashmir-tours-packages/",
      title: "Kashmir Tour Packages",
      cardsImg: "/images/australia-banner-home.webp",
    },
    // Add more slide objects if needed
  ];
  const [searchInput,setSearchInput]=useState("")
  const route=useRouter();

  const handleSearch=()=>{
route.push(`/holidayspackage/${searchInput}`)
  }



  return (
    <div className="container mx-auto relative overflow-hidden lg:overflow-visible pt-6 lg:pt-0 h-80 mb-20">
      <Slider {...settings} className="relative">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <Link href={slide.href} className="block relative">
              <img
                src={slide.cardsImg}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-80"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 text-white bg-black bg-opacity-20 z-10"></div>
              <h2 className="absolute left-0 right-0  flex items-center justify-center mx-auto z-10  text-white text-2xl top-20 lg:top-16 font-bold">
                {slide.title}
              </h2>
            </Link>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-10 lg:bottom-16  left-0 right-0 text-center pb-6">
        <h1 className="text-white text-2xl lg:text-4xl font-bold">
          Where Every Experience Counts!
        </h1>
        <div className="flex justify-between mt-5 items-center border rounded-full   w-full md:w-[600px] bg-white mx-auto ">
          <div className="relative w-full flex p-2 px-4 items-center">
            <img
              src="/images/search.svg"
              alt="Search Icon"
              width={24}
              height={24}
            />
            <input
              type="text"
              id="txtDesCity"
              className="ml-2 flex-grow border-none p-2 w-full rounded-lg placeholder-gray-500"
              placeholder="Enter Your Dream Destination!"
              value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}
            />
          </div>
          <button
            className="ml-2 primary-col text-white px-8 py-2 h-14  rounded-full hover:bg-[#ef6414ed]"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-center">
        <div className="bg-white  absolute -bottom-7 shadow-md  border border-[#98D1FF] rounded-full text-center py-2 flex ">
          <div className="flex  gap-6 mx-auto px-4">
            <div>
              <Link href="" className="flex text-center gap-2">
                <img
                  src="/images/honey_moon.webp"
                  alt="Honeymoon"
                  className="mx-auto"
                />
                <span className="font-semibold mt-2">Honeymoon</span>
              </Link>
            </div>
            <div>
              <Link href="" className="flex text-center gap-2">
                <img
                  src="/images/honey_moon.webp"
                  alt="Honeymoon"
                  className="mx-auto"
                />
                <span className="font-semibold mt-2">Pilgrimage</span>
              </Link>
            </div>
            <div>
              <Link href="" className="flex text-center gap-2">
                <img
                  src="/images/honey_moon.webp"
                  alt="Honeymoon"
                  className="mx-auto"
                />
                <span className="font-semibold mt-2">Ayurveda</span>
              </Link>
            </div>
            <div>
              <Link href="" className="flex text-center gap-2">
                <img
                  src="/images/honey_moon.webp"
                  alt="Honeymoon"
                  className="mx-auto"
                />
                <span className="font-semibold mt-2">Adventure</span>
              </Link>
            </div>
            <div>
              <Link href="" className="flex text-center gap-2">
                <img
                  src="/images/honey_moon.webp"
                  alt="Honeymoon"
                  className="mx-auto"
                />
                <span className="font-semibold mt-2">Group Departure</span>
              </Link>
            </div>
            <div>
              <Link href="" className="flex text-center gap-2">
                <img
                  src="/images/honey_moon.webp"
                  alt="Honeymoon"
                  className="mx-auto"
                />
                <span className="font-semibold mt-2">Leisure</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
