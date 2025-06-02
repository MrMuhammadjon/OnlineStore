import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Minus, MoveLeft, Plus, Star } from 'lucide-react';

const Products = () => {
    // const [products, setProducts] = useState([]);
    // const [counts, setCounts] = useState({});

    // useEffect(() => {
    //     const getProducts = async () => {
    //         try {
    //             const response = await axios.get('https://dummyjson.com/products');
    //             setProducts(response.data.products);
    //         } catch (error) {
    //             console.error("Xatolik:", error);
    //         }
    //     };

    //     getProducts();
    // }, []);

    return (
        <></>
        // <div classNameName='w-[90%] md:w-[80%] m-auto mt-5'>
        //     <h1 classNameName="text-xl font-bold mb-4">Mahsulotlar</h1>
        //     <div classNameName="grid grid-cols-2 md:grid-cols-4 gap-4">
        //         {products.map(product => {
        //             const count = counts[product.id] || 0;

        //             return (
        //                 <div key={product.id} classNameName="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-40 max-w-56 w-full">
        //                     <div classNameName="group cursor-pointer flex items-center justify-center px-2">
        //                         <img classNameName="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.thumbnail} alt={product.title} />
        //                     </div>
        //                     <div classNameName="text-gray-500/60 text-sm">
        //                         <p>{product.category}</p>
        //                         <p classNameName="text-gray-700 font-medium text-lg truncate w-full">{product.title}</p>
        //                         <div classNameName="flex items-center gap-0.5">
        //                             {Array(5).fill('').map((_, i) => (
        //                                 product.rating > i ? (
        //                                     <Star key={i} color='yellow'/>
        //                                 ) : (
        //                                     <Star key={i}/>
        //                                 )
        //                             ))}
        //                             <p>({product.rating})</p>
        //                         </div>

        //                         <div classNameName="flex items-end justify-between mt-3">
        //                             <p classNameName="md:text-xl text-base font-medium text-indigo-500">
        //                                 ${product.discountPrice || product.price} <span classNameName="text-gray-500/60 md:text-sm text-xs line-through">${product.price}</span>
        //                             </p>

        //                             <div classNameName="text-indigo-500">
        //                                 {count === 0 ? (
        //                                     <button
        //                                         classNameName="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium"
        //                                         onClick={() => setCounts(prev => ({ ...prev, [product.id]: 1 }))}
        //                                     >
        //                                         <Plus/>
        //                                         Add
        //                                     </button>
        //                                 ) : (
        //                                     <div classNameName="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
        //                                         <button onClick={() =>
        //                                             setCounts(prev => ({
        //                                                 ...prev,
        //                                                 [product.id]: Math.max((prev[product.id] || 0) - 1, 0)
        //                                             }))
        //                                         } classNameName="cursor-pointer text-md px-2 h-full">-</button>
        //                                         <span classNameName="w-5 text-center">{count}</span>
        //                                         <button onClick={() =>
        //                                             setCounts(prev => ({
        //                                                 ...prev,
        //                                                 [product.id]: (prev[product.id] || 0) + 1
        //                                             }))
        //                                         } classNameName="cursor-pointer text-md px-2 h-full">+</button>
        //                                     </div>
        //                                 )}
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             );
        //         })}

        //     </div>
        // </div>
    );
};

export default Products;
