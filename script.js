// --- 1. SELEKSI ELEMEN DOM ---
const tombolSenjata = document.querySelectorAll(".btn-weapon");
const elVisualPemain = document.getElementById("visual-pemain");
const elVisualKomputer = document.getElementById("visual-komputer");
const elTxtHasil = document.getElementById("txt-hasil");
const elSkorPemain = document.getElementById("score-pemain");
const elSkorKomputer = document.getElementById("score-komputer");

// --- 2. KAMUS DATA UTAS (LOOKUP MAPS) ---
const DAFTAR_PILIHAN = ["batu", "gunting", "kertas"];
const MAP_EMOJI = {
    batu: "✊",
    gunting: "✌️",
    kertas: "🖐️"
};

// Variasi penyimpan data skor pertandingan
let skorPemain = 0;
let skorKomputer = 0;

// --- 3. FUNGSI LOGIKA PERMAINAN ---
function mainkanGame(pilihanPemain) {
    // A. Komputer Memilih Secara Acak Berdasarkan Indeks Array (0-2)
    const indeksAcak = Math.floor(Math.random() * 3);
    const pilihanKomputer = DAFTAR_PILIHAN[indeksAcak];

    // B. Perbarui Tampilan Grafis Emoji di Arena Duel
    elVisualPemain.innerText = MAP_EMOJI[pilihanPemain];
    elVisualKomputer.innerText = MAP_EMOJI[pilihanKomputer];

    // C. Evaluasi Aturan Hukum Menang/Kalah/Seri
    if (pilihanPemain === pilihanKomputer) {
        // KONDISI SERI
        elTxtHasil.innerText = "Hasilnya SERI! 🤝";
        elTxtHasil.style.color = "#475569"; // Abu-abu

    } else if (
        (pilihanPemain === "batu" && pilihanKomputer === "gunting") ||
        (pilihanPemain === "gunting" && pilihanKomputer === "kertas") ||
        (pilihanPemain === "kertas" && pilihanKomputer === "batu")
    ) {
        // KONDISI PEMAIN MENANG
        skorPemain++;
        elSkorPemain.innerText = skorPemain;
        elTxtHasil.innerText = "Kamu MENANG! Hore 🎉🔥";
        elTxtHasil.style.color = "#06d6a0"; // Hijau Mint

    } else {
        // KONDISI KOMPUTER MENANG
        skorKomputer++;
        elSkorKomputer.innerText = skorKomputer;
        elTxtHasil.innerText = "Komputer MENANG! Coba lagi 🤖❌";
        elTxtHasil.style.color = "#ff477e"; // Pink Merah
    }
}

// --- 4. BINDING EVENT LISTENERS ---
tombolSenjata.forEach(tombol => {
    tombol.addEventListener("click", () => {
        // Mengambil string nama data pilihan dari atribut dataset HTML
        const pilihanPemain = tombol.getAttribute("data-choice");
        mainkanGame(pilihanPemain);
    });
});
