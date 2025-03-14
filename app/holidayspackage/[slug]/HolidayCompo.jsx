"use client"
import axios from 'axios'
import React, { useEffect, useState, useTransition } from 'react'
import { apilink, imgurl } from '../../Component/common'
import { FaPlane, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineAccessTime } from 'react-icons/md';
import Image from 'next/image';
import { MdOutlineCancel } from "react-icons/md";
import HeroSlider from '../../Component/AllComponent/HeroSlider';
import { CiLocationArrow1 } from "react-icons/ci";
import Link from 'next/link';


const HolidayCompo = ({slug}) => {

const [pakages,setpakages]=useState();
const [morepack,setMorePack]=useState(null);
const [booking,setbooking ] =useState(false)
    useEffect(()=>{
     const fatchapi= async()=>{
const data=await axios.get(`${apilink}/search-holidays-package/${slug}`);
 setpakages(data.data)
}

fatchapi()

    },[])

    console.log(pakages,"dfdfvg")

  return (
    <>
  <HeroSlider />
    
<div>

 <div className='grid grid-cols-3 gap-3 px-20'>

{pakages && pakages.map((item,index)=>{
  return(
<li className="" key={index}>
  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Image Section */}
    <div className="relative">
      <img
        src={`${imgurl}/storage/${item.banner_image}`}
        alt={item.package_name}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <h4 className="absolute bottom-2 left-2 text-white text-lg font-semibold bg-blac bg-opacity-50 px-2 py-1 rounded">
      {item.package_name}
      </h4>
    </div>
   
    <div className="p-4 flex justify-between ">
      <span className="block text-sm text-gray-500">{item.package_Type}</span>
      <Link href={`/holidayspackage/package/${item.slug}`}  className=" text-sm text-blue-500 flex items-center gap-[2px] cursor-pointer ">More details <CiLocationArrow1  className='font-bold text-xl mt-[1px]'/></Link>
    </div>
    
  </div>
</li>

  )
}) }











</div>
</div>
 </>
  )
}

export default HolidayCompo
