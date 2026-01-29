export default function Testimonials() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-extrabold mb-8">O que nossos atletas dizem</h3>

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
  );
}
