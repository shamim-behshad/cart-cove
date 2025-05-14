import React from 'react'

function CartItem() {
  return (
    <div className="grid grid-cols-12  mb-4">
    <img
    className="col-span-2 rounded-xl"
      src={
        "https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png"
      }
    />
    <div className="col-span-10 pl-4">
      <h2 className="font-bold text-lg">product name</h2>
      <p>Quantity: <span>3</span></p>
      <p>Price: <span>43$</span></p>
      <div className="mt-2">
      <button className="bg-sky-500 px-3 py-2 rounded-xl cursor-pointer">
        +
      </button>
      <span className="mx-4">2</span>
      <button className="bg-sky-500 px-3 py-2 rounded-xl cursor-pointer">
        -
      </button>
    </div>
    </div>
  </div>
  )
}

export default CartItem