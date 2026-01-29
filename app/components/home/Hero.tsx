import { CheckCircle2, Play } from "lucide-react";
import { ROUTES, SOCIAL } from "./data";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="flex-1 max-w-xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Prepare-se para o <span className="text-yellow-400">alto rendimento</span>
        </h1>

        <p className="text-lg text-white/75 mb-8">
          Avaliações físicas completas e treinos individualizados para atletas que buscam o máximo desempenho.
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
  );
}
