import Image from "next/image";
import Link from "next/link";

export default function BeritaCard({ item }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link
        href={`/berita/${item.id}`}
        className="relative block h-56 overflow-hidden bg-green-100"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-green-800 shadow">
          {item.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-xs font-semibold text-green-700">
          {item.date}
        </p>

        <h3 className="mb-3 text-xl font-extrabold leading-snug text-green-950 transition group-hover:text-green-700">
          {item.title}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-7 text-gray-600">
          {item.excerpt}
        </p>

        <Link
          href={`/berita/${item.id}`}
          className="inline-flex items-center gap-2 font-bold text-green-800 transition hover:gap-4"
        >
          Baca selengkapnya →
        </Link>
      </div>
    </article>
  );
}