import React, { useContext, useEffect } from "react";
import { TbShoppingBagCheck } from "react-icons/tb";
import { LuUser2 } from "react-icons/lu";
import { PiSignOutBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
const SideBar = () => {
  const { user,fetchUser } = useContext(StoreContext);
  
  useEffect(()=>{
    fetchUser()
  },[])
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/auth/logout",{ withCredentials: true });
      location.replace('/signin')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-72">
      <div className="flex gap-5 mb-3">
        <div className="rounded-xl border-l-4 border-#8A33FD"></div>
        <h2 className=" text-#3C4242 font-bold text-4xl">
          Hello {user?.firstname}
        </h2>
      </div>
      <p className="text-sm text-#807D7E mb-7">Welcome to your Account</p>
      <div>
        <NavLink
          to={"/order"}
          className={({ isActive }) => {
            return (
              "flex items-center text-lg font-semibold text-#807D7E gap-4 px-9 py-3  " +
              (isActive ? "border-l-2 border-#3C4242 bg-#F6F6F6" : "")
            );
          }}
        >
          <TbShoppingBagCheck />
          <p>My orders</p>
        </NavLink>
        <NavLink
          to={"/wishlist"}
          className={({ isActive }) => {
            return (
              "flex items-center text-lg font-semibold text-#807D7E gap-4 px-9 py-3  " +
              (isActive ? "border-l-2 border-#3C4242 bg-#F6F6F6" : "")
            );
          }}
        >
          <FaRegHeart />
          <p>Wishlist</p>
        </NavLink>
        <NavLink
          to={"/info"}
          className={({ isActive }) => {
            return (
              "flex items-center text-lg font-semibold text-#807D7E gap-4 px-9 py-3  " +
              (isActive ? "border-l-2 border-#3C4242 bg-#F6F6F6" : "")
            );
          }}
        >
          <LuUser2 />
          <p>My info</p>
        </NavLink>
        <button
          onClick={handleLogout}
          className={
            "flex items-center text-lg font-semibold text-#807D7E gap-4 px-9 py-3 border-#3C4242"
          }
        >
          <PiSignOutBold />
          <p>{!!user.email ? 'Sign out' : 'Sign in'}</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
