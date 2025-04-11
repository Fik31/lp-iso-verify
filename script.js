async function verifikasi() {
  const input = document.getElementById("inputID").value.trim().toUpperCase();
  const hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = "Mencari...";

  const response = await fetch("data/sertifikat.json");
  const data = await response.json();
  const found = data.find((item) => item.id === input);

  if (found) {
    hasilDiv.innerHTML = `
      <h2>✅ Sertifikat Valid</h2>
      <p><strong>Nama:</strong> ${found.nama}</p>
      <p><strong>Acara:</strong> ${found.acara}</p>
      <p><strong>Tanggal:</strong> ${found.tanggal}</p>
      <p><strong>Nilai:</strong> ${found.nilai}</p>
    `;
  } else {
    hasilDiv.innerHTML = `<h2>❌ Sertifikat Tidak Ditemukan</h2>`;
  }
}

// Auto-run jika ada query ?id=ABC123
window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has("id")) {
    document.getElementById("inputID").value = params.get("id");
    verifikasi();
  }
};
