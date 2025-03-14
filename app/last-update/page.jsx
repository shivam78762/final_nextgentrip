"use client"
import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { apilink, imgurl } from '../Component/common'
import { IoMdArrowDropdown ,IoMdArrowDropup} from "react-icons/io";

const page = () => {
const [updatedData,setUpdatedDate]=useState()
const [showDes,setShowDes]=useState(null)

useEffect(()=>{
const fetchapi=async()=>{

const data=await axios.get(`${apilink}/latestUpdate`)
setUpdatedDate(data.data)

}
fetchapi()

},[ ])

  return (
    <div>

 


      {updatedData && <div className=' p-10  px-20'>
        <h2 className='mb-[1rem] text-2xl font-bold'>Daily Update on Site</h2>
           {updatedData.map((info,index)=>
            <div  key={index} className=' my-4'>
           
           <div className='flex w-full items-center justify-between p-3 shadow-lg  rounded-md border border-cyan-600'>
<div className='flex items-center gap-9 w-full'>
<img src={`${imgurl}/storage/${info.image}`} alt=""  className='w-28 rounded-full '/>
<p className='text-2xl font-bold'>{info.title.toUpperCase()}</p>
</div>
<div className='flex items-center gap-3 '>
  <p className='text-nowrap p-2 px-3 bg-[#ffff6f9c] rounded-lg border border-blue-500 '>{info.updated_at.split("T")[0]}</p>
  {showDes !=index&& <div className=' text-4xl text-cyan-600 cursor-pointer ' onClick={()=>setShowDes(index)}><IoMdArrowDropdown  /></div>}
  {showDes ==index&& <div className=' text-4xl text-cyan-600 cursor-pointer '  onClick={()=>setShowDes(null)}><IoMdArrowDropup  /></div>}

  
</div>
<div>

</div>

</div>     

{showDes==index &&

  <div className=' p-3 grid grid-cols-2 items-center gap-4 shadow-lg  rounded-md border border-cyan-600 w-full mt-4 '>
<div>
<img src={`${imgurl}/storage/${info.image}`} alt=""  className=' w-full h-[25rem] '/>

</div>
<div className='mt-2 ' dangerouslySetInnerHTML={{__html:info.des}}>

</div>
  </div>

}

  </div>)}



        
        
        </div>}
    </div>
  )
}

export default page
