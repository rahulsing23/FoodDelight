import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CART_ROUTE, MENU_ROUTE } from '@/utils/constant';
import { useUser } from '@clerk/clerk-react';

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const {user} = useUser();


  useEffect(() => {
    async function fetchData() {
      const response = await axios(MENU_ROUTE, { withCredentials: true });
      setMenuItems(response.data.menu);
    }
    
    async function fetchCart() {
      const response = await axios.get(CART_ROUTE, { withCredentials: true });
      setCart(response.data.cart);
      console.log(cart)
      localStorage.setItem('cart', JSON.stringify(response.data.cart));
    }

    fetchCart();
   
    fetchData();
  
  }, []);






  const handleAddToCart = async (menuItem, quantity) => {
    const newCartItem = {
      itemId: menuItem.itemId,
      email: user?.primaryEmailAddress.emailAddress,
      itemName: menuItem.itemname,
      price: menuItem.price,
      quantity: Number(quantity) || 0, 
    };
   
    console.log('Cart:', cart);
   
    // setCart((prevCart) => {
    //     const existingItemIndex = prevCart.findIndex((item) => item.itemId === menuItem.itemId);
    //     console.log(existingItemIndex)
    //     if (existingItemIndex !== -1) {
         
    //       const updatedCart = [...prevCart];
    //       updatedCart[existingItemIndex] = {
    //         ...updatedCart[existingItemIndex],
    //         quantity: updatedCart[existingItemIndex].quantity + Number(quantity) || 0,
    //       };
    //       console.log(updatedCart);
    //       return updatedCart
         
    //     }
      
    //     return [...prevCart, newCartItem];
    //   });
    
    await axios.post(CART_ROUTE, newCartItem, { withCredentials: true });
    location.reload()
    localStorage.setItem("cart", JSON.stringify(cart));

  };

  return (
    <div>
      <section className="py-10 bg-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Our Menu</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-20">
          {menuItems.map((menuItem) => (
            <div
              key={menuItem.itemId}
              className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
            >
              <img
                src={menuItem.image}
                alt={menuItem.itemname}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{menuItem.itemname}</h3>
                <p className="text-orange-500 text-lg font-bold mt-2">
                  ₹{menuItem.price}
                </p>
                <p className="text-gray-600 mt-2">{menuItem.description}</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const quantity = e.target.quantity.value;
                    if (quantity > 0) {
                      handleAddToCart(menuItem, quantity);
                    }
                  }}
                  className="mt-4 flex flex-col items-center"
                >
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    placeholder="Quantity"
                    required
                    className="border border-gray-300 rounded px-3 py-1 w-3/4"
                  />
                  <button
                    type="submit"
                    className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 FoodDelight. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Menu;
