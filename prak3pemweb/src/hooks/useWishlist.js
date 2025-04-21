import { useBooks } from '../context/BookContext';  // Impor useBooks, bukan BookContext

const useWishlist = () => {
  const { books, setBooks } = useBooks();  // Mendapatkan buku dari context

  // Fungsi dan logika untuk wishlist dapat ditambahkan di sini
  return { books, setBooks };
};

export default useWishlist;