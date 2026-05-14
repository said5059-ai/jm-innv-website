const stats = [
  { value: "3+", label: "лет опыта в digital-разработке" },
  { value: "15+", label: "реализованных проектов" },
  { value: "24/7", label: "поддержка и сопровождение" },
  { value: "100%", label: "фокус на бизнес-результате" },
];

export default function Stats() {
  return (
    <section className="bg-[#f7fbff]">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.07)] md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.value}
              className="rounded-[26px] border border-slate-100 bg-[#f8fbff] p-7"
            >
              <p className="text-4xl font-black text-[#07111f]">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}