const clients = [
  "Банковский сектор",
  "Ритейл",
  "Медицина",
  "Логистика",
  "Недвижимость",
  "Производство",
];

export default function ClientsStrip() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[34px] border border-slate-200 bg-[#f7fbff] p-8 shadow-[0_25px_80px_rgba(15,23,42,0.06)]">
          <p className="text-center text-sm font-black uppercase tracking-[0.28em] text-slate-500">
            Нам доверяют компании из разных сфер
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-center text-sm font-black uppercase tracking-wide text-slate-500 transition hover:-translate-y-1 hover:border-[#08a982]/30 hover:text-[#08a982]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}