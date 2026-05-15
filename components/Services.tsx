"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "CRM-системы",
    description:
      "Автоматизация продаж, клиентской базы, заявок, задач и внутренних процессов компании.",
    image: "/services/crm.jpg",
    features: ["Продажи", "Клиенты", "Отчёты"],
  },
  {
    title: "Web-разработка",
    description:
      "Корпоративные сайты, SaaS-платформы, личные кабинеты и digital-продукты для бизнеса.",
    image: "/services/web.jpg",
    features: ["Next.js", "UX/UI", "SaaS"],
  },
  {
    title: "Мобильные приложения",
    description:
      "iOS и Android приложения с современным интерфейсом, высокой скоростью и удобной логикой.",
    image: "/services/mobile.jpg",
    features: ["iOS", "Android", "UX/UI"],
  },
  {
    title: "Автоматизация бизнеса",
    description:
      "ERP, Telegram-интеграции, AI-инструменты, аналитика и автоматизация повторяющихся задач.",
    image: "/services/automation.webp",
    features: ["ERP", "AI", "Telegram"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
              Услуги
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
              Цифровая инфраструктура
              <span className="text-[#08a982]"> для бизнеса</span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            Разрабатываем и внедряем IT-решения, которые помогают компаниям
            управлять продажами, клиентами, процессами и цифровыми продуктами
            в единой системе.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group grid overflow-hidden rounded-[30px] border border-slate-200 bg-[#f7fbff] shadow-[0_20px_70px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-1 hover:border-[#08a982]/30 hover:bg-white md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-[260px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/45 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col p-8">
                <div className="mb-8 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-[#08a982]/15 bg-[#08a982]/10 px-3 py-1 text-xs font-black text-[#047a62]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-black tracking-tight text-[#07111f]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-auto pt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-black text-[#08a982]"
                  >
                    Обсудить решение
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}