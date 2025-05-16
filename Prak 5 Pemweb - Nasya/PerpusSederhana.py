from abc import ABC, abstractmethod

# Abstract class untuk item perpustakaan
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id  # protected
        self._title = title

    @abstractmethod
    def display_info(self):
        pass

    @property
    def title(self):
        return self._title

# Subclass Book
class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self._author = author

    def display_info(self):
        print(f"[BUKU] ID: {self._item_id} | Judul: {self._title} | Penulis: {self._author}")

# Class untuk manajemen perpustakaan
class Library:
    def __init__(self):
        self.__books = []  # private

    def add_book(self, book):
        self.__books.append(book)

    def display_all_books(self):
        if not self.__books:
            print("📚 Belum ada buku dalam perpustakaan.")
        for book in self.__books:
            book.display_info()

    def search_by_title(self, title):
        found = False
        for book in self.__books:
            if title.lower() in book.title.lower():
                book.display_info()
                found = True
        if not found:
            print("❌ Buku tidak ditemukan.")

# Program interaktif
def main():
    library = Library()

    while True:
        print("\n===== MENU PERPUSTAKAAN =====")
        print("1. Tambah Buku")
        print("2. Tampilkan Semua Buku")
        print("3. Cari Buku Berdasarkan Judul")
        print("4. Keluar")

        choice = input("Pilih menu (1-4): ")

        if choice == "1":
            item_id = input("Masukkan ID Buku: ")
            title = input("Masukkan Judul Buku: ")
            author = input("Masukkan Nama Penulis: ")
            book = Book(item_id, title, author)
            library.add_book(book)
            print("✅ Buku berhasil ditambahkan.")

        elif choice == "2":
            print("📚 Daftar Buku:")
            library.display_all_books()

        elif choice == "3":
            search = input("Masukkan Judul untuk Dicari: ")
            library.search_by_title(search)

        elif choice == "4":
            print("👋 Terima kasih telah menggunakan sistem perpustakaan.")
            break

        else:
            print("❗ Pilihan tidak valid. Coba lagi.")

if __name__ == "__main__":
    main()
