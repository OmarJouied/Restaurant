import Image from 'next/image'
import React from 'react'

const OrderState = ({ description, image }: { image: string; description: string }) => {
  return (
    <div className="bg-white rounded-[19px] text-black/60 flex items-center shadow-[4px_4px_4px_rgb(0,0,0,.25)] w-[32rem]">
      <div className="p-8">
        <Image src={image} alt="order state image" width={1} height={1} className="w-16 h-16" />
      </div>
      <p>{description}</p>
    </div>
  )
}

export default OrderState