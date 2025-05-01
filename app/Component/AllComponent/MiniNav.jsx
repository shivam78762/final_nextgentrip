"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";

const MiniNav = () => {
      const [bottomDropdown, setBottomDropdown] = useState(null);
    
    const topAndBottomDropDown = {
        topFeaturestopDropDown: [
          {
            heading: "List Your Property",
            list: [
              {
                link: "",
                listName: "Benefits of Booking Directly",
              },
              {
                link: "",
                listName: "Custom Travel Guidance with Experts",
              },
              {
                link: "",
                listName: "24-Hour Cancellation",
              },
            ],
          },
          {
            heading: "Business Associates",
            list: [
              {
                link: "",
                listName: "Benefits of Booking Directly",
              },
              {
                link: "",
                listName: "Custom Travel Guidance with Experts",
              },
              {
                link: "",
                listName: "24-Hour Cancellation",
              },
            ],
          },
          {
            heading: "Corporate Travel Desc",
            list: [
              {
                link: "",
                listName: "Benefits of Booking Directly",
              },
              {
                link: "",
                listName: "Custom Travel Guidance with Experts",
              },
              {
                link: "",
                listName: "24-Hour Cancellation",
              },
            ],
          },
        ],
        HomeBookTravelBuinessBottomDropDown: [
          {
            heading: "Home",
            listData: [
              {
                link: "/",
                list: " Nextgentrip.com",
              },
             
              {
                link: "/blog",
                list: "Blog",
              },
              {
                link: "/ATI/loyalty-program/",
                list: "Membership & Loyalty Program",
              },
    
    
              {
                link: "/condition/privacy-policy",
                list: "Privacy Policy",
              },
              {
                link: "/condition/terms-condition",
                list: "Terms & Conditions",
              },
            ],
          },
    
          {
            heading: "Book",
            listData: [
              {
                link: "/flight",
                list: " Book Flight",
              },
              {
                link: "/hotels",
                list: " Book Hotels",
              },
              {
                link: "/holidayspackage",
                list: "Holiday Packages",
              },
              {
                link: "/activities",
                list: "Group Tours",
              },
              // {
              //   link: "/cabs",
              //   list: "Car Rental",
              // },
              {
                link: "/buses",
                list: "Bus",
              },
            ],
          },
          {
            heading: "Travel Assistance",
            listData: [
              {
                link: "/web-check",
                list: "Web Check-in",
              },
              {
                link: "/TrainComponent/pnrcheck",
                list: "PNR Status Check",
              },
            //   {
            //     link: "/TrainComponent",
            //     list: "Local Guides",
            //   },
            ],
          },
    
          {
            heading: "Services",
            listData: [
              {
                link: "/flight",
                list: "Flights",
              },
              {
                link: "/hotels",
                list: "Hotels",
              },
    
              {
                link: "/buses",
                list: "Bus",
              },
              {
                link: "/cruise",
                list: "Cruises",
              },
              {
                link: "/charter",
                list: "Charter Services",
              },
              {
                link: "/holidayspackage",
                list: "Holiday Packages",
              },
    
            
              {
                link: "/train",
                list: "Train Services",
              },
            ],
          },
          {
            heading: "Business Assistance",
            listData: [
              {
                link: "/ATI/atimate",
                list: "Business Associate",
              },
              {
                link: "/ATI/atidesk",
                list: "Corporate Travel Desk",
              },
              {
                link: "/ATI/atipro",
                list: "Elite Luxury",
              },
              {
                link: "/user",
                list: "Extranet Login",
              },
              {
                link: "/property-listing",
                list: "List Your Property",
              },
            ],
          },
        ],
      };
  return (
     <div className="w-full flex md:justify-end	">
              <div className="w-full md:w-fit hidden lg:block">
                <ul className="text-black lastNavigation bg-gray-100   px-2 w-full  md:mx-end   md:px-5   text-sm py-2  gap-0 md:gap-3 grid grid-cols-3  md:flex  lg:w-full items-center justify-between shadow-md"
                  onMouseLeave={() => setBottomDropdown(null)}>
                  {topAndBottomDropDown.HomeBookTravelBuinessBottomDropDown.map(
                    (elm, index) => (
                      <li
                        onMouseEnter={() => setBottomDropdown(index)}
                        key={index}
                        className="relative group"
                      >
                        <div>
                          <button className=" p-3 flex  text-[11.5px] md:text-sm text-nowrap items-center md:gap-1 hover:text-blue-500">
                            {elm.heading}
                            <IoIosArrowDown
                              className={`${bottomDropdown === index ? "rotate-180" : ""
                                }`}
                            />
                          </button>
                          {bottomDropdown === index && (
                            <ul
                              onMouseLeave={() => setBottomDropdown(null)}
                              className={`  absolute  z-40  bg-white border border-gray-300 rounded-lg shadow-md w-max py-2 ${index == 0 || index == 3 ? "left-0" : " right-0"}  `}
                            >
                              {elm.listData?.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500 cursor-pointer "
                                >
                                 
                                  <Link  className="block" href={item.link}>{item.list}</Link>
                                 
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div> 
  )
}

export default MiniNav