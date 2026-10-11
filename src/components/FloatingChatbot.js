"use client";

import { useState } from "react";
import Link from "next/link";

const initialMessage = {
  role: "bot",
  text: "Assalamu'alaikum! 👋 Saya ALI, asisten informasi Daar el-Qolam. Ada yang ingin kamu tanyakan tentang sekolah, program pendidikan, fasilitas, atau pendaftaran?",
};

const topics = [
  "Informasi sekolah",
  "Program pendidikan",
  "Fasilitas",
  "Pendaftaran",
];

const officialWebsite =
  "https://www.daarelqolam.ac.id/profil/darqo2/";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([initialMessage]);

  function clearHistory() {
    setMessages([initialMessage]);
    setMessage("");
  }

  function sendMessage(text = message) {
    const question = text.trim();

    if (!question) return;

    const normalized = question.toLowerCase();
    let answer;
    let link = null;

    if (
      normalized.includes("pendaftaran") ||
      normalized.includes("admission") ||
      normalized.includes("daftar") ||
      normalized.includes("penerimaan")
    ) {
      answer =
        "Untuk informasi pendaftaran dan penerimaan santri baru, silakan kunjungi halaman Admission di website ini.";

      link = {
        text: "Lihat Halaman Admission",
        href: "/admission",
      };
    } else if (
      normalized.includes("informasi sekolah") ||
      normalized.includes("profil") ||
      normalized.includes("sejarah") ||
      normalized.includes("sekolah")
    ) {
      answer =
        "Untuk mengetahui profil dan sejarah Daar el-Qolam 2 lebih lanjut, silakan kunjungi situs resmi sekolah.";

      link = {
        text: "Profil Resmi Daar el-Qolam 2",
        href: officialWebsite,
      };
    } else if (
      normalized.includes("program pendidikan") ||
      normalized.includes("program") ||
      normalized.includes("akademik")
    ) {
      answer =
        "Untuk informasi lebih lanjut tentang program pendidikan Daar el-Qolam 2, silakan kunjungi situs resmi sekolah.";

      link = {
        text: "Informasi Program Pendidikan",
        href: officialWebsite,
      };
    } else if (
      normalized.includes("fasilitas") ||
      normalized.includes("gedung") ||
      normalized.includes("sarana")
    ) {
      answer =
        "Untuk informasi lebih lanjut tentang fasilitas dan lingkungan sekolah, silakan kunjungi situs resmi Daar el-Qolam 2.";

      link = {
        text: "Kunjungi Situs Resmi",
        href: officialWebsite,
      };
    } else {
      answer =
        "Maaf, saya ALI masih memiliki keterbatasan informasi. Silakan kunjungi situs resmi Daar el-Qolam 2 untuk memperoleh informasi lebih lanjut.";

      link = {
        text: "Situs Resmi Daar el-Qolam 2",
        href: officialWebsite,
      };
    }

    setMessages((previous) => [
      ...previous,
      { role: "user", text: question },
      { role: "bot", text: answer, link },
    ]);

    setMessage("");
  }

  function renderMessageLink(link) {
    if (!link) return null;

    if (link.href.startsWith("http")) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-xl bg-green-800 px-3 py-2 font-semibold text-white transition hover:bg-green-700"
        >
          {link.text} →
        </a>
      );
    }

    return (
      <Link
        href={link.href}
        className="mt-3 inline-block rounded-xl bg-green-800 px-3 py-2 font-semibold text-white transition hover:bg-green-700"
      >
        {link.text} →
      </Link>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {isOpen && (
        <section className="mb-4 flex h-125 max-h-[75vh] w-87.5 max-w-[calc(100vw-40px)] flex-col overflow-hidden rounded-3xl border border-green-100 bg-white shadow-2xl">
          <header className="flex items-center gap-3 bg-green-900 p-4 text-white">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <RobotIcon />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="font-bold">ALI</h2>

              <p className="text-xs text-green-100">
                Asisten Daar el-Qolam
              </p>

              <div className="mt-1 flex items-center gap-1.5 text-xs text-green-200">
                <span className="h-2 w-2 rounded-full bg-green-300" />
                Siap membantu
              </div>
            </div>

            <button
              type="button"
              onClick={clearHistory}
              title="Hapus semua percakapan"
              aria-label="Hapus semua percakapan"
              className="rounded-xl p-2 transition hover:bg-white/15"
            >
              <TrashIcon />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup chatbot ALI"
              className="rounded-full px-2 py-1 text-xl transition hover:bg-white/15"
            >
              ✕
            </button>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4">
            {messages.map((item, index) => (
              <div
                key={`${index}-${item.role}`}
                className={`flex ${
                  item.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {item.role === "bot" && (
                  <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-green-900 text-white">
                    <RobotIcon />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    item.role === "user"
                      ? "rounded-br-sm bg-green-800 text-white"
                      : "rounded-tl-sm border border-green-100 bg-white text-gray-700 shadow-sm"
                  }`}
                >
                  <p className="whitespace-pre-wrap">
                    {item.text}
                  </p>

                  {item.link && renderMessageLink(item.link)}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="pt-2">
                <p className="mb-2 text-xs font-semibold text-gray-500">
                  Topik yang bisa kamu pilih
                </p>

                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => sendMessage(topic)}
                      className="rounded-full border border-green-200 bg-white px-3 py-2 text-xs font-semibold text-green-900 transition hover:bg-green-100"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 bg-white p-3">
            {messages.length > 1 && (
              <button
                type="button"
                onClick={clearHistory}
                className="mb-2 w-full rounded-xl border border-green-200 py-2 text-xs font-semibold text-green-900 transition hover:bg-green-50"
              >
                + Mulai Percakapan Baru
              </button>
            )}

            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tulis pertanyaan..."
                aria-label="Tulis pertanyaan"
                className="min-w-0 flex-1 rounded-full border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />

              <button
                type="submit"
                aria-label="Kirim pesan"
                disabled={!message.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-900 text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <SendIcon />
              </button>
            </form>
          </div>
        </section>
      )}

      <div className="flex items-center justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={
            isOpen ? "Tutup chatbot ALI" : "Buka chatbot ALI"
          }
          className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-green-900 text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-green-800"
        >
          {isOpen ? (
            <span className="text-3xl">×</span>
          ) : (
            <RobotIcon />
          )}
        </button>
      </div>
    </div>
  );
}

function RobotIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-10 w-10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 5v7M20 5h8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <rect
        x="7"
        y="12"
        width="34"
        height="29"
        rx="10"
        fill="#166534"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <rect
        x="12"
        y="18"
        width="24"
        height="15"
        rx="6"
        fill="#f0fdf4"
      />

      <circle cx="19" cy="25" r="2.5" fill="#15803d" />
      <circle cx="29" cy="25" r="2.5" fill="#15803d" />

      <path
        d="M19 29h10M3 22v7M45 22v7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 6h18M8 6V4h8v2m-11 0 1 14h12l1-14M10 10v6m4-6v6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
