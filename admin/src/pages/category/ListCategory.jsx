import React, { useContext, useEffect } from "react";
import SideBar from "../../components/SideBar";
import { AdminContext } from "../../context/AdminContext";
import { AiOutlineClose } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const ListCategory = () => {
  const { categories, fetchCategories } = useContext(AdminContext);
  const category = categories.filter((category) => category.level === 2);
  const handleRemove = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3000/category/delete", {
        data: {
          id: id,
        },
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Yjc3ZGJlZmZjYmFmMDM1YjhlNTQyMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyMzgyMDc0MX0.3ADoS7sGJxfbmZy6GJgF8j0e5Dbxteje-XSzuB-oYnI",
        },
      });
      fetchCategories();
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchCategories()
  },[])
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full px-3 py-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl text-#2F3746">Categories</h1>

          <Link
            to={"/categories/create"}
            className="font-semibold text-white rounded-xl bg-#6366F1 px-5 py-3"
          >
            + Add
          </Link>
        </div>
        <div className="shadow rounded-lg">
          <div className="grid grid-cols-4 bg-gray-100 px-5 ">
            <p className="col-span-2">NAME</p>
            <p>PARENT CATEGORY</p>
            <p>ACTION</p>
          </div>
          {category.map((category) => (
            <div className="grid grid-cols-4 border-b hover:bg-gray-100">
              <div className="col-span-2 flex flex-col gap-3">
                <p className="text-lg font-medium">{category.name}</p>
                <p className="">{category._id}</p>
              </div>
              <p>{category.parentCategory?.name}</p>
              <div className="flex h-fit gap-3">
                <Link
                  to={`/categories/${category._id}`}
                  className="flex items-center cursor-pointer px-3 py-1 bg-blue-200 gap-2 text-blue-500 "
                >
                  <FaEdit />
                  <p>Edit</p>
                </Link>
                <button
                  onClick={() => handleRemove(category._id)}
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

export default ListCategory;
