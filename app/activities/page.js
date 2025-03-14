"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ActivitiesSlider from "../Component/AllComponent/ActivitiesSlider";
import { FaArrowRight, FaClock, FaMapPin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Page = () => {
  const t=useTranslations("activities")
  const slides = [
    { src: "/images/activity9.webp", title: "Paris", tours: "100+ Tours" },
    { src: "/images/activity6.webp", title: "Singapore", tours: "300+ Tours" },
    { src: "/images/activity7.webp", title: "Roma", tours: "400+ Tours" },
    { src: "/images/activity8.webp", title: "Bangkok", tours: "100+ Tours" },
    { src: "/images/activity1.webp", title: "Bali", tours: "600+ Tours" },
    { src: "/images/activity2.webp", title: "Phuket", tours: "200+ Tours" },
    { src: "/images/activity3.webp", title: "Tokyo", tours: "700+ Tours" },
    { src: "/images/activity4.webp", title: "Cappadocia", tours: "900+ Tours" },
    { src: "/images/activity5.webp", title: "Paris", tours: "100+ Tours" },
  ];
  const features = [
    { title: "Cruises", imgSrc: "/images/111.webp" },
    { title: "Beach Tours", imgSrc: "/images/112.webp" },
    { title: "City Tours", imgSrc: "/images/113.webp" },
    { title: "Museum Tour", imgSrc: "/images/114.webp" },
    { title: "Food", imgSrc: "/images/115.webp" },
    { title: "Hiking", imgSrc: "/images/116.webp" },
  ];

  const tours = [
    {
      id: 1,
      image: "/images/1bike.webp",
      location: "Paris, France",
      title: t("title1"),
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 189.25,
      link: "/tour-single-1/1",
    },
    {
      id: 2,
      image: "/images/2.webp",
      location: "New York, USA",
      title: t("title2"),
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 225,
      link: "/tour-single-1/2",
    },
    {
      id: 3,
      image: "/images/3.webp",
      location: "London, UK",
      title:  t("title3"),
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 943,
      link: "/tour-single-1/3",
    },
    {
      id: 4,
      image: "/images/4.webp",
      location: "New York, USA",
      title: t("title4"),
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 771,
      link: "/tour-single-1/4",
    },
    {
      id: 5,
      image: "/images/5.webp",
      location: "Paris, France",
      title:  t("title5"),
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 189.25,
      link: "/tour-single-1/5",
    },
    {
      id: 6,
      image: "/images/6.webp",
      location: "New York, USA",
      title:  t("title6"),
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 225,
      link: "/tour-single-1/6",
    },
    {
      id: 7,
      image: "/images/7.webp",
      location: "London, UK",
      title:  t("title7"),
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 943,
      link: "/tour-single-1/7",
    },
    {
      id: 8,
      image: "/images/9.webp",
      location: "London, UK",
      title:  t("title7"),
      rating: 4.8,
      reviews: 243,
      duration: "4 days",
      price: 943,
      link: "/tour-single-1/7",
    },
  ];

  return (
    <>
      <ActivitiesSlider />

      <div className="px-5 md:px-20 py-12">
        <div className="flex justify-between mb-8 items-center">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              className="text-xl md:text-[24px] font-semibold aos-init aos-animate"
            >
              {t("trending")}
            </h2>
          </div>
          <div data-aos="fade-up" className="col-auto aos-init aos-animate">
            <Link
              className="buttonArrow gap-4 font-semibold flex items-center"
              href=""
            >
              <span>See all</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={8}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-32">
              <Link href="#" className="block text-center">
                <div className="mx-auto rounded-full">
                  <img
                    alt={slide.title}
                    loading="lazy"
                    className="w-32 h-32 mx-auto object-cover rounded-full"
                    src={slide.src}
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4">{slide.title}</h3>
                <p className="text-sm">{slide.tours}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination custom-pagination"></div>
      </div>

      <div className="px-5 md:px-20 py-10">
        <div className="flex justify-between mb-8 items-center">
          <h2
            data-aos="fade-up"
            className="text-xl lg:text-3xl md:text-[24px] font-semibold aos-init aos-animate"
          >
            {t("trending")}
          </h2>

          <div data-aos="fade-up" className="col-auto aos-init aos-animate">
            <Link
              className="buttonArrow gap-4 font-semibold flex items-center"
              href=""
            >
              <span>See all</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-6 ">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="max-w-full lg:max-w-80 rounded-lg border border-gray-200 shadow-lg overflow-hidden"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-60 p-2 rounded-2xl object-cover"
              />
              <div className="px-4 py-2">
                <p className="text-gray-600 mb-2 flex gap-2 items-center">
                  <FaMapPin /> {tour.location}
                </p>
                <Link href="/ActivitiesComp/holidays"><h3 className="text-lg font-medium mb-2">{tour.title}</h3></Link> 
                <div className="flex items-center text-sm mb-2">
                  <span className="text-yellow-500"> {tour.rating}</span>
                  <span className="ml-2">({tour.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex px-4 py-2  justify-between border-t ">
                <p className="text-gray-800 mb-2  pt flex gap-2 items-center">
                  <FaClock /> {tour.duration}
                </p>
                <p className="text-gray-800 mb-4">From ${tour.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" mx-auto px-5 md:px-20 pb-10">
        <div className="flex justify-between items-end gap-10">
          <h2 className="text-xl lg:text-3xl md:text-2xl font-bold">
            Popular things to do
          </h2>

          <Link
            className="buttonArrow gap-4 font-semibold flex items-center"
            href=""
          >
            <span>See all</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative block overflow-hidden rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full overflow-hidden featureCard__image h-60 relative">
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg h-60 w-60 "
                />
              </div>
              <div className="p-4 absolute z-10 bottom-3 text-white text-center">
                <h4 className="text-lg">{feature.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
