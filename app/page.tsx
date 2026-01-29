"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { Menu, X, ArrowRight, CheckCircle2, Play } from "lucide-react";

type Unidade = { nome: string; imagem: string };

const ROUTES = {
  aulasOnline: "/AulasOnline",
  gestao: "/logingestao",
  aluno: "/aluno",
  cadastro: "/cadastro",
} as const;

const SOCIAL = {
  whatsapp: "https://wa.me/5511961171914",
  whatsappAtleta:
    "https://wa.me/5511961171914?text=Ol%C3%A1,%20gostaria%20de%20ser%20atleta!",
  instagram: "https://www.instagram.com/cienciadofutebol/",
  tiktok: "https://www.tiktok.com/@cienciadofutebol_",
} as const;

const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#unidades", label: "Unidades" },
  { href: ROUTES.aulasOnline, label: "Aulas Online" },
  { href: ROUTES.gestao, label: "Gestão" },
] as const;

const MOBILE_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#unidades", label: "Unidades" },
  { href: ROUTES.aulasOnline, label: "Aulas Online" },
  { href: ROUTES.gestao, label: "Gestão" },
  { href: ROUTES.cadastro, label: "Cadastre-se" },
] as const;

const UNIDADES: Unidade[] = [
  { nome: "Zona Norte", imagem: "/Norte.jpeg" },
  { nome: "Zona Leste", imagem: "/Leste.jpeg" },
  { nome: "Barra da Tijuca", imagem: "/CDF.RJ.jpg" },
  { nome: "Santos", imagem: "/Santos.jpeg" },
  { nome: "Zona Oeste", imagem: "/Oeste.jpeg" },
  { nome: "Zona Sul", imagem: "/Sul.jpeg" },
  { nome: "Mogi", imagem: "/CDF.MOGI.jpg" },
  { nome: "ABC", imagem: "/CDF.ABC.jpg" },
];

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-white/85 hover:text-white text-[15px] font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/60 rounded"
    >
      {children}
    </a>
  );
}

function IconButton({
  href,
  label,
  children,
  className = "",
  external = true,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={[
        "flex items-center justify-center rounded-xl p-2 bg-white/10 hover:bg-white/20 transition",
        "focus:outline-none focus:ring-2 focus:ring-yellow-400/60",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function PrimaryCTA({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="bg-yellow-400 text-black px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-yellow-300 transition inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
    >
      {children}
    </a>
  );
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <button
        className="absolute top-5 right-5 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/60 rounded-xl"
        onClick={onClose}
        aria-label="Fechar menu"
      >
        <X size={36} />
      </button>

      <img src="/Logo.png" alt="Logo" className="h-14 mb-6" />

      <nav className="flex flex-col items-center gap-6 mb-8">
        {MOBILE_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-white text-2xl font-semibold hover:text-yellow-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/60 rounded"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex gap-5 mb-8">
        <a
          href={SOCIAL.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex items-center justify-center rounded-full p-3 bg-white/10 hover:bg-green-500/80 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
        >
          <FaWhatsapp className="h-6 w-6 text-white" />
        </a>
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center justify-center rounded-full p-3 bg-white/10 hover:bg-pink-500/80 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
        >
          <FaInstagram className="h-6 w-6 text-white" />
        </a>
        <a
          href={SOCIAL.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="flex items-center justify-center rounded-full p-3 bg-white/10 hover:bg-white/70 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
        >
          <FaTiktok className="h-6 w-6 text-white" />
        </a>
      </div>

      <a
        href={SOCIAL.whatsappAtleta}
        className="bg-yellow-400 text-black px-7 py-3 rounded-xl font-semibold text-lg hover:bg-yellow-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
        onClick={onClose}
      >
        Quero ser atleta
      </a>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const unidadesFiltradas = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return UNIDADES;
    return UNIDADES.filter((u) => u.nome.toLowerCase().includes(q));
  }, [query]);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all ${
          scrolled
            ? "backdrop-blur bg-black/60 border-b border-white/10"
            : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
          <div className="flex items-center gap-3">
            <img src="/Logo.png" alt="Logo" className="h-10" />
            <span className="hidden sm:inline text-white/70 tracking-[0.25em] text-[11px]">
              ALTO RENDIMENTO
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <IconButton href={SOCIAL.whatsapp} label="WhatsApp">
              <FaWhatsapp className="h-5 w-5 text-white" />
            </IconButton>

            <IconButton href={SOCIAL.instagram} label="Instagram">
              <FaInstagram className="h-5 w-5 text-white" />
            </IconButton>

            <PrimaryCTA href={SOCIAL.whatsappAtleta}>
              Quero ser atleta <ArrowRight className="h-4 w-4" />
            </PrimaryCTA>
          </div>

          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/60 rounded-xl p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>

        <MobileMenu open={menuOpen} onClose={closeMenu} />
      </header>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Prepare-se para o{" "}
            <span className="text-yellow-400">alto rendimento</span>
          </h1>

          <p className="text-lg text-white/75 mb-8">
            Avaliações físicas completas e treinos individualizados para atletas
            que buscam o máximo desempenho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={SOCIAL.whatsappAtleta}
              className="bg-yellow-400 text-black px-7 py-3 rounded-2xl font-semibold text-lg hover:bg-yellow-300 transition text-center inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
            >
              <CheckCircle2 className="h-5 w-5" /> Quero ser atleta
            </a>

            <a
              href={ROUTES.aluno}
              className="border border-white/15 bg-white/5 text-white px-7 py-3 rounded-2xl font-semibold text-lg hover:bg-white/10 transition text-center inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
            >
              <Play className="h-5 w-5" /> Já sou aluno
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:flex gap-4 sm:gap-6 text-sm text-white/70">
            {["+400 atletas", "8 unidades", "+10 anos"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-yellow-400" />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center mt-10 lg:mt-0">
          <div className="w-full max-w-xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <video
              className="w-full h-full object-contain"
              poster="/Fundo site Ciencia.png"
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
            >
              <source src="/CienciaFutebol.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
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
              <div className="text-lg text-gray-700 font-medium">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
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
              <div className="text-sm opacity-80 leading-none">
                de experiência
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 border-b-4 border-black/80 inline-block pb-2">
              Sobre a Ciência do Futebol
            </h2>

            <p className="text-gray-800 text-lg mb-6">
              Especialistas em preparação física de atletas, com avaliações
              completas e cronogramas de treino individualizados para alcançar o
              máximo potencial.
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

      {/* DEPOIMENTOS */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-extrabold mb-8">
            O que nossos atletas dizem
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {["aluno1.mp4", "aluno2.mp4", "aluno3.mp4"].map((video) => (
              <div
                key={video}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
              >
                <video
                  className="w-full h-64 object-cover rounded-2xl"
                  controls
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                >
                  <source src={`/${video}`} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIDADES */}
      <section id="unidades" className="py-20 px-4 bg-gray-50 text-center">
        <h2 className="text-4xl font-extrabold mb-3 text-black">
          Nossas Unidades
        </h2>
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
                <p className="text-gray-600 mt-1 text-sm">
                  Agende sua avaliação
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-2xl mb-3">FUTEBOL CIÊNCIA</h3>
            <p className="text-sm text-white/70">
              Preparação física e desempenho esportivo para atletas de todos os
              níveis.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Links Rápidos</h4>
            <ul className="space-y-2 text-white/80 text-base">
              <li>
                <a href="#sobre" className="hover:underline transition">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#unidades" className="hover:underline transition">
                  Unidades
                </a>
              </li>
              <li>
                <a href={ROUTES.gestao} className="hover:underline transition">
                  Gestão
                </a>
              </li>
              <li>
                <a
                  href={ROUTES.aulasOnline}
                  className="hover:underline transition"
                >
                  Aulas Online
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Contato</h4>
            <p className="text-base">📞 (11) 96117-1914</p>
            <p className="text-base">📍 São Paulo, SP</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Siga-nos</h4>
            <div className="flex gap-4 mt-2">
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full bg-white/10 hover:bg-green-500/80 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 hover:bg-pink-500/80 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href={SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2 rounded-full bg-white/10 hover:bg-white/70 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
              >
                <FaTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-10 text-white/50">
          © 2025 Futebol Ciência. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
