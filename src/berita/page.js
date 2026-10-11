import Link from "next/link";

const daftarBerita = [
  {
    id: "1",
    kategori: "Pendidikan",
    tanggal: "10 Oktober 2026",
    judul: "Membangun Semangat Belajar dan Karakter Positif",
    ringkasan:
      "Pendidikan menjadi bagian penting dalam membantu peserta didik mengembangkan pengetahuan, sikap, dan tanggung jawab.",
    ikon: "📚",
    warna: "berita-hijau",
  },
  {
    id: "2",
    kategori: "Kegiatan",
    tanggal: "8 Oktober 2026",
    judul: "Kegiatan Sekolah sebagai Ruang Pengembangan Potensi",
    ringkasan:
      "Kegiatan sekolah dapat menjadi kesempatan bagi peserta didik untuk berkolaborasi, berkreasi, dan belajar hal baru.",
    ikon: "🌱",
    warna: "berita-krem",
  },
  {
    id: "3",
    kategori: "Prestasi",
    tanggal: "5 Oktober 2026",
    judul: "Mengapresiasi Usaha dan Semangat Berprestasi",
    ringkasan:
      "Apresiasi terhadap proses belajar dapat mendorong peserta didik untuk terus berkembang dan berani mencoba.",
    ikon: "🏆",
    warna: "berita-kuning",
  },
  {
    id: "4",
    kategori: "Lingkungan",
    tanggal: "2 Oktober 2026",
    judul: "Menumbuhkan Kepedulian terhadap Lingkungan",
    ringkasan:
      "Kebiasaan menjaga kebersihan dan merawat lingkungan merupakan langkah sederhana yang bisa dilakukan bersama.",
    ikon: "🌿",
    warna: "berita-hijau",
  },
  {
    id: "5",
    kategori: "Pendidikan",
    tanggal: "28 September 2026",
    judul: "Pentingnya Disiplin dalam Kehidupan Pelajar",
    ringkasan:
      "Disiplin membantu peserta didik mengatur waktu, menjalankan tanggung jawab, dan membangun kebiasaan positif.",
    ikon: "📖",
    warna: "berita-biru",
  },
  {
    id: "6",
    kategori: "Kebersamaan",
    tanggal: "25 September 2026",
    judul: "Belajar Bekerja Sama dan Saling Menghargai",
    ringkasan:
      "Kerja sama dan sikap saling menghormati membantu menciptakan lingkungan belajar yang nyaman.",
    ikon: "🤝",
    warna: "berita-krem",
  },
];

export default function BeritaPage() {
  return (
    <div className="berita-page">
      <section className="berita-hero">
        <span className="berita-eyebrow">KABAR SEKOLAH</span>
        <h1>Berita dan Informasi</h1>
        <p>
          Temukan artikel seputar pendidikan, kegiatan, dan nilai-nilai positif
          dalam kehidupan sekolah.
        </p>
        <div className="berita-hero-decoration" aria-hidden="true">
          <span>📰</span>
        </div>
      </section>

      <section className="berita-content">
        <div className="berita-section-title">
          <div>
            <span className="berita-eyebrow">ARTIKEL PILIHAN</span>
            <h2>Informasi Terbaru</h2>
          </div>
          <span className="berita-count">{daftarBerita.length} Artikel</span>
        </div>

        <div className="berita-grid">
          {daftarBerita.map((berita) => (
            <article className="berita-card" key={berita.id}>
              <div className={`berita-card-visual ${berita.warna}`}>
                <span className="berita-card-icon" aria-hidden="true">
                  {berita.ikon}
                </span>
                <span className="berita-card-category">{berita.kategori}</span>
              </div>

              <div className="berita-card-body">
                <p className="berita-date">{berita.tanggal}</p>
                <h3>{berita.judul}</h3>
                <p className="berita-summary">{berita.ringkasan}</p>
                <Link
                  href={`/berita/${berita.id}`}
                  className="berita-read-more"
                >
                  Baca selengkapnya <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="berita-disclaimer">
          Catatan: artikel di halaman ini merupakan contoh konten untuk tugas
          website. Tanggal dan isi bukan pengumuman resmi sekolah.
        </p>
      </section>
    </div>
  );
}