import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import BeritaCard from "@/components/BeritaCard";
import { news, school } from "@/components/data";

const highlights = [
  {
    number: "01",
    title: "Pendidikan Terpadu",
    text: "Mendorong keseimbangan pendidikan agama, pengetahuan umum, dan pembentukan karakter.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Karakter dan Kemandirian",
    text: "Membangun kebiasaan disiplin, bertanggung jawab, dan menghargai sesama.",
    icon: "◇",
  },
  {
    number: "03",
    title: "Potensi dan Prestasi",
    text: "Mendukung pengembangan bakat, kreativitas, komunikasi, dan kepemimpinan.",
    icon: "✳",
  },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="relative overflow-hidden bg-white px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-green-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative">
            <div className="relative h-92.5 overflow-hidden rounded-4xl shadow-xl md:h-122.5">
              <Image
                src="/images/bg2darqo.jpg"
                alt="Lingkungan pendidikan Daar el-Qolam"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 max-w-62.5 rounded-2xl bg-green-900 p-5 text-white shadow-xl md:-right-6">
              <p className="text-3xl font-black">1968</p>
              <p className="mt-1 text-sm leading-6 text-green-100">
                Tahun berdirinya Daar el-Qolam
              </p>
            </div>
          </div>

          <div className="pt-5 md:pt-0">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-700">
              Selamat Datang
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-green-950 md:text-5xl">
              Lebih dari Sekadar Tempat Belajar
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              {school.history}
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Melalui proses pendidikan dan kehidupan sehari-hari, peserta
              didik didorong untuk terus belajar, membangun karakter, serta
              mengembangkan kemampuan yang bermanfaat bagi masa depan.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-800 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-green-700"
            >
              Selengkapnya Tentang Kami <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-green-950 px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
              Nilai Pendidikan
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Bertumbuh dengan Tujuan
            </h2>
            <p className="mt-5 leading-8 text-green-100">
              Proses pendidikan tidak hanya tentang hasil akademik, tetapi juga
              tentang sikap, kebiasaan baik, dan kesiapan menghadapi tantangan.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-white/15 bg-white/6 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl text-lime-300">{item.icon}</span>
                  <span className="text-sm font-bold text-green-300">
                    {item.number}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-4 leading-7 text-green-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-700">
                Kabar Sekolah
              </p>
              <h2 className="mt-3 text-3xl font-black text-green-950 md:text-5xl">
                Cerita dan Inspirasi
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                Baca informasi pendidikan, inspirasi, dan kegiatan yang
                berkaitan dengan kehidupan sekolah.
              </p>
            </div>

            <Link
              href="/berita"
              className="inline-flex items-center gap-2 font-bold text-green-800 hover:text-green-600"
            >
              Semua berita <span>→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, 3).map((item) => (
              <BeritaCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-green-800 px-7 py-12 text-white md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-10 -top-24 h-72 w-72 rounded-full border-45 border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 right-40 h-64 w-64 rounded-full border-35 border-lime-300/10" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
              Langkah Berikutnya
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Kenali Lebih Dekat Dunia Daar el-Qolam
            </h2>
            <p className="mt-5 leading-8 text-green-50">
              Jelajahi profil, sejarah, dan informasi pendidikan untuk mengenal
              lebih jauh perjalanan Daar el-Qolam.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-lime-300 px-7 py-4 font-extrabold text-green-950 transition hover:bg-lime-200"
              >
                Jelajahi Profil ↗
              </Link>
              <a
                href={school.website}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-green-900"
              >
                Situs Resmi
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-green-100 bg-white px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Lokasi
            </p>
            <h2 className="mt-3 text-2xl font-black text-green-950">
              Temukan Daar el-Qolam
            </h2>
            <p className="mt-3 leading-7 text-gray-600">{school.address}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-green-100">
            <iframe
              title="Peta lokasi Daar el-Qolam"
              src="https://maps.google.com/maps?q=Pondok%20Pesantren%20Daar%20el-Qolam%20Pasir%20Gintung%20Jayanti&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}