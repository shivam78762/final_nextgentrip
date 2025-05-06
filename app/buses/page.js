"use client";
import React, { useState } from "react";
import Header from "../Component/AllComponent/Header";
import CustomSlider from "../Component/AllComponent/Slider";
import FAQSection from "../Component/AllComponent/FAQ";
import Link from "next/link";
import MobileHeader from "../Component/AllComponent/MobileHeader";
import BusComp from "../Component/AllComponent/formMaincomp/BusComp";

const Page = () => {
  const busFeatures = [
    {
      imageSrc:
        "/images/ticket-charges.svg",
      title: "Lowest Ticket Charges",
      description:
        "Grab huge discounts and cashbacks on your bus booking with Next Gen .",
    },
    {
      imageSrc: "/images/operators.svg",
      title: "3999+ Bus Operators",
      description:
        "Leverage our partnerships with over 3999 bus operators for a hassle-free journey.",
    },
    {
      imageSrc: "/images/Seamless.svg",
      title: "Seamless Booking",
      description:
        "Our user-friendly platform makes it easy for customers to book their bus tickets.",
    },
    {
      imageSrc: "/images/Users.svg",
      title: "Trusted by 20K+ Users",
      description:
        "20K+ users have trusted and enjoyed our seamless bus booking service.",
    },
  ];

  return (
    <>
      <BusComp />
      <MobileHeader />
      <CustomSlider />

      



      <div className="flex flex-col mt-32 " >
     
        <div className="block md:flex items-center justify-between gap-4 px-5 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-black">
              Why Choose Next Gen  for Bus Ticket Booking?
            </h2>
            <p className="text-lg mt-4 text-justify">
              Next Gen  is a wonderful platform for all bus travelers. Whether
              you are planning to travel to Manali or Jaipur, you can discover
              your favorite place through luxury and budgeted buses including
              sleeper, AC/NON-AC, Volvo, semi-sleeper, and room.
              <br />
              Our easy-to-use platform provides a hassle-free booking
              experience, and you too can opt for bus booking online at
              Next Gen  and ditch long queues for bus tickets. Booking bus
              tickets online has never been this easy, but with Next Gen 's
              simple user interface, you can book bus tickets within a few
              clicks. Choose from 3999+ bus operators and book bus tickets
              online from the comfort of your home. Download the Next Gen  app
              to book flight tickets, train tickets, and bus tickets at the
              lowest prices seamlessly.
            </p>
          </div>

          <div className="block md:flex gap-5">
            <div className="">
              <img
                src="/images/bus-img1.webp"
                alt="Bus img 1"
                className="w-full lg:w-80 h-[500px] object-cover mt-4 lg:mt-0 rounded-lg"
              />
            </div>
            <div className="">
              <img
                src="/images/bus-img2.webp"
                alt="Bus img 2"
                className="w-full lg:w-80 h-[500px] object-cover mt-2 lg:mt-0 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mt-8 px-5 lg:px-20" >
          <h2 className="text-3xl font-bold ">
            Book Your Bus Ticket with Us
          </h2>
          <div className="mt-4">
            <p className="text-lg text-justify">
              Who doesn’t love exploring places by road? The captivating
              landscapes that are seen on both sides of the bus are the sites to
              behold. Travelers who love to explore places by road can choose
              online bus booking at Next Gen  and also save huge money. Why
              would you go out and look for a travel agency to book a tour bus
              when you can do it by yourself? It takes less than a minute to
              book a bus ticket at Next Gen . The simple interface, easy
              navigation, and fast speed of the portal allow you to book a bus
              to your favorite destination within a few seconds.
            </p>
            <br />
            <p className="text-lg text-justify">
              Whether you want to travel via AC/Non-AC bus, semi-sleeper bus,
              smart bus, deluxe bus, luxury bus, budgeted bus, or Volvo bus
              booking Next Gen  has got everything covered for you. Enjoy a
              hassle-free booking experience at Next Gen  and discover your
              favorite place. There are around 3999+ bus operators for online
              bus ticket booking at this portal, choose the best one that suits
              your bus ticket booking demand and enjoy your bus journey like
              never before!
            </p>
          </div>
      

        {/* Section 3 */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-5">
            Why book with us?
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 mt-6">
            {busFeatures.map((feature, index) => (
              <div
                key={index}
                className=""
              >
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                 className="mx-auto "
                />
                <div className="text-center mt-5">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      <div className="pb-3">
        <FAQSection />
      </div>
    </>
  );
};

export default Page;
