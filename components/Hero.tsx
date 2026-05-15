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
      className="relative mx-auto max-w-7xl px-6 py-28 md:py-32"
    >
      <div className="max-w-5xl">
        <div className="mb-7 inline-flex rounded-full border border-[#08a982]/25 bg-white/70 px-5 py-2 text-sm font-black text-[#047a62] shadow-sm backdrop-blur-xl">
          CRM • Web • Automation • Enterprise IT
        </div>

        <h1 className="max-w-5xl text-5xl font-black leading-[1.03] tracking-tight text-[#07111f] md:text-7xl lg:text-8xl">
          Цифровые решения
          <br />
          для роста
          <br />
          <span className="text-[#08a982]">вашего бизнеса</span>
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
          JM INNV создаёт корпоративные сайты, CRM-системы, мобильные
          приложения и автоматизацию бизнес-процессов под реальные задачи
          компании.
        </p>

        <div className="mt-14 flex flex-wrap gap-5">
          <a
            href="#contact"
            className="rounded-full bg-[#08a982] px-8 py-4 font-black text-white shadow-[0_18px_40px_rgba(8,169,130,0.28)] transition hover:-translate-y-1 hover:bg-[#078f70]"
          >
            Обсудить проект →
          </a>

          <a
            href="#projects"
            className="rounded-full border border-slate-300 bg-white/80 px-8 py-4 font-black text-[#07111f] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#08a982] hover:text-[#08a982]"
          >
            Смотреть кейсы →
          </a>
        </div>
      </div>
    </motion.section>
  );
}