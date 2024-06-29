import React, { useState } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import formatPrice from '../utils/FormatPrice'
const CartItem = () => {
  const [count, setCount] = useState(1)
  return (
    <div className="grid grid-cols-8 py-7 border-b border-#BEBCBD items-center text place-items-center">
      <div className="flex gap-5 col-span-3 place-self-start">
        <img src="images/product.png" className="rounded-xl w-24 h-28" alt="" />
        <div>
          <p className="font-bold text-lg text-#3C4242">Blue Flower Print Crop Top</p>
          <p className="font-medium text-sm text-#807D7E">Color : Yellow</p>
          <p className="font-medium text-sm text-#807D7E">Size : M</p>
        </div>
      </div>
      <p className="font-bold text-lg text-#3C4242">{formatPrice(20)}</p>
      <div className="flex gap-5 items-center font-medium text-lg bg-#F6F6F6 rounded-xl">
        <button className="px-4 py-2" onClick={count>1?()=>setCount(prev=>prev-1):''}>-</button>
        <span>{count}</span>
        <button className="px-4 py-2" onClick={()=>setCount(prev=>prev+1)}>+</button>
      </div>
      <p className="font-bold text-lg text-#BEBCBD">FREE</p>
      <p className="font-bold text-lg text-#3C4242">{formatPrice(20)}</p>
      <IoTrashBinOutline className="w-6 h-6 text-#8A33FD cursor-pointer active:opacity-80"/>
    </div>
  );
};

export default CartItem;
