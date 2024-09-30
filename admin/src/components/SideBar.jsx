import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

import { FaUserGroup, FaBagShopping, FaCartShopping } from "react-icons/fa6";

const SideBar = () => {
  const SideBarItem = [
    {
      title: "Customers",
      icon: <FaUserGroup className=" size-6" />,
      link: "/customers",
    },
    {
      title: "Products",
      icon: <FaBagShopping className="size-6" />,
      link: "/products",
    },
    {
      title: "Orders",
      icon: <FaCartShopping className=" size-6" />,
      link: "/orders",
    },
    {
      title: "Categories",
      icon: <FaCartShopping className=" size-6" />,
      link: "/categories",
    },
  ];
  return (
    <div className="bg-#2F3746 px-4 py-5 flex flex-col h-screen w-1/5 gap-4 ">
      <div className="flex gap-3 ">
        <img src={logo} alt="" />
        <div>
          <p className="text-white font-bold text-2xl">Euphoria</p>
          <p className="text-#9DA4AE">Admin Panel</p>
        </div>
      </div>
      {SideBarItem.map((item) => (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return (
              (isActive ? "bg-#4D5761 text-white " : "text-#9DA4AE ") +
              "flex gap-4 px-4 py-2 items-center rounded-lg"
            );
          }}
        >
          {item.icon}
          <p className="font-semibold text-xl ">{item.title}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
