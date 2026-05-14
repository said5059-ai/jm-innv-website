import Link from "next/link";

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 fill-current"
    >
      <path d="M21.7 3.3c.3-.9-.5-1.6-1.3-1.3L2.9 8.8c-1 .4-.9 1.8.1 2.1l4.5 1.4 1.7 5.3c.3.9 1.4 1.1 2 .4l2.5-2.6 4.7 3.5c.8.6 1.9.1 2.1-.9l3.2-14.7ZM8.1 11.7l9.7-6.1-7.8 7.4-.3 3.1-1.6-4.4Z" />
    </svg>
  );
}

export default function FloatingTelegram() {
  return (
    <Link
      href="https://t.me/your_username"
      target="_blank"
      aria-label="Telegram"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#08a982] text-white shadow-[0_18px_45px_rgba(8,169,130,0.35)] transition hover:-translate-y-1 hover:bg-[#079774]"
    >
      <TelegramIcon />
    </Link>
  );
}