import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);

  
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartList(JSON.parse(savedCart)); 
      } catch (error) {
        console.error('Error parsing cart data:', error);
        setCartList([]); 
      }
    }
  }, []);

  
  useEffect(() => {
    const calculatedTotal = cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(calculatedTotal);
  }, [cartList]);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-semibold text-gray-800 text-center py-5 border-b">Your Cart</h2>
        {cartList.length === 0 ? (
          <div className="text-center p-10">
            <p className="text-gray-500 text-lg">Your cart is empty!</p>
            <a href="/menu" className="mt-5 inline-block px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">
              Go back to the menu
            </a>
          </div>
        ) : (
          <div className="p-5">
            <table className="w-full table-auto text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border border-gray-300">Item</th>
                  <th className="px-4 py-2 border border-gray-300">Quantity</th>
                  <th className="px-4 py-2 border border-gray-300">Price (₹)</th>
                  <th className="px-4 py-2 border border-gray-300">Subtotal (₹)</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((cartitem, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border border-gray-300">{cartitem.itemName}</td>
                    <td className="px-4 py-2 border border-gray-300">{cartitem.quantity}</td>
                    <td className="px-4 py-2 border border-gray-300">{cartitem.price}</td>
                    <td className="px-4 py-2 border border-gray-300">{cartitem.price * cartitem.quantity}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-semibold">
                  <td colSpan="3" className="px-4 py-2 text-right border border-gray-300">
                    Total:
                  </td>
                  <td className="px-4 py-2 border border-gray-300">{total} ₹</td>
                </tr>
              </tfoot>
            </table>
            <div className="flex justify-end mt-5">
              <a
                href={`/checkout?pay=${total}`}
                className="bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
