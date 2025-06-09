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
        <>
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

            <div className="mt-20 max-w-5xl mx-2 md:mx-auto p-px rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-500/30">
                <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] bg-gradient-to-r from-[#F3EAFF] to-[#E1EFFF]">
                    <div className="flex items-center justify-center bg-white px-3 py-1.5 shadow gap-1 rounded-full text-xs">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.503 10.06a3.3 3.3 0 0 0-.88 1.809 4.7 4.7 0 0 0-.067 1.03v.545h.75q.416-.002.825-.075a3.24 3.24 0 0 0 1.81-.882 1.65 1.65 0 0 0-.131-2.325 1.65 1.65 0 0 0-2.307-.103m1.632 1.621a2.1 2.1 0 0 1-1.182.563h-.206v-.207a2.1 2.1 0 0 1 .563-1.18.34.34 0 0 1 .225-.076.63.63 0 0 1 .44.206.506.506 0 0 1 .16.694m9.6-9.581a.853.853 0 0 0-.835-.835A8.2 8.2 0 0 0 6.816 3.28L5.288 5.062l-2.25-.468a.94.94 0 0 0-.863.253l-.637.637a.94.94 0 0 0-.263.76.94.94 0 0 0 .422.693l1.931 1.238.122.075 3 3.047.075.075 1.238 1.931a.94.94 0 0 0 .693.422h.104a.94.94 0 0 0 .656-.272l.637-.637a.94.94 0 0 0 .253-.863l-.468-2.24 1.725-1.482A8.24 8.24 0 0 0 13.735 2.1M2.915 5.765l1.238.263-.6.703-.937-.628zm5.982 6.657-.628-.938.703-.6.263 1.238zm1.978-5.053-3.45 2.943-2.737-2.737 2.943-3.45a6.98 6.98 0 0 1 4.932-1.688 7 7 0 0 1-1.688 4.932" fill="#5C67FF" />
                            <path d="M10.434 6.216a1.116 1.116 0 0 0-.056-1.594 1.086 1.086 0 0 0-1.918.742 1.1 1.1 0 0 0 .38.786 1.125 1.125 0 0 0 1.594.066" fill="#5C67FF" />
                        </svg>
                        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-medium">Trusted by Experts</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-medium mt-2">
                        Unlock Your Potential with 
                            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Expert Guidance</span>
                            & Proven Results!
                    </h2>
                    <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm">Achieve your goals faster with personalized strategies, hands-on support, and results that speak for themselves.</p>
                    <button type="button" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm px-5 py-2.5 rounded-xl font-medium mt-4 hover:scale-105 active:scale-95 transition-all duration-300">
                        Get Started Today
                    </button>
                </div>
            </div>
        </>
    )
}

export default Banner
