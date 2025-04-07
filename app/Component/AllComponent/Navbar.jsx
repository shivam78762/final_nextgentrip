"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import CustomSlider from "./Slider";

const Navbar = () => {
  const t = useTranslations('Navbar');

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window?.innerWidth < 768 : ""
  );

  
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== "undefined" ? window.innerWidth < 768 : "");
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showMore, setShowMore] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };
  const icons = [
    {
      name: t("flight"),
      className: "meuicowidth flightmenuico",
      class: "flight-icon",
      link: "/flight",
    },
    {
      name: t("hotels"),
      className: "meuicowidth hotelmenuico",
      class: "hotel-icon",
      link: "/hotels",
    },
    // {
    //   name: t("flightHotel"),
    //   className: "meuicowidth fphmenuico",
    //   class: "fph-icon",
    //   link: "/flight+hotels",
    // },
    {
      name: t("trains"),
      className: "meuicowidth trainmenuico",
      class: "trains-icon",
      link: "/train",
    },
    {
      name: t("bus"),
      className: "meuicowidth busmenuico",
      class: "buses-icon",
      link: "/buses",
    },
    {
      name: t("holidays"),
      className: "meuicowidth holidaymenuico",
      class: "holiday-icon",
      link: "/holidayspackage",
    },
    // {
    //   name: t("cab"),
    //   className: "meuicowidth cabmenuico",
    //   class: "cab-icon",
    //   link: "/cabs",
    // },
    // {
    //   name: t("activities"),
    //   className: "meuicowidth actvitymenuico",
    //   class: "activity-icon",
    //   link: "/activities",
    // },
    {
      name: t("cruise"),
      className: "meuicowidth Cruisemenuico",
      class: "Cruise-icon",
      link: "/cruise",
    },
    {
      name: t("charter"),
      className: "meuicowidth flightmenuico",
      class: "flight-icon",
      link: "/charter",
    },
    {
      name: t("insurance"),
      className: "meuicowidth Insurancenuico",
      class: "Inurance-icon",
      link: "/Insurance",
    }
  ];
  
  return (
    <>
      
    

   
      {/* <div className=" mt-0 lg:mt-2 mb-5 block md:hidden">
        <Slider {...settings}>
          <div>
            <img
              src="/images/azadi-sale-29jul-mob-strip2.webp"
              alt=""
              className="w-full"
            />
          </div>
          <div>
            <img src="/images/banner2.webp" alt="" className="w-full" />
          </div>
          <div>
            <img
              src="/images/apka trip banner 4.webp"
              alt=""
              className="w-full"
            />
          </div>
          <div>
            <img
              src="/images/apka trip banner 3.webp"
              alt=""
              className="w-full"
            />
          </div>
        </Slider>
      </div> */}


<div className=" md:hidden">
<CustomSlider />
</div>
 
 
      <nav className="bg-white py-1 px-0 md:px-5 flex justify-between gap-2 transition-all duration-100 mb-3 md:mb-0">
     
 
<div
              className={`container relative custom-nav grid grid-cols-3 md:flex gap-3 md:gap-6 lg:gap-0 transition-all duration-100 items-center overflow-auto `}
            >
              {icons.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  onClick={() => setActiveLink(item.link)}
                  className={` flex justify-center flex-wrap min-lg:flex-col lg:flex-row flex-col items-center gap-1 md:py-2 px-0 text-center lg:px-3 rounded-md hover:bg-[#ECF5FE] hover:text-white transition-colors duration-300 ${
                    activeLink === item.link
                      ? "bg-[#ECF5FE] text-white"
                      : "hover:bg-[#ECF5FE] hover:text-white"
                  }`}
                >
                 
                    <div
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className={`w-10 h-10 ${item.className}`}
                      style={index === 0 ? { transform: "rotate(312deg)" } : {}}
                    />
                 
                  <span className="text-black font-semibold text-sm">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
      </nav>



    </>
  );
};

export default Navbar;
