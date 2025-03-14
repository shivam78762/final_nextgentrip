import React from 'react'
import Compo from './Compo'

const page = ({params: { slug } }) => {

  return (
    <Compo slug={slug}>

    </Compo>
  )
}

export default page
