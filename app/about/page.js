"use client";
import Image from "next/image";
import {
  FaCheckCircle,
  FaHandshake,
  FaLocationArrow,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import FAQSection from "../Component/AllComponent/FAQ";
import { useTranslations } from "next-intl";
export default function page() {
  const t=useTranslations("about2")
  const [activeTab, setActiveTab] = useState("mission");
  return (
    <>
      <main className="bg-gray-50 mt-5 md:mt-0 min-h-screen">
        <section className="relative about-bg w-full bg-no-repeat bg-cover text-white py-20">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

          <div className="relative z-10  mx-auto px-0 md:px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
            <p className="text-lg text-white mb-8">
              {t("about1")}
            </p>
            <Link
              href="/about"
              className="bg-white text-gray-600 py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-gray-100"
            >
              Learn 
            </Link>
          </div>
        </section>

        <section className="py-5 md:py-12  " id="about">
          <div className=" mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-12 text-justify px-0 md:px-20">
              {t("about2")}
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white p-6 border border-blue-200 rounded-lg shadow-lg max-w-xs">
                <FaHandshake className="mx-auto text-5xl mb-4" />
                <p className="text-sm text-gray-700 text-justify">
                {t("about3")}
                </p>
              </div>
              <div className="bg-white p-6 border border-blue-200 rounded-lg shadow-lg max-w-xs">
                <FaUsers className="mx-auto text-5xl mb-4" />
                <p className="text-sm text-gray-700 text-justify">
                {t("about4")}
                </p>
              </div>
              <div className=" text-sm bg-white border border-blue-200 p-6 rounded-lg shadow-lg max-w-xs">
                <FaShieldAlt className="mx-auto text-5xl mb-4" />
                <p className="text-sm text-gray-700 text-justify">
                {t("about5")}
                </p>
              </div>
              <div className=" text-sm bg-white border border-blue-200 p-6 rounded-lg shadow-lg max-w-xs">
                <FaLocationArrow className="mx-auto text-5xl mb-4" />
                <p className="text-sm text-gray-700 text-justify">
                {t("about6")}
                </p>
              </div>
            </div>

            <div className=" mx-auto  p-2 md:p-10  my-10 relative">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Tab Navigation */}
              <div className="flex gap-3 relative justify-center mb-2 md:mb-8">
                <button
                  className={`text-lg md:text-xl font-bold px-6 py-3 rounded-t-lg focus:outline-none transition-all duration-300 ${
                    activeTab === "vision"
                      ? "bg-white text-gray-800 shadow-lg"
                      : "bg-transparent text-white"
                  }`}
                  onClick={() => setActiveTab("vision")}
                >
                  Vision
                </button>
                <button
                  className={`text-lg md:text-xl font-bold px-6 py-3 rounded-t-lg focus:outline-none transition-all duration-300 ${
                    activeTab === "mission"
                      ? "bg-white text-gray-800 shadow-lg"
                      : "bg-transparent text-white"
                  }`}
                  onClick={() => setActiveTab("mission")}
                >
                  Mission
                </button>
              </div>

              <div className="bg-white bg-opacity-90 text-gray-800 rounded-xl shadow-lg p-8 md:p-12 transform transition duration-500 hover:scale-[1.01]">
                {activeTab === "vision" && (
                  <div className="block md:flex md:items-center gap-10">
                    <div>
                      <h1 className="text-lg flex justify-center gap-3 items-center md:text-4xl font-bold text-center mb-4 tracking-wide">
                        Our Vision <FaCheckCircle className="text-green-500" />
                      </h1>

                      <p className="text-gray-700 text-lg text-center mb-8">
                        "To be the trusted travel companion that empowers every
                        traveler, fostering global connections while ensuring
                        peace of mind and a sense of responsibility in every
                        journey."
                      </p>
                      <h2 className="text-3xl font-bold text-center mb-6">
                        दृष्टिकोण
                      </h2>
                      <p className="text-gray-700 text-lg text-center">
                        "हर यात्री का भरोसेमंद साथी बनना, जो हर यात्रा को सशक्त
                        बनाते हुए वैश्विक जुड़ाव और जिम्मेदारी सुनिश्चित करे।"
                      </p>
                    </div>
                    <img
                      src="/images/vision1.webp"
                      alt="Vision"
                      className="mx-auto w-full h-60"
                    />
                  </div>
                )}
                {activeTab === "mission" && (
                  <div className="block md:flex md:items-center gap-10">
                    <img
                      src="/images/mission1.webp"
                      alt="Vision"
                      className="mx-auto w-full h-60"
                    />
                    <div>
                      <h1 className="text-lg flex justify-center gap-3 items-center md:text-4xl font-bold text-center mb-4 tracking-wide">
                        Our Mission <FaCheckCircle className="text-green-500" />
                      </h1>

                      <p className="text-gray-700 text-lg text-center mb-8">
                        "To take care of every traveler's journey with the
                        utmost responsibility and integrity. Nextgentrip.com is
                        committed to providing reliable, personalized travel
                        solutions that prioritize safety, trust, and meaningful
                        experiences, ensuring that every trip feels secure and
                        well-managed."
                      </p>
                      <h2 className="text-3xl font-bold text-center mb-6">
                        उद्देश्य
                      </h2>
                      <p className="text-gray-700 text-lg text-center">
                        "हर यात्री की यात्रा का पूरी ज़िम्मेदारी और ईमानदारी के
                        साथ ख्याल रखना। Nextgentrip.com का संकल्प है कि वह
                        सुरक्षित, विश्वसनीय और व्यक्तिगत यात्रा समाधान प्रदान
                        करे, जिससे हर यात्रा सुरक्षित और सुगम महसूस हो।"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          

            <p className="text-lg text-gray-600 my-0 md:my-12 px-0 md:px-20">
            {t("about7")}
            </p>
          </div>
        </section>
      </main>

      <FAQSection />
    </>
  );
}
