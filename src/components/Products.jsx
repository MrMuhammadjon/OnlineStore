import React, { useState, useEffect, useCallback } from 'react';
import { Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAppContext } from "../context/AppContext";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import "aos/dist/aos.css";

const Products = () => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : {};
    });
    const [showFavorites, setShowFavorites] = useState(false);
    const { t } = useTranslation();
    
    const { 
        products, 
        cartItems, 
        addToCart, 
        updateCartItem, 
        removeFromCart,
        addOnLimiProduct,
        loading,
        error
    } = useAppContext();

    // Initialize AOS animations
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            disable: window.innerWidth < 768
        });
        
        return () => AOS.refresh();
    }, []);

    // Persist favorites to localStorage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = useCallback((id) => {
        setFavorites(prev => {
            const updated = { ...prev, [id]: !prev[id] };
            toast.success(
                updated[id] 
                    ? t('toasts.addedToFavorites') 
                    : t('toasts.removedFromFavorites')
            );
            return updated;
        });
    }, [t]);

    const displayedProducts = showFavorites
        ? products.filter(product => favorites[product.id])
        : products;

    const handleAddToCart = (product) => {
        addToCart(product.id);
        toast.success(t('toasts.addedToCart', { name: product.title }));
    };

    const handleIncrement = (productId) => {
        const newQuantity = (cartItems[productId] || 0) + 1;
        updateCartItem(productId, newQuantity);
    };

    const handleDecrement = (productId) => {
        if (cartItems[productId] === 1) {
            removeFromCart(productId);
        } else {
            updateCartItem(productId, cartItems[productId] - 1);
        }
    };

    if (loading) {
        return (
            <div className="w-[90%] md:w-[85%] m-auto mt-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {Array(10).fill().map((_, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl p-4 bg-white animate-pulse">
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                            <div className="h-40 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>
                            <div className="h-8 bg-gray-200 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-[90%] md:w-[85%] m-auto mt-5 text-center py-10">
                <div className="text-red-500 text-lg">{error}</div>
                <button 
                    className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md"
                    onClick={() => window.location.reload()}
                >
                    {t('errors.reload')}
                </button>
            </div>
        );
    }

    return (
        <>
            <div className='w-[90%] md:w-[85%] m-auto mt-5'>
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">{t('menu.newArrivals')}</h1>
                    <button 
                        onClick={() => setShowFavorites(!showFavorites)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm border transition-colors ${
                            showFavorites 
                                ? 'bg-red-100 text-red-600 border-red-300' 
                                : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'
                        }`}
                    >
                        <Heart 
                            fill={showFavorites ? 'red' : 'none'} 
                            className="w-4 h-4" 
                        />
                        {showFavorites ? t('buttons.showAll') : t('buttons.showFavorites')}
                    </button>
                </div>
                
                {displayedProducts.length === 0 ? (
                    <div className="text-center py-10">
                        <div className="text-gray-500 text-lg">
                            {showFavorites 
                                ? t('errors.noFavorites') 
                                : t('errors.noProducts')
                            }
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {displayedProducts.map(product => {
                            const quantity = cartItems[product.id] || 0;
                            const discountPercentage = Math.round(
                                ((product.price - product.discountPrice) / product.price) * 100
                            );

                            return (
                                <div 
                                    data-aos="zoom-in"
                                    key={product.id} 
                                    className="border border-gray-200 rounded-2xl p-3 bg-white hover:shadow-lg transition-shadow duration-300 relative"
                                >
                                    {discountPercentage > 0 && (
                                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            -{discountPercentage}%
                                        </div>
                                    )}
                                    
                                    <button
                                        onClick={() => toggleFavorite(product.id)}
                                        className={`absolute top-3 right-3 p-1.5 rounded-full ${
                                            favorites[product.id] 
                                                ? 'text-red-500 bg-red-100' 
                                                : 'text-gray-500 bg-gray-100'
                                        }`}
                                    >
                                        <Heart 
                                            fill={favorites[product.id] ? 'currentColor' : 'none'} 
                                            className="w-4 h-4" 
                                        />
                                    </button>

                                    <div className="flex items-center justify-center h-40">
                                        <img 
                                            className="max-h-full object-contain" 
                                            src={product.thumbnail} 
                                            alt={product.title} 
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="mt-3">
                                        <p className="text-gray-500 text-xs uppercase">
                                            {product.category}
                                        </p>
                                        <h3 className="text-gray-800 font-medium truncate mt-1">
                                            {product.title}
                                        </h3>
                                        
                                        <div className="flex items-center mt-1">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        width="14"
                                                        height="13"
                                                        viewBox="0 0 18 17"
                                                        fill="none"
                                                        className={i < Math.floor(product.rating) ? '' : 'opacity-40'}
                                                    >
                                                        <path
                                                            d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                                                            fill={i < product.rating ? "#615fff" : "none"}
                                                            stroke={i < product.rating ? "none" : "#615fff"}
                                                        />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="text-gray-500 text-xs ml-1">
                                                ({product.rating.toFixed(1)})
                                            </span>
                                        </div>

                                        <div className="flex items-end justify-between mt-3">
                                            <div>
                                                <p className="text-purple-600 font-bold">
                                                    ${product.discountPrice || product.price}
                                                </p>
                                                {product.discountPrice && (
                                                    <p className="text-gray-400 text-xs line-through">
                                                        ${product.price}
                                                    </p>
                                                )}
                                            </div>
                                            
                                            {quantity === 0 ? (
                                                <button
                                                    className="bg-indigo-100 hover:bg-indigo-200 text-purple-700 text-sm font-medium px-3 py-1.5 rounded-md transition-colors"
                                                    onClick={() => handleAddToCart(product)}
                                                >
                                                    {t('menu.add')}
                                                </button>
                                            ) : (
                                                <div className="flex items-center gap-2 bg-indigo-100 rounded-md">
                                                    <button 
                                                        className="px-2 py-1.5 text-purple-700 hover:bg-indigo-200 transition-colors"
                                                        onClick={() => handleDecrement(product.id)}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-indigo-purple font-medium">
                                                        {quantity}
                                                    </span>
                                                    <button 
                                                        className="px-2 py-1.5 text-purple-700 hover:bg-indigo-200 transition-colors"
                                                        onClick={() => handleIncrement(product.id)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            
            {!showFavorites && products.length > 0 && (
                <div className="w-full flex items-center justify-center mt-5">
                    <button 
                        className="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-colors"
                        onClick={addOnLimiProduct}
                    >
                        {t('menu.showmore')}
                    </button>
                </div>
            )}
        </>
    );
};

export default Products;