asalet kontak = "";

// Fungsi untuk menyimpan nama dan pindah ke teks1.html
function submitNama() {
  const input = document.getElementById('namaKontak');
  kontak = input.value.trim();
  localStorage.setItem('kontak', kontak);
  window.location.href = 'teks1.html';
}

// Mengaktifkan tombol jika input tidak kosong
function toggleButton() {
  const input = document.getElementById('namaKontak');
  const button = document.getElementById('submitBtn');
  button.disabled = input.value.trim() === "";
}

// Fungsi ketika user memilih jawaban (Mau / Tidak)
function submitJawaban(jawaban) {
  const kontak = localStorage.getItem('kontak') || 'Tidak diisi';
  const data = {
    timestamp: new Date().toISOString(),
    namaKontak: kontak,
    jawaban: jawaban
  };

  // Kirim data ke Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbxQ43CcwGHxFzXJjDTuKajBaEaTdttwtF6v02PgFhqRmqG-3PIqEfedbb-ISUu_7RIGXA/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  // Jika jawabannya "Mau"
  if (jawaban === "Mau") {
    const beneran = confirm("Beneran atau bercanda?\n\nKlik OK untuk Beneran\nKlik Cancel untuk Bercanda");
    if (beneran) {
      alert("Yeyy! Jadian! 💞");
    } else {
      alert("bercandanya gitu");
    }
  } else {
    // Kalau jawabannya bukan Mau (misal Tidak)
    window.location.href = 'gpp.html';
  }
}




