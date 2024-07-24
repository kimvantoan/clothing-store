import React, { useContext } from "react";

import ProductItem from '../components/ProductItem'
import Layout from "../components/Layout";
import Filter from "../components/Filter";
import { StoreContext } from "../context/StoreContext";
const ProductList = () => {
  const {products}=useContext(StoreContext)
  return (
    <Layout>
    <div className="flex mx-24">
      <Filter/>
      <div className="p-12 w-full ">
        <h2 className="font-semibold text-xl text-#333333 mb-12">Women's clothing</h2>
        <div className="grid grid-cols-3 gap-6">
          {products.map(product=>(
            <ProductItem product={product}/>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ProductList;
