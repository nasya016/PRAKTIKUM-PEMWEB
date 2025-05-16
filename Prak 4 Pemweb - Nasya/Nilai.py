# Program Pengelolaan Data Nilai Mahasiswa

# Data mahasiswa
mahasiswa = [
    {"nama": "Andi", "nim": "A001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 78},
    {"nama": "Budi", "nim": "A002", "nilai_uts": 70, "nilai_uas": 75, "nilai_tugas": 72},
    {"nama": "Citra", "nim": "A003", "nilai_uts": 60, "nilai_uas": 65, "nilai_tugas": 62},
    {"nama": "Dewi", "nim": "A004", "nilai_uts": 90, "nilai_uas": 88, "nilai_tugas": 92},
    {"nama": "Eka", "nim": "A005", "nilai_uts": 50, "nilai_uas": 55, "nilai_tugas": 58},
]

# Menghitung nilai akhir dan menentukan grade
for mhs in mahasiswa:
    nilai_akhir = (0.3 * mhs["nilai_uts"]) + (0.4 * mhs["nilai_uas"]) + (0.3 * mhs["nilai_tugas"])
    mhs["nilai_akhir"] = round(nilai_akhir, 2)

    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif 70 <= nilai_akhir < 80:
        mhs["grade"] = "B"
    elif 60 <= nilai_akhir < 70:
        mhs["grade"] = "C"
    elif 50 <= nilai_akhir < 60:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Menampilkan data dalam format tabel
print("\nData Nilai Mahasiswa:")
print("-" * 80)
print(f"{'Nama':<10} {'NIM':<8} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Nilai Akhir':<13} {'Grade':<5}")
print("-" * 80)

for mhs in mahasiswa:
    print(f"{mhs['nama']:<10} {mhs['nim']:<8} {mhs['nilai_uts']:<5} {mhs['nilai_uas']:<5} {mhs['nilai_tugas']:<7} {mhs['nilai_akhir']:<13} {mhs['grade']:<5}")

print("-" * 80)

# Mencari mahasiswa dengan nilai tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print(f"\nMahasiswa dengan Nilai Tertinggi: {tertinggi['nama']} ({tertinggi['nilai_akhir']})")
print(f"Mahasiswa dengan Nilai Terendah: {terendah['nama']} ({terendah['nilai_akhir']})")
