"use client";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  ChakraProvider,
  Box,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md"; // Import the icon
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiFilter2Line } from "react-icons/ri";
import { FaFilter, FaRupeeSign, FaTimes } from "react-icons/fa";
import { TbRosetteDiscount } from "react-icons/tb";
import Link from "next/link";
import FamousPlacesFilter from "../../Component/Filter/FamousPlacesFilter";

const Lakshdeep = ({ selectedRange = [0, 300000], onApply }) => {
  // price range
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(selectedRange);

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
  };

  const handleMinPriceChange = (event) => {
    const min = parseInt(event.target.value, 10) || 0;
    setPriceRange([min, priceRange[1]]);
  };

  const handleMaxPriceChange = (event) => {
    const max = parseInt(event.target.value, 10) || 300000;
    setPriceRange([priceRange[0], max]);
  };

  const handleApply = () => {
    onApply(priceRange);
    setIsOpen(false);
  };

  const tourPackageData = [
    {
      id: 1,
      nights: 3,
      packageimg: "/images/lakshadweep..webp",
      packageName: "EXPLORE LAKSHADWEEP",
      packageInCity: "1N Cochin/ 2N Agatti",
      oldPrice: 2499,
      price: 22999,
      EMISTART: 4590,
      link: "/FamousPlaces/InnerLakshadweep",
    },
    {
      id: 2,
      nights: 5,
      packageimg: "/images/andaman..webp",
      packageName: "BEAUTY OF ANDAMAN",
      packageInCity: "1N Cochin /2N Kavaratti / 2N Bangaram/",
      oldPrice: 53999,
      price: 50199,
      EMISTART: 9213,
      link: "/FamousPlaces/Andaman",
    },
    {
      id: 3,
      nights: 4,
      packageimg: "/images/kashmir..webp",
      packageName: "Enchanting Beauty of Kashmir",
      packageInCity: "1N COCHIN/ 3N BANGARAM",
      oldPrice: 39799,
      price: 40555,
      EMISTART: 7390,
      link: "/FamousPlaces/Kashmir",
    },
    {
      id: 4,
      nights: 6,
      packageimg: "/images/jaipur.webp",
      packageName: "Royal Charm of Jaipur",
      packageInCity: "1N COCHIN/ 4N BANGARAM",
      oldPrice: 56999,
      price: 53999,
      EMISTART: 9757,
      link: "/FamousPlaces/Jaipur",
    },
    {
      id: 5,
      nights: 5,
      packageimg: "/images/banglore.webp",
      packageName: "Modern Marvels of Bengaluru",
      packageInCity: "1N Cochin/ 2 Kavaratti / 3N Agatti",
      oldPrice: 49999,
      price: 47299,
      EMISTART: 8640,
      link: "/FamousPlaces/Bengaluru",
    },
    {
      id: 6,
      nights: 6,
      packageimg: "/images/paris..webp",
      packageName: "Wonders of Singapore",
      packageInCity: "1N Cochin/ 4N Agatti",
      oldPrice: 38999,
      price: 35799,
      EMISTART: 6723,
      link: "/FamousPlaces/Singapore",
    },
    {
      id: 7,
      nights: 4,
      packageimg: "/images/leh-ladak.webp",
      packageName: "Majestic Wonders of Leh",
      packageInCity: "1N Cochin/ 4N Agatti",
      oldPrice: 38999,
      price: 49599,
      EMISTART: 9023,
      link: "/FamousPlaces/Leh",
    },
    {
      id: 8,
      nights: 5,
      packageimg: "/images/bali.webp",
      packageName: "Magic of Bali",
      packageInCity: "1N Cochin/ 3N Agatti / 3N Kavaratti",
      oldPrice: 50999,
      price: 47999,
      EMISTART: 8757,
      link: "/FamousPlaces/Bali",
    },
    {
      id: 9,
      nights: 4,
      packageimg: "/images/dubai.webp",
      packageName: "Splendor of Dubai ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Dubai",
    },
    {
      id: 10,
      nights: 4,
      packageimg: "/images/kerala.webp",
      packageName: "Enchanting Beauty of Kerala ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Kerala",
    },
    {
      id: 11,
      nights: 4,
      packageimg: "/images/bhutan..webp",
      packageName: "Enchanting Kingdom of Bhutan ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Bhutan",
    },
    {
      id: 12,
      nights: 4,
      packageimg: "/images/gujarat..webp",
      packageName: "Wonders of Gujarat ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Gujarat",
    },
    {
      id: 13,
      nights: 4,
      packageimg: "/images/goa1.webp",
      packageName: "Vibrant Charm of Goa ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Goa",
    },
    {
      id: 14,
      nights: 4,
      packageimg: "/images/hp.webp",
      packageName: "Discover Himachal Pradesh ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/HimachalPradesh",
    },
    {
      id: 15,
      nights: 4,
      packageimg: "/images/maharastra..webp",
      packageName: "Wonders of Maharashtra ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Maharashtra",
    },
    {
      id: 16,
      nights: 4,
      packageimg: "/images/Mussoorie..webp",
      packageName: "Explore the Charms of Mussoorie",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Mussoorie",
    },
    {
      id: 17,
      nights: 4,
      packageimg: "/images/nepal..webp",
      packageName: "Majestic Wonders of Nepal ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Nepal",
    },
    {
      id: 18,
      nights: 4,
      packageimg: "/images/Rajasthan..webp",
      packageName: "Royal Splendor of Rajasthan ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Rajasthan",
    },
    {
      id: 19,
      nights: 4,
      packageimg: "/images/sikkim..webp",
      packageName: "Enchanting Beauty of Sikkim ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Sikkim",
    },
    {
      id: 20,
      nights: 4,
      packageimg: "/images/Sri Lanka..webp",
      packageName: "Enchanting Beauty of Sri Lanka",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/SriLanka",
    },
    {
      id: 21,
      nights: 4,
      packageimg: "/images/Switzerland..webp",
      packageName: "Enchanting Beauty of Switzerland ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Switzerland",
    },
    {
      id: 22,
      nights: 4,
      packageimg: "/images/thailand.webp",
      packageName: " Destinations of Thailand ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Thailand",
    },
    {
      id: 23,
      nights: 4,
      packageimg: "/images/Uttarakhand..webp",
      packageName: "Enchanting Beauty of Uttarakhand ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Uttarakhand",
    },
    {
      id: 24,
      nights: 4,
      packageimg: "/images/veitnam..webp",
      packageName: "Wonders of Vietnam ",
      packageInCity: "1N COCHIN/ 2N BANGARAM",
      oldPrice: 34999,
      price: 31999,
      EMISTART: 6090,
      link: "/FamousPlaces/Vietnam",
    },
  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [moreFilter, setMoreFilter] = useState(false);
 

  return (
    <>
      {" "}
      <div className="relative pt-6 lg:pt-0">
        <div className="relative">
          <img
            src="/images/bannerlaksha.webp"
            alt="Kashmir Tour Packages"
            layout="fill"
            objectFit="cover"
            className="w-full h-[350px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 text-white bg-[#a6a4a433] bg-opacity-20"></div>
        </div>

        <div className="absolute top-32 md:top-28  left-0 right-0 text-center">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            Famous tourist places to visit
          </h1>
          <div className="flex justify-between mt-5 items-center border rounded-full  w-full md:w-[600px] bg-white mx-auto ">
            <div className="relative flex p-2 px-4 w-full items-center">
              <img
                src="/images/search.svg"
                alt="Search Icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                id="txtDesCity"
                className="ml-2 flex-grow border-none p-2 w-full rounded-lg placeholder-gray-500 focus:outline-none"
                placeholder="Enter Your Dream Destination!"
              />
            </div>
            <button
              className="ml-2 primary-col text-white px-8 py-2 h-14  rounded-full hover:bg-[#ef6414ed]"
              type="button"
              // onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-5 md:px-10 lg:px-20 py-8">
        <div>
          <ul className="text-xs flex items-center flex-wrap gap-2">
            <li className="flex items-center gap-1 text-blue-900">
              Home <MdKeyboardArrowRight />
            </li>
            <li className="flex items-center gap-1 text-blue-900">
              Holidays <MdKeyboardArrowRight />
            </li>{" "}
            <li className="flex items-center gap-1 text-blue-900">
              Famous Places <MdKeyboardArrowRight />
            </li>
          </ul>
        </div>

        <div className="hidden md:block mt-5">
          <FamousPlacesFilter />
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-xl mt-5">Explore Iconic Landmarks with Next Gen: A Journey Through History and Beauty</h4>
          <p className="text-base text-justify">
          The Eiffel Tower is an iconic structure that offers breathtaking views of the city, especially when illuminated at night. Visitors can enjoy fine dining at its restaurants or take an elevator ride to marvel at the panoramic cityscape. Another remarkable site is the Great Wall, a vast ancient structure stretching for miles, providing stunning scenic views as you walk along its historic path. Machu Picchu, nestled high in the mountains, draws adventurers and history enthusiasts alike with its mysterious ruins and awe-inspiring views. The Colosseum, a grand amphitheater from ancient times, stands as a testament to architectural brilliance, allowing visitors to explore its ruins and imagine the gladiatorial battles once held there. The Taj Mahal, with its exquisite white marble and symmetrical design, is a symbol of love and beauty, admired for its craftsmanship. Similarly, the Statue of Liberty represents freedom and democracy, inviting visitors to explore its history and take in views of the surrounding skyline.
          </p>
        </div>

        <div className="tour-package-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 ">
          {tourPackageData.map((elm) => (
            <div
              key={elm.id}
              className="border border-gray-300 rounded-lg shadow-sm overflow-hidden relative bg-white"
            >
              <div className="relative">
                <img
                  src={elm.packageimg}
                  alt="Tour Package"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 px-2 py-1 text-white rounded-full text-xs">
                  {elm.nights} Nights
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold uppercase mb-1">
                  {elm?.packageName}
                </h3>
                <span className="text-xs text-gray-600">
                  {elm.packageInCity}
                </span>
              </div>
              <div className="flex flex-wrap justify-around items-center py-2 border-t border-gray-200">
                <div className="flex flex-col items-center text-center space-y-1">
                  <img
                    src="/images/hotelpng.webp"
                    alt="Hotel"
                    className="w-6 h-6 mb-1"
                  />
                  <h5 className="text-xs font-medium">Hotel</h5>
                </div>
                <div className="flex flex-col items-center text-center space-y-1">
                  <img
                    src="/images/sightseeing.webp"
                    alt="Sightseeing"
                    className="w-6 h-6 mb-1"
                  />
                  <h5 className="text-xs font-medium">Sightseeing</h5>
                </div>
                <div className="flex flex-col items-center text-center space-y-1">
                  <img
                    src="/images/vehicle.webp"
                    alt="Transfer"
                    className="w-6 h-6 mb-1"
                  />
                  <h5 className="text-xs font-medium">Transfer</h5>
                </div>
                <div className="flex flex-col items-center text-center space-y-1">
                  <img
                    src="/images/meal.webp"
                    alt="Meal"
                    className="w-6 h-6 mb-1"
                  />
                  <h5 className="text-xs font-medium">Meal</h5>
                </div>
              </div>
              <div className="flex flex-col  justify-between items-start px-3 py-2 border-t border-gray-200">
                <span className="text-xs">Starting From</span>
                <div className="flex  w-full justify-between items-center">
                  <div className="flex items-center gap-2">
                    <h4 className="flex items-center text-xs line-through text-gray-600 mt-1 order-4">
                      <FaRupeeSign className="text-xs" />
                      <span className="ml-1">{elm.oldPrice}</span>
                    </h4>
                    <h4 className="flex items-center text-sm font-bold text-[#F96B2D] mt-1">
                      <FaRupeeSign className="text-sm" />
                      <span className="ml-1">{elm.price}</span>
                    </h4>
                  </div>
                  <Link
                    href={elm.link}
                    className="bg-[#F96B2D] py-2 text-white font-semibold px-3  rounded-full text-xs transition-transform transform hover:scale-105"
                  >
                    View Package
                  </Link>
                </div>
                <span className="text-xs text-gray-600 mt-1">
                  Per Person on twin sharing
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 ">
          <h4 className="font-bold text-xl mt-5">
          Unforgettable Adventures with Next Gen: From the Eiffel Tower to the Northern Lights
          </h4>
          <div className="flex flex-col gap-5 text-base text-justify">
            
          <p>
            Next Gen invites travelers to discover the world's most iconic destinations, starting with the Eiffel Tower, a symbol of Parisian charm and elegance. Standing tall in the heart of the city, this architectural wonder offers unparalleled views of the skyline. With Next Gen, visitors can enjoy exclusive access to dining experiences within the tower or book guided tours that explore its rich history. As night falls, the illuminated tower creates a magical ambiance, making it a must-see for anyone visiting Paris. Whether you're capturing panoramic photos from the top or simply admiring its beauty from the ground, the Eiffel Tower is an unforgettable experience with Next Gen.
            </p>
            <p>
            The ancient Pyramids stand as monumental structures that continue to fascinate with their historical significance and sheer grandeur. In contrast, the island of Santorini offers scenic relaxation with its whitewashed buildings, crystal-clear waters, and unforgettable sunsets. The Grand Canyon, a natural wonder carved by the Colorado River, is a favorite destination for hikers and nature lovers, with its deep gorges and breathtaking landscapes. Finally, witnessing the Northern Lights is a magical experience, as the vibrant natural light display fills the sky, leaving visitors in awe of nature's beauty
            </p>

            <p>
            For those seeking adventure and a touch of history, Next Gen offers tailored excursions to the Great Wall, a marvel of ancient engineering. Stretching across rugged landscapes, the wall provides a breathtaking view of China's countryside. Walking along its winding path allows travelers to immerse themselves in centuries-old history, surrounded by the scenic beauty of mountains and valleys. Next Gen ensures that visitors get the most out of this experience with well-planned itineraries that include the best viewpoints and historical insights, making the journey both educational and awe-inspiring.
            </p>
            <p>
            A visit to Machu Picchu is an extraordinary journey, and Next Gen makes it seamless for explorers. Set high in the Andes Mountains, Machu Picchu’s ancient ruins tell stories of the Inca Empire. The intricate stonework, terraced landscapes, and surrounding natural beauty combine to create a mystical experience. With Next Gen’s expertly guided tours, travelers can delve deep into the history and culture of this UNESCO World Heritage Site, all while enjoying breathtaking views of the mountains. It’s a dream destination for those with a passion for adventure and history.
            </p>
            <p>
            Lastly, Next Gen’s journeys to the Northern Lights offer a front-row seat to one of nature’s most dazzling displays. This breathtaking light show, seen from countries like Norway, Iceland, and Canada, captivates travelers with its vibrant colors that dance across the sky. Next Gen arranges the perfect conditions for witnessing this spectacle, including travel to remote areas with the clearest skies. Whether you’re a seasoned traveler or a first-time visitor, Next Gen ensures that your Northern Lights experience is unforgettable, leaving you with lasting memories of nature’s beauty.
            </p>
          </div>
        </div>
      </div>
      <div className="block  md:hidden">
        <div
          className="icon-container fixed bottom-5 right-4 z-[9999] grid"
          onClick={togglePopup}
        >
          <FaFilter className="bg-[#52c3f1] text-white p-1 text-3xl rounded cursor-pointer" />
        </div>

        {isPopupOpen && (
          <div className="popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50  z-[10000]">
            <div className="popup-content  shadow-lg">
              <button
                onClick={togglePopup}
                className="px-4 py-2 bg-blue-500 flex justify-between items-center w-full text-white "
              >
                Filter <FaTimes />
              </button>

              <FamousPlacesFilter />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Lakshdeep;
