export default function PromoBar() {
  return (
    <section className="border-b border-slate-200 bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <p className="flex items-center gap-3 text-sm font-semibold text-slate-600">
          <span className="h-2 w-2 rounded-full bg-[#08a982]" />
          Бесплатная консультация по CRM, сайтам и автоматизации бизнеса
        </p>

        <a
          href="#contact"
          className="hidden rounded-full border border-[#08a982]/40 px-8 py-3 text-sm font-bold text-[#047a62] transition hover:bg-[#08a982] hover:text-white md:inline-flex"
        >
          Оставить заявку
        </a>
      </div>
    </section>
  );
}