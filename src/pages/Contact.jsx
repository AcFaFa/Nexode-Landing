import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-neutral-950 min-h-[80vh] text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Hubungi Kami
      </h2>
      <p className="text-gray-400 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
        Konsultasi gratis untuk bisnis yang ingin bertransformasi secara digital 🚀
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Contact Form */}
        <form className="bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-lg text-left">
          <label className="block text-gray-300 text-sm mb-1">Nama</label>
          <input
            type="text"
            className="w-full mb-4 p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-200 focus:border-cyan-500 outline-none text-sm sm:text-base"
            placeholder="Nama Anda"
          />

          <label className="block text-gray-300 text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full mb-4 p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-200 focus:border-cyan-500 outline-none text-sm sm:text-base"
            placeholder="email@contoh.com"
          />

          <label className="block text-gray-300 text-sm mb-1">Pesan</label>
          <textarea
            rows="4"
            className="w-full mb-6 p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-200 focus:border-cyan-500 outline-none text-sm sm:text-base"
            placeholder="Ceritakan kebutuhan proyek Anda..."
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-xl transition-all shadow-md"
          >
            Kirim Pesan
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center text-gray-300 gap-4 sm:gap-6">

          <a
            href="https://wa.me/6281312582737"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold p-5 rounded-xl transition-all text-sm sm:text-base"
          >
            <FaWhatsapp className="text-xl" />
            Chat WhatsApp
          </a>

          <div className="flex items-center gap-4 bg-neutral-900 p-5 rounded-xl border border-neutral-800 text-sm sm:text-base">
            <FaEnvelope className="text-cyan-400 text-lg" />
            <span>hello@nexode.tech</span>
          </div>

          <div className="flex items-center gap-4 bg-neutral-900 p-5 rounded-xl border border-neutral-800 text-sm sm:text-base">
            <FaPhone className="text-cyan-400 text-lg" />
            <span>+62 813-1258-2737</span>
          </div>

          <div className="flex items-start gap-4 bg-neutral-900 p-5 rounded-xl border border-neutral-800 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-cyan-400 text-lg" />
            <span>Remote — Seluruh Indonesia 🇮🇩</span>
          </div>

        </div>

      </div>
    </section>
  );
}
