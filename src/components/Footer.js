import Link from "next/link";
import Image from "next/image";
import { school } from "./data";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo Daar el-Qolam"
              width={52}
              height={52}
              className="h-12 w-12 object-contain"
            />
            <div>
              <h2 className="font-extrabold">DAAR EL-QOLAM</h2>
              <p className="text-xs text-green-200">Sekolah dan Pesantren</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-green-100">
            Pendidikan untuk membangun generasi berilmu, berakhlak, mandiri,
            dan bermanfaat bagi masyarakat.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Navigasi</h3>
          <div className="flex flex-col gap-3 text-sm text-green-100">
            <Link className="hover:text-white" href="/">Beranda</Link>
            <Link className="hover:text-white" href="/about">Tentang Kami</Link>
            <Link className="hover:text-white" href="/berita">Berita</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Hubungi Kami</h3>
          <p className="text-sm leading-7 text-green-100">{school.address}</p>
          <a
            href={`mailto:${school.email}`}
            className="mt-2 inline-block text-sm text-green-200 hover:text-white"
          >
            {school.email}
          </a>
          <a
            href="https://www.daarelqolam.ac.id/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm text-green-200 hover:text-white"
          >
            Website resmi ↗
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-green-200">
        © {new Date().getFullYear()} SMAS Daar el-Qolam. Website profil sekolah.
      </div>
    </footer>
  );
}