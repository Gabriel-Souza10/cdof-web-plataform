"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { NAV_ITEMS, SOCIAL } from "./data";
import MobileMenu from "./MobileMenu";

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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
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
          <a
            href={SOCIAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center justify-center rounded-xl p-2 bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
          >
            <FaWhatsapp className="h-5 w-5 text-white" />
          </a>

          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center rounded-xl p-2 bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
          >
            <FaInstagram className="h-5 w-5 text-white" />
          </a>

          <a
            href={SOCIAL.whatsappAtleta}
            className="bg-yellow-400 text-black px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-yellow-300 transition inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
          >
            Quero ser atleta <ArrowRight className="h-4 w-4" />
          </a>
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
  );
}
