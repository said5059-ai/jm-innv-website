"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Azizbek Karimov",
    company: "Retail Group",
    text: "Команда JM INNV автоматизировала процессы продаж и внедрила CRM-систему. Скорость обработки заявок выросла в несколько раз.",
  },
  {
    name: "Dilshod Rahimov",
    company: "Logistics Company",
    text: "Получили современную платформу и автоматизацию внутренних процессов. Всё выполнено профессионально и в срок.",
  },
  {
    name: "Kamola Tursunova",
    company: "Medical Center",
    text: "Очень сильная команда. Помогли цифровизировать бизнес и улучшить взаимодействие с клиентами.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7fbff] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
            TESTIMONIALS
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
            Что говорят
            <span className="text-[#08a982]"> клиенты</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Мы строим долгосрочные отношения и создаём решения,
            которые реально помогают бизнесу расти.
          </p>
        </div>

        <div className="mt-20 grid gap-7 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-2 hover:border-[#08a982]/30"
            >
              <div className="flex items-center gap-1 text-[#08a982]">
                ★ ★ ★ ★ ★
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                {item.text}
              </p>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="text-lg font-black text-[#07111f]">
                  {item.name}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}