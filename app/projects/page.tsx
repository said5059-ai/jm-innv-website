"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "CRM-платформа",
    text: "Система управления клиентами, продажами и аналитикой.",
    tag: "Web App",
  },
  {
    title: "E-commerce система",
    text: "Интернет-магазин с CRM и автоматизацией заказов.",
    tag: "Commerce",
  },
  {
    title: "Mobile Banking UI",
    text: "Современный интерфейс финансового мобильного приложения.",
    tag: "UI/UX",
  },
  {
    title: "ERP Dashboard",
    text: "Внутренняя аналитическая система для бизнеса.",
    tag: "Enterprise",
  },
];

export default function ProjectsPage() {
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
            Кейсы
          </p>

          <h1 className="mt-4 text-6xl font-black tracking-tight">
            Наши проекты
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Мы создаём CRM-системы, web-платформы,
            интерфейсы и цифровые продукты для бизнеса.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#08a982]/30 hover:shadow-2xl"
            >

              <div className="bg-[#0f172a] p-5">

                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="rounded-xl bg-gradient-to-br from-[#08a982] to-cyan-500 p-5 text-white">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-white/70">
                        Dashboard
                      </p>

                      <h3 className="mt-1 text-2xl font-black">
                        {project.title}
                      </h3>
                    </div>

                    <div className="rounded-lg bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur">
                      {project.tag}
                    </div>

                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">

                    <div className="rounded-lg bg-white/15 p-3">
                      <p className="text-xs text-white/70">
                        Users
                      </p>

                      <p className="mt-1 text-lg font-black">
                        12K
                      </p>
                    </div>

                    <div className="rounded-lg bg-white/15 p-3">
                      <p className="text-xs text-white/70">
                        Growth
                      </p>

                      <p className="mt-1 text-lg font-black">
                        +82%
                      </p>
                    </div>

                    <div className="rounded-lg bg-white/15 p-3">
                      <p className="text-xs text-white/70">
                        Speed
                      </p>

                      <p className="mt-1 text-lg font-black">
                        2x
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 h-28 rounded-xl bg-black/20 p-4">

                    <div className="flex h-full items-end gap-2">
                      <div className="h-[35%] w-full rounded-t-lg bg-white/40" />
                      <div className="h-[55%] w-full rounded-t-lg bg-white/50" />
                      <div className="h-[75%] w-full rounded-t-lg bg-white/60" />
                      <div className="h-[45%] w-full rounded-t-lg bg-white/40" />
                      <div className="h-[90%] w-full rounded-t-lg bg-white" />
                    </div>

                  </div>

                </div>
              </div>

              <div className="p-6">

                <span className="rounded-lg bg-[#08a982]/10 px-3 py-1 text-xs font-bold text-[#08a982]">
                  {project.tag}
                </span>

                <h3 className="mt-4 text-3xl font-black">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {project.text}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </main>
  );
}