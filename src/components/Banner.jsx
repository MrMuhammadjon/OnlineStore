import React, { useState, useEffect } from 'react'
import { useAppContext } from '../context/AppContext';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';



const Banner = () => {
    const { allProducts, cartItems } = useAppContext();

    const [favorites, setFavorites] = useState({});





    const food = allProducts
        .filter(product => product.category === "groceries")
        .slice(0, 10);

    const Electronicscategories = ["laptops", "mobile-accessories"];

    const Electronics = allProducts
        .filter(product => Electronicscategories.includes(product.category))

    const Clothescategories = ["mens-shirts", "mens-shoes", "mens-watches"];
    const Clothes = allProducts
        .filter(product => Clothescategories.includes(product.category))


    const { t, i18n } = useTranslation();

    // const categories = Array.from(new Set(allProducts.map(product => product.category)));
    // console.log(categories);




    return (
        <div>

            <div className="w-[90%] md:w-[85%] m-auto mt-18 h-[400px] overflow-hidden rounded-xl shadow-lg relative">
                <img className='w-full h-full object-cover hover:scale-110 transition-[1s]' src="https://images.uzum.uz/d0e9nfgn274j5sclsod0/main_page_banner.jpg" alt="" />
            </div>
            <h1 className="w-[90%] md:w-[85%] text-xl font-bold m-auto mb-4 mt-18 ">{t('headerElements.Grocery')}</h1>
            <div className="w-[90%] md:w-[85%] m-auto mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {food.map(product => {

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
            <div className="w-[90%] md:w-[85%] m-auto mt-18 h-[400px] overflow-hidden rounded-xl shadow-lg relative">
                <img className='w-full h-full object-cover hover:scale-110 transition-[1s]' src="https://images.uzum.uz/cu0fheei4n324lr3d4gg/main_page_banner.jpg" alt="" />
            </div>
            <h1 className="w-[90%] md:w-[85%] text-xl font-bold m-auto mb-4 mt-18 ">{t('headerElements.Electronics')}</h1>
            <div className="w-[90%] md:w-[85%] m-auto mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {Electronics.map(product => {

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
            <div className="w-[90%] md:w-[85%] m-auto mt-18 h-[400px] overflow-hidden rounded-xl shadow-lg relative">
                <img className='w-full h-full object-cover hover:scale-110 transition-[1s]' src="https://images.uzum.uz/cvcg2f3vgbkm5ehkika0/main_page_banner.jpg" alt="" />
            </div>
            <h1 className="w-[90%] md:w-[85%] text-xl font-bold m-auto mb-4 mt-18 ">{t('menu.forMen')}</h1>
            <div className="w-[90%] md:w-[85%] m-auto mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {Clothes.map(product => {
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
    )
}

export default Banner
