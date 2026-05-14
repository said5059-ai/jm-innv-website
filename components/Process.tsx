"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Анализ",
    text: "Изучаем бизнес-процессы, цели компании и текущие проблемы.",
  },
  {
    number: "02",
    title: "Проектирование",
    text: "Создаём структуру решения, UX/UI логику и техническую архитектуру.",
  },
  {
    number: "03",
    title: "Разработка",
    text: "Разрабатываем сайт, CRM, платформу или автоматизацию под задачи бизнеса.",
  },
  {
    number: "04",
    title: "Внедрение",
    text: "Запускаем продукт, подключаем интеграции и обучаем команду.",
  },
  {
    number: "05",
    title: "Поддержка",
    text: "Сопровождаем, улучшаем и развиваем систему после запуска.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#f7fbff] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
            PROCESS
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
            Как мы создаём
            <span className="text-[#08a982]"> решения</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Мы работаем по понятной enterprise-методологии: от анализа и
            архитектуры до запуска, внедрения и поддержки.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_25px_80px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-2 hover:border-[#08a982]/30"
            >
              <p className="text-sm font-black text-[#08a982]">
                {step.number}
              </p>

              <h3 className="mt-6 text-2xl font-black text-[#07111f]">
                {step.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}