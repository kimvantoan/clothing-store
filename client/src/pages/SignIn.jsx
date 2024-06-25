import React, { useState } from "react";
import HeaderAuth from "../components/HeaderAuth";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <HeaderAuth />
      <div className="flex gap-16">
        <img src="images/signin.png" alt="" className= "h-screen" />
        <div className="w-full px-20 py-5">
          <h1 className="font-bold text-5xl text-#333333 mb-12">Sign In Page</h1>
          <form action="" className="flex flex-col gap-5 text-#3C4242">
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">Email address</label>
              <input type="email" required className="border-2 rounded-lg py-3 px-5 w-full outline-none "/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">Password</label>
              <input type="password" required className="border-2 rounded-lg py-3 px-5 w-full outline-none "/>
            </div>
            <p className="underline text-right">Forget your password</p>
            <button className="text-white bg-#8A33FD px-5 py-3 hover:opacity-80 w-1/5 rounded-lg">Sign In</button>
            <p>Don't have an account? <Link to={'/signup'} className='underline hover:text-#8A33FD'>Sign Up</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
