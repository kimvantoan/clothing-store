import React from "react";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import ProductItem from '../components/ProductItem'
import Layout from "../components/Layout";
const ProductList = () => {
  return (
    <Layout>
    <div className="flex mx-24">
      <div className="px-7 border-2 max-w-72">
        <div className="flex py-5 items-center justify-between  text-#807D7E  text-2xl">
          <h2 className="font-semibold ">Filter</h2>
          <FiFilter />
        </div>

        <hr />

        <div>
          <ul className="flex flex-col gap-4 font-semibold text-#807D7E py-10">
            <li className="flex justify-between">
              <span>Tops</span>
              <input className="w-4 h-4" type="checkbox" />
            </li>
            <li className="flex justify-between">
              <span>Tops</span>
              <input className="w-4 h-4" type="checkbox" />
            </li>
            <li className="flex justify-between">
              <span>Tops</span>
              <input className="w-4 h-4" type="checkbox" />
            </li>
          </ul>
        </div>

        <div className="flex py-5 items-center border-y-2 justify-between border-y-1  text-#807D7E  text-2xl">
          <h2 className="font-semibold ">Price</h2>
          <IoIosArrowDown />
        </div>

        <div className="flex justify-evenly py-5">
          <div className="font-medium text-#3C4242 px-8 py-2 border-2 rounded-lg">
            <span>$</span>
            <span>0</span>
          </div>
          <div className="font-medium text-#3C4242 px-8 py-2 border-2 rounded-lg">
            <span>$</span>
            <span>0</span>
          </div>
        </div>

        <div className="flex py-5 items-center border-y-2 justify-between border-y-1  text-#807D7E  text-2xl">
          <h2 className="font-semibold ">Colors</h2>
          <IoIosArrowDown />
        </div>

        <ul className="flex flex-col gap-4 font-semibold text-#807D7E py-10">
          <li className="flex justify-between">
            <span>Purple</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
          <li className="flex  justify-between">
            <span>Black</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
          <li className="flex  justify-between">
            <span>Red</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
          <li className="flex  justify-between">
            <span>Orange</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
        </ul>

        <div className="flex py-5 items-center border-y-2 justify-between border-y-1  text-#807D7E  text-2xl">
          <h2 className="font-semibold ">Sizes</h2>
          <IoIosArrowDown />
        </div>

        <ul className="flex flex-col gap-4 font-semibold text-#807D7E py-10">
          <li className="flex justify-between">
            <span>S</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
          <li className="flex  justify-between">
            <span>M</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
          <li className="flex  justify-between">
            <span>XS</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
          <li className="flex  justify-between">
            <span>XL</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
          <li className="flex  justify-between">
            <span>2XL</span>
            <input className="w-4 h-4" type="checkbox" />
          </li>
        </ul>
      </div>

      <div className="p-12 w-full ">
        <h2 className="font-semibold text-xl text-#333333 mb-12">Women's clothing</h2>
        <div className="flex gap-y-12 flex-wrap justify-between">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ProductList;
