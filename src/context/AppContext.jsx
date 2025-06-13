'use strict';
import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // User state with localStorage persistence
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isSeller, setIsSeller] = useState(false);
  
  // Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const [addOnLimit, setAddOnLimit] = useState(10);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [limitedProducts, setLimitedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products once on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://dummyjson.com/products?limit=99`);
        setAllProducts(response.data.products);
        setError(null);
      } catch (err) {
        console.error("Xatolik:", err);
        setError("Mahsulotlarni yuklab bo'lmadi");
        toast.error("Mahsulotlarni yuklab bo'lmadi");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Update limited products when limit or allProducts change
  useEffect(() => {
    setLimitedProducts(allProducts.slice(0, addOnLimit));
  }, [allProducts, addOnLimit]);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Cart manipulation functions
  const addToCart = useCallback((itemId) => {
    console.log(`Mahsulot ID: ${itemId} savatchaga qo'shilmoqda...`);
    
    setCartItems(prev => {
      const newQuantity = (prev[itemId] || 0) + 1;
      toast.success("Mahsulot savatchaga qo'shildi");
      return { ...prev, [itemId]: newQuantity };
      
    });
  }, []);

  const updateCartItem = useCallback((itemId, quantity) => {
    if (quantity < 1) return;
    
    setCartItems(prev => {
      return { ...prev, [itemId]: quantity };
    });
    toast.success("Savatcha yangilandi");
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems(prev => {
      if (!prev[itemId]) {
        toast.error("Savatchada bunday mahsulot mavjud emas");
        return prev;
      }
      
      const newItems = { ...prev };
      delete newItems[itemId];
      toast.success("Mahsulot savatchadan o'chirildi");
      return newItems;
    });
  }, []);

  const loadMoreProducts = useCallback(() => {
    setAddOnLimit(prev => prev + 10);
    toast.success(`Yana 10 ta mahsulot yuklandi`);
  }, []);

  const contextValue = {
    user,
    setUser,
    isSeller,
    setIsSeller,
    products: limitedProducts,
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    loadMoreProducts,
    showUserLogin,
    setShowUserLogin,
    allProducts,
    loading,
    error
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);