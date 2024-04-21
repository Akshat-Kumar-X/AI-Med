import { IoCart } from "react-icons/io5";
import React, { useState } from 'react';
import { toast } from "react-hot-toast";

const MedicineCard = ({ productImg, productName, price, tag1, tag2 }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const addToCart = (productName, price) => {
        // Add item to local storage
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push({ productName, price });
        console.log(JSON.stringify(cartItems));
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        setAddedToCart(true);
        toast.success('Added to Cart!');
    };

    return (
        <div className="w-full max-w-sm hover:scale-105 duration-300 bg-gray-100 border border-gray-200 rounded-xl shadow">
            <a href="#">
                <img className="rounded-t-xl h-[200px] w-full object-cover" src={productImg} alt="product image" />
            </a>
            <div className="px-5 pb-5 pt-5 rounded-b-xl bg-gray-100">
                <div className="flex flex-row text-gray-600 justify-center items-center">
                    <div className="bg-gray-200 px-3 py-1 rounded-full mr-2">{tag1}</div>
                    <div className="bg-gray-200 px-3 py-1 rounded-full">{tag2}</div>
                </div>
                <a href="#">
                    <h5 className="text-xl  tracking-tight text-gray-900">{productName}</h5>
                </a>
                <div className="flex items-center mt-1 mb-1 gap-2">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">5.0</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <span className="text-3xl font-bold text-gray-900">₹{price}</span>
                    <button onClick={() => addToCart(productName, price)} className={`text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center ${addedToCart && 'cursor-not-allowed'}`} disabled={addedToCart}>
                        <IoCart />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MedicineCard;
