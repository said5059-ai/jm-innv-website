"use client";

import { motion } from "framer-motion";

const licenses = [
  {
    title: "amoCRM Integration",
    text: "Сертифицированная интеграция CRM-систем и автоматизация продаж.",
  },
  {
    title: "Web Development",
    text: "Разработка корпоративных web-платформ и SaaS решений.",
  },
  {
    title: "UI/UX Certification",
    text: "Современные интерфейсы и digital product design.",
  },
  {
    title: "Cloud Infrastructure",
    text: "Безопасная cloud-инфраструктура и серверные решения.",
  },
];

export default function LicensesPage() {
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
            Лицензии
          </p>

          <h1 className="mt-4 text-6xl font-black tracking-tight">
            Сертификаты и лицензии компании
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            JM INNV использует современные технологии,
            сертифицированные CRM-решения и enterprise-подход
            к разработке цифровых продуктов.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {licenses.map((license) => (
            <motion.div
              key={license.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#08a982]/30 hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-black">
                  {license.title}
                </h3>

                <div className="rounded-lg bg-[#08a982]/10 px-4 py-2 text-sm font-bold text-[#08a982]">
                  Verified
                </div>

              </div>

              <p className="mt-5 text-gray-600 leading-7">
                {license.text}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

    </main>
  );
}