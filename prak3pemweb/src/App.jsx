import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Library from './pages/Library';
import Wishlist from './pages/Wishlist';
import { BookProvider } from './context/BookContext';

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="min-h-screen bg-slate-100 text-gray-800">
          {/* Judul Utama */}
          <header className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white p-6 text-center shadow-lg">
            <h1 className="text-4xl font-extrabold tracking-widest">
              📚 <span className="underline decoration-pink-400">NASYA'S <span className="text-pink-300">LIBRARY</span></span> ✨
            </h1>
            <p className="text-sm mt-2 text-gray-200 italic">Ini perpustakaan pribadi Nasya 💖</p>
          </header>


          {/* Navigasi */}
          <nav className="bg-blue-800 text-white p-4 flex justify-center gap-4 shadow">
            <Link to="/" className="hover:underline">Library</Link>
            <Link to="/wishlist" className="hover:underline">Wishlist</Link>
          </nav>

          {/* Konten Halaman */}
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Library />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;