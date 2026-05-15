"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Анализ",
    text: "Изучаем процессы, цели компании и определяем точки роста.",
  },
  {
    number: "02",
    title: "Архитектура",
    text: "Проектируем структуру решения, UX/UI и техническую логику.",
  },
  {
    number: "03",
    title: "Разработка",
    text: "Создаём CRM, сайт, платформу или автоматизацию под бизнес.",
  },
  {
    number: "04",
    title: "Внедрение",
    text: "Запускаем продукт, подключаем интеграции и обучаем команду.",
  },
  {
    number: "05",
    title: "Поддержка",
    text: "Сопровождаем систему, улучшаем и развиваем после запуска.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#f7fbff] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
              PROCESS
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
              Как мы создаём
              <span className="text-[#08a982]"> решения</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Работаем по понятной enterprise-методологии: от анализа и
              архитектуры до запуска, внедрения и поддержки.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#08a982] via-slate-200 to-transparent md:block" />

            <div className="space-y-5">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-[28px] border border-slate-200 bg-white p-7 pl-20 shadow-[0_20px_70px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-1 hover:border-[#08a982]/30"
                >
                  <div className="absolute left-5 top-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#08a982] text-sm font-black text-white shadow-[0_12px_30px_rgba(8,169,130,0.3)]">
                    {step.number}
                  </div>

                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-2xl font-black text-[#07111f]">
                      {step.title}
                    </h3>

                    <span className="text-sm font-bold text-[#08a982]">
                      Этап {step.number}
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}