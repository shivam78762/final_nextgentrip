import { apilink } from '../../Component/common'
import axios from 'axios'
import React from 'react'
import Blogcomp from './Blogcomp'

const page = async ({ params: { slug } }) => {
    let data=[]
  
try {
    
const res= await axios.get(`${apilink}/blog/${slug}`, {
    headers: {
        'Content-Type': 'application/json',
    },
});
data=res.data

} catch (error) {
    console.error('Error fetching data:', error);
}



  return (
    <div>
<Blogcomp  data={data}/>
    </div>
  )
}

export default page
