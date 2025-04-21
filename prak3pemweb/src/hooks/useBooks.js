import { useBooks as useBooksContext } from '../context/BookContext';  // Impor useBooks dengan alias

const useBooksCustom = () => {
  const context = useBooksContext();  // Gunakan context dari useBooks yang diimpor
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
};

export default useBooksCustom;
