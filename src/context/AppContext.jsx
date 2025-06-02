'use strict';
import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [addOnLimit, setAddOnLimit] = useState(10);
  const [showUserLogin, setShowUserLogin] = useState(false);

  // Mahsulotlarni chaqirish
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products?limit=${addOnLimit}`);
        setAllProducts(response.data.products);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    getProducts();
  }, [addOnLimit]); // ✅ addOnLimit kiritildi

  // Savatchaga qo‘shish
  const addToCart = (itemId) => {
    let cartData = { ...cartItems };
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Mahsulot savatchaga qo'shildi");
  };

  // Yangilash
  const UpdateCartItem = (itemId, quantity) => {
    let cartData = { ...cartItems };
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Mahsulot savatchada yangilandi");
  };

  // O‘chirish
  const RemoveFromCart = (itemId) => {
    let cartData = { ...cartItems };
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] <= 0) delete cartData[itemId];
      toast.success("Mahsulot savatchadan o'chirildi");
    } else {
      toast.error("Savatchada bunday mahsulot mavjud emas");
    }
    setCartItems(cartData);
  };

  // Ko‘proq mahsulot yuklash
  const addOnLimiProduct = () => {
    setAddOnLimit(prev => prev + 10);
    toast.success(`Yana 10 ta mahsulot yuklandi`);
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      isSeller,
      setIsSeller,
      products: allProducts,
      cartItems,
      addToCart,
      UpdateCartItem,
      RemoveFromCart,
      addOnLimiProduct,
      showUserLogin,
      setShowUserLogin
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
