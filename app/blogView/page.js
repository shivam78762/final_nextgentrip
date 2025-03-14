"use client";
import React, { useEffect,useState } from "react";
import Link from "next/link";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

import { getBlogs } from "../Component/Store/slices/blogslice";
import { imgurl, localurl } from "../Component/Store/flightUrls";



const page = () => {
const dispatch= useDispatch()
const state=useSelector(state=>state.blogslice)
  const [blogPosts,setblgposts] =useState()
useEffect(()=>{dispatch(getBlogs())},[])
useEffect(()=>{
  setblgposts(state.info)
},[state])





  return (
    <>
      <div className="relative pt-6 p lg:pt-0">
        <div className="relative -z-0">
          <Link href="/" className="block relative">
            <img
              src="/Images/bg-title.webp"
              alt="Kashmir Tour Packages"
              layout="fill"
              objectFit="cover"
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 text-white bg-[#020d16] opacity-15 z-10"></div>
            <h2 className="absolute left-0 right-0  flex items-center justify-center mx-auto z-10  text-white text-xl lg:text-2xl top-28 md:top-24 font-bold">
              Trending News
            </h2>
          </Link>

          <div
            className="absolute bottom-[-2px] left-0 right-0 inline-block w-full h-0 z-[99] pt-[4.920635%] bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/Images/mask-bg.webp')" }}
          >
            {/* Your content here */}
          </div>
        </div>

        <div className="absolute bottom-16 left-0 right-0 text-center pb-6">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            Where Every Experience Counts!
          </h1>
          <div className="flex justify-between mt-5 items-center border rounded-full  w-full md:w-[600px] bg-white mx-auto ">
            <div className="relative flex p-2 px-4 w-full items-center">
              <img
                src="/Images/search.svg"
                alt="Search Icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                id="txtDesCity"
                className="ml-2 flex-grow border-none p-2 rounded-lg w-full placeholder-gray-500"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center p-5 lg:p-20">
        { blogPosts && blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <div className="w-full">
              <Link href={`/blogView/${post.slug}`} className="block">
                <img
                  src={ `${imgurl}/storage/${post.blog_image}`}
                  alt="Blog image"
                  className="w-full h-60 object-cover rounded"
                />
              </Link>
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <div className="mb-2">
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">
                  {post.blog_type}
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                <Link href={`/blogView/${post.slug}`} className="hover:text-blue-500">
                  {post.blog_title}
                </Link>
              </h4>
              <p className="text-gray-600 mb-3 flex-grow text-sm  text-justify">
                {post.blog_text }
              </p>
              <Link
                href={`/blogView/${post.slug}`}
                className="text-blue-600 text-sm  font-medium flex items-center mt-auto gap-2"
              >
                Read More
                <HiOutlineArrowTrendingUp className="text-xl" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
