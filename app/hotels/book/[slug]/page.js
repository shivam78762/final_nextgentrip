import React from 'react'
import Compopage from "./Compopage"
const page = ({params:{slug}}) => {
    const newSlug = slug;
  return (
    <div>
    <Compopage  slug={newSlug}/>
    </div>
  )
}

export default page
