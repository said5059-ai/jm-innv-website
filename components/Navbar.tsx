"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "Лицензии", href: "/licenses" },
  { name: "О компании", href: "/about" },
  { name: "Кейсы", href: "/projects" },
  { name: "Клиенты", href: "/clients" },
  { name: "Команда", href: "/team" },
  { name: "Блог", href: "/blog" },
  { name: "Контакты", href: "/contact" },
];

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M21.7 3.3c.3-.9-.5-1.6-1.3-1.3L2.9 8.8c-1 .4-.9 1.8.1 2.1l4.5 1.4 1.7 5.3c.3.9 1.4 1.1 2 .4l2.5-2.6 4.7 3.5c.8.6 1.9.1 2.1-.9l3.2-14.7ZM8.1 11.7l9.7-6.1-7.8 7.4-.3 3.1-1.6-4.4Z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex shrink-0 items-center gap-4">
          <div className="relative flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-2xl border border-[#08a982]/10 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <Image
              src="/icon.png"
              alt="JM INNV"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>

          <div className="leading-tight">
            <p className="text-2xl font-black tracking-tight text-[#07111f]">
              JM INNV
            </p>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-slate-500">
              Digital Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[13px] font-bold text-slate-700 transition hover:text-[#08a982]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <a
            href="tel:+998931361920"
            className="whitespace-nowrap text-sm font-black text-[#07111f]"
          >
            +998 93 136 19 20
          </a>

          <a
            href="https://t.me/your_username"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#08a982] text-white shadow-[0_16px_35px_rgba(8,169,130,0.35)] transition hover:-translate-y-0.5"
          >
            <TelegramIcon />
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-2xl text-[#07111f] shadow-sm xl:hidden"
          aria-label="Open menu"
        >
          ≡
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#07111f]/80 backdrop-blur-xl xl:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="ml-auto flex h-full w-full max-w-md flex-col bg-white px-6 py-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#08a982]/10 bg-white shadow-sm">
                    <Image
                      src="/icon.png"
                      alt="JM INNV"
                      width={46}
                      height={46}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-xl font-black text-[#07111f]">
                      JM INNV
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                      Digital
                    </p>
                  </div>
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-2xl text-[#07111f]"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              <nav className="mt-10 grid gap-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f7fbff] px-5 py-4 text-base font-black text-[#07111f] transition hover:border-[#08a982]/30 hover:text-[#08a982]"
                    >
                      {link.name}
                      <span className="text-[#08a982]">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto rounded-[28px] border border-slate-200 bg-[#f7fbff] p-6">
                <p className="text-sm font-bold text-slate-500">
                  Связаться с нами
                </p>

                <a
                  href="tel:+998931361920"
                  className="mt-2 block text-xl font-black text-[#07111f]"
                >
                  +998 93 136 19 20
                </a>

                <a
                  href="https://t.me/your_username"
                  target="_blank"
                  className="mt-5 flex items-center justify-center gap-3 rounded-full bg-[#08a982] px-6 py-4 text-sm font-black text-white shadow-[0_16px_35px_rgba(8,169,130,0.28)]"
                >
                  <TelegramIcon />
                  Telegram
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}