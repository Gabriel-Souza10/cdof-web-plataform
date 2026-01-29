import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="w-full bg-white text-black py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4 items-center">
        <div className="flex-1 w-full relative">
          <img
            src="/Atleta.cdof-1.jpg"
            alt="Atleta ou treino"
            className="rounded-3xl w-full max-w-150 h-105 object-cover bg-gray-200 shadow"
          />
          <div className="absolute -bottom-6 -right-6 bg-black text-white px-6 py-5 rounded-3xl shadow-lg ring-1 ring-white/10">
            <div className="text-3xl font-extrabold">+10 Anos</div>
            <div className="text-sm opacity-80 leading-none">de experiência</div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 border-b-4 border-black/80 inline-block pb-2">
            Sobre a Ciência do Futebol
          </h2>

          <p className="text-gray-800 text-lg mb-6">
            Especialistas em preparação física de atletas, com avaliações completas e cronogramas de treino individualizados
            para alcançar o máximo potencial.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "Protocolos baseados em evidências",
              "Equipe com +50 profissionais",
              "Planos sob medida",
              "Resultados acompanhados em tempo real",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-gray-900">
                <CheckCircle2 className="h-5 w-5 text-black" /> {f}
              </li>
            ))}
          </ul>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-2xl font-semibold text-lg shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-black/30"
            >
              Conheça Nossa História
            </a>
            <a
              href="#unidades"
              className="border-2 border-black px-6 py-3 rounded-2xl font-semibold text-lg text-black bg-white hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-black/30"
            >
              Nossas Unidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
