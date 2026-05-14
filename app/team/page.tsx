"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Алишер Каримов", role: "Founder / CEO" },
  { name: "Дилшод Рахимов", role: "Frontend Developer" },
  { name: "Малика Саидова", role: "UI/UX Designer" },
  { name: "Бекзод Юсупов", role: "Backend Developer" },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#111827]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold text-[#08a982]">Наша команда</p>

          <h1 className="mt-4 text-6xl font-black tracking-tight">
            Люди, которые создают цифровые решения
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Команда JM INNV объединяет разработчиков, дизайнеров и специалистов
            по автоматизации бизнеса.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {team.map((person) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08a982]/30 hover:shadow-xl"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-[#08a982]/10 text-3xl font-black text-[#08a982]">
                {person.name[0]}
              </div>

              <h3 className="mt-6 text-xl font-black">{person.name}</h3>

              <p className="mt-2 text-sm font-semibold text-gray-500">
                {person.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}