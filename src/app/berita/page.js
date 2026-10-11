"use client";

import { useMemo, useState } from "react";
import BeritaCard from "@/components/BeritaCard";
import { news } from "@/components/data";

export default function BeritaPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  const categories = [
    "Semua",
    ...new Set(news.map((item) => item.category)),
  ];

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "Semua" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      <section className="bg-green-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
            Kabar dan Inspirasi
          </p>
          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            Berita Sekolah
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-green-100">
            Jelajahi artikel seputar pendidikan, karakter, ekstrakurikuler,
            dan kehidupan santri.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-white/20 px-4 py-2">
              {news.length} artikel tersedia
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2">
              Cari dan jelajahi
            </span>
          </div>
        </div>
      </section>

      <section className="bg-green-50 px-6 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-green-100 bg-white p-5 shadow-sm md:p-7">
            <label
              htmlFor="search-news"
              className="mb-3 block font-bold text-green-950"
            >
              Temukan artikel
            </label>
            <input
              id="search-news"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari judul atau isi berita..."
              className="w-full rounded-2xl border border-green-200 bg-green-50/50 px-5 py-4 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-4 focus:ring-green-100"
            />

            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    category === item
                      ? "bg-green-800 text-white"
                      : "bg-green-50 text-green-900 hover:bg-green-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-7 mt-10 flex items-center justify-between">
            <p className="font-semibold text-gray-600">
              Menampilkan {filteredNews.length} artikel
            </p>
            {(search || category !== "Semua") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("Semua");
                }}
                className="text-sm font-bold text-green-800 hover:text-green-600"
              >
                Reset filter ✕
              </button>
            )}
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map((item) => (
                <BeritaCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-green-300 bg-white px-6 py-16 text-center">
              <p className="text-4xl">⌕</p>
              <h2 className="mt-4 text-xl font-extrabold text-green-950">
                Artikel tidak ditemukan
              </h2>
              <p className="mt-2 text-gray-600">
                Coba kata kunci lain atau pilih kategori berbeda.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("Semua");
                }}
                className="mt-6 rounded-full bg-green-800 px-6 py-3 font-bold text-white hover:bg-green-700"
              >
                Tampilkan Semua Berita
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}