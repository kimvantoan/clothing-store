import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import formatPrice from "../utils/FormatPrice";
import product from "../assets/product.png";
import googlePay from "../assets/googlePay.png";
const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <Layout>
      <div className="my-12 mx-24 ">
        <div className="flex gap-5 mb-3">
          <div className="rounded-xl border-l-4 border-#8A33FD"></div>
          <h2 className=" text-#3C4242 font-bold text-4xl">Hello Kim</h2>
        </div>
        <p className="font-bold text-xl text-#3C4242">Billing Details</p>
        <div className="grid grid-cols-5 gap-9">
          <div className="mt-12 col-span-3">
            <form action="" className="grid grid-cols-2 gap-10 pb-7">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstname"
                  className="text-#3C4242 text-lg font-semibold"
                >
                  First Name*
                </label>
                <input
                  id="firstname"
                  required
                  type="text"
                  placeholder="First Name"
                  className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastname"
                  className="text-#3C4242 text-lg font-semibold"
                >
                  Last Name*
                </label>
                <input
                  id="lastname"
                  required
                  type="text"
                  placeholder="Last Name"
                  className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="country"
                  className="text-#3C4242 text-lg font-semibold"
                >
                  Country / Region*
                </label>
                <input
                  required
                  id="country"
                  type="text"
                  placeholder="Country / Region"
                  className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="street"
                  className="text-#3C4242 text-lg font-semibold"
                >
                  Street Address*
                </label>
                <input
                  id="street"
                  required
                  type="text"
                  placeholder="Street Address*"
                  className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="apt"
                  className="text-#3C4242 text-lg font-semibold"
                >
                  Apt, suite, unit
                </label>
                <input
                  id="apt"
                  required
                  type="text"
                  placeholder="apartment, suite, unit, etc. (optional)"
                  className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="city"
                  className="text-#3C4242 text-lg font-semibold"
                >
                  City*
                </label>
                <input
                  id="city"
                  required
                  type="text"
                  placeholder="Town / City"
                  className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="code"
                  className="text-#3C4242 text-lg font-semibold"
                >
                  Postal Code*
                </label>
                <input
                  id="code"
                  required
                  type="text"
                  placeholder="Postal Code"
                  className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="tel"
                  className="text-#3C4242 text-lg font-semibold"
                >
                  Phone*
                </label>
                <input
                  id="tel"
                  required
                  type="tel"
                  placeholder="Phone"
                  className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
                />
              </div>
              <div className="col-span-2 text-xl text-#3C4242 flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    name=""
                    id="save"
                  />
                  <label htmlFor="save">
                    Save my information for a faster checkout
                  </label>
                </div>
              </div>
              <Link
                to={"/"}
                className="py-3 px-10 bg-#8A33FD active:opacity-80 text-white text-center rounded-lg"
              >
                Continue to delivery
              </Link>

              <div className="py-7 col-span-2">
                <p className="font-bold text-xl text-#3C4242 ">
                  Shipping Address
                </p>
                <p className="text-#3C4242 mb-7 mt-2">
                  Select the address that matches your card or payment method.
                </p>
                <div className="bg-#F6F6F6 rounded-xl py-9 px-7 flex flex-col gap-6">
                  <div>
                    <input
                      type="radio"
                      name="ShippingAddress"
                      className="w-4 h-4 cursor-pointer"
                      id="Same"
                    />
                    <label
                      htmlFor="Same"
                      className="font-bold text-#3C4242 text-xl ml-3"
                    >
                      Same as Billing address
                    </label>
                  </div>
                  <hr />
                  <div>
                    <input
                      required
                      type="radio"
                      id="differentshipping"
                      className="w-4 h-4 cursor-pointer"
                      name="ShippingAddress"
                    />
                    <label
                      htmlFor="differentshipping"
                      className="font-bold text-#3C4242 text-xl ml-3"
                    >
                      Use a different shipping address
                    </label>
                  </div>
                </div>
              </div>

              <hr />

              <div className="py-7 col-span-2">
                <p className="font-bold text-xl text-#3C4242 mb-7">
                  Shipping Method
                </p>
                <div className="bg-#F6F6F6 rounded-xl py-9 px-7 flex flex-col gap-6">
                  <div>
                    <p className="font-bold text-xl text-#3C4242">
                      Arrives by Monday, June 7
                    </p>
                  </div>
                  <hr />
                  <div className="grid grid-cols-2 gap-3">
                    <p className="font-bold text-xl text-#3C4242">
                      Delivery Charges
                    </p>
                    <p className="text-end font-bold text-xl text-#3C4242">
                      {formatPrice(5)}
                    </p>
                    <p className="font-medium text-#807D7E">
                      Additional fess may apply
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-7 col-span-2">
                <p className="font-bold text-xl text-#3C4242 ">
                  Payment Method
                </p>
                <p className="text-#3C4242 mb-7 mt-2">
                  All transactions are secure and encrypted.
                </p>
                <div className="bg-#F6F6F6 rounded-xl py-9 px-7 flex flex-col gap-6">
                  <div>
                    <input
                      type="radio"
                      name="PaymentMethod"
                      className="w-4 h-4 cursor-pointer"
                      id="credit"
                      value="credit"
                      onChange={handlePaymentMethodChange}
                    />
                    <label
                      htmlFor="credit"
                      className="font-bold text-#3C4242 text-xl ml-3"
                    >
                      Credit Card
                    </label>
                    <div className="flex gap-5 my-7 ml-8">
                      <div className="py-3 px-5 bg-white rounded-lg">
                        <img src={googlePay} alt="" />
                      </div>
                      <div className="py-3 px-5 bg-white rounded-lg">
                        <img src={googlePay} alt="" />
                      </div>
                      <div className="py-3 px-5 bg-white rounded-lg">
                        <img src={googlePay} alt="" />
                      </div>
                      <div className="py-3 px-5 bg-white rounded-lg">
                        <img src={googlePay} alt="" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-7">
                      <input
                        type="number"
                        required={paymentMethod === "credit"}
                        className="outline-none py-4 px-5 bg-transparent border-2 rounded-lg border-#807D7E"
                        placeholder="Card number"
                      />
                      <input
                        type="text"
                        required={paymentMethod === "credit"}
                        className="outline-none py-4 px-5 bg-transparent border-2 rounded-lg border-#807D7E"
                        placeholder="Name of card"
                      />
                      <input
                        type="text"
                        required={paymentMethod === "credit"}
                        className="outline-none py-4 px-5 bg-transparent border-2 rounded-lg border-#807D7E"
                        placeholder="Expiration date (MM/YY)"
                      />
                      <input
                        type="password"
                        required={paymentMethod === "credit"}
                        className="outline-none py-4 px-5 bg-transparent border-2 rounded-lg border-#807D7E"
                        placeholder="Security Code"
                      />
                    </div>

                    <div></div>
                  </div>
                  <hr />
                  <div>
                    <input
                      required
                      type="radio"
                      id="cash"
                      className="w-4 h-4 cursor-pointer"
                      name="PaymentMethod"
                      value="cash"
                      onChange={handlePaymentMethodChange}
                    />
                    <label
                      htmlFor="cash"
                      className="font-bold text-#3C4242 text-xl ml-3"
                    >
                      Cash on delivery
                    </label>
                  </div>
                  <hr />
                  <div>
                    <input
                      type="radio"
                      id="Paypol"
                      className="w-4 h-4 cursor-pointer"
                      name="PaymentMethod"
                      value="paypol"
                      onChange={handlePaymentMethodChange}
                    />
                    <label
                      htmlFor="Paypol"
                      className="font-bold text-#3C4242 text-xl ml-3"
                    >
                      Paypol
                    </label>
                  </div>
                </div>
              </div>

              <button className="py-4 px-5 bg-#8A33FD rounded-lg text-white text-lg font-medium">
                Pay Now
              </button>
            </form>
          </div>
          <div className="py-10 px-5 border-2 col-span-2 h-fit rounded-lg">
            <h2 className="font-bold text-2xl text-#3C4242 pb-4 border-b-2">
              Order Summary
            </h2>
            <div className="grid grid-cols-5 items-center py-4 border-b-2">
              <img
                src={product}
                className="w-16 h-16 rounded overflow-hidden"
                alt=""
              />
              <div className="col-span-3 font-bold text-sm place-self-start">
                <span className="text-#3C4242">
                  Blue Flower Print Crop Top{" "}
                  <span className="text-#807D7E">x 1</span>
                </span>
                <p className="text-#3C4242 mt-2">
                  Color : <span className="text-#807D7E">Yellow</span>
                </p>
              </div>
              <p className="font-bold text-sm text-end text-#807D7E">
                {formatPrice(20)}
              </p>
            </div>
            <div className="grid grid-cols-2 font-bold text-lg text-#3C4242 gap-y-4 py-4 border-b-2">
              <p>Subtotal ( 3 items )</p>
              <p className="text-end">{formatPrice(30)}</p>
              <p>Savings</p>
              <p className="text-end">{formatPrice(30)}</p>
              <p>Shipping</p>
              <p className="text-end">{formatPrice(30)}</p>
            </div>
            <div className="grid grid-cols-2 font-bold text-lg text-#3C4242 py-4">
              <p>Total</p>
              <p className="text-end">{formatPrice(30)}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
    
export default Checkout;
