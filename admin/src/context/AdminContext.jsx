import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AdminContext = createContext(null);

const AdminContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3000/order", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
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


  const fetchUser = () => {
    axios
      .get("http://localhost:3000/user/info", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setUser(res.data.user))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUser(), fetchOrders(), fetchProducts();
  }, []);

  const contextValue = {
    products,
    user,
    orders,
    setUser,
    fetchUser,
    fetchOrders,
    fetchProducts,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;
