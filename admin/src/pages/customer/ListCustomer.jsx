import React, { useContext, useEffect } from "react";
import SideBar from "../../components/SideBar";
import { AdminContext } from "../../context/AdminContext";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const ListCustomer = () => {
  const { users,fetchUsers } = useContext(AdminContext);
  console.log(users);
  const handleRemove = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3000/user/delete", {
        data: {
          id: id,
        },
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Yjc3ZGJlZmZjYmFmMDM1YjhlNTQyMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyMzgyMDc0MX0.3ADoS7sGJxfbmZy6GJgF8j0e5Dbxteje-XSzuB-oYnI",
        },
      });
      fetchUsers()
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full px-3 py-8">
        <h1 className="font-bold text-3xl text-#2F3746">Customers</h1>
        <div className="shadow rounded-lg">
          <div className="grid grid-cols-5 bg-gray-100 px-5 ">
            <p className="col-span-2">NAME</p>
            <p >MOBILE</p>
            <p>ORDERS</p>
            <p>ACTION</p>
          </div>
          {users.map((user) => (
            <div
              to={`/customer/${user._id}`}
              className="grid grid-cols-5 border-b hover:bg-gray-100"
            >
              <div className="col-span-2 flex flex-col gap-3">
                <p className="text-lg font-medium">{`${user.firstname} ${user.lastname}`}</p>
                <p className="">{user.email}</p>
              </div>
              <p>{user?.mobile}</p>
              <p>{user?.orders?.length}</p>
              <div className="flex h-fit gap-3">
                <Link
                  to={`/customers/${user._id}`}
                  className="flex items-center cursor-pointer px-3 py-1 bg-blue-200 gap-2 text-blue-500 "
                >
                  <FaEdit />
                  <p>Edit</p>
                </Link>
                <button
                  onClick={() => handleRemove(user._id)}
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

export default ListCustomer;
