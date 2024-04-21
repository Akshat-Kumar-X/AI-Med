import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(storedItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
    toast.success('Cart Cleared!');
  };

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="flex flex-col bg-slate-100 p-10 w-[400px] shadow-md rounded-lg">
      <h1 className="text-xl font-semibold mb-3">Order Summary</h1>
      <div className="flex flex-row justify-between items-center text-gray-700 font-semibold mb-2">
        <p>Item</p>
        <p>Price</p>
      </div>
      {cartItems.length === 0 ? (
        <p className="flex flex-row justify-center items-center text-xl text-gray-700 ">No items added to cart</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex-col text-gray-700">
                <div  className="flex flex-row justify-between">
                    <p>{item.productName} </p>
                    <p> ₹{item.price}</p>
                </div> 
                <hr  className="my-3"/>
            </div> 
          ))}
          <div className="text-gray-700 font-semibold mb-4 flex flex-row justify-between">
            <p className="text-gray-700 font-semibold mb-4">Subtotal:</p>
            <p> ₹{totalPrice.toFixed(2)}</p>
          </div>
          
          <button onClick={clearCart} className="bg-blue-500 rounded-md px-3 text-white py-2" >Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
