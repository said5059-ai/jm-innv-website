"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M21.7 3.3c.3-.9-.5-1.6-1.3-1.3L2.9 8.8c-1 .4-.9 1.8.1 2.1l4.5 1.4 1.7 5.3c.3.9 1.4 1.1 2 .4l2.5-2.6 4.7 3.5c.8.6 1.9.1 2.1-.9l3.2-14.7ZM8.1 11.7l9.7-6.1-7.8 7.4-.3 3.1-1.6-4.4Z" />
    </svg>
  );
}

export default function EnterpriseCTA() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-[#08a982]/10 bg-[#07111f] px-10 py-20 text-white shadow-[0_35px_120px_rgba(15,23,42,0.18)] md:px-20"
        >
          <div className="absolute right-0 top-0 h-[340px] w-[340px] rounded-full bg-[#08a982]/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4ff0c7]">
              ENTERPRISE SOLUTIONS
            </p>

            <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
              Готовы автоматизировать
              <span className="text-[#08a982]"> бизнес?</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              JM INNV помогает компаниям внедрять CRM-системы,
              автоматизировать процессы и создавать современные
              digital-продукты для роста бизнеса.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="#contact"
                className="rounded-full bg-[#08a982] px-8 py-4 text-sm font-black text-white shadow-[0_16px_40px_rgba(8,169,130,0.35)] transition hover:-translate-y-1 hover:bg-[#079774]"
              >
                Получить консультацию
              </Link>

              <Link
                href="https://t.me/your_username"
                target="_blank"
                className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                <TelegramIcon />
                Telegram
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}