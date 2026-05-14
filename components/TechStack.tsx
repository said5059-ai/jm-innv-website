"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Tailwind CSS",
  "Telegram API",
  "CRM",
  "ERP",
  "REST API",
  "Cloud Deploy",
];

export default function TechStack() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
              TECHNOLOGIES
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
              Современный
              <span className="text-[#08a982]"> стек</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Используем надёжные технологии для создания быстрых, масштабируемых
              и безопасных IT-решений для бизнеса.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-[#f7fbff] px-5 py-5 text-center text-sm font-black text-[#07111f] shadow-[0_16px_45px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-[#08a982]/30 hover:text-[#08a982]"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}