"use client";

import { motion } from "framer-motion";

const stacks = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST API", "PostgreSQL", "Supabase"],
  },
  {
    category: "Infrastructure",
    items: ["Cloud Deploy", "Security", "Scalability", "Monitoring"],
  },
  {
    category: "Business Systems",
    items: ["CRM", "ERP", "Telegram API", "Automation"],
  },
];

export default function TechStack() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
              Технологии
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
              Надёжный
              <span className="text-[#08a982]"> технологический стек</span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            Используем современные технологии и инфраструктурные решения для
            создания быстрых, безопасных и масштабируемых digital-продуктов.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {stacks.map((stack, index) => (
            <motion.article
              key={stack.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-slate-200 bg-[#f7fbff] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-1 hover:border-[#08a982]/30 hover:bg-white"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black tracking-tight text-[#07111f]">
                  {stack.category}
                </h3>

                <div className="h-3 w-3 rounded-full bg-[#08a982]" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {stack.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-[#07111f] transition hover:border-[#08a982]/30 hover:text-[#08a982]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}