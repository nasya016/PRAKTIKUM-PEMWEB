import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [library, setLibrary] = useState(() => {
    const saved = localStorage.getItem('library');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addBookToLibrary = (book) => setLibrary([...library, book]);

  const updateBookStatus = (index, status) => {
    const updated = [...library];
    updated[index].status = status;
    setLibrary(updated);
  };

  const addBookToWishlist = (bookTitle) =>
    setWishlist([...wishlist, { title: bookTitle }]);

  const removeFromWishlist = (index) => {
    const updated = [...wishlist];
    updated.splice(index, 1);
    setWishlist(updated);
  };

  return (
    <BookContext.Provider
      value={{
        library,
        wishlist,
        addBookToLibrary,
        updateBookStatus,
        addBookToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};