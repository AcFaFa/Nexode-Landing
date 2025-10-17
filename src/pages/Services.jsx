export default function Services() {
  const layanan = [
    {
      title: "Pembuatan Aplikasi Cepat",
      desc: "Web & Mobile Apps menggunakan teknologi modern seperti Spring Boot dan React.",
    },
    {
      title: "Konsultasi Teknologi",
      desc: "Analisis kebutuhan bisnis dan arsitektur sistem agar skalabel dan efisien.",
    },
    {
      title: "Integrasi AI",
      desc: "Tingkatkan efisiensi bisnis dengan solusi berbasis kecerdasan buatan.",
    },
  ];

  return (
    <section className="py-20 px-10 text-center min-h-[80vh]">
      <h2 className="text-3xl font-bold mb-12">Layanan Kami</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {layanan.map((s, i) => (
          <div key={i} className="bg-neutral-900 p-8 rounded-2xl shadow-lg border border-cyan-500/10 hover:border-cyan-400/30 transition">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
