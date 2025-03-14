import React from 'react'

import HotelSlugComp from './HotelSlugComp'

const page = ({ params: {hotel_slug } }) => {
  return (
  <>
 <HotelSlugComp slugs={hotel_slug}/>

</>
  )
}

export default page
