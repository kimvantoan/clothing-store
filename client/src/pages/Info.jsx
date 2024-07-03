import React from "react";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <Layout>
      <div className="flex gap-x-12 mx-24 my-10">
        <SideBar />
        <div className="w-full">
          <h1 className="font-bold text-3xl text-#3C4242 mb-5">My Info</h1>
          <p className="font-bold text-xl text-#3C4242">Contact Details</p>
          <form action="">
            <div className="py-5 border-b">
              <label
                htmlFor="name"
                className="font-semibold text-lg text-#807D7E"
              >
                Your Name
              </label>
              <div className="font-semibold text-lg flex justify-between">
                <input
                  type="text"
                  id="name"
                  className="outline-none"
                  value="kim toan"
                />
                <input
                  type="submit"
                  value="change"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="py-5 border-b">
              <label
                htmlFor="email"
                className="font-semibold text-lg text-#807D7E"
              >
                Email Address
              </label>
              <div className="font-semibold text-lg flex justify-between">
                <input
                  type="email"
                  id="email"
                  className="outline-none"
                  value="kimtoan@gmail.com"
                />
                <input
                  type="submit"
                  value="change"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="py-5 border-b">
              <label
                htmlFor="phone"
                className="font-semibold text-lg text-#807D7E"
              >
                Phone Number
              </label>
              <div className="font-semibold text-lg flex justify-between">
                <input
                  type="tel"
                  id="phone"
                  className="outline-none"
                  value="091412535"
                />
                <input
                  type="submit"
                  value="change"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="py-5 border-b">
              <label
                htmlFor="password"
                className="font-semibold text-lg text-#807D7E"
              >
                Your Name
              </label>
              <div className="font-semibold text-lg flex justify-between">
                <input
                  type="password"
                  id="password"
                  className="outline-none"
                  value="csdvsd"
                />
                <input
                  type="submit"
                  value="change"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </form>
          <div>
            <div className="flex justify-between text-#3C4242 my-7">
              <h2 className="font-bold text-2xl">Address</h2>
              <Link className="text-#3C4242 font-semibold" to={'/info/address'}>Add New</Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-#F6F6F6 rounded-xl py-6 px-11 flex flex-col gap-5">
                <p className="font-semibold text-xl text-#3C4242">Jhanvi shah</p>
                <p className="text-#807D7E">8980252445</p>
                <p className="text-#807D7E">
                  1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar,
                  Vijaynagar road
                </p>
                <div className="text-#807D7E flex gap-3">
                  <div className="py-2 px-5 border rounded-lg">Home</div>
                  <div className="py-2 px-5 border rounded-lg">Default billing address</div>
                </div>
                <div className="text-#3C4242 font-semibold flex gap-5">
                  <button>Remove</button>
                  <Link to='/info/address' className='cursor-pointer'>Edit</Link>
                  <button>Set as default</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Info;
