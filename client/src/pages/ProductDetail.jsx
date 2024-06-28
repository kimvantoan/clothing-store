import React, { useState } from "react";
import Layout from "../components/Layout";
import { IoIosStar } from "react-icons/io";
import { TfiCommentAlt } from "react-icons/tfi";
import { CiShoppingCart } from "react-icons/ci";

const ProductDetail = () => {
  const [selectSize, setSelectSize] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [productDesc, setProductDesc] = useState("desc");
  return (
    <Layout>
      <div className="mx-24">
        <div className="flex">
          <div className="flex items-center flex-1 gap-8">
            <div className="flex flex-col gap-5 ">
              <img
                src="images/product.png"
                className="w-16 h-16 rounded-lg"
                alt=""
              />
              <img
                src="images/product.png"
                className="w-16 h-16 rounded-lg"
                alt=""
              />
              <img
                src="images/product.png"
                className="w-16 h-16 rounded-lg"
                alt=""
              />
            </div>
            <div className="w-3/5">
              <img src="images/product.png" className="" alt="" />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-4xl text-#3C4242">
              Raven Hoodie With Black colored Design
            </h1>
            <div className="flex gap-7 mt-4 text-xl font-bold items-center">
              <div className="text-3xl text-#3C4242">$30</div>
              <s className="text-#807D7E">$30</s>
              <div className="p-0.5 bg-#8A33FD text-white rounded-lg">-30%</div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="flex gap-2 items-center text-yellow-500">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <p className="text-#3C4242">3.5</p>
              </div>
              <div className="flex items-center gap-2">
                <TfiCommentAlt />
                <p>120 comment</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-lg mt-9 mb-6">Select Size</p>
              <ul className="flex gap-5 text-sm font-medium text-#3C4242">
                <li
                  onClick={() => setSelectSize("XS")}
                  className={`${
                    selectSize === "XS" ? "text-white bg-#3C4242" : ""
                  } border-2 w-10 h-10 flex items-center justify-center  rounded-xl cursor-pointer hover:bg-#3C4242 hover:text-white`}
                >
                  XS
                </li>
                <li
                  onClick={() => setSelectSize("S")}
                  className={`${
                    selectSize === "S" ? "text-white bg-#3C4242" : ""
                  } border-2 w-10 h-10 flex items-center justify-center  rounded-xl cursor-pointer hover:bg-#3C4242 hover:text-white`}
                >
                  S
                </li>
                <li
                  onClick={() => setSelectSize("M")}
                  className={`${
                    selectSize === "M" ? "text-white bg-#3C4242" : ""
                  } border-2 w-10 h-10 flex items-center justify-center  rounded-xl cursor-pointer hover:bg-#3C4242 hover:text-white`}
                >
                  M
                </li>
                <li
                  onClick={() => setSelectSize("L")}
                  className={`${
                    selectSize === "L" ? "text-white bg-#3C4242" : ""
                  } border-2 w-10 h-10 flex items-center justify-center  rounded-xl cursor-pointer hover:bg-#3C4242 hover:text-white`}
                >
                  XL
                </li>
                <li
                  onClick={() => setSelectSize("XL")}
                  className={`${
                    selectSize === "XL" ? "text-white bg-#3C4242" : ""
                  } border-2 w-10 h-10 flex items-center justify-center  rounded-xl cursor-pointer hover:bg-#3C4242 hover:text-white`}
                >
                  L
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-lg mt-9 mb-6">
                Colours Available{" "}
              </p>
              <ul className="flex gap-5">
                <li
                  onClick={() => setSelectColor("green")}
                  className={`${
                    selectColor === "green" ? "border-2  border-black " : ""
                  } bg-green-500 shadow-2xl rounded-full cursor-pointer w-7 h-7`}
                ></li>
                <li
                  onClick={() => setSelectColor("blue")}
                  className={`${
                    selectColor === "blue" ? "border-2 border-black " : ""
                  } bg-blue-500  rounded-full cursor-pointer w-7 h-7`}
                ></li>
              </ul>
            </div>

            <div className="my-9 flex gap-6">
              <button className="py-3 hover:bg-#F6F6F6 px-5 border-2 border-black  rounded-lg font-semibold text-lg flex gap-3 items-center">
                <CiShoppingCart className={`w-8 h-8 font-bold}`} />
                <p>Add to cart</p>
              </button>
              <button className="hover:opacity-90 bg-#8A33FD text-white rounded-lg py-3 px-8 font-bold text-lg">
                $65
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5 mb-10 ">
            <div className="rounded-xl border-l-4 border-#8A33FD"></div>
            <h2 className=" text-#3C4242 font-bold text-4xl">
              Product Description
            </h2>
          </div>

          <div className="flex justify-center mb-5 gap-x-7 text-lg text-#807D7E">
            <p
              onClick={() => {
                setProductDesc("desc");
              }}
              className={`${
                productDesc === "desc"
                  ? "border-b-2 border-#2A2F2F text-#3C4242 text-lg "
                  : ""
              }py-2 cursor-pointer `}
            >
              Description
            </p>
            <div
              className={`flex gap-2 py-2 cursor-pointer ${
                productDesc === "comments"
                  ? "border-b-2 text-#3C4242 text-lg border-#2A2F2F"
                  : ""
              }`}
            >
              <p
                onClick={() => {
                  setProductDesc("comments");
                }}
              > 
                User Comments
              </p>
              <div className="px-0.5 h-6 text-center text-sm text-white bg-#8A33FD rounded-lg">46</div>
            </div>
          </div>

          <p className={`${productDesc==='desc'?'block':'hidden'} text-#807D7E mx-10 `}>
            100% Bio-washed Cotton – makes the fabric extra soft & silky.
            Flexible ribbed crew neck. Precisely stitched with no pilling & no
            fading. Provide all-time comfort. Anytime, anywhere. Infinite range
            of matte-finish HD prints.
          </p>
            <div>

            </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
