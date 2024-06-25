import React, { useState } from "react";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
const Header = () => {
  const [cur, setCur] = useState("Shop");
  console.log(cur);
  return (
    <div className="flex justify-between items-center px-24 py-8 gap-20  border-b-2">
      <img src="images/logo.png" alt="" />

      <ul className="flex gap-10 text-xl font-medium text-#807D7E">
        <li
          onClick={() => setCur("Shop")}
          className={`${
            cur === "Shop" ? "text-#3C4242 font-bold" : ""
          } cursor-pointer`}
        >
          Shop
        </li>
        <li
          onClick={() => setCur("Men")}
          className={`${
            cur === "Men" ? "text-#3C4242 font-bold" : ""
          } cursor-pointer`}
        >
          Men
        </li>
        <li
          onClick={() => setCur("Women")}
          className={`${
            cur === "Women" ? "text-#3C4242 font-bold" : ""
          } cursor-pointer`}
        >
          Women
        </li>
        <li
          onClick={() => setCur("Combos")}
          className={`${
            cur === "Combos" ? "text-black font-bold" : ""
          } cursor-pointer`}
        >
          Combos
        </li>
        <li
          onClick={() => setCur("Jogger")}
          className={`${
            cur === "Jogger" ? "text-black font-bold" : ""
          } cursor-pointer`}
        >
          Jogger
        </li>
      </ul>

      <div className="flex py-3 px-5 gap-1 bg-#F6F6F6 rounded-lg ">
        <CiSearch className="w-6 h-6 text-#807D7E cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="bg-#F6F6F6 outline-none"
        />
      </div>

      <div className="flex gap-3">
        <div
          onClick={() => setCur("Heart")}
          className={` cursor-pointer p-3  rounded-lg ${
            cur === "Heart" ? "bg-#8A33FD text-gray-500" : "bg-#F6F6F6"
          }`}
        >
          <CiHeart
            className={`w-6 h-6  ${cur === "Heart" ? " text-white" : ""}`}
          />
        </div>
        <div
          onClick={() => setCur("User")}
          className={` cursor-pointer p-3  rounded-lg ${
            cur === "User" ? "bg-#8A33FD text-gray-500" : "bg-#F6F6F6"
          }`}
        >
          <CiUser
            className={`w-6 h-6  ${cur === "User" ? " text-white" : ""}`}
          />
        </div>
        <div
          onClick={() => setCur("ShoppingCart")}
          className={` cursor-pointer p-3  rounded-lg ${
            cur === "ShoppingCart" ? "bg-#8A33FD text-gray-500" : "bg-#F6F6F6"
          }`}
        >
          <CiShoppingCart
            className={`w-6 h-6  ${
              cur === "ShoppingCart" ? " text-white" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
