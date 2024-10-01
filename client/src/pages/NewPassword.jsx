import React, { useContext, useState } from "react";
import HeaderAuth from "../components/HeaderAuth";
import axios from "axios";
import { toast } from "react-toastify";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
const NewPassword = () => {
  const {url}=useContext(StoreContext)
  const [data, setData] = useState({
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()
  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${url}/auth/changePassword`,
        data,
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };  
  return (
    <>
      <HeaderAuth />
      <div className="flex gap-16">
        <img src="images/newpassword.png" alt="" className="h-screen" />
        <div className="w-full px-20 py-5">
          <h1 className="font-bold text-5xl text-#333333 mb-3">
            Create New Password
          </h1>
          <p className="mb-5 text-#807D7E">
            Your new password must be different from previous used passwords.
          </p>
          <form
            onSubmit={handleChangePassword}
            className="flex flex-col gap-5 text-#3C4242"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">
                Email address
              </label>
              <input
                type="email"
                onChange={onChangeHandle}
                required
                value={data.email}
                name="email"
                className="border-2 rounded-lg py-3 px-5 w-full outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">
                Password
              </label>
              <input
                type="password"
                onChange={onChangeHandle}
                name="password"
                value={data.password}
                required
                className="border-2 rounded-lg py-3 px-5 w-full outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">
                New password
              </label>
              <input
                onChange={onChangeHandle}
                value={data.newPassword}
                type="password"
                required
                name="newPassword"
                className="border-2 rounded-lg py-3 px-5 w-full outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">
                Confirm Password
              </label>
              <input
                onChange={onChangeHandle}
                value={data.confirmPassword}
                type="password"
                required
                name="confirmPassword"
                className="border-2 rounded-lg py-3 px-5 w-full outline-none "
              />
            </div>
            <PrimaryButton title={"Reset Password"} type={"submit"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
