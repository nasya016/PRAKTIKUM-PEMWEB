import React from "react";
import PropTypes from "prop-types";

const BookItem = ({ book, onStatusChange }) => {
  return (
    <div className="bg-white shadow p-4 rounded flex justify-between items-center mb-3">
      <div>
        <h3 className="font-bold text-lg">{book.title}</h3>
        <p className="text-gray-600">by {book.author}</p>
        <p className="text-sm mt-1 text-gray-700">Status: {book.status}</p>
      </div>
      <select
        value={book.status}
        onChange={(e) => onStatusChange(book.id, e.target.value)}
        className="p-2 border rounded"
      >
        <option value="belum dibaca">Belum Dibaca</option>
        <option value="sedang dibaca">Sedang Dibaca</option>
        <option value="sudah dibaca">Sudah Dibaca</option>
      </select>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default BookItem;