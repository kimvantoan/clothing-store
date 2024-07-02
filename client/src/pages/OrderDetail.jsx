import React from "react";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import { IoIosArrowBack } from "react-icons/io";
import formatPrice from "../utils/FormatPrice";
import { AiOutlineClose } from "react-icons/ai";
import product from '../assets/product.png'
const OrderDetail = () => {
  return (
    <Layout>
      <div className="flex gap-x-12 mx-24 my-10">
        <SideBar />
        <div className="w-full">
          <div className="flex items-center gap-3 cursor-pointer mb-12">
            <IoIosArrowBack className="w-6 h-6" />
            <h1 className="font-bold text-3xl text-#3C4242">Order Details</h1>
          </div>
          <div className="bg-#F6F6F6 rounded-lg py-7 px-11 mb-7 grid grid-cols-2 place-items-start gap-2">
            <h2 className="font-semibold text-xl text-#3C4242">
              Order no: #123456789
            </h2>
            <p className="place-self-end font-semibold text-lg text-#807D7E">
              Total: <span className="text-#3C4242">{formatPrice(140)}</span>
            </p>
            <p className="text-#807D7E">
              Placed On <span>2 June 2023 2:40 PM</span>{" "}
            </p>
          </div>

          <div className="flex px-7 justify-between mt-12 mx-32">
            <div className="flex flex-col gap-4 items-center">
              <div className="w-6 h-6 rounded-full bg-#3C4242"></div>
              <div className="text-#3C4242 text-sm font-semibold">
                Order Placed
              </div>
            </div>
            <div className="bg-#BEBCBD w-1/5 mt-2 h-1"></div>
            <div className="flex flex-col gap-4 items-center">
              <div className="w-6 h-6 rounded-full bg-#BEBCBD"></div>
              <div className="text-#BEBCBD text-sm font-semibold">
                Inprogress
              </div>
            </div>
            <div className="bg-#BEBCBD w-1/5 mt-2 h-1"></div>
            <div className="flex flex-col gap-4 items-center">
              <div className="w-6 h-6 rounded-full bg-#BEBCBD"></div>
              <div className="text-#BEBCBD text-sm font-semibold">shipped</div>
            </div>
            <div className="bg-#BEBCBD w-1/5 mt-2 h-1"></div>
            <div className="flex flex-col gap-4 items-center">
              <div className="w-6 h-6 rounded-full bg-#BEBCBD"></div>
              <div className="text-#BEBCBD text-sm font-semibold">
                Delivered
              </div>
            </div>
          </div>

          <div className="bg-#F6F6F6 rounded-lg py-6 px-7 font-semibold mx-14 my-12">
            <span className="text-#807D7E">8 June 2023 3:40 PM</span> <span className="text-#3C4242 ml-9"> Your order has been successfully verified.</span>
          </div>

          <div className="bg-#F6F6F6 rounded-lg">

            <div className="grid grid-cols-6 place-items-center py-6 px-10 ">
                <img src={product} className="w-24 h-28" alt="" />
                <div className="col-span-2 place-self-start font-semibold text-xl text-#3C4242">
                    <p>Printed white cote</p>
                    <p>Color : <span className="text-#807D7E">White</span></p>
                </div>
                <p className="font-semibold text-xl text-#3C4242">Qty : <span className="text-#807D7E">1</span></p>
                <p className="font-semibold text-xl text-#807D7E">{formatPrice(20)}</p>
                <AiOutlineClose className="w-6 h-6"/>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetail;
