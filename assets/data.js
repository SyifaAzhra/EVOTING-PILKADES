// Identitas Desa
const DESA_CONFIG = {
  namaDesa: 'Desa Sukamaju',
  tahun: '2026'
};

// Inisialisasi data dummy jika belum ada di localStorage
function initData() {
  if (!localStorage.getItem('evoting_voters')) {
    const dummyVoters = [
      { nik: '3578010101010001', nama: 'Budi Santoso', kodeAkses: 'SUKAMAJU01', sudahMemilih: false, kandidatDipilih: null, statusValid: true },
      { nik: '3578010202020002', nama: 'Siti Aminah', kodeAkses: 'SUKAMAJU02', sudahMemilih: false, kandidatDipilih: null, statusValid: true },
      { nik: '3578010303030003', nama: 'Ahmad Fauzi', kodeAkses: 'SUKAMAJU03', sudahMemilih: true, kandidatDipilih: 1, statusValid: true },
      { nik: '3578010404040004', nama: 'Dewi Lestari', kodeAkses: 'SUKAMAJU04', sudahMemilih: false, kandidatDipilih: null, statusValid: true }
    ];
    localStorage.setItem('evoting_voters', JSON.stringify(dummyVoters));
  }

  if (!localStorage.getItem('evoting_candidates')) {
    const dummyCandidates = [
      {
        id: 1,
        noUrut: 1,
        nama: 'H. Sutrisno, S.Sos',
        foto: 'https://i.pinimg.com/736x/07/0b/a7/070ba752fceeb587c538769f1c8d684c.jpg',
        visi: 'Mewujudkan desa mandiri, transparan, dan sejahtera berbasis teknologi.',
        misi: '1. Digitalisasi layanan administrasi desa.\n2. Pemberdayaan UMKM dan karang taruna.\n3. Perbaikan infrastruktur jalan dan irigasi pertanian.',
        jumlahSuara: 1
      },
      {
        id: 2,
        noUrut: 2,
        nama: 'Drs. Bambang Wijaya',
        foto: 'https://i.pinimg.com/736x/f8/55/0a/f8550a77c69549a1366546795edc66ab.jpg',
        visi: 'Membangun tata kelola pemerintahan desa yang bersih, adil, dan gotong royong.',
        misi: '1. Transparansi anggaran dana desa secara berkala.\n2. Peningkatan fasilitas kesehatan posyandu.\n3. Pelatihan keterampilan kerja bagi pemuda desa.',
        jumlahSuara: 0
      },
      {
        id: 3,
        noUrut: 3,
        nama: 'Ir. Ratna Kumalasari',
        foto: 'https://i.pinimg.com/736x/11/24/d5/1124d54d57d880e72d51041d3ec98769.jpg',
        visi: 'Desa maju, berdaya saing, dan ramah lingkungan untuk generasi masa depan.',
        misi: '1. Pengelolaan sampah desa terpadu.\n2. Pengembangan desa wisata dan produk lokal.\n3. Beasiswa pendidikan untuk warga kurang mampu.',
        jumlahSuara: 0
      }
    ];
    localStorage.setItem('evoting_candidates', JSON.stringify(dummyCandidates));
  }

  if (!localStorage.getItem('evoting_admin')) {
    const adminAccount = { username: 'admin', password: '123' };
    localStorage.setItem('evoting_admin', JSON.stringify(adminAccount));
  }
}

initData();

// Otomatis isi nama desa di semua elemen dengan atribut data-nama-desa
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-nama-desa]').forEach(el => {
    el.textContent = DESA_CONFIG.namaDesa;
  });
});