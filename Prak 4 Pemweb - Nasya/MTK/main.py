# main.py

# Cara 1: Import seluruh modul
import math_operations

# Cara 2: Import fungsi tertentu
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

# Menggunakan fungsi dari modul

print("=== PERHITUNGAN GEOMETRI ===")
sisi = 5
panjang = 8
lebar = 4
jari_jari = 7

print(f"Luas Persegi (sisi={sisi}): {math_operations.luas_persegi(sisi)}")
print(f"Keliling Persegi (sisi={sisi}): {math_operations.keliling_persegi(sisi)}\n")

print(f"Luas Persegi Panjang (panjang={panjang}, lebar={lebar}): {math_operations.luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling Persegi Panjang (panjang={panjang}, lebar={lebar}): {math_operations.keliling_persegi_panjang(panjang, lebar)}\n")

print(f"Luas Lingkaran (jari-jari={jari_jari}): {math_operations.luas_lingkaran(jari_jari):.2f}")
print(f"Keliling Lingkaran (jari-jari={jari_jari}): {math_operations.keliling_lingkaran(jari_jari):.2f}\n")

print("=== KONVERSI SUHU ===")
suhu_celsius = 25
print(f"{suhu_celsius}°C ke Fahrenheit: {celsius_ke_fahrenheit(suhu_celsius):.2f}°F")
print(f"{suhu_celsius}°C ke Kelvin: {celsius_ke_kelvin(suhu_celsius):.2f}K")
