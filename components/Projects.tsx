"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CRM для отдела продаж",
    category: "Automation",
    description:
      "CRM-система для управления клиентами, задачами и аналитикой.",
    metric: "+42%",
    metricLabel: "скорость обработки заявок",
    image: "/projects/crm.jpg",
  },
  {
    title: "Corporate Dashboard",
    category: "Analytics",
    description:
      "Панель аналитики и KPI мониторинга для бизнеса в реальном времени.",
    metric: "3.2x",
    metricLabel: "рост эффективности",
    image: "/projects/dashboard.jpg",
  },
  {
    title: "Business Automation",
    category: "Enterprise",
    description:
      "ERP, Telegram-интеграции и автоматизация внутренних процессов.",
    metric: "-60%",
    metricLabel: "ручной работы",
    image: "/projects/automation.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
              PROJECTS
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
              Кейсы, которые дают
              <span className="text-[#08a982]"> результат</span>
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-slate-600">
            Мы проектируем решения для роста бизнеса,
            автоматизации процессов и повышения эффективности компаний.
          </p>
        </div>

        <div className="mt-20 grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-2 hover:border-[#08a982]/30"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#08a982] backdrop-blur-xl">
                  {project.category}
                </div>

                <div className="absolute bottom-6 left-6">
                  <p className="text-4xl font-black text-white">
                    {project.metric}
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    {project.metricLabel}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black text-[#07111f]">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#08a982]">
                  Смотреть кейс
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