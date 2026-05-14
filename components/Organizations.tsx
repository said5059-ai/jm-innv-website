const orgs = [
  "Davlat tilini rivojlantirish departamenti",
  "Atamalar komissiyasi",
  "Davlat tilida ish yuritish markazi",
  "O‘zbek tilini rivojlantirish jamg‘armasi",
];

export default function Organizations() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6">
        <p className="text-sm font-bold text-[#006be6]">
          Tashkilotlar
        </p>

        <h3 className="mt-2 text-3xl font-black text-[#111827]">
          Portal bilan bog‘liq tashkilotlar
        </h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {orgs.map((item) => (
          <div
            key={item}
            className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <h4 className="text-lg font-black text-[#111827]">
              {item}
            </h4>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Davlat tili rivoji bilan bog‘liq rasmiy tashkilot.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}