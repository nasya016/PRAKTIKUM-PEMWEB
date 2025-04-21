import React, { useState } from "react";
import PropTypes from "prop-types";

const BookForm = ({ onSubmit, isWishlist }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("belum dibaca");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return alert("Judul dan penulis wajib diisi.");

    const newBook = {
      id: Date.now(),
      title,
      author,
      status: isWishlist ? "ingin dibeli" : status,
    };
    onSubmit(newBook);
    setTitle("");
    setAuthor("");
    setStatus("belum dibaca");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded mb-6">
      <h2 className="font-semibold text-lg mb-2">
        {isWishlist ? "Tambah Buku ke Wishlist" : "Tambah Buku ke Library"}
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Judul Buku"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded flex-1"
        />
        <input
          type="text"
          placeholder="Penulis"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="p-2 border rounded flex-1"
        />
        {!isWishlist && (
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="belum dibaca">Belum Dibaca</option>
            <option value="sedang dibaca">Sedang Dibaca</option>
            <option value="sudah dibaca">Sudah Dibaca</option>
          </select>
        )}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Tambah
        </button>
      </div>
    </form>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isWishlist: PropTypes.bool,
};

export default BookForm;