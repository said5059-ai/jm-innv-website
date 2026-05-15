"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "CRM Системы",
    description:
      "Автоматизация продаж, клиентов и внутренних бизнес-процессов.",
    image: "/services/crm.jpg",
  },
  {
    title: "Web Разработка",
    description:
      "Корпоративные сайты, SaaS платформы и digital-продукты.",
    image: "/services/web.jpg",
  },
  {
    title: "Мобильные приложения",
    description:
      "iOS и Android приложения с современным UX/UI интерфейсом.",
    image: "/services/mobile.jpg",
  },
  {
    title: "Автоматизация",
    description:
      "ERP, Telegram интеграции, аналитика и AI-инструменты.",
    image: "/services/automation.webp",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f7fbff] py-28">
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
            Мы создаём цифровую инфраструктуру для компаний: CRM,
            автоматизация, web-платформы и enterprise systems.
          </p>
        </div>

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-2 hover:border-[#08a982]/30"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/65 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-widest text-white backdrop-blur-xl">
                  JM INNV
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black text-[#07111f]">
                  {service.title}
                </h3>

                <p className="mt-5 min-h-[84px] leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-black text-[#08a982]">
                  Подробнее
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}