import React from "react";
import { Route, Routes } from "react-router-dom";
import ListProduct from "./pages/products/ListProduct";
import AddProduct from "./pages/products/AddProduct";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProduct from "./pages/products/EditProduct";
import ListOrder from "./pages/orders/ListOrder";
import OrderDetail from "./pages/orders/OrderDetail";
import ListCustomer from "./pages/customer/ListCustomer";
import InforCustomer from "./pages/customer/InforCustomer";
import ListCategory from "./pages/category/ListCategory";
import CreateCategory from "./pages/category/CreateCategory";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<ListProduct />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/orders" element={<ListOrder />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/customers/:id" element={<InforCustomer />} />
        <Route path="/customers" element={<ListCustomer />} />
        <Route path="/categories" element={<ListCategory />} />
        <Route path="/categories/create" element={<CreateCategory />} />
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
