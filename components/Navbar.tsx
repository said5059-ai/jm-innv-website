"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "Кейсы", href: "/projects" },
  { name: "Клиенты", href: "/clients" },
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-black/5 transition-all duration-500 ${
  scrolled
    ? "border-b border-white/10 bg-white/70 backdrop-blur-3xl shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
    : "bg-white/80 backdrop-blur-xl"
}`}
      >
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-4">
            <div
              className={`relative flex h-[56px] w-[56px] items-center justify-center overflow-hidden rounded-2xl border transition-all duration-500 ${
                scrolled
                  ? "border-white/10 bg-white/10"
                  : "border-[#08a982]/10 bg-white"
              }`}
            >
              <Image
                src="/icon.png"
                alt="JM INNV"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <div className="leading-tight">
              <p
                className={`text-[34px] font-black tracking-tight transition ${
                  scrolled ? "text-[#07111f]" : "text-[#07111f]"
                }`}
              >
                JM INNV
              </p>

              <p
                className={`text-[10px] font-bold uppercase tracking-[0.35em] transition ${
                  scrolled ? "text-white/60" : "text-slate-500"
                }`}
              >
                Digital Solutions
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-3 xl:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold tracking-tight transition-all duration-300 ${
                  scrolled
                    ? "text-[#07111f] hover:bg-[#07111f] hover:text-white"
                    : "text-slate-700 hover:bg-[#08a982]/10 hover:text-[#08a982]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <a
              href="tel:+998931361920"
              className={`text-sm font-black transition ${
                scrolled ? "text-[#07111f]" : "text-[#07111f]"
              }`}
            >
              +998 93 136 19 20
            </a>

            <a
              href="https://t.me/your_username"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#08a982] text-white shadow-[0_14px_40px_rgba(8,169,130,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#07c094]"
            >
              <TelegramIcon />
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-black text-[#07111f] transition hover:-translate-y-1 hover:bg-[#08a982] hover:shadow-[0_12px_30px_rgba(8,169,130,0.35)] hover:text-white"
            >
              Обсудить проект
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-2xl transition xl:hidden ${
              scrolled
                ? "border-white/10 bg-white/10 text-white"
                : "border-slate-200 bg-white text-[#07111f]"
            }`}
          >
            ≡
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#07111f]/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 240,
              }}
              className="ml-auto flex h-full w-full max-w-md flex-col bg-[#07111f] px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                    <Image
                      src="/icon.png"
                      alt="JM INNV"
                      width={44}
                      height={44}
                    />
                  </div>

                  <div>
                    <p className="text-xl font-black text-white">
                      JM INNV
                    </p>

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                      Digital
                    </p>
                  </div>
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white"
                >
                  ×
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-lg font-black text-white transition hover:border-[#08a982]/40 hover:bg-[#08a982]/10"
                    >
                      {link.name}
                      <span className="text-[#08a982]">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto rounded-[30px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-bold text-white/50">
                  Связаться с нами
                </p>

                <a
                  href="tel:+998931361920"
                  className="mt-2 block text-2xl font-black text-white"
                >
                  +998 93 136 19 20
                </a>

                <a
                  href="https://t.me/your_username"
                  target="_blank"
                  className="mt-6 flex items-center justify-center gap-3 rounded-full bg-[#08a982] px-6 py-4 text-sm font-black text-white shadow-[0_16px_40px_rgba(8,169,130,0.3)]"
                >
                  <TelegramIcon />
                  Telegram
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}