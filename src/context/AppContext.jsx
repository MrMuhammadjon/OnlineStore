// context/AppContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser, isSeller, setIsSeller, products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);