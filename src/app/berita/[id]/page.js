import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/components/data";

export function generateStaticParams() {
  return news.map((item) => ({
    id: item.id,
  }));
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const item = news.find((article) => article.id === id);

  if (!item) {
    notFound();
  }

  const relatedNews = news.filter((article) => article.id !== item.id).slice(0, 3);

  return (
    <>
      <section className="bg-green-950 px-6 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm font-bold text-green-200 transition hover:text-white"
          >
            ← Kembali ke Berita
          </Link>
          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-lime-300">
            {item.category}
          </p>
          <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            {item.title}
          </h1>
          <p className="mt-5 text-sm text-green-100">{item.date}</p>
        </div>
      </section>

      <article className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="relative h-70 overflow-hidden rounded-3xl bg-green-100 shadow-lg md:h-125">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-3xl py-10">
            <p className="border-l-4 border-green-600 pl-5 text-lg font-semibold leading-8 text-green-950">
              {item.excerpt}
            </p>

            <div className="mt-8 space-y-6 text-base leading-8 text-gray-700">
              {item.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-green-100 pt-7">
              <Link
                href="/berita"
                className="rounded-full bg-green-800 px-6 py-3 font-bold text-white transition hover:bg-green-700"
              >
                ← Semua Berita
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-green-200 px-6 py-3 font-bold text-green-900 transition hover:bg-green-50"
              >
                Tentang Sekolah
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-green-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-black text-green-950 md:text-3xl">
            Artikel Lainnya
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedNews.map((article) => (
              <Link
                key={article.id}
                href={`/berita/${article.id}`}
                className="rounded-2xl border border-green-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-bold text-green-700">
                  {article.category} · {article.date}
                </p>
                <h3 className="mt-3 text-lg font-extrabold text-green-950">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {article.excerpt}
                </p>
                <span className="mt-5 inline-block font-bold text-green-800">
                  Baca artikel →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}