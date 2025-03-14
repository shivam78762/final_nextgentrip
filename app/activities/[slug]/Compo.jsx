"use client"
import { getSightSeeingapi } from '../../Component/Store/slices/sightseeingSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import ActivitiesSlider from '../../Component/AllComponent/ActivitiesSlider';
import { getseeingApi } from '../../Component/Store/slices/sightseeingGetSlice';


const Compo = ({slug}) => {
const dispatch=useDispatch()
const state=useSelector(state=>state.sightseeingslice)
    const decodedSlug = decodeURIComponent(slug);
    const params = new URLSearchParams(decodedSlug);
  
    const CityId = params.get("CityId");
    const FromDate = params.get("FromDate");
    const ToDate = params.get("ToDate");
    const currencylist=useSelector(state=>state.currencySlice);
    const defaultcurrency= JSON.parse(localStorage.getItem("usercurrency")) || {symble:"₹",code:"INR",country:"India",}
    const cuntryprice=currencylist?.info?.rates?.[`${defaultcurrency.code}`]

    useEffect(()=>{
dispatch(getSightSeeingapi({CityId,CountryCode:"IN",TravelStartDate:FromDate,FromDate,ToDate,AdultCount:1,ChildCount:0,ChildAge:null,
  PreferredLanguage:0,PreferredCurrency:"INR",IsBaseCurrencyRequired:false,EndUserIp:"223.178.208.152",BookingMode:5}))
    },[])

const handelsith=(info)=>{

dispatch(getseeingApi({EndUserIp:"223.178.208.152",ResultIndex:info.ResultIndex,TraceId:state.info.Response.TraceId}))

}

  return (
    <div>

<ActivitiesSlider />

      { state && state.isLoading && <div className='flex h-[70vh] justify-center items-center' >

        <img className=" h-32 w-32 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />

      </div>

      }
        <div className='p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-10 gap-10'>
      {state && !state.isLoading && state.info && state.info.Response &&state.info.Response && state.info.Response.ResponseStatus==1 &&

state.info.Response.SightseeingSearchResults.map((item)=>{
    return(
        <div className='relative rounded-md overflow-hidden group' onClick={()=>handelsith(item)}> 
            
               <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        // disableOnInteraction: false,
      }}
      modules={[Autoplay]}

    
    >
        {item.ImageList.map((im)=>(
 <SwiperSlide className='cursor-grab active:cursor-grabbing'>         
   <img src={im} className='w-full' />
</SwiperSlide>
        ))}
     
   
    </Swiper>

    <p className='absolute top-3 right-3 z-10 text-[white] rounded-md p-2 px-4 bg-[#EF6614] group-hover:-right-full duration-500 '>{item.CityName}</p>
    <p className='absolute bottom-3 right-3 z-40 text-[white] rounded-md   p-1 px-4 bg-[#EF6614]  group-hover:-right-full duration-500 '>{defaultcurrency.symble} 
      {(() => {
    const publishedPrice = Number(item.Price?.PublishedPrice || 0) * cuntryprice;
    const priceString = publishedPrice.toFixed(2);
    const [integerPart, decimalPart] = priceString.split(".");
    return `${integerPart}.${(decimalPart || "00").slice(0, 2)}`;
  })()}</p>
    <p className='absolute bottom-3 left-3 z-40 text-[white] max-w-[20rem] text-nowrap overflow-hidden   rounded-md p-1 px-4 bg-[#EF6614] group-hover:-left-full duration-500  '>{item.SightseeingName}</p>
            </div>
    )})

      }
      </div>
    </div>
  )
}

export default Compo
