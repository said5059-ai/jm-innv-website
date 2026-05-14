"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "Почему бизнесу нужна CRM-система",
    text: "CRM помогает контролировать заявки, клиентов, продажи и коммуникации.",
    tag: "CRM",
  },
  {
    title: "Как сайт помогает продавать больше",
    text: "Современный сайт работает как цифровой офис компании 24/7.",
    tag: "Web",
  },
  {
    title: "Автоматизация процессов в компании",
    text: "Автоматизация снижает ручную работу и ускоряет работу команды.",
    tag: "Automation",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#111827]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold text-[#08a982]">Блог</p>

          <h1 className="mt-4 text-6xl font-black tracking-tight">
            Полезные материалы о digital и автоматизации
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Пишем о CRM, сайтах, мобильных приложениях и автоматизации бизнеса.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#08a982]/30 hover:shadow-xl"
            >
              <span className="rounded-lg bg-[#08a982]/10 px-3 py-1 text-xs font-bold text-[#08a982]">
                {post.tag}
              </span>

              <h3 className="mt-5 text-2xl font-black">{post.title}</h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {post.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}