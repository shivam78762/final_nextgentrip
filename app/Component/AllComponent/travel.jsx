'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TravelBlogCard = ({ title, description, imageUrl, link }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <Image className="w-full" src={imageUrl} alt={title} width={400} height={250} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {/* <Link href={link}>
              <p className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full">Read More</p>
            </Link> */}
          </div>
        </div>
      );
}

export default TravelBlogCard
