export default function Metrics() {
  return (
    <section className="w-full bg-linear-to-b from-white to-gray-100 text-black py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
        {[
          { label: "+400", desc: "Alunos" },
          { label: "8", desc: "Unidades" },
          { label: "+10", desc: "Anos no mercado" },
        ].map((item) => (
          <div
            key={item.desc}
            className="bg-white rounded-3xl shadow border border-black/5 text-center px-8 py-10 hover:shadow-lg transition"
          >
            <div className="text-5xl font-extrabold mb-2">{item.label}</div>
            <div className="text-lg text-gray-700 font-medium">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
