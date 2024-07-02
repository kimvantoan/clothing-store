import React from "react";
import formatPrice from "../utils/FormatPrice";
import { Link } from "react-router-dom";
const OrderItem = () => {
  return (
    <div className="py-7 border-b-2">
      <div className="bg-#F6F6F6 rounded-lg py-7 px-11 mb-7">
        <h2 className="font-semibold text-xl text-#3C4242">
          Order no: #123456789
        </h2>
        <div className="grid grid-cols-2 text-#807D7E text-sm mt-3 font-medium">
          <p>
            Order Date :{" "}
            <span className="text-#BEBCBD font-normal">
              2 June 2023 2:40 PM
            </span>{" "}
          </p>
          <p>
            Estimated Delivery Date :{" "}
            <span className="text-#BEBCBD font-normal">8 June 2023</span>{" "}
          </p>
          <p>
            Order Status :{" "}
            <span className="text-#BEBCBD font-normal">Inprogress</span>{" "}
          </p>
          <p>
            Payment Method :{" "}
            <span className="text-#BEBCBD font-normal">Cash on delivery</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <img src="images/product.png" className="w-20 h-24" alt="" />
          <div className="font-semibold text-#3C4242">
            <p>Black Printed T-shirt</p>
            <p>
              Colour : <span className="text-#807D7E">Pink</span>{" "}
            </p>
            <p>
              Qty : <span className="text-#807D7E">1</span>
            </p>
            <p>
              Total : <span className="text-#807D7E">{formatPrice(20)}</span>
            </p>
          </div>
        </div>
        <Link to={'/order/1'} className="px-7 py-3 bg-#8A33FD rounded-lg text-white font-medium text-lg">View Detail</Link>
      </div>
    </div>
  );
};

export default OrderItem;
