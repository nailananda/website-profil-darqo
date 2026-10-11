"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const portal = "https://daftar.daarelqolam.ac.id/";
const syaratUrl = "https://psb.daarelqolam.ac.id/Syarat";
const jadwalUrl = "https://psb.daarelqolam.ac.id/jadwal";
const caraUrl = "https://daftar.daarelqolam.ac.id/cara-daftar";
const faqUrl = "https://daftar.daarelqolam.ac.id/faq";
const kontakUrl = "https://psb.daarelqolam.ac.id/kontak";

const steps = [
  {
    number: "01",
    title: "Daftar Akun Wali",
    description:
      "Buka portal PSB dan daftarkan akun wali menggunakan nomor WhatsApp aktif untuk menerima kode verifikasi.",
  },
  {
    number: "02",
    title: "Lengkapi Data",
    description:
      "Isi identitas wali dan calon santri, data sekolah asal, serta unggah dokumen yang diminta.",
  },
  {
    number: "03",
    title: "Pembayaran Pendaftaran",
    description:
      "Selesaikan pembayaran sesuai instruksi dan metode pembayaran yang tersedia di portal resmi.",
  },
  {
    number: "04",
    title: "Ikuti Ujian Seleksi",
    description:
      "Datang mengikuti ujian sesuai jadwal dan ketentuan panitia penerimaan santri baru.",
  },
  {
    number: "05",
    title: "Pengumuman Hasil",
    description:
      "Pantau hasil seleksi melalui akun pendaftaran dan notifikasi dari panitia.",
  },
  {
    number: "06",
    title: "Daftar Ulang",
    description:
      "Calon santri yang dinyatakan lulus mengikuti instruksi daftar ulang sesuai ketentuan resmi.",
  },
];

const requirements = [
  "Beragama Islam.",
  "Berusia minimal 10 tahun.",
  "Lulus SD/MI sederajat atau pindahan dari pondok pesantren.",
  "Berbadan sehat.",
];

const documents = [
  "Salinan akta kelahiran calon santri.",
  "Salinan Kartu Keluarga wali calon santri.",
  "Salinan KTP orang tua atau wali.",
  "Foto identitas berbaju putih dengan latar belakang merah. Calon santri perempuan menggunakan hijab.",
  "Salinan ijazah atau Surat Keterangan Lulus (SKL), jika sudah tersedia.",
  "Dokumen Verval NISN, jika ada.",
];

const schedules = [
  {
    test: "Tes 1",
    date: "22 November 2026",
    result: "25 November 2026",
  },
  {
    test: "Tes 2",
    date: "3 Januari 2027",
    result: "6 Januari 2027",
  },
  {
    test: "Tes 3",
    date: "31 Januari 2027",
    result: "3 Februari 2027",
  },
];

const faqs = [
  {
    question: "Bagaimana cara mendaftar menjadi santri?",
    answer:
      "Buat akun wali di portal PSB, lengkapi data wali dan calon santri, unggah dokumen, lalu ikuti instruksi pembayaran dan seleksi.",
  },
  {
    question: "Apa saja materi ujian seleksi?",
    answer:
      "Informasi resmi mencantumkan membaca Al-Qur'an, menulis Arab atau Imla, Matematika Dasar, dan Bahasa Inggris Dasar. Pastikan kembali ketentuan pada portal untuk jadwal yang dipilih.",
  },
  {
    question: "Kapan ujian seleksi dilaksanakan?",
    answer:
      "Jadwal yang dipublikasikan untuk tahun ajaran 2027/2028 adalah 22 November 2026, 3 Januari 2027, dan 31 Januari 2027. Periksa portal resmi untuk pembaruan.",
  },
  {
    question: "Dokumen apa yang perlu disiapkan?",
    answer:
      "Dokumen yang dicantumkan pada halaman persyaratan meliputi akta kelahiran, Kartu Keluarga, KTP orang tua atau wali, foto identitas, ijazah atau SKL jika tersedia, dan dokumen Verval NISN jika ada.",
  },
  {
    question: "Berapa biaya pendaftaran dan pendidikan?",
    answer:
      "Biaya dapat mengikuti ketentuan penerimaan yang berlaku. Periksa portal resmi atau hubungi bagian keuangan untuk memperoleh rincian biaya terbaru sebelum melakukan pembayaran.",
  },
  {
    question: "Bagaimana jika calon santri dinyatakan lulus?",
    answer:
      "Calon santri yang lulus perlu mengikuti instruksi daftar ulang dan melengkapi tahapan selanjutnya sesuai pemberitahuan resmi panitia.",
  },
];

const buttonPrimary =
  "inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-6 py-3.5 text-center font-bold text-green-950 transition hover:bg-green-100 sm:px-7 sm:py-4";

const buttonSecondary =
  "inline-flex items-center justify-center rounded-full border-2 border-white/70 bg-green-900 px-6 py-3.5 text-center font-bold text-white transition hover:bg-white hover:text-green-950 sm:px-7 sm:py-4";

export default function AdmissionPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-white text-gray-800">
      <section className="relative flex min-h-142.5 items-center px-6 py-24 text-white md:min-h-162.5 md:py-32">
        <Image
          src="/images/admission.jpg"
          alt="Penerimaan santri baru Pondok Pesantren Daar el-Qolam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-green-950/80" />

        <div className="relative mx-auto w-full max-w-7xl">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold tracking-wide text-green-100">
            PENERIMAAN SANTRI BARU 2027/2028
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Langkah Pertama Menuju Masa Depan Bersama Daar el-Qolam
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 md:text-lg">
            Temukan informasi persyaratan, tahapan pendaftaran, jadwal seleksi,
            dan panduan penerimaan santri baru melalui informasi resmi Daar
            el-Qolam.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={portal}
              target="_blank"
              rel="noreferrer"
              className={buttonPrimary}
            >
              Buka Portal Pendaftaran ↗
            </a>

            <a href="#alur" className={buttonSecondary}>
              Pelajari Alur Pendaftaran ↓
            </a>
          </div>

          <p className="mt-5 text-sm leading-6 text-green-100">
            Informasi jadwal dan ketentuan dapat berubah mengikuti pengumuman
            resmi panitia.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-3xl md:h-115">
            <Image
              src="/images/MSS.jpg"
              alt="Lingkungan pendidikan Daar el-Qolam"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Penerimaan Santri Baru
            </p>

            <h2 className="mt-4 text-3xl font-black text-green-950 md:text-4xl">
              Kenali Program Pendidikan Daar el-Qolam
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Daar el-Qolam memiliki beberapa lingkungan pendidikan dengan
              karakteristik program masing-masing. Calon wali santri sebaiknya
              mempelajari pilihan program sebelum menyelesaikan pendaftaran.
            </p>

            <div className="mt-7 space-y-4">
              <div className="rounded-2xl border border-green-100 p-5">
                <h3 className="font-black text-green-900">
                  Daar el-Qolam Pusat
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Program pendidikan pesantren enam tahun yang mengintegrasikan
                  kurikulum pesantren dengan kurikulum nasional.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 p-5">
                <h3 className="font-black text-green-900">Daar el-Qolam 2</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Program yang mencakup Excellent Class dengan penguatan bidang
                  eksakta, Bahasa Inggris, dan karya tulis ilmiah.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 p-5">
                <h3 className="font-black text-green-900">Daar el-Qolam 4</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  Program pesantren terpadu dengan penguatan Dirasah Islamiyyah
                  dan tahfidz Al-Quran.
                </p>
              </div>
            </div>

            <a
              href={faqUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex font-bold text-green-800 hover:text-green-950"
            >
              Baca informasi program resmi ↗
            </a>
          </div>
        </div>
      </section>

      <section id="alur" className="bg-green-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Tahapan Resmi
            </p>

            <h2 className="mt-3 text-3xl font-black text-green-950 md:text-4xl">
              Alur Pendaftaran Santri Baru
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Ikuti proses pendaftaran melalui portal resmi dan pastikan setiap
              tahapan selesai sesuai petunjuk panitia.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-green-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-black text-green-900">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-black text-green-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={caraUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-800 px-7 py-4 font-bold text-white transition hover:bg-green-950"
            >
              Lihat Panduan Pendaftaran Resmi ↗
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Persyaratan Calon Santri
            </p>

            <h2 className="mt-3 text-3xl font-black text-green-950 md:text-4xl">
              Pastikan Persyaratan Sudah Terpenuhi
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Berikut persyaratan umum yang tercantum pada halaman resmi PSB
              Daar el-Qolam.
            </p>

            <div className="mt-8 space-y-4">
              {requirements.map((item, index) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-black text-green-900">
                    {index + 1}
                  </span>

                  <p className="pt-1 leading-7 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-green-950 p-7 text-white md:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-200">
              Daftar Dokumen
            </span>

            <h3 className="mt-3 text-2xl font-black md:text-3xl">
              Dokumen yang Perlu Disiapkan
            </h3>

            <p className="mt-4 leading-7 text-green-100">
              Siapkan dokumen berikut sesuai petunjuk unggah pada portal
              pendaftaran.
            </p>

            <div className="mt-7 space-y-4">
              {documents.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-lg text-green-300">
                    ✓
                  </span>
                  <p className="min-w-0 text-sm leading-7 text-green-50">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={syaratUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonPrimary}
              >
                Periksa Syarat Lengkap ↗
              </a>
            </div>

            <p className="mt-4 text-xs leading-6 text-green-200">
              Persyaratan dapat diperbarui. Gunakan halaman resmi sebagai
              acuan terakhir.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Tahun Ajaran 2027/2028
            </p>

            <h2 className="mt-3 text-3xl font-black text-green-950 md:text-4xl">
              Jadwal Seleksi
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Berikut jadwal ujian seleksi dan pengumuman kelulusan yang
              tercantum di halaman resmi PSB.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {schedules.map((schedule) => (
              <article
                key={schedule.test}
                className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm"
              >
                <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-900">
                  {schedule.test}
                </span>

                <p className="mt-6 text-sm font-semibold text-gray-500">
                  Ujian Tes Seleksi
                </p>

                <p className="mt-2 text-xl font-black text-green-950">
                  {schedule.date}
                </p>

                <div className="my-5 border-t border-green-100" />

                <p className="text-sm font-semibold text-gray-500">
                  Pengumuman Kelulusan
                </p>

                <p className="mt-2 font-bold text-green-900">
                  {schedule.result}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-gray-600">
            Jadwal di atas mengikuti informasi yang tersedia saat halaman ini
            disusun. Silakan cek portal resmi untuk memastikan tidak ada
            perubahan jadwal.
          </p>

          <div className="mt-7 text-center">
            <a
              href={jadwalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-800 px-7 py-4 font-bold text-white transition hover:bg-green-950"
            >
              Cek Jadwal Terbaru ↗
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Pertanyaan Umum
            </p>

            <h2 className="mt-3 text-3xl font-black text-green-950 md:text-4xl">
              FAQ Admission
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Temukan jawaban atas pertanyaan umum seputar pendaftaran.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-green-100 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-green-950 transition hover:bg-green-50 md:p-6"
                >
                  <span>{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl text-green-900">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-6 leading-7 text-gray-600 md:px-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={faqUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-green-800 hover:text-green-950"
            >
              Baca FAQ resmi Daar el-Qolam ↗
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-950 px-6 py-20 text-white md:py-24">
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-200">
            Informasi Resmi
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Siap Memulai Proses Pendaftaran?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100">
            Kunjungi portal resmi PSB Daar el-Qolam untuk membuat akun,
            melengkapi data, melihat informasi terbaru, dan mengikuti tahapan
            pendaftaran.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={portal}
              target="_blank"
              rel="noreferrer"
              className={buttonPrimary}
            >
              Mulai Pendaftaran ↗
            </a>

            <a
              href={kontakUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonSecondary}
            >
              Hubungi Panitia ↗
            </a>

            <Link href="/about" className={buttonSecondary}>
              Tentang Kami
            </Link>
          </div>

          <p className="mt-8 text-sm text-green-200">
            Portal pendaftaran dikelola melalui situs resmi Daar el-Qolam.
          </p>
        </div>
      </section>
    </main>
  );
}
