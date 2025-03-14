"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { MdOutlineBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { IoIosExpand } from "react-icons/io";

import { RiDiscountPercentFill } from "react-icons/ri";

const CustomDropdown = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block mx-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="my-[10px] bg-white border border-gray-300 rounded-[2rem]  px-4 py-2 text-left flex justify-between items-center"
      >
        <span className="font-semibold text-nowrap flex items-center gap-2">
          <RiDiscountPercentFill className="" /> {selectedOption}
        </span>
        <svg
          className={`w-5 h-5 transform transition-transform ml-3 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute p-2 z-20 w-full bg-white border-none rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-gray-100 font-semibold border-none cursor-pointer "
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard");
  });
};

const stopRedirection = (event) => {
  event.stopPropagation();
};

const cardData = [
  {
    id: 0,
    img: "/images/02-E_sTtfo3..webp",
    heading: "New Offers",
    head: "Register and Get Discount on First Bookings with Next Gen",
    add: "San Diego City, CA, USA",
    bed: 2,
    bath: 2,
    space: 1000,
    price: "30th Sept, 2024",
    code: "ATICODE",
    cate: "For Rent",
    flag: "Trending",
  },
  {
    id: 1,
    img: "/images/01-kkM7mXf9..webp",
    head: "Register and Get Discount on First Bookings with Next Gen",
    add: "New York, NY, USA",
    bed: 3,
    heading: "Grab Offers",
    bath: 2,
    space: 1200,
    price: "30th Sept, 2024",
    code: "ATICODE",
    cate: "For Sale",
    flag: "Trending",
  },
  {
    id: 2,
    img: "/images/03-B8eH2v8V..webp",
    head: "Register and Get Discount on First Bookings with Next Gen",
    add: "Austin, TX, USA",
    bed: 1,
    heading: "New Offers",
    bath: 1,
    space: 800,
    price: "30th Sept, 2024",
    code: "ATICODE",
    cate: "For Rent",
    flag: "Trending",
  },
  {
    id: 3,
    img: "/images/04-SDLCq6RC..webp",
    head: "Register and Get Discount on First Bookings with Next Gen",
    add: "Miami, FL, USA",
    bed: 5,
    heading: "New Offers",
    bath: 4,
    space: 2500,
    price: "30th Sept, 2024",
    cate: "For Sale",
    code: "ATICODE",
    flag: "Trending",
  },
  {
    id: 4,
    img: "/images/01-kkM7mXf9..webp",
    head: "Register and Get Discount on First Bookings with Next Gen",
    add: "Malibu, CA, USA",
    bed: 3,
    heading: "New Offers",
    bath: 2,
    space: 1500,
    price: "30th Sept, 2024",
    cate: "For Rent",
    code: "ATICODE",
    flag: "Trending",
  },
  {
    id: 5,
    img: "/images/02-E_sTtfo3..webp",
    head: "Register and Get Discount on First Bookings with Next Gen",
    add: "Chicago, IL, USA",
    bed: 2,
    heading: "New Offers",
    bath: 1,
    space: 1100,
    price: "30th Sept, 2024",
    cate: "For Sale",
    code: "ATICODE",
    flag: "Trending",
  },
  {
    id: 2,
    img: "/images/03-B8eH2v8V..webp",
    head: "Register and Get Discount on First Bookings with Next Gen",
    add: "Austin, TX, USA",
    bed: 1,
    heading: "New Offers",
    bath: 1,
    space: 800,
    price: "30th Sept, 2024",
    cate: "For Rent",
    code: "ATICODE",
    flag: "Trending",
  },
  {
    id: 3,
    img: "/images/04-SDLCq6RC..webp",
    head: "Register and Get Discount on First Bookings with Next Gen",
    add: "Miami, FL, USA",
    bed: 5,
    heading: "New Offers",
    bath: 4,
    space: 2500,
    price: "30th Sept, 2024",
    cate: "For Sale",
    code: "ATICODE",
    flag: "Trending",
  },
];

const Cards = ({
  img,
  head,
  heading,
  code,
  add,
  bed,
  bath,
  space,
  price,
  cate,
  flag,
}) => {
  return (
    <>
      <div className="relative sm:max-w-[360px] lg:max-w-[400px] overflow-hidden cursor-pointer  bg-white rounded-lg shadow-lg m-2">
        <div className="img-box overflow-hidden relative">
          <Image
            className="w-full h-[220px] transition-transform object-cover duration-500 ease-in-out transform hover:scale-110"
            src={`${img}`}
            width={200}
            height={200}
          />
          {cate && (
            <div className="flex absolute  bottom-0 left-0 z-10    bg-opacity-80 items-center justify-between rounded-br-lg">
              <span className="text-white text-md px-4 py-1 after:content after:absolute  after:border-l-[25px] after:border-l-[transparent]   bg-[#1d5f6fcc] font-bold relative z-20">
                {cate}
              </span>

              <span className="text-white text-md px-4 py-1 after:content after:absolute  after    bg-[#e23e1dcc] font-bold relative ">
                ₹ {price}
              </span>
            </div>
          )}

          {flag && (
            <div className="flex absolute px-4 rounded-md py-2 top-1 right-1   bg-[#36c6d3] items-center justify-between">
              <span className="text-white text-md font-bold relative  text-[12px]">
                {flag}
              </span>
            </div>
          )}
        </div>

        <div className="my-2 px-4 py-1">
          <h1 className="text-md font-semibold">{heading}</h1>
          <p className="text-sm py-2 text-[#181a20] font-medium transition-all duration-500 ease-in-out hover:underline">
            {head}
          </p>

          <p className="text-[#717171] text-md mb-[10px]">{add}</p>
          <div className="flex border-[#ddd] justify-between">
            <div className="flex items-center text-[13px] mr-[5px] lg:mr-[8px]">
              <MdOutlineBed className="text-xl mr-[6px]" />
              <span className="text-[#717171] text-nowrap">{bed} Bedrooms</span>
            </div>
            <div className="flex items-center text-[13px] mr-[5px] lg:mr-[8px]">
              <TbBath className="text-xl mr-[6px]" />
              <span className="text-[#717171] text-nowrap ">
                {bath} Bathrooms
              </span>
            </div>
            <div className="flex items-center text-[13px] mr-[5px] lg:mr-[8px]">
              <IoIosExpand className="text-xl mr-[6px]" />
              <span className="text-[#717171] text-sm text-nowrap">
                {space} sqft
              </span>
            </div>
          </div>
          <hr className="mt-2 bg-[#ddd]" />

          <div className="flex justify-between mt-3 items-center">
            <div
              className="border border-dashed border-gray-400 rounded-md flex items-center relative h-8 bg-white cursor-pointer"
              onClick={stopRedirection}
            >
              {/* <span className="absolute text-[9px] uppercase font-semibold -top-2 text-white bg-[#2196f3] px-2 rounded-full">
                Promocode
              </span> */}
              <span
                className="font-bold border-r  border-dashed border-gray-400 p-1 px-2 text-sm "
                id={code}
              >
                {code}
              </span>
              <span className="p-2" onClick={() => copyToClipboard(code)}>
                <img src="/images/copy-icon.svg" alt="Copy Code" />
              </span>
            </div>

            <p className="text-[#717171] font-semibold text-[13px]">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Page() {
  const [selectedRange, setSelectedRange] = useState([0, 300000]);
  const [selectedType, setSelectedType] = useState("Special Offers");
  const [selectedBathrooms, setSelectedBathrooms] = useState("All Bathrooms");
  const [selectedBedrooms, setSelectedBedrooms] = useState("All Bedrooms");
  const [selectedSort, setSelectedSort] = useState("Sort by");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState({
    category: "All",
    type: "All",
    priceRange: [0, 300000],
  });

  const handleTypeChange = (option) => {

    setSelectedType(option);
  };

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${apiLink}/property?page=${currentPage}&perPage=6`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            params: {
              priceRange: selectedRange,
              type: selectedType === "All" ? undefined : selectedType,
              bedrooms:
                selectedBedrooms === "All Bedrooms"
                  ? undefined
                  : selectedBedrooms.replace("+", ""),
              bathrooms:
                selectedBathrooms === "All Bathrooms"
                  ? undefined
                  : selectedBathrooms.replace("+", ""),
              sort: selectedSort === "Sort by" ? undefined : selectedSort,
            },
          }
        );
        setFetchedData(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, [
    selectedRange,
    selectedType,
    selectedBathrooms,
    selectedBedrooms,
    selectedSort,
    currentPage,
  ]);

  useEffect(() => {
    let data = fetchedData;

    if (filter.category !== "All") {
      data = data.filter((item) => item.cate === filter.category);
    }

    if (filter.type !== "All") {
      data = data.filter((item) => item.type === filter.type);
    }

    data = data.filter(
      (item) =>
        item.price >= filter.priceRange[0] && item.price <= filter.priceRange[1]
    );

    setFilteredData(data);
  }, [filter, fetchedData]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full h-auto relative">
          <Image
            width={100}
            height={100}
            className="w-full h-[300px] object-cover relative after:content-[] after:absolute after:w-full after:h-[300px] after:bg-black "
            src="/images/banner.webp"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <h2 className="text-white text-4xl text-center my-2 font-[500] ">
              Explore Popular Destinations
            </h2>
            <p className="text-white text-xl text-center font-normal ">
              Join Our Community
            </p>
          </div>
        </div>

        <div className="w-full px-5 lg:px-20 py-8 bg-[#f7f7f7]">
          <div className="flex justify-between flex-col lg:flex-row gap-5 mb-5 ">
            <div>
              <CustomDropdown
                options={[
                  " Bank Offers",
                  " Flight Offers",
                  " Hotel Offers",
                  " Bus Offers",
                  " Cab Offers",
                  " Holidays Offers",
                ]}
                selectedOption={selectedType}
                onOptionSelect={handleTypeChange}
                label="Type"
              />
            </div>

            <div className="flex items-center gap-3">
              <h1 className="text-lg font-bold text-nowrap text-gray-800">
                Amazing Travel Offers and Deals
              </h1>
              <input
                type="text"
                className=" border border-gray-300 rounded-lg p-2 w-full max-w-md"
                id="searchInput"
                placeholder="Search offers..."
                autofocus
              />
            </div>
          </div>

          <div className="flex justify-center ">
            {isLoading ? (
              <div className="custom-spinner"></div>
            ) : (
              <>
                <div className="cards-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 mt-4 lg:mt-4 relative">
                  {cardData.map((property) => (
                    <Cards
                      key={property.id}
                      img={property.img}
                      heading={property.heading}
                      head={property.head}
                      add={property.address}
                      bed={property.bedrooms}
                      bath={property.bathrooms}
                      code={property.code}
                      space={property.rate_per_square_feet}
                      price={property.price}
                      cate={property.type}
                      flag={property.type ? "Featured" : ""}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex justify-center my-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`mx-2 px-4 py-2 border rounded-md ${
                currentPage === 1 ? "bg-gray-100" : "bg-white hover:bg-gray-100"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-2 px-4 py-2 border rounded-md ${
                  index + 1 === currentPage
                    ? "bg-[#2f80ed] text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`mx-2 px-4 py-2 border rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-100"
                  : "bg-white hover:bg-gray-100"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

          <p className="w-3/4 mx-auto text-center">
            At Next Gen, we believe that every journey should be an
            unforgettable experience. Whether you're planning a quick weekend
            getaway, a family vacation, or a once-in-a-lifetime adventure,
            Next Gen is here to make your travel dreams come true. We offer a
            wide range of services to ensure your trip is seamless, enjoyable,
            and tailored to your preferences.
          </p>
        </div>
      </div>
    </>
  );
}
