"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FAQSection from "../Component/AllComponent/FAQ";
import Link from "next/link";
import HeroSlider from "../Component/AllComponent/HeroSlider";
import { FaAngleDoubleRight, FaStar } from "react-icons/fa";

const page = () => {
  const carouselData = [
    {
      src: "/images/Udaipur-Heritage.webp",
      alt: "",
      location: "Rajasthan",
      price: "₹4,300 Per person",
    },
    {
      src: "/images/Stunning Sinquerim Beach.webp",
      alt: "",
      location: "Goa",
      price: "₹5,500 Per person",
    },
    {
      src: "/images/phuket11.webp",
      alt: "",
      location: "Thailand",
      price: "₹56,900 Per person",
    },
    {
      src: "/images/kanyakumari1.webp",
      alt: "",
      location: "South India",
      price: "₹7,200 Per person",
    },
    {
      src: "/images/Port-Blair Andaman.webp",
      alt: "",
      location: "Andaman",
      price: "₹30,400 Per person",
    },
    {
      src: "/images/backwater-allepey.webp",
      alt: "",
      location: "Kerala",
      price: "₹9,500 Per person",
    },
    {
      src: "/images/Gulmarg.webp",
      alt: "",
      location: "Kashmir",
      price: "₹16,300 Per person",
    },
    {
      src: "/images/Gangtok1.webp",
      alt: "",
      location: "North-East",
      price: "₹10,500 Per person",
    },
    {
      src: "/images/Explore.webp",
      alt: "",
      location: "Himachal",
      price: "₹9,000 Per person",
    },
    {
      src: "/images/Explore.webp",
      alt: "",
      location: "Ladakh",
      price: "₹32,000 Per person",
    },
    {
      src: "/images/Explore.webp",
      alt: "",
      location: "Maldives",
      price: "₹59,400 Per person",
    },
    {
      src: "/images/Explore.webp",
      alt: "",
      location: "Bhutan",
      price: "",
    },
  ];
  const carouselItems = [
    {
      href: "",
      imgSrc: "/images/gems_jamaica.webp",
      title: "Seychelles Holiday Package",
      price: "₹ 59990",
    },
    {
      href: "",
      imgSrc: "/images/gems_jamaica.webp",
      title: "Cambodia Holiday Package",
      price: "₹ 32890",
    },
    {
      href: "",
      imgSrc: "/images/gems_jamaica.webp",
      title: "Fiji Holiday Package",
      price: "₹ 201321",
    },
    {
      href: "",
      imgSrc: "/images/gems_jamaica.webp",
      title: "Jamaica Holiday Package",
      price: "₹ 82990",
    },
    {
      href: "",
      imgSrc: "/images/gems_jamaica.webp",
      title: "Morocco Holiday Package",
      price: "₹ 82990",
    },
  ];

  const tours = [
    {
      id: 1,
      title: "Grand Switzerland",
      image: "/images/t4.webp",
      description: "Grand switerland",
      price: "₹4000.00",
    },
    {
      id: 2,
      title: "Discover Japan",
      image: "/images/t4.webp",
      description: "Discover japan",
      price: "₹4000.00",
    },
    {
      id: 3,
      title: "Niko Trip",
      image: "/images/t4.webp",
      description: "Niko Trip",
      price: "₹4000.00",
    },
    {
      id: 4,
      title: "Singapore Trip",
      image: "/images/t4.webp",
      description: "Singapore Trip",
      price: "₹4000.00",
    },
    {
      id: 5,
      title: "The New California",
      image: "/images/t4.webp",
      description: "The New California",
      price: "₹4000.00",
    },
    {
      id: 6,
      title: "Greece, Santorini",
      image: "/images/t4.webp",
      description: "Greece, santormi",
      price: "₹4000.00",
    },
    {
      id: 5,
      title: "The New California",
      image: "/images/t4.webp",
      description: "The New California",
      price: "₹4000.00",
    },
    {
      id: 6,
      title: "Greece, Santorini",
      image: "/images/t4.webp",
      description: "Greece, santormi",
      price: "₹4000.00",
    },
  ];
  return (
    <>
      <HeroSlider />
      <div className="relative overflow-hidden px-5 lg:px-20 ">
        <div className="text-center pb-4 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Long Weekend Sale! Grab up to 25% off
          </h2>
          <p className="text-lg text-gray-600">Use Code: LONGWEEKEND</p>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation
          className="mySwiper"
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className=" rounded-lg overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full rounded-lg h-60 object-cover"
                />
                <div className="p-4">
                  <p className="text-lg font-semibold text-gray-800">
                    {item.location}
                  </p>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="my-10 lg:my-16 px-5 lg:px-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-blue-500">Explore</span> The Hidden Gems
          </h2>
          <p className="text-lg mb-8">
            Tap into the untapped tourist spots for an immersive travel odyssey.
          </p>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            className="owl-carousel"
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index} className="relative">
                <Link
                  href=""
                  className="block bg-white h-80 rounded-3xl shadow-lg relative overflow-hidden hd_gems_box"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-80 rounded-3xl "
                  />
                  <div className="p-10 text-white absolute z-10 top-16">
                    <h4 className="text-4xl font-serif font-normal mb-1">
                      Book Now
                    </h4>
                    <h5 className="text-3xl  font-semibold mb-2">
                      {item.title}
                    </h5>
                    <div className="flex items-center">
                      <p className="mr-2 text-white">Starting From</p>
                      <span className="font-semibold text-xl">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 lg:px-20 pb-10">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white shadow-md  overflow-hidden"
          >
            <div className="relative">
              <img
                src={tour.image}
                alt={tour.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 right-2  z-20 w-full flex  items-center justify-end ">
                <p className="font-bold bg-white px-2 py-1">{tour.price}</p>
              </div>
            </div>
            <div className="p-4 pb-0">
              <h4 className="text-lg font-semibold">{tour.title}</h4>
              <div className="flex items-center my-2">
                <span className="text-sm bg-yellow-500 text-white py-1 px-2 rounded-full">
                  HOT DEALS
                </span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            <p> {tour.description}</p>
            </div>

            <div className="mt-4  flex justify-between border-t  space-x-2">
              <Link href="/booknow" className=" flex p-4  items-center   gap-2 py-2 px-4 rounded hover:text-gray-600">
                Book Now <FaAngleDoubleRight />
              </Link>
             <hr className="h-16 w-[1px] bg-[#e5e7eb]"/>
              <button className=" flex p-4 items-center ap-2g  py-2 px-4 rounded hover:text-gray-600">
                View More <FaAngleDoubleRight />
              </button>
            </div>
          </div>
        ))}
      </div>
      <FAQSection />
    </>
  );
};

export default page;
