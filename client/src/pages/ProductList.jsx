import React from "react";

import ProductItem from '../components/ProductItem'
import Layout from "../components/Layout";
import Filter from "../components/Filter";
const ProductList = () => {
  return (
    <Layout>
    <div className="flex mx-24">
      <Filter/>
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
