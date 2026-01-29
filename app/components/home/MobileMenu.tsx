"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { MOBILE_ITEMS, SOCIAL } from "./data";

export default function MobileMenu({
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
