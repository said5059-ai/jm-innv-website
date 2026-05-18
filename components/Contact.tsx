"use client";

import Link from "next/link";
import { useState } from "react";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M21.7 3.3c.3-.9-.5-1.6-1.3-1.3L2.9 8.8c-1 .4-.9 1.8.1 2.1l4.5 1.4 1.7 5.3c.3.9 1.4 1.1 2 .4l2.5-2.6 4.7 3.5c.8.6 1.9.1 2.1-.9l3.2-14.7ZM8.1 11.7l9.7-6.1-7.8 7.4-.3 3.1-1.6-4.4Z" />
    </svg>
  );
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
setError("Не удалось отправить заявку");

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      setSuccess(true);
setError("");
event.currentTarget.reset();
    } catch (err) {
      setSuccess(false);
setError("Не удалось отправить заявку");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-[#f7fbff] py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08a982]">
            CONTACT
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-[#07111f] md:text-6xl">
            Обсудим ваш
            <span className="text-[#08a982]"> проект</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Оставьте заявку — мы свяжемся с вами, уточним задачи и предложим
            оптимальное решение для автоматизации бизнеса.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-bold text-slate-500">Телефон</p>

              <p className="mt-2 text-xl font-black text-[#07111f]">
                +998 93 136 19 20
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-bold text-slate-500">Email</p>

              <p className="mt-2 text-xl font-black text-[#07111f]">
                info@jminnv.uz
              </p>
            </div>

            <Link
              href="https://t.me/jminnv"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-full bg-[#08a982] px-8 py-4 text-sm font-black text-white shadow-[0_18px_40px_rgba(8,169,130,0.28)] transition hover:-translate-y-1 hover:bg-[#079774]"
            >
              <TelegramIcon />
              Написать в Telegram
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[38px] border border-slate-200 bg-white p-8 shadow-[0_35px_100px_rgba(15,23,42,0.08)] md:p-10"
        >
          <div className="grid gap-5">
            <div>
              <label className="text-sm font-bold text-slate-600">
                Ваше имя
              </label>

              <input
                name="name"
                type="text"
                required
                placeholder="Введите имя"
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-[#f7fbff] px-5 py-4 text-[#07111f] outline-none transition focus:border-[#08a982]"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-600">
                Телефон
              </label>

              <input
                name="phone"
                type="tel"
                required
                placeholder="+998"
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-[#f7fbff] px-5 py-4 text-[#07111f] outline-none transition focus:border-[#08a982]"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-600">
                Услуга
              </label>

              <select
                name="service"
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-[#f7fbff] px-5 py-4 text-[#07111f] outline-none transition focus:border-[#08a982]"
              >
                <option>CRM система</option>
                <option>Web разработка</option>
                <option>Мобильное приложение</option>
                <option>Автоматизация бизнеса</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-600">
                Сообщение
              </label>

              <textarea
                name="message"
                placeholder="Кратко опишите задачу"
                rows={5}
                className="mt-3 w-full resize-none rounded-2xl border border-slate-200 bg-[#f7fbff] px-5 py-4 text-[#07111f] outline-none transition focus:border-[#08a982]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-3 rounded-full bg-[#08a982] px-8 py-4 text-sm font-black text-white shadow-[0_18px_40px_rgba(8,169,130,0.28)] transition hover:-translate-y-1 hover:bg-[#079774] disabled:opacity-70"
            >
              {loading ? "Отправляем..." : "Отправить заявку"}
            </button>

            {success && (
              <p className="text-sm font-bold text-green-600">
                Заявка успешно отправлена
              </p>
            )}

            {error && (
              <p className="text-sm font-bold text-red-500">
                {error}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}