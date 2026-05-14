"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "CRM Системы",
    description:
      "Автоматизация продаж, клиентов и внутренних бизнес-процессов.",
    icon: "◈",
  },
  {
    title: "Web Разработка",
    description:
      "Корпоративные сайты, SaaS платформы и digital-продукты.",
    icon: "◎",
  },
  {
    title: "Мобильные приложения",
    description:
      "iOS и Android приложения с современным UX/UI интерфейсом.",
    icon: "◉",
  },
  {
    title: "Автоматизация",
    description:
      "ERP, Telegram интеграции, аналитика и AI-инструменты.",
    icon: "✦",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f7fbff] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
            SERVICES
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
            IT-решения для роста
            <span className="text-[#08a982]"> бизнеса</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Мы создаём цифровую инфраструктуру для компаний:
            CRM, автоматизация, web-платформы и enterprise systems.
          </p>
        </div>

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-2 hover:border-[#08a982]/30"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08a982]/10 text-2xl text-[#08a982]">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-black text-[#07111f]">
                {service.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#08a982]">
                Подробнее
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}