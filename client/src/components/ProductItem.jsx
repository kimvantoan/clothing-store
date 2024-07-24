import React from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import formatPrice from '../utils/FormatPrice'
const ProductItem = ({product}) => {
  return (
    <div className="relative rounded-lg">
      <div className="absolute p-2 bg-white rounded-full top-6 right-6 cursor-pointer border-2">
        <CiHeart />
      </div>
      <Link to={`/products/${product._id}`} className="inline-block cursor-pointer w-72">
        <div className="rounded-xl overflow-hidden h-96 mb-4">
          <img src={`http://localhost:3000/${product.image}`} className="size-full" alt="" />
        </div>  
        <div className="flex justify-between items-center ">
          <div>
            <p className="font-semibold text-#3C4242 ">
              {product.title}
            </p>
            <p className="font-medium text-sm text-#807D7E">{product.brand}</p>
          </div>
          <div className="px-5 py-2 font-bold text-sm text-#3C4242 bg-#F6F6F6 rounded-lg">
            {formatPrice(product.price)}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
