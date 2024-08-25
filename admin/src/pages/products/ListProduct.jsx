import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import formatPrice from "../../utils/FormatPrice";
import { FaEdit } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
const ListProduct = () => {
  const { products, fetchProducts } = useContext(AdminContext);
  
  const handleRemove = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3000/product/delete", {
        data: {
          _id: id,
        },
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Yjc3ZGJlZmZjYmFmMDM1YjhlNTQyMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyMzgyMDc0MX0.3ADoS7sGJxfbmZy6GJgF8j0e5Dbxteje-XSzuB-oYnI",
        },
      });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {    
    fetchProducts();
    
  }, [products]);
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full px-3 py-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl text-#2F3746">Products</h1>
          <Link
            to={"/products/add"}
            className="font-semibold text-white rounded-xl bg-#6366F1 px-5 py-3"
          >
            + Add
          </Link>
        </div>
        <div className=" shadow rounded-lg">
          <div className="grid grid-cols-6 bg-gray-100 px-5 ">
            <p className="col-span-2">NAME</p>
            <p>STOCK</p>
            <p>PRICE</p>
            <p>SOLD</p>
            <p>ACTION</p>
          </div>
          {products.map((product) => (
            <div className="grid grid-cols-6 border-b ">
              <div className="col-span-2 flex gap-3">
                <img
                  className="size-20"
                  src={`http://localhost:3000/${product.image}`}
                  alt=""
                />
                <div>
                  <p className="text-lg">{product.title}</p>
                  <p className="text-#4D5761">{product.brand}</p>
                </div>
              </div>
              <p>{product.quantity} in stock</p>
              <div>
                <p className="mb-3">Old Price: {formatPrice(product.price)}</p>
                <p>New Price: {formatPrice(product.price-parseInt(product.discount))}</p>
              </div>
              <p>{product.sold}</p>
              <div className="flex h-fit gap-3">
                <Link
                  to={`/products/edit/${product._id}`}
                  className="flex items-center cursor-pointer px-3 py-1 bg-blue-200 gap-2 text-blue-500 "
                >
                  <FaEdit />
                  <p>Edit</p>
                </Link>
                <button
                  onClick={() => handleRemove(product._id)}
                  className="flex items-center cursor-pointer px-3 py-1 bg-red-200 gap-2 text-red-500"
                >
                  <AiOutlineClose />
                  <p>Remove</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
