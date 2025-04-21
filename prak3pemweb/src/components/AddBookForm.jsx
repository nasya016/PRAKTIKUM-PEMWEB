import React, { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Belum Dibaca');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ title, status, id: Date.now() });  // Menambah buku baru
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Nama Buku" 
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Belum Dibaca">Belum Dibaca</option>
        <option value="Sedang Dibaca">Sedang Dibaca</option>
        <option value="Sudah Dibaca">Sudah Dibaca</option>
      </select>
      <button type="submit">Tambah Buku</button>
    </form>
  );
};

export default AddBookForm;