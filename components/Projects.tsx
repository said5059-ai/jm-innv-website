"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CRM Automation Platform",
    category: "CRM • Automation",
    image: "/projects/crm2.jpg",
    description:
      "Платформа для управления продажами, клиентами, заявками и аналитикой в единой системе.",
    metrics: ["+42% скорость обработки", "15+ процессов автоматизировано"],
  },
  {
    title: "Enterprise Dashboard",
    category: "Analytics • ERP",
    image: "/projects/kpi.jpg",
    description:
      "Интерактивная панель KPI, отчётности и мониторинга бизнес-процессов в реальном времени.",
    metrics: ["3.2x рост контроля", "Real-time аналитика"],
  },
  {
    title: "Business Automation",
    category: "AI • Integrations",
    image: "/projects/auto.png",
    description:
      "Интеграции Telegram, AI-инструменты, уведомления и автоматизация операционных задач.",
    metrics: ["-60% ручной работы", "24/7 автоматизация"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
              Кейсы
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
              Решения, которые работают
              <span className="text-[#08a982]"> на результат</span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            Проектируем и внедряем цифровые продукты, которые помогают бизнесу
            быстрее обрабатывать заявки, видеть аналитику и сокращать ручную
            работу.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group grid overflow-hidden rounded-[34px] border border-slate-200 bg-[#f7fbff] shadow-[0_24px_80px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-1 hover:border-[#08a982]/30 hover:bg-white lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative min-h-[360px] overflow-hidden bg-[#07111f]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-[#07111f]/10 to-transparent" />

                <div className="absolute left-7 top-7 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-white backdrop-blur-xl">
                  {project.category}
                </div>
              </div>

              <div className="flex flex-col p-8 md:p-10">
                <h3 className="text-3xl font-black tracking-tight text-[#07111f] md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-8 grid gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-black text-[#07111f]"
                    >
                      <span className="mr-2 text-[#08a982]">●</span>
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#07111f] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#08a982]"
                  >
                    Обсудить похожий проект
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