import React from "react";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import WishItem from "../components/WishItem";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Wishlist = () => {
  return (
    <Layout>
      <div className="flex gap-x-12 mx-24 my-10">
        <SideBar />
        <div className="w-full">
          <h1 className="font-bold text-3xl text-#3C4242">Wishlist</h1>
          <div className="">
            <WishItem />
            <WishItem />
            <WishItem />
          </div>
        </div>
        <div className="hidden flex-col items-center gap-10 py-20 border-2 px-9">
          <div className="p-14 bg-green-50 rounded-full">
            <FaRegHeart className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="font-bold text-4xl text-#3C4242">Your wishlist is empty.</h2>
          <p className="font-medium text-#807D7E">
            You don’t have any products in the wishlist yet. You will find a lot
            of interesting products on our Shop page.
          </p>
          <Link to={"/"} className="px-12 py-3 bg-#8A33FD rounded-xl text-white text-lg font-semibold">
            Continue Shopping
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
