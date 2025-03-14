import React from 'react'
import HolidayCompo from './HolidayCompo'

const page = ({params:{slug}}) => {
  return (
    <div>
      <HolidayCompo slug={slug} />
    </div>
  )
}

export default page
