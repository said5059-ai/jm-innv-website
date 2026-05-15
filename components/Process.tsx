"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Анализ бизнеса",
    text: "Изучаем процессы, цели, текущие инструменты и определяем точки автоматизации.",
    result: "Карта задач",
  },
  {
    number: "02",
    title: "Архитектура решения",
    text: "Проектируем структуру CRM, сайта, платформы или интеграций под реальные процессы.",
    result: "Технический план",
  },
  {
    number: "03",
    title: "Разработка",
    text: "Создаём интерфейсы, backend-логику, интеграции, панели управления и автоматизации.",
    result: "Рабочий продукт",
  },
  {
    number: "04",
    title: "Запуск и внедрение",
    text: "Подключаем систему, тестируем сценарии, обучаем команду и запускаем проект.",
    result: "Production запуск",
  },
];

export default function Process() {
  return (
    <section className="bg-[#f7fbff] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
              Процесс
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
              От идеи до
              <span className="text-[#08a982]"> внедрения</span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            Работаем по понятной B2B-методологии: фиксируем задачи, проектируем
            архитектуру, разрабатываем продукт и сопровождаем запуск.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-1 hover:border-[#08a982]/30"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#08a982] via-cyan-400 to-transparent" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#08a982]">
                  {step.number}
                </span>

                <span className="rounded-full bg-[#08a982]/10 px-3 py-1 text-xs font-black text-[#047a62]">
                  {step.result}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-black tracking-tight text-[#07111f]">
                {step.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                {step.text}
              </p>

              <div className="mt-10 h-px w-full bg-slate-200" />

              <div className="mt-5 text-sm font-black text-[#08a982]">
                Этап {step.number}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}