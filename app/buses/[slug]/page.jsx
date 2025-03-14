import React from 'react'
import BusCompo from './BusCompo'

const page = ({ params: { slug } }) => {
  return (
   <BusCompo  slug={slug} />
  )
}

export default page
