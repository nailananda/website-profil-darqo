"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Berita", href: "/berita" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="Logo Daar el-Qolam"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />

          <div>
            <p className="text-lg font-black leading-tight text-green-900">
              DAAR EL-QOLAM
            </p>
            <p className="text-xs text-green-700">
              Pendidikan · Karakter · Masa Depan
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-gray-700 transition hover:text-green-700"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/admission"
            className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-7 py-4 font-bold text-green-950 transition hover:bg-green-100"
          >
            Admission ↗
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-100 text-2xl text-green-900 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-green-100 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-800"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/admission"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-green-800 px-4 py-3 text-center font-bold text-white transition hover:bg-green-900"
            >
              Admission ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
