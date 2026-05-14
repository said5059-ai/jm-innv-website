const roadmap = [
  {
    title: "MVP",
    text: "Portal maketi, asosiy bo‘limlar va navigatsiya.",
  },
  {
    title: "Beta",
    text: "Lug‘atlar, kutubxona va sheva ma’lumotlari.",
  },
  {
    title: "Full portal",
    text: "Online xizmatlar va to‘liq ekotizim.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <h3 className="mb-8 text-4xl font-black">
        Loyiha bosqichlari
      </h3>

      <div className="grid gap-5 md:grid-cols-3">

        {roadmap.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/10 p-6"
          >

            <h4 className="text-2xl font-black text-cyan-300">
              {item.title}
            </h4>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {item.text}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}