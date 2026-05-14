"use client";

import { Monitor, Palette, Smartphone, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
  viewport: { once: true },
};

const services = [
  {
    title: "Разработка сайтов",
    text: "Лендинги, корпоративные сайты, web-платформы и CRM-системы.",
    icon: Monitor,
  },
  {
    title: "Мобильные приложения",
    text: "Приложения для iOS и Android под задачи вашего бизнеса.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Дизайн",
    text: "Современные интерфейсы, прототипы и дизайн-системы.",
    icon: Palette,
  },
  {
    title: "Автоматизация бизнеса",
    text: "CRM, заявки, отчёты, интеграции и внутренние процессы.",
    icon: Workflow,
  },
];

export default function Services() {
  return (
    <motion.section
      {...fadeUp}
      id="services"
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <div className="mb-10">
        <p className="text-sm font-bold text-[#08a982]">Наши услуги</p>
        <h3 className="mt-2 text-4xl font-black">Что мы делаем</h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <div
            key={item.title}
            className="group rounded-[30px] border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#08a982]/30 hover:shadow-xl"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8fff8] text-[#08a982] transition duration-300 group-hover:scale-110 group-hover:bg-[#08a982] group-hover:text-white">
              <item.icon size={28} />
            </div>

            <h4 className="text-xl font-black">{item.title}</h4>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}