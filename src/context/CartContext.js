import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
const CartContext = createContext();


export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const {user}=useAuth();
  const [cart, setCart] = useState([]);
  const [totalprice,setTotalprice]=useState(0);
  const[addressId,setAddressId]=useState(0);
  //const [loading,setLoading]=useState(true);


  const addToCart = (item,quantity) => {
    if(user){
    const existingItem = cart.find((cartItem) => cartItem.productId === item.productId);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.productId === item.productId
          ? { ...cartItem, quantity: cartItem.quantity +quantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);
    }
    console.log(cart)

    localStorage.setItem("cart", JSON.stringify(cart));
  }
  };

  const removeFromCart = (productId) => {
    if(user){
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  }
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };



  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.productId === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart !== storedCart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(()=>{
    if(user && cart.length>0){
      localStorage.setItem(`cart`,JSON.stringify(cart));
    }
  },[user,cart]);
  

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity,setCart, totalprice,setTotalprice,addressId,setAddressId }}
    >
      {children}
    </CartContext.Provider>
  );
};
