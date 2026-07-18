# ✊ Rock-Paper-Scissors Game (Deterministic Rules Module)

Aplikasi permainan klasik Batu-Gunting-Kertas interaktif berbasis halaman web menggunakan **Vanilla JavaScript**. Pengguna dapat bersaing secara langsung melawan kecerdasan pengacak buatan komputer (*Computer Randomized Choice*) dengan akumulasi perhitungan skor yang terekam secara berkala.

Proyek ini sangat disarankan bagi siswa SMK RPL dasar untuk memahami penggabungan manipulasi peta obyek (*object lookup literal*) dan pengujian logika percabangan bersyarat majemuk.

---

## 🚀 Fitur Utama

* **Array Index Randomizer:** Memanfaatkan kombinasi `Math.random()` skala linier terikat guna menghasilkan nilai bulat indeks $0$, $1$, atau $2$ secara acak untuk merepresentasikan pilihan komputer.
* **Literal Object Mapping Lookup:** Mengganti percabangan `if` yang boros dengan memetakan asosiasi nilai string teks menuju representasi karakter emoji (`MAP_EMOJI`), mempercepat rendering antarmuka.
* **Compound Condition Evaluation:** Menggunakan operator logika gabungan gerbang `AND (&&)` dan `OR (||)` secara presisi untuk menyeleksi 3 skenario kemenangan mutlak pemain secara ringkas.
* **Dynamic Inline Color States:** JavaScript langsung mengintervensi nilai warna teks properti `.style.color` secara asinkronus begitu hasil status duel ditentukan untuk memperkuat penegasan atmosfer permainan.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur boks papan skor, arena slot duelist, dan kelompok tombol senjata
├── style.css        # Layouting Flexbox horizontal, gaya pop art, dan micro-interaction tombol aktif
└── script.js        # Array database pilihan, engine kalkulator evaluasi pemenang, dan mutator DOM skor
