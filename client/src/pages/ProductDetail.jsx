import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { IoIosStar } from "react-icons/io";
import { TfiCommentAlt } from "react-icons/tfi";
import axios from "axios";
import { useParams } from "react-router-dom";
import formatPrice from "../utils/FormatPrice";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [selectSize, setSelectSize] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [productDesc, setProductDesc] = useState("desc");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => {
        setProduct(res.data.product),
          setSizes(res.data.product.sizes),
          setColors(res.data.product.colors);
          setReviews(res.data.product.reviews);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (selectSize !== "" && selectColor !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [selectSize, selectColor]);

  return (
    <Layout>
      <div className="mx-24">
        <div className="flex mb-10 gap-20">
          <div className="flex items-center flex-1 gap-8">
            <div className="flex flex-col gap-5">
              <img
                src={`http://localhost:3000/${product.image}`}
                className="size-24 rounded-lg"
                alt=""
              />
              <img
                src={`http://localhost:3000/${product.image}`}
                className="size-24 rounded-lg"
                alt=""
              />
              <img
                src={`http://localhost:3000/${product.image}`}
                className="size-24 rounded-lg"
                alt=""
              />
            </div>
            <div className="size-full">
              <img
                src={`http://localhost:3000/${product.image}`}
                className="size-full"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col mt-10 flex-1">
            <h1 className="font-bold text-4xl text-#3C4242">{product.title}</h1>
            <div className="flex gap-7 mt-4 text-xl font-bold items-center">
              <div className="text-3xl text-#3C4242">
                {formatPrice(product.price)}
              </div>
              <s className="text-#807D7E">
                {formatPrice(product.price + product.discount)}
              </s>
              <div className="p-0.5 bg-#8A33FD text-white rounded-lg">
                -{((product.discount / product.price) * 100).toFixed(0)}%
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="flex gap-2 items-center text-yellow-500">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <p className="text-#3C4242">{product.numberRating}</p>
              </div>
              <div className="flex items-center gap-2">
                <TfiCommentAlt />
                <p>{reviews.length} comment</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-lg mt-9 mb-6">Select Size</p>
              <ul className="flex gap-5 text-sm font-medium text-#3C4242">
                {sizes.map((size) => (
                  <li
                    onClick={() => setSelectSize(`${size}`)}
                    className={`${
                      selectSize === `${size}` ? "text-white bg-#3C4242" : ""
                    } border-2 w-10 h-10 flex items-center justify-center  rounded-xl cursor-pointer hover:bg-#3C4242 hover:text-white`}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-lg mt-9 mb-6">Select Colours</p>
              <ul className="flex gap-5">
                {colors.map((color) => (
                  <li
                    onClick={() => setSelectColor(`${color}`)}
                    className={`${
                      selectColor === `${color}`
                        ? "border-2  border-black "
                        : ""
                    } bg-${color}-500 rounded-full border cursor-pointer size-10`}
                  ></li>
                ))}
              </ul>
            </div>

            <div className="my-9 flex gap-6">
              <SecondaryButton
                isButtonDisabled={isButtonDisabled}
                title={"Add to cart"}
              />
              <PrimaryButton
                isButtonDisabled={isButtonDisabled}
                title={formatPrice(product.price)}
              />
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
              <div className="px-0.5 h-6 text-center text-sm text-white bg-#8A33FD rounded-lg">
                46
              </div>
            </div>
          </div>

          <p
            className={`${
              productDesc === "desc" ? "block" : "hidden"
            } text-#807D7E mx-10 `}
          >
            {product.description}
          </p>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
