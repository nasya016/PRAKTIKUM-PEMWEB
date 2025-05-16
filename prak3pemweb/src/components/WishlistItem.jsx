import React from "react";
import PropTypes from "prop-types";

const WishlistItem = ({ book, onBuy }) => {
  return (
    <div className="bg-white shadow p-4 rounded flex justify-between items-center mb-3">
      <div>
        <h3 className="font-bold text-lg">{book.title}</h3>
        <p className="text-gray-600">by {book.author}</p>
      </div>
      <button
        onClick={() => onBuy(book.id)}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Sudah Dibeli
      </button>
    </div>
  );
};

WishlistItem.propTypes = {
  book: PropTypes.object.isRequired,
  onBuy: PropTypes.func.isRequired,
};

export default WishlistItem;