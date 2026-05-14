"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
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
            Контакты
          </p>

          <h1 className="mt-4 text-6xl font-black tracking-tight">
            Свяжитесь с нами
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Мы готовы обсудить ваш проект,
            автоматизацию бизнеса или разработку
            цифрового продукта.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="space-y-6">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#08a982]/10 text-[#08a982]">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Телефон
                  </p>

                  <h3 className="text-xl font-black">
                    +998 93 136 19 20
                  </h3>
                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#08a982]/10 text-[#08a982]">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <h3 className="text-xl font-black">
                    info@jminnv.uz
                  </h3>
                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#08a982]/10 text-[#08a982]">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Адрес
                  </p>

                  <h3 className="text-xl font-black">
                    Ташкент, Узбекистан
                  </h3>
                </div>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

            <h3 className="text-3xl font-black">
              Оставить заявку
            </h3>

            <div className="mt-8 space-y-4">

              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full rounded-lg border border-gray-200 bg-[#f5f8fc] px-5 py-4 outline-none transition focus:border-[#08a982]"
              />

              <input
                type="text"
                placeholder="Телефон"
                className="w-full rounded-lg border border-gray-200 bg-[#f5f8fc] px-5 py-4 outline-none transition focus:border-[#08a982]"
              />

              <textarea
                placeholder="Расскажите о проекте"
                rows={5}
                className="w-full rounded-lg border border-gray-200 bg-[#f5f8fc] px-5 py-4 outline-none transition focus:border-[#08a982]"
              />

              <button
                className="flex items-center gap-3 rounded-lg bg-[#08a982] px-8 py-4 font-bold text-white transition hover:bg-[#078f70]"
              >
                <Send size={18} />
                Отправить заявку
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}