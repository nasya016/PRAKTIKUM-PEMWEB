import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="bg-blue-500 dark:bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">📚 BukuKu</h1>
      <nav className="space-x-4">
        <Link
          to="/"
          className={`hover:underline ${location.pathname === '/' ? 'font-bold underline' : ''}`}
        >
          Library
        </Link>
        <Link
          to="/wishlist"
          className={`hover:underline ${location.pathname === '/wishlist' ? 'font-bold underline' : ''}`}
        >
          Wishlist
        </Link>
      </nav>
    </header>
  );
}

export default Header;