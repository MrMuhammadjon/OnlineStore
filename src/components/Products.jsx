import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Minus, MoveLeft, Plus, Star, StarHalf, StarHalfIcon } from 'lucide-react';
import { Heart } from 'lucide-react';
import 'boxicons'
import toast from 'react-hot-toast';
import { useAppContext } from "../context/AppContext"; // pathingizga qarab moslang


const Products = () => {
    const [counts, setCounts] = useState({});
    const [showFavorites, setShowFavorites] = useState(false);
    const [favorites, setFavorites] = useState({});

    const { products } = useAppContext();

    const displayedProducts = showFavorites
        ? products.filter(product => favorites[product.id])
        : products;


    return (
        <>
            <div className='w-[90%] md:w-[85%] m-auto mt-5'>
                <h1 className="text-xl font-bold mb-4 tetx-red-200">Mahsulotlar</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {displayedProducts.map(product => {
                        const count = counts[product.id] || 0;
                        const displayedProducts = showFavorites
                            ? products.filter(product => favorites[product.id])
                            : products;


                        return (
                            <div key={product.id} className="border border-gray-500/20 rounded-2xl md:px-4 px-3 py-2 bg-white min-w-40 max-w-56 w-full hover:shadow-lg transition-shadow duration-300">
                                <button
                                    onClick={() => setShowFavorites(prev => !prev)}
                                    className={`flex items-center gap-1 px-3 py-1 border rounded-md text-sm ${showFavorites ? 'bg-red-100 text-red-600 border-red-300' : 'text-gray-600 border-gray-300'
                                        }`}
                                >
                                    <Heart fill={showFavorites ? 'red' : 'none'} className="w-4 h-4" />
                                </button>
                                <div className="group cursor-pointer flex items-center justify-center px-2">
                                    <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.thumbnail} alt={product.title} />
                                </div>
                                <div className="text-gray-500/60 text-sm">
                                    <p>{product.category}</p>
                                    <p className="text-gray-700 font-medium text-lg truncate w-full">{product.title}</p>
                                    <p>
                                        {product.description.length > 10 ? `${product.description.slice(0, 25)}...` : product.description}
                                    </p>
                                    <div className="flex items-center gap-0.5 text-sm">
                                        <box-icon type='solid' name='star' color='yellow' width='12px'></box-icon>
                                        <p>({product.rating})</p>
                                    </div>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="md:text-xl text-base font-medium text-indigo-500 flex flex-col">
                                            ${product.discountPrice || product.price} <span className="text-gray-500/60 md:text-sm text-xs line-through">${product.price}</span>
                                        </p>

                                        <div className="text-indigo-500">
                                            {count === 0 ? (
                                                <button
                                                    className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium"
                                                    onClick={() => {
                                                        setCounts(prev => ({ ...prev, [product.id]: 1 }));
                                                        toast.success(`${product.title} added to cart!`);
                                                    }}
                                                >
                                                    <Plus />
                                                    Add
                                                </button>

                                            ) : (
                                                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                                                    <button onClick={() =>
                                                        setCounts(prev => ({
                                                            ...prev,
                                                            [product.id]: Math.max((prev[product.id] || 0) - 1, 0)
                                                        }))
                                                    } className="cursor-pointer text-md px-2 h-full">-</button>
                                                    <span className="w-5 text-center">{count}</span>
                                                    <button onClick={() =>
                                                        setCounts(prev => ({
                                                            ...prev,
                                                            [product.id]: (prev[product.id] || 0) + 1
                                                        }))
                                                    } className="cursor-pointer text-md px-2 h-full">+</button>
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
        </>
    );
};

export default Products;
