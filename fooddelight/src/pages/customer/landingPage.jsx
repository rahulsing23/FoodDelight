import { useUser } from "@clerk/clerk-react";
import React from "react";

const LandingPage = () => {
  const {user} = useUser();
  return (
    <div className="">
      {/* Header Section */}
      <header className="hero-section bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-20">
        <div className="hero-content max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Delicious Food Delivered to Your Doorstep
          </h1>
          <p className="text-lg mb-6">
            Order from your favorite restaurants and enjoy the taste of
            happiness.
          </p>
          {
            user ?  <a
            href="/menu"
            className="btn btn-primary bg-white text-blue-500 px-6 py-2 rounded shadow hover:bg-gray-100"
          >
            Get Started
          </a>:
           <a
           href="/login"
           className="btn btn-primary bg-white text-blue-500 px-6 py-2 rounded shadow hover:bg-gray-100"
         >
           Get Started
         </a>
          }
         
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="about-section py-16 px-5 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Features</h2>
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature-card bg-white shadow-md p-6">
              <i className="fas fa-bicycle text-blue-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p>Experience super-fast delivery to your doorstep within minutes.</p>
            </div>
            <div className="feature-card bg-white shadow-md p-6">
              <i className="fas fa-utensils text-blue-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Wide Variety</h3>
              <p>Choose from an extensive range of cuisines and restaurants.</p>
            </div>
            <div className="feature-card bg-white shadow-md p-6">
              <i className="fas fa-star text-blue-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Top-rated Service</h3>
              <p>Enjoy the best food delivery service trusted by thousands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section py-16 px-5 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Pricing</h2>
          <div className="pricing-cards grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-gray-100 shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p className="text-lg font-semibold mb-4">$9.99 / month</p>
              <ul className="mb-6">
                <li>Unlimited Orders</li>
                <li>Exclusive Offers</li>
                <li>24/7 Support</li>
              </ul>
              <a
                href="#"
                className="btn btn-secondary bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
              >
                Choose Plan
              </a>
            </div>
            <div className="card bg-gray-100 shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Premium</h3>
              <p className="text-lg font-semibold mb-4">$19.99 / month</p>
              <ul className="mb-6">
                <li>Everything in Basic</li>
                <li>Priority Delivery</li>
                <li>Free Delivery on Orders</li>
              </ul>
              <a
                href="#"
                className="btn btn-secondary bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="offers-section py-16 px-5 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Special Offers</h2>
          <div className="offers-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="offer-card bg-white shadow-md p-6 flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFlRfGEErow8wZHVzu0WCP-qLefz8dQaU5g&s"
                alt="Offer 1"
                className="mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">20% Off Your First Order</h3>
              <p>Sign up today and enjoy half off your first meal.</p>
            </div>
            <div className="offer-card bg-white shadow-md p-6 flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwkQrahPKoYVgTAkCQ_1qhea-73Uk-rxwNUw&s"
                alt="Offer 2"
                className="mb-12 rounded"
              />
              <h3 className="text-xl font-bold mb-2">Free Dessert</h3>
              <p>Order any combo meal and get a free dessert.</p>
            </div>
            <div className="offer-card bg-white shadow-md p-6 flex flex-col items-center">
              <img
                src="https://t3.ftcdn.net/jpg/07/81/23/70/360_F_781237005_BneGfAWx7W2YbGGVF5NEjY3cH8MYBGSE.jpg"
                alt="Offer 3"
                className="mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">Weekend Deals</h3>
              <p>Special discounts available every weekend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 FoodDelight. All rights reserved.</p>
          <ul className="social-icons flex justify-center space-x-4 mt-4">
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
