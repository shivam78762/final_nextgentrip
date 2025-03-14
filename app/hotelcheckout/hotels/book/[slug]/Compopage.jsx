"use client"
import React, { useState,useEffect } from 'react'
import { FaAudioDescription } from 'react-icons/fa'
import { FaStar } from "react-icons/fa6";
import { FaCheckCircle ,FaMailBulk} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import axios from 'axios';
import { apilink ,imgurl} from '../../../../Component/common';


const Compopage = ({slug}) => {
  const hoteldata={
  
    hotelName:"Green Tree Hotel Munnar",
    Address:"GreenTrees Resort,Chithirapuram P O Dobipalam, Munnar-685 565",
 codinates:{lat:30.725932 ,lang: 76.771151},
    imgSrc:[ "/greenhotel/imgpsh_fullsize_anim.jfif","/greenhotel/imgpsh_fullsize_anim.jfif","/greenhotel/imgpsh_fullsize_anim.jfif"],
    city: "Delhi",
    rating:4,
    description:"typesetting industry. Lorem Ipsum has been",

    Links:[],
   rooms:[
    {
    image:"/greenhotel/imgpsh_fullsize_anim.jfif",
roomeType:"Deluxe Room",
price:6372,
other:[{type:"Room Only",services:["Free Wi-Fi","Breakfast not included","Free Cancellation"],price:6372,},
       {type:"Room With Breakfast",services:["Free Wi-Fi","Breakfast  included","Free Cancellation"],price:7072,},
       {type:"Room Only",services:["Free Wi-Fi","Parking","Express check-in","Drinking water","Breakfast  included","Free Cancellation",],price:8372,},
       {type:"Room With Breakfast",services:["Free Wi-Fi","Breakfast","Parking","Express check-in","Drinking water","Breakfast  included","Free Cancellation",],price:8772,},
    ]

  },
   {
    image:"/greenhotel/imgpsh_fullsize_anim.jfif",
    roomeType:"Executive King",
    other:[{type:"Room Only",services:["Free Wi-Fi","Breakfast not included","Free Cancellation"],price:6672,},
    {type:"Room With Breakfast",services:["Free Wi-Fi","Bed and Breakfast  included","Free Cancellation"],price:7472,}]  
  }


],
features:["wifi","gym","pool","hot bath","parking","free Lunch","sea view","wedding hall","smoking area" ,"Bar"],
contect :{number1:"+91 9876543210",number2:"+91 9876543320",mail:"nmsfwe@mail.com"},
returnPolicy:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
hotelPolicy:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}
const [hotelinfo,sethotelinfo]=useState()

useEffect(()=>{
const gethotel=async()=>{
  const res=await axios.get(`${apilink}/hotel/single/${slug}`)
  sethotelinfo(res.data)
}
gethotel()

},[])



 
 





const [hotelinfoIndex,sethotelinfoIndex]=useState(0)
  return (
    <div className='   lg:px-20 xl:px-32 py-4 bg-[#dbdbdb86]'>
{ hotelinfo && hotelinfo.hotel &&
<div className='shadow w-full p-3 rounded-md bg-white'>
    <div className=''>
        <div className='flex gap-4 items-center text-sm my-1  '>
  <p className='text-2xl text-black font-bold '>{hotelinfo.hotel.property_name}</p> <div className='flex gap-1'>{Array.from({length:hotelinfo.hotel.rating}).map((star,key)=>(<FaStar key={key}/>))}</div>
  <p className='border-2 border-sky-300 px-3 text-sky-300'>Hotel</p>
  </div>

        <p className='text-gray-400'>
          <div dangerouslySetInnerHTML={{__html:hotelinfo.hotel.address}}></div>
          
          </p>

    </div>
    <div className='flex gap-3   flex-col lg:flex-row '>

      <div className='flex gap-1 w-full h-[20rem]'>
<div className='w-full  h-full'>
<img src={`${imgurl}/storage/${hotelinfo.hotel.hotel_img[0]}`} className=' h-full w-full rounded-md'/>
</div>

<div className='w-44 justify-around  gap-1 flex flex-col '>
{hotelinfo.hotel.hotel_img.slice(0,3).map((img,index)=>(<img src={`${imgurl}/storage/${img}`} key={index}  className=' rounded-md h-[6rem]' />))}
</div>

      </div>




<div className=''>

<div  className='flex justify-between'>


   <p className='text-2xl font-bold'>{hoteldata.rooms[0].roomeType}</p>
   
   <div className='flex '>

 
   <p className='text-2xl font-bold '>
   ₹{hotelinfo.hotel.price}

   </p>
   <p className='text-red-500 text-sm'>
    <s>
    ₹{   Number(hotelinfo.hotel.price*10)/100 +Number(hotelinfo.hotel.price)}  
    </s>
   </p>
 
   </div>


</div>



<div className='my-3'>
<p className='text-xl font-semibold my-1 '>Address:</p>
<p>
<div dangerouslySetInnerHTML={{__html:hotelinfo.hotel.address}}></div>

</p>

</div>





<div className='my-2'>
    <p className='text-xl font-semibold my-1 '>Services:</p>

<div className=' flex flex-wrap gap-3 '>

{hotelinfo.amenities.basic_facilities.map((item,index)=>(<div key={index} className='flex gap-1 px-3 rounded-md bg-[#87cfeb54] items-center'>
<FaCheckCircle className='text-[#5da05d]' /> <p>{item}</p>
</div>))}
{hotelinfo.amenities.common_areas.map((item,index)=>(<div key={index} className='flex gap-1 px-3 rounded-md bg-[#87cfeb54] items-center'>
<FaCheckCircle className='text-[#5da05d]' /> <p>{item}</p>
</div>))}

</div>

</div>






</div>




<div>

</div>







    </div>

</div>
}




<div className='shadow w-full p-2 rounded-md my-5 flex   flex-wrap lg:gap-7 text-black md:text-lg font-semibold bg-white'>
    
    {["Roomes","About","Location","Contact","Rating"].map((item,index)=>(<p onClick={()=>sethotelinfoIndex(index)} key={index} className={` border-b-2  ${ hotelinfoIndex==index?"text-orange-500 border-b-orange-500 ":" border-b-transparent"}hover:text-orange-500 hover:border-b-orange-500   py-1 px-3 cursor-pointer`}   >{item}</p>))}


</div>

<div className='shadow w-full p-3 rounded-md bg-white'>
  
  
  {hotelinfoIndex ==0 && hotelinfo  && hotelinfo.rooms  && 
   hotelinfo.rooms.map((room,index)=>{
    return(
    <div key={index} className='flex flex-col md:flex-row w-full border-b-2 border-gray-700' >
<div>
  <p className='text-2xl font-bold my-2'>{room.room_type}</p>
         
       <img src={`${imgurl}/storage/${room.image[0]}`}  className=' h-[10rem] w-[40rem]'/>
            
</div>
<div className='flex  flex-col  my-2 md:p-6 gap-10 w-full'>



    <div  className='flex justify-between items-end  md:items-start border-b-2 border-b-[#b0e9ffb5] pb-3'>
      <div>
        <p className='text-lg font-semibold'>{room.bed_type}</p>
        <div className='grid   md:grid-cols-2 gap-2'>
      {room.features.map((feture)=><div className='flex items-center gap-2 text-green-600'><FaCheckCircle className=''/> <p>{feture}</p></div>)}
      </div>
      Occupancy:
{room.max_occupancy}
    </div>
<div className='flex items-start gap-2'>
  <p className='text-2xl font-bold'>₹{room.price}</p> <s className='text-sm text-red-700 hidden md:block'>₹{((Number(room.price) * 15) / 100 + Number(room.price)).toString().split(".")[0]} </s>
</div>

<div>
  <button className='bg-orange-500 text-white font-semibold p-1 px-4 rounded-md '>
    Book Now
  </button>
</div>

    </div>

  

</div>
   </div>)})}




{
  hotelinfoIndex==1 &&  hotelinfo  && hotelinfo.rooms && <div className='p-4'>

<p className='text-xl font-semibold my-2'>Hotel  Policy</p>
<div  dangerouslySetInnerHTML={{__html:hotelinfo.hotel.terms}}></div>


    
<p className='text-xl font-semibold my-2'>Hotel Refund Policy</p>
<div 


>


</div>
<p className='text-xl font-semibold my-2'>Description</p>
<div 
dangerouslySetInnerHTML={{
  __html: hotelinfo.hotel.hotel_des,
}}
></div> 
  </div>
}




{
hotelinfoIndex==2 && hotelinfo  && hotelinfo.hotel && <div >

<div><p className='text-xl font-semibold'>Address:</p>
<p className='my-2'>
  <div dangerouslySetInnerHTML={{__html:hotelinfo.hotel.address}}></div>

  
  </p>


</div>


<iframe 
            
            allowFullScreen=""
             loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
             className="w-full   md:h-[475px]"
            
            src={`http://maps.google.com/maps?q=${hoteldata.codinates.lat},${hoteldata.codinates.lang}&z=15&output=embed`}
           ></iframe>
          

</div>
}


{hotelinfoIndex==3 && hotelinfo  && hotelinfo.rooms && <div className='flex  flex-col md:flex-row  p-2'>

  
  <div className="p-2   m-8 border-t border-gray-200 text-center  flex items-center flex-col gap-2">
    <p className='flex items-center gap-2'><IoCallSharp className='text-blue-700' />  {hoteldata.contect.number1}</p>
    <p className='flex items-center gap-2'><IoCallSharp  className='text-blue-700'/>  {hoteldata.contect.number2}</p>
    <p className='flex items-center gap-2'><FaMailBulk  className='text-blue-700'/>  {hoteldata.contect.mail}</p>

                
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
               
              </div>

    <div>
      
      <section className="text-gray-700 body-font relative">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  

</div>

}




</div>


    
    </div>
  )
}

export default Compopage
