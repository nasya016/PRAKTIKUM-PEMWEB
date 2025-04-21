import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const Library = () => {
  const { library, addBookToLibrary, updateBookStatus } =
    useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError('Judul dan Penulis wajib diisi!');
      return;
    }
    addBookToLibrary({ title, author, status: 'Belum Dibaca' });
    setTitle('');
    setAuthor('');
    setError('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Library</h2>
      <form onSubmit={handleAdd} className="mb-4 space-y-2">
        <input
          className="border p-2 w-full"
          placeholder="Judul Buku"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Penulis"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Tambah
        </button>
      </form>
      <ul>
        {library.map((book, idx) => (
          <li key={idx} className="mb-2 border p-2 rounded bg-white shadow">
            <p>
              <strong>{book.title}</strong> oleh {book.author}
            </p>
            <p>Status: {book.status}</p>
            <select
              value={book.status}
              onChange={(e) => updateBookStatus(idx, e.target.value)}
              className="mt-1 border p-1"
            >
              <option value="Belum Dibaca">Belum Dibaca</option>
              <option value="Sedang Dibaca">Sedang Dibaca</option>
              <option value="Sudah Dibaca">Sudah Dibaca</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;