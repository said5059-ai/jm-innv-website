"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Azizbek Karimov",
    company: "Retail Group",
    role: "Операционный директор",
    text: "JM INNV помогли нам автоматизировать обработку заявок и внедрить CRM. Команда быстро поняла бизнес-процессы и предложила решение, которое удобно использовать каждый день.",
    result: "+42% скорость обработки заявок",
  },
  {
    name: "Dilshod Rahimov",
    company: "Logistics Company",
    role: "Руководитель отдела логистики",
    text: "Мы получили систему для контроля процессов, уведомлений и отчётности. Проект был реализован структурно: от анализа до запуска и обучения команды.",
    result: "-60% ручной работы",
  },
  {
    name: "Kamola Tursunova",
    company: "Medical Center",
    role: "Администратор клиники",
    text: "После внедрения цифровых инструментов стало проще работать с клиентами, заявками и расписанием. Решение получилось понятным и практичным для сотрудников.",
    result: "24/7 цифровая поддержка",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7fbff] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
              Клиенты
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
              Что получает
              <span className="text-[#08a982]"> бизнес</span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            Мы делаем не просто сайты и системы, а рабочие инструменты,
            которые помогают компаниям ускорять процессы, видеть данные и
            управлять задачами.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-1 hover:border-[#08a982]/30"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#08a982] via-cyan-400 to-transparent" />

              <div className="rounded-2xl border border-slate-200 bg-[#f7fbff] px-5 py-4 text-sm font-black text-[#07111f]">
                <span className="mr-2 text-[#08a982]">●</span>
                {item.result}
              </div>

              <p className="mt-8 min-h-[180px] text-base leading-8 text-slate-600">
                “{item.text}”
              </p>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="text-lg font-black text-[#07111f]">
                  {item.name}
                </p>

                <p className="mt-1 text-sm font-bold text-slate-500">
                  {item.role}
                </p>

                <p className="mt-1 text-sm text-[#08a982]">
                  {item.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}