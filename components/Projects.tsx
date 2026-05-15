"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CRM Automation Platform",
    category: "CRM • Automation",
    image: "/projects/crm2.jpg",
    description:
      "Автоматизация продаж, управление клиентами и аналитика для бизнеса.",
  },
  {
    title: "Enterprise Dashboard",
    category: "Analytics • ERP",
    image: "/projects/kpi.jpg",
    description:
      "Система мониторинга KPI, отчётности и внутренних бизнес-процессов.",
  },
  {
    title: "Business Automation",
    category: "AI • Integrations",
    image: "/projects/auto.png",
    description:
      "Интеграции Telegram, AI-инструменты и автоматизация задач компании.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f7fbff] py-28"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#08a982]/6 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#08a982]">
            PROJECTS
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
            Кейсы и digital
            <span className="text-[#08a982]"> решения</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Создаём enterprise-продукты, CRM-системы и платформы,
            которые помогают компаниям масштабироваться.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#08a982]/30"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-white backdrop-blur-xl">
                  {project.category}
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-3xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-black text-[#08a982]">
                  Смотреть проект
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