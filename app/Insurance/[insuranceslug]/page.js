import React from 'react'
import InsurancCompo from "./InsurancCompo"
const page = ({params: { insuranceslug }}) => {
  return (
    <>
    
<InsurancCompo slug={insuranceslug} />
    </>
  )
}

export default page