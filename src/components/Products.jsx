import React, { useState } from 'react';
import { Plus, Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAppContext } from "../context/AppContext";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

const Products = () => {
    const [counts, setCounts] = useState({});
    const [showFavorites, setShowFavorites] = useState(false);
    const [favorites, setFavorites] = useState({});

    const { products, cartItems, addOnLimiProduct } = useAppContext();

    // console.log(products);
    

    const toggleFavorite = (id) => {
        setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const displayedProducts = showFavorites
        ? products.filter(product => favorites[product.id])
        : products;

    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [products]);




    return (
        <>

            <div className='w-[90%] md:w-[85%] m-auto mt-5'>
                <h1 className="text-xl font-bold mb-4 ">{t('menu.newArrivals')}</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {displayedProducts.map(product => {
                        const count = counts[product.id] || 0;

                        return (
                            <div data-aos="zoom-in" key={product.id} className="border border-gray-500/20 rounded-2xl px-3 py-2 bg-white hover:shadow-lg transition-shadow duration-300 z-20">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleFavorite(product.id);
                                    }}
                                    className={`flex items-center gap-1 px-3 py-1 border rounded-md text-sm ${favorites[product.id] ? 'bg-red-100 text-red-600 border-red-300' : 'text-gray-600 border-gray-300'
                                        }`}
                                >
                                    <Heart fill={favorites[product.id] ? 'red' : 'none'} className="w-4 h-4" />
                                </button>

                                <div className="flex items-center justify-center px-2">
                                    <img className="max-w-32" src={product.thumbnail} alt={product.title} />
                                </div>

                                <div className="text-gray-500/60 text-sm mt-2">
                                    <p>{product.category}</p>
                                    <p className="text-gray-700 font-medium text-lg truncate">{product.title}</p>
                                    <p>{product.description.length > 25 ? `${product.description.slice(0, 25)}...` : product.description}</p>
                                    <div className="flex items-center gap-1 text-sm mt-1">
                                        <box-icon type='solid' name='star' color='yellow' width='12px'></box-icon>
                                        <p>({product.rating})</p>
                                    </div>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-indigo-500 font-medium">
                                            ${product.discountPrice || product.price}
                                            <span className="line-through text-xs text-gray-500/60 ml-1">${product.price}</span>
                                        </p>

                                        <div className="text-indigo-500">
                                            {!cartItems[product.id] ? (
                                                <button
                                                    className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 w-[64px] h-[34px] rounded text-indigo-600 text-sm"
                                                    onClick={() => {
                                                        setCounts(prev => ({ ...prev, [product.id]: 1 }));
                                                        toast.success(`${product.title} savatga qo'shildi!`);
                                                    }}
                                                >
                                                    Qo‘shish
                                                </button>
                                            ) : (
                                                <div className="flex items-center gap-2 w-20 h-[34px] bg-indigo-500/25 rounded">
                                                    <button onClick={() =>
                                                        setCounts(prev => ({
                                                            ...prev,
                                                            [product.id]: Math.max((prev[product.id] || 0) - 1, 0)
                                                        }))
                                                    } className="px-2">-</button>
                                                    <span>{cartItems[product.id]}</span>
                                                    <button onClick={() =>
                                                        setCounts(prev => ({
                                                            ...prev,
                                                            [product.id]: (prev[product.id] || 0) + 1
                                                        }))
                                                    } className="px-2">+</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="w-full flex items-center justify-center mt-5">
                <button className='py-2 px-4 bg-purple-500 rounded-2xl text-white cursor-pointer mt-10' onClick={() => addOnLimiProduct()}>Yana Ko'rsatish 10</button>
            </div>
        </>

    );
};

export default Products;
