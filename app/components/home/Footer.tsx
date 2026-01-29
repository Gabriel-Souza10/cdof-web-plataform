import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { ROUTES, SOCIAL } from "./data";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-bold text-2xl mb-3">FUTEBOL CIÊNCIA</h3>
          <p className="text-sm text-white/70">
            Preparação física e desempenho esportivo para atletas de todos os níveis.
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
              <a href={ROUTES.aulasOnline} className="hover:underline transition">
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
  );
}
