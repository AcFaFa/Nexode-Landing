import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-center min-h-[80vh]">

      {/* Header */}
      <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Hubungi Kami
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-16">
        Siap membantu kebutuhan digital bisnis Anda — konsultasi gratis & tanpa komitmen.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <form className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-lg text-left">
          <label className="block text-gray-300 text-sm mb-1">Nama</label>
          <input
            type="text"
            className="w-full mb-4 p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-200 focus:border-cyan-500 outline-none"
            placeholder="Nama Anda"
          />

          <label className="block text-gray-300 text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full mb-4 p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-200 focus:border-cyan-500 outline-none"
            placeholder="email@contoh.com"
          />

          <label className="block text-gray-300 text-sm mb-1">Pesan</label>
          <textarea
            rows="4"
            className="w-full mb-6 p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-200 focus:border-cyan-500 outline-none"
            placeholder="Ceritakan proyek Anda..."
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-xl transition-all shadow-md"
          >
            Kirim Pesan
          </button>
        </form>

        {/* Info Contact */}
        <div className="flex flex-col justify-center text-gray-300 gap-6">

          <div className="flex items-center gap-4 bg-neutral-900 p-5 rounded-xl border border-neutral-800">
            <FaEnvelope className="text-cyan-400 text-xl" />
            <span>hello@nexode.tech</span>
          </div>

          <div className="flex items-center gap-4 bg-neutral-900 p-5 rounded-xl border border-neutral-800">
            <FaPhone className="text-cyan-400 text-xl" />
            <span>+62 812-3456-7890</span>
          </div>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold p-5 rounded-xl transition-all"
          >
            <FaWhatsapp className="text-xl" />
            Chat via WhatsApp
          </a>

          <div className="flex items-start gap-4 bg-neutral-900 p-5 rounded-xl border border-neutral-800">
            <FaMapMarkerAlt className="text-cyan-400 text-xl" />
            <span>Indonesia 🇮🇩 — Remote & Flexible</span>
          </div>
        </div>
      </div>

    </section>
  );
}
