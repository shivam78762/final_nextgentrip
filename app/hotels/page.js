"use client";
import React, { useEffect, useState } from "react";
import CustomSlider from "../Component/AllComponent/Slider";
import FAQSection from "../Component/AllComponent/FAQ";
import Link from "next/link";
import HotelChains from "../Component/AllComponent/HotelChain";
import HotelComp from "../Component/AllComponent/formMaincomp/HotelsComp";
import Hotelmobileheader from "../Component/AllComponent/Hotelmobilheader";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAllRegHotels } from "../Component/Store/slices/getReqHotels";
import { imgurl } from "../Component/common";
import TypeWriterHeaderEffect from "../Component/AllComponent/TypeWriterHeaderEffect";
import HotelsComp from "../Component/AllComponent/formMaincomp/HotelsComp";
import HotelSliderCompo from "./HotelSliderCompo"
const page = () => {
  const [showAll, setShowAll] = useState(false);
  const dispatch=useDispatch();
  const allReghotels=useSelector(state=>state.getRegHotelsSlice)

   
 useEffect(()=>{
dispatch(getAllRegHotels())
 },[ ])


  const destinations = [
    {
      city: "Delhi",
      hotelName:"Green Tree Hotel Munnar",
      Address:"GreenTrees Resort,Chithirapuram P O Dobipalam, Munnar-685 565",
      url: "/listofhotels", 
      imgSrc:[ "/greenhotel/imgpsh_fullsize_anim.jfif","/greenhotel/imgpsh_fullsize_anim.jfif","/greenhotel/imgpsh_fullsize_anim.jfif"],
      alt: "Delhi",
      rating:4,
      price:15000
    },
   
   
  
  ];

  // Function to handle button click
  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  // Determine which destinations to show
  const displayedDestinations = showAll
    ? destinations
    : destinations.slice(0, 6);

  return (
    <>
    

    <HotelsComp/>
    {/* <HotelComp /> */}
    <div className='hidden md:block'>
<CustomSlider/>

</div>
      <div className="px-0 lg:px-20">
        <h2 className="text-lg text-center lg:text-2xl font-semibold mb-5">
          Book Hotels at Popular Destinations
        </h2>






        <div className="_polrdestnbx mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
  {allReghotels && allReghotels.info.map((dest, index) => (
    <Link
      key={index}
      href={`/hotels/book/${dest.user.slug}`}
      className="card-container  border border-[#5c6fff] hover:border-[#ffd94f] shadow-lg rounded-lg overflow-hidden transform  transition-transform duration-300 ease-in-out"
    >
      <div className="flex gap-4 p-4">
        <div className="w-2/3 relative">
          <img
            src={`${imgurl}/storage/${dest?.hotel?.hotel_img[0]}`}
            alt={dest?.hotel?.hotel_img[0]}
            className="rounded-md w-full h-52 object-cover"
          />
          <div className="absolute top-2 right-2 bg-white opacity-80 px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
            {dest?.hotel?.rating} <FaStar className="inline text-yellow-500" />
          </div>
          <div className="flex gap-2 mt-2">
            {dest?.hotel?.hotel_img?.slice(0, 3).map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={`${imgurl}/storage/${image}`}
                alt={`Hotel Image ${imgIndex}`}
                className="rounded-md w-14 h-14 object-cover border-2 border-white shadow-sm"
              />
            ))}
          </div>
        </div>

        <div className="w-1/3 flex flex-col justify-between">
          <h5 className="text-lg font-semibold mb-1 text-gray-800 truncate">{dest?.hotel?.property_name}</h5>
          <p className="text-sm text-gray-600 truncate">
            <div dangerouslySetInnerHTML={{__html:dest?.hotel?.address}} >

            </div>
            </p>
          <div className="flex gap-1 text-yellow-500">
            {Array.from({ length: dest?.hotel?.rating }).map((_, starIndex) => (
              <FaStar key={starIndex} className="text-lg" />
            ))}
          </div>

          <div className="flex flex-col items-end mt-4">
            <div className="text-lg font-semibold text-black">
              ₹{dest?.hotel?.price}
              <span className="text-sm text-gray-500"> / night</span>
            </div>
            <div className="text-sm text-gray-500 line-through">
              ₹{(Number(dest?.hotel?.price) + (Number(dest?.hotel?.price) * 6) / 100)}
            </div>
            <button className="mt-3 bg-[#5c6fff] text-white py-2 px-6 rounded-lg hover:bg-[#4a5ccd] transition duration-200">
            View
            </button>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>








        <div className="mt-4 text-center">
          <button
            onClick={handleViewAll}
            className="bg-[#2196F3] text-white py-2 px-4 rounded-full"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>






        {/* <div className="mt-10 mb-5">
          <HotelChains />
        </div> */}
      </div>
      <div className=" px-4 md:px-32 my-20">
<HotelSliderCompo />
</div>




      {/* <section className="px-0 lg:px-20">
        <div className="container mx-auto px-4 py-8 block lg:flex  items-center">
          
          <div className="hidden lg:block flex-shrink-0 w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <div className="relative mx-auto lg:mx-0" style={{margin:"0 auto"}}>
              <span className="spanone"></span>
              <img
                src="/images/images.webp"
                alt="Hotel App"
                className="w-2/3 relative z-10"
              />
            </div>
          </div>

         
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <div className="text-center">
              <span className="text-xl font-bold">
                Highest-rated mobile app
              </span>
            </div>
            <div className="flex gap-10 justify-center  items-center mt-4">
              <div>
                {" "}
                <div className="text-4xl font-bold text-gray-800">4.6</div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  ))}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-star-half"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
                  </svg>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="text-gray-600"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                  <span className="ml-2">4,83,459</span>
                </div>
              </div>
              <div className="mt-4  justify-between">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex   mb-2 items-center">
                    <span className="text-sm font-semibold mr-2">{rating}</span>
                    <div
                      className={`h-4  ${
                        rating === 5
                          ? "w-32 bg-[#3ec12f]"
                          : rating === 4
                          ? "w-24 bg-[#80dd87]"
                          : rating === 3
                          ? "w-16 bg-[#e1d013]"
                          : rating === 2
                          ? "w-8 bg-[#d57522]"
                          : "w-4 bg-[#ff7373]"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="text-center  p-4 rounded-lg">
              <div className="text-lg font-bold mb-2">
                Download NextGen App
              </div>
              <div className="text-xs border p-3 border-dashed border-[#abc9ae] bg-[#e1ffe4] mb-2">
                Save Up to Rs.5000 OFF on your first hotel <br /> booking Use
                Code: ATI0000
              </div>
              <p className="text-md">For Hassle-Free Hotel Booking</p>
              <div className="mt-4 gap-5 flex justify-center">
                <div>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/google-play.webp"
                      alt="Google Play"
                      className="w-40 mb-3"
                    />
                  </Link>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                        src="/images/app-store.webp"
                      alt="App Store"
                      className="w-40"
                    />
                  </Link>
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/tripscan.webp"
                    alt="QR Code"
                    className="w-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="pb-3">
        <FAQSection />
      </div>
       </>
  );
};

export default page;
