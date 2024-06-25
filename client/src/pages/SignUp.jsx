import React, { useState } from 'react'
import HeaderAuth from '../components/HeaderAuth'
import { Link} from 'react-router-dom'

const SignUp = () => {

  return (
    <>
      <HeaderAuth />
      <div className="flex gap-16">
        <img src="images/signup.png" alt="" className="h-screen" />
        <div className="w-full px-20 py-5">
          <h1 className="font-bold text-5xl text-#333333 mb-3">Sign Up Page</h1>
          <p className='mb-5 text-#807D7E'>Sign up for free to access to in any of our products</p>
          <form action="" className="flex flex-col gap-5 text-#3C4242">
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">Email address</label>
              <input type="email" required className="border-2 rounded-lg py-3 px-5 w-full outline-none "/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">Password</label>
              <input type="password" required className="border-2 rounded-lg py-3 px-5 w-full outline-none "/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">Confirm Password</label>
              <input type="password" required className="border-2 rounded-lg py-3 px-5 w-full outline-none "/>
            </div>
            <button className="text-white bg-#8A33FD px-5 py-3 hover:opacity-80 rounded-lg w-1/5">Sign Up</button>
            <p>Already have an  account?  <Link to={'/signin'} className='underline hover:text-#8A33FD'>Log in</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp