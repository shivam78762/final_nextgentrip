"use client"
import React from 'react'
import { development } from "./Component/common";
import Navbar from "./Component/AllComponent/Navbar";
import Footer from "./Component/Footer";
import Topbar from "./Component/Topbar";
import Providerfile from "./Component/Store/Providerfile";
import Maintenance from "./Component/AllComponent/Maintenance"

import { usePathname } from 'next/navigation';




const LayoutCompo = ({ children }) => {
  const path = usePathname()


  return (
    <>

      <>  <Topbar />

        <div className="block md:hidden">
          {/* <Navbar /> */}
        </div> </>
      {children}


      <Footer />


    </>
  )
}




export default LayoutCompo
