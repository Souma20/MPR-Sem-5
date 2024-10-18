"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductImages = ({items}:{items:any}) => {
  const [index,setIndex] = useState(0)

  return (
    <div className=''>
      <div className='h-[500px] relative'>
            <Image src={items[index].image?.url}
            alt =""
            fill sizes='50vw' 
            className="object-cover rounded-md"  />
      </div>
    </div>
  )
}

export default ProductImages
