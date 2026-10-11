import Image from "next/image";
import Link from "next/link";
import { school } from "@/components/data";

const motto = [
  {
    number: "01",
    title: "Berbudi Luhur",
    description:
      "Membentuk pribadi yang berakhlak mulia, jujur, santun, dan bertanggung jawab.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Berbadan Sehat",
    description:
      "Menjaga kesehatan jasmani dan rohani agar siap belajar serta berkarya.",
    icon: "✚",
  },
  {
    number: "03",
    title: "Berpengetahuan Luas",
    description:
      "Menumbuhkan semangat belajar, memperluas wawasan, dan mengembangkan ilmu.",
    icon: "✧",
  },
  {
    number: "04",
    title: "Berpikiran Bebas",
    description:
      "Mengembangkan pemikiran terbuka, mandiri, kritis, dan bertanggung jawab.",
    icon: "◇",
  },
];

const pancaJiwa = [
  {
    number: "01",
    title: "Keikhlasan",
    description:
      "Melakukan kebaikan dan menjalankan tanggung jawab dengan niat yang tulus.",
    icon: "♡",
  },
  {
    number: "02",
    title: "Kesederhanaan",
    description:
      "Membiasakan hidup sederhana, tidak berlebihan, dan tetap bersahaja.",
    icon: "◌",
  },
  {
    number: "03",
    title: "Berdikari",
    description:
      "Membangun kemandirian, percaya pada kemampuan diri, dan bertanggung jawab.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Ukhuwah Islamiyah",
    description:
      "Mempererat persaudaraan, saling menghormati, dan membantu sesama.",
    icon: "∞",
  },
  {
    number: "05",
    title: "Kebebasan",
    description:
      "Belajar menentukan pilihan dan menyampaikan pendapat dengan bijaksana.",
    icon: "✧",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-24 text-white md:py-36">
        <Image
          src="/images/bg2darqo.jpg"
          alt="Lingkungan Pondok Pesantren Daar el-Qolam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-green-950/75" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-300">
            Mengenal Kami
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Mengenal Lebih Dekat Daar el-Qolam
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-white/90">
            Perjalanan pendidikan, nilai, dan semangat membangun generasi
            berilmu serta berakhlak mulia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full border border-white/40 bg-white/10 px-5 py-2 backdrop-blur-sm">
              Pendidikan
            </span>
            <span className="rounded-full border border-white/40 bg-white/10 px-5 py-2 backdrop-blur-sm">
              Karakter
            </span>
            <span className="rounded-full border border-white/40 bg-white/10 px-5 py-2 backdrop-blur-sm">
              Kemandirian
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="relative h-85 overflow-hidden rounded-3xl md:h-120">
            <Image
              src="/images/bgdarqo.jpg"
              alt="Lingkungan Daar el-Qolam"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Profil Sekolah
            </p>
            <h2 className="mt-4 text-3xl font-black text-green-950 md:text-4xl">
              Pendidikan untuk Masa Depan
            </h2>
            <p className="mt-6 leading-8 text-gray-600">{school.history}</p>
            <p className="mt-4 leading-8 text-gray-600">
              Sebagai lembaga pendidikan pesantren modern, Daar el-Qolam
              mengembangkan pendidikan yang memadukan pengetahuan, pembinaan
              keislaman, serta pembiasaan sikap positif dalam kehidupan.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-green-600 bg-green-50 p-5">
              <p className="font-bold text-green-900">
                Berdiri sejak 20 Januari 1968
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Mengenal sejarah merupakan langkah untuk memahami nilai dan
                semangat pendidikan yang diwariskan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-950 px-6 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
              Arah Pendidikan
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Visi Pendidikan
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-green-100">
              {school.vision}
            </p>
          </div>

          <div className="hidden h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/5 text-6xl text-lime-300 md:flex">
            ◎
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Pegangan Hidup Santri
            </p>
            <h2 className="mt-3 text-3xl font-black text-green-950 md:text-4xl">
              Motto Pondok
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Empat prinsip yang menjadi pedoman dalam membentuk pribadi santri
              yang berkarakter, sehat, berilmu, dan berpikiran terbuka.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {motto.map((item) => (
              <article
                key={item.number}
                className="group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-600 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-800 transition group-hover:bg-green-800 group-hover:text-white">
                    {item.icon}
                  </span>
                  <span className="text-sm font-black tracking-widest text-green-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-black text-green-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
                <div className="mt-6 h-1 w-12 rounded-full bg-lime-500 transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Nilai Kehidupan Pesantren
            </p>
            <h2 className="mt-3 text-3xl font-black text-green-950 md:text-4xl">
              Panca Jiwa Pondok
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Lima nilai dasar yang menjiwai kehidupan di pesantren dan
              membentuk karakter santri.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {pancaJiwa.map((item, index) => (
              <article
                key={item.number}
                className={`group rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-green-900 hover:shadow-xl lg:col-span-2 ${
                  index === 3 ? "lg:col-start-2" : ""
                } ${index === 4 ? "lg:col-start-4" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl text-green-700 transition group-hover:text-lime-300">
                    {item.icon}
                  </span>
                  <span className="text-sm font-black tracking-widest text-green-300 group-hover:text-green-200">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black text-green-950 transition group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 transition group-hover:text-green-100">
                  {item.description}
                </p>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-green-700 transition group-hover:text-lime-300">
                  Nilai kehidupan ↗
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Langkah Nyata
            </p>
            <h2 className="mt-3 text-3xl font-black text-green-950 md:text-4xl">
              Misi Pendidikan
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Nilai pendidikan diwujudkan melalui kegiatan belajar,
              pembentukan karakter, pembiasaan ibadah, dan pengembangan
              kemampuan santri.
            </p>
            <div className="mt-7 rounded-2xl bg-green-50 p-5">
              <p className="text-sm leading-7 text-green-900">
                Motto dan Panca Jiwa menjadi nilai dasar yang dapat diterapkan
                dalam keseharian santri.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {school.missions.map((mission, index) => (
              <div
                key={mission}
                className="group flex gap-4 rounded-2xl border border-green-100 bg-white p-5 transition hover:border-green-600 hover:shadow-md md:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 font-black text-green-900 transition group-hover:bg-green-800 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-7 text-gray-700">{mission}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Pengembangan Diri
            </p>
            <h2 className="mt-3 text-3xl font-black text-green-950 md:text-4xl">
              Belajar di Dalam dan di Luar Kelas
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Pendidikan juga dapat berkembang melalui kegiatan bersama,
              pembiasaan disiplin, latihan keterampilan, serta pengalaman
              organisasi dan ekstrakurikuler.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="group overflow-hidden rounded-3xl border border-green-100 bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/MSS.jpg"
                  alt="Kegiatan pendidikan"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-green-950">
                  Kegiatan Pendidikan
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Mengembangkan wawasan, keterampilan, dan kebiasaan belajar.
                </p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl border border-green-100 bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/pramuka.jpg"
                  alt="Kegiatan pramuka"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-green-950">
                  Kemandirian
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Belajar bertanggung jawab, disiplin, dan bekerja sama.
                </p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl border border-green-100 bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/drumband.jpg"
                  alt="Kegiatan drumband"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-green-950">
                  Kreativitas
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Mengembangkan minat, kepercayaan diri, dan kekompakan.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-green-950 px-6 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-lime-300">
              Informasi Sekolah
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              Lokasi dan Kontak
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-green-100">
              {school.address}
            </p>
            <p className="mt-2 text-green-100">{school.email}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=Pondok+Pesantren+Daar+el-Qolam+Jayanti"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-lime-300 px-6 py-3 font-bold text-green-950 transition hover:bg-lime-200"
            >
              Buka Peta ↗
            </a>
            <Link
              href="/berita"
              className="rounded-full border border-white/40 px-6 py-3 font-bold transition hover:bg-white hover:text-green-950"
            >
              Baca Berita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}