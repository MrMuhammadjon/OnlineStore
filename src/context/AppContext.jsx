'use strict';
import { createContext, useState, useContext, useEffect } from 'react';
import axios, { all } from 'axios';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [isSeller, setIsSeller] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [addOnLimit, setAddOnLimit] = useState(10);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [LimitProducts, setLimitProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(user, setUser);



  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products?limit=99`);
        setAllProducts(response.data.products);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products?limit=${addOnLimit}`);
        setLimitProducts(response.data.products);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    getProducts();
  }, [addOnLimit]);

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

  const UpdateCartItem = (itemId, quantity) => {
    let cartData = { ...cartItems };
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Mahsulot savatchada yangilandi");
  };

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
      products: LimitProducts,
      cartItems,
      addToCart,
      UpdateCartItem,
      RemoveFromCart,
      addOnLimiProduct,
      showUserLogin,
      setShowUserLogin,
      allProducts: allProducts,
      loading
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
