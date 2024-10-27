"use client"

import { order } from '@/actions/order';
import React, { useState } from 'react'

const Order = ({ id, price }: { id: string; price: number }) => {
  const [orderData, setOrderData] = useState({ food: id, number: 1, place: 1 })

  return (
    <>
      <div className="py-4 flex justify-between items-center flex-wrap gap-2.5">
        <div className="flex items-center gap-2.5">
          <label htmlFor="numero" className="font-semibold">Numero</label>
          <input name="" id="numero" onChange={({ target: { value } }) => setOrderData(prev => ({ ...prev, number: +value }))} value={orderData.number} className="bg-black rounded-lg p-2 w-[5ch] text-center text-white" />
        </div>
        <p className="text-black/60 font-semibold">${+(price * orderData.number).toFixed(2)}</p>
      </div>
      <div className="py-4 flex justify-between items-center gap-2.5">
        <div className="flex items-center gap-2.5">
          <label htmlFor="place" className="font-semibold capitalize">place</label>
          <input name="" id="place" onChange={({ target: { value } }) => setOrderData(prev => ({ ...prev, place: +value }))} value={orderData.place} className="bg-black rounded-lg p-2 w-[5ch] text-center text-white" />
        </div>
        <button onClick={() => order(orderData)} className="bg-success text-white py-2 px-4 rounded-lg">demander</button>
      </div>
    </>
  )
}

export default Order