import { FaBolt, FaComments, FaRobot, FaCheckCircle } from "react-icons/fa";

export default function Services() {
  const layanan = [
    {
      icon: <FaBolt size={38} />,
      title: "Pembuatan Aplikasi Cepat",
      desc:
        "Web & Mobile Apps menggunakan teknologi modern seperti Spring Boot, Next.js, dan Flutter. Sistem siap scale & Go-Live cepat!",
    },
    {
      icon: <FaComments size={38} />,
      title: "Konsultasi Teknologi",
      desc:
        "Analisis kebutuhan bisnis, arsitektur scalable, dan transformasi digital untuk UMKM hingga startup tech.",
    },
    {
      icon: <FaRobot size={38} />,
      title: "Integrasi AI & Automation",
      desc:
        "Chatbot AI, workflow automation, dan analitik machine learning untuk efisiensi operasional bisnis.",
    },
  ];

  const benefits = [
    "Maintenance & Support",
    "Server & Deployment",
    "Desain UI/UX Modern",
    "Dokumentasi Proyek",
    "Teknologi & Tools Terbaru",
  ];

  const pricing = [
    {
      title: "Landing Page",
      desc: "Profil bisnis + Call to Action + SEO ready",
    },
    {
      title: "Company Website",
      desc: "Multi-page, admin panel opsional, scalable",
    },
    {
      title: "Custom App",
      desc: "Sistem bisnis sesuai kebutuhan & siap berkembang",
    },
  ];


  return (
    <section className="py-24 bg-neutral-950 text-center px-6">

      {/* Header */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text
      bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
        Layanan Nexode
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-16">
        Solusi digital modern untuk bisnis yang ingin berkembang cepat & efisien.
      </p>

      {/* Service Cards */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto mb-28">
        {layanan.map((s, i) => (
          <div key={i}
            className="bg-neutral-900 p-10 h-full rounded-2xl border border-neutral-800
            hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >
            <div className="text-cyan-400 mb-6 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Section */}
      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-10">
        Kenapa Pilih Nexode?
      </h3>
      <div className="grid gap-4 max-w-xl mx-auto text-gray-300 text-sm mb-24">
        {benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-3 justify-center">
            <FaCheckCircle className="text-cyan-400" />
            <span>{b}</span>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
        Dapatkan Penawaran
      </h3>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16">
        {pricing.map((p, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-8 rounded-xl border border-neutral-800
            hover:border-cyan-500/50 transition-all shadow-lg"
          >
            <h4 className="text-xl font-bold text-cyan-400 mb-2">{p.title}</h4>
            <p className="text-gray-400 text-sm mb-6">{p.desc}</p>
            <a
              href={`https://wa.me/6281312582737?text=Halo%20Nexode,%20saya%20tertarik%20dengan%20${encodeURIComponent(p.title)}%20dan%20ingin%20tanya%20harga%20lebih%20lanjut`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 w-full block text-black
              font-semibold py-3 rounded-xl transition-all"
            >
              Dapatkan Penawaran 💬
            </a>
          </div>
        ))}
      </div>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Setiap proyek kami sesuaikan dengan kebutuhan dan skala bisnis Anda.
        Dapatkan estimasi biaya terbaik melalui konsultasi gratis.
      </p>

      {/* CTA Bottom */}
      <a
        href="https://wa.me/6281312582737?text=Halo%20Nexode,%20saya%20ingin%20mulai%20proyek"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl
        text-black font-semibold shadow-xl transition-all"
      >
        Konsultasi Gratis Sekarang 🚀
      </a>
    </section>
  );
}
