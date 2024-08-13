import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import formatPrice from "../utils/FormatPrice";
import googlePay from "../assets/googlePay.png";
import { StoreContext } from "../context/StoreContext";
import PrimaryButton from "../components/PrimaryButton";
import axios from "axios";
import { toast } from "react-toastify";
const Checkout = () => {
  const { user, cart } = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const [address, setaddress] = useState({});

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/order/placeOrder",
        {
          shipAddress: address,
          paymentMethod: paymentMethod,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <Layout>
      <div className="my-12 mx-24 ">
        <div className="flex gap-5 mb-3">
          <div className="rounded-xl border-l-4 border-#8A33FD"></div>
          <h2 className=" text-#3C4242 font-bold text-4xl">Hello Kim</h2>
        </div>
        <div className="grid grid-cols-5 gap-9">
          <div className="mt-3 col-span-3">
            <form
              onSubmit={handlePlaceOrder}
              className="grid grid-cols-2 gap-5 pb-7"
            >
              <div className="py-7 col-span-2">
                <p className="font-bold text-xl text-#3C4242 ">
                  Shipping Address
                </p>
                <p className="text-#3C4242 mb-7 mt-2">
                  Select the address that matches your card or payment method.
                </p>
                <div className="flex flex-col mt-7">
                  {user.address?.map((item, idx) => (
                    <div
                      onClick={() => {
                        setaddress(item);
                      }}
                      className="flex items-center bg-#F6F6F6 rounded-xl py-4 px-7 border-b-2"
                    >
                      <input
                        required
                        name="address"
                        type="radio"
                        className="w-4 h-4 cursor-pointer"
                        id={idx}
                      />
                      <label for={idx} className="font-bold text-#3C4242 ml-5">
                        <p className="font-semibold text-xl text-#3C4242">
                          {`${item.firstname}, ${item.lastname} | ${item.mobile}`}
                        </p>

                        <p className="text-#807D7E font-medium text-base">
                          {`${item.deliInstruction} ${item.apartment}, ${item.streetAddress}, ${item.state}, ${item.city}, ${item.country}`}
                        </p>
                      </label>
                    </div>
                  ))}
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
                      value="credit card"
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
                      value="Cash on delivery"
                      onChange={handlePaymentMethodChange}
                    />
                    <label
                      htmlFor="Cash on delivery"
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
              <PrimaryButton title={"Place Order"} type={"submit"} />
            </form>
          </div>
          <div className="py-10 px-5 border-2 col-span-2 h-fit rounded-lg">
            <h2 className="font-bold text-2xl text-#3C4242 pb-4 border-b-2">
              Order Summary
            </h2>
            {cart.cartItem?.map((item) => (
              <div className="grid grid-cols-5 items-center py-4 border-b-2">
                <img
                  src={`http://localhost:3000/${item.product?.image}`}
                  className="w-16 h-16 rounded overflow-hidden"
                  alt=""
                />
                <div className="col-span-3 font-bold text-sm place-self-start">
                  <span className="text-#3C4242">
                    {item.product?.title}
                    <span className="text-#807D7E"> x{item.quantity}</span>
                  </span>
                  <p className="text-#3C4242 mt-2">
                    Color : <span className="text-#807D7E">{item.color}</span>
                  </p>
                </div>
                <p className="font-bold text-sm text-end text-#807D7E">
                  {formatPrice(item.price - item.discount)}
                </p>
              </div>
            ))}

            <div className="grid grid-cols-2 font-bold text-lg text-#3C4242 gap-y-4 py-4 border-b-2">
              <p>Subtotal ( {cart.totalItem} )</p>
              <p className="text-end">
                {formatPrice(cart.totalPrice - cart.totalDiscount)}
              </p>
              {/* <p>Savings</p>
              <p className="text-end">{formatPrice(30)}</p> */}
              <p>Shipping</p>
              <p className="text-end">{formatPrice(5)}</p>
            </div>
            <div className="grid grid-cols-2 font-bold text-lg text-#3C4242 py-4">
              <p>Total</p>
              <p className="text-end">
                {formatPrice(cart.totalPrice - cart.totalDiscount + 5)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
