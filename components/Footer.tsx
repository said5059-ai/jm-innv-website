import Image from "next/image";
import Link from "next/link";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M21.7 3.3c.3-.9-.5-1.6-1.3-1.3L2.9 8.8c-1 .4-.9 1.8.1 2.1l4.5 1.4 1.7 5.3c.3.9 1.4 1.1 2 .4l2.5-2.6 4.7 3.5c.8.6 1.9.1 2.1-.9l3.2-14.7ZM8.1 11.7l9.7-6.1-7.8 7.4-.3 3.1-1.6-4.4Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030712] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#08a982]/40 to-transparent" />
      <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-[#08a982]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="relative flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
                <Image
                  src="/icon.png"
                  alt="JM INNV"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight">
                  JM INNV
                </h2>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.35em] text-white/45">
                  Digital Solutions
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/60">
              JM INNV разрабатывает CRM-системы, корпоративные сайты,
              enterprise-платформы и решения для автоматизации бизнеса.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="https://t.me/your_username"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:-translate-y-1 hover:border-[#08a982]/40 hover:bg-[#08a982]"
                aria-label="Telegram"
              >
                <TelegramIcon />
              </Link>

              <Link
                href="/contact"
                className="rounded-full bg-[#08a982] px-7 py-4 text-sm font-black text-white shadow-[0_16px_40px_rgba(8,169,130,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#079774]"
              >
                Связаться с нами
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#4ff0c7]">
              Навигация
            </h3>

            <ul className="mt-7 space-y-5 text-sm text-white/60">
              <li>
                <Link href="/about" className="inline-block transition duration-300 hover:translate-x-1 hover:text-white">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/services" className="inline-block transition duration-300 hover:translate-x-1 hover:text-white">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/projects" className="inline-block transition duration-300 hover:translate-x-1 hover:text-white">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link href="/team" className="inline-block transition duration-300 hover:translate-x-1 hover:text-white">
                  Команда
                </Link>
              </li>
              <li>
                <Link href="/blog" className="inline-block transition duration-300 hover:translate-x-1 hover:text-white">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-block transition duration-300 hover:translate-x-1 hover:text-white">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#4ff0c7]">
              Контакты
            </h3>

            <ul className="mt-7 space-y-5 text-sm text-white/60">
              <li>Ташкент, Узбекистан</li>
              <li>info@jmsoft.uz</li>
              <li className="text-2xl font-black tracking-tight text-white">
                +998 93 136 19 20
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JM INNV. Все права защищены.</p>

          <p>Enterprise IT Solutions • CRM • Automation • Web Development</p>
        </div>
      </div>
    </footer>
  );
}