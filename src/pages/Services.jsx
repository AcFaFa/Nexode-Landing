import { FaBolt, FaComments, FaRobot } from "react-icons/fa";

export default function Services() {
  const layanan = [
    {
      icon: <FaBolt size={38} />,
      title: "Pembuatan Aplikasi Cepat",
      desc:
        "Web & Mobile Apps menggunakan teknologi modern seperti Spring Boot, Next.js, dan Flutter. Aplikasi cepat jadi siap Go-Live!",
    },
    {
      icon: <FaComments size={38} />,
      title: "Konsultasi Teknologi",
      desc:
        "Analisis kebutuhan bisnis, arsitektur sistem efisien, dan solusi scalable untuk UMKM maupun startup.",
    },
    {
      icon: <FaRobot size={38} />,
      title: "Integrasi AI & Automation",
      desc:
        "Optimalkan operasional bisnis dengan AI chatbot, automation, dan analitik berbasis machine learning.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 text-center px-6">
      
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
        Layanan Kami
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-16">
        Solusi digital ideal untuk bisnis modern — cepat, scalable, dan berkualitas tinggi.
      </p>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {layanan.map((s, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >
            <div className="text-cyan-400 mb-6 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Bottom */}
      <a
        href="https://wa.me/6281312582737?text=Halo%20Nexode,%20saya%20butuh%20informasi%20layanan"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-16 inline-block bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-black font-semibold shadow-xl transition-all"
      >
        Konsultasi Gratis Sekarang 🚀
      </a>
    </section>
  );
}
