"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Autoplay} from 'swiper/modules';
import {useTranslations} from 'next-intl';
import axios from "axios";
import { apilink, storageLink } from "../common";
import { getSliderData } from "../Store/slices/SliderSlice";
import { useDispatch, useSelector } from "react-redux";
const allData = [
  {
    title: "Exclusive Offer",
    subtitle: "New User",
    offer: "First Flight",
    code: "NextGen",
    imageUrl: "/images/apka trip6 (1).webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "TopOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Flights Offer",
    subtitle: "New User",
    offer: "First Flight",
    code: "NextGen",
    imageUrl: "/images/apka trip1.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "FlightsOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Hotel Offer",
    subtitle: "New User",
    offer: "First Flight",
    code: "NextGen",
    imageUrl: "/images/apka trip2.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "HotelsOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Holiday Offer",
    subtitle: "New User",
    offer: "First Flight",
    code: "NextGen",
    imageUrl: "/images/apka trip3.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "HolidayOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Bank Offers",
    subtitle: "New User",
    offer: "First Flight",
    code: "NextGen",
    imageUrl: "/images/apka trip4.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "BankOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Bus Offers",
    subtitle: "New User",
    offer: "First Flight",
    code: "NextGen",
    imageUrl: "/images/apka trip7.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "BusOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
  {
    title: "Cabs",
    subtitle: "New User",
    offer: "First Flight",
    code: "NextGen",
    imageUrl: "/images/apka trip8.webp",
    description:
      "Get an exclusive discount on your first flight booking. Use the code below to avail the offer.",
    category: "CabOffer",
    bg: "#ECF5FE",
    link: "/holidayspackage",
  },
];

const CustomSlider = ({ isLoading, children }) => {
  const t = useTranslations('HomePage');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("TopOffer");
const [bannerimg,setbannerImg]=useState()
  
const dispatch = useDispatch();
const sliderdata = useSelector((state) => state.sliderData);


 useEffect(()=>{

  dispatch(getSliderData())

 },[])
  

  const filteredData =
    activeTab === "TopOffer"
      ? allData
      : allData.filter((item) => item.category === activeTab);
const filteredData2=["/images/flight-slide2.png","/images/flight-slide1.png","/images/flight-slide3.png"]

  const handleClick = (id) => {
    setActiveTab(id);
  };

  const fetchapi=async()=>{

const response = await axios.get(`${apilink}/home/bannerimg`);
   setbannerImg(response.data)
  }

  useEffect(() => {
    // fetchapi();
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timeout);
  }, []);

  

  return (
    <>
    <div className=" md:my-6">
 
 <div className=" hidden  relative  pt-0 lg:pt-10 text-lg md:text-xl lg:text-3xl font-bold text-gray-900 md:flex justify-center items-center gap-2 my-5">
 {t('title')}
 </div>


{
// true &&
sliderdata.isLoading &&
<div className="flex  flex-col lg:flex-row px-4 lg:px-36 justify-end gap-4 w-full">
{/* Image Placeholder Loader */}
<div className="w-full md:w-2/4 h-72 bg-gray-300 rounded-lg animate-pulse"></div>
<div className="hidden md:block w-1/4 h-72 bg-gray-300 rounded-lg animate-pulse"></div>
<div className="hidden md:block w-1/4 h-72 bg-gray-300 rounded-lg animate-pulse"></div>
<div className="hidden md:block w-1/4 h-72 bg-gray-300 rounded-lg animate-pulse"></div>
</div>

}

{
// false &&
!sliderdata.isLoading &&
 <div className=" flex  flex-col lg:flex-row md:px-4 lg:px-36 justify-end md:gap-4 w-full ">
 <Swiper
     className=" w-full  lg:w-3/6 h-[200px] lg:h-[300px] "

       autoplay={{
         delay: 2000,
         disableOnInteraction: false,
       }}
    
    
       modules={[Autoplay]}

     >
       {sliderdata.info[0]?.slider_img.map((item, index) => (
         <SwiperSlide
           key={index}
           className="flex flex-col  h-full md:rounded-2xl overflow-hidden  bg-white-900"
         >
           <img src={`${storageLink}/${item}`} alt=""  className="w-full  h-full"/>
          
         </SwiperSlide>
       ))}
     </Swiper>
     <div className="flex  lg:gap-4  lg:w-3/6 justify-around">
    


<div className="rounded-2xl overflow-hidden   h-[150px]   md:h-[250px]  lg:h-full hidden md:block">


        <img src={`${storageLink}/${sliderdata.info[0]?.img2}`} alt="" className="h-full w-full" />
      
       </div>
       <div className="rounded-2xl overflow-hidden   h-[150px]   md:h-[250px]  lg:h-full hidden md:block">


        <img src={`${storageLink}/${sliderdata.info[0]?.img3}`} alt="" className="h-full w-full" />
      
       </div>
       <div className="rounded-2xl overflow-hidden   h-[150px]   md:h-[250px]  lg:h-full hidden md:block">


        <img src={`${storageLink}/${sliderdata.info[0]?.img4}`} alt="" className="h-full w-full" />
      
       </div>


     </div>
 </div>
}

</div>
    </>
  );
};

export default CustomSlider;
