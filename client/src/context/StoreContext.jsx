import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(()=>{
    axios.get('http://localhost:3000/product')
  })
  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.log(error));
  }, []);

  const fetchCart = () => {
    axios
      .get("http://localhost:3000/cart", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setCart(res.data.cart))
      .catch((error) => console.log(error));
  };
  const handleAddToCart = async (productId, size, color) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/cart/add",
        {
          productId: productId,
          size: size,
          color: color,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      toast.success(res.data.message);
      fetchCart();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleRemoveCart = async (cartItemId) => {
    try {
      const res = await axios.delete("http://localhost:3000/cartItem/delete", {
        data: {
          _id: cartItemId,
        },
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });

      fetchCart();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handlePlus = async (cartItemId, quantity) => {
    try {
      const res = await axios.patch(
        "http://localhost:3000/cartItem/update",
        {
          _id: cartItemId,
          quantity: quantity + 1,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      fetchCart();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleSub = async (cartItemId, quantity) => {
    try {
      const res = await axios.patch(
        "http://localhost:3000/cartItem/update",
        {
          _id: cartItemId,
          quantity: quantity - 1,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      fetchCart();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const contextValue = {
    products,
    cart,
    handleAddToCart,
    handleRemoveCart,
    handlePlus,
    handleSub,
    fetchCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
