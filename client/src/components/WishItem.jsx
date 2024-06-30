import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import formatPrice from "../utils/FormatPrice";
const WishItem = () => {
  return (
    <div className="grid grid-cols-7 place-items-center py-7 border-b border-#BEBCBD">
      <AiOutlineClose className="w-6 h-6 cursor-pointer active:scale-95" />

      <img src="images/product.png" className="w-24 h-28 rounded place-self-start" alt="" />
      <div className="font-bold text-xl text-#3C4242 col-span-3 place-self-start">
        <p>Blue Flower Printvavsvsdvsd </p>
        <p>
          Color : <span className="font-normal text-#807D7E">Yellow</span>
        </p>
        <p>
          Quantity : <span className="font-normal text-#807D7E">1</span>
        </p>
      </div>

      <p className="font-bold text-xl text-#807D7E">{formatPrice(20)}</p>

      <button className="px-7 py-3 bg-#8A33FD text-white rounded-xl active:opacity-80">
        Add to cart
      </button>
    </div>
  );
};

export default WishItem;
