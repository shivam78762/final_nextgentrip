import React from 'react'
import PackageSlugCompo from "./PackageSlugCompo"
const page = ({params:{slug2}}) => {
  return (
    <div>
      <PackageSlugCompo slug={slug2} />
    </div>
  )
}

export default page
