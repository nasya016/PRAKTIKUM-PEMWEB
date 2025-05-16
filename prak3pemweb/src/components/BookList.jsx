import React, { useState } from 'react';
import BookItem from './BookItem';
import PropTypes from 'prop-types';

const BookList = ({ books, onEdit, onDelete }) => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) =>
    (filter === '' || book.status === filter) &&
    (search === '' || book.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Cari judul..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 flex-1"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2"
        >
          <option value="">Semua</option>
          <option value="belum dibaca">Belum Dibaca</option>
          <option value="sedang dibaca">Sedang Dibaca</option>
          <option value="sudah dibaca">Sudah Dibaca</option>
        </select>
      </div>
      {filteredBooks.map((book) => (
        <BookItem key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default BookList;