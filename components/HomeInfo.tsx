const items = [
  "Davlat tili portali haqida",
  "Boshqaruv va mas’ul xodimlar haqida ma’lumot",
  "Atamalar komissiyasi haqida ma’lumot",
  "Davlat organlarining davlat tili bo‘yicha maslahatchilari ro‘yxati",
  "Maslahatchilar muvofiqlashtirish kengashi haqida ma’lumot",
  "Davlat tilini rivojlantirish bo‘yicha ishchi guruhlar",
  "Portal tomonidan taqdim qilinadigan xizmatlar ro‘yxati",
  "O‘zbek tilini rivojlantirish jamg‘armasi nashrlari",
  "Davlat til markazi tomonidan chop etilgan kitoblar ro‘yxati",
];

export default function HomeInfo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-6">
          <p className="text-sm font-bold text-[#006be6]">Bosh sahifa</p>
          <h3 className="mt-2 text-3xl font-black text-[#111827]">
            Asosiy ma’lumotlar
          </h3>
          <p className="mt-3 max-w-2xl text-gray-500">
            Ushbu sahifa davlat tili portali haqida asosiy ma’lumotlar,
            tashkilotlar, xizmatlar va rasmiy resurslarni o‘z ichiga oladi.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-2xl bg-[#f3f7fb] p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#006be6] text-sm font-black text-white">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-6 text-[#111827]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}