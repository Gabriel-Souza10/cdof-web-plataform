"use client";

import React, { useMemo, useState } from "react";
import { UNIDADES } from "./data";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function Units() {
  const [query, setQuery] = useState("");

  const unidadesFiltradas = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return UNIDADES;
    return UNIDADES.filter((u) => u.nome.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="unidades" className="py-20 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold mb-3 text-black">Nossas Unidades</h2>
      <p className="text-gray-700 mb-8 text-lg">
        Estamos presentes em 8 unidades estrategicamente localizadas.
      </p>

      <div className="max-w-3xl mx-auto mb-10">
        <div className="flex items-center gap-3 bg-white rounded-2xl shadow px-4 py-3 border border-black/10">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por região (ex: Zona Sul, ABC)"
            className="w-full bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
            aria-label="Buscar unidades"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {unidadesFiltradas.map((unidade) => (
          <a
            key={unidade.nome}
            href={`#unidade-${slugify(unidade.nome)}`}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl group border border-black/5 text-left focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
          >
            <div className="h-48 w-full overflow-hidden bg-gray-200">
              <img
                src={unidade.imagem}
                alt={unidade.nome}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="py-6 px-5">
              <h3 className="font-bold text-xl sm:text-2xl text-black">
                Unidade {unidade.nome}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">Agende sua avaliação</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
