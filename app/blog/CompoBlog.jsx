import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../Component/Store/slices/blogslice'
import Link from 'next/link'
import { imgurl } from '../Component/common'


const CompoBlog = () => {
    const dispatch= useDispatch()
    const state=useSelector(state=>state.blogslice)
    
      const [blogPosts,setblgposts] =useState()
    useEffect(()=>{dispatch(getBlogs())},[])
    useEffect(()=>{
      setblgposts(state.info)
    },[state])
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    
      };
  return (
    <div className="flex flex-wrap gap-6 justify-center"> 

    {blogPosts && blogPosts.slice(0, 4).map((info,index)=>(
        <Link href={`/blogView/${info.slug}`} className="event-box-main flex flex-wrap   items-center justify-center gap-3">
       <div className='absolute bottom-3 z-50 flex flex-col gap-3 left-3'>
          <img src={`${imgurl}/${info.blog_image}`}  className='h-full '/>
          <div>
            <h2 className='text-white font-semibold' >
            {info.blog_text}
            </h2>
            <span className=' p-2 text-sm w-fit text-white bg-[#2196f3] rounded-md'>
          {new Date(info.created_at).toLocaleString('en-US', options)}

            </span>
          </div>
        </div>
        
      </Link>
    ))}
  
  
  </div>
  )
}

export default CompoBlog