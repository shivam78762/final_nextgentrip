// components/HotelChains.js
"use client";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const hotelChains = [
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/pride-hp-logo.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
  { href: "/listofhotels", src: "/images/sterling-hotels.webp", alt: "" },
];

const HotelChains = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Top Hotel Chains</h2>
      <p className="mb-6 text-justify">
        NextGen  has a wide range of luxury and budget-friendly hotel chain properties.
        We have picked the finest hotels in India with world-class services.
        We bring you not only a stay option, but an experience in your budget to enjoy the luxury.
        We make sure that all the hotels are safe, hygienic, comfortable, and easily approachable when it comes to location.
        Book your hotel with NextGen  and don't forget to grab an amazing hotel deal to save huge on your stay.
      </p>
      <Swiper
        spaceBetween={10}
        slidesPerView={8}
        navigation={true}
        className="mySwiper"
        breakpoints={{
            1024: {
              slidesPerView: 8,
            },
            768: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
          }}
        
      >
        {hotelChains.map((chain, index) => (
          <SwiperSlide key={index} className="flex-shrink-0">
            <Link href={chain.href} passHref>
              <Image src={chain.src} width={130} height={100} alt={chain.alt} className="object-contain border border-[#dcdcdc] bg-[#f9f9f9] p-2" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelChains;
