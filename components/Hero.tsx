"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true },
};

export default function Hero() {
  return (
    <motion.section
      {...fadeUp}
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-lg font-bold text-[#08a982]">
            Внедрение CRM и автоматизация бизнеса
          </p>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-[#07111f] md:text-7xl">
            Создаём IT-
            <br />
            решения,
            <br />
            которые
            <br />
            <span className="text-[#08a982]">ускоряют</span> бизнес
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            JM INNV разрабатывает сайты, CRM-системы, мобильные приложения и
            автоматизирует бизнес-процессы под ваши задачи.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#08a982] px-8 py-4 font-bold text-white shadow-[0_18px_40px_rgba(8,169,130,0.28)] transition hover:-translate-y-1 hover:bg-[#078f70]"
            >
              Оставить заявку →
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#08a982]/40 bg-white px-8 py-4 font-bold text-[#047a62] transition hover:-translate-y-1 hover:bg-[#08a982] hover:text-white"
            >
              Наши услуги →
            </a>
          </div>

          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
            {[
              ["Надёжно", "Гарантия качества"],
              ["Быстро", "Соблюдаем сроки"],
              ["Результативно", "Рост вашего бизнеса"],
            ].map(([title, text]) => (
              <div key={title} className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#08a982]/10 text-[#08a982]">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-black text-[#07111f]">{title}</p>
                  <p className="text-xs text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-20 h-52 w-52 rounded-full bg-[#08a982]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[34px] border border-[#08a982]/10 bg-white shadow-[0_35px_100px_rgba(15,23,42,0.12)]">
            <img
              src="/hero-bg.jpg"
              alt="JM INNV"
              className="h-[640px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#b9fff0]/20" />

            <div className="absolute right-8 top-8 rounded-full bg-[#08a982] px-6 py-3 text-sm font-black text-white shadow-[0_14px_35px_rgba(8,169,130,0.35)]">
              Next.js • CRM • Automation
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-[26px] border border-white/20 bg-[#10201f]/75 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
              <p className="text-sm font-bold text-white/75">JM INNV</p>

              <h3 className="mt-2 text-4xl font-black text-white">
                Digital Solutions
              </h3>

              <p className="mt-4 max-w-md text-base leading-7 text-white/80">
                Современные web-технологии для автоматизации и роста бизнеса.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}