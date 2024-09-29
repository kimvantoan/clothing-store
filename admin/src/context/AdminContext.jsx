import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AdminContext = createContext(null);

const AdminContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3000/category");
      setCategories(res.data.category);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3000/order/allOrder", {
        withCredentials: true,
      });
      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/product");
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = () => {
    axios
      .get("http://localhost:3000/user", { withCredentials: true })
      .then((res) => setUsers(res.data.users))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUsers(), fetchOrders(), fetchProducts(), fetchCategories();
  }, []);

  const contextValue = {
    products,
    users,
    orders,
    categories,
    setUsers,
    fetchUsers,
    fetchOrders,
    fetchProducts,
    fetchCategories,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;
