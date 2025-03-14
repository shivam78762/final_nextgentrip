import React from 'react'
import SelectSeaCompo from './SelectSeaCompo'

const page = ({params:{seatslug}}) => {
  return (
    <div>
      <SelectSeaCompo slug={seatslug} />
    </div>
  )
}

export default page
