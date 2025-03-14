

"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [cityName, setCityName] = useState("")

  
  return (
    <div>
       <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4">
      {[
        "Andaman", "Dubai", "Bengaluru", "Bhutan", "Bali", "Gujarat", "Goa",
        "HimachalPradesh", "Jaipur", "Kashmir", "Maharashtra", "Leh", 
        "Kerala", "Lakshdeep", "Mussoorie", "Nepal", "Rajasthan", "Sikkim",
        "SriLanka", "Singapore", "Switzerland", "Thailand", "Uttarakhand", "Vietnam"
      ].map(explore => (
        <Link key={explore} href={`/${explore}`}>
          <button 
            onClick={() => setCityName(explore)} 
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {explore}
          </button>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default page