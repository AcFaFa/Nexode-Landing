export default function About() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-center min-h-[80vh]">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Tentang Nexode
      </h2>
      <p className="text-gray-400 max-w-xl md:max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed px-2">
        Nexode adalah IT Consultant & Software Development Agency yang
        menghadirkan solusi digital modern untuk bisnis yang ingin berkembang
        dengan cepat dan efisien.
      </p>

      {/* Company Values */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-2">
        {[
          {
            title: "Cepat & Efisien",
            desc: "Pengembangan aplikasi dengan agile process → waktu rilis lebih singkat.",
          },
          {
            title: "Harga Kompetitif",
            desc: "Ideal untuk startup dan UMKM — kualitas premium tanpa biaya berlebih.",
          },
          {
            title: "Skalabel & Modern",
            desc: "Teknologi terbaru memastikan sistem siap berkembang sesuai bisnis Anda.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-6 sm:p-8 rounded-xl border border-neutral-800 
            hover:border-cyan-400/40 hover:-translate-y-1 sm:hover:-translate-y-2 
            transition-all duration-300 shadow-lg"
          >
            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="max-w-lg sm:max-w-3xl mx-auto mt-16 sm:mt-20 text-gray-300 text-sm md:text-md leading-relaxed">
        Misi kami adalah membantu bisnis Indonesia naik level melalui
        teknologi — layanan cepat, desain modern, dan sistem yang
        mudah dikembangkan.
      </div>

      {/* CTA */}
      <a
        href="https://wa.me/6281312582737?text=Halo%20Nexode,%20saya%20ingin%20tau%20lebih%20tentang%20layanan"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 inline-block bg-cyan-500 hover:bg-cyan-600 
        transition-all px-6 sm:px-8 py-3 sm:py-4 
        rounded-xl text-black font-semibold shadow-xl text-sm sm:text-base"
      >
        Diskusi Proyek Sekarang 🚀
      </a>
    </section>
  );
}
