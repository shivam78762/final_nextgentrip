"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../Component/Store/slices/blogslice";
import { imgurl } from "../Component/common";
import Link from "next/link";

export default function page() {
  const dispatch= useDispatch()
const state=useSelector(state=>state.blogslice)

  const [blogPosts,setblgposts] =useState()
useEffect(()=>{dispatch(getBlogs())},[])
useEffect(()=>{
  setblgposts(state.info)
},[state])


  return (
    <>




    
    <section className="relative blog-bg w-full mt-5 bg-no-repeat bg-cover text-white py-20">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
       
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-lg text-white">
            We are passionate about delivering exceptional value and creating
            memorable experiences.
          </p>
         
        </div>
      </section>
      <div className="min-h-screen bg-gray-100 p-6">
        <header className="text-center mb-12 max-w-4xl mt-5 mx-auto">
          <h1 className="text-xl md:text-4xl font-bold mb-4">Welcome to Next Gen</h1>
          <p className="text-justify text-lg text-gray-700">
            Your ultimate resource for travel inspiration, tips, and stories. Whether you're looking for destination guides, practical advice, or real-life travel experiences, our blog has something for every traveller.
          </p>
        </header>

        <section className="mb-12 px-0 md:px-20">
          <h2 className="text-3xl text-center font-semibold text-black mb-6">Blog Categories</h2>
          <div className="flex flex-wrap gap-6 justify-center"> 

            {blogPosts && blogPosts.map((info)=>(
               <Link href={`/blogView/${info.slug}`} className="bg-white  w-full md:w-[32%]   shadow-md">
               <Image src={`${imgurl}/${info.blog_image}`} width={100} height={100} alt="" className="w-full"/>
               <div className="p-6">
               <h3 className="text-2xl font-bold text-gray-800">{info.blog_title}</h3>
                 <p className="text-gray-600 mt-2">{info.blog_text}</p>
                 <p className="text-blue-600 text-sm mt-2">Example: "10 Packing Tips for Stress-Free Travel"</p>
               </div>
               </Link>
            ))}
           
          
          </div>
        </section>

       

      </div>

   
   



    </>
  );
}
