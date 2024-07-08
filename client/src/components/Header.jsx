import React from "react";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className="flex justify-between items-center px-24 py-5 gap-20  border-b-2">
      <NavLink to={"/"}>
        <img src={logo} alt="" />
      </NavLink>

      <div className="flex gap-10 text-xl font-medium text-#807D7E">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return (
              "cursor-pointer" + (isActive ? " text-#2A2F2F font-bold" : "")
            );
          }}
        >
          Home
        </NavLink>

        <NavLink
          to={"/shop"}
          className={({ isActive }) => {
            return (
              "cursor-pointer" + (isActive ? " text-#2A2F2F font-bold" : "")
            );
          }}
        >
          Shop
        </NavLink>

        <NavLink
          to={"/men"}
          className={({ isActive }) => {
            return (
              "cursor-pointer" + (isActive ? " text-#2A2F2F font-bold" : "")
            );
          }}
        >
          Men
        </NavLink>
        <NavLink
          to={"/women"}
          className={({ isActive }) => {
            return (
              "cursor-pointer" + (isActive ? " text-#2A2F2F  font-bold" : "")
            );
          }}
        >
          Women
        </NavLink>
      </div>

      <div className="flex py-3 px-5 gap-1 bg-#F6F6F6 rounded-lg ">
        <CiSearch className="w-6 h-6 text-#807D7E cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="bg-#F6F6F6 outline-none"
        />
      </div>

      <div className="flex gap-3">
        <NavLink
          to={"/wishlist"}
          className={({ isActive }) => {
            return (
              "cursor-pointer p-3 rounded-lg " +
              (isActive ? " bg-#8A33FD text-white" : "bg-#F6F6F6 text-gray-500")
            );
          }}
        >
          <CiHeart className={`w-6 h-6`} />
        </NavLink>
        <NavLink
          to={"/order"}
          className={({ isActive }) => {
            return (
              "cursor-pointer p-3  rounded-lg " +
              (isActive ? " bg-#8A33FD text-white" : "bg-#F6F6F6 text-gray-500")
            );
          }}
        >
          <CiUser className={`w-6 h-6  `} />
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) => {
            return (
              "cursor-pointer p-3  rounded-lg " +
              (isActive ? " bg-#8A33FD text-white" : " bg-#F6F6F6 text-gray-500")
            );
          }}
        >
          <CiShoppingCart
            className={`w-6 h-6 
            }`}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
