import React from "react";
import { Route, Routes } from "react-router-dom";
import ListProduct from "./pages/products/ListProduct";
import AddProduct from "./pages/products/AddProduct";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProduct from "./pages/products/EditProduct";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<ListProduct />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={2}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
    </div>
  );
};

export default App;