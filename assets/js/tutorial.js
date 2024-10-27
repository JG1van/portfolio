// Riwayat Kode
let contentCodeHistory = [];
// Fungsi untuk menjalankan kode konten
function runContentCode() {
  const code = document.getElementById("contentCode").value;
  document.getElementById("previewContent").innerHTML = code;
  contentCodeHistory.push(code);
}

// Fungsi untuk mengembalikan kode sebelumnya
function undoContentCode() {
  if (contentCodeHistory.length > 1) {
    contentCodeHistory.pop(); // Hapus entri terakhir
    const previousCode = contentCodeHistory[contentCodeHistory.length - 1];
    document.getElementById("contentCode").value = previousCode;
    document.getElementById("previewContent").innerHTML = previousCode; // Perbarui preview
  } else {
    document.getElementById("previewContent").innerHTML = ""; // Hapus hasil jika tidak ada riwayat
    document.getElementById("contentCode").value = ""; // Hapus input juga
  }
}
