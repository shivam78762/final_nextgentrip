"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apilink, storageLink } from '../../../Component/common'
import { FaAngleRight, FaRegStar, FaRegCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoTerminalOutline } from "react-icons/io5";

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const PackageSlugCompo = ({ slug }) => {
  const [packageInfo, setPackageInfo] = useState()
  useEffect(() => {
    const fetchapi = async () => {
      const res = await axios.get(`${apilink}/holidays-package/${slug}`)

      setPackageInfo(res.data)

    }
    fetchapi()
  }, [])
  return (
    <>
      {packageInfo && <>
        <section>
          <div className="container mx-auto rows inner_banner bg-gray-100 relative">
            <div className='absolute top-0 left-0 h-full w-full bg-[#0000005c] z-10'></div>
            <img src={`${storageLink}/${packageInfo.banner_image}`} alt="" className='w-full h-[25rem] bg-cover' />
            <div className="container flex justify-center items-center  absolute top-0 left-0 h-full w-full  z-20 ">
              <div className="spe-title text-center py-8">
                <h2 className="text-4xl font-bold text-[#FF2E4A]">
                  {packageInfo.country.toUpperCase()} &amp;  {packageInfo.city.toUpperCase()} <span className="text-white"> {packageInfo.package_Type.toUpperCase()} PACKAGE</span>
                </h2>
                <div className="title-line flex justify-center items-center space-x-1 mt-4">
                  <div className="w-4 h-1 bg-gray-400"></div>
                  <div className="w-6 h-1 bg-gray-600"></div>
                  <div className="w-8 h-1 bg-gray-800"></div>
                </div>
                <p className="text-white mt-4">
                  World's leading Hotel Booking website, Over 30,000 Hotel rooms worldwide.
                </p>
                <ul className="flex justify-center items-center mt-4 space-x-2 text-white">
                  <li>
                    <a href="/main" className="">
                      Home
                    </a>
                  </li>
                  <li>
                    <FaAngleRight />
                  </li>
                  <li>
                    <a href="#" className=" font-bold">
                      {packageInfo.city.toUpperCase()}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>




        <div className="container mx-auto">
          <section className='mx-4 lg:mx-24 my-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 shadow-lg rounded-md p-3
'>

            <div className='lg:col-span-2'>
              <div className='block lg:flex  items-center gap-1'>
                <h2 className="text-lg lg:text-3xl font-bold text-[#372326] my-5 ">
                  The Best of {packageInfo.country} &amp;  {packageInfo.city} <span className=""> {packageInfo.package_Type} Package</span>
                </h2>
                {Array.from({ length: 5 }, (_, i) => packageInfo.rating >= i + 1 ? <FaStar className="text-orange-500 text-2xl" /> : <FaRegStar className='text-2xl text-orange-500' />)}
              </div>

              <div>
                <p className='my-2 text-xl font-bold'>Description</p>
                <div dangerouslySetInnerHTML={{ __html: packageInfo.des }}></div>
              </div>

              <p className='my-4 mt-8 text-xl font-bold'>Photo Gallery</p>
              <div className=' h-[26rem]'>
                <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper w-full h-full">
                  {packageInfo.images.map((imginfo, imgindex) => {
                    return (
                      <SwiperSlide className='w-full h-full' key={imgindex} ><img src={`${storageLink}/${imginfo}`} alt="" className='w-full h-full bg-cover' /> </SwiperSlide>
                    )
                  })}


                </Swiper>
              </div>
              <p className='my-4 mt-8 text-xl font-bold'>Location</p>
              <div className='w-full h-[25rem]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290415.157581651!2d-93.99661009218904!3d39.661150926343694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1467884030780" allowfullscreen="" className='h-full w-full'></iframe>
              </div>

            </div>














            <div className='px-1 py-8 '>
              <div className=' border my-4 '>
                <div className='text-center bg-[#253D52] text-white  py-1 '>Book Now</div>

                <div className='flex flex-col gap-1 ps-2 my-3'>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" id="name" placeholder='Enter your full name' className='border ' />
                </div>
                <div className='flex flex-col gap-1 ps-2 my-3'>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder='Enter your Email' className='border ' />
                </div>
                <div className='flex flex-col gap-1 ps-2 my-3'>
                  <label htmlFor="number"> Mobile Number</label>
                  <input type="tel" name="number" id="email" placeholder='Enter your Mobile Number' className='border ' />
                </div>

                <div className='text-center my-4 '><button className='p-1 px-4 rounded-md text-white font-semibold bg-orange-600'>Send</button>
                </div>


              </div>







              <div className=' border my-14 '>
                <div className='text-center bg-[#253D52] text-white  py-1 '>Trip Information</div>
                <div className='flex items-center gap-3 ps-3 my-3'>
                  <FaRegCheckCircle className='text-blue-500' />
                  <p>Location</p>:
                  <p>{packageInfo.country},{packageInfo.city}. </p>
                </div>

                <div className='flex items-center gap-3 ps-3 my-3'>
                  <FaRegCheckCircle className='text-blue-500' />
                  <p>Duration</p>:
                  <p>{packageInfo.duration - 1}/Night - {packageInfo.duration}/Days. </p>
                </div>

                <div className='flex items-center gap-3 ps-3 my-3'>
                  <FaRegCheckCircle className='text-blue-500' />
                  <p>Location</p>:
                  <p>{packageInfo.country},{packageInfo.city}. </p>
                </div>
                <div className='flex items-center gap-3 ps-3 my-3'>
                  <FaRegCheckCircle className='text-blue-500' />
                  <p>Package Type</p>:
                  <p>{packageInfo.package_Type} Package. </p>
                </div>

                <div className='flex items-center gap-3 ps-3 my-3'>
                  <FaRegCheckCircle className='text-blue-500' />
                  <p>Price</p>:
                  <p>₹ {packageInfo.price}. </p>
                </div>


              </div>






              <div className='border my-14'>
                <div className='text-center bg-[#253D52] text-white  py-1 '>Terms &amp; Conditions </div>

                {packageInfo.terms.map((terms, termsindex) => {
                  return (
                    <div key={termsindex} className='flex items-center gap-2 p-2 ' >
                      <IoTerminalOutline className='text-green-600' />  {terms.terms}
                    </div>


                  )
                })}


              </div>

              <div className='border my-4'>
                <div className='text-center bg-[#253D52] text-white  py-1 '>Activities </div>

                {packageInfo.activite.map((activite, termsindex) => {
                  return (
                    <div key={termsindex} className='flex  flex-col gap-2 p-2 ' >
                      <p>Day : {activite.day}</p>
                      <p>Activitie : {activite.activitie}</p>
                    </div>

                  )
                })}


              </div>


            </div>

          </section>
        </div>

      </>
      }


    </>
  )
}

export default PackageSlugCompo
