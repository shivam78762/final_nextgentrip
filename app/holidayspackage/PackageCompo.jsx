"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apilink, storageLink } from '../Component/common'
import Link from 'next/link'
import { FaAngleDoubleRight, FaStar } from "react-icons/fa";




export const PackageCompo = () => {
const [allpackage,setAllpackage]=useState()

    const fetchPackage=async()=>{
        const response= await axios.get(`${apilink}/holidays/top`)
        if(response.data){
setAllpackage(response.data)
        }
    }

useEffect(()=>{
    fetchPackage()

},[])

console.log(allpackage)
  return (
  <> {allpackage?.map((tour) => (
          <div
            key={tour.id}
            className="bg-white shadow-md  overflow-hidden"
          >
            <div className="relative">
              <img
                src={  `${storageLink}/${tour?.banner_image}`}
                alt={tour?.package_name}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 right-2  z-20 w-full flex  items-center justify-end ">
                <p className="font-bold bg-white px-2 py-1">{tour?.price}</p>
              </div>
            </div>
            <div className="p-4 pb-0">
              <h4 className="text-lg font-semibold">{tour?.package_name}</h4>
              <div className="flex items-center my-2">
                <span className="text-sm bg-yellow-500 text-white py-1 px-2 rounded-full">
                  HOT DEALS
                </span>
                <div className="flex ml-2">
                  {[...Array( +tour?.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            <p className='h-12 text-[12px] overflow-hidden' dangerouslySetInnerHTML={{__html:tour?.des}}></p>
            </div>

            <div className="mt-4  flex justify-center border-t  space-x-2">
             
              <Link href={`/holidayspackage/package/${tour?.slug}`} className=" flex p-4 items-center ap-2g  py-2 px-4 rounded hover:text-gray-600">
                View More <FaAngleDoubleRight />
              </Link>
            </div>
          </div>
        ))} </>
  )
}
