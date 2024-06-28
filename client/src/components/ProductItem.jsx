import React from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductItem = () => {
  return (
    <Link to={'/products  '} className="inline-block cursor-pointer">
      <div className="relative rounded-xl overflow-hidden w-72 mb-7">
        <div className="absolute  p-2 bg-white rounded-full top-6 right-6">
          <CiHeart />
        </div>
        <img src="images/signin.png" alt="" />
      </div>
      <div className="flex justify-between items-center ">
        <div >
          <p className="font-semibold text-#3C4242">Leaves Pattern White...</p>
          <p className="font-medium text-sm text-#807D7E">paypal’s Brand</p>
        </div>
        <div className="px-5 py-2 font-bold text-sm text-#3C4242 bg-#F6F6F6 rounded-lg">$77.00</div>
      </div>
    </Link>
  );
};

export default ProductItem;
