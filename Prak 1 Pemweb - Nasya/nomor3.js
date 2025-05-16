function validateForm(nama, email, password) {
    let errors = [];

    // Validasi Nama
    if (nama.length <= 3) {
        errors.push("Nama harus lebih dari 3 karakter.");
    }

    // Validasi Email (format email yang benar)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Email tidak valid.");
    }

    // Validasi Password (minimal 8 karakter)
    if (password.length < 8) {
        errors.push("Password harus minimal 8 karakter.");
    }

    return errors;
}

// Event listener untuk tombol submit
document.getElementById("submit-btn").addEventListener("click", function () {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const errors = validateForm(nama, email, password);

    const hasilDiv = document.getElementById("hasil-validasi");
    hasilDiv.innerHTML = ""; // Hapus pesan sebelumnya

    if (errors.length > 0) {
        hasilDiv.innerHTML = `<p style="color: red;">${errors.join("<br>")}</p>`;
    } else {
        hasilDiv.innerHTML = `<p style="color: green;">Form berhasil divalidasi!</p>`;
    }
});
