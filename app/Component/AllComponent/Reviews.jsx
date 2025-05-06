"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


import { FaStar } from "react-icons/fa";
import Link from "next/link";




const Testimonial = () => {

  const reviewData = [
    {
      title: "Amazing Instructors!",
      rating: 5,
      content: "Trip Sit NextGenTrip transformed our digital presence with their innovative solutions. Their expertise in Next.js and Tailwind CSS made our website faster and more responsive than ever!",
      author: {
        name: "Rajesh Verma ",
        role: "CEO, Tech Innovations Pvt. Ltd.",
        imageUrl: "/images/Avatar_Review_Male.svg",
        image: "/images/googleicon.webp",
        profileLink: "#"
      }
    },
    {
      title: "Amazing Instructors!",
      rating: 5,
      content: "The professionalism and dedication of the Trip Sit NextGenTrip team are commendable. They delivered a sleek and user-friendly design that greatly improved our customer engagement.",
      author: {
        name: "Priya Sharma",
        role: "Digital Marketing Head",
        imageUrl: "/images/Avatar_Review_Male.svg",
        image: "/images/LinkedIn.svg",
        profileLink: "#"
      }
    },
    {
      title: "Amazing Instructors!",
      rating: 5,
      content: "Trip Sit NextGenTrip played a crucial role in our startup's success. Their innovative approach and technical skills helped us build a scalable and efficient platform.",
      author: {
        name: "Amit Khanna ",
        role: "Startup Founder",
        imageUrl: "/images/Avatar_Review_Male.svg",
        image: "/images/LinkedIn.svg",
        profileLink: "#"
      }
    },
    {
      title: "Amazing Instructors!",
      rating: 5,
      content: "Our online store needed a fresh look and better performance. Thanks to Trip Sit NextGenTrip, our website is now faster, more responsive, and visually appealing!",
      author: {
        name: "Neha Iyer",
        role: "E-commerce Entrepreneur",
        imageUrl: "/images/Avatar_Review_Male.svg",
        image: "/images/LinkedIn.svg",
        profileLink: "#"
      }
    },
    {
      title: "Amazing Instructors!",
      rating: 5,
      content: "We wanted a seamless and modern web experience, and Trip Sit NextGenTrip delivered exactly that. Their solutions helped us improve our website's speed and functionality.",
      author: {
        name: "Vikram Patil ",
        role: "IT Manager",
        imageUrl: "/images/Avatar_Review_Male.svg",
        image: "/images/LinkedIn.svg",
        profileLink: ""
      }
    },
    {
      title: "Amazing Instructors!",
      rating: 5,
      content: "The expertise and professionalism of Trip Sit NextGenTrip are truly impressive. Their ability to integrate modern web technologies helped us scale our platform effortlessly.",
      author: {
        name: "Rohan Mehta",
        role: "Product Manager, TechSphere",
        imageUrl: "/images/Avatar_Review_Male.svg",
        image: "/images/LinkedIn.svg",
        profileLink: "#"
      }
    }
  ];
  


  const reviews = [
    { id: 1, platform: "Google", rating: "4.8/5", reviewCount: 6933, logoSrc: "/images/Google2.svg" },
    { id: 2, platform: "Facebook", rating: "4.7/5", reviewCount: 1212, logoSrc: "/images/Facebook-d.svg" },
    { id: 3, platform: "Switchup", rating: "4.9/5", reviewCount: 209, logoSrc: "/images/Switch-43.svg" },
    { id: 4, platform: "Course Report", rating: "4.8/5", reviewCount: 403, logoSrc: "/images/Course3.webp" }
  ];

  return (
    <div className="overflow-hidden bg-gray-100 py-12 px-5 lg:px-28" id="reviews" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center">
        {/* <h2 className="text-sm font-semibold text-gray-600 uppercase">LEARNER REVIEWS FROM THE WORLD OVER</h2> */}
        <p className="text-3xl font-bold text-gray-900 mt-3">REVIEWS FROM THE WORLD OVER</p>
      </div>


      <div className="container mx-auto mt-8" data-aos="fade-up-right">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            1024: { slidesPerView: 3,spaceBetween:20 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {reviewData.map((review, index) => (
            <SwiperSlide key={index} className="testimonial-slider ">
              <div className="relative ">

                <h6 className="text-lg font-semibold text-gray-900 mb-2">{review.title}</h6>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-base text-justify text-gray-600 mt-3">{review.content}</p>
              </div>
              <div className="border-t mt-4 pt-4 flex items-center gap-3">
                <img src={review.author.imageUrl} alt="User" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{review.author.name}</div>
                  <div className="text-xs text-gray-500">{review.author.role}</div>
                </div>
                <Link href={review.author.profileLink} className="ml-auto">
                  <img src={review.author.image} alt="Social" className="w-6 h-6" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <div className="container mx-auto bg-white p-6 rounded-2xl  mt-8" data-aos="fade-up-left">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center">
              <img src={review.logoSrc} alt={review.platform} className="w-32" />
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500" />
                <span className="text-gray-600 ml-1">{review.rating}</span>
              </div>
              <p className="text-gray-500">{review.reviewCount} Reviews</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
