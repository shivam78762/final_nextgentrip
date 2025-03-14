"use client"


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaShareAlt, FaStar, FaFilter, FaTimes } from "react-icons/fa";
import { MdOutlineCancel,MdFilterList  } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { BiRefresh } from "react-icons/bi";


import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getAllhotelsapi } from '../../../Component/Store/slices/hotelsSlices';
import HotelsComp from '../../../Component/AllComponent/formMaincomp/HotelsComp';


const Comp = ({slug}) => {
  const routes=useRouter()

    const decodedSlug =  decodeURIComponent(slug)
    const params = new URLSearchParams(decodedSlug);
const cityCode=params.get("citycode")
const cityName=params.get("cityName")

const checkIn=params.get("checkin")
const checkOut=params.get("checkout")
const adults=Number(params.get("adult"))
const children=Number(params.get("child"))
const roomes=params.get("roomes")
const page=params.get("page")


const dispatch=useDispatch()
const allhoteldata=useSelector((state)=>state.hotelsSlice)
const [allhotel,setallhotels]=useState()
const [hotalbackup,sethotalbackup]=useState()
const [showimg,setshowImg]=useState()
const [seepagination,setpagination]=useState(true)

const renderStars = (rating) => {
  const starCount = Math.round(Number(rating));
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} color={index < starCount ? "gold" : "gray"} />
      ))}
    </div>
  );
};


// useEffect(()=>{
// setallhotels(allhoteldata && !allhoteldata.isLoading && allhoteldata.info && allhoteldata.info.filteredResults
//   && allhoteldata.info.allhotel)
// sethotalbackup(allhoteldata)
// },[allhoteldata])

// const handelRatingFilter=(e)=>{
//   // const newdata= hotalbackup.info.totalHotels.HotelDetails ||     e.target.value;
// const newdata=hotalbackup.info.filteredResults.filter((data)=>data.HotelDetails.HotelRating==e.target.value)
// setallhotels(newdata)
//   setpagination(false)
// }




const handelNextpage=()=>{
  if(page>=hotalbackup.info.len-1){}
  else{  routes.push(`/hotels/cityName=${cityName}&citycode=${cityCode}&checkin=${checkIn}&checkout=${checkOut}&adult=${adults}&child=${children}&roomes=${roomes}&page=${Number(page)+1}`)
}

}
const handelPrevpage=()=>{
  if(page==0){}
  else{  routes.push(`/hotels/cityName=${cityName}&citycode=${cityCode}&checkin=${checkIn}&checkout=${checkOut}&adult=${adults}&child=${children}&roomes=${roomes}&page=${Number(page)-1}`)
}

}



useEffect(()=>{
dispatch(getAllhotelsapi({cityCode,checkIn,checkOut,adults,children,page}))
},[])
useEffect(()=>{sethotalbackup(allhoteldata)
  setallhotels(allhoteldata.info.totalHotels && allhoteldata.info.totalHotels)
},[allhoteldata])





  return (
   <>
   <HotelsComp />
   
 <div className='p-2 flex gap-2 relative '>
      
   <div className=' hidden  w-1/6 ps-3 pt-2 sticky top-24 h-[85vh] p-1 mx-5 mt-4 myshadow rounded-sm bg-white border hover:border-blue-600  lg:flex flex-col'>
 <p className='flex items-center gap-3'> <MdFilterList  className='text-gray-600 text-2xl ' /> Filter</p> 
<div className='mt-4 p-2'>
<p className='font-semibold'>By Stars</p>
<div className='flex flex-col gap-1 ps-4'>
<div className='flex items-center gap-1'>
  <input type="radio" id="star1" name="star" value="star1" />
  <label htmlFor="star1" className='flex items-center gap-1'>
 <FaStar className='mb-[1px] text-orange-600' /> 1 Star

  </label>
</div>
<div className='flex items-center gap-1'>
  <input type="radio" id="star2" name="star" value="star2" />
  <label htmlFor="star2" className='flex items-center gap-1'>
 <FaStar className='mb-[1px] text-orange-600' /> 2 Star

  </label>
</div>
<div className='flex items-center gap-1'>
  <input type="radio" id="star3" name="star" value="star3" />
  <label htmlFor="star3" className='flex items-center gap-1'>
 <FaStar className='mb-[1px] text-orange-600' /> 3 Star

  </label>
</div>
<div className='flex items-center gap-1'>
  <input type="radio" id="star4" name="star" value="star4" />
  <label htmlFor="star4" className='flex items-center gap-1'>
 <FaStar className='mb-[1px] text-orange-600' /> 4 Star

  </label>
</div>
<div className='flex items-center gap-1'>
  <input type="radio" id="star5" name="star" value="star5" />
  <label htmlFor="star5" className='flex items-center gap-1'>
 <FaStar className='mb-[1px] text-orange-600' /> 5 Star

  </label>
</div>
</div>

</div>

<div className='mt-4 p-2'>
<p className='font-semibold'>Price per night</p>
<div className='flex flex-col gap-1 ps-4'>
<div className='flex items-center gap-1'>
  <input type="radio" id="price1" name="price" value="price1" />
  <label htmlFor="price1" className='flex items-center gap-1'>  ₹ 0 - ₹ 1500</label>
</div>

<div className='flex items-center gap-1'>
  <input type="radio" id="price2" name="price" value="price2" />
  <label htmlFor="price2" className='flex items-center gap-1'>  ₹ 1500 - ₹ 3500</label>
</div>
<div className='flex items-center gap-1'>
  <input type="radio" id="price3" name="price" value="price3" />
  <label htmlFor="price3" className='flex items-center gap-1'> ₹ 3500 - ₹ 7500</label>
</div>
<div className='flex items-center gap-1'>
  <input type="radio" id="price4" name="price" value="price4" />
  <label htmlFor="price4" className='flex items-center gap-1'>  ₹ 7500 - ₹ 11500</label>
</div>
<div className='flex items-center gap-1'>
  <input type="radio" id="price5" name="price" value="price5" />
  <label htmlFor="price5" className='flex items-center gap-1'>  ₹ 11500 - ₹ 15000</label>
</div>
<div className='flex items-center gap-1'>
  <input type="radio" id="price6" name="price" value="price6" />
  <label htmlFor="price6" className='flex items-center gap-1'> ₹ 15000+</label>
</div>
</div>

</div>
<div className='mt-4 p-2'>
<p className='font-semibold'>Other :</p>
<div className='grid grid-cols-2 gap-1 ps-4'>
<div className='flex items-center gap-1'>
  <input type="radio" id="L-H" name="price" value="L-H" />
  <label htmlFor="L-H" className='flex items-center gap-1'>  Low-High</label>
</div>

<div className='flex items-center gap-1'>
  <input type="radio" id="H-L" name="price" value="H-L" />
  <label htmlFor="H-L" className='flex items-center gap-1'>  High-Low</label>
</div>
<div className='flex items-center gap-1'>
  <input type="radio" id="bestRating" name="price" value="bestRating" />
  <label htmlFor="bestRating" className='flex items-center gap-1'>  Best Rating</label>
</div>
<div className='flex items-center gap-1'>
  <input type="radio" id="newest" name="price" value="newest" />
  <label htmlFor="newest" className='flex items-center gap-1'> Newest </label>
</div>





</div>

</div>
<div className='mt-4 p-2 flex justify-center w-full '>
<button className='flex items-center p-2 px-3 bg-black text-white font-bold rounded-md gap-2'>Reset <BiRefresh /> </button>
</div>


</div>


   <div className='lg:w-5/6'>
{allhoteldata && allhoteldata.isLoading && <div className='h-[70vh] flex justify-center items-center'>
  
  <h4>Loading... </h4>
  </div>}

<div className='p-4 flex flex-col gap-3'>
  {allhotel &&!allhoteldata.isLoading&&  !allhotel.length && <div className='text-center text-4xl p-10 '>
      Hotels not <span className='text-red-800'>Found !</span>
    </div>}
{allhotel && !allhoteldata.isLoading && allhotel.map((hotel,index_num)=>{
  
  return(
  <div
    key={hotel.id}
    className="myshadow bg-white border hover:border-blue-600  mb-5"
  >
    {showimg==index_num &&
      <div className='fixed top-16  left-0 z-40 w-full  h-[90vh] border-8 border-white bg-white overflow-scroll grid grid-cols-3 gap-2'>
<MdOutlineCancel onClick={()=>setshowImg(null)} className='fixed top-24 cursor-pointer right-10 text-orange-500 text-5xl' />
{hotel.hotelDetails.HotelDetails[0].images.map((imgs)=>{
  return(
<img src={imgs}  className='h-[25rem] w-full'/>
  )
})}
</div>}

    <div className="block md:flex relative p-5">
        <div className="relative">
          <div className="relative">
            <img
              src={hotel.hotelDetails.HotelDetails[0].images ?(hotel.hotelDetails.HotelDetails[0].images[0] || "/images/not_found_img.png"):"/images/not_found_img.png"}
              alt="hotelImg"
             
              className="object-cover w-full h-[10rem] lg:w-[35rem] lg:h-[15rem] rounded-md"
            />
            <div className="absolute bottom-2 right-2">
              <button className="bg-blue-600 text-white rounded-full w-20 h-8 flex items-center justify-center">
                <span className="text-xs flex items-center gap-2">
                  Share <FaShareAlt />{" "}
                </span>
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start mt-2 space-x-2">
            {hotel.hotelDetails.HotelDetails[0].images && hotel.hotelDetails.HotelDetails[0].images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative rounded-sm">
                <img
                  src={image}
                  alt={`hotel_image_${index + 1}`}
                  //  onMouseEnter={()=>hotel.HotelDetails.images[0]=image}
                  className="object-cover rounded-sm h-[3rem] w-[5rem]"
                />
                {index === 3 && (
                  <span onClick={()=>setshowImg(index_num)}  className= " cursor-pointer absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-xs rounded-sm">
                    View All
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      <div className="flex-1 pl-0 md:pl-5">
        <div className=" my-5 md:my-0 flex justify-between items-center">
          <p className="text-base md:text-2xl font-black">{hotel.hotelDetails.HotelDetails[0].HotelName}</p>
          <div>
            <div className="flex items-center">
              <span className="bg-blue-500 text-white px-2 text-sm rounded-full">
                {hotel.hotelDetails.HotelDetails[0].HotelRating} 
              </span>
              <span className=" ml-2 text-blue-600">
                {hotel.hotelDetails.HotelDetails[0].HotelRating}
              </span>
            </div>
            <div className="hidden md:flex items-center justify-center mt-2">
              {renderStars(hotel.hotelDetails.HotelDetails[0].HotelRating)}
            </div>
          </div>
        </div>

        <div className="text-gray-500">
          <span className="text-blue-600">{hotel.hotelDetails.HotelDetails[0].Address}</span> |{" "}
          {hotel.hotelDetails.HotelDetails[0].distance}
        </div>

        <div className="mt-2 hidden md:flex space-x-4 text-gray-500">
        
        </div>
       
       {    hotel.searchResults.Status.Code==200 ? hotel.searchResults.HotelResult[0].Rooms.map((items_price)=>{
       
  return(
    <>
     <div className="flex items-end justify-between">
        <div className="mt-4 ">
          <p className="text-xl font-black">₹{Math.floor(items_price.TotalFare-items_price.TotalTax)}</p>
          <p className="text-gray-500">
            + ₹{items_price.TotalTax} taxes & fees
          </p>
          <p className="text-sm text-gray-500 mt-2">Per Night</p>
        </div>
        <Link href={`/hotelSearchCheckin/cityName=${cityName}&checkin=${checkIn}&checkout=${checkOut}&adult=${adults}&child=${children}&roomes=${roomes}&hotelcode=${hotel.searchResults.HotelResult[0].HotelCode}`} className="bg-orange-600 text-white rounded-full w-28 h-8 flex items-center justify-center">
                <span className="text-xs flex items-center gap-2">
                  View Room
                </span>
              </Link>
        </div>
        <div className="hidden md:block  bg-[#ECF5FE] px-5 py-2 text-sm shadow-lg">
      <span className="text-gray-700">
        Exclusive offer on Canara Bank Credit Cards. Get INR 241 off
      </span>
    </div>
    </>
  )
}):  <div className=' p-5 mt-10'>
  No Available rooms 
</div> } 
       
       
        </div>

        </div>

      
    
   
   
  
    
    
</div>)
})
}

{  hotalbackup && hotalbackup.info && seepagination &&

<div className='flex justify-between p-2 px-5'>
  <button className={`${page==0?"bg-gray-700 cursor-not-allowed":"bg-black" } text-white font-semibold p-2 px-3 rounded-md `} onClick={handelPrevpage}> Prev</button>
  <button className={`${page>=hotalbackup.info.count-1?"bg-gray-700 cursor-not-allowed":"bg-black" } text-white font-semibold p-2 px-3 rounded-md `} onClick={handelNextpage}> Next</button>

</div>
} 
</div> 


   </div>


   </div>
    
   </>
  )
}


export default Comp
