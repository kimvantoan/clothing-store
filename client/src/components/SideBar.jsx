import React from "react";
import { TbShoppingBagCheck } from "react-icons/tb";
import { LuUser2 } from "react-icons/lu";
import { PiSignOutBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="w-72">
      <div className="flex gap-5 mb-3">
        <div className="rounded-xl border-l-4 border-#8A33FD"></div>
        <h2 className=" text-#3C4242 font-bold text-4xl">Hello Kim</h2>
      </div>
      <p className="text-sm text-#807D7E mb-7">Welcome to your Account</p>
      <div>
        <NavLink to={'/order'} className={({isActive})=>{return("flex items-center text-lg font-semibold text-#807D7E gap-4 px-9 py-3  "+(isActive?"border-l-2 border-#3C4242 bg-#F6F6F6":''))}}>
          <TbShoppingBagCheck />
          <p>My orders</p>
        </NavLink>
        <NavLink to={'/wishlist'} className={({isActive})=>{return("flex items-center text-lg font-semibold text-#807D7E gap-4 px-9 py-3  "+(isActive?"border-l-2 border-#3C4242 bg-#F6F6F6":''))}}>
        <FaRegHeart />
          <p>Wishlist</p>
        </NavLink>
        <NavLink to={'/info'} className={({isActive})=>{return("flex items-center text-lg font-semibold text-#807D7E gap-4 px-9 py-3  "+(isActive?"border-l-2 border-#3C4242 bg-#F6F6F6":''))}}>
        <LuUser2 />
          <p>My info</p>
        </NavLink>
        <NavLink to={'/signout'} className={({isActive})=>{return("flex items-center text-lg font-semibold text-#807D7E gap-4 px-9 py-3  "+(isActive?"border-l-2 border-#3C4242 bg-#F6F6F6":''))}}>
          <PiSignOutBold />
          <p>Sign out</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
