import { UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const userButtonAppearance = {
  elements: {
    userButtonAvatarBox: 'w-10 h-10',
    userButtonPopoverCard: 'bg-blue-100',
    userButtonPopoverActionButton: 'text-red-600',
  },
};

const Navbar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const username = user?.fullName;

  return (
    <div className="flex justify-between items-center w-full h-16  shadow-lg px-4 lg:px-8">
      {/* Logo */}
      <div className="cursor-pointer text-black text-lg hover:text-blue-500">
        <a href="/" className="hover:text-xl">FoodDelight</a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex">
        <ul className="flex justify-between items-center gap-6 text-black">
          <li className="hover:text-blue-500">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="/menu">Menu</a>
          </li>
          {user ? (
            <>
              <li className="hover:text-blue-500">
                <a href="/cart">Cart</a>
              </li>
              <li className="hover:text-blue-500">
                <a href="/orders">Orders</a>
              </li>
            </>
          ) : (
            ''
          )}
          <li className="hover:text-blue-500">
            <a href="/#offers">Special Offers</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="/#pricing">Pricing</a>
          </li>
          <li className="hover:text-blue-500 items-center">
            <a href="">
              {user ? (
                <div className="flex items-center justify-center gap-2 bg-blue-200 p-2 rounded-3xl pr-3">
                  <UserButton appearance={userButtonAppearance} />
                  <p>{username}</p>
                </div>
              ) : (
                <Button
                  className="bg-red-50 text-red-400"
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
              )}
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          type="button"
          className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        id="mobileMenu"
        className="hidden absolute top-16 left-0 w-full bg-[#2c3e50] shadow-lg z-50 md:hidden"
      >
        <ul className="flex flex-col gap-4 p-4 text-white">
          <li className="hover:text-blue-500">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="/menu">Menu</a>
          </li>
          {user ? (
            <>
              <li className="hover:text-blue-500">
                <a href="/cart">Cart</a>
              </li>
              <li className="hover:text-blue-500">
                <a href="/orders">Orders</a>
              </li>
            </>
          ) : (
            ''
          )}
          <li className="hover:text-blue-500">
            <a href="/#offers">Special Offers</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="/#pricing">Pricing</a>
          </li>
          <li className="hover:text-blue-500">
            {user ? (
              <div className="flex items-center justify-center gap-2 bg-blue-200 p-2 rounded-3xl pr-3">
                <UserButton appearance={userButtonAppearance} />
                <p>{username}</p>
              </div>
            ) : (
              <Button
                className="bg-red-50 text-red-400 w-full"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
