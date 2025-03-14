"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="text-white py-20 h-80 w-full bg-image-contact hidden md:flex" >
       
       
      </section>
      <div className="mx-auto pt-10 px-5  lg:px-24 ">
          <p className="text-lg text-justify ">
            We are passionate about delivering exceptional value and creating
            memorable experiences.
          </p>
        
        </div>
      <div className="gap-5 m-0 md:mx-20 block lg:flex px-4 pt-8" id="contact">
        <div className="w-full md:w-1/2">
          <section className="mb-5 md:mb-12 bg-white border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {" "}
                <div className="flex items-center mb-5 space-x-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-blue-500 text-xl"
                  />
                  <Link href="tel:9877579319" className="text-lg font-semibold text-gray-700">
                    +(91) 9877579319
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-blue-500 text-xl"
                  />
                  <p className="text-lg font-semibold text-gray-700">
                    Sector 48, Chandigarh, India
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-500 text-xl"
                  />
                  <p className="text-lg font-semibold text-gray-700">
                    tr@Nextgentrip.com
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-500 text-xl"
                  />
                  <p className="text-lg font-semibold text-gray-700">
                    NextGenindia@gmail.com
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-500 text-xl"
                  />
                  <p className="text-lg font-semibold text-gray-700">
                    info@Nextgentrip.com
                  </p>
                </div>
              </div>
              {/* Address */}
            </div>
          </section>

          {/* Contact Form Section */}

          {/* Office Hours Section */}
          <section className="mb-5 md:mb-12 bg-white border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              Office Hours
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-blue-500 text-xl"
                />
                <p className="text-lg font-semibold text-gray-700">
                  Monday – Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-blue-500 text-xl"
                />
                <p className="text-lg font-semibold text-gray-700">
                  Saturday: 10:00 AM - 4:00 PM
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-blue-500 text-xl"
                />
                <p className="text-lg font-semibold text-gray-700">
                  Sunday: Closed
                </p>
              </div>
            </div>
          </section>

          {/* Social Media Section */}
          <section className="mb-12 bg-white border border-blue-200 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              Social Media
            </h2>
            <div className="flex space-x-6">
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <FaFacebookF className="text-blue-600 text-xl" />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <FaTwitter className="text-blue-400 text-xl" />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <FaInstagram className="text-pink-500 text-xl" />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <FaLinkedinIn className="text-blue-700 text-xl" />
              </Link>
            </div>
          </section>
        </div>

        <section className="mb-5 md:mb-12 w-full md:w-1/2 bg-white border border-blue-200 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Contact Form</h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 w-full rounded-md hover:bg-blue-600 custom-color focus:outline-none focus:ring-0"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <div className="px-5 md:px-20 py-5 md:py-2 ">
        <p className="">
          Visit us at our office location. Use the map below to find directions.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13724.299329848289!2d76.74764530378113!3d30.688170543688894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec6cba69fe4d%3A0x58f2a458582a2f12!2sSector%2048%2C%20Chandigarh%2C%20160047!5e0!3m2!1sen!2sin!4v1722845805481!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] my-5"
        />
        <p>
          Thank you for considering NextGen for your travel needs. We
          look forward to helping you plan your next adventure!
        </p>
      </div>
    </>
  );
}
