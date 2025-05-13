"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaQuoteLeft,
  FaQuoteRight,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import { imgurl } from "../../Component/common";




const page = ({ data }) => {



  const [selected, setSelected] = useState('');

  const handleClick = (option) => {
    setSelected(option);
  };

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',

  };
  return (
    <>
      {!data && <div className="h-screen w-screen flex justify-center items-center">


        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that blog page. You'll find lots to explore on the home page. </p>
              <Link href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
            </div>
          </div>
        </section>
      </div>}

      {data && <>
        <section className="container mx-auto  p-0 relative mt-[-1.5rem]">
          <div className="">
            <img
              src={`${imgurl}/${data.blog_image}`}
              className="w-full h-80 object-cover"
              alt="Banner Image"
            />
          </div>

          <div className="relative -mt-20 mx-auto max-w-6xl rounded-2xl bg-white shadow-lg rounded-4 p-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-11 lg:col-span-10 ">
                <div className="inline-flex mb-2">
                  <span className="text-green-600 bg-green-100 text-[10px] font-bold px-2 py-1 rounded">
                    {data.blog_type}
                  </span>
                </div>
                <h1 className="text-[26px]  font-bold">
                  {data.blog_title}
                </h1>
                <p className="my-3 text-gray-600">
                  {data.blog_text}
                </p>
                <ul className="flex items-center gap-2 p-0">
                  <li className="flex items-center gap-2">

                    <div className="ml-2">

                      <p className="mb-0 text-gray-500">
                        <span> {new Date(data.created_at).toLocaleString('en-US', options)}</span>
                        <span className="mx-2">.</span>
                        <span>2 min read</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto py-5 px-10">


          <div
            className="slider-description"
            dangerouslySetInnerHTML={{
              __html: data.des1,
            }}
          ></div>

          <blockquote className="bg-[#ecf5fe] rounded text-center  p-8 my-6">
            <h6 className="font-normal flex text-center mb-5">
              <FaQuoteLeft />{data.quotes}
              <FaQuoteRight />
            </h6>

          </blockquote>

          <div
            className="slider-description"
            dangerouslySetInnerHTML={{
              __html: data.des2,
            }}
          ></div>


          {/* <div className="bg-mode bg-white border rounded-md p-6 my-8">
          <div className="flex items-center">
            <Link href="#">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src="/images/team-1.webp" alt="avatar" />
              </div>
            </Link>
            <div>
              <h4 className="m-0">
                <Link href="#" className="font-bold text-lg">
                  Adam Wisdom
                </Link>
              </h4>
              <small>GeoTrip Senior Writer</small>
            </div>
          </div>

          <p className="my-4">
            Using dummy content or fake elegant design can quickly begin to
            bloat with unexpected content information in the Web design process
            can result in products with unrealistic assumptions and potentially
            serious design flaws. A seemingly.
          </p>

          <div className="flex justify-between items-center">
            <ul className="flex space-x-4">
              <li>
                <Link className="text-lg" href="#">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link className="text-lg" href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link className="text-lg" href="#">
                  <FaGooglePlus />
                </Link>
              </li>
              <li>
                <Link className="text-lg" href="#">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
            <Link
              href="#"
              className="bg-blue-600 text-white text-md font-semibold px-3 py-2 rounded-md"
            >
              Contact Author
            </Link>
          </div>
        </div> */}

          {/* <div className="bg-[#f8f9fa] rounded flex justify-between items-center text-center p-4 mt-6">
            <h6 className="font-bold">Was this article helpful?</h6>
            <small className="font-semibold">
              40 out of 84 found this helpful
            </small>
            <div className="flex border border-black rounded-md">
              <div
                onClick={() => handleClick("yes")}
                className={`border-r rounded-l-md  flex gap-1 items-center border-black p-2 cursor-pointer ${selected === "yes" ? "bg-gray-800 text-white" : ""
                  }`}
              >
                <input type="radio" id="yes" name="helpful" className="hidden" />
                <Image
                  src="/images/like.webp"
                  width={20}
                  height={100}
                  alt="img"
                  style={{ filter: selected === 'yes' ? 'brightness(1) invert(1)' : 'none' }}
                />
                <label htmlFor="yes" className="text-sm btn-outline-secondary">
                  Yes
                </label>
              </div>

              <div
                onClick={() => handleClick("no")}
                className={`p-2 py-1  flex items-center gap-1 rounded-r-md cursor-pointer ${selected === "no" ? "bg-gray-800 text-white" : ""
                  }`}
              >
                <input type="radio" id="no" name="helpful" className="hidden" />
                <label htmlFor="no" className="text-sm btn-outline-secondary">
                  No
                </label>
                <Image
                  src="/images/dislike.webp"
                  width={20}
                  height={100}
                  alt="img"
                  style={{ filter: selected === 'no' ? 'brightness(1) invert(1)' : 'none' }}
                />
              </div>
            </div>
          </div> */}

          <div className="flex justify-between mt-6">
            {/* <div>
              <h6 className="inline-block mr-4 font-bold">Share This:</h6>
              <ul className="flex gap-4 mt-3">
                <li>
                  <Link href="#" className="flex items-center gap-2">
                    <FaFacebook /> Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-2">
                    <FaInstagram /> Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-2">
                    <FaTwitter /> Twitter
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div>
              <h6 className="inline-block mr-4 font-bold">Popular Tags:</h6>
              <ul className="flex space-x-2 mt-3">
                <li>
                  <Link href="#" className="bg-[#f8f9fa] text-sm p-2 rounded-md">
                    Article
                  </Link>
                </li>
                <li>
                  <Link href="#" className="bg-[#f8f9fa] text-sm p-2 rounded-md">
                    Holiday
                  </Link>
                </li>
                <li>
                  <Link href="#" className="bg-[#f8f9fa] text-sm p-2 rounded-md">
                    Destination
                  </Link>
                </li>
                <li>
                  <Link href="#" className="bg-[#f8f9fa] text-sm p-2 rounded-md">
                    GeoTrip
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div> </>}
    </>
  );
};

export default page;
