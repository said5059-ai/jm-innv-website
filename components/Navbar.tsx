"use client";

import Image from "next/image";
import Link from "next/link";
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
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-xl">
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
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center border border-slate-300 text-2xl text-[#07111f] xl:hidden"
          aria-label="Open menu"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 xl:hidden">
          <nav className="grid gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 pb-3 text-sm font-bold text-slate-700"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+998931361920"
              className="pt-2 text-sm font-black text-[#07111f]"
            >
              +998 93 136 19 20
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}