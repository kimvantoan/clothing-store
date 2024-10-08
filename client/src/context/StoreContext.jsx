import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [cart, setCart] = useState({});
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const url = import.meta.env.VITE_API_URL
  
  const fetWishlist = async () => {
    try {
      const res = await axios.get(`${url}/wishlist`, {
        withCredentials: true,
      });
      setWishlist(res.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${url}/order`, {
        withCredentials: true,
      });
      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${url}/product`);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${url}/user/info`, {
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCart = () => {
    axios
      .get(`${url}/cart`, { withCredentials: true })
      .then((res) => setCart(res.data.cart))
      .catch((error) => console.log(error));
  };

  const handleAddToCart = async (productId, size, color) => {
    try {
      const res = await axios.post(
        `${url}/cart/add`,
        {
          productId: productId,
          size: size,
          color: color,
        },
        { withCredentials: true }
      );
      toast.success(res.data.message);
      fetchCart();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleRemoveCart = async (id) => {
    try {
      const res = await axios.delete(
        `${url}/cartItem/delete/${id}`,
        { withCredentials: true }
      );

      fetchCart();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handlePlus = async (cartItemId, quantity) => {
    try {
      const res = await axios.patch(
        `${url}/cartItem/update`,
        {
          _id: cartItemId,
          quantity: quantity + 1,
        },
        { withCredentials: true }
      );
      fetchCart();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleSub = async (cartItemId, quantity) => {
    try {
      const res = await axios.patch(
        `${url}/cartItem/update`,
        {
          _id: cartItemId,
          quantity: quantity - 1,
        },
        { withCredentials: true }
      );
      fetchCart();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchUser(), fetchCart(), fetchOrders(),fetchProduct()
  }, []);

  const contextValue = {
    url,
    products,
    cart,
    user,
    orders,
    setUser,
    handleAddToCart,
    handleRemoveCart,
    handlePlus,
    handleSub,
    fetchCart,
    fetchUser,
    fetchOrders,
    wishlist,
    fetchProduct,
    setWishlist,
    setProducts,
    fetWishlist,
    listProduct,
    setListProduct,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
