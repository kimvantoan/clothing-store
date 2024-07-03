import React from "react";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <Layout>
      <div className="flex gap-x-12 mx-24 my-10">
        <SideBar />
        <div className="w-full">
          <h1 className="font-bold text-3xl text-#3C4242 mb-5">My Info</h1>
          <p className="font-bold text-xl text-#3C4242">Add Address</p>
          <form action="" className="grid grid-cols-2 gap-10 mt-12">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                First Name*
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Last Name*
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Country / Region*
              </label>
              <input
                type="text"
                placeholder="Country / Region"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Street Address*
              </label>
              <input
                type="text"
                placeholder="Street Address*"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Apt, suite, unit
              </label>
              <input
                type="text"
                placeholder="apartment, suite, unit, etc. (optional)"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                City*
              </label>
              <input
                type="text"
                placeholder="Town / City"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Postal Code*
              </label>
              <input
                type="text"
                placeholder="Postal Code"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Phone*
              </label>
              <input
                type="tel"
                placeholder="Phone"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Delivery Instruction
              </label>
              <textarea
                type="text"
                placeholder="Delivery Instruction"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="col-span-2 text-xl text-#3C4242 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="w-4 h-4" name="" id="" />
                <span>Set as default shipping address</span>
              </div>
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="w-4 h-4" name="" id="" />
                <span>Set as default billing address</span>
              </div>
            </div>
            <div className="flex gap-7 text-xl font-bold">
                <button className="py-3 px-10 bg-#8A33FD active:opacity-80 text-white rounded-lg">Save</button>
                <Link to='/info' className="py-3 px-10 active:opacity-80 bg-#F6F6F6 text-#807D7E  rounded-lg">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Address;
