"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Palette,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Разработка сайтов",
    text: "Корпоративные сайты, landing pages, CRM и web-платформы.",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    text: "iOS и Android приложения под задачи бизнеса.",
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    text: "Современные интерфейсы и дизайн-системы.",
  },
  {
    icon: Workflow,
    title: "Автоматизация бизнеса",
    text: "CRM, интеграции, аналитика и бизнес-процессы.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#111827]">

      <section className="mx-auto max-w-7xl px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold text-[#08a982]">
            Услуги
          </p>

          <h1 className="mt-4 text-6xl font-black tracking-tight">
            Что мы делаем
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            JM INNV разрабатывает цифровые продукты,
            CRM-системы, web-сервисы и автоматизирует
            бизнес-процессы компаний.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#08a982]/30 hover:shadow-xl"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#08a982]/10 text-[#08a982]">
                <service.icon size={24} />
              </div>

              <h3 className="mt-5 text-2xl font-black">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {service.text}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

    </main>
  );
}