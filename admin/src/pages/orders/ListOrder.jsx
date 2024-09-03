import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import formatPrice from "../../utils/FormatPrice";
import { AdminContext } from "../../context/AdminContext";
import formatDate from "../../utils/FormatDate";
const ListOrder = () => {
  const { orders, fetchOrders } = useContext(AdminContext);
  const [cur, setCur] = useState("All");
  const orderActive = orders.filter((order) =>
    cur === "All" ? order : order.orderStatus === cur
  );
  console.log(cur);
  console.log(orderActive);

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full px-3 py-8">
        <h1 className="font-bold text-3xl text-#2F3746">Orders</h1>
        <ul className="flex gap-4 p-3 border w-fit font-semibold text-#9DA4AE my-5">
          <li
            onClick={() => {
              setCur("All");
            }}
            className={`${cur === "All" ? "text-#6366F1" : ""} cursor-pointer`}
          >
            All
          </li>
          <li
            onClick={() => {
              setCur("Canceled");
            }}
            className={`${
              cur === "Canceled" ? "text-#6366F1" : ""
            } cursor-pointer`}
          >
            Canceled
          </li>
          <li
            onClick={() => {
              setCur("Order Placed");
            }}
            className={`${
              cur === "Order Placed" ? "text-#6366F1" : ""
            } cursor-pointer`}
          >
            Order Placed
          </li>
          <li
            onClick={() => {
              setCur("Inprogress");
            }}
            className={`${
              cur === "Inprogress" ? "text-#6366F1" : ""
            } cursor-pointer`}
          >
            Inprogress
          </li>
          <li
            onClick={() => {
              setCur("Shipped");
            }}
            className={`${
              cur === "Shipped" ? "text-#6366F1" : ""
            } cursor-pointer`}
          >
            Shipped
          </li>
          <li
            onClick={() => {
              setCur("Delivered");
            }}
            className={`${
              cur === "Delivered" ? "text-#6366F1" : ""
            } cursor-pointer`}
          >
            Delivered
          </li>
        </ul>
        <div className="shadow rounded-lg">
          <div className="grid grid-cols-6 bg-gray-100 px-5 ">
            <p className="col-span-2">ID</p>
            <p>Order Date</p>
            <p>TOTAL ITEM</p>
            <p>TOTAL PRICE</p>
            <p>Status</p>
          </div>
          {orderActive.map((order) => (
            <Link
              to={`/orders/${order._id}`}
              className="grid grid-cols-6 border-b hover:bg-gray-100"
            >
              <div className="col-span-2 flex gap-3">
                <p className="text-lg">{order._id}</p>
              </div>
              <p>{formatDate(order.orderDate)}</p>
              <p>{order.orderItems.length}</p>
              <p>{formatPrice(order.totalPrice)}</p>
              <p
                className={`px-3 py-2 w-fit my-3 rounded-lg font-semibold ${
                  order.orderStatus === "Order Placed"
                    ? "text-blue-600 bg-blue-100"
                    : order.orderStatus === "Canceled"
                    ? "text-red-600 bg-red-100"
                    : order.orderStatus === "Inprogress"
                    ? "text-yellow-600 bg-yellow-100"
                    : order.orderStatus === "Shipped"
                    ? "text-pink-600 bg-pink-100"
                    : order.orderStatus === "Delivered"
                    ? "text-green-600 bg-green-100"
                    : ""
                }`}
              >
                {order.orderStatus}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
