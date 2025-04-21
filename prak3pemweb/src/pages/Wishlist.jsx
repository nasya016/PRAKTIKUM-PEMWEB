import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const Wishlist = () => {
  const { wishlist, addBookToWishlist, removeFromWishlist } =
    useContext(BookContext);
  const [title, setTitle] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addBookToWishlist(title.trim());
    setTitle('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Wishlist</h2>
      <form onSubmit={handleAdd} className="mb-4 space-y-2">
        <input
          className="border p-2 w-full"
          placeholder="Judul Buku yang Ingin Dibeli"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Tambah
        </button>
      </form>
      <ul>
        {wishlist.map((book, idx) => (
          <li key={idx} className="mb-2 border p-2 rounded bg-white shadow flex justify-between">
            <span>{book.title}</span>
            <button
              onClick={() => removeFromWishlist(idx)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Sudah Beli
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;