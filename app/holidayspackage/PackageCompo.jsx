"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apilink, storageLink } from '../Component/common'
import Link from 'next/link'
import { FaAngleDoubleRight, FaStar } from "react-icons/fa";




export const PackageCompo = () => {
const [allpackage,setAllpackage]=useState()
const [loader,setloader]=useState(true)
    const fetchPackage=async()=>{
      setloader(true)
        const response= await axios.get(`${apilink}/holidays/top`)
        if(response.data){
setAllpackage(response.data)
        }
        setloader(false)
    }

useEffect(()=>{
    fetchPackage()

},[])


  return (
  <> 
  
  
   
      {loader && [1, 2,3,4].map((item) => ( 
        <div key={item} className="border rounded-lg shadow-sm p-4">
          <div className="animate-pulse space-y-4">
            <div className="h-48 bg-gray-300 rounded"></div>
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-6 bg-gray-300 rounded w-16"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-2/3"></div>
            <div className="flex items-center space-x-2">
              <div className="h-6 bg-yellow-300 rounded-full px-2 py-1 w-20"></div>
              <div className="flex space-x-1">
                {[1, 2, 3].map((star) => (
                  <div key={star} className="h-4 w-4 bg-yellow-300 rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="flex justify-center mt-4">
              <div className="h-8 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>
      ))}
    
  
  {!loader && allpackage?.map((tour) => (
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
            <p className='h-12 text-sm overflow-hidden' dangerouslySetInnerHTML={{__html:tour?.des}}></p>
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

