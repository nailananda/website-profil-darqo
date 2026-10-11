"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/bgdarqo.jpg",
    eyebrow: "SELAMAT DATANG DI DAAR EL-QOLAM",
    title: "Tumbuh dalam Ilmu, Kuat dalam Akhlak",
    description:
      "Ruang untuk belajar, bertumbuh, membangun karakter, dan mempersiapkan masa depan.",
  },
  {
    image: "/images/bg2darqo.jpg",
    eyebrow: "PENDIDIKAN DAN KARAKTER",
    title: "Belajar Hari Ini, Memimpin Esok Hari",
    description:
      "Mengenal pendidikan pesantren modern yang mengembangkan pengetahuan dan kepribadian.",
  },
  {
    image: "/images/MSS.jpg",
    eyebrow: "GENERASI MASA DEPAN",
    title: "Jelajahi Potensi, Raih Prestasi",
    description:
      "Setiap proses belajar adalah langkah untuk menemukan kemampuan terbaik dalam diri.",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  function changeSlide(direction) {
    setActive(
      (current) => (current + direction + slides.length) % slides.length
    );
  }

  const slide = slides[active];

  return (
    <section className="relative isolate min-h-162.5 overflow-hidden bg-green-950 text-white md:min-h-185">
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 -z-20 transition-opacity duration-1000 ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt="Lingkungan pendidikan Daar el-Qolam"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 -z-10 bg-linear-to-r from-green-950/95 via-green-950/75 to-green-950/20" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-green-950/70 via-transparent to-green-950/10" />

      <div className="mx-auto flex min-h-162.5 max-w-7xl items-center px-6 py-24 md:min-h-185 md:px-10">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-300" />
            <span className="text-xs font-bold tracking-[0.18em] text-green-50">
              {slide.eyebrow}
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-lime-200">
            Pendidikan • Karakter • Masa Depan
          </p>

          <h1
            key={slide.title}
            className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            {slide.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 md:text-lg">
            {slide.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-lime-300 px-7 py-4 font-extrabold text-green-950 shadow-lg transition hover:-translate-y-1 hover:bg-lime-200"
            >
              Kenali Sekolah Kami ↗
            </Link>
            <Link
              href="/berita"
              className="rounded-full border border-white/70 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-green-950"
            >
              Lihat Berita
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <button
              type="button"
              aria-label="Slide sebelumnya"
              onClick={() => changeSlide(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition hover:bg-white hover:text-green-950"
            >
              ←
            </button>

            {slides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                aria-label={`Buka slide ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all ${
                  active === index
                    ? "w-12 bg-lime-300"
                    : "w-5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}

            <button
              type="button"
              aria-label="Slide berikutnya"
              onClick={() => changeSlide(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition hover:bg-white hover:text-green-950"
            >
              →
            </button>

            <span className="ml-2 text-sm font-semibold text-white/80">
              0{active + 1} / 0{slides.length}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden rounded-tl-3xl bg-lime-300 px-8 py-5 text-sm font-extrabold text-green-950 md:block">
        Berilmu · Berakhlak · Mandiri
      </div>
    </section>
  );
}