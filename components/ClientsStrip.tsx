const clients = [
  {
    title: "Банковский сектор",
    text: "CRM, аналитика, автоматизация заявок",
    icon: "01",
  },
  {
    title: "Ритейл",
    text: "Продажи, склад, клиенты и loyalty-системы",
    icon: "02",
  },
  {
    title: "Медицина",
    text: "Записи, пациенты, CRM и уведомления",
    icon: "03",
  },
  {
    title: "Логистика",
    text: "Маршруты, заявки, статусы и отчётность",
    icon: "04",
  },
  {
    title: "Недвижимость",
    text: "Лиды, объекты, сделки и аналитика",
    icon: "05",
  },
  {
    title: "Производство",
    text: "Процессы, ERP, контроль и автоматизация",
    icon: "06",
  },
];

export default function ClientsStrip() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#08a982]">
            INDUSTRIES
          </p>

          <h2 className="mt-5 text-4xl font-black text-[#07111f] md:text-5xl">
            Работаем с компаниями
            <span className="text-[#08a982]"> разных сфер</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client.title}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-2 hover:border-[#08a982]/30"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#08a982] via-cyan-400 to-[#08a982]" />

              <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-[#08a982]/10 blur-3xl transition duration-700 group-hover:scale-150" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#08a982]/10 text-sm font-black text-[#08a982]">
                {client.icon}
              </div>

              <h3 className="relative mt-7 text-xl font-black text-[#07111f]">
                {client.title}
              </h3>

              <p className="relative mt-4 leading-7 text-slate-600">
                {client.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}