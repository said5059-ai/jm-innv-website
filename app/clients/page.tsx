"use client";

import { motion } from "framer-motion";

const clients = [
  "FinTech",
  "E-commerce",
  "Education",
  "Healthcare",
  "Logistics",
  "Retail",
  "Startup",
  "Enterprise",
];

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#111827]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold text-[#08a982]">Клиенты</p>

          <h1 className="mt-4 text-6xl font-black tracking-tight">
            Кому мы помогаем
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            JM INNV помогает компаниям из разных сфер запускать сайты,
            CRM-системы, мобильные приложения и автоматизацию процессов.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {clients.map((client) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white text-xl font-black text-gray-500 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#08a982]/30 hover:text-[#08a982] hover:shadow-xl"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}