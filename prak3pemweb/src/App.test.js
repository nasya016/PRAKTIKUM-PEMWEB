import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App'; // pastikan mengimpor App yang benar
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('✅ Menambahkan buku dengan data lengkap berhasil', async () => {
    render(<App />);
    
    // Akses form input buku
    const titleInput = screen.getByLabelText(/judul buku/i);
    const authorInput = screen.getByLabelText(/penulis/i);
    const addButton = screen.getByText(/tambah/i);
    
    // Isi form dan klik tombol tambah
    fireEvent.change(titleInput, { target: { value: 'Buku React' } });
    fireEvent.change(authorInput, { target: { value: 'Nasya' } });
    fireEvent.click(addButton);
    
    // Verifikasi bahwa buku berhasil ditambahkan
    const bookTitle = await screen.findByText(/Buku React/i);
    expect(bookTitle).toBeInTheDocument();
  });

  test('❌ Menambahkan buku dengan field kosong ditolak', async () => {
    render(<App />);
    
    // Akses form input buku
    const titleInput = screen.getByLabelText(/judul buku/i);
    const authorInput = screen.getByLabelText(/penulis/i);
    const addButton = screen.getByText(/tambah/i);
    
    // Kosongkan input dan klik tombol tambah
    fireEvent.change(titleInput, { target: { value: '' } });
    fireEvent.change(authorInput, { target: { value: '' } });
    fireEvent.click(addButton);
    
    // Periksa apakah ada pesan error
    const errorMessage = screen.getByText(/semua field harus diisi/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('✅ Mengubah status baca buku berhasil', async () => {
    render(<App />);
    
    // Tambah buku
    const titleInput = screen.getByLabelText(/judul buku/i);
    const authorInput = screen.getByLabelText(/penulis/i);
    const addButton = screen.getByText(/tambah/i);
    fireEvent.change(titleInput, { target: { value: 'Buku React' } });
    fireEvent.change(authorInput, { target: { value: 'Nasya' } });
    fireEvent.click(addButton);
    
    // Klik untuk mengubah status baca
    const statusButton = await screen.findByText(/belum dibaca/i);
    fireEvent.click(statusButton);
    
    // Verifikasi status baca sudah berubah
    const updatedStatus = screen.getByText(/sedang dibaca/i);
    expect(updatedStatus).toBeInTheDocument();
  });

  test('✅ Menambahkan dan menghapus wishlist berjalan dengan baik', async () => {
    render(<App />);
    
    // Tambah wishlist
    const wishlistInput = screen.getByLabelText(/judul buku yang ingin dibeli/i);
    const wishlistButton = screen.getByText(/tambah ke wishlist/i);
    fireEvent.change(wishlistInput, { target: { value: 'Buku JavaScript' } });
    fireEvent.click(wishlistButton);
    
    // Verifikasi wishlist sudah ada
    const wishlistItem = await screen.findByText(/Buku JavaScript/i);
    expect(wishlistItem).toBeInTheDocument();
    
    // Hapus wishlist
    const deleteButton = screen.getByText(/sudah beli/i);
    fireEvent.click(deleteButton);
    
    // Verifikasi wishlist sudah hilang
    expect(wishlistItem).not.toBeInTheDocument();
  });
});
